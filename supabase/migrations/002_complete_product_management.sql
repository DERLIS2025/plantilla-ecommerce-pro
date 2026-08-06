begin;

-- ============================================================
-- 1. AMPLIAR PRODUCTS SIN PERDER LOS 8 PRODUCTOS EXISTENTES
-- ============================================================

alter table public.products
  add column if not exists short_description text,
  add column if not exists full_description text,
  add column if not exists currency text not null default 'PYG',
  add column if not exists unit text not null default 'unidad',
  add column if not exists min_order_quantity numeric(12,2) not null default 1,
  add column if not exists is_featured boolean not null default false,
  add column if not exists promo_price numeric(12,2),
  add column if not exists promo_starts_at timestamptz,
  add column if not exists promo_ends_at timestamptz,
  add column if not exists seo_title text,
  add column if not exists seo_keywords text[] not null default '{}'::text[],
  add column if not exists main_image_alt text,
  add column if not exists canonical_url text;

alter table public.products
  drop constraint if exists products_unit_check;

alter table public.products
  add constraint products_unit_check
  check (
    unit in (
      'unidad',
      'm²',
      'metro lineal',
      'docena',
      'servicio',
      'visita'
    )
  );

alter table public.products
  drop constraint if exists products_currency_check;

alter table public.products
  add constraint products_currency_check
  check (currency in ('PYG', 'USD'));

alter table public.products
  drop constraint if exists products_min_order_quantity_check;

alter table public.products
  add constraint products_min_order_quantity_check
  check (min_order_quantity > 0);

alter table public.products
  drop constraint if exists products_price_positive_check;

alter table public.products
  add constraint products_price_positive_check
  check (price > 0);

alter table public.products
  drop constraint if exists products_promo_price_check;

alter table public.products
  add constraint products_promo_price_check
  check (promo_price is null or promo_price > 0);

alter table public.products
  drop constraint if exists products_promo_dates_check;

alter table public.products
  add constraint products_promo_dates_check
  check (
    promo_starts_at is null
    or promo_ends_at is null
    or promo_ends_at >= promo_starts_at
  );

-- Compatibilidad con los productos actuales.
update public.products
set
  short_description = coalesce(short_description, description),
  full_description = coalesce(full_description, seo_description, description),
  is_featured = coalesce(is_featured, is_recommended, false),
  promo_price = case
    when is_offer = true then price
    else promo_price
  end
where
  short_description is null
  or full_description is null;

-- ============================================================
-- 2. IMÁGENES
-- ============================================================

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null
    references public.products(id)
    on delete cascade,
  image_url text not null,
  storage_path text,
  alt_text text,
  order_index integer not null default 0,
  is_primary boolean not null default false,
  file_size bigint,
  mime_type text,
  created_at timestamptz not null default now(),

  constraint product_images_order_nonnegative
    check (order_index >= 0),

  constraint product_images_file_size
    check (file_size is null or file_size <= 5242880),

  constraint product_images_mime_type
    check (
      mime_type is null
      or mime_type in (
        'image/jpeg',
        'image/png',
        'image/webp'
      )
    )
);

create index if not exists product_images_product_id_idx
  on public.product_images(product_id);

create index if not exists product_images_order_idx
  on public.product_images(product_id, order_index);

create unique index if not exists product_images_storage_path_unique
  on public.product_images(storage_path)
  where storage_path is not null;

create unique index if not exists one_primary_image_per_product_idx
  on public.product_images(product_id)
  where is_primary = true;

-- Migrar las imágenes actuales a la nueva tabla.
insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  order_index,
  is_primary
)
select
  id,
  image_url,
  coalesce(main_image_alt, name),
  0,
  true
from public.products
where image_url is not null
on conflict do nothing;

-- ============================================================
-- 3. ESCALAS DE PRECIOS
-- ============================================================

create table if not exists public.product_price_tiers (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null
    references public.products(id)
    on delete cascade,
  min_quantity numeric(12,2) not null,
  max_quantity numeric(12,2),
  price_amount numeric(12,2) not null,
  is_promo boolean not null default false,
  label text,
  order_index integer not null default 0,
  created_at timestamptz not null default now(),

  constraint product_price_tiers_min_positive
    check (min_quantity > 0),

  constraint product_price_tiers_price_positive
    check (price_amount > 0),

  constraint product_price_tiers_valid_range
    check (
      max_quantity is null
      or max_quantity >= min_quantity
    ),

  constraint product_price_tiers_order_nonnegative
    check (order_index >= 0)
);

create index if not exists product_price_tiers_product_id_idx
  on public.product_price_tiers(product_id);

create index if not exists product_price_tiers_order_idx
  on public.product_price_tiers(product_id, order_index);

-- Evitar rangos superpuestos.
create or replace function public.validate_product_price_tier_overlap()
returns trigger
language plpgsql
as $$
begin
  if exists (
    select 1
    from public.product_price_tiers existing
    where existing.product_id = new.product_id
      and existing.id <> new.id
      and numrange(
        existing.min_quantity,
        coalesce(existing.max_quantity, 'Infinity'::numeric),
        '[]'
      ) && numrange(
        new.min_quantity,
        coalesce(new.max_quantity, 'Infinity'::numeric),
        '[]'
      )
  ) then
    raise exception 'Las escalas de precio se superponen.';
  end if;

  return new;
end;
$$;

drop trigger if exists validate_price_tier_overlap
on public.product_price_tiers;

create trigger validate_price_tier_overlap
before insert or update
on public.product_price_tiers
for each row
execute function public.validate_product_price_tier_overlap();

-- ============================================================
-- 4. CARACTERÍSTICAS
-- ============================================================

create table if not exists public.product_features (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null
    references public.products(id)
    on delete cascade,
  feature_text text not null,
  order_index integer not null default 0,

  constraint product_features_text_not_blank
    check (length(trim(feature_text)) > 0),

  constraint product_features_order_nonnegative
    check (order_index >= 0)
);

create index if not exists product_features_product_id_idx
  on public.product_features(product_id, order_index);

-- Migrar benefits actuales.
insert into public.product_features (
  product_id,
  feature_text,
  order_index
)
select
  product.id,
  benefit.value,
  benefit.ordinality - 1
from public.products product
cross join lateral jsonb_array_elements_text(product.benefits)
  with ordinality as benefit(value, ordinality)
where jsonb_array_length(product.benefits) > 0
  and not exists (
    select 1
    from public.product_features existing
    where existing.product_id = product.id
  );

-- ============================================================
-- 5. ESPECIFICACIONES
-- ============================================================

create table if not exists public.product_specifications (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null
    references public.products(id)
    on delete cascade,
  spec_key text not null,
  spec_value text not null,
  order_index integer not null default 0,

  constraint product_specifications_key_not_blank
    check (length(trim(spec_key)) > 0),

  constraint product_specifications_value_not_blank
    check (length(trim(spec_value)) > 0),

  constraint product_specifications_order_nonnegative
    check (order_index >= 0)
);

create index if not exists product_specifications_product_id_idx
  on public.product_specifications(product_id, order_index);

-- ============================================================
-- 6. RECOMENDACIONES
-- ============================================================

create table if not exists public.product_recommendations (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null
    references public.products(id)
    on delete cascade,
  recommendation_text text not null,
  order_index integer not null default 0,

  constraint product_recommendations_text_not_blank
    check (length(trim(recommendation_text)) > 0),

  constraint product_recommendations_order_nonnegative
    check (order_index >= 0)
);

create index if not exists product_recommendations_product_id_idx
  on public.product_recommendations(product_id, order_index);

-- Migrar recommendations actuales.
insert into public.product_recommendations (
  product_id,
  recommendation_text,
  order_index
)
select
  product.id,
  recommendation.value,
  recommendation.ordinality - 1
from public.products product
cross join lateral jsonb_array_elements_text(product.recommendations)
  with ordinality as recommendation(value, ordinality)
where jsonb_array_length(product.recommendations) > 0
  and not exists (
    select 1
    from public.product_recommendations existing
    where existing.product_id = product.id
  );

-- ============================================================
-- 7. ROW LEVEL SECURITY
-- ============================================================

alter table public.product_images enable row level security;
alter table public.product_price_tiers enable row level security;
alter table public.product_features enable row level security;
alter table public.product_specifications enable row level security;
alter table public.product_recommendations enable row level security;

-- Lectura pública: solo relaciones de productos activos.
drop policy if exists "Public can read product images"
on public.product_images;

create policy "Public can read product images"
on public.product_images
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products
    where products.id = product_images.product_id
      and products.is_active = true
  )
);

drop policy if exists "Public can read product price tiers"
on public.product_price_tiers;

create policy "Public can read product price tiers"
on public.product_price_tiers
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products
    where products.id = product_price_tiers.product_id
      and products.is_active = true
  )
);

drop policy if exists "Public can read product features"
on public.product_features;

create policy "Public can read product features"
on public.product_features
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products
    where products.id = product_features.product_id
      and products.is_active = true
  )
);

drop policy if exists "Public can read product specifications"
on public.product_specifications;

create policy "Public can read product specifications"
on public.product_specifications
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products
    where products.id = product_specifications.product_id
      and products.is_active = true
  )
);

drop policy if exists "Public can read product recommendations"
on public.product_recommendations;

create policy "Public can read product recommendations"
on public.product_recommendations
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products
    where products.id = product_recommendations.product_id
      and products.is_active = true
  )
);

-- Quitar escritura general de staff sobre productos.
drop policy if exists "Staff can manage products"
on public.products;

-- Solo administradores pueden escribir productos.
drop policy if exists "Admins can insert products"
on public.products;

create policy "Admins can insert products"
on public.products
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "Admins can update products"
on public.products;

create policy "Admins can update products"
on public.products
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can delete products"
on public.products;

create policy "Admins can delete products"
on public.products
for delete
to authenticated
using (public.is_admin());

-- Relaciones: escritura exclusiva de administradores.
drop policy if exists "Admins can manage product images"
on public.product_images;

create policy "Admins can manage product images"
on public.product_images
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage product price tiers"
on public.product_price_tiers;

create policy "Admins can manage product price tiers"
on public.product_price_tiers
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage product features"
on public.product_features;

create policy "Admins can manage product features"
on public.product_features
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage product specifications"
on public.product_specifications;

create policy "Admins can manage product specifications"
on public.product_specifications
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage product recommendations"
on public.product_recommendations;

create policy "Admins can manage product recommendations"
on public.product_recommendations
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Permisos SQL para Data API.
grant select
on public.product_images,
   public.product_price_tiers,
   public.product_features,
   public.product_specifications,
   public.product_recommendations
to anon, authenticated;

grant insert, update, delete
on public.product_images,
   public.product_price_tiers,
   public.product_features,
   public.product_specifications,
   public.product_recommendations
to authenticated;

grant select, insert, update, delete
on public.product_images,
   public.product_price_tiers,
   public.product_features,
   public.product_specifications,
   public.product_recommendations
to service_role;

-- ============================================================
-- 8. STORAGE
-- ============================================================

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'product-images',
  'product-images',
  true,
  5242880,
  array[
    'image/jpeg',
    'image/png',
    'image/webp'
  ]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view product images"
on storage.objects;

create policy "Public can view product images"
on storage.objects
for select
to public
using (bucket_id = 'product-images');

drop policy if exists "Admins can upload product images"
on storage.objects;

create policy "Admins can upload product images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'product-images'
  and public.is_admin()
);

drop policy if exists "Admins can update product images"
on storage.objects;

create policy "Admins can update product images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'product-images'
  and public.is_admin()
)
with check (
  bucket_id = 'product-images'
  and public.is_admin()
);

drop policy if exists "Admins can delete product images"
on storage.objects;

create policy "Admins can delete product images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'product-images'
  and public.is_admin()
);

commit;

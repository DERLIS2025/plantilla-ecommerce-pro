create extension if not exists "pgcrypto";

-- =====================================================
-- FUNCIONES GENERALES
-- =====================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =====================================================
-- PERFILES ADMINISTRATIVOS
-- =====================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'editor'
    check (role in ('admin', 'editor')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
      and is_active = true
  );
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role in ('admin', 'editor')
      and is_active = true
  );
$$;

-- =====================================================
-- CATEGORÍAS
-- =====================================================

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  image_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- PRODUCTOS
-- =====================================================

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,

  name text not null,
  slug text not null unique,
  description text not null default '',
  seo_description text,

  price numeric(12,2) not null default 0 check (price >= 0),
  previous_price numeric(12,2)
    check (previous_price is null or previous_price >= 0),

  image_url text,

  benefits jsonb not null default '[]'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  related_product_slugs jsonb not null default '[]'::jsonb,

  is_offer boolean not null default false,
  is_new boolean not null default false,
  is_best_seller boolean not null default false,
  is_recommended boolean not null default false,
  includes_installation boolean not null default false,
  in_stock boolean not null default true,
  is_active boolean not null default true,

  sort_order integer not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_id_idx
  on public.products(category_id);

create index if not exists products_slug_idx
  on public.products(slug);

create index if not exists products_active_idx
  on public.products(is_active);

-- =====================================================
-- TRABAJOS REALIZADOS
-- =====================================================

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text,
  location text,
  description text,
  cover_image_url text,
  images jsonb not null default '[]'::jsonb,
  features jsonb not null default '[]'::jsonb,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- CONFIGURACIÓN GENERAL
-- =====================================================

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  setting_key text not null unique,
  setting_value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- =====================================================
-- HOME Y BANNERS
-- =====================================================

create table if not exists public.home_sections (
  id uuid primary key default gen_random_uuid(),
  section_key text not null unique,
  title text,
  subtitle text,
  content jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.banners (
  id uuid primary key default gen_random_uuid(),
  title text,
  subtitle text,
  desktop_image_url text,
  mobile_image_url text,
  button_label text,
  button_url text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- PRESUPUESTOS
-- =====================================================

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  customer_phone text,
  customer_email text,
  message text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'quoted', 'closed', 'cancelled')),
  total numeric(12,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references public.quotes(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity numeric(12,2) not null default 1,
  unit_price numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists quote_items_quote_id_idx
  on public.quote_items(quote_id);

-- =====================================================
-- LOGS
-- =====================================================

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- =====================================================
-- UPDATED_AT TRIGGERS
-- =====================================================

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists categories_set_updated_at on public.categories;
create trigger categories_set_updated_at
before update on public.categories
for each row execute function public.set_updated_at();

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

drop trigger if exists banners_set_updated_at on public.banners;
create trigger banners_set_updated_at
before update on public.banners
for each row execute function public.set_updated_at();

drop trigger if exists quotes_set_updated_at on public.quotes;
create trigger quotes_set_updated_at
before update on public.quotes
for each row execute function public.set_updated_at();

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.projects enable row level security;
alter table public.site_settings enable row level security;
alter table public.home_sections enable row level security;
alter table public.banners enable row level security;
alter table public.quotes enable row level security;
alter table public.quote_items enable row level security;
alter table public.activity_logs enable row level security;

-- Lectura pública de contenido activo

create policy "Public can read active categories"
on public.categories
for select
to anon, authenticated
using (is_active = true);

create policy "Public can read active products"
on public.products
for select
to anon, authenticated
using (is_active = true);

create policy "Public can read published projects"
on public.projects
for select
to anon, authenticated
using (is_published = true);

create policy "Public can read active home sections"
on public.home_sections
for select
to anon, authenticated
using (is_active = true);

create policy "Public can read active banners"
on public.banners
for select
to anon, authenticated
using (is_active = true);

create policy "Public can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

-- Gestión administrativa

create policy "Staff can read all profiles"
on public.profiles
for select
to authenticated
using (public.is_staff());

create policy "Admins can manage profiles"
on public.profiles
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Staff can manage categories"
on public.categories
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage products"
on public.products
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage projects"
on public.projects
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage settings"
on public.site_settings
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage home sections"
on public.home_sections
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage banners"
on public.banners
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Anyone can create quotes"
on public.quotes
for insert
to anon, authenticated
with check (true);

create policy "Anyone can create quote items"
on public.quote_items
for insert
to anon, authenticated
with check (true);

create policy "Staff can manage quotes"
on public.quotes
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can manage quote items"
on public.quote_items
for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

create policy "Staff can read logs"
on public.activity_logs
for select
to authenticated
using (public.is_staff());

create policy "Staff can create logs"
on public.activity_logs
for insert
to authenticated
with check (public.is_staff());

-- Permitir uso de tablas mediante Data API

grant usage on schema public to anon, authenticated;

grant select on public.categories to anon, authenticated;
grant select on public.products to anon, authenticated;
grant select on public.projects to anon, authenticated;
grant select on public.site_settings to anon, authenticated;
grant select on public.home_sections to anon, authenticated;
grant select on public.banners to anon, authenticated;

grant insert on public.quotes to anon, authenticated;
grant insert on public.quote_items to anon, authenticated;

grant select, insert, update, delete
on public.profiles,
   public.categories,
   public.products,
   public.projects,
   public.site_settings,
   public.home_sections,
   public.banners,
   public.quotes,
   public.quote_items,
   public.activity_logs
to authenticated;

import { createClient } from '@/lib/supabase/server';

export async function getPublicProductBySlug(slug: string) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      product_images (
        id,
        image_url,
        alt_text,
        order_index,
        is_primary
      ),
      product_features (
        id,
        value,
        order_index
      ),
      product_recommendations (
        id,
        value,
        order_index
      )
    `)
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error || !product) {
    return null;
  }

  const images = [...(product.product_images ?? [])].sort(
    (a, b) =>
      Number(b.is_primary) - Number(a.is_primary) ||
      Number(a.order_index ?? 0) - Number(b.order_index ?? 0)
  );

  return {
    ...product,
    images,
    mainImage:
      images.find((image) => image.is_primary)?.image_url ??
      images[0]?.image_url ??
      '/images/product-placeholder.webp',
    features: [...(product.product_features ?? [])]
      .sort(
        (a, b) =>
          Number(a.order_index ?? 0) -
          Number(b.order_index ?? 0)
      )
      .map((item) => item.value),
    recommendations: [
      ...(product.product_recommendations ?? [])
    ]
      .sort(
        (a, b) =>
          Number(a.order_index ?? 0) -
          Number(b.order_index ?? 0)
      )
      .map((item) => item.value)
  };
}

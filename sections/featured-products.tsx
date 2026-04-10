import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/lib/data';

export function FeaturedProductsSection() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Featured</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Signature products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

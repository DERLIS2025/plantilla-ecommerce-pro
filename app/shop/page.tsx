import type { Metadata } from 'next';

import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse all premium products in our ecommerce starter catalog.'
};

export default function ShopPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-semibold">Shop</h1>
        <p className="mt-2 text-sm text-muted">Curated essentials for living, rest, and focus.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

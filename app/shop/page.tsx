import type { Metadata } from 'next';

import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Explorá plantas, macetas y artículos para jardín en Portal Verde.'
};

export default function ShopPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-bold">Catálogo</h1>
        <p className="mt-2 text-sm text-text-soft">
          Descubrí todo para tu jardín y tus espacios verdes.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

type ProductSectionProps = {
  title: string;
  products: Product[];
};

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="section-space border-b border-border/70 pb-10 last:border-none">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-text-strong sm:text-2xl">
          {title}
        </h2>

        <Link
          href="/shop"
          className="text-sm font-semibold text-dark-green transition hover:text-primary"
        >
          Ver más
        </Link>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}

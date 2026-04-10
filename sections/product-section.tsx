import Link from 'next/link';

import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

type ProductSectionProps = {
  title: string;
  products: Product[];
};

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="section-space border-b border-border/70 pb-8 last:border-none">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <Link href="/shop" className="text-sm font-semibold text-dark-green hover:text-primary">
          Ver más
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

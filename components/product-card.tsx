import Image from 'next/image';
import Link from 'next/link';

import { formatPrice } from '@/lib/data';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-3 shadow-soft">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-pearl">
          <Image
            src={product.image}
            alt={product.name}
            width={720}
            height={520}
            className="h-56 w-full object-cover"
          />
        </div>
        <div className="p-3">
          <p className="text-xs uppercase tracking-wider text-muted">{product.category}</p>
          <h3 className="mt-1 text-base font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-muted">{product.description}</p>
          <p className="mt-4 text-sm font-semibold">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}

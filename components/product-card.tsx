import Image from 'next/image';
import Link from 'next/link';

import { formatPricePYG } from '@/lib/data';
import type { Product } from '@/lib/types';

function ProductBadge({ product }: { product: Product }) {
  if (product.isOffer) return <span className="badge">Oferta</span>;
  if (product.isNew) return <span className="badge">Nuevo</span>;
  if (product.isBestSeller) return <span className="badge">Más vendido</span>;
  return null;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-border bg-card p-2 shadow-card transition hover:-translate-y-1 hover:shadow-lg sm:p-3">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-soft-green">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-28 w-full object-cover sm:h-44"
          />
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3">
          <p className="text-[10px] text-text-soft sm:text-xs">{product.category}</p>
          <ProductBadge product={product} />
        </div>

        <h3 className="mt-1 line-clamp-2 text-xs font-semibold text-text-strong sm:text-base">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-[11px] text-text-soft sm:text-sm">
          {product.description}
        </p>

        <div className="mt-2 flex items-center gap-2 sm:mt-3">
          <p className="text-sm font-bold text-dark-green sm:text-base">
            {formatPricePYG(product.price)}
          </p>

          {product.previousPrice ? (
            <p className="text-[10px] text-text-soft line-through sm:text-xs">
              {formatPricePYG(product.previousPrice)}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

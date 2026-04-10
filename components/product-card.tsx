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
    <article className="rounded-xl border border-border bg-card p-3 shadow-card">
      <Link href={`/product/${product.slug}`} className="block">
        
        <div className="relative overflow-hidden rounded-lg bg-soft-green">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-44 w-full object-cover"
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-xs text-text-soft">{product.category}</p>
          <ProductBadge product={product} />
        </div>

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold sm:text-base">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs text-text-soft sm:text-sm">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <p className="text-base font-bold text-dark-green">
            {formatPricePYG(product.price)}
          </p>

          {product.previousPrice && (
            <p className="text-xs text-text-soft line-through">
              {formatPricePYG(product.previousPrice)}
            </p>
          )}
        </div>

      </Link>
    </article>
  );
}
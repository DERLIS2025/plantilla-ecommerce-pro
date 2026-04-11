import Image from 'next/image';
import Link from 'next/link';

import { formatPricePYG } from '@/lib/data';
import type { Product } from '@/lib/types';

function ProductBadge({ product }: { product: Product }) {
  if (product.isOffer)
    return (
      <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white">
        OFERTA
      </span>
    );

  if (product.isNew)
    return (
      <span className="absolute left-2 top-2 rounded-full bg-blue-500 px-2 py-1 text-[10px] font-bold text-white">
        NUEVO
      </span>
    );

  if (product.isBestSeller)
    return (
      <span className="absolute left-2 top-2 rounded-full bg-yellow-500 px-2 py-1 text-[10px] font-bold text-white">
        TOP
      </span>
    );

  return null;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-border bg-card p-2 shadow-card transition hover:-translate-y-1 hover:shadow-lg sm:p-3">
      <Link href={`/product/${product.slug}`} className="block">
        
        {/* Imagen */}
        <div className="relative overflow-hidden rounded-lg bg-soft-green">
          <ProductBadge product={product} />

          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-28 w-full object-cover sm:h-44"
          />
        </div>

        {/* Categoría */}
        <div className="mt-2">
          <p className="text-[10px] text-text-soft sm:text-xs">
            {product.category}
          </p>
        </div>

        {/* Nombre */}
        <h3 className="mt-1 line-clamp-2 text-xs font-semibold text-text-strong sm:text-base">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="mt-1 line-clamp-2 text-[11px] text-text-soft sm:text-sm">
          {product.description}
        </p>

        {/* Precio */}
        <div className="mt-2 flex items-center gap-2 sm:mt-3">
          <p className="text-sm font-bold text-dark-green sm:text-base">
            {formatPricePYG(product.price)}
          </p>

          {product.previousPrice && (
            <p className="text-[10px] text-text-soft line-through sm:text-xs">
              {formatPricePYG(product.previousPrice)}
            </p>
          )}
        </div>

        {/* Badge instalación */}
        {product.includesInstallation && (
          <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">
            Incluye instalación
          </span>
        )}

      </Link>
    </article>
  );
}
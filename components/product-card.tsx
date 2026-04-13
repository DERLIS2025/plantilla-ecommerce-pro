import Image from 'next/image';
import Link from 'next/link';

import { formatPricePYG } from '@/lib/data';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  const whatsappNumber = '595981077600';
  const whatsappMessage = `Hola, quiero consultar por ${product.name}. ¿Me podrían dar más información, precio final y disponibilidad?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

        <div className="mt-2">
          <p className="text-[10px] text-text-soft sm:text-xs">{product.category}</p>
        </div>

        <h3 className="mt-1 line-clamp-2 text-xs font-semibold text-text-strong sm:text-base">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-[11px] text-text-soft sm:text-sm">
          {product.description}
        </p>

        <div className="mt-2 flex items-end gap-2 sm:mt-3">
          <p className="text-sm font-bold text-dark-green sm:text-base">
            {formatPricePYG(product.price)}
          </p>

          {product.previousPrice ? (
            <p className="text-[10px] text-text-soft line-through sm:text-xs">
              {formatPricePYG(product.previousPrice)}
            </p>
          ) : null}
        </div>

        {product.includesInstallation ? (
          <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">
            Incluye instalación
          </span>
        ) : null}

        <p className="mt-2 text-[11px] font-medium text-dark-green sm:text-xs">
          ✔ Trabajo garantizado
        </p>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full rounded-md bg-dark-green px-3 py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-primary"
      >
        Consultar por WhatsApp
      </a>
    </article>
  );
}

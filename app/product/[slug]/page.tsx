import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { formatPricePYG, products } from '@/lib/data';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: 'Producto no encontrado' };
  }

  return {
    title: product.name,
    description: product.seoDescription || product.description
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts =
    product.relatedProducts
      ?.map((relatedSlug) => products.find((item) => item.slug === relatedSlug))
      .filter(Boolean) || [];

  const whatsappNumber = '595981077600';
  const message = `Hola, quiero consultar sobre ${product.name}. ¿Podrían brindarme más información, precio final y disponibilidad?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="section-space">
      <div className="container-shell">
        {/* Navegación / salida clara */}
        <div className="mb-6 space-y-3">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-text-soft">
            <Link href="/" className="hover:text-dark-green">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-dark-green">
              Catálogo
            </Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-text-strong">{product.name}</span>
          </nav>

          <Link
            href="/shop"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-strong transition hover:bg-soft-green"
          >
            ← Volver al catálogo
          </Link>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[520px_minmax(0,1fr)]">
          {/* Imagen */}
          <div className="self-start">
            <div className="relative aspect-[4/4] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              {product.isOffer ? (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                  OFERTA
                </span>
              ) : null}

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>

          {/* Información */}
          <div className="lg:pt-2">
            <p className="text-sm text-text-soft">{product.category}</p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold text-text-strong">{product.name}</h1>

              {product.isOffer ? (
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  Precio promocional
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-base leading-7 text-text-soft">
              {product.seoDescription || product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-end gap-3">
                <p className="text-4xl font-extrabold text-green-700">
                  {formatPricePYG(product.price)}
                </p>

                {product.previousPrice ? (
                  <p className="pb-1 text-sm text-text-soft line-through">
                    {formatPricePYG(product.previousPrice)}
                  </p>
                ) : null}
              </div>

              {product.includesInstallation ? (
                <p className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Incluye instalación
                </p>
              ) : null}

              <div className="mt-5 grid gap-2 text-sm text-text-soft">
                <p>✔ Instalación profesional incluida</p>
                <p>✔ Materiales de alta calidad y larga duración</p>
                <p>✔ Trabajo garantizado con resultados reales</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
                >
                  Solicitar presupuesto ahora
                </a>

                <Link
                  href="/trabajos"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-strong transition hover:bg-soft-green"
                >
                  Ver trabajos realizados
                </Link>
              </div>
            </div>

            {product.benefits?.length ? (
              <div className="mt-8 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-text-strong">Beneficios</h2>
                <ul className="mt-4 space-y-3 text-sm text-text-soft">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>✔ {benefit}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {product.recommendations?.length ? (
              <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-text-strong">Recomendado para</h2>
                <ul className="mt-4 space-y-3 text-sm text-text-soft">
                  {product.recommendations.map((rec) => (
                    <li key={rec}>• {rec}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Relacionados */}
        {relatedProducts.length ? (
          <div className="mt-14">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-strong">
                También te puede interesar
              </h2>

              <Link
                href="/shop"
                className="text-sm font-semibold text-dark-green transition hover:text-primary"
              >
                Ver más
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) =>
                relatedProduct ? (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.slug}`}
                    className="overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-soft-green">
                      {relatedProduct.isOffer ? (
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white">
                          OFERTA
                        </span>
                      ) : null}

                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={500}
                        height={350}
                        className="h-32 w-full object-cover"
                      />
                    </div>

                    <p className="mt-3 text-xs text-text-soft">
                      {relatedProduct.category}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-text-strong">
                      {relatedProduct.name}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-dark-green">
                      {formatPricePYG(relatedProduct.price)}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

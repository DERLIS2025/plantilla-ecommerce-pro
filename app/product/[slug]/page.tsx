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
        <div className="grid gap-8 lg:grid-cols-2">

          {/* 🔥 Imagen optimizada */}
          <div className="overflow-hidden rounded-xl border border-border bg-white p-4">
            <div className="max-w-[600px] mx-auto lg:mx-0">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg bg-soft-green"
                priority
              />
            </div>
          </div>

          {/* Información */}
          <div className="lg:pt-8">
            <p className="text-sm text-text-soft">{product.category}</p>

            <h1 className="mt-2 text-3xl font-bold text-text-strong">
              {product.name}
            </h1>

            <p className="mt-3 text-text-soft">
              {product.seoDescription || product.description}
            </p>

            <div className="mt-5 flex items-end gap-3">
              <p className="text-2xl font-bold text-dark-green">
                {formatPricePYG(product.price)}
              </p>

              {product.previousPrice ? (
                <p className="text-sm text-text-soft line-through">
                  {formatPricePYG(product.previousPrice)}
                </p>
              ) : null}
            </div>

            {product.includesInstallation ? (
              <p className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Incluye instalación
              </p>
            ) : null}

            {/* Bloque confianza */}
            <div className="mt-6 rounded-xl border border-border bg-white p-4">
              <div className="grid gap-2 text-sm text-text-soft">
                <p>✔ Instalación profesional incluida</p>
                <p>✔ Materiales de alta calidad y larga duración</p>
                <p>✔ Trabajo garantizado con resultados reales</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
              >
                Hablar con un Asesor
              </a>

              <Link
                href="/trabajos"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-strong transition hover:bg-soft-green"
              >
                Ver trabajos realizados
              </Link>
            </div>

            {/* Beneficios */}
            {product.benefits?.length ? (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-text-strong">Beneficios</h2>
                <ul className="mt-3 space-y-2 text-sm text-text-soft">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>✔ {benefit}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Recomendado */}
            {product.recommendations?.length ? (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-text-strong">Recomendado para</h2>
                <ul className="mt-3 space-y-2 text-sm text-text-soft">
                  {product.recommendations.map((rec) => (
                    <li key={rec}>• {rec}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Venta cruzada */}
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
                    className="overflow-hidden rounded-xl border border-border bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="overflow-hidden rounded-lg bg-soft-green">
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

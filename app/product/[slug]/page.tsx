import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { AddToCartButton } from '@/components/add-to-cart-button';
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
    description: product.description
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-white p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={960}
            height={700}
            className="h-full w-full rounded-lg bg-soft-green object-cover"
            priority
          />
        </div>
        <div className="lg:pt-8">
          <p className="text-sm text-text-soft">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <p className="mt-3 text-text-soft">{product.description}</p>
          <p className="mt-5 text-2xl font-bold text-dark-green">{formatPricePYG(product.price)}</p>
          <div className="mt-6">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </section>
  );
}

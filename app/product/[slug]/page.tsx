import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { AddToCartButton } from '@/components/add-to-cart-button';
import { formatPrice, products } from '@/lib/data';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
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
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={960}
            height={700}
            className="h-full w-full rounded-2xl bg-pearl object-cover"
            priority
          />
        </div>
        <div className="lg:pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-base text-muted">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold">{formatPrice(product.price)}</p>
          <div className="mt-8">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';

import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Explorá plantas, macetas y artículos para jardín en Portal Verde.'
};

type ShopPageProps = {
  searchParams?: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = (await searchParams) ?? {};
  const search = params.search?.trim().toLowerCase() ?? '';
  const category = params.category?.trim().toLowerCase() ?? '';

  const filteredProducts = products.filter((product) => {
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      : true;

    const matchesCategory = category
      ? product.category.toLowerCase() === category
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-bold">Catálogo</h1>

        <p className="mt-2 text-sm text-text-soft">
          {search || category
            ? `Resultados${search ? ` para: "${params.search}"` : ''}${
                category ? ` en ${params.category}` : ''
              }`
            : 'Descubrí todo para tu jardín y tus espacios verdes.'}
        </p>

        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-border bg-white p-6 text-center">
            <h2 className="text-lg font-semibold text-text-strong">
              No encontramos productos
            </h2>
            <p className="mt-2 text-sm text-text-soft">
              Probá con otro término o categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

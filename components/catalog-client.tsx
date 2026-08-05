'use client';

import {
  ArrowUpDown,
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

type SortOption =
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc';

type CatalogClientProps = {
  initialProducts: Product[];
  initialSearch?: string;
  initialCategory?: string;
};

const categoryLabels = [
  'Todos',
  'Césped',
  'Paisajismo',
  'Plantas',
  'Mantenimiento de jardines',
  'Piscinas'
];

export function CatalogClient({
  initialProducts,
  initialSearch = '',
  initialCategory = ''
}: CatalogClientProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || 'Todos'
  );
  const [sort, setSort] = useState<SortOption>('featured');
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [installationIncluded, setInstallationIncluded] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = initialProducts.filter((product) => {
      const matchesSearch = normalizedSearch
        ? product.name.toLowerCase().includes(normalizedSearch) ||
          product.description.toLowerCase().includes(normalizedSearch) ||
          product.category.toLowerCase().includes(normalizedSearch)
        : true;

      const matchesCategory =
        selectedCategory === 'Todos'
          ? true
          : product.category.toLowerCase() ===
            selectedCategory.toLowerCase();

      const matchesOffer = onlyOffers ? Boolean(product.isOffer) : true;

      const matchesInstallation = installationIncluded
        ? Boolean(product.includesInstallation)
        : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesOffer &&
        matchesInstallation
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name-asc') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [
    initialProducts,
    installationIncluded,
    onlyOffers,
    search,
    selectedCategory,
    sort
  ]);

  const activeFiltersCount = [
    selectedCategory !== 'Todos',
    onlyOffers,
    installationIncluded
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('Todos');
    setOnlyOffers(false);
    setInstallationIncluded(false);
    setSort('featured');
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-strong">
            Categorías
          </h2>

          {activeFiltersCount > 0 ? (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-brand-700"
            >
              Limpiar
            </button>
          ) : null}
        </div>

        <div className="mt-3 grid gap-1.5">
          {categoryLabels.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setIsMobileFiltersOpen(false);
                }}
                className={cn(
                  'flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-left text-sm transition',
                  isActive
                    ? 'bg-brand-100 font-semibold text-brand-800'
                    : 'text-text-strong hover:bg-brand-50'
                )}
              >
                {category}

                {isActive ? (
                  <span className="h-2 w-2 rounded-full bg-brand-700" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h2 className="text-base font-semibold text-text-strong">
          Características
        </h2>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={onlyOffers}
            onChange={(event) => setOnlyOffers(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border accent-brand-700"
          />

          <span>
            <span className="block text-sm font-medium text-text-strong">
              Productos en oferta
            </span>

            <span className="mt-0.5 block text-xs text-text-soft">
              Mostrar precios promocionales
            </span>
          </span>
        </label>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={installationIncluded}
            onChange={(event) =>
              setInstallationIncluded(event.target.checked)
            }
            className="mt-0.5 h-4 w-4 rounded border-border accent-brand-700"
          />

          <span>
            <span className="block text-sm font-medium text-text-strong">
              Instalación incluida
            </span>

            <span className="mt-0.5 block text-xs text-text-soft">
              Productos con servicio incluido
            </span>
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div>
      {/* Encabezado */}
      <section className="rounded-3xl bg-brand-950 px-5 py-7 text-white sm:px-8 sm:py-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
          Catálogo Portal Verde
        </p>

        <div className="mt-2 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Todo para transformar tu jardín
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
            Explorá césped, materiales, accesorios y soluciones para
            paisajismo, instalación y mantenimiento.
          </p>
        </div>

        <div className="relative mt-6 max-w-2xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar césped, granza, pisos, plantas..."
            className="h-12 w-full rounded-2xl border border-white/10 bg-white pl-12 pr-4 text-sm text-text-strong outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-brand-300/30"
          />
        </div>
      </section>

      {/* Categorías rápidas mobile */}
      <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2 lg:hidden">
        {categoryLabels.slice(0, 5).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'min-h-10 shrink-0 snap-start rounded-full border px-4 text-sm font-medium transition',
              selectedCategory === category
                ? 'border-brand-700 bg-brand-700 text-white'
                : 'border-border bg-white text-text-strong'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        {/* Filtros desktop */}
        <aside className="sticky top-32 hidden rounded-2xl border border-border bg-white p-5 shadow-sm lg:block">
          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-brand-700" />

            <h2 className="font-semibold text-text-strong">
              Filtrar productos
            </h2>
          </div>

          <FiltersContent />
        </aside>

        {/* Productos */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm sm:p-4">
            <div>
              <p className="text-sm font-semibold text-text-strong">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1
                  ? 'producto encontrado'
                  : 'productos encontrados'}
              </p>

              {selectedCategory !== 'Todos' ? (
                <p className="mt-0.5 text-xs text-text-soft">
                  Categoría: {selectedCategory}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(true)}
                className="relative inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-white px-3 text-sm font-semibold text-text-strong lg:hidden"
              >
                <Filter className="h-4 w-4" />
                Filtrar

                {activeFiltersCount > 0 ? (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-700 px-1 text-[10px] font-bold text-white">
                    {activeFiltersCount}
                  </span>
                ) : null}
              </button>

              <div className="relative">
                <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-soft" />

                <select
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value as SortOption)
                  }
                  aria-label="Ordenar productos"
                  className="h-11 appearance-none rounded-xl border border-border bg-white pl-9 pr-9 text-sm font-medium text-text-strong outline-none"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="name-asc">Nombre A-Z</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-soft" />
              </div>
            </div>
          </div>

          {/* Filtros activos */}
          {activeFiltersCount > 0 ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {selectedCategory !== 'Todos' ? (
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Todos')}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-brand-100 px-3 text-xs font-semibold text-brand-800"
                >
                  {selectedCategory}
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}

              {onlyOffers ? (
                <button
                  type="button"
                  onClick={() => setOnlyOffers(false)}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-red-50 px-3 text-xs font-semibold text-red-700"
                >
                  Ofertas
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}

              {installationIncluded ? (
                <button
                  type="button"
                  onClick={() => setInstallationIncluded(false)}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-green-100 px-3 text-xs font-semibold text-green-800"
                >
                  Instalación incluida
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}
            </div>
          ) : null}

          {filteredProducts.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-3xl border border-border bg-white px-5 py-12 text-center shadow-sm">
              <Search className="mx-auto h-10 w-10 text-brand-200" />

              <h2 className="mt-4 text-xl font-semibold text-text-strong">
                No encontramos productos
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-soft">
                Probá con otro término o quitá algunos filtros para ver más
                resultados.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-700 px-5 text-sm font-semibold text-white"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Drawer filtros mobile */}
      {isMobileFiltersOpen ? (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            type="button"
            aria-label="Cerrar filtros"
            onClick={() => setIsMobileFiltersOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Catálogo
                </p>

                <h2 className="mt-1 text-lg font-semibold text-text-strong">
                  Filtrar productos
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <FiltersContent />
            </div>

            <div className="border-t border-border bg-white p-4">
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-700 px-5 text-sm font-semibold text-white"
              >
                Ver {filteredProducts.length} productos
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

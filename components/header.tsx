'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SearchIcon, UserIcon, WhatsAppIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { categories, products, formatPricePYG } from '@/lib/data';

export function Header() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const suggestions = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return [];

    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term);

        const matchesCategory = selectedCategory
          ? product.category.toLowerCase() === selectedCategory.toLowerCase()
          : true;

        return matchesSearch && matchesCategory;
      })
      .slice(0, 6);
  }, [search, selectedCategory]);

  const handleSearch = () => {
    const query = search.trim();
    const category = selectedCategory.trim();

    if (!query && !category) {
      router.push('/shop');
      setIsFocused(false);
      return;
    }

    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (category) params.set('category', category);

    router.push(`/shop?${params.toString()}`);
    setIsFocused(false);
  };

  const handleSuggestionClick = (slug: string) => {
    setSearch('');
    setIsFocused(false);
    router.push(`/product/${slug}`);
  };

  return (
    <header className="border-b border-border bg-white">

      {/* 🔥 BARRA SUPERIOR PROMOCIONAL */}
      <div className="border-b border-border bg-soft-green">
        <div className="container-shell flex h-10 items-center justify-between gap-3 text-xs">

          {/* TEXTO EN MOVIMIENTO */}
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="animate-marquee inline-block text-red-600 font-semibold">
              🌱 Césped Esmeralda desde Gs. 31.000 m² con instalación incluida &nbsp;&nbsp;&nbsp;
              🌿 Césped Siempre Verde resistente todo el año &nbsp;&nbsp;&nbsp;
              🏡 Instalación profesional garantizada en Asunción y Gran Asunción &nbsp;&nbsp;&nbsp;
            </div>
          </div>

          {/* WHATSAPP (NO TOCAR) */}
          <a
            href="https://wa.me/595981077600"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 font-semibold text-dark-green"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>

        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <div className="container-shell py-2 sm:py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">

          {/* LOGO */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <Logo />
          </div>

          {/* BUSCADOR */}
          <div className="relative w-full flex-1">
            <div className="flex w-full items-stretch overflow-hidden rounded-xl border border-border bg-white">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-20 border-r border-border bg-soft-green px-2 text-sm text-text-soft outline-none sm:w-28 lg:w-36"
              >
                <option value="">Todas</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input
                type="search"
                placeholder="Buscar césped, granza, pisos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="h-11 min-w-0 flex-1 px-3 text-sm outline-none sm:px-4"
              />

              <button
                onClick={handleSearch}
                className="inline-flex h-11 w-12 items-center justify-center bg-primary text-white"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>

            {/* AUTOCOMPLETE */}
            {isFocused && search.trim() && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-border bg-white shadow-card">
                {suggestions.length > 0 ? (
                  <ul className="max-h-96 overflow-y-auto">
                    {suggestions.map((product) => (
                      <li key={product.id} className="border-b border-border">
                        <button
                          onClick={() => handleSuggestionClick(product.slug)}
                          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-soft-green"
                        >
                          <div className="relative h-14 w-14 rounded-lg overflow-hidden border">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                          </div>

                          <div className="flex-1 text-left">
                            <p className="text-sm font-semibold">{product.name}</p>
                            <p className="text-xs text-text-soft">{product.category}</p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-bold text-dark-green">
                              {formatPricePYG(product.price)}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-text-soft">
                    No encontramos sugerencias.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ACCIONES */}
          <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto lg:justify-end">

            <Link href="/shop" className="rounded-lg border px-3 py-2 text-sm">
              Catálogo
            </Link>

            {/* BOTÓN DESTACADO */}
            <Link
              href="/trabajos"
              className="rounded-lg bg-dark-green px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-primary"
            >
              Trabajos
            </Link>

            <Link href="#" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
              <UserIcon className="h-4 w-4" /> Mi cuenta
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';

import { CartIcon, SearchIcon, UserIcon, WhatsAppIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-border bg-white">

      {/* Barra superior */}
      <div className="border-b border-border bg-soft-green">
        <div className="container-shell flex h-10 items-center justify-between gap-3 text-xs text-text-soft">
          <p className="truncate">
            Envíos a todo Paraguay · Atención de lunes a sábado
          </p>

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

      {/* Header principal */}
      <div className="container-shell py-2 sm:py-4">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">

          {/* LOGO (centrado en mobile) */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <Logo />
          </div>

          {/* BUSCADOR */}
          <div className="flex w-full flex-1 items-stretch overflow-hidden rounded-xl border border-border bg-white">
            <select
              aria-label="Seleccionar categoría"
              className="w-20 border-r border-border bg-soft-green px-2 text-sm text-text-soft outline-none sm:w-28 lg:w-36"
              defaultValue="Todas"
            >
              <option>Todas</option>
              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>

            <input
              type="search"
              placeholder="Buscar plantas, macetas..."
              className="h-11 min-w-0 flex-1 px-3 text-sm outline-none sm:px-4"
            />

            <button
              type="button"
              className="inline-flex h-11 w-12 items-center justify-center bg-primary text-white"
              aria-label="Buscar"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>

          {/* ACCIONES */}
          <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto lg:justify-end">
            <Link
              href="/shop"
              className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-soft transition hover:text-text-strong"
            >
              Catálogo
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-soft transition hover:text-text-strong"
            >
              <UserIcon className="h-4 w-4" /> Mi cuenta
            </Link>

            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-lg bg-dark-green px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary"
            >
              <CartIcon className="h-4 w-4" /> Carrito
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
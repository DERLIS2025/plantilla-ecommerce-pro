import Link from 'next/link';

import { CartIcon, SearchIcon, UserIcon, WhatsAppIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-border bg-white">
      
      {/* Barra superior */}
      <div className="border-b border-border bg-soft-green">
        <div className="container-shell flex h-10 items-center justify-between text-xs text-text-soft">
          <p>Envíos a todo Paraguay · Atención de lunes a sábado</p>
          <a
            href="https://wa.me/595000000000"
            className="inline-flex items-center gap-1 font-semibold text-dark-green"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Header principal */}
      <div className="container-shell py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          
          {/* Logo */}
          <Logo />

          {/* Buscador */}
          <div className="flex flex-1 items-stretch overflow-hidden rounded-xl border border-border bg-white">
            <select
              aria-label="Seleccionar categoría"
              className="w-44 border-r border-border bg-soft-green px-3 text-sm text-text-soft outline-none"
              defaultValue="Todas"
            >
              <option>Todas</option>
              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>

            <input
              type="search"
              placeholder="Buscar plantas, macetas, sustratos y más"
              className="h-11 flex-1 px-4 text-sm outline-none"
            />

            <button
              type="button"
              className="inline-flex h-11 w-12 items-center justify-center bg-primary text-white"
              aria-label="Buscar"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-soft hover:text-text-strong"
            >
              Catálogo
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-soft"
            >
              <UserIcon className="h-4 w-4" /> Mi cuenta
            </Link>

            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-lg bg-dark-green px-3 py-2 text-sm font-semibold text-white"
            >
              <CartIcon className="h-4 w-4" /> Carrito
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
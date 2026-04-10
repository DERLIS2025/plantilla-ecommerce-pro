import Link from 'next/link';

import { CartIcon, SearchIcon } from '@/components/icons';
import { Logo } from '@/components/logo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/cart', label: 'Cart' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-stone/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search products"
            className="rounded-full border border-black/10 p-2 text-muted hover:text-ink"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <Link
            href="/cart"
            aria-label="View cart"
            className="rounded-full border border-black/10 p-2 text-muted hover:text-ink"
          >
            <CartIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

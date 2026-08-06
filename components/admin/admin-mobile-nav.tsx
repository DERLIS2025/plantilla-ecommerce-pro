'use client';

import { Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { AdminLogoutButton } from '@/components/admin/admin-logout-button';
import { adminNavigation } from '@/lib/admin/navigation';
import { cn } from '@/lib/utils';

export function AdminMobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú administrativo"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-[#0d2e1b] p-4 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500">
                  <Leaf className="h-6 w-6" />
                </span>

                <div>
                  <p className="font-semibold">Portal Verde</p>
                  <p className="text-xs text-white/50">
                    Administración
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar navegación"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex-1 space-y-1 overflow-y-auto">
              {adminNavigation.map((item) => {
                const Icon = item.icon;

                const active =
                  item.href === '/admin'
                    ? pathname === '/admin'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium transition',
                      active
                        ? 'bg-white text-green-950'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 pt-4">
              <AdminLogoutButton />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}

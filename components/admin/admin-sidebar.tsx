'use client';

import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AdminLogoutButton } from '@/components/admin/admin-logout-button';
import { adminNavigation } from '@/lib/admin/navigation';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-[#0d2e1b] p-4 text-white lg:flex">
      <div className="flex items-center gap-3 px-3 py-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white">
          <Leaf className="h-6 w-6" />
        </span>

        <div>
          <p className="font-semibold">Portal Verde</p>
          <p className="text-xs text-white/50">Administración</p>
        </div>
      </div>

      <nav className="mt-6 flex-1 space-y-1">
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
              className={cn(
                'flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition',
                active
                  ? 'bg-white text-green-950 shadow-sm'
                  : 'text-white/65 hover:bg-white/10 hover:text-white'
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
  );
}

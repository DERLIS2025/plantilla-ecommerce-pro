import Link from 'next/link';

import { categories } from '@/lib/data';

export function CategorySidebar() {
  return (
    <aside className="rounded-xl border border-border bg-white p-4">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-soft">Categorías</h2>
      <ul className="space-y-1.5">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href="/shop"
              className="block rounded-md px-2 py-2 text-sm text-text-strong hover:bg-soft-green"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

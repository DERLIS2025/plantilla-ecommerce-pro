import Link from 'next/link';
import { categories } from '@/lib/data';

export function CategorySidebar() {
  const principales = categories.filter(
    (c) => c.name === 'Césped' || c.name === 'Paisajismo'
  );

  const secundarios = categories.filter(
    (c) => c.name !== 'Césped' && c.name !== 'Paisajismo'
  );

  return (
    <aside className="rounded-xl border border-border bg-white p-4">
      
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-soft">
        Categorías
      </h2>

      {/* PRINCIPALES */}
      <ul className="space-y-2">
        {principales.map((category) => (
          <li key={category.id}>
            <Link
              href="/shop"
              className="block rounded-md px-3 py-2 text-sm font-semibold text-dark-green bg-soft-green hover:bg-green-100 transition"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* SECUNDARIAS */}
      {secundarios.length > 0 && (
        <>
          <h3 className="mt-4 mb-2 text-xs text-text-soft">Otros</h3>

          <ul className="space-y-1.5">
            {secundarios.map((category) => (
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
        </>
      )}
    </aside>
  );
}
import Image from 'next/image';

import type { Category } from '@/lib/types';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-4 shadow-soft">
      <Image
        src={category.image}
        alt={category.name}
        width={640}
        height={420}
        className="h-44 w-full rounded-xl object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
      <p className="mt-2 text-sm text-muted">{category.description}</p>
    </article>
  );
}

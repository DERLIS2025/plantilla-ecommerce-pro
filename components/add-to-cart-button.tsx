'use client';

import { useState } from 'react';

export function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
    >
      {added ? 'Added to cart' : 'Add to cart'}
    </button>
  );
}

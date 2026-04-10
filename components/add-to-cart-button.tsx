'use client';

import { useState } from 'react';

export function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-dark-green"
    >
      {added ? 'Agregado al carrito' : 'Agregar al carrito'}
    </button>
  );
}
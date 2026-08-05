'use client';

import { Check, ClipboardPlus } from 'lucide-react';
import { useState } from 'react';

import { addQuoteItem } from '@/lib/quote-storage';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

type AddToCartButtonProps = {
  product: Product;
  className?: string;
};

export function AddToCartButton({
  product,
  className
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addQuoteItem(product);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={cn(
        'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition active:scale-[0.98]',
        added
          ? 'bg-brand-100 text-brand-800'
          : 'bg-brand-700 text-white hover:bg-brand-800',
        className
      )}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" />
          Agregado al presupuesto
        </>
      ) : (
        <>
          <ClipboardPlus className="h-4 w-4" />
          Agregar al presupuesto
        </>
      )}
    </button>
  );
}

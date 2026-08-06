'use client';

import { Copy, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { duplicateProductAction } from '@/app/admin/(panel)/productos/actions/product-actions';

type ProductDuplicateButtonProps = {
  productId: string;
  productName: string;
};

export function ProductDuplicateButton({
  productId,
  productName
}: ProductDuplicateButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState('');

  function handleDuplicate() {
    setMessage('');

    startTransition(async () => {
      const result = await duplicateProductAction(productId);

      if (!result.success || !result.productId) {
        setMessage(
          result.message || 'No se pudo duplicar el producto.'
        );
        return;
      }

      router.push(
        `/admin/productos/${result.productId}/editar`
      );
      router.refresh();
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleDuplicate}
        disabled={isPending}
        aria-label={`Duplicar ${productName}`}
        title="Duplicar producto"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {message ? (
        <div
          role="alert"
          className="absolute right-0 top-11 z-20 w-64 rounded-xl border border-red-200 bg-white p-3 text-xs text-red-700 shadow-xl"
        >
          {message}
        </div>
      ) : null}
    </div>
  );
}

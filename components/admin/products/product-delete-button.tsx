'use client';

import { Loader2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { deleteProductAction } from '@/app/admin/(panel)/productos/actions/product-actions';

type ProductDeleteButtonProps = {
  productId: string;
  productName: string;
};

export function ProductDeleteButton({
  productId,
  productName
}: ProductDeleteButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState('');

  function handleDelete() {
    const confirmed = window.confirm(
      `¿Deseás eliminar "${productName}"?\n\nEsta acción eliminará el producto y sus datos relacionados.`
    );

    if (!confirmed) return;

    setMessage('');

    startTransition(async () => {
      const result = await deleteProductAction(productId);

      if (!result.success) {
        setMessage(
          result.message || 'No se pudo eliminar el producto.'
        );
        return;
      }

      router.refresh();
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        aria-label={`Eliminar ${productName}`}
        title="Eliminar producto"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Trash2 className="h-4 w-4" />
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

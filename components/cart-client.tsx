'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { formatPricePYG, products } from '@/lib/data';

const initialItems = products.slice(0, 3).map((product) => ({ ...product, quantity: 1 }));

export function CartClient() {
  const [items, setItems] = useState(initialItems);

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Number.isNaN(quantity) ? 1 : quantity) } : item
      )
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 sm:flex-row"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={180}
              height={130}
              className="h-24 w-full rounded-lg bg-soft-green object-cover sm:w-36"
            />
            <div className="flex flex-1 items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-text-soft">{formatPricePYG(item.price)}</p>
              </div>
              <label className="text-sm text-text-soft">
                Cant.
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(event) =>
                    updateQuantity(item.id, Number.parseInt(event.target.value, 10))
                  }
                  className="ml-2 w-16 rounded-md border border-border px-2 py-1"
                />
              </label>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-xl border border-border bg-white p-5">
        <h2 className="text-lg font-semibold">Resumen de compra</h2>
        <div className="mt-4 space-y-2 text-sm text-text-soft">
          <p className="flex justify-between">
            Subtotal <span className="font-medium text-text-strong">{formatPricePYG(subtotal)}</span>
          </p>
          <p className="flex justify-between">
            Envío <span className="font-medium text-text-strong">A coordinar</span>
          </p>
        </div>
        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-dark-green px-5 py-3 text-sm font-semibold text-white"
        >
          Finalizar compra
        </button>
      </aside>
    </div>
  );
}

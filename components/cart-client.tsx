'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { formatPrice, products } from '@/lib/data';

const initialItems = products.slice(0, 2).map((product) => ({ ...product, quantity: 1 }));

export function CartClient() {
  const [items, setItems] = useState(initialItems);

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-4 sm:flex-row"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={180}
              height={130}
              className="h-28 w-full rounded-xl bg-pearl object-cover sm:w-40"
            />
            <div className="flex flex-1 items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted">{formatPrice(item.price)}</p>
              </div>
              <label className="text-sm">
                Qty
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(event) =>
                    updateQuantity(item.id, Number.parseInt(event.target.value, 10))
                  }
                  className="ml-2 w-16 rounded-md border border-black/10 px-2 py-1"
                />
              </label>
            </div>
          </article>
        ))}
      </div>
      <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p className="flex justify-between">
            Subtotal <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
          </p>
          <p className="flex justify-between">
            Shipping <span className="font-medium text-ink">Free</span>
          </p>
        </div>
        <button
          type="button"
          className="mt-6 w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
        >
          Checkout
        </button>
      </aside>
    </div>
  );
}

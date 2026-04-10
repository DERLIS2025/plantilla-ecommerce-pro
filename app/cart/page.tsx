import type { Metadata } from 'next';

import { CartClient } from '@/components/cart-client';

export const metadata: Metadata = {
  title: 'Carrito',
  description: 'Revisá tus productos antes de finalizar la compra en Portal Verde.'
};

export default function CartPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-bold">Tu carrito</h1>
        <p className="mt-2 text-sm text-text-soft">
          Ajustá cantidades y continuá con tu compra.
        </p>
        <div className="mt-6">
          <CartClient />
        </div>
      </div>
    </section>
  );
}

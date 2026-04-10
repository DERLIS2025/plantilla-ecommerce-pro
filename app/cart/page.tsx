import type { Metadata } from 'next';

import { CartClient } from '@/components/cart-client';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Review products in your shopping cart before checkout.'
};

export default function CartPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-semibold">Your cart</h1>
        <p className="mt-2 text-sm text-muted">Update quantities or proceed to checkout.</p>
        <div className="mt-8">
          <CartClient />
        </div>
      </div>
    </section>
  );
}

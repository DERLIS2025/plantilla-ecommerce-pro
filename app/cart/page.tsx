import type { Metadata } from 'next';

import { CartClient } from '@/components/cart-client';

export const metadata: Metadata = {
  title: 'Mi presupuesto',
  description:
    'Prepará y enviá tu presupuesto personalizado a Portal Verde.',
  robots: {
    index: false,
    follow: false
  }
};

export default function CartPage() {
  return (
    <main className="container-shell py-5 sm:py-8 lg:py-10">
      <section className="mb-6 rounded-3xl bg-brand-950 px-5 py-7 text-white sm:px-8 sm:py-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
          Portal Verde
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Armá tu presupuesto
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
          Seleccioná productos, indicá cantidades y enviá toda la
          información en una sola consulta por WhatsApp.
        </p>
      </section>

      <CartClient />
    </main>
  );
}

const promos = [
  'Envío rápido en Asunción y Gran Asunción',
  'Pagá por transferencia o tarjeta',
  'Atención personalizada por WhatsApp'
];

export function PromoStrip() {
  return (
    <section className="grid gap-3 sm:grid-cols-3">
      {promos.map((promo) => (
        <article key={promo} className="rounded-lg border border-border bg-soft-green p-3 text-center text-sm font-medium text-dark-green">
          {promo}
        </article>
      ))}
    </section>
  );
}

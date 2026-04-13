const promos = [
  'Trabajo garantizado con resultados reales',
  'Materiales de alta calidad y larga duración',
  'Instalación profesional asegurada'
];

export function PromoStrip() {
  return (
    <section className="grid gap-3 sm:grid-cols-3">
      {promos.map((promo) => (
        <article
          key={promo}
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-soft-green p-3 text-center text-sm font-semibold text-dark-green"
        >
          <span>✔</span>
          <span>{promo}</span>
        </article>
      ))}
    </section>
  );
}

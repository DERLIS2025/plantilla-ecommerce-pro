const benefits = [
  {
    title: 'Premium Materials',
    description: 'Responsibly sourced woods, stones, and textiles built for longevity.'
  },
  {
    title: '30-Day Returns',
    description: 'Easy returns with complimentary pickup for all domestic orders.'
  },
  {
    title: 'Design Support',
    description: 'Get tailored product recommendations from our in-house stylists.'
  }
];

export function BenefitsSection() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell grid gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

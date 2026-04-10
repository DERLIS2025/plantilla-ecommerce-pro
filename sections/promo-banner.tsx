export function PromoBannerSection() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="rounded-3xl border border-black/10 bg-pearl px-8 py-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Limited Offer</p>
          <h2 className="mt-3 text-3xl font-semibold">Enjoy complimentary white-glove shipping</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
            For orders over $500. Delivery includes in-room placement and package removal in
            select metro areas.
          </p>
        </div>
      </div>
    </section>
  );
}

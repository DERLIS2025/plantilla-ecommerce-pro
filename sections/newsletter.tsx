export function NewsletterSection() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="rounded-3xl bg-white p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Newsletter</p>
          <h2 className="mt-2 text-3xl font-semibold">Design insights, delivered monthly</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Be first to discover new collections, editorial stories, and member-only offers.
          </p>
          <form className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-12 flex-1 rounded-full border border-black/10 px-5 text-sm outline-none ring-accent/30 focus:ring-2"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-ink px-6 text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

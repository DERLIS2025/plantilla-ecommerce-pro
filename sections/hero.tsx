import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-3xl bg-ink px-6 py-14 text-white sm:px-10 lg:px-14">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Spring Collection 2026</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Thoughtfully crafted pieces for a calmer, more elegant home.
          </h1>
          <p className="mt-6 max-w-xl text-sm text-white/75 sm:text-base">
            Discover contemporary furniture and decor designed with premium materials,
            timeless proportions, and effortless harmony.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink"
            >
              Shop now
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Explore collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

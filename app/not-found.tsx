import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-muted">The page you requested does not exist.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </section>
  );
}

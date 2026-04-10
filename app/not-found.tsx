import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
        <p className="mt-3 text-sm text-text-soft">Lo que buscás no está disponible.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

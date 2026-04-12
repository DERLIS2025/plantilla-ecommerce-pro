import Link from 'next/link';

export function HomeHero() {
  const whatsappNumber = '595981077600';
  const message = 'Hola, quiero consultar sobre césped e instalación.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="rounded-xl border border-border bg-gradient-to-r from-dark-green to-primary px-6 py-8 text-white sm:px-8 sm:py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-white/80">Portal Verde</p>

      <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
        Renová tus espacios con Portal Verde
      </h1>

      <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">
        Venta e instalación de césped natural, paisajismo y soluciones para mejorar tus espacios
        verdes.
      </p>

      <p className="mt-3 text-xs text-white/80 sm:text-sm">
        Instalación incluida • Atención rápida • Cobertura en Asunción y Gran Asunción
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-dark-green"
        >
          Solicitar cotización
        </a>

        <Link
          href="/shop"
          className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
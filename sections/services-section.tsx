export function ServicesSection() {
  const whatsappNumber = '595981077600';
  const message = 'Hola, quiero consultar sobre servicios de Portal Verde.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="rounded-xl border border-border bg-white p-4 sm:p-5">
      
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr] items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-lg font-bold text-text-strong sm:text-xl">
            Soluciones para transformar y mantener tus espacios verdes
          </h2>

          <p className="mt-1 text-sm text-text-soft">
            Además de productos, ofrecemos servicios especializados en jardinería, césped y mantenimiento.
          </p>

          <div className="mt-3 flex gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-md bg-dark-green px-4 py-2 text-xs font-semibold text-white hover:bg-primary"
            >
              Solicitar servicio por WhatsApp
            </a>

            <a
              href="/shop"
              className="rounded-md border px-4 py-2 text-xs font-semibold"
            >
              Ver productos
            </a>
          </div>
        </div>

        {/* Servicios tipo tags */}
        <div className="flex flex-wrap gap-2">
          {['Empastado', 'Jardinería', 'Poda de árboles', 'Mantenimiento'].map((item) => (
            <span
              key={item}
              className="rounded-full bg-soft-green px-3 py-1 text-xs font-semibold text-dark-green"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
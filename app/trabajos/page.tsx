export default function TrabajosPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <h1 className="text-3xl font-bold">Nuestros Trabajos</h1>
        <p className="mt-2 text-text-soft">
          Algunos de los proyectos realizados por Portal Verde.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="overflow-hidden rounded-xl border bg-white">
            <img
              src="/images/trabajos/trabajo-1.jpg"
              className="h-60 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Instalación de césped residencial</h3>
              <p className="text-sm text-text-soft">Asunción</p>
            </div>
          </div>

          {/* después duplicás para más trabajos */}

        </div>
      </div>
    </section>
  );
}

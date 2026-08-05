import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Términos y condiciones de uso de Portal Verde.'
};

export default function TermsPage() {
  return (
    <main className="container-shell py-8 sm:py-12">
      <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-text-strong">
          Términos y condiciones
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-text-soft">
          <p>
            Portal Verde ofrece información sobre productos, servicios,
            instalación y presupuestos relacionados con jardinería y
            paisajismo.
          </p>

          <p>
            Los precios publicados son referenciales y pueden variar según
            cantidad, disponibilidad, ubicación, entrega e instalación.
          </p>

          <p>
            El presupuesto final será confirmado por un asesor antes de
            coordinar cualquier trabajo o entrega.
          </p>

          <p>
            Las imágenes son ilustrativas y pueden presentar variaciones
            respecto al producto o resultado final.
          </p>
        </div>
      </article>
    </main>
  );
}

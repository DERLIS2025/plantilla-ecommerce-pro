import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Información sobre el uso de cookies en Portal Verde.'
};

export default function CookiesPage() {
  return (
    <main className="container-shell py-8 sm:py-12">
      <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-text-strong">
          Política de cookies
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-text-soft">
          <p>
            Portal Verde puede utilizar cookies técnicas y de medición para
            mejorar el funcionamiento del sitio y comprender cómo se utiliza.
          </p>

          <p>
            Las cookies técnicas permiten recordar funciones esenciales del
            sitio, como los productos agregados al presupuesto.
          </p>

          <p>
            El usuario puede configurar o eliminar cookies desde las opciones
            de su navegador.
          </p>
        </div>
      </article>
    </main>
  );
}

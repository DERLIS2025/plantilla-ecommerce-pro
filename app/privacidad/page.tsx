import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de Portal Verde.'
};

export default function PrivacyPage() {
  return (
    <main className="container-shell py-8 sm:py-12">
      <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-text-strong">
          Política de privacidad
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-text-soft">
          <p>
            Portal Verde utiliza la información proporcionada por los usuarios
            únicamente para responder consultas, preparar presupuestos y
            coordinar servicios.
          </p>

          <p>
            Los datos enviados mediante formularios o WhatsApp no serán
            vendidos ni compartidos con terceros, salvo cuando sea necesario
            para brindar el servicio solicitado.
          </p>

          <p>
            El usuario puede solicitar la actualización o eliminación de sus
            datos comunicándose con Portal Verde.
          </p>
        </div>
      </article>
    </main>
  );
}

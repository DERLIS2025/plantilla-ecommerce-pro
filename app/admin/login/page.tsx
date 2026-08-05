export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-950 px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
          Portal Verde
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-text-strong">
          Acceso administrativo
        </h1>

        <p className="mt-2 text-sm leading-6 text-text-soft">
          Ingresá con una cuenta autorizada para administrar el sitio.
        </p>

        <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          La autenticación se conectará a Supabase en el próximo paso.
        </div>
      </section>
    </main>
  );
}

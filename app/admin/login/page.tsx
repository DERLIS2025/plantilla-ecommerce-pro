import { Leaf, ShieldCheck } from 'lucide-react';
import { redirect } from 'next/navigation';

import { AdminLoginForm } from '@/components/admin/admin-login-form';
import { createClient } from '@/lib/supabase/server';

export default async function AdminLoginPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/admin');
  }

  return (
    <main className="grid min-h-screen bg-[#f4f7f4] lg:grid-cols-[1.05fr_0.95fr]">
      <section className="hidden bg-[#0d2e1b] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Leaf className="h-6 w-6" />
          </span>

          <div>
            <p className="font-semibold">Portal Verde</p>
            <p className="text-xs text-white/60">
              Administración del ecommerce
            </p>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-300">
            Panel administrativo
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight">
            Administrá todo Portal Verde desde un solo lugar.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Productos, categorías, trabajos, presupuestos, contenido y
            configuración general.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/55">
          <ShieldCheck className="h-4 w-4" />
          Acceso protegido mediante Supabase
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white">
              <Leaf className="h-6 w-6" />
            </span>

            <div>
              <p className="font-semibold text-slate-900">Portal Verde</p>
              <p className="text-xs text-slate-500">Panel administrativo</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-green-950/5 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
              Acceso privado
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Bienvenido nuevamente
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Ingresá con la cuenta administrativa autorizada.
            </p>

            <AdminLoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}

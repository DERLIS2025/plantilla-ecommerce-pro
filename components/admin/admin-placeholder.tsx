import { Construction } from 'lucide-react';

type AdminPlaceholderProps = {
  title: string;
  description: string;
};

export function AdminPlaceholder({
  title,
  description
}: AdminPlaceholderProps) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
        Portal Verde CMS
      </p>

      <h1 className="mt-2 text-3xl font-semibold text-slate-950">
        {title}
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700">
          <Construction className="h-6 w-6" />
        </span>

        <h2 className="mt-5 text-lg font-semibold text-slate-950">
          Módulo en preparación
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          La estructura está lista. El siguiente paso será conectar las funciones de crear, editar y eliminar.
        </p>
      </section>
    </div>
  );
}

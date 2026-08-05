import {
  Boxes,
  BriefcaseBusiness,
  CircleDollarSign,
  PackageCheck
} from 'lucide-react';

const stats = [
  {
    title: 'Productos',
    value: '8',
    description: 'Productos registrados',
    icon: Boxes
  },
  {
    title: 'Disponibles',
    value: '8',
    description: 'Productos activos',
    icon: PackageCheck
  },
  {
    title: 'Ofertas',
    value: '1',
    description: 'Promociones activas',
    icon: CircleDollarSign
  },
  {
    title: 'Trabajos',
    value: '3',
    description: 'Proyectos publicados',
    icon: BriefcaseBusiness
  }
];

export default function AdminPage() {
  return (
    <div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
          Portal Verde
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-text-strong">
          Panel administrativo
        </h1>

        <p className="mt-2 text-sm text-text-soft">
          Administrá productos, contenidos, trabajos y configuraciones.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>

              <p className="mt-5 text-sm text-text-soft">
                {stat.title}
              </p>

              <p className="mt-1 text-3xl font-semibold text-text-strong">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-text-soft">
                {stat.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

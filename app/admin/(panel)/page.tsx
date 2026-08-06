import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  FolderTree,
  PackageCheck,
  Plus,
  ReceiptText,
  Settings
} from 'lucide-react';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    productsResult,
    availableResult,
    categoriesResult,
    projectsResult,
    quotesResult,
    recentProductsResult
  ] = await Promise.all([
    supabase
      .from('products')
      .select('*', { count: 'exact', head: true }),

    supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('in_stock', true)
      .eq('is_active', true),

    supabase
      .from('categories')
      .select('*', { count: 'exact', head: true }),

    supabase
      .from('projects')
      .select('*', { count: 'exact', head: true }),

    supabase
      .from('quotes')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'new'),

    supabase
      .from('products')
      .select('id, name, price, is_active, in_stock, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
  ]);

  const stats = [
    {
      title: 'Productos',
      value: productsResult.count ?? 0,
      description: 'Registrados en el catálogo',
      icon: Boxes,
      href: '/admin/productos'
    },
    {
      title: 'Disponibles',
      value: availableResult.count ?? 0,
      description: 'Activos y con disponibilidad',
      icon: PackageCheck,
      href: '/admin/productos'
    },
    {
      title: 'Categorías',
      value: categoriesResult.count ?? 0,
      description: 'Categorías configuradas',
      icon: FolderTree,
      href: '/admin/categorias'
    },
    {
      title: 'Trabajos',
      value: projectsResult.count ?? 0,
      description: 'Proyectos registrados',
      icon: BriefcaseBusiness,
      href: '/admin/trabajos'
    }
  ];

  const quickActions = [
    {
      title: 'Crear producto',
      description: 'Agregar un nuevo producto al catálogo.',
      href: '/admin/productos/nuevo',
      icon: Plus
    },
    {
      title: 'Administrar categorías',
      description: 'Organizar categorías del ecommerce.',
      href: '/admin/categorias',
      icon: FolderTree
    },
    {
      title: 'Configuración',
      description: 'Editar datos generales del sitio.',
      href: '/admin/configuracion',
      icon: Settings
    }
  ];

  return (
    <div className="mx-auto w-full max-w-[1500px]">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
            Portal Verde CMS
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Resumen general
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Administrá el catálogo, contenido y solicitudes desde un solo lugar.
          </p>
        </div>

        <Link
          href="/admin/productos/nuevo"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-700 px-5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          <Plus className="h-4 w-4" />
          Nuevo producto
        </Link>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Icon className="h-5 w-5" />
                </span>

                <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-green-700" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <p className="mt-1 text-3xl font-semibold text-slate-950">
                {stat.value}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {stat.description}
              </p>
            </Link>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.75fr)]">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
            <div>
              <h2 className="font-semibold text-slate-950">
                Productos recientes
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Últimos productos agregados a la base de datos
              </p>
            </div>

            <Link
              href="/admin/productos"
              className="text-xs font-semibold text-green-700"
            >
              Ver todos
            </Link>
          </div>

          {recentProductsResult.data?.length ? (
            <div className="divide-y divide-slate-100">
              {recentProductsResult.data.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Gs. {Number(product.price).toLocaleString('es-PY')}
                    </p>
                  </div>

                  <span
                    className={
                      product.is_active && product.in_stock
                        ? 'rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-700'
                        : 'rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500'
                    }
                  >
                    {product.is_active && product.in_stock
                      ? 'Disponible'
                      : 'Inactivo'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-14 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Boxes className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Todavía no hay productos
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Los productos actuales del sitio todavía deben migrarse a Supabase.
              </p>
            </div>
          )}
        </article>

        <div className="space-y-6">
          <article className="rounded-2xl bg-[#0d2e1b] p-6 text-white shadow-sm">
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green-300">
                <ReceiptText className="h-5 w-5" />
              </span>

              <span className="rounded-full bg-green-400/15 px-3 py-1 text-[11px] font-semibold text-green-300">
                Pendientes
              </span>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Presupuestos nuevos
            </p>

            <p className="mt-1 text-4xl font-semibold">
              {quotesResult.count ?? 0}
            </p>

            <Link
              href="/admin/presupuestos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-300"
            >
              Revisar solicitudes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-950">
              Acciones rápidas
            </h2>

            <div className="mt-4 space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-slate-900">
                        {action.title}
                      </span>

                      <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                        {action.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

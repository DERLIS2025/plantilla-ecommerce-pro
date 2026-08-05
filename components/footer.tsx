import Link from 'next/link';
import {
  AtSign,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck
} from 'lucide-react';

import { Logo } from '@/components/logo';

const whatsappNumber = '595981077600';

const whatsappMessage =
  'Hola, quiero recibir asesoramiento sobre productos y servicios de Portal Verde.';

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export function Footer() {
  return (
    <footer className="mt-12 bg-brand-950 text-white">
      {/* CTA superior */}
      <div className="container-shell pt-8 sm:pt-10">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-7 sm:px-8 sm:py-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
              ¿Tenés un proyecto en mente?
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Te ayudamos a elegir productos, calcular cantidades y coordinar
              la instalación
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Contanos qué necesitás y nuestro equipo te orientará para preparar
              una solución completa.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar con un asesor
            </a>

            <Link
              href="/cart"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-950"
            >
              Ver mi presupuesto
            </Link>
          </div>
        </section>
      </div>

      {/* Contenido principal */}
      <div className="container-shell grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:py-14">
        {/* Marca */}
        <div>
          <div className="inline-flex rounded-2xl bg-white px-3 py-2">
            <Logo />
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Productos, instalación, mantenimiento y soluciones para transformar
            jardines y espacios verdes.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram de Portal Verde"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white hover:text-brand-950"
            >
              <AtSign className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="Facebook de Portal Verde"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white hover:text-brand-950"
            >
              <Share2 className="h-4 w-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Portal Verde"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Navegación
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <Link href="/" className="transition hover:text-white">
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/shop" className="transition hover:text-white">
                Catálogo
              </Link>
            </li>

            <li>
              <Link href="/trabajos" className="transition hover:text-white">
                Trabajos realizados
              </Link>
            </li>

            <li>
              <Link href="/cart" className="transition hover:text-white">
                Mi presupuesto
              </Link>
            </li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Servicios
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Instalación de césped</li>
            <li>Paisajismo</li>
            <li>Mantenimiento</li>
            <li>Preparación de terreno</li>
            <li>Asesoramiento</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Contacto
          </h3>

          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />

              <span>
                Asunción y Gran Asunción
                <span className="mt-0.5 block text-xs text-white/45">
                  Cobertura sujeta a confirmación
                </span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />

              <a
                href="tel:+595981077600"
                className="transition hover:text-white"
              >
                +595 981 077 600
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />

              <a
                href="mailto:hola@portalverde.com.py"
                className="break-all transition hover:text-white"
              >
                hola@portalverde.com.py
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />

              <span>
                Lunes a sábado
                <span className="mt-0.5 block text-xs text-white/45">
                  Horarios a confirmar
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Franja de confianza */}
      <div className="border-y border-white/10 bg-black/10">
        <div className="container-shell grid gap-3 py-4 text-xs text-white/65 sm:grid-cols-3">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-300" />
            Atención personalizada
          </p>

          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-300" />
            Presupuestos claros
          </p>

          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-300" />
            Instalación profesional
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-shell flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Portal Verde. Todos los derechos
          reservados.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="#" className="transition hover:text-white">
            Términos
          </Link>

          <Link href="#" className="transition hover:text-white">
            Privacidad
          </Link>

          <Link href="#" className="transition hover:text-white">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

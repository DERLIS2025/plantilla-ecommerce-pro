'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type BannerSlide = {
  id: number;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  whatsappMessage: string;
};

const slides: BannerSlide[] = [
  {
    id: 1,
    desktopImage: '/images/banners/slide-1-desktop.jpg',
    mobileImage: '/images/banners/slide-1-mobile.jpg',
    alt: 'Banner de mantenimiento de jardines Portal Verde',
    whatsappMessage: 'Hola, quiero agendar mantenimiento para mi jardín.'
  },
  {
    id: 2,
    desktopImage: '/images/banners/slide-2-desktop.jpg',
    mobileImage: '/images/banners/slide-2-mobile.jpg',
    alt: 'Banner de césped natural Portal Verde',
    whatsappMessage: 'Hola, quiero consultar sobre césped natural e instalación.'
  },
  {
    id: 3,
    desktopImage: '/images/banners/slide-3-desktop.jpg',
    mobileImage: '/images/banners/slide-3-mobile.jpg',
    alt: 'Banner de paisajismo Portal Verde',
    whatsappMessage: 'Hola, quiero solicitar una cotización de paisajismo.'
  }
];

export function HomeHero() {
  const whatsappNumber = '595981077600';
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentSlide.whatsappMessage
  )}`;

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative">
        <div className="relative w-full overflow-hidden bg-white">
          <div className="hidden md:block">
            <Image
              src={currentSlide.desktopImage}
              alt={currentSlide.alt}
              width={1920}
              height={700}
              priority
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="block md:hidden">
            <Image
              src={currentSlide.mobileImage}
              alt={currentSlide.alt}
              width={900}
              height={700}
              priority
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-green-700 sm:px-4 sm:text-sm"
          >
            Agendar por WhatsApp
          </a>
        </div>

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Banner anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-bold text-dark-green shadow transition hover:bg-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-bold text-dark-green shadow transition hover:bg-white"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al banner ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === current ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

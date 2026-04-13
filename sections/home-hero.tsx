'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type BannerSlide = {
  id: number;
  desktop: string;
  mobile: string;
  alt: string;
  whatsappMessage: string;
};

const banners: BannerSlide[] = [
  {
    id: 1,
    desktop: '/images/banners/hero-desktop.jpg',
    mobile: '/images/banners/hero-desktop.jpg',
    alt: 'Banner principal Portal Verde',
    whatsappMessage: 'Hola, quiero agendar mantenimiento para mi jardín.'
  },
  {
    id: 2,
    desktop: '/images/banners/slide-1-desktop.jpg',
    mobile: '/images/banners/slide-1-mobile.jpg',
    alt: 'Banner promocional Portal Verde',
    whatsappMessage: 'Hola, quiero consultar sobre césped premium e instalación.'
  }

  // Agregá más banners así:
  // {
  //   id: 3,
  //   desktop: '/images/banners/slide-2-desktop.jpg',
  //   mobile: '/images/banners/slide-2-mobile.jpg',
  //   alt: 'Otro banner Portal Verde',
  //   whatsappMessage: 'Hola, quiero solicitar una cotización.'
  // }
];

export function HomeHero() {
  const whatsappNumber = '595981077600';
  const [current, setCurrent] = useState(0);
  const hasCarousel = banners.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [hasCarousel]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const currentBanner = banners[current];
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentBanner.whatsappMessage
  )}`;

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative">
        <div className="hidden md:block">
          <Image
            src={currentBanner.desktop}
            alt={currentBanner.alt}
            width={1920}
            height={700}
            priority
            className="block h-auto w-full object-contain bg-white"
          />
        </div>

        <div className="block md:hidden">
          <Image
            src={currentBanner.mobile}
            alt={currentBanner.alt}
            width={900}
            height={700}
            priority
            className="block h-auto w-full object-contain bg-white"
          />
        </div>

        {/* Botón WhatsApp */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-green-700 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Agendar por WhatsApp
          </a>
        </div>

        {hasCarousel ? (
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
              {banners.map((banner, index) => (
                <button
                  key={banner.id}
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

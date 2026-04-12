import Link from 'next/link';

export function HomeHero() {
  const whatsappNumber = '595981077600';
  const message = 'Hola, quiero consultar sobre césped e instalación.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="rounded-xl overflow-hidden">

      <div className="relative">

        {/* Imagen */}
        <img
          src="/images/banners/hero-desktop.jpg"
          alt="Portal Verde"
          className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover"
        />

        {/* Overlay opcional suave */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Botón WhatsApp sobre el banner */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition"
          >
            Agendar por WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
}

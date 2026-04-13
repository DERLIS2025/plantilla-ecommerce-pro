export function HomeHero() {
  const whatsappNumber = '595981077600';
  const message = 'Hola, quiero consultar sobre césped e instalación.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="overflow-hidden rounded-xl bg-white">
      <div className="relative">
        <img
          src="/images/banners/hero-desktop.jpg"
          alt="Portal Verde"
          className="block h-[260px] w-full object-contain bg-white sm:h-[320px] lg:h-[420px]"
        />

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white shadow-lg transition hover:bg-green-700"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
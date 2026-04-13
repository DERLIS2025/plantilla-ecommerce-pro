'use client';

export function WhatsAppFloating() {
  const phone = '595981077600';
  const message =
    'Hola, soy Tati, la asistente virtual de Portal Verde. ¿En qué puedo ayudarte hoy?';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition hover:scale-105 hover:shadow-2xl"
    >
      {/* Icono animado */}
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] shadow-md animate-tati-bounce">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/60 animate-ping"></span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 h-7 w-7"
        >
          <path d="M12 2a8 8 0 0 0-6.93 12l-1.02 3.4a1 1 0 0 0 1.24 1.24L8.7 17.6A8 8 0 1 0 12 2Zm0 2a6 6 0 0 1 5.2 9l-.17.3.64 2.14-2.14-.64-.3.17A6 6 0 1 1 12 4Zm-2 5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Zm0 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
        </svg>
      </span>

      {/* Texto */}
      <span className="hidden sm:block leading-tight">
        <span className="block text-xs font-medium opacity-90">
          Tati, asistente virtual
        </span>
        <span className="block text-sm font-semibold">
          Escribinos por WhatsApp
        </span>
      </span>
    </a>
  );
}

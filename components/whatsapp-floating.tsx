'use client';

export function WhatsAppFloating() {
  const phone = '595981077600';
  const message =
    'Hola, soy tu asistente virtual de Portal Verde. ¿En qué puedo ayudarte hoy?';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#25D366]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M19.11 17.41c-.29-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.08-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.13-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.15-.64-1.55-.88-2.12-.23-.56-.46-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.43.9 1.43 2.57 2.81 2.93 3.04.36.24 4.05 1.95 5.67.27 1.62-1.67 1.43-2.81 1-3.05z" />
          <path d="M16.02 3.2C9.02 3.2 3.34 8.88 3.34 15.88c0 2.24.58 4.43 1.7 6.36L3.2 28.8l6.72-1.77c1.86 1.01 3.95 1.54 6.1 1.54h.01c7 0 12.68-5.68 12.68-12.68 0-3.39-1.32-6.58-3.72-8.97-2.4-2.4-5.59-3.72-8.97-3.72zm0 23.16h-.01c-1.9 0-3.76-.51-5.38-1.47l-.39-.23-3.99 1.05 1.07-3.89-.25-.4a10.43 10.43 0 01-1.6-5.54c0-5.75 4.68-10.43 10.45-10.43 2.79 0 5.4 1.08 7.37 3.05a10.34 10.34 0 013.06 7.38c0 5.76-4.68 10.43-10.43 10.43z" />
        </svg>
      </span>

      <span className="hidden sm:block">
        <span className="block text-xs font-medium leading-none opacity-90">
          Asistente virtual
        </span>
        <span className="block text-sm font-semibold leading-tight">
          Escribinos por WhatsApp
        </span>
      </span>
    </a>
  );
}

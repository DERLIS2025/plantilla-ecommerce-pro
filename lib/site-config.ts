export const siteConfig = {
  name: 'Portal Verde',
  description:
    'Venta e instalación de césped, productos de jardinería, paisajismo y mantenimiento en Asunción y Gran Asunción.',

  url: 'https://portalverde.com.py',

  contact: {
    phoneDisplay: '+595 981 077 600',
    phoneRaw: '+595981077600',
    whatsapp: '595981077600',
    email: 'hola@portalverde.com.py',
    coverage: 'Asunción y Gran Asunción',
    schedule: 'Lunes a sábado'
  },

  social: {
    instagram: 'https://www.instagram.com/portalverde_py/',
    facebook:
      'https://www.facebook.com/p/Portal-Verde-61550756372757/'
  }
} as const;

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

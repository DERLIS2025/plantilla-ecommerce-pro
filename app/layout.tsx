import type { Metadata } from 'next';
import { Manrope } from "next/font/google";

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';
import '../styles/design-tokens.css';

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Portal Verde | Jardinería y vida verde',
    template: '%s | Portal Verde'
  },
  description:
    'Portal Verde: ecommerce paraguayo de plantas, macetas, herramientas y productos para jardín.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PY">
      <body
        className={`${manrope.variable} bg-[#f8faf8] font-sans text-[#172019] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

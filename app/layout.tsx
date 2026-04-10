import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Atelier&Co | Premium Ecommerce Starter',
    template: '%s | Atelier&Co'
  },
  description:
    'A premium ecommerce starter built with Next.js App Router, TypeScript, and Tailwind CSS.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

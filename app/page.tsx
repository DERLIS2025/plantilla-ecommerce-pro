import { CategorySidebar } from '@/components/category-sidebar';
import { WhatsAppFloating } from '@/components/whatsapp-floating';
import { cesped, paisajismo } from '@/lib/data';
import { HomeHero } from '@/sections/home-hero';
import { ProductSection } from '@/sections/product-section';
import { ServicesSection } from '@/sections/services-section';

export default function HomePage() {
  return (
    <>
      <main className="container-shell space-y-5 py-4 sm:space-y-6 sm:py-6 lg:py-10">
        {/* Mobile: categorías rápidas y luego oferta principal */}
        <div className="space-y-4 lg:hidden">
          <CategorySidebar />
          <HomeHero />
        </div>

        {/* Desktop: sidebar y hero juntos */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <CategorySidebar />
          <HomeHero />
        </div>


        <ProductSection title="Césped" products={cesped} />

        <ServicesSection />

        <ProductSection title="Paisajismo" products={paisajismo} />
      </main>

      <WhatsAppFloating />
    </>
  );
}

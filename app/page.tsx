import { CategorySidebar } from '@/components/category-sidebar';
import { cesped, paisajismo } from '@/lib/data';
import { HomeHero } from '@/sections/home-hero';
import { ProductSection } from '@/sections/product-section';
import { PromoStrip } from '@/sections/promo-strip';
import { ServicesSection } from '@/sections/services-section';

export default function HomePage() {
  return (
    <div className="container-shell section-space space-y-6">
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <CategorySidebar />
        <HomeHero />
      </div>

      <PromoStrip />

      <ProductSection title="Césped" products={cesped} />

      <ServicesSection />

      <ProductSection title="Paisajismo" products={paisajismo} />
    </div>
  );
}
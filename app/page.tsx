import { CategorySidebar } from '@/components/category-sidebar';
import {
  accesoriosJardin,
  decoracionJardin,
  paisajismo,
  pastos
} from '@/lib/data';
import { HomeHero } from '@/sections/home-hero';
import { ProductSection } from '@/sections/product-section';
import { PromoStrip } from '@/sections/promo-strip';

export default function HomePage() {
  return (
    <div className="container-shell section-space space-y-6">
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <CategorySidebar />
        <HomeHero />
      </div>

      <PromoStrip />

      <ProductSection title="Pastos" products={pastos} />
      <ProductSection title="Paisajismo" products={paisajismo} />
      <ProductSection title="Decoración de jardín" products={decoracionJardin} />
      <ProductSection title="Accesorios de jardín" products={accesoriosJardin} />
    </div>
  );
}
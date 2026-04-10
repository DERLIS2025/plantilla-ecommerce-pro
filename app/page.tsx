import { CategorySidebar } from '@/components/category-sidebar';
import { masVendidos, nuevosProductos, ofertas, recomendados } from '@/lib/data';
import { HomeHero } from '@/sections/home-hero';
import { ProductSection } from '@/sections/product-section';
import { PromoStrip } from '@/sections/promo-strip';

export default function HomePage() {
  return (
    <div className="container-shell section-space space-y-6">
      {/* Layout principal */}
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <CategorySidebar />
        <HomeHero />
      </div>

      {/* Promos */}
      <PromoStrip />

      {/* Secciones ecommerce */}
      <ProductSection title="Nuevos productos" products={nuevosProductos} />
      <ProductSection title="Más vendidos" products={masVendidos} />
      <ProductSection title="Ofertas" products={ofertas} />
      <ProductSection title="Recomendados" products={recomendados} />
    </div>
  );
}
import { BenefitsSection } from '@/sections/benefits';
import { FeaturedCategoriesSection } from '@/sections/featured-categories';
import { FeaturedProductsSection } from '@/sections/featured-products';
import { HeroSection } from '@/sections/hero';
import { NewsletterSection } from '@/sections/newsletter';
import { PromoBannerSection } from '@/sections/promo-banner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
      <PromoBannerSection />
      <BenefitsSection />
      <NewsletterSection />
    </>
  );
}

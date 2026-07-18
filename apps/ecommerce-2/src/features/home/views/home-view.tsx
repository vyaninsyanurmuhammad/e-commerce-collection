// apps/ecommerce-2/src/features/home/views/home-view.tsx
import { StorefrontFooter } from "@/features/storefront";
import { HomeHeroCarousel } from "../components/home-hero-carousel";
import { HomePressMarquee } from "../components/home-press-marquee";
import { HomeTrendingSection } from "../components/home-trending-section";
import { HomeFeaturedCollections } from "../components/home-featured-collections";
import { HomePromoCountdown } from "../components/home-promo-countdown";
import { HomeBestSellersSection } from "../components/home-best-sellers-section";
import { HomeModernDetails } from "../components/home-modern-details";
import { HomeEffortlessEveryday } from "../components/home-effortless-everyday";

export function HomeView() {
  return (
    <div>
      <HomeHeroCarousel />
      <HomePressMarquee />
      <HomeTrendingSection />
      <HomeFeaturedCollections />
      <HomePromoCountdown />
      <HomeBestSellersSection />
      <HomeModernDetails />
      <HomeEffortlessEveryday />
      <StorefrontFooter />
    </div>
  );
}

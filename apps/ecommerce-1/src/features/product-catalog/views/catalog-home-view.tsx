import Image from "next/image";
import {
  CATEGORY_1,
  CATEGORY_2,
  FEATURED_PRODUCTS,
  FEATURED_TOPS,
  NEW_ARRIVALS,
  ON_SALE,
  SHOP_THE_LOOK,
  withVariants,
} from "../constants/product-constants";
import { CatalogHero } from "../components/catalog-hero";
import { SectionHeading } from "../components/section-heading";
import { ProductGrid } from "../components/product-grid";
import { CatalogCategoryBannerRow } from "../components/catalog-category-banner-row";
import { CatalogSaleBanner } from "../components/catalog-sale-banner";
import { CatalogNewsletterSection } from "../components/catalog-newsletter-section";
import { CatalogFooter } from "../components/catalog-footer";

export function CatalogHomeView() {
  return (
    <div>
      <CatalogHero />
      <section id="new-arrivals" className="px-8 pt-20 pb-10">
        <SectionHeading>New Arrivals</SectionHeading>
        <ProductGrid products={withVariants(NEW_ARRIVALS)} />
      </section>
      <CatalogCategoryBannerRow banners={CATEGORY_1} />
      <section className="px-8 pt-20 pb-10">
        <SectionHeading>Featured Tops</SectionHeading>
        <ProductGrid products={withVariants(FEATURED_TOPS)} />
      </section>
      <CatalogCategoryBannerRow banners={CATEGORY_2} />
      <section className="px-8 pt-20 pb-10">
        <SectionHeading>Featured Products</SectionHeading>
        <ProductGrid products={withVariants(FEATURED_PRODUCTS)} />
      </section>

      <section className="grid grid-cols-[1.1fr_0.9fr] items-start gap-11 px-8 pt-20">
        <div>
          <SectionHeading>Shop the Look</SectionHeading>
          <ProductGrid products={withVariants(SHOP_THE_LOOK)} variant="compact" />
        </div>
        <div className="sticky top-25 aspect-[2/3] max-h-[calc(100vh-140px)] overflow-hidden">
          <Image src="https://picsum.photos/seed/meere-look/1000/1500" alt="look" fill sizes="45vw" className="object-cover" />
        </div>
      </section>

      <CatalogSaleBanner />

      <section id="on-sale" className="px-8 pt-20 pb-10">
        <SectionHeading>On Sale</SectionHeading>
        <ProductGrid products={withVariants(ON_SALE)} />
      </section>

      <CatalogNewsletterSection />
      <CatalogFooter />
    </div>
  );
}

import {
  CATEGORY_1,
  CATEGORY_2,
  FEATURED_PRODUCTS,
  FEATURED_TOPS,
  NEW_ARRIVALS,
  withVariants,
} from "../constants/product-constants";
import { CatalogHero } from "../components/catalog-hero";
import { SectionHeading } from "../components/section-heading";
import { ProductGrid } from "../components/product-grid";
import { CatalogCategoryBannerRow } from "../components/catalog-category-banner-row";

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
    </div>
  );
}

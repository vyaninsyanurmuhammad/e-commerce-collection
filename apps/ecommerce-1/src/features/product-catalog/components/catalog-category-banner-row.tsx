import type { CategoryBannerData } from "../types/product-types";
import { CatalogCategoryBanner } from "./catalog-category-banner";

export function CatalogCategoryBannerRow({ banners }: { banners: CategoryBannerData[] }) {
  return (
    <section className="mt-5 grid grid-cols-2">
      {banners.map((b) => (
        <CatalogCategoryBanner key={b.title} banner={b} />
      ))}
    </section>
  );
}

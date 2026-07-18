// apps/ecommerce-2/src/features/home/components/home-trending-section.tsx
"use client";
import { useRevealOnScroll } from "@/features/product-catalog";
import { PRODUCTS, ProductGrid } from "@/features/product-catalog";

export function HomeTrendingSection() {
  const headingRef = useRevealOnScroll<HTMLHeadingElement>();

  return (
    <section className="px-12 pt-15 pb-20">
      <h4
        ref={headingRef}
        className="mb-8 -translate-y-6 font-outfit text-[32px] font-semibold opacity-0 transition-[opacity,transform] duration-600"
      >
        Trending Now
      </h4>
      <ProductGrid products={PRODUCTS.slice(0, 4)} columns={4} swatchesInteractive />
    </section>
  );
}

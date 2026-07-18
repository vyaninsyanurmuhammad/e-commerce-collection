"use client";
import { useMemo, useState } from "react";
import { PRODUCTS, ProductGrid, useRevealOnScroll } from "@/features/product-catalog";

const FILTERS = [
  { key: "all", label: "ALL" },
  { key: "men", label: "MEN" },
  { key: "women", label: "WOMEN" },
  { key: "new", label: "NEW ARRIVALS" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function HomeBestSellersSection() {
  const headingRef = useRevealOnScroll<HTMLHeadingElement>();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    const base = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.tags.includes(filter));
    return base.slice(0, 8);
  }, [filter]);

  return (
    <section className="px-12 py-20">
      <h4
        ref={headingRef}
        className="mb-7 -translate-y-6 font-outfit text-[32px] font-semibold opacity-0 transition-[opacity,transform] duration-600"
      >
        Best Sellers
      </h4>
      <div className="mb-9 flex gap-7">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`border-b-2 pb-1.5 text-sm tracking-wide ${
              filter === f.key ? "border-ink font-semibold text-ink" : "border-transparent text-ink/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ProductGrid products={filtered} columns={4} swatchesInteractive />
    </section>
  );
}

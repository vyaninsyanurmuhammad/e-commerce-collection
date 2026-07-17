// apps/ecommerce-1/src/features/product-catalog/views/catalog-view.tsx
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { CATALOG_ALL, CATALOG_FILTERS, NEW_ARRIVALS, ON_SALE, type CatalogFilterKey, withVariants } from "../constants/product-constants";
import { ProductGrid } from "../components/product-grid";

export function CatalogView() {
  const [filter, setFilter] = useState<CatalogFilterKey>("all");

  const products = useMemo(() => {
    const base = filter === "new" ? NEW_ARRIVALS : filter === "sale" ? ON_SALE : CATALOG_ALL;
    return withVariants(base);
  }, [filter]);

  return (
    <section className="mx-auto max-w-400 px-8 pt-12 pb-20">
      <div className="mb-6 flex items-center gap-1.5 text-xs font-medium text-neutral-400">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="text-ink">Shop All</span>
      </div>
      <h1 className="mb-6 font-archivo text-[34px] font-extrabold tracking-tight text-ink">Shop All</h1>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {CATALOG_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`px-4.5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors ${
              filter === f.key ? "border border-ink bg-ink text-white" : "border border-neutral-300 bg-white text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ProductGrid products={products} />
    </section>
  );
}

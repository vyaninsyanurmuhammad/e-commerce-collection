// apps/ecommerce-2/src/features/collection/views/collection-view.tsx
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { PRODUCTS, ProductGrid, SIZES, SWATCH_COLORS } from "@/features/product-catalog";

type Category = "all" | "women" | "men" | "new";
type Sort = "featured" | "price-asc" | "price-desc" | "newest";

const CATEGORY_DEFS: { key: Category; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "women", label: "Women's Edit" },
  { key: "men", label: "Men's Edit" },
  { key: "new", label: "New Arrivals" },
];

const TITLE_MAP: Record<Category, string> = {
  all: "Shop All",
  women: "Women's Edit",
  men: "Men's Edit",
  new: "New Arrivals",
};

const PER_PAGE = 8;

export function CollectionView({ initialCategory }: { initialCategory?: string }) {
  const [category, setCategory] = useState<Category>(
    initialCategory === "women" || initialCategory === "men" || initialCategory === "new" ? initialCategory : "all",
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("featured");
  const [columns, setColumns] = useState<3 | 4>(3);
  const [page, setPage] = useState(1);

  const uniqueColors = useMemo(() => Array.from(new Set(PRODUCTS.flatMap((p) => p.colors))), []);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category === "new") list = list.filter((p) => p.tags.includes("new"));
    else if (category !== "all") list = list.filter((p) => p.category === category);
    if (selectedSizes.length) list = list.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    if (selectedColors.length) list = list.filter((p) => p.colors.some((c) => selectedColors.includes(c)));

    if (sort === "price-asc") list = list.slice().sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = list.slice().sort((a, b) => b.price - a.price);
    else if (sort === "newest") list = list.slice().sort((a, b) => b.id - a.id);

    return list;
  }, [category, selectedSizes, selectedColors, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageProducts = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const toggleSize = (size: string) => {
    setSelectedSizes((s) => (s.includes(size) ? s.filter((x) => x !== size) : [...s, size]));
    setPage(1);
  };
  const toggleColor = (color: string) => {
    setSelectedColors((s) => (s.includes(color) ? s.filter((x) => x !== color) : [...s, color]));
    setPage(1);
  };
  const clearFilters = () => {
    setCategory("all");
    setSelectedSizes([]);
    setSelectedColors([]);
    setPage(1);
  };

  return (
    <div>
      <div className="px-12 pt-10">
        <div className="mb-3.5 text-[13px] text-ink/50">
          <Link href="/" className="text-inherit">
            Home
          </Link>{" "}
          / Shop
        </div>
        <h1 className="mb-2 font-outfit text-4xl font-semibold">{TITLE_MAP[category]}</h1>
        <p className="mb-8 text-sm text-ink/50">{filtered.length} items</p>
      </div>

      <div className="grid grid-cols-[240px_1fr] items-start gap-10 px-12 pb-20">
        <aside className="sticky top-22">
          <div className="mb-5 flex items-center justify-between">
            <h6 className="text-[13px] tracking-wide text-ink/60">FILTERS</h6>
            <button type="button" onClick={clearFilters} className="text-[13px] text-accent">
              Clear
            </button>
          </div>

          <div className="mb-7">
            <h6 className="mb-3 text-sm font-semibold">Category</h6>
            <div className="flex flex-col gap-2">
              {CATEGORY_DEFS.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => {
                    setCategory(c.key);
                    setPage(1);
                  }}
                  className={`text-left text-sm ${category === c.key ? "font-semibold text-ink" : "text-ink/50"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <h6 className="mb-3 text-sm font-semibold">Size</h6>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => {
                const on = selectedSizes.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleSize(s)}
                    className={`rounded-full px-3.5 py-1.5 text-[13px] ${on ? "bg-ink text-white" : "border border-neutral-300 bg-white text-ink"}`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-7">
            <h6 className="mb-3 text-sm font-semibold">Color</h6>
            <div className="flex flex-wrap gap-2.5">
              {uniqueColors.map((c) => {
                const on = selectedColors.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleColor(c)}
                    aria-label={c}
                    className="size-6.5 rounded-full"
                    style={{
                      background: SWATCH_COLORS[c],
                      border: on ? "2px solid var(--ink)" : "2px solid transparent",
                      outline: on ? "1px solid var(--ink)" : "none",
                      outlineOffset: "2px",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {([3, 4] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setColumns(d)}
                  className={`border-b-2 px-3 py-1.5 text-[13px] ${columns === d ? "border-ink text-ink" : "border-transparent text-ink/50"}`}
                >
                  {d} Columns
                </button>
              ))}
            </div>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as Sort);
                setPage(1);
              }}
              className="rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {pageProducts.length > 0 ? (
            <ProductGrid products={pageProducts} columns={columns} />
          ) : (
            <div className="py-20 text-center text-[15px] text-ink/50">No products match your filters.</div>
          )}

          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`flex size-9 items-center justify-center rounded-full text-sm ${
                  n === currentPage ? "bg-ink text-white" : "border border-neutral-300 bg-white text-ink"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-10 bg-panel px-12 pt-12 pb-7">
        <div className="flex justify-between border-t border-ink/10 pt-5.5 text-[13px] text-ink/60">
          <span>© 2026 Amara. All Rights Reserved.</span>
          <span>Built with care.</span>
        </div>
      </footer>
    </div>
  );
}

import type { Product } from "../types/product-types";
import { ProductCard } from "./product-card";

export function ProductGrid({
  products,
  columns = 4,
  swatchesInteractive = false,
}: {
  products: Product[];
  columns?: 3 | 4;
  swatchesInteractive?: boolean;
}) {
  return (
    <div className={`grid gap-7 ${columns === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} swatchesInteractive={swatchesInteractive} />
      ))}
    </div>
  );
}

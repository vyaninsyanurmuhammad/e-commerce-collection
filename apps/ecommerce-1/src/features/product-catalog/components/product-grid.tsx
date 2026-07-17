import type { ProductWithVariants } from "../types/product-types";
import { ProductCard } from "./product-card";

export function ProductGrid({
  products,
  variant = "default",
}: {
  products: ProductWithVariants[];
  variant?: "default" | "compact";
}) {
  return (
    <div className={variant === "compact" ? "grid grid-cols-2 gap-6" : "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7"}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} variant={variant} />
      ))}
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/features/cart";
import type { Product } from "../types/product-types";
import { SWATCH_COLORS } from "../constants/product-constants";

export function ProductCard({
  product,
  swatchesInteractive = false,
}: {
  product: Product;
  swatchesInteractive?: boolean;
}) {
  const { addToCart } = useCart();
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="relative mb-3.5 aspect-[816/1000] overflow-hidden rounded-lg bg-image-bg">
        {product.src && <Image src={product.src} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />}
        {product.badge && (
          <div className="absolute top-3.5 -right-7.5 rotate-45 bg-accent px-10 py-1 text-[11px] font-semibold tracking-wide text-white">
            {product.badge}
          </div>
        )}
      </div>
      <div className="mb-1.5 text-[15px]">{product.name}</div>
      <div className="mb-2.5 flex gap-2.5 text-[15px]">
        <span>${product.price}</span>
        <span className="text-neutral-400 line-through">${product.compare}</span>
      </div>
      <div className="mb-3 flex gap-2">
        {product.colors.slice(0, 3).map((c, i) =>
          swatchesInteractive ? (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedColorIdx(i)}
              aria-label={c}
              className="size-5 rounded-full transition-all"
              style={{
                background: SWATCH_COLORS[c],
                border: i === selectedColorIdx ? "2px solid var(--ink)" : "2px solid transparent",
                outline: i === selectedColorIdx ? "1px solid var(--ink)" : "none",
                outlineOffset: "1px",
              }}
            />
          ) : (
            <span key={c} className="size-4 rounded-full" style={{ background: SWATCH_COLORS[c] }} />
          ),
        )}
      </div>
      <button
        type="button"
        onClick={() => addToCart(product.id, product.colors[selectedColorIdx] ?? null)}
        className="w-full rounded-full border border-ink py-2.5 text-[13px] text-ink"
      >
        Add to Cart
      </button>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/features/cart";
import type { ProductWithVariants } from "../types/product-types";

export function ProductCard({
  product,
  variant = "default",
}: {
  product: ProductWithVariants;
  variant?: "default" | "compact";
}) {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const isWished = !!wishlist[product.id];

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[848/1187] overflow-hidden bg-image-bg">
        <Image src={product.img} alt={product.name} fill sizes="(max-width: 768px) 50vw, 220px" className="object-cover" />
        {product.img2 && (
          <Image
            src={product.img2}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 220px"
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-accent px-2 py-1.5 text-[10px] font-semibold tracking-wide text-white">
            {product.badge}
          </span>
        )}
        {variant !== "compact" && (
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-label="Toggle wishlist"
            className={cn(
              "absolute top-2.5 right-2.5 z-10 flex size-7.5 items-center justify-center rounded-full bg-white/90 text-[15px]",
              isWished ? "text-accent" : "text-ink",
            )}
          >
            &hearts;
          </button>
        )}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute inset-x-2.5 bottom-2.5 bg-ink py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          Add to Bag
        </button>
      </div>

      <div>
        <Link
          href={`/product/${product.id}`}
          className={cn(
            "block w-full truncate font-semibold text-ink",
            variant === "compact" ? "mb-1 text-xs" : "mb-1 text-[13px]",
          )}
        >
          {product.name}
        </Link>

        <div className={cn("relative", variant === "compact" ? "h-6" : "h-[26px]")}>
          <div className="absolute inset-0 flex items-center gap-2 text-[13px] font-medium transition-opacity duration-200 group-hover:opacity-0">
            <span className={product.compareAt ? "text-accent" : "text-ink"}>${product.price} USD</span>
            {product.compareAt && <span className="text-neutral-400 line-through">${product.compareAt} USD</span>}
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center gap-2.5 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
            <div className="flex gap-1">
              {product.sizes.map((sz) => (
                <span key={sz} className="border border-neutral-300 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-500">
                  {sz}
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              {product.colors.map((cl) => (
                <span key={cl} className="size-3.5 rounded-full border border-neutral-300" style={{ background: cl }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

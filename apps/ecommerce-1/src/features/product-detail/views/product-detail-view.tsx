// apps/ecommerce-1/src/features/product-detail/views/product-detail-view.tsx
"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/features/cart";
import {
  ALL_PRODUCTS,
  COLORWAYS,
  PRODUCT_MAP,
  SIZES,
  describe,
  withVariants,
} from "@/features/product-catalog/constants/product-constants";

export function ProductDetailView({ id }: { id: string }) {
  const { addToCartWithSize } = useCart();
  const product = PRODUCT_MAP[id] ?? ALL_PRODUCTS[0]!;

  const [size, setSize] = useState<string | null>(null);
  const [colorIdx, setColorIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [imageIdx, setImageIdx] = useState(0);

  const images = [product.img, product.img2 ?? product.img];
  const priceColor = product.compareAt ? "text-accent" : "text-ink";
  const colors = COLORWAYS[0] ?? ["#0A0A0A"];

  const relatedProducts = useMemo(
    () => withVariants(ALL_PRODUCTS.filter((p) => p.id !== product.id)).slice(0, 4),
    [product.id],
  );

  return (
    <section className="mx-auto max-w-350 p-8">
      <div className="mb-6 flex items-center gap-1.5 text-xs font-medium text-neutral-400">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="grid grid-cols-2 items-start gap-14">
        <div>
          <div className="relative mb-3 aspect-[848/1187] overflow-hidden bg-image-bg">
            <Image src={images[imageIdx] ?? product.img} alt={product.name} fill sizes="45vw" className="object-cover" />
          </div>
          <div className="flex gap-2.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImageIdx(i)}
                className={`relative aspect-[848/1187] w-18 overflow-hidden border-2 ${i === imageIdx ? "border-ink" : "border-transparent"}`}
              >
                <Image src={src} alt="thumbnail" fill sizes="72px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="sticky top-30">
          {product.badge && (
            <div className="mb-3.5 inline-block bg-accent px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-white">
              {product.badge}
            </div>
          )}
          <h1 className="mb-3 font-archivo text-[32px] leading-tight font-extrabold tracking-tight text-ink">{product.name}</h1>
          <div className="mb-6 flex items-baseline gap-2.5 text-xl font-bold">
            <span className={priceColor}>${product.price} USD</span>
            {product.compareAt && <span className="text-base font-medium text-neutral-400 line-through">${product.compareAt} USD</span>}
          </div>
          <p className="mb-8 max-w-110 text-sm leading-relaxed text-neutral-600">{describe(product.name)}</p>

          <div className="mb-6">
            <div className="mb-2.5 text-[11px] font-bold tracking-wide text-ink uppercase">Color</div>
            <div className="flex gap-2.5">
              {colors.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`Color ${i + 1}`}
                  onClick={() => setColorIdx(i)}
                  className="size-7 rounded-full"
                  style={{ background: c, boxShadow: `0 0 0 2px #fff, 0 0 0 3px ${i === colorIdx ? "#0A0A0A" : "transparent"}` }}
                />
              ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="mb-2.5 text-[11px] font-bold tracking-wide text-ink uppercase">Size</div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSize(sz)}
                  className={`px-4 py-2.5 text-xs font-semibold ${
                    size === sz ? "border border-ink bg-ink text-white" : "border border-neutral-300 bg-white text-ink"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-3.5 border border-neutral-300">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-[15px] font-semibold text-ink">-</button>
              <span className="min-w-4 text-center text-sm font-semibold text-ink">{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} className="px-4 py-3 text-[15px] font-semibold text-ink">+</button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCartWithSize(product, size, qty)}
            className="mb-3 w-full bg-ink py-4.5 text-[13px] font-bold tracking-wide text-white uppercase"
          >
            Add to Bag
          </button>
          <div className="text-xs text-neutral-400">Free shipping on orders over $200. Free returns within 30 days.</div>
        </div>
      </div>

      <div className="mt-25">
        <h2 className="mb-7 font-archivo text-[26px] font-extrabold tracking-tight text-ink">You May Also Like</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="flex flex-col gap-3">
              <div className="relative aspect-[848/1187] overflow-hidden bg-image-bg">
                <Image src={p.img} alt={p.name} fill sizes="220px" className="object-cover" />
              </div>
              <div className="text-[13px] font-semibold text-ink">{p.name}</div>
              <div className={`text-[13px] font-medium ${p.compareAt ? "text-accent" : "text-ink"}`}>${p.price} USD</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

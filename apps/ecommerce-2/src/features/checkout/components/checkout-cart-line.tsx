// apps/ecommerce-2/src/features/checkout/components/checkout-cart-line.tsx
"use client";
import Image from "next/image";
import { useCart, type CartLineWithProduct } from "@/features/cart";

export function CheckoutCartLine({ line }: { line: CartLineWithProduct }) {
  const { updateCartQty, removeFromCart } = useCart();
  if (!line.product) return null;

  const variant = [line.color, line.size].filter(Boolean).join(" / ") || "Standard";

  return (
    <div className="flex items-center gap-4.5 border-b border-neutral-100 py-5 last:border-b-0">
      <div className="relative h-27 w-22 flex-none overflow-hidden rounded-[10px] bg-image-bg">
        {line.product.src && <Image src={line.product.src} alt={line.product.name} fill sizes="88px" className="object-cover" />}
      </div>
      <div className="flex-1">
        <div className="mb-1 text-[15px] font-medium">{line.product.name}</div>
        <div className="mb-3.5 text-[13px] text-ink/50 capitalize">{variant}</div>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-neutral-200">
            <button
              type="button"
              onClick={() => updateCartQty(line.index, line.qty - 1)}
              className="flex size-7 items-center justify-center rounded-full text-sm"
            >
              −
            </button>
            <span className="w-5.5 text-center text-sm">{line.qty}</span>
            <button
              type="button"
              onClick={() => updateCartQty(line.index, line.qty + 1)}
              className="flex size-7 items-center justify-center rounded-full text-sm"
            >
              +
            </button>
          </div>
          <button type="button" onClick={() => removeFromCart(line.index)} className="text-[13px] text-accent">
            Remove
          </button>
        </div>
      </div>
      <div className="text-[15px] font-semibold">${line.lineTotal}</div>
    </div>
  );
}

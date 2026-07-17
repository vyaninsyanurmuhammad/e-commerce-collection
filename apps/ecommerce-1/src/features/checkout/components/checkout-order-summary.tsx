// apps/ecommerce-1/src/features/checkout/components/checkout-order-summary.tsx
"use client";
import Image from "next/image";
import { lineTotal } from "@/features/cart/lib/cart-math";
import { useCart } from "@/features/cart";

export function CheckoutOrderSummary() {
  const { cart, cartTotal } = useCart();

  return (
    <div className="bg-panel p-7">
      <div className="mb-5 text-[13px] font-bold tracking-wide text-ink uppercase">Order Summary</div>
      {cart.map((item) => (
        <div key={item.key} className="flex gap-3.5 border-b border-black/8 py-3">
          <div className="relative h-18.5 w-14 flex-none bg-neutral-200">
            <Image src={item.img} alt={item.name} fill sizes="56px" className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-ink">{item.name}</div>
            <div className="mt-0.5 text-[11px] font-medium text-neutral-500">
              Size {item.size} &middot; Qty {item.qty}
            </div>
          </div>
          <div className="flex-none text-xs font-semibold text-ink">${lineTotal(item).toFixed(2)}</div>
        </div>
      ))}
      <div className="flex justify-between pt-4 text-[13px] font-medium text-neutral-600">
        <span>Subtotal</span>
        <span>${cartTotal.toFixed(2)} USD</span>
      </div>
      <div className="flex justify-between pt-2 text-[13px] font-medium text-neutral-600">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="mt-2 flex justify-between border-t border-black/12 pt-3.5 font-archivo text-base font-bold text-ink">
        <span>Total</span>
        <span>${cartTotal.toFixed(2)} USD</span>
      </div>
    </div>
  );
}

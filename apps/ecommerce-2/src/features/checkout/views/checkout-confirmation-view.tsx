// apps/ecommerce-2/src/features/checkout/views/checkout-confirmation-view.tsx
"use client";
import Link from "next/link";
import { useCheckout } from "../hooks/use-checkout";
import { shippingCost } from "../lib/checkout-math";

export function CheckoutConfirmationView() {
  const { orderNumber, orderSubtotal, shipping } = useCheckout();
  const shipCost = shippingCost(orderSubtotal);
  const total = orderSubtotal + shipCost;

  return (
    <div className="mx-auto max-w-130 px-6 pt-20 pb-30 text-center">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-accent text-[28px] text-white">✓</div>
      <h2 className="mb-3 font-outfit text-[28px] font-semibold">Order Confirmed</h2>
      <p className="mb-2 text-[15px] text-ink/60">Order #{orderNumber}</p>
      <p className="mb-8 text-[15px] text-ink/60">A confirmation has been sent to {shipping.email || "your email"}.</p>
      <div className="mb-8 rounded-xl border border-neutral-100 bg-white p-6 text-left">
        <div className="mb-2.5 flex justify-between text-sm">
          <span>Items total</span>
          <span>${orderSubtotal}</span>
        </div>
        <div className="mb-2.5 flex justify-between text-sm">
          <span>Shipping</span>
          <span>{shipCost === 0 ? "Free" : `$${shipCost}`}</span>
        </div>
        <div className="mb-3.5 flex justify-between border-t border-neutral-200 pt-2.5 text-base font-semibold">
          <span>Total paid</span>
          <span>${total}</span>
        </div>
        <div className="text-[13px] text-ink/50">
          Shipping to {shipping.address || "—"}, {shipping.city || "—"}
        </div>
      </div>
      <Link href="/shop" className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm text-white">
        Continue Shopping
      </Link>
    </div>
  );
}

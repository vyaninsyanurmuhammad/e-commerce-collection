// apps/ecommerce-1/src/features/checkout/views/checkout-order-confirmation-view.tsx
"use client";
import Link from "next/link";
import { useCheckout } from "../hooks/use-checkout";

export function CheckoutOrderConfirmationView() {
  const { orderNumber } = useCheckout();

  return (
    <section className="mx-auto max-w-160 p-30 text-center">
      <div className="mx-auto mb-7 flex size-16 items-center justify-center rounded-full bg-ink text-[28px] font-bold text-white">
        &check;
      </div>
      <h1 className="mb-3.5 font-archivo text-[30px] leading-tight font-extrabold tracking-tight text-ink">Order Confirmed</h1>
      <p className="mb-2 text-sm leading-relaxed text-neutral-500">Thank you — your order has been placed.</p>
      <p className="mb-10 text-sm font-bold text-ink">Order #{orderNumber}</p>
      <Link href="/" className="inline-block bg-ink px-8 py-4 text-xs font-bold tracking-wide text-white uppercase">
        Continue Shopping
      </Link>
    </section>
  );
}

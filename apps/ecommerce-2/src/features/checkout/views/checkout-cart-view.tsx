// apps/ecommerce-2/src/features/checkout/views/checkout-cart-view.tsx
"use client";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { CheckoutCartLine } from "../components/checkout-cart-line";
import { CheckoutOrderSummary } from "../components/checkout-order-summary";

export function CheckoutCartView() {
  const { cartLines } = useCart();

  return (
    <div className="mx-auto grid max-w-240 grid-cols-[1.5fr_1fr] items-start gap-8 px-6 pt-14 pb-25">
      <div className="rounded-xl border border-neutral-100 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <h2 className="mb-5 font-outfit text-xl font-semibold">Your Cart</h2>
        {cartLines.length === 0 ? (
          <div className="py-15 text-center text-ink/50">
            <p className="mb-5">Your cart is empty.</p>
            <Link href="/shop" className="inline-block rounded-full bg-ink px-6 py-3 text-sm text-white">
              Shop Now
            </Link>
          </div>
        ) : (
          cartLines.map((line) => <CheckoutCartLine key={`${line.productId}-${line.color}-${line.size}`} line={line} />)
        )}
      </div>
      <CheckoutOrderSummary />
    </div>
  );
}

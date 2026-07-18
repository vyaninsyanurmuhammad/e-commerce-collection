// apps/ecommerce-2/src/features/checkout/components/checkout-order-summary.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/features/cart";
import { shippingCost } from "../lib/checkout-math";

export function CheckoutOrderSummary() {
  const router = useRouter();
  const { cart, cartSubtotal } = useCart();
  const shipping = shippingCost(cartSubtotal);
  const total = cartSubtotal + shipping;

  return (
    <div className="sticky top-22 rounded-xl border border-neutral-100 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <h5 className="mb-5 font-outfit text-lg font-semibold">Order Summary</h5>
      <div className="mb-3 flex justify-between text-sm text-ink/60">
        <span>Subtotal</span>
        <span>${cartSubtotal}</span>
      </div>
      <div className="mb-4 flex justify-between text-sm text-ink/60">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
      </div>
      <div className="mb-6 flex justify-between border-t border-neutral-200 pt-4 text-[17px] font-semibold">
        <span>Total</span>
        <span>${total}</span>
      </div>
      {cart.length > 0 ? (
        <button
          type="button"
          onClick={() => router.push("/checkout/shipping")}
          className="w-full rounded-full bg-ink py-3.5 text-sm text-white"
        >
          Continue to Shipping
        </button>
      ) : (
        <Link href="/shop" className="block w-full rounded-full bg-ink py-3.5 text-center text-sm text-white">
          Shop Now
        </Link>
      )}
    </div>
  );
}

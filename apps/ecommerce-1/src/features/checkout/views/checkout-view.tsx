// apps/ecommerce-1/src/features/checkout/views/checkout-view.tsx
import Link from "next/link";
import { CheckoutForm } from "../components/checkout-form";
import { CheckoutOrderSummary } from "../components/checkout-order-summary";

export function CheckoutView() {
  return (
    <section className="mx-auto max-w-275 p-12">
      <div className="mb-8 flex items-center gap-1.5 text-xs font-medium text-neutral-400">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="text-ink">Checkout</span>
      </div>
      <h1 className="mb-9 font-archivo text-[28px] font-extrabold tracking-tight text-ink">Checkout</h1>
      <div className="grid grid-cols-[1.3fr_1fr] items-start gap-14">
        <CheckoutForm />
        <CheckoutOrderSummary />
      </div>
    </section>
  );
}


// apps/ecommerce-2/src/features/checkout/views/checkout-payment-view.tsx
import { CheckoutPaymentForm } from "../components/checkout-payment-form";

export function CheckoutPaymentView() {
  return (
    <div className="mx-auto max-w-130 px-6 pt-14 pb-25">
      <div className="rounded-xl border border-neutral-100 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <h2 className="mb-6 font-outfit text-xl font-semibold">Payment</h2>
        <CheckoutPaymentForm />
      </div>
    </div>
  );
}

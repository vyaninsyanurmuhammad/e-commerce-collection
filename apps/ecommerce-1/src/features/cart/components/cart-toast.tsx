// apps/ecommerce-1/src/features/cart/components/cart-toast.tsx
"use client";
import { useCart } from "../hooks/use-cart";

export function CartToast() {
  const { toast } = useCart();
  return (
    <div
      className={`fixed bottom-6 left-6 z-300 transition-all duration-250 ${
        toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2.5 opacity-0"
      }`}
    >
      <div className="rounded-sm bg-ink px-5 py-3.5 text-[13px] font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        {toast}
      </div>
    </div>
  );
}

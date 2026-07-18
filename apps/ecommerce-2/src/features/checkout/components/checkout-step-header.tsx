// apps/ecommerce-2/src/features/checkout/components/checkout-step-header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STEPS = [
  { path: "/checkout", num: 1, label: "Cart" },
  { path: "/checkout/shipping", num: 2, label: "Shipping" },
  { path: "/checkout/payment", num: 3, label: "Payment" },
  { path: "/order-confirmation", num: 4, label: "Confirmation" },
];

export function CheckoutStepHeader() {
  const pathname = usePathname();
  const currentStep = STEPS.find((s) => s.path === pathname)?.num ?? 1;
  const progressPercent = (Math.max(0, currentStep - 1) / 3) * 100;

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-ink px-12 py-4.5">
        <Link href="/" className="flex items-center gap-2">
          <span className="size-3 rotate-45 bg-white" />
          <span className="font-outfit text-xl font-bold tracking-wide text-white">AMARA</span>
        </Link>
        <div className="text-sm text-white/75">Secure Checkout</div>
        <Link href="/shop" className="text-sm text-white">
          Continue Shopping
        </Link>
      </nav>

      <div className="relative mx-auto max-w-140 px-6 pt-12">
        <div className="absolute top-16 right-15 left-15 z-0 h-0.5 bg-neutral-200">
          <div className="h-full bg-ink transition-[width] duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="relative z-10 flex justify-between">
          {STEPS.map((s) => {
            const active = currentStep === s.num;
            const done = currentStep > s.num;
            return (
              <div key={s.num} className="flex flex-1 flex-col items-center gap-2.5">
                <div
                  className="flex size-8 items-center justify-center rounded-full text-[13px] font-semibold"
                  style={{
                    background: active || done ? "var(--ink)" : "#fff",
                    color: active || done ? "#fff" : "oklch(0.5 0.005 75)",
                    border: active || done ? "none" : "1px solid oklch(0.85 0.005 75)",
                  }}
                >
                  {done ? "✓" : s.num}
                </div>
                <div className="text-xs" style={{ color: active ? "var(--ink)" : "oklch(0.55 0.005 75)", fontWeight: active ? 600 : 400 }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

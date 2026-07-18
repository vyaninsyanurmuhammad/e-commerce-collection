// apps/ecommerce-2/src/app/(checkout)/layout.tsx
import { CheckoutStepHeader } from "@/features/checkout";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full text-ink">
      <CheckoutStepHeader />
      {children}
    </div>
  );
}

// apps/ecommerce-1/src/features/storefront/components/storefront-header.tsx
"use client";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { NAV } from "../constants/storefront-constants";
import { useMobileMenu } from "../hooks/use-mobile-menu";

const TICKER_TEXT = "FREE SHIPPING ON ORDERS OVER $200";

export function StorefrontHeader() {
  const { toggleMobileMenu } = useMobileMenu();
  const { cartCount, toggleCart } = useCart();

  return (
    <div className="sticky top-0 z-150">
      <div className="overflow-hidden bg-accent py-2.5">
        <div className="flex w-max animate-marquee gap-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="flex flex-none items-center gap-10">
              <span className="text-[11px] font-semibold tracking-wider whitespace-nowrap text-white">{TICKER_TEXT}</span>
              <span className="size-1.5 flex-none rounded-full bg-white" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-neutral-200 bg-white px-8 py-5">
        <div className="flex min-w-0 items-center gap-7">
          <button type="button" onClick={toggleMobileMenu} aria-label="Open menu" className="flex w-5 flex-none flex-col gap-1">
            <span className="h-[1.5px] w-full bg-ink" />
            <span className="h-[1.5px] w-[70%] bg-ink" />
          </button>
          <div className="flex flex-wrap gap-4.5">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="justify-self-center font-archivo text-[22px] font-black tracking-tight whitespace-nowrap text-ink">
          MEERE
        </Link>

        <div className="flex items-center justify-self-end gap-5.5">
          <span className="text-xs font-semibold tracking-wide text-ink uppercase">Search</span>
          <span className="text-xs font-semibold tracking-wide text-ink uppercase">Account</span>
          <button type="button" onClick={toggleCart} className="relative">
            <span className="text-xs font-semibold tracking-wide text-ink uppercase">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2.5 -right-3.5 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

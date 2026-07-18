// apps/ecommerce-2/src/features/storefront/components/storefront-header.tsx
"use client";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { useScrolledPastHero } from "../hooks/use-scrolled-past-hero";
import { COLLECTIONS_DROPDOWN, NAV_LINKS } from "../constants/storefront-constants";

export function StorefrontHeader({ hasHero = false }: { hasHero?: boolean }) {
  const scrolledPastHero = useScrolledPastHero();
  const { cartCount } = useCart();
  const solid = !hasHero || scrolledPastHero;

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-12 py-4.5 backdrop-blur-md transition-colors duration-400"
      style={{ background: solid ? "var(--ink)" : "transparent" }}
    >
      <Link href="/" className="flex items-center gap-2">
        <span className="size-3 rotate-45 bg-white" />
        <span className="font-outfit text-xl font-bold tracking-wide text-white">AMARA</span>
      </Link>
      <ul className="flex list-none gap-9 text-[15px] text-white">
        {NAV_LINKS.map((n) => (
          <li key={n.label}>
            <Link href={n.href} className="text-inherit">
              {n.label}
            </Link>
          </li>
        ))}
        <li className="group relative">
          <Link href="/shop" className="text-inherit">
            Collections ▾
          </Link>
          <div className="invisible absolute top-7 left-0 min-w-40 rounded-lg bg-white py-2.5 opacity-0 shadow-xl transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
            {COLLECTIONS_DROPDOWN.map((d) => (
              <Link key={d.label} href={d.href} className="block px-4.5 py-2 text-sm text-ink">
                {d.label}
              </Link>
            ))}
          </div>
        </li>
        <li>
          <a href="#" className="text-inherit">
            Journal
          </a>
        </li>
        <li>
          <a href="#" className="text-inherit">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-5.5 text-[15px] text-white">
        <span className="cursor-pointer">Search</span>
        <Link href="/checkout" className="text-inherit">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

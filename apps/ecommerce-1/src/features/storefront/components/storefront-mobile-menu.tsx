// apps/ecommerce-1/src/features/storefront/components/storefront-mobile-menu.tsx
"use client";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { NAV } from "../constants/storefront-constants";
import { useMobileMenu } from "../hooks/use-mobile-menu";

export function StorefrontMobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="left" showCloseButton={false} className="w-70 gap-0 rounded-none p-0">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <span className="font-archivo text-lg font-black text-ink">Menu</span>
          <SheetClose className="p-1 text-2xl text-neutral-500">&times;</SheetClose>
        </div>
        {NAV.map((n) => (
          <Link
            key={n.label}
            href={n.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-neutral-200 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink uppercase"
          >
            {n.label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}

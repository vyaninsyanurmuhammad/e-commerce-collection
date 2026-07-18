// apps/ecommerce-2/src/app/(storefront)/layout.tsx
"use client";
import { usePathname } from "next/navigation";
import { StorefrontAnnouncementBar, StorefrontHeader } from "@/features/storefront";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasHero = pathname === "/";

  return (
    <div className="relative w-full text-ink">
      {/* On the hero page, chrome floats over the hero (fixed, out of flow) so the
          transparent header shows the hero underneath instead of the page background.
          Other pages keep normal flow so content isn't hidden under a fixed bar. */}
      <div className={hasHero ? "fixed inset-x-0 top-0 z-50" : ""}>
        <StorefrontAnnouncementBar />
        <StorefrontHeader hasHero={hasHero} />
      </div>
      {children}
    </div>
  );
}

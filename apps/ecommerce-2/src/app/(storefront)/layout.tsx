// apps/ecommerce-2/src/app/(storefront)/layout.tsx
"use client";
import { usePathname } from "next/navigation";
import { StorefrontAnnouncementBar, StorefrontFooter, StorefrontHeader } from "@/features/storefront";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasHero = pathname === "/";

  return (
    <div className="relative w-full text-ink">
      <StorefrontAnnouncementBar />
      <StorefrontHeader hasHero={hasHero} />
      {children}
    </div>
  );
}

// apps/ecommerce-2/src/app/(storefront)/layout.tsx
import { StorefrontAnnouncementBar, StorefrontFooter, StorefrontHeader } from "@/features/storefront";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full text-ink">
      <StorefrontAnnouncementBar />
      <StorefrontHeader hasHero />
      {children}
      <StorefrontFooter />
    </div>
  );
}

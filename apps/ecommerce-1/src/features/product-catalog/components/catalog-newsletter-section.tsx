// apps/ecommerce-1/src/features/product-catalog/components/catalog-newsletter-section.tsx
import Image from "next/image";
import { CatalogNewsletterForm } from "./catalog-newsletter-form";

export function CatalogNewsletterSection() {
  return (
    <section className="mt-15 grid grid-cols-[0.9fr_1.1fr] bg-panel">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src="https://picsum.photos/seed/meere-join/1000/1250" alt="join" fill sizes="45vw" className="object-cover" />
      </div>
      <div className="flex max-w-115 flex-col justify-center p-15">
        <h2 className="mb-3 font-archivo text-[30px] font-extrabold tracking-tight text-ink">Join the Movement</h2>
        <p className="mb-6 text-sm font-medium text-neutral-500">Get 10% off on your first order</p>
        <CatalogNewsletterForm />
      </div>
    </section>
  );
}

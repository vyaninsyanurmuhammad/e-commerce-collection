// apps/ecommerce-1/src/features/product-catalog/components/catalog-sale-banner.tsx
"use client";
import Image from "next/image";
import { useRevealOnScroll } from "../hooks/use-reveal-on-scroll";

export function CatalogSaleBanner() {
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();
  const bodyRef = useRevealOnScroll<HTMLParagraphElement>();

  return (
    <section className="relative mt-20 flex h-[70vh] min-h-120 items-center overflow-hidden">
      <Image src="https://picsum.photos/seed/meere-sale/2200/1400" alt="sale" fill sizes="100vw" className="object-cover brightness-[.7]" />
      <div className="relative z-10 max-w-225 px-10">
        <h2
          ref={titleRef}
          className="mb-5 -translate-y-6 font-archivo text-[clamp(40px,7vw,90px)] leading-[0.95] font-black tracking-tight text-accent opacity-0 transition-[opacity,transform] duration-600"
        >
          We Are On Sale
        </h2>
        <p
          ref={bodyRef}
          className="mb-6.5 max-w-120 -translate-y-6 text-base leading-relaxed font-medium text-white opacity-0 transition-[opacity,transform] delay-75 duration-600"
        >
          Selected pieces from previous collections, offered at a reduced price while maintaining the same focus on
          quality, comfort, and refined design.
        </p>
        <a href="#on-sale" className="inline-block bg-white px-7.5 py-4 text-xs font-bold tracking-wide text-ink uppercase transition-colors hover:bg-neutral-200">
          Shop Sale
        </a>
      </div>
    </section>
  );
}

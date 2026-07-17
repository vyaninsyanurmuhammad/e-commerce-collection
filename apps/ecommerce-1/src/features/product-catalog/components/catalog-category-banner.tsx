"use client";
import Image from "next/image";
import { useRevealOnScroll } from "../hooks/use-reveal-on-scroll";
import type { CategoryBannerData } from "../types/product-types";

export function CatalogCategoryBanner({ banner }: { banner: CategoryBannerData }) {
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();

  return (
    <div className="group relative h-140 overflow-hidden">
      <Image
        src={banner.img}
        alt={banner.title}
        fill
        sizes="50vw"
        className="object-cover brightness-[.78] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-9 left-9 z-10">
        <h3
          ref={titleRef}
          className="mb-4 -translate-y-6 font-archivo text-[30px] font-extrabold tracking-tight text-white opacity-0 transition-[opacity,transform] duration-600"
        >
          {banner.title}
        </h3>
        {/* href is "#" in the source data itself — the prototype never wires a real target here; ported as-is, not invented. */}
        <a
          href={banner.href}
          className="inline-block bg-white px-6.5 py-3.5 text-[11px] font-bold tracking-wide text-ink uppercase transition-colors hover:bg-neutral-200"
        >
          Shop Items
        </a>
      </div>
    </div>
  );
}

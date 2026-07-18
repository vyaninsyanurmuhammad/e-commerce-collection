// apps/ecommerce-2/src/features/home/components/home-hero-carousel.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useHeroCarousel } from "../hooks/use-hero-carousel";
import { HERO_SLIDES } from "../constants/home-constants";

export function HomeHeroCarousel() {
  const { prev, next, diffFor, isTransitioning } = useHeroCarousel(HERO_SLIDES.length);

  return (
    <section className="relative h-[92vh] min-h-155 overflow-hidden">
      {HERO_SLIDES.map((slide, i) => {
        const diff = diffFor(i);
        return (
          <div
            key={slide.title}
            className={`absolute inset-0 overflow-hidden bg-[oklch(0.5_0.025_95)] ${
              isTransitioning(i) ? "transition-transform duration-600 ease-[cubic-bezier(.65,0,.35,1)]" : ""
            }`}
            style={{ transform: `translateX(${diff * 100}%)`, pointerEvents: diff === 0 ? "auto" : "none" }}
          >
            <div className="pointer-events-none absolute top-1/2 left-[74%] size-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.62_0.02_95)] opacity-55" />
            <div className="relative z-10 grid h-full grid-cols-2 items-center px-12">
              <div className="max-w-130">
                <h2 className="mb-6 font-outfit text-[clamp(56px,7vw,104px)] leading-[0.95] font-extrabold text-white uppercase">
                  {slide.title}
                </h2>
                <p className="mb-8 max-w-100 text-[17px] leading-relaxed text-white/82">{slide.desc}</p>
                <div className="flex items-center gap-4">
                  <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm text-ink">
                    SHOP NEW ARRIVALS →
                  </Link>
                  <Link href="/shop" className="border-b border-white pb-0.5 text-sm text-white">
                    EXPLORE COLLECTIONS
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-[4/5] w-[65%] max-w-130 overflow-hidden rounded-[20px]">
                <Image src={slide.src} alt={slide.title} fill sizes="35vw" className="object-cover" />
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute right-14 bottom-10 z-20 flex gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex size-12 items-center justify-center rounded-full border border-white/40 text-white"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex size-12 items-center justify-center rounded-full border border-white/40 text-white"
        >
          →
        </button>
      </div>
    </section>
  );
}

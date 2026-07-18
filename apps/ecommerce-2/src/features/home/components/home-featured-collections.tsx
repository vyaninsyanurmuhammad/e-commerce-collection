// apps/ecommerce-2/src/features/home/components/home-featured-collections.tsx
"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollProgress } from "../hooks/use-scroll-progress";
import { FEATURED_COLLECTIONS } from "../constants/home-constants";

export function HomeFeaturedCollections() {
  const trackRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);
  const progress = useScrollProgress(trackRef);

  // useLayoutEffect (not useEffect): commits the real trackHeight before first
  // paint. useEffect runs after paint, so the pinned section would briefly render
  // at the SSR fallback height (900px, ~= one viewport) with zero pin distance —
  // on a fast connection a user can scroll straight through that window before
  // the correct (much taller) height ever commits, making the pin feel absent.
  useLayoutEffect(() => {
    const measure = () => {
      const rowWidth = rowRef.current?.scrollWidth ?? 0;
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      setMaxTranslate(Math.max(0, rowWidth - viewportWidth));
      setViewportHeight(window.innerHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const trackHeight = viewportHeight + maxTranslate;
  const headingFade = Math.max(0, Math.min(1, progress / 0.28));
  const segment = 1 / FEATURED_COLLECTIONS.length;

  return (
    <section ref={trackRef} style={{ position: "relative", height: trackHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center px-12">
          <div
            className="max-w-95"
            style={{
              opacity: 1 - headingFade,
              filter: `blur(${headingFade * 10}px)`,
              transform: `translateX(${-headingFade * 40}px)`,
            }}
          >
            <h3 className="mb-3.5 font-outfit text-[38px] font-semibold">Featured Collections</h3>
            <p className="mb-6 text-base text-ink/60">A refined edit of essentials, built around fabric, fit, and longevity.</p>
            <Link href="/shop" className="pointer-events-auto inline-block rounded-full bg-ink px-7 py-3.5 text-sm text-white">
              SHOP NEW ARRIVALS
            </Link>
          </div>
        </div>

        <div ref={viewportRef} className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div
            ref={rowRef}
            className="mt-[15vh] flex h-[70%] w-max items-center gap-6 pr-12 pl-115"
            style={{ transform: `translateX(${-progress * maxTranslate}px)` }}
          >
            {FEATURED_COLLECTIONS.map((col, i) => {
              const p = Math.max(0, Math.min(1, (progress - i * segment) / segment));
              return (
                <div key={col.title} className="flex h-full w-120 flex-none flex-col">
                  <div className="relative mb-4 flex-1 overflow-hidden rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                    <Image src={col.src} alt={col.title} fill sizes="480px" className="object-cover" />
                    <div className="absolute top-4 left-4 rounded-full bg-white/25 px-3.5 py-1.5 text-xs text-white backdrop-blur-md">
                      {col.tagline}
                    </div>
                  </div>
                  <h5 className="mb-3 font-outfit text-xl font-semibold">{col.title}</h5>
                  <Link href="/shop" className="pointer-events-auto w-fit border-b border-ink pb-0.5 text-sm">
                    Shop Now
                  </Link>
                  <div className="mt-4 h-0.5 overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full bg-accent" style={{ width: `${p * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

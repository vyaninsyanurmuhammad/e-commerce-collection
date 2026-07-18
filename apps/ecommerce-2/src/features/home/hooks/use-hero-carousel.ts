// apps/ecommerce-2/src/features/home/hooks/use-hero-carousel.ts
"use client";
import { useEffect, useState } from "react";

export function useHeroCarousel(slideCount: number, intervalMs = 6000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slideCount), intervalMs);
    return () => clearInterval(timer);
  }, [slideCount, intervalMs]);

  const prev = () => setIndex((i) => (i + slideCount - 1) % slideCount);
  const next = () => setIndex((i) => (i + 1) % slideCount);

  /** Circular distance from the active slide, in [-slideCount/2, slideCount/2],
   *  so translateX(diff * 100%) always takes the shortest path around the loop. */
  const diffFor = (i: number) => {
    let diff = i - index;
    if (diff > slideCount / 2) diff -= slideCount;
    if (diff < -slideCount / 2) diff += slideCount;
    return diff;
  };

  return { index, prev, next, diffFor };
}

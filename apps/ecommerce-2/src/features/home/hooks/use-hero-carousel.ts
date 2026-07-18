// apps/ecommerce-2/src/features/home/hooks/use-hero-carousel.ts
"use client";
import { useEffect, useRef, useState } from "react";

export function useHeroCarousel(slideCount: number, intervalMs = 6000) {
  const [index, setIndex] = useState(0);
  // Tracks the slide that was active immediately before the current one, so the
  // component can animate only the outgoing/incoming pair. With few slides, every
  // index change also flips the sign of some other, uninvolved slide's position
  // (an unavoidable side effect of the circular diff wrapping below) — if that
  // slide shared the same CSS transition, it would visibly slide across the full
  // screen mid-transition even though it's off-screen at both ends.
  const prevIndexRef = useRef(0);

  const goTo = (updater: (i: number) => number) => {
    setIndex((i) => {
      prevIndexRef.current = i;
      return updater(i);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => goTo((i) => (i + 1) % slideCount), intervalMs);
    return () => clearInterval(timer);
  }, [slideCount, intervalMs]);

  const prev = () => goTo((i) => (i + slideCount - 1) % slideCount);
  const next = () => goTo((i) => (i + 1) % slideCount);

  /** Circular distance from the active slide, in [-slideCount/2, slideCount/2],
   *  so translateX(diff * 100%) always takes the shortest path around the loop. */
  const diffFor = (i: number) => {
    let diff = i - index;
    if (diff > slideCount / 2) diff -= slideCount;
    if (diff < -slideCount / 2) diff += slideCount;
    return diff;
  };

  /** Only the slide becoming active and the slide that just stopped being active
   *  should animate; every other slide should reposition instantly (invisible,
   *  since it's off-screen both before and after). */
  const isTransitioning = (i: number) => i === index || i === prevIndexRef.current;

  return { index, prev, next, diffFor, isTransitioning };
}

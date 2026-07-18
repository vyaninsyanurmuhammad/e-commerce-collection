// apps/ecommerce-2/src/features/home/hooks/use-scroll-progress.ts
"use client";
import { useEffect, useRef, useState, type RefObject } from "react";

/** [0,1] progress through a tall "track" element: 0 when its top reaches the
 *  viewport top, 1 when its bottom reaches the viewport bottom. Used to drive
 *  scroll-jacked pinned sections (a `position: sticky` child stays pinned while
 *  this progress animates its content). rAF-throttled since it runs on scroll. */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const next = range > 0 ? -rect.top / range : 0;
      setProgress(Math.max(0, Math.min(1, next)));
    };
    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        compute();
      });
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [ref]);

  return progress;
}

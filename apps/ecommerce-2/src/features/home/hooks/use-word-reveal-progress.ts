// apps/ecommerce-2/src/features/home/hooks/use-word-reveal-progress.ts
"use client";
import { useEffect, useRef, useState, type RefObject } from "react";

/** [0,1] progress for a word-by-word text reveal: 0 before the tracked element
 *  enters the "reveal window" (85% down the viewport), 1 once it has scrolled
 *  well past — matches the source's `(vh*0.85 - rect.top) / (rect.height + vh*0.5)`. */
export function useWordRevealProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const next = (vh * 0.85 - rect.top) / (rect.height + vh * 0.5);
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

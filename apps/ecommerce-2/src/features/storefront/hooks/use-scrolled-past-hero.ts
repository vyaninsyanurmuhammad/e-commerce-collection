// apps/ecommerce-2/src/features/storefront/hooks/use-scrolled-past-hero.ts
"use client";
import { useEffect, useState } from "react";

/** True once the page has scrolled past the first viewport height (the hero).
 *  Used to switch the sticky nav from transparent-over-hero to solid. Pages
 *  with no hero (Shop, Checkout) never mount this, so their nav stays solid always. */
export function useScrolledPastHero(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.92 - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

"use client";
import type { ReactNode } from "react";
import { useRevealOnScroll } from "../hooks/use-reveal-on-scroll";

export function SectionHeading({ children }: { children: ReactNode }) {
  const ref = useRevealOnScroll<HTMLHeadingElement>();
  return (
    <h2
      ref={ref}
      className="mb-7 -translate-y-6 font-archivo text-[30px] font-extrabold tracking-tight text-ink opacity-0 transition-[opacity,transform] duration-600"
    >
      {children}
    </h2>
  );
}

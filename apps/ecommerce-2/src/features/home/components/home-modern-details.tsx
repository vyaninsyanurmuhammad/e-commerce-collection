// apps/ecommerce-2/src/features/home/components/home-modern-details.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWordRevealProgress } from "../hooks/use-word-reveal-progress";

const REVEAL_TEXT =
  "A new story unfolds each season. Quiet mornings deserve softness, confident days demand structure, and unforgettable nights call for detail. Amara's seasonal edits balance comfort and refinement, made for the way you actually live.";
const WORDS = REVEAL_TEXT.split(" ");

export function HomeModernDetails() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const progress = useWordRevealProgress(textRef);

  return (
    <>
      <section className="grid grid-cols-[1fr_1.4fr] items-start gap-15 px-12 py-20">
        <div>
          <p className="mb-3.5 text-[13px] tracking-wide text-accent">CONSIDERED DETAILS</p>
          <Link href="/shop" className="border-b border-ink pb-0.5 text-sm">
            EXPLORE COLLECTIONS
          </Link>
        </div>
        <p ref={textRef} className="text-[26px] leading-relaxed">
          {WORDS.map((word, i) => {
            const t = WORDS.length <= 1 ? 0 : i / (WORDS.length - 1);
            const on = progress >= t;
            return (
              <span key={i} className="transition-colors duration-200" style={{ color: on ? "var(--ink)" : "oklch(0.8 0.005 75)" }}>
                {word}{" "}
              </span>
            );
          })}
        </p>
      </section>
      <div className="grid grid-cols-3 gap-0.5">
        {[
          { id: "modern-1", src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=900&auto=format&fit=crop", alt: "detail photo 1" },
          { id: "modern-2", src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=700&auto=format&fit=crop", alt: "detail photo 2" },
          { id: "modern-3", src: "https://images.unsplash.com/photo-1695996966975-9ed413650619?w=700&auto=format&fit=crop", alt: "detail photo 3" },
        ].map((img) => (
          <div key={img.id} className="relative aspect-[594/709]">
            <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

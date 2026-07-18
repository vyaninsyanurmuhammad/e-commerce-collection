// apps/ecommerce-2/src/features/home/components/home-effortless-everyday.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "../hooks/use-scroll-progress";

const TILT_WORDS = ["FEEL AUTHENTIC", "FEEL TRENDING"];
const MARQUEE_WORDS = [...TILT_WORDS, ...TILT_WORDS, ...TILT_WORDS, ...TILT_WORDS];

function tiltWordClass(i: number) {
  const base = "font-outfit text-[clamp(48px,7vw,104px)] font-extrabold whitespace-nowrap";
  return i % 3 === 1 ? `${base} text-white/92` : `${base} text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)]`;
}

export function HomeEffortlessEveryday() {
  const trackRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(trackRef);

  const scale = 0.5 + progress * 0.72;
  const rotate = -progress * 3;
  const radius = 26 * (1 - progress);
  const marquee1X = -progress * 460;
  const marquee2X = progress * 460 - 260;

  return (
    <section ref={trackRef} className="relative mt-16" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[oklch(0.22_0.008_90)]">
        <div className="pointer-events-none absolute top-[28%] left-[-15%] w-[130%]" style={{ transform: `translateX(${marquee1X}px)` }}>
          <div className="flex w-max -rotate-3 items-center gap-12">
            {MARQUEE_WORDS.map((text, i) => (
              <span key={i} className={tiltWordClass(i)}>
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute top-[58%] left-[-15%] w-[130%]" style={{ transform: `translateX(${marquee2X}px)` }}>
          <div className="flex w-max -rotate-3 items-center gap-12">
            {MARQUEE_WORDS.map((text, i) => (
              <span key={i} className={tiltWordClass(i)}>
                {text}
              </span>
            ))}
          </div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 h-[70%] w-[78%] overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
          style={{ transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`, borderRadius: `${radius}px` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=1920&auto=format&fit=crop"
            alt="lifestyle full-bleed photo"
            fill
            sizes="78vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/50 to-black/5 px-[6%]">
            <h3 className="mb-4 max-w-[60%] font-outfit text-[clamp(28px,3.4vw,52px)] leading-tight font-semibold text-white">
              Effortless, Every Day
            </h3>
            <p className="max-w-[44%] text-[clamp(13px,1.1vw,17px)] text-white/90">
              From morning errands to late dinners — pieces designed to move with you and hold their shape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

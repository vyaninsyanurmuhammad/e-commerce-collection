// apps/ecommerce-2/src/features/home/components/home-press-marquee.tsx
import { PRESS_LOGOS } from "../constants/home-constants";

export function HomePressMarquee() {
  const doubled = [...PRESS_LOGOS, ...PRESS_LOGOS];

  return (
    <section className="bg-[oklch(0.97_0.015_55)] py-14 text-center">
      <p className="mb-8 text-sm tracking-wide text-ink/60">As Seen In</p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {doubled.map((text, i) => (
            <div key={i} className="flex flex-none items-center gap-2 text-[oklch(0.22_0.01_60)]">
              <span className="size-4 flex-none rounded-full bg-current" />
              <span className="font-outfit text-lg font-semibold whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

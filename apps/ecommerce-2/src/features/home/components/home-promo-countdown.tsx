"use client";
import Image from "next/image";
import Link from "next/link";
import { useCountdown } from "../hooks/use-countdown";

const INITIAL_SECONDS = 20 * 3600 + 3 * 60 + 14;

export function HomePromoCountdown() {
  const countdown = useCountdown(INITIAL_SECONDS);

  return (
    <section className="relative flex h-[70vh] min-h-120 items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=1600&auto=format&fit=crop"
          alt="promo lifestyle photo"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/15" />
      </div>
      <div className="relative z-10 max-w-140 px-16 text-white">
        <p className="mb-3 text-[13px] tracking-[0.1em] opacity-85">LIMITED RUN</p>
        <h2 className="mb-7 font-outfit text-[52px] font-semibold">Sale Extended</h2>
        <div className="mb-8 flex gap-7">
          {(["h", "m", "s"] as const).map((unit) => (
            <div key={unit} className="text-center">
              <div className="font-outfit text-4xl font-semibold">{countdown[unit]}</div>
              <div className="text-xs opacity-75">{unit === "h" ? "Hours" : unit === "m" ? "Minutes" : "Seconds"}</div>
            </div>
          ))}
        </div>
        <Link href="/shop" className="inline-block rounded-full bg-white px-7 py-3.5 text-sm text-ink">
          SHOP THE SALE
        </Link>
      </div>
      <div className="absolute bottom-6 left-16 z-10 flex w-60 max-w-[calc(50%-32px)] items-center gap-3 rounded-xl bg-white/15 p-3.5 backdrop-blur-lg">
        <div className="relative h-22.5 w-17.5 flex-none overflow-hidden rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1709746460135-dd54962d4857?w=400&auto=format&fit=crop"
            alt="featured item"
            fill
            sizes="70px"
            className="object-cover"
          />
        </div>
        <div className="text-white">
          <div className="mb-1 text-[11px] opacity-75">Featured item</div>
          <div className="text-sm font-medium">Shop the overcoat</div>
        </div>
      </div>
    </section>
  );
}

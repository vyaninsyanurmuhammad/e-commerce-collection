import Image from "next/image";
import Link from "next/link";

export function HomeSeasonBanner() {
  return (
    <section className="relative mx-12 mb-20 grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,oklch(0.5_0.12_300),oklch(0.65_0.14_50))]">
      <div className="relative z-10 px-14 py-14 text-white">
        <p className="mb-3.5 text-[13px] tracking-wide opacity-85">SEASON EDIT</p>
        <h2 className="mb-4 font-outfit text-[46px] font-semibold">Save Now</h2>
        <p className="mb-6 max-w-95 text-[15px] opacity-90">
          Curated wardrobe essentials at remarkable prices, for a limited time.
        </p>
        <div className="flex items-center gap-5">
          <div className="flex size-18.5 flex-col items-center justify-center rounded-full bg-white/20">
            <div className="font-outfit text-lg font-bold">30%</div>
            <div className="text-[10px]">OFF</div>
          </div>
          <Link href="/shop" className="rounded-full bg-white px-7 py-3.5 text-sm text-[oklch(0.3_0.005_75)]">
            SHOP NEW ARRIVALS
          </Link>
        </div>
      </div>
      <div className="relative h-105 min-w-0 overflow-hidden p-6">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=1200&auto=format&fit=crop"
            alt="model photo"
            fill
            sizes="40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

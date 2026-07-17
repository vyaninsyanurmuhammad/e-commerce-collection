// apps/ecommerce-1/src/features/product-catalog/components/catalog-hero.tsx
import Image from "next/image";
import Link from "next/link";

export function CatalogHero() {
  return (
    <section className="relative flex h-[88vh] min-h-140 items-end overflow-hidden">
      <Image src="https://picsum.photos/seed/meere-hero/2200/1500" alt="hero" fill priority sizes="100vw" className="object-cover brightness-[.82]" />
      <div className="relative z-10 max-w-225 px-10 pb-16">
        <h1
          className="mb-5 font-archivo text-[clamp(48px,9vw,124px)] leading-[0.95] font-black tracking-tight text-white opacity-0"
          style={{ animation: "heroIn 0.8s ease 0.1s forwards" }}
        >
          Everyday Essentials
        </h1>
        <p
          className="mb-6.5 max-w-130 text-base leading-relaxed font-medium text-white opacity-0"
          style={{ animation: "heroIn 0.8s ease 0.28s forwards" }}
        >
          A considered collection of modern essentials, designed with clarity and purpose — balancing form, comfort, and
          durability for everyday life.
        </p>
        <Link
          href="/catalog"
          className="inline-block bg-white px-7.5 py-4 text-xs font-bold tracking-wide text-ink uppercase opacity-0 transition-colors hover:bg-neutral-200"
          style={{ animation: "heroIn 0.8s ease 0.44s forwards" }}
        >
          Shop All
        </Link>
      </div>
    </section>
  );
}

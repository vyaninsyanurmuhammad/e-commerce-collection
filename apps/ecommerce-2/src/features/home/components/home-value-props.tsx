"use client";
import { useRevealOnScroll } from "@/features/product-catalog";
import { VALUE_PROPS } from "../constants/home-constants";

function ValueProp({ title, desc }: { title: string; desc: string }) {
  const ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className="translate-y-5 opacity-0 transition-[opacity,transform] duration-500">
      <div className="mb-4.5 size-11 rounded-full border-[1.5px] border-ink" />
      <h6 className="mb-2.5 font-outfit text-[17px] font-semibold">{title}</h6>
      <p className="text-sm leading-relaxed text-ink/60">{desc}</p>
    </div>
  );
}

export function HomeValueProps() {
  return (
    <section className="grid grid-cols-3 gap-7 px-12 pb-20">
      {VALUE_PROPS.map((v) => (
        <ValueProp key={v.title} title={v.title} desc={v.desc} />
      ))}
    </section>
  );
}

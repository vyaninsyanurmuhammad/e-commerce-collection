import { BIG_MARQUEE_WORDS } from "../constants/home-constants";

export function HomeShineMarquee() {
  const tripled = [...BIG_MARQUEE_WORDS, ...BIG_MARQUEE_WORDS, ...BIG_MARQUEE_WORDS];

  return (
    <section className="overflow-hidden bg-ink py-12">
      <div className="flex w-max animate-marquee gap-14">
        {tripled.map((text, i) => (
          <span
            key={i}
            className="animate-shine bg-[linear-gradient(90deg,oklch(0.55_0.005_75)_0%,oklch(0.55_0.005_75)_40%,#fff_50%,oklch(0.55_0.005_75)_60%,oklch(0.55_0.005_75)_100%)] bg-[length:250%_100%] bg-clip-text font-outfit text-[72px] font-bold whitespace-nowrap text-transparent"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}

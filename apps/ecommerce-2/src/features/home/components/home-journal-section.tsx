"use client";
import Image from "next/image";
import { useRevealOnScroll } from "@/features/product-catalog";
import { BLOG_POSTS } from "../constants/home-constants";

export function HomeJournalSection() {
  const headingRef = useRevealOnScroll<HTMLHeadingElement>();

  return (
    <section className="px-12 py-20">
      <h4
        ref={headingRef}
        className="mb-8 -translate-y-6 font-outfit text-[32px] font-semibold opacity-0 transition-[opacity,transform] duration-600"
      >
        Journal
      </h4>
      <div className="grid grid-cols-3 gap-7">
        {BLOG_POSTS.map((post) => (
          <div key={post.title}>
            <div className="relative mb-4 aspect-[1921/1024] overflow-hidden rounded-lg">
              <Image src={post.src} alt={post.title} fill sizes="33vw" className="object-cover" />
            </div>
            <h6 className="mb-2.5 font-outfit text-lg font-semibold">{post.title}</h6>
            <div className="text-[13px] text-ink/50">Posted on {post.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

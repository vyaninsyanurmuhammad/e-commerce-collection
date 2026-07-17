// apps/ecommerce-2/src/features/home/constants/home-constants.ts
export type HeroSlide = {
  title: string;
  desc: string;
  src: string;
  credit: string;
  creditHref: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Define Your Edit",
    desc: "Modern staples engineered for everyday confidence, cut for how you actually move.",
    src: "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=1200&auto=format&fit=crop",
    credit: "Photo by Wesley Tingey on Unsplash",
    creditHref: "https://unsplash.com/@wesleyphotography",
  },
  {
    title: "Made For Real Movement",
    desc: "Considered silhouettes and honest fabrics, designed to keep pace with your day.",
    src: "https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=1200&auto=format&fit=crop",
    credit: "Photo by Michael Rivera on Unsplash",
    creditHref: "https://unsplash.com/@monkeydmykie",
  },
  {
    title: "Quiet Luxury, Loud Comfort",
    desc: "Elevated basics that trade logos for craftsmanship — a wardrobe that ages well.",
    src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=1200&auto=format&fit=crop",
    credit: "Photo by Lerone Pieters on Unsplash",
    creditHref: "https://unsplash.com/@leronep",
  },
];

export const PRESS_LOGOS = ["NORTHFIELD", "KINDRED CO", "ARCHWELL", "STUDIO EIGHT"];

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

export type CollectionCard = {
  title: string;
  tagline: string;
  src: string;
  credit: string;
  creditHref: string;
};

export const FEATURED_COLLECTIONS: CollectionCard[] = [
  {
    title: "Women's Edit",
    tagline: "Soft textures, modern lines",
    src: "https://images.unsplash.com/photo-1695996966975-9ed413650619?w=900&auto=format&fit=crop",
    credit: "Photo by ANHELINA OSAULENKO on Unsplash",
    creditHref: "https://unsplash.com/@linaos",
  },
  {
    title: "Men's Edit",
    tagline: "Clean, refined basics",
    src: "https://images.unsplash.com/photo-1709746460135-dd54962d4857?w=900&auto=format&fit=crop",
    credit: "Photo by Blake Cheek on Unsplash",
    creditHref: "https://unsplash.com/@blakecheekk",
  },
  {
    title: "New Arrivals",
    tagline: "Fresh cuts, just landed",
    src: "https://images.unsplash.com/photo-1753395298691-eb93244d76c1?w=900&auto=format&fit=crop",
    credit: "Photo by amin naderloei on Unsplash",
    creditHref: "https://unsplash.com/@aminnaderloei",
  },
  {
    title: "Outerwear",
    tagline: "Layer up in structured coats",
    src: "https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=900&auto=format&fit=crop",
    credit: "Photo by Michael Rivera on Unsplash",
    creditHref: "https://unsplash.com/@monkeydmykie",
  },
  {
    title: "Knitwear",
    tagline: "Textured layers for cooler days",
    src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=900&auto=format&fit=crop",
    credit: "Photo by Lerone Pieters on Unsplash",
    creditHref: "https://unsplash.com/@leronep",
  },
  {
    title: "Denim",
    tagline: "Considered fits, built to last",
    src: "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=900&auto=format&fit=crop",
    credit: "Photo by Wesley Tingey on Unsplash",
    creditHref: "https://unsplash.com/@wesleyphotography",
  },
  {
    title: "Loungewear",
    tagline: "Soft essentials for slow mornings",
    src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=900&auto=format&fit=crop",
    credit: "Photo by Valna Studio on Unsplash",
    creditHref: "https://unsplash.com/@valnastudio",
  },
  {
    title: "Accessories",
    tagline: "Finishing details that matter",
    src: "https://images.unsplash.com/photo-1709746460135-dd54962d4857?w=900&auto=format&fit=crop",
    credit: "Photo by Blake Cheek on Unsplash",
    creditHref: "https://unsplash.com/@blakecheekk",
  },
];

export type BlogPost = {
  title: string;
  date: string;
  src: string;
  credit: string;
  creditHref: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Building A Capsule Wardrobe That Lasts",
    date: "Jul 12, 2026",
    src: "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=900&auto=format&fit=crop",
    credit: "Photo by Wesley Tingey on Unsplash",
    creditHref: "https://unsplash.com/@wesleyphotography",
  },
  {
    title: "Texture Over Trend This Season",
    date: "Jul 8, 2026",
    src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=900&auto=format&fit=crop",
    credit: "Photo by Valna Studio on Unsplash",
    creditHref: "https://unsplash.com/@valnastudio",
  },
  {
    title: "The Case For Fewer, Better Pieces",
    date: "Jul 3, 2026",
    src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=900&auto=format&fit=crop",
    credit: "Photo by Lerone Pieters on Unsplash",
    creditHref: "https://unsplash.com/@leronep",
  },
];

export const VALUE_PROPS = [
  { title: "Easy Returns", desc: "Seamless returns and exchanges designed to keep shopping simple." },
  { title: "Fast Shipping", desc: "Reliable, swift delivery so your pieces arrive right on time." },
  { title: "24/7 Support", desc: "Friendly, expert help with sizing, orders, or anything in between." },
];

export const BIG_MARQUEE_WORDS = ["CRAFTED TO LAST", "MADE TO MOVE"];

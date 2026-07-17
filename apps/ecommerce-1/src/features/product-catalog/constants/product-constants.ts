import type { CategoryBannerData, Product, ProductWithVariants } from "../types/product-types";

export function img(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export function describe(name: string): string {
  return `The ${name} is cut from premium materials for everyday wear, balancing structure and comfort. Designed in-house with clean lines and a considered fit that layers easily across seasons.`;
}

export const CATALOG_FILTERS = [
  { key: "all", label: "All" },
  { key: "new", label: "New Arrivals" },
  { key: "sale", label: "Sale" },
] as const;

export type CatalogFilterKey = (typeof CATALOG_FILTERS)[number]["key"];

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const COLORWAYS: string[][] = [
  ["#0A0A0A", "#8B7355", "#C4C4C4"],
  ["#0A0A0A", "#3F4A3D"],
  ["#0A0A0A", "#8B7355", "#3F4A3D", "#C4C4C4"],
  ["#0A0A0A", "#C4C4C4"],
];

export const NEW_ARRIVALS: Product[] = [
  { id: "n1", name: "Core Hoodie", price: "99.00", compareAt: "159.00", badge: "38% OFF", img: img("meere-hoodie-a", 848, 1184), img2: img("meere-hoodie-b", 848, 1187) },
  { id: "n2", name: "Meere Tech-Zip Hoodie", price: "140.00", compareAt: null, badge: null, img: img("meere-techzip-a", 848, 1176), img2: img("meere-techzip-b", 848, 1187) },
  { id: "n3", name: "Minimalist Hidden-Placket Shirt", price: "199.00", compareAt: null, badge: null, img: img("meere-shirt-a", 848, 1190), img2: img("meere-shirt-b", 848, 1190) },
  { id: "n4", name: "Olive Hooded Puffer Jacket", price: "499.00", compareAt: null, badge: null, img: img("meere-puffer-a", 848, 1185), img2: img("meere-puffer-b", 848, 1190) },
];

export const FEATURED_TOPS: Product[] = [
  { id: "t1", name: "Meere Double-Breasted Blazer", price: "179.00", compareAt: null, badge: null, img: img("meere-blazer-a", 848, 1193), img2: img("meere-blazer-b", 848, 1184) },
  { id: "t2", name: "Minimalist Hidden-Placket Shirt", price: "199.00", compareAt: null, badge: null, img: img("meere-shirt2-a", 848, 1190), img2: img("meere-shirt2-b", 848, 1190) },
  { id: "t3", name: "Olive Hooded Puffer Jacket", price: "499.00", compareAt: null, badge: null, img: img("meere-puffer2-a", 848, 1185), img2: img("meere-puffer2-b", 848, 1190) },
  { id: "t4", name: "Suede Bomber Jacket", price: "320.00", compareAt: null, badge: null, img: img("meere-bomber-a", 848, 1181), img2: img("meere-bomber-b", 832, 1179) },
];

export const FEATURED_PRODUCTS: Product[] = [
  { id: "f1", name: "Belted Pleated Denim Pants", price: "140.00", compareAt: null, badge: null, img: img("meere-denim-a", 848, 1187), img2: img("meere-denim-b", 848, 1073) },
  { id: "f2", name: "Chunky Leather Derby Shoes", price: "160.00", compareAt: "329.00", badge: "51% OFF", img: img("meere-derby-a", 848, 1182), img2: img("meere-derby-b", 848, 1201) },
  { id: "f3", name: "Essential Sneaker", price: "150.00", compareAt: null, badge: null, img: img("meere-sneaker-a", 848, 1181), img2: img("meere-sneaker-b", 848, 1187) },
  { id: "f4", name: "Pleated Linen-Blend Trousers", price: "135.00", compareAt: null, badge: null, img: img("meere-trousers-a", 848, 1189), img2: img("meere-trousers-b", 848, 1166) },
];

export const SHOP_THE_LOOK: Product[] = [
  { id: "l1", name: "Olive Hooded Puffer Jacket", price: "499.00", compareAt: null, badge: null, img: img("meere-look1", 848, 1185) },
  { id: "l2", name: "Argyle Crewneck Sweater", price: "249.00", compareAt: null, badge: null, img: img("meere-look2", 848, 1173) },
  { id: "l3", name: "Chunky Leather Derby Shoes", price: "160.00", compareAt: "329.00", badge: "51% OFF", img: img("meere-look3", 848, 1182) },
  { id: "l4", name: "Wide-Leg Pleated Trousers", price: "159.00", compareAt: null, badge: null, img: img("meere-look4", 848, 1184) },
];

export const ON_SALE: Product[] = [
  { id: "s1", name: "Technical Zip-Up Hoodie", price: "125.00", compareAt: "199.00", badge: "37% OFF", img: img("meere-sale1-a", 848, 1181), img2: img("meere-sale1-b", 848, 1190) },
  { id: "s2", name: "Relaxed Straight Denim", price: "110.00", compareAt: "229.00", badge: "52% OFF", img: img("meere-sale2-a", 848, 1187), img2: img("meere-sale2-b", 848, 989) },
  { id: "s3", name: "Essential Heavyweight Tee", price: "69.00", compareAt: "119.00", badge: "42% OFF", img: img("meere-sale3-a", 848, 1179), img2: img("meere-sale3-b", 848, 1184) },
  { id: "s4", name: "Core Hoodie", price: "99.00", compareAt: "159.00", badge: "38% OFF", img: img("meere-sale4-a", 848, 1184), img2: img("meere-sale4-b", 848, 1187) },
];

export const CATEGORY_1: CategoryBannerData[] = [
  { title: "Everyday Layers", href: "#", img: img("meere-cat-layers", 1400, 1600) },
  { title: "Essential Outerwear", href: "#", img: img("meere-cat-outerwear", 1400, 1600) },
];

export const CATEGORY_2: CategoryBannerData[] = [
  { title: "Refined Bottoms", href: "#", img: img("meere-cat-bottoms", 1400, 1600) },
  { title: "Modern Footwear", href: "#", img: img("meere-cat-footwear", 1400, 1600) },
];

export const ALL_PRODUCTS: Product[] = [
  ...NEW_ARRIVALS,
  ...FEATURED_TOPS,
  ...FEATURED_PRODUCTS,
  ...SHOP_THE_LOOK,
  ...ON_SALE,
];

export const PRODUCT_MAP: Record<string, Product> = {};
for (const p of ALL_PRODUCTS) {
  if (!PRODUCT_MAP[p.id]) PRODUCT_MAP[p.id] = p;
}

export function withVariants(products: Product[]): ProductWithVariants[] {
  return products.map((p, i) => ({
    ...p,
    sizes: SIZES,
    colors: COLORWAYS[i % COLORWAYS.length]!,
  }));
}

export function dedupeByName(products: Product[]): Product[] {
  const seen = new Set<string>();
  const result: Product[] = [];
  for (const p of products) {
    if (!seen.has(p.name)) {
      seen.add(p.name);
      result.push(p);
    }
  }
  return result;
}

export const CATALOG_ALL: Product[] = dedupeByName(ALL_PRODUCTS);

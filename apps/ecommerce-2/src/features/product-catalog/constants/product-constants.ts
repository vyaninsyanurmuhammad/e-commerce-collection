import type { Product } from "../types/product-types";

export const SWATCH_COLORS: Record<string, string> = {
  sand: "oklch(0.75 0.05 80)",
  olive: "oklch(0.5 0.06 120)",
  grey: "oklch(0.7 0.01 80)",
  black: "oklch(0.2 0.005 80)",
  taupe: "oklch(0.65 0.03 60)",
  cream: "oklch(0.92 0.02 80)",
  camel: "oklch(0.65 0.08 60)",
  charcoal: "oklch(0.3 0.005 80)",
  white: "oklch(0.97 0.005 80)",
  rose: "oklch(0.75 0.06 20)",
  indigo: "oklch(0.35 0.08 260)",
  navy: "oklch(0.3 0.05 260)",
  ivory: "oklch(0.93 0.01 80)",
  forest: "oklch(0.4 0.06 150)",
};

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Relaxed Utility Shirt", price: 128, compare: 160, tags: ["men", "new"], category: "men", badge: "NEW", colors: ["sand", "olive", "grey"], sizes: ["S", "M", "L", "XL"], img: "trend-1", placeholder: "utility shirt", src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=800&auto=format&fit=crop&sat=-10", credit: "Photo by Lerone Pieters on Unsplash", creditHref: "https://unsplash.com/@leronep" },
  { id: 2, name: "Tailored Wide-Leg Trouser", price: 145, compare: 180, tags: ["women"], category: "women", badge: null, colors: ["black", "taupe", "cream"], sizes: ["XS", "S", "M", "L"], img: "trend-2", placeholder: "wide-leg trouser", src: "https://images.unsplash.com/photo-1753395298691-eb93244d76c1?w=800&auto=format&fit=crop", credit: "Photo by amin naderloei on Unsplash", creditHref: "https://unsplash.com/@aminnaderloei" },
  { id: 3, name: "Wool-Blend Overcoat", price: 310, compare: 390, tags: ["men"], category: "men", badge: null, colors: ["camel", "charcoal"], sizes: ["M", "L", "XL"], img: "trend-3", placeholder: "wool overcoat", src: "https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=800&auto=format&fit=crop", credit: "Photo by Michael Rivera on Unsplash", creditHref: "https://unsplash.com/@monkeydmykie" },
  { id: 4, name: "Essential Crew Tee", price: 38, compare: 48, tags: ["women", "new"], category: "women", badge: "20% OFF", colors: ["white", "black", "rose"], sizes: ["XS", "S", "M", "L", "XL"], img: "trend-4", placeholder: "crew tee", src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=800&auto=format&fit=crop", credit: "Photo by Valna Studio on Unsplash", creditHref: "https://unsplash.com/@valnastudio" },
  { id: 5, name: "Cropped Denim Jacket", price: 118, compare: 150, tags: ["women"], category: "women", badge: null, colors: ["indigo", "black"], sizes: ["XS", "S", "M"], img: "best-5", placeholder: "denim jacket", src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=800&auto=format&fit=crop", credit: "Photo by Lerone Pieters on Unsplash", creditHref: "https://unsplash.com/@leronep" },
  { id: 6, name: "Merino Knit Polo", price: 96, compare: 120, tags: ["men"], category: "men", badge: null, colors: ["navy", "ivory", "olive"], sizes: ["S", "M", "L", "XL"], img: "best-6", placeholder: "knit polo", src: "https://images.unsplash.com/photo-1709746460135-dd54962d4857?w=800&auto=format&fit=crop", credit: "Photo by Blake Cheek on Unsplash", creditHref: "https://unsplash.com/@blakecheekk" },
  { id: 7, name: "Pleated Midi Skirt", price: 134, compare: 168, tags: ["women", "new"], category: "women", badge: "NEW", colors: ["black", "camel"], sizes: ["XS", "S", "M", "L"], img: "best-7", placeholder: "midi skirt", src: "https://images.unsplash.com/photo-1695996966975-9ed413650619?w=800&auto=format&fit=crop", credit: "Photo by ANHELINA OSAULENKO on Unsplash", creditHref: "https://unsplash.com/@linaos" },
  { id: 8, name: "Heavyweight Fleece Hoodie", price: 88, compare: 110, tags: ["men", "new"], category: "men", badge: "20% OFF", colors: ["grey", "black", "forest"], sizes: ["S", "M", "L", "XL"], img: "best-8", placeholder: "fleece hoodie", src: "https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=800&auto=format&fit=crop", credit: "Photo by Michael Rivera on Unsplash", creditHref: "https://unsplash.com/@monkeydmykie" },
  { id: 9, name: "Silk-Blend Camisole", price: 68, compare: 85, tags: ["women"], category: "women", badge: null, colors: ["ivory", "black", "rose"], sizes: ["XS", "S", "M"], img: "shop-9", placeholder: "silk camisole", src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=800&auto=format&fit=crop&sat=-30", credit: "Photo by Valna Studio on Unsplash", creditHref: "https://unsplash.com/@valnastudio" },
  { id: 10, name: "Straight-Leg Chino", price: 98, compare: 120, tags: ["men"], category: "men", badge: null, colors: ["camel", "navy", "grey"], sizes: ["M", "L", "XL"], img: "shop-10", placeholder: "chino trouser", src: "https://images.unsplash.com/photo-1709746460135-dd54962d4857?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by Blake Cheek on Unsplash", creditHref: "https://unsplash.com/@blakecheekk" },
  { id: 11, name: "Belted Trench Coat", price: 265, compare: 330, tags: ["women", "new"], category: "women", badge: "NEW", colors: ["camel", "black"], sizes: ["S", "M", "L"], img: "shop-11", placeholder: "trench coat", src: "https://images.unsplash.com/photo-1753395298691-eb93244d76c1?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by amin naderloei on Unsplash", creditHref: "https://unsplash.com/@aminnaderloei" },
  { id: 12, name: "Ribbed Turtleneck", price: 72, compare: 90, tags: ["women"], category: "women", badge: null, colors: ["charcoal", "ivory", "rose"], sizes: ["XS", "S", "M", "L"], img: "shop-12", placeholder: "turtleneck sweater", src: "https://images.unsplash.com/photo-1695996966975-9ed413650619?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by ANHELINA OSAULENKO on Unsplash", creditHref: "https://unsplash.com/@linaos" },
  { id: 13, name: "Linen Short-Sleeve Shirt", price: 84, compare: 105, tags: ["men"], category: "men", badge: null, colors: ["white", "sand", "navy"], sizes: ["S", "M", "L", "XL"], img: "shop-13", placeholder: "linen shirt", src: "https://images.unsplash.com/photo-1611799298578-0ed239e049fe?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by Lerone Pieters on Unsplash", creditHref: "https://unsplash.com/@leronep" },
  { id: 14, name: "High-Rise Straight Jean", price: 108, compare: 135, tags: ["women", "new"], category: "women", badge: "NEW", colors: ["indigo", "black"], sizes: ["XS", "S", "M", "L"], img: "shop-14", placeholder: "straight jeans", src: "https://images.unsplash.com/photo-1590077889830-b8d2538d21d6?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by Michael Rivera on Unsplash", creditHref: "https://unsplash.com/@monkeydmykie" },
  { id: 15, name: "Quilted Bomber Jacket", price: 176, compare: 220, tags: ["men", "new"], category: "men", badge: "20% OFF", colors: ["black", "forest", "charcoal"], sizes: ["M", "L", "XL"], img: "shop-15", placeholder: "bomber jacket", src: "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=800&auto=format&fit=crop&sat=-20", credit: "Photo by Wesley Tingey on Unsplash", creditHref: "https://unsplash.com/@wesleyphotography" },
  { id: 16, name: "Draped Satin Slip Dress", price: 156, compare: 195, tags: ["women"], category: "women", badge: null, colors: ["black", "rose", "ivory"], sizes: ["XS", "S", "M"], img: "shop-16", placeholder: "slip dress", src: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=800&auto=format&fit=crop&sat=-10", credit: "Photo by Valna Studio on Unsplash", creditHref: "https://unsplash.com/@valnastudio" },
];

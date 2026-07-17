export type Product = {
  id: string;
  name: string;
  price: string;
  compareAt: string | null;
  badge: string | null;
  img: string;
  img2?: string;
};

export type ProductWithVariants = Product & {
  sizes: string[];
  colors: string[];
};

export type CategoryBannerData = {
  title: string;
  href: string;
  img: string;
};

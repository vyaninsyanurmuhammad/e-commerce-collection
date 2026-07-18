export type Product = {
  id: number;
  name: string;
  price: number;
  compare: number;
  tags: string[];
  category: "men" | "women";
  badge: string | null;
  colors: string[];
  sizes: string[];
  img: string;
  placeholder: string;
  src: string;
  credit: string;
  creditHref: string;
};

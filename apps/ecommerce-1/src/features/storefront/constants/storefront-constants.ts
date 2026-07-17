export type NavLink = {
  label: string;
  href: string;
};

export const NAV: NavLink[] = [
  { label: "Shop All", href: "/catalog" },
  { label: "New Arrivals", href: "/#new-arrivals" },
  { label: "Tops", href: "/" },
  { label: "Bottoms", href: "/" },
  { label: "Outerwear", href: "/" },
  { label: "Sale", href: "/#on-sale" },
];

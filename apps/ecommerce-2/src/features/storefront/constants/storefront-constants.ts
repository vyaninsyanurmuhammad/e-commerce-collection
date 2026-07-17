// apps/ecommerce-2/src/features/storefront/constants/storefront-constants.ts
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

export const COLLECTIONS_DROPDOWN = [
  { label: "Women's Edit", href: "/shop?cat=women" },
  { label: "Men's Edit", href: "/shop?cat=men" },
  { label: "New Arrivals", href: "/shop?cat=new" },
];

export const FOOTER_COLUMNS = [
  { heading: "Quick Links", links: [{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Journal", href: "#" }, { label: "FAQ", href: "#" }] },
  { heading: "Collections", links: [{ label: "Women", href: "/shop?cat=women" }, { label: "Men", href: "/shop?cat=men" }, { label: "New Arrivals", href: "/shop?cat=new" }, { label: "Best Sellers", href: "/shop" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "#" }, { label: "Refund Policy", href: "#" }, { label: "Contact", href: "#" }] },
  { heading: "Follow Us", links: [{ label: "Instagram ↗", href: "#" }, { label: "Facebook ↗", href: "#" }, { label: "Threads ↗", href: "#" }] },
];

import type { Product } from "@/features/product-catalog/types/product-types";

export type CartItem = {
  key: string;
  id: string;
  name: string;
  price: number;
  img: string;
  size: string;
  qty: number;
};

function keyFor(id: string, size: string): string {
  return `${id}-${size}`;
}

export function addItem(cart: CartItem[], product: Product, size: string, qty = 1): CartItem[] {
  const key = keyFor(product.id, size);
  const existing = cart.find((c) => c.key === key);
  if (existing) {
    return cart.map((c) => (c.key === key ? { ...c, qty: c.qty + qty } : c));
  }
  return [
    ...cart,
    { key, id: product.id, name: product.name, price: parseFloat(product.price), img: product.img, qty, size },
  ];
}

export function removeItem(cart: CartItem[], key: string): CartItem[] {
  return cart.filter((c) => c.key !== key);
}

export function changeQty(cart: CartItem[], key: string, delta: number): CartItem[] {
  return cart.map((c) => (c.key === key ? { ...c, qty: Math.max(1, c.qty + delta) } : c));
}

export function cartCount(cart: CartItem[]): number {
  return cart.reduce((total, c) => total + c.qty, 0);
}

export function cartTotal(cart: CartItem[]): number {
  return cart.reduce((total, c) => total + c.price * c.qty, 0);
}

export function lineTotal(item: CartItem): number {
  return item.price * item.qty;
}

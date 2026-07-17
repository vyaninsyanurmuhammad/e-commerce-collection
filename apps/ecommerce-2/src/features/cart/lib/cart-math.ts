import type { Product } from "@/features/product-catalog/types/product-types";

export type CartLine = { productId: number; color: string | null; size: string | null; qty: number };
export type CartLineWithProduct = CartLine & { index: number; product: Product | undefined; lineTotal: number };

export function addLine(
  cart: CartLine[],
  productId: number,
  color: string | null = null,
  size: string | null = null,
  qty = 1,
): CartLine[] {
  const idx = cart.findIndex((l) => l.productId === productId && l.color === color && l.size === size);
  if (idx === -1) return [...cart, { productId, color, size, qty }];
  return cart.map((l, i) => (i === idx ? { ...l, qty: l.qty + qty } : l));
}

export function updateQty(cart: CartLine[], index: number, qty: number): CartLine[] {
  return cart.map((l, i) => (i === index ? { ...l, qty: Math.max(1, qty) } : l));
}

export function removeLine(cart: CartLine[], index: number): CartLine[] {
  return cart.filter((_, i) => i !== index);
}

export function cartCount(cart: CartLine[]): number {
  return cart.reduce((sum, l) => sum + l.qty, 0);
}

function getProduct(products: Product[], id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function cartLines(cart: CartLine[], products: Product[]): CartLineWithProduct[] {
  return cart.map((line, index) => {
    const product = getProduct(products, line.productId);
    return { ...line, index, product, lineTotal: product ? product.price * line.qty : 0 };
  });
}

export function cartSubtotal(cart: CartLine[], products: Product[]): number {
  return cartLines(cart, products).reduce((sum, l) => sum + l.lineTotal, 0);
}

// apps/ecommerce-1/src/features/checkout/stores/checkout-store.ts
import { atom } from "jotai";
import { cartAtom } from "@/features/cart/stores/cart-store";

export const orderNumberAtom = atom<string | null>(null);

export const placeOrderAtom = atom(null, (get, set): string | null => {
  const cart = get(cartAtom);
  if (cart.length === 0) return null;
  const orderNumber = `MR-${Math.floor(100000 + Math.random() * 900000)}`;
  set(orderNumberAtom, orderNumber);
  set(cartAtom, []);
  return orderNumber;
});

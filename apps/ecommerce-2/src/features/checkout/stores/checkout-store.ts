import { atom } from "jotai";
import { cartAtom, cartSubtotalAtom, clearCartAtom } from "@/features/cart/stores/cart-store";
import { shippingCost } from "../lib/checkout-math";

export type ShippingFormValues = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
};
export type PaymentFormValues = { cardName: string; cardNumber: string; expiry: string; cvc: string };

const EMPTY_SHIPPING: ShippingFormValues = { fullName: "", email: "", address: "", city: "", zip: "", country: "" };
const EMPTY_PAYMENT: PaymentFormValues = { cardName: "", cardNumber: "", expiry: "", cvc: "" };

// Plain in-memory atoms (NOT atomWithStorage) — survive client-side route changes between
// /checkout/shipping and /checkout/payment (the JS heap isn't torn down on a Next.js route
// transition), but are lost on a hard refresh. Deliberate: no reason to ever persist
// card-shaped fields to localStorage, even in this fake-charge demo.
export const shippingFormAtom = atom<ShippingFormValues>(EMPTY_SHIPPING);
export const paymentFormAtom = atom<PaymentFormValues>(EMPTY_PAYMENT);

export const orderNumberAtom = atom<string | null>(null);
export const orderSubtotalAtom = atom<number>(0);

export const placeOrderAtom = atom(null, (get, set): string | null => {
  if (get(cartAtom).length === 0) return null;
  const orderNumber = `AM${Math.floor(100000 + Math.random() * 900000)}`;
  set(orderNumberAtom, orderNumber);
  // Snapshot the subtotal before clearing the cart — the confirmation page renders after
  // clearCartAtom empties it, so a live cart read there would always show $0.
  set(orderSubtotalAtom, get(cartSubtotalAtom));
  set(clearCartAtom);
  return orderNumber;
});

export { shippingCost };

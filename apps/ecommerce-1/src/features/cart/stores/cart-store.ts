// apps/ecommerce-1/src/features/cart/stores/cart-store.ts
import { atom, type WritableAtom } from "jotai";
import {
  addItem,
  cartCount,
  cartTotal,
  changeQty as changeQtyPure,
  removeItem,
  type CartItem,
} from "../lib/cart-math";
import type { Product } from "@/features/product-catalog/types/product-types";

const TOAST_MS = 2200;
let toastTimer: ReturnType<typeof setTimeout> | undefined;

export const cartAtom = atom([] as CartItem[]);
export const cartOpenAtom = atom(false);
export const wishlistAtom = atom({} as Record<string, boolean>);
export const toastAtom = atom(null as string | null);

export const cartCountAtom = atom((get) => cartCount(get(cartAtom)));
export const cartTotalAtom = atom((get) => cartTotal(get(cartAtom)));

export const showToastAtom = atom(null, (_get, set, message: string) => {
  set(toastAtom, message);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => set(toastAtom, null), TOAST_MS);
});

export const toggleCartAtom = atom(null, (get, set) => set(cartOpenAtom, !get(cartOpenAtom)));

export const toggleWishlistAtom = atom(null, (get, set, id: string) => {
  const w = get(wishlistAtom);
  set(wishlistAtom, { ...w, [id]: !w[id] });
});

export const addToCartAtom: WritableAtom<null, [Product, string?, number?], unknown> = atom(null, (_get, set, product: Product, size: string = "M", qty: number = 1) => {
  set(cartAtom, (c) => addItem(c, product, size, qty));
  set(cartOpenAtom, true);
  set(showToastAtom, `${product.name} added to bag`);
});

export const addToCartWithSizeAtom: WritableAtom<null, [Product, string | null, number], unknown> = atom(
  null,
  (_get, set, product: Product, size: string | null, qty: number) => {
    if (!size) {
      set(showToastAtom, "Please select a size");
      return;
    }
    set(addToCartAtom, product, size, qty);
  },
);

export const removeFromCartAtom: WritableAtom<null, [string], unknown> = atom(null, (_get, set, key: string) => {
  set(cartAtom, (c) => removeItem(c, key));
});

export const changeQtyAtom: WritableAtom<null, [string, number], unknown> = atom(null, (_get, set, key: string, delta: number) => {
  set(cartAtom, (c) => changeQtyPure(c, key, delta));
});

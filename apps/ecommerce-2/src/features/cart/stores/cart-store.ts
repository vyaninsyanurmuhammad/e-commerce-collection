import { atom, type WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { PRODUCTS } from "@/features/product-catalog/constants/product-constants";
import {
  addLine,
  cartCount,
  cartLines as cartLinesPure,
  cartSubtotal as cartSubtotalPure,
  removeLine,
  updateQty,
  type CartLine,
} from "../lib/cart-math";

const CART_STORAGE_KEY = "amara_cart_v1";

// atomWithStorage reads/writes localStorage under this key, matching the source design's
// real persistence behavior exactly — the cart survives a reload. It returns [] during SSR
// and syncs after mount; every Jotai subscriber (nav cart count, checkout summary, product
// cards) already re-renders on change within the tab, so no custom event bus is needed here
// (the source's `amara-cart-change` CustomEvent existed only because vanilla JS had no
// observable state — we do).
export const cartAtom = atomWithStorage<CartLine[]>(CART_STORAGE_KEY, []);

export const cartCountAtom = atom((get) => cartCount(get(cartAtom)));
export const cartLinesAtom = atom((get) => cartLinesPure(get(cartAtom), PRODUCTS));
export const cartSubtotalAtom = atom((get) => cartSubtotalPure(get(cartAtom), PRODUCTS));

// Explicit WritableAtom annotation: without it, TS's inference over a writer with multiple
// optional/default params collapses `qty` to `unknown` at the addLine(...) call below
// (TS2345). Annotating the atom's Args tuple directly fixes inference without changing
// runtime behavior.
export const addToCartAtom: WritableAtom<
  null,
  [productId: number, color?: string | null, size?: string | null, qty?: number],
  void
> = atom(
  null,
  (_get, set, productId: number, color: string | null = null, size: string | null = null, qty = 1) => {
    set(cartAtom, (cart) => addLine(cart, productId, color, size, qty));
  },
);

export const updateCartQtyAtom = atom(null, (_get, set, index: number, qty: number) => {
  set(cartAtom, (cart) => updateQty(cart, index, qty));
});

export const removeFromCartAtom = atom(null, (_get, set, index: number) => {
  set(cartAtom, (cart) => removeLine(cart, index));
});

export const clearCartAtom = atom(null, (_get, set) => set(cartAtom, []));

"use client";
import { useAtomValue, useSetAtom } from "jotai";
import {
  addToCartAtom,
  cartAtom,
  cartCountAtom,
  cartLinesAtom,
  cartSubtotalAtom,
  clearCartAtom,
  removeFromCartAtom,
  updateCartQtyAtom,
} from "../stores/cart-store";

export function useCart() {
  return {
    cart: useAtomValue(cartAtom),
    cartLines: useAtomValue(cartLinesAtom),
    cartCount: useAtomValue(cartCountAtom),
    cartSubtotal: useAtomValue(cartSubtotalAtom),
    addToCart: useSetAtom(addToCartAtom),
    updateCartQty: useSetAtom(updateCartQtyAtom),
    removeFromCart: useSetAtom(removeFromCartAtom),
    clearCart: useSetAtom(clearCartAtom),
  };
}

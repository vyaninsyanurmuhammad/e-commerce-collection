// apps/ecommerce-1/src/features/cart/hooks/use-cart.ts
"use client";
import { useAtomValue, useSetAtom } from "jotai";
import {
  addToCartAtom,
  addToCartWithSizeAtom,
  cartAtom,
  cartCountAtom,
  cartOpenAtom,
  cartTotalAtom,
  changeQtyAtom,
  removeFromCartAtom,
  toastAtom,
  toggleCartAtom,
  toggleWishlistAtom,
  wishlistAtom,
} from "../stores/cart-store";

export function useCart() {
  return {
    cart: useAtomValue(cartAtom),
    cartOpen: useAtomValue(cartOpenAtom),
    setCartOpen: useSetAtom(cartOpenAtom),
    wishlist: useAtomValue(wishlistAtom),
    cartCount: useAtomValue(cartCountAtom),
    cartTotal: useAtomValue(cartTotalAtom),
    toast: useAtomValue(toastAtom),
    toggleCart: useSetAtom(toggleCartAtom),
    toggleWishlist: useSetAtom(toggleWishlistAtom),
    addToCart: useSetAtom(addToCartAtom),
    addToCartWithSize: useSetAtom(addToCartWithSizeAtom),
    removeFromCart: useSetAtom(removeFromCartAtom),
    changeQty: useSetAtom(changeQtyAtom),
  };
}

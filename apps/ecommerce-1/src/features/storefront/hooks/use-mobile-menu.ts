"use client";
import { useAtomValue, useSetAtom } from "jotai";
import { mobileMenuOpenAtom, toggleMobileMenuAtom } from "../stores/storefront-store";

export function useMobileMenu() {
  return {
    mobileMenuOpen: useAtomValue(mobileMenuOpenAtom),
    setMobileMenuOpen: useSetAtom(mobileMenuOpenAtom),
    toggleMobileMenu: useSetAtom(toggleMobileMenuAtom),
  };
}

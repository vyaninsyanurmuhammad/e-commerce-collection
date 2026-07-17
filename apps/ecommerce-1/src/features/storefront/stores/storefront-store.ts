import { atom } from "jotai";

export const mobileMenuOpenAtom = atom(false);

export const toggleMobileMenuAtom = atom(null, (get, set) => {
  set(mobileMenuOpenAtom, !get(mobileMenuOpenAtom));
});

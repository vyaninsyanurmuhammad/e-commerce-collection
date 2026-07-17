"use client";
import { useAtomValue, useSetAtom } from "jotai";
import { orderNumberAtom, placeOrderAtom } from "../stores/checkout-store";

export function useCheckout() {
  return {
    orderNumber: useAtomValue(orderNumberAtom),
    placeOrder: useSetAtom(placeOrderAtom),
  };
}

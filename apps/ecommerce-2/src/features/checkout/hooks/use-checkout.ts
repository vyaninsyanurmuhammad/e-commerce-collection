"use client";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { orderNumberAtom, paymentFormAtom, placeOrderAtom, shippingFormAtom } from "../stores/checkout-store";

export function useCheckout() {
  const [shipping, setShipping] = useAtom(shippingFormAtom);
  const [payment, setPayment] = useAtom(paymentFormAtom);
  return {
    shipping,
    setShipping,
    payment,
    setPayment,
    orderNumber: useAtomValue(orderNumberAtom),
    placeOrder: useSetAtom(placeOrderAtom),
  };
}

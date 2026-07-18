export function shippingCost(subtotal: number): number {
  return subtotal > 0 && subtotal < 150 ? 12 : 0;
}

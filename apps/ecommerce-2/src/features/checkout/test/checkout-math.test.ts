import { describe, expect, it } from "vitest";
import { shippingCost } from "../lib/checkout-math";

describe("shippingCost", () => {
  it("is free at or above $150", () => {
    expect(shippingCost(150)).toBe(0);
    expect(shippingCost(200)).toBe(0);
  });

  it("is $12 flat below $150", () => {
    expect(shippingCost(1)).toBe(12);
    expect(shippingCost(149.99)).toBe(12);
  });

  it("is free for an empty cart (subtotal 0)", () => {
    expect(shippingCost(0)).toBe(0);
  });
});

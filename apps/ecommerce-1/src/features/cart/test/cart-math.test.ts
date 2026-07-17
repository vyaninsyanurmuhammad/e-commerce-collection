import { describe, expect, it } from "vitest";
import { addItem, cartCount, cartTotal, changeQty, lineTotal, removeItem } from "../lib/cart-math";
import type { Product } from "@/features/product-catalog/types/product-types";

const hoodie: Product = { id: "n1", name: "Core Hoodie", price: "99.00", compareAt: null, badge: null, img: "/a.jpg" };
const jacket: Product = { id: "n4", name: "Puffer Jacket", price: "499.00", compareAt: null, badge: null, img: "/b.jpg" };

describe("addItem", () => {
  it("adds a new product+size as a new line", () => {
    expect(addItem([], hoodie, "M")).toEqual([
      { key: "n1-M", id: "n1", name: "Core Hoodie", price: 99, img: "/a.jpg", size: "M", qty: 1 },
    ]);
  });

  it("increments qty when the same product+size is added again", () => {
    let cart = addItem([], hoodie, "M");
    cart = addItem(cart, hoodie, "M");
    expect(cart).toHaveLength(1);
    expect(cart[0]?.qty).toBe(2);
  });

  it("creates a separate line for the same product in a different size", () => {
    let cart = addItem([], hoodie, "M");
    cart = addItem(cart, hoodie, "L");
    expect(cart).toHaveLength(2);
  });

  it("supports adding a custom quantity", () => {
    expect(addItem([], hoodie, "M", 3)[0]?.qty).toBe(3);
  });
});

describe("removeItem", () => {
  it("removes the matching line", () => {
    expect(removeItem(addItem([], hoodie, "M"), "n1-M")).toEqual([]);
  });

  it("is a no-op for an unknown key", () => {
    const cart = addItem([], hoodie, "M");
    expect(removeItem(cart, "missing")).toEqual(cart);
  });
});

describe("changeQty", () => {
  it("increments and decrements qty", () => {
    let cart = addItem([], hoodie, "M", 2);
    cart = changeQty(cart, "n1-M", 1);
    expect(cart[0]?.qty).toBe(3);
    cart = changeQty(cart, "n1-M", -1);
    expect(cart[0]?.qty).toBe(2);
  });

  it("never drops qty below 1", () => {
    const cart = addItem([], hoodie, "M", 1);
    expect(changeQty(cart, "n1-M", -5)[0]?.qty).toBe(1);
  });
});

describe("cartCount / cartTotal / lineTotal", () => {
  it("sums quantities and totals across lines", () => {
    let cart = addItem([], hoodie, "M", 2); // 198
    cart = addItem(cart, jacket, "L", 1); // 499
    expect(cartCount(cart)).toBe(3);
    expect(cartTotal(cart)).toBeCloseTo(697);
  });

  it("treats an empty cart as zero", () => {
    expect(cartCount([])).toBe(0);
    expect(cartTotal([])).toBe(0);
  });

  it("computes a line total for one item", () => {
    expect(lineTotal(addItem([], hoodie, "M", 2)[0]!)).toBe(198);
  });
});

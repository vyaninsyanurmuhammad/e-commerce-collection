import { describe, expect, it } from "vitest";
import { addLine, cartCount, cartLines, cartSubtotal, removeLine, updateQty } from "../lib/cart-math";
import type { Product } from "@/features/product-catalog/types/product-types";

const shirt: Product = {
  id: 1, name: "Relaxed Utility Shirt", price: 128, compare: 160, tags: ["men"], category: "men",
  badge: null, colors: ["sand", "olive"], sizes: ["M", "L"], img: "trend-1", placeholder: "shirt", src: "", credit: "", creditHref: "",
};
const trouser: Product = {
  id: 2, name: "Tailored Wide-Leg Trouser", price: 145, compare: 180, tags: ["women"], category: "women",
  badge: null, colors: ["black"], sizes: ["S", "M"], img: "trend-2", placeholder: "trouser", src: "", credit: "", creditHref: "",
};
const products = [shirt, trouser];

describe("addLine", () => {
  it("adds a new productId+color+size as a new line", () => {
    expect(addLine([], 1, "sand", "M")).toEqual([{ productId: 1, color: "sand", size: "M", qty: 1 }]);
  });

  it("increments qty when the same productId+color+size is added again", () => {
    let cart = addLine([], 1, "sand", "M");
    cart = addLine(cart, 1, "sand", "M");
    expect(cart).toHaveLength(1);
    expect(cart[0]?.qty).toBe(2);
  });

  it("creates a separate line for the same product in a different color", () => {
    let cart = addLine([], 1, "sand", "M");
    cart = addLine(cart, 1, "olive", "M");
    expect(cart).toHaveLength(2);
  });

  it("creates a separate line for the same product in a different size", () => {
    let cart = addLine([], 1, "sand", "M");
    cart = addLine(cart, 1, "sand", "L");
    expect(cart).toHaveLength(2);
  });

  it("supports adding a custom quantity", () => {
    expect(addLine([], 1, "sand", "M", 3)[0]?.qty).toBe(3);
  });

  it("defaults color and size to null", () => {
    expect(addLine([], 1)).toEqual([{ productId: 1, color: null, size: null, qty: 1 }]);
  });
});

describe("updateQty", () => {
  it("sets the qty at the given index", () => {
    let cart = addLine([], 1, "sand", "M", 2);
    cart = updateQty(cart, 0, 5);
    expect(cart[0]?.qty).toBe(5);
  });

  it("never drops qty below 1", () => {
    const cart = addLine([], 1, "sand", "M", 1);
    expect(updateQty(cart, 0, -3)[0]?.qty).toBe(1);
  });
});

describe("removeLine", () => {
  it("removes the line at the given index", () => {
    let cart = addLine([], 1, "sand", "M");
    cart = addLine(cart, 2, "black", "S");
    expect(removeLine(cart, 0)).toEqual([{ productId: 2, color: "black", size: "S", qty: 1 }]);
  });
});

describe("cartCount / cartLines / cartSubtotal", () => {
  it("sums quantities across lines", () => {
    let cart = addLine([], 1, "sand", "M", 2);
    cart = addLine(cart, 2, "black", "S", 1);
    expect(cartCount(cart)).toBe(3);
  });

  it("treats an empty cart as zero", () => {
    expect(cartCount([])).toBe(0);
    expect(cartSubtotal([], products)).toBe(0);
  });

  it("joins each line to its product and computes a line total", () => {
    const cart = addLine([], 1, "sand", "M", 2);
    const lines = cartLines(cart, products);
    expect(lines[0]?.product?.name).toBe("Relaxed Utility Shirt");
    expect(lines[0]?.lineTotal).toBe(256);
  });

  it("sums line totals for the subtotal", () => {
    let cart = addLine([], 1, "sand", "M", 2); // 256
    cart = addLine(cart, 2, "black", "S", 1); // 145
    expect(cartSubtotal(cart, products)).toBe(401);
  });

  it("leaves lineTotal at 0 for a productId with no matching product", () => {
    const cart = addLine([], 999, null, null, 1);
    const lines = cartLines(cart, products);
    expect(lines[0]?.product).toBeUndefined();
    expect(lines[0]?.lineTotal).toBe(0);
  });
});

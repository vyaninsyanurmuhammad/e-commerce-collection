// apps/ecommerce-1/src/features/cart/components/cart-drawer.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { lineTotal } from "../lib/cart-math";
import { useCart } from "../hooks/use-cart";

export function CartDrawer() {
  const router = useRouter();
  const { cart, cartOpen, setCartOpen, cartTotal, changeQty, removeFromCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCartOpen(false);
    router.push("/checkout");
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" showCloseButton={false} className="w-full gap-0 rounded-none p-0 sm:max-w-md">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5.5">
          <div className="font-archivo text-lg font-extrabold text-ink">
            Your Bag ({cart.reduce((a, c) => a + c.qty, 0)})
          </div>
          <SheetClose className="p-1 text-[22px] text-neutral-500">&times;</SheetClose>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-2">
          {cart.length === 0 ? (
            <div className="py-15 text-center text-sm font-medium text-neutral-400">Your bag is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.key} className="flex gap-3.5 border-b border-neutral-100 py-4">
                <div className="relative h-24 w-18 flex-none bg-image-bg">
                  <Image src={item.img} alt={item.name} fill sizes="72px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-ink">{item.name}</div>
                    <div className="mt-0.5 text-xs font-medium text-neutral-500">
                      Size {item.size} &middot; ${item.price.toFixed(2)} USD
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 rounded-sm border border-neutral-300">
                      <button type="button" className="px-2.5 py-1 text-[13px] font-semibold text-ink" onClick={() => changeQty(item.key, -1)}>
                        -
                      </button>
                      <span className="min-w-3.5 text-center text-xs font-semibold text-ink">{item.qty}</span>
                      <button type="button" className="px-2.5 py-1 text-[13px] font-semibold text-ink" onClick={() => changeQty(item.key, 1)}>
                        +
                      </button>
                    </div>
                    <button type="button" className="text-xs font-semibold text-neutral-500" onClick={() => removeFromCart(item.key)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex-none text-[13px] font-semibold text-ink">${lineTotal(item).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-neutral-200 px-6 pt-5 pb-7">
          <div className="mb-4 flex justify-between font-archivo text-[15px] font-bold text-ink">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)} USD</span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full bg-ink py-4 text-[13px] font-semibold tracking-wide text-white uppercase"
          >
            Checkout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

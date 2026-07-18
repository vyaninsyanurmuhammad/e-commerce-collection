// apps/ecommerce-2/src/features/checkout/components/checkout-shipping-form.tsx
"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCheckout } from "../hooks/use-checkout";
import { shippingSchema, type ShippingFormData } from "../schemas/checkout-schemas";

export function CheckoutShippingForm() {
  const router = useRouter();
  const { shipping, setShipping } = useCheckout();
  const form = useForm<ShippingFormData>({ resolver: zodResolver(shippingSchema), defaultValues: shipping });

  const onSubmit = (data: ShippingFormData) => {
    setShipping(data);
    router.push("/checkout/payment");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Full name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email address" className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Street address</FormLabel>
              <FormControl>
                <Input placeholder="Street address" className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3.5">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">Postal code</FormLabel>
                <FormControl>
                  <Input placeholder="Postal code" className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Country</FormLabel>
              <FormControl>
                <Input placeholder="Country" className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-3.5 flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/checkout")}
            className="rounded-full border-ink px-6 text-ink hover:bg-transparent"
          >
            Back
          </Button>
          <Button type="submit" className="h-auto flex-1 rounded-full bg-ink py-3.5 text-sm text-white hover:bg-ink/90">
            Continue to Payment
          </Button>
        </div>
      </form>
    </Form>
  );
}

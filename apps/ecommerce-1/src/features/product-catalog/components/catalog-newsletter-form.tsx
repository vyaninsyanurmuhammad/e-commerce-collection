// apps/ecommerce-1/src/features/product-catalog/components/catalog-newsletter-form.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { newsletterSchema, type NewsletterFormData } from "../schemas/catalog-schemas";

export function CatalogNewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", consent: false },
  });

  if (submitted) {
    return <div className="py-4 text-sm font-semibold text-ink">Thanks for joining — check your inbox for your 10% code.</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="flex flex-col gap-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" className="rounded-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-start gap-2.5">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5 rounded-none" />
              </FormControl>
              <div>
                <FormLabel className="text-[11px] leading-relaxed font-normal text-neutral-500">
                  I agree to receive marketing content via email and have read and accept the Privacy Policy.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="h-auto rounded-none bg-accent py-4 text-xs font-bold tracking-wide text-white uppercase hover:bg-accent-hover">
          Join Now
        </Button>
      </form>
    </Form>
  );
}

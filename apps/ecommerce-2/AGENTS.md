# ecommerce-2 (Amara) — Agent Rules

## Commands

```bash
bun run dev          # Start dev server (Next.js)
bun run build        # Production build
bun run lint         # ESLint check (--max-warnings 0 — any warning fails)
bun run check-types  # tsc --noEmit
bunx vitest run       # Cart math + checkout math unit tests
```

## Architecture

Next.js 16 App Router, React 19. A single-brand apparel storefront ("Amara") with two route groups — no client-side "view" state machine:

| Route | Feature view | Route group |
|---|---|---|
| `/` | `home`'s `HomeView` | `(storefront)` |
| `/shop` | `collection`'s `CollectionView` | `(storefront)` |
| `/checkout` | `checkout`'s `CheckoutCartView` | `(checkout)` |
| `/checkout/shipping` | `CheckoutShippingView` | `(checkout)` |
| `/checkout/payment` | `CheckoutPaymentView` | `(checkout)` |
| `/order-confirmation` | `CheckoutConfirmationView` | `(checkout)` |

**Two distinct chrome variants, not one global layout** — a deliberate difference from the sibling app `ecommerce-1`: `(storefront)/layout.tsx` renders the announcement bar + header nav (with a Collections dropdown and scroll-triggered solid background); `(checkout)/layout.tsx` renders a minimal logo + "Secure Checkout" + step progress bar instead. This matches the source design exactly — Checkout's nav is visibly different from Home/Shop's, not a simplified version of it. The footer is not global chrome — `(storefront)/layout.tsx` itself renders neither: the rich 5-column footer renders via `HomeView` (Home only), and a separate minimal one-line copyright footer renders via `CollectionView` (Shop only) — the two pages don't share a footer component.

**No cart drawer, no mobile menu, no toast** — the source design has none of these anywhere (confirmed across all 3 original page designs' nav markup). `Cart (n)` in the header is a plain link straight to `/checkout`. Do not add a `Sheet`-based drawer or mobile hamburger menu speculatively; the sibling app ecommerce-1 has both because its own source design called for them — this one didn't.

**Cart persists to `localStorage`** (key `amara_cart_v1`) via Jotai's `atomWithStorage` — a deliberate difference from ecommerce-1's in-memory-only cart, matching this design's actual source behavior (the cart survives a page reload).

## Folder Structure (FIXED — do not deviate)

```
src/
├── app/
│   ├── layout.tsx                       # Fonts (Outfit, DM Sans), metadata — NO chrome here
│   ├── (storefront)/
│   │   ├── layout.tsx                   # Announcement bar + header chrome (no footer here — see Architecture)
│   │   ├── page.tsx                     # Home
│   │   └── shop/page.tsx                # Collection — reads searchParams.cat server-side
│   └── (checkout)/
│       ├── layout.tsx                   # Minimal checkout nav + step progress bar
│       ├── checkout/page.tsx            # Cart step
│       ├── checkout/shipping/page.tsx   # Shipping step
│       ├── checkout/payment/page.tsx    # Payment step
│       └── order-confirmation/page.tsx  # Confirmation
├── components/ui/                       # shadcn/ui primitives — never edit directly
├── lib/utils.ts                         # cn()
└── features/
    ├── storefront/                      # nav/footer/newsletter chrome (storefront group only)
    ├── cart/                            # cart state (atomWithStorage) — zero feature deps
    ├── product-catalog/                 # product data, ProductCard, ProductGrid, reveal hook
    ├── home/                            # 12 Home-page sections, most one-off (not shared with Shop)
    ├── collection/                      # Shop/listing page
    └── checkout/                        # 4-step wizard as 4 real routes; depends on cart's store only
```

### Feature structure (canonical)

```
features/<feature-name>/          (kebab-case)
├── components/                   UI components, filenames prefixed with the feature name
├── views/                        Route-bound top-level components (one per page.tsx)
├── hooks/                        Custom hooks
├── stores/                       Jotai atoms — shared client UI state only
├── lib/                          Pure logic (e.g. cart-math.ts, checkout-math.ts) — what Vitest exercises
├── test/                         Vitest specs — NOT colocated *.test.ts next to source
├── types/                        TypeScript types
├── schemas/                      Zod validation schemas (forms)
├── constants/                    Static data
└── index.ts                      Public barrel export — the ONLY import surface
```

No `api.ts`/`queries.ts`/`mutations.ts`/`query-keys.ts` in any feature — this app has no backend; all product data is static, all other state is client-only Jotai (plus real `localStorage` persistence for the cart specifically).

### Rules

- **Component filenames must be prefixed with the feature name.** `product-card.tsx`, `checkout-shipping-form.tsx` — never `card.tsx` or `shipping-form.tsx` alone.
- **`index.ts` is the primary cross-feature import surface for components and views** — except a feature's `stores/*.ts` may import another feature's `stores/*.ts` directly (never its barrel) for a genuine state dependency: `checkout/stores/checkout-store.ts` reads `cart/stores/cart-store.ts`'s `cartAtom`/`clearCartAtom` directly — the one sanctioned cross-feature store edge in this app.
- **Thin pages, fat features.** Every `src/app/**/page.tsx` is orchestration only.
- **Routing, not state, is the router.** Screen transitions are `next/link` / `useRouter().push(...)`. The checkout wizard's 4 "steps" are 4 real routes, not a `step` atom — `CheckoutStepHeader` derives the active step from `usePathname()`.
- **Forms are React Hook Form + Zod, always** — schema in `schemas/checkout-schemas.ts` / `storefront-schemas.ts`, component using shadcn's `Form`/`FormField`. (The source design itself had zero form validation; this app adds sensible minimums on top, same posture as ecommerce-1.)
- **Shared UI state is Jotai** — cart (with `atomWithStorage`), and the checkout shipping/payment form values (plain `atom`, so they survive Back/Forward between the 3 checkout routes without surviving a hard refresh — deliberately not persisted to storage). Purely page-local UI state (Collection's filters/sort/density/page, a product card's selected color swatch) stays as plain `useState`.
- **Reuse before creating.** Check `product-catalog`'s `ProductCard`/`ProductGrid`/`useRevealOnScroll` before writing a new product-grid or scroll-reveal component. `home`'s scroll-driven hooks (`useScrollProgress`, `useWordRevealProgress`) are reusable across any future pinned/parallax section.

## Styling

**Tailwind CSS v4**, tokens in `src/app/globals.css` via `@theme inline` + `:root`. Colors are **OKLCH throughout** — Tailwind v4 accepts `oklch()` natively, no hex conversion needed anywhere. Brand tokens: `--ink` (`oklch(0.17 0.005 75)`), `--background` (`oklch(0.98 0.008 75)`), `--accent` (`oklch(0.5 0.14 35)`, terracotta — links, sale badges), `--panel` (footer bg). Fonts: `--font-outfit` (display), `--font-dm-sans` (body), both `next/font/google`.

**Fully rounded visual language** — pill buttons (`rounded-full`), soft corners elsewhere (`rounded-lg`/`rounded-xl`/`rounded-2xl`). This is the opposite of sibling app `ecommerce-1`'s all-sharp-corners brand — do not carry over any `rounded-none` convention from there.

## UI Components

`src/components/ui/` contains shadcn components (`new-york` style, `neutral` base, lucide icons): `button`, `input`, `select`, `form`, `label`. **No `sheet`, no `checkbox`** — not needed by this design. Add new ones via `bunx shadcn@latest add <component>`. Never edit files in `ui/` directly.

## Testing

Vitest, scoped to pure logic only: `src/features/cart/test/cart-math.test.ts`, `src/features/checkout/test/checkout-math.test.ts` — no component/UI tests. Run with `bunx vitest run`.

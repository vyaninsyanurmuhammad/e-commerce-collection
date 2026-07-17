# ecommerce-1 (Meere) — Agent Rules

## Commands

```bash
bun run dev          # Start dev server (Next.js)
bun run build        # Production build
bun run lint         # ESLint check (--max-warnings 0 — any warning fails)
bun run check-types  # tsc --noEmit
bunx vitest run       # Cart math unit tests
```

## Architecture

Next.js 16 App Router, React 19. A single-brand apparel storefront ("Meere") with five real routes — no client-side "view" state machine:

| Route | Feature view |
|---|---|
| `/` | `product-catalog`'s `CatalogHomeView` |
| `/catalog` | `product-catalog`'s `CatalogView` |
| `/product/[id]` | `product-detail`'s `ProductDetailView` |
| `/checkout` | `checkout`'s `CheckoutView` |
| `/order-confirmation` | `checkout`'s `CheckoutOrderConfirmationView` |

Global chrome (ticker+header, mobile menu, cart drawer, toast) lives in `src/app/layout.tsx` and renders on every route.

## Folder Structure (FIXED — do not deviate)

```
src/
├── app/                          # Next.js App Router — thin pages only
│   ├── layout.tsx                # Fonts, metadata, global chrome
│   ├── page.tsx                  # Home
│   ├── catalog/page.tsx
│   ├── product/[id]/page.tsx
│   ├── checkout/page.tsx
│   └── order-confirmation/page.tsx
├── components/ui/                # shadcn/ui primitives — never edit directly
├── lib/utils.ts                  # cn()
└── features/
    ├── storefront/                # nav constants + mobile-menu state + global chrome components
    ├── cart/                      # cart/wishlist/toast state, drawer — zero feature deps
    ├── product-catalog/           # product data, Home + Catalog browsing UI (Hero, grids, banners, newsletter, footer)
    ├── product-detail/            # PDP (reads `id` from the route, not from any store)
    └── checkout/                  # checkout form + confirmation (depends on cart's store only)
```

### Feature structure (canonical)

```
features/<feature-name>/          (kebab-case)
├── components/                   UI components, filenames prefixed with the feature name
├── views/                        Route-bound top-level components (one per page.tsx)
├── hooks/                        Custom hooks
├── stores/                       Jotai atoms — shared client UI state only
├── test/                         Vitest specs — NOT colocated *.test.ts next to source
├── types/                        TypeScript types
├── schemas/                      Zod validation schemas (forms)
├── constants/                    Static data
└── index.ts                      Public barrel export — the ONLY import surface
```

No `api.ts`/`queries.ts`/`mutations.ts`/`query-keys.ts` in any feature — this app has no backend; all product data is static, all other state is client-only Jotai. Do not add a data-fetching layer speculatively.

### Rules

- **Component filenames must be prefixed with the feature name.** `product-card.tsx`, `checkout-form.tsx` — never `card.tsx` or `form.tsx` alone.
- **`index.ts` is the primary cross-feature import surface for components and views** — constants, pure lib helpers, and types may be deep-imported directly when doing so avoids re-exporting pass-through data through a barrel that adds no value; today's examples: `checkout/stores` reads `cart/stores`'s `cartAtom` directly, `product-detail` reads `product-catalog`'s constants directly, `checkout` reads `cart`'s `lineTotal` directly.
- **Thin pages, fat features.** Every file under `src/app/**/page.tsx` is orchestration only (import one view component from a feature barrel, render it — nothing else). All screen logic, state, and markup lives in `features/`.
- **Routing, not state, is the router.** Screen transitions are `next/link` / `useRouter().push(...)`, never a hand-rolled `view` atom — a route always exists in the URL. `product-detail-view.tsx` receives its product `id` as a prop from the dynamic route segment, not from global state.
- **Forms are React Hook Form + Zod, always.** Schema in `schemas/<feature>-schemas.ts`, component using shadcn's `Form`/`FormField`.
- **Shared UI state is Jotai**, not React Context — only for state genuinely shared across components in different parts of the tree (cart, wishlist, toast, mobile-menu-open). Purely local UI state (a form's own fields, a product page's selected size, a catalog filter) stays as plain `useState` in the component that owns it.
- **Reuse before creating.** Check `product-catalog`'s `ProductCard`/`ProductGrid`/`SectionHeading` before writing a new product-grid or heading component.

## Styling

**Tailwind CSS v4** (CSS-based config, no `tailwind.config.js`; theme tokens in `src/app/globals.css` via `@theme inline` + a `:root` hex block). Brand tokens: `--ink` (`#0A0A0A`), `--accent` (`#E10600`), `--accent-hover`, `--panel`, `--image-bg`. Display font `--font-archivo`, body font `--font-inter` (both `next/font/google`, wired in `layout.tsx`).

## UI Components

`src/components/ui/` contains shadcn components (`new-york` style, `neutral` base, lucide icons). Add new ones via `bunx shadcn@latest add <component>` (config in `components.json`). Never edit files in `ui/` directly. This design's visual language (sharp corners, no rounded buttons/inputs, uppercase tracked labels) means every `Button`/`Input` usage overrides the shadcn default with `className="rounded-none"`.

## Testing

Vitest, scoped to pure logic only (`src/features/cart/test/cart-math.test.ts`) — no component/UI tests. Run with `bunx vitest run`.

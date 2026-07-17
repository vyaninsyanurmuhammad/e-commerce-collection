// apps/ecommerce-1/src/features/product-catalog/components/catalog-footer.tsx
"use client";
import { CatalogFooterForm } from "./catalog-footer-form";

const LINK_COLUMNS = [
  { heading: "Company", links: ["About", "Contact Us"] },
  { heading: "Service", links: ["FAQ", "Shipping", "Returns"] },
  { heading: "Social", links: ["X", "Instagram", "Facebook", "TikTok", "LinkedIn"] },
];

export function CatalogFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-15 bg-white px-8 pt-16 text-ink">
      <div className="grid grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_0.9fr] gap-8 pb-14">
        <div>
          <div className="mb-4 max-w-85 text-sm font-bold">
            A contemporary clothing brand focused on timeless silhouettes, elevated materials, and understated detail.
          </div>
          <div className="mb-4.5 max-w-85 text-[13px] text-neutral-500">
            Receive updates on new collections, exclusive releases, and selected pieces before anyone else.
          </div>
          <CatalogFooterForm />
        </div>

        {LINK_COLUMNS.map((col) => (
          <div key={col.heading}>
            <div className="mb-4 text-xs font-bold">{col.heading}</div>
            <div className="flex flex-col gap-2.5">
              {col.links.map((label) => (
                <a key={label} href="#" className="text-[13px] font-medium text-ink">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="mb-4 text-xs font-bold">Currently Shopping</div>
          <div className="mb-4 text-[13px] font-medium text-ink">United States / US / $ / USD</div>
          <div className="mb-4 inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-xs font-semibold text-white">Change Country</div>
          <div className="flex gap-2">
            {["VISA", "MC", "AMEX", "DISC"].map((p) => (
              <div key={p} className="flex h-5.5 w-9 items-center justify-center border border-neutral-300 bg-neutral-100 text-[8px] font-semibold text-neutral-500">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-200 py-5 text-xs text-neutral-500">
        <span>&copy; Meere 2026. All Rights Reserved.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="text-xs text-neutral-500">Terms and Conditions</a>
          <a href="#" className="text-xs text-neutral-500">Privacy Policy</a>
          <button type="button" onClick={scrollToTop} className="text-xs text-neutral-500 transition-colors hover:text-ink">
            Back to Top
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-white leading-[0.78]">
        <div className="text-center font-archivo text-[clamp(70px,14vw,220px)] leading-[0.78] font-black tracking-tighter whitespace-nowrap text-ink">
          MEERE
        </div>
      </div>
    </footer>
  );
}

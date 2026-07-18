// apps/ecommerce-2/src/features/storefront/components/storefront-footer.tsx
import { FOOTER_COLUMNS } from "../constants/storefront-constants";
import { StorefrontNewsletterForm } from "./storefront-newsletter-form";

export function StorefrontFooter() {
  return (
    <footer className="bg-panel px-12 pt-16 pb-7">
      <div className="mb-12 grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="size-2.5 rotate-45 bg-ink" />
            <span className="font-outfit text-[19px] font-bold tracking-wide">AMARA</span>
          </div>
          <p className="mb-5 max-w-65 text-sm text-ink/60">
            Considered clothing for everyday movement — honest fabrics, lasting fit.
          </p>
          <StorefrontNewsletterForm />
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <h6 className="mb-4 text-[13px] tracking-wide text-ink/60">{col.heading.toUpperCase()}</h6>
            <div className="flex flex-col gap-2.5 text-sm">
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="text-ink">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between border-t border-ink/10 pt-5.5 text-[13px] text-ink/60">
        <span>© 2026 Amara. All Rights Reserved.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}

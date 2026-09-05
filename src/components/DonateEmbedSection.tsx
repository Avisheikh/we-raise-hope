import { GivebutterForm } from "./GivebutterForm";
import { site } from "@/lib/site";

type DonateEmbedSectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  className?: string;
};

export function DonateEmbedSection({
  eyebrow = "Give today",
  title = "Donate securely online",
  body = `Card, Venmo, PayPal, and more via Givebutter. Gifts to ${site.legalName} (EIN ${site.ein}) are tax-deductible to the extent allowed by law.`,
  className = "section-pad bg-cream",
}: DonateEmbedSectionProps) {
  return (
    <section className={className} aria-labelledby="donate-embed-heading">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="donate-embed-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{body}</p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            <li>· {site.programPercent}% goes to programs</li>
            <li>· U.S. {site.nonprofitStatus} · EIN {site.ein}</li>
            <li>
              · Zelle: {site.zelleHandle} (memo: {site.zelleMemo})
            </li>
          </ul>
        </div>
        <div>
          <GivebutterForm />
        </div>
      </div>
    </section>
  );
}

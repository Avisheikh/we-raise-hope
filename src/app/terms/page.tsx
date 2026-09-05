import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Terms of Use",
  `Terms of use for the ${site.name} website.`,
  "/terms",
);

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-narrow prose-wrh text-ink-soft">
        <h1 className="font-display text-4xl font-semibold text-ink">Terms of Use</h1>
        <p className="mt-4 text-sm">Last updated: September 5, 2026</p>
        <p className="mt-8">
          By using {site.url}, you agree to these terms. The site is operated by {site.legalName}, a U.S. {site.nonprofitStatus}{" "}
          public charity (EIN {site.ein}).
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Donations</h2>
        <p>
          Contributions are solicited for charitable purposes and are tax-deductible to the extent allowed by law. Online
          gifts are processed through Givebutter. Recurring gifts may be canceled according to the processor’s tools or by
          contacting us.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Content</h2>
        <p>
          Site content is provided for informational purposes. Impact figures and stories will be updated as verified data
          is available. Photographs and stories involving community members are shared with appropriate permission where
          required.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Limitation</h2>
        <p>
          The website is provided “as is.” To the fullest extent permitted by law, {site.legalName} disclaims warranties
          regarding uninterrupted access or error-free content.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Contact</h2>
        <p>
          <a href={`mailto:${site.email}`} className="text-brand">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}

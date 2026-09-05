import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for ${site.name} websites and donation-related communications.`,
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="container-narrow prose-wrh text-ink-soft">
        <h1 className="font-display text-4xl font-semibold text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm">Last updated: September 5, 2026</p>
        <p className="mt-8">
          {site.legalName} (“we,” “us”) respects your privacy. This policy describes how we handle information collected
          through {site.url} and related communications.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Information we collect</h2>
        <p>
          We may collect contact details you submit (name, email, phone, mailing address), donation-related information
          processed by Givebutter or other payment processors, and standard analytics data such as pages visited and device
          type.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">How we use information</h2>
        <p>
          We use information to process gifts, issue receipts, respond to inquiries, improve our website, and share updates
          about our programs when you opt in to communications.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Payment processing</h2>
        <p>
          Online donations are processed by Givebutter and their payment partners. We do not store full payment card numbers
          on this website. Review Givebutter’s privacy policy for processor practices.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Sharing</h2>
        <p>
          We do not sell personal information. We may share data with service providers who help us operate (hosting, email,
          donation processing) or when required by law.
        </p>
        <h2 className="font-display mt-10 text-2xl font-semibold text-ink">Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${site.email}`} className="text-brand">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}

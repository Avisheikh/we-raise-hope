import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { PartnerLinks } from "@/components/PartnerLinks";
import { TrustBar } from "@/components/TrustBar";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Transparency & Financials",
  `Verify ${site.legalName}: EIN ${site.ein}, U.S. 501(c)(3) status, IRS documentation, Candid profile, board, and program allocation.`,
  "/trust",
);

export default function TrustPage() {
  const irsPdfPath = path.join(process.cwd(), "public/documents/irs-determination-letter.pdf");
  const hasIrsPdf = existsSync(irsPdfPath);

  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Transparency & financials</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.legalName}
          </h1>
          <p className="mt-6 text-lg text-white/80">
            U.S. {site.nonprofitStatus} public charity · EIN {site.ein} · {site.programPercent}% to programs. Verify with
            the IRS first—then review documents, governance, and money flow on this site.
          </p>
        </div>
      </section>
      <TrustBar />
      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="border border-line bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">1. IRS (true legal proof)</h2>
            <p className="mt-3 text-sm text-ink-soft">
              The IRS determined {site.legalName} is a {site.nonprofitStatus} public charity. That is what makes gifts
              tax-deductible—not Candid, not our website design.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              {[
                ["Legal name", site.legalName],
                ["EIN / Tax ID", site.ein],
                ["Status", `${site.nonprofitStatus} public charity`],
                ["Classification", site.publicCharity],
                ["Effective", site.exemptionEffective],
                ["To programs", `${site.programPercent}%`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line py-2">
                  <dt className="text-ink-soft">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              {hasIrsPdf ? (
                <ButtonLink href="/documents/irs-determination-letter.pdf" variant="secondary">
                  Download IRS letter (PDF)
                </ButtonLink>
              ) : (
                <span className="inline-flex items-center rounded-sm border border-dashed border-line bg-mist/50 px-4 py-3 text-sm text-ink-soft">
                  IRS letter PDF not uploaded yet
                </span>
              )}
              <ButtonLink href={site.irsEoSearch} variant="ghost" external>
                Search IRS EO database
              </ButtonLink>
            </div>
            {!hasIrsPdf ? (
              <p className="mt-4 text-xs text-ink-soft">
                To enable download: save your IRS Letter 947 as{" "}
                <code className="rounded bg-mist px-1">public/documents/irs-determination-letter.pdf</code> and refresh.
              </p>
            ) : null}
          </article>

          <article className="border border-line bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">2. Candid (public listing)</h2>
            <div className="mt-3 space-y-4 text-sm text-ink-soft">
              <p>
                Donors can look us up on Candid (formerly GuideStar) by name or EIN. Our public profile is live and
                linked below. Candid lists IRS-recognized nonprofits; completing the profile later can unlock Seals of
                Transparency (Bronze → Platinum).
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Legal name: {site.legalName}</li>
                <li>EIN: {site.ein}</li>
                <li>Profile ID: 16282019</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href={site.candidUrl} external>
                  View Candid profile
                </ButtonLink>
                <ButtonLink href={site.candidPrintUrl} variant="ghost" external>
                  Candid print / PDF view
                </ButtonLink>
              </div>
              <p className="text-xs">
                Profile:{" "}
                <a href={site.candidUrl} className="text-brand break-all" target="_blank" rel="noopener noreferrer">
                  {site.candidUrl}
                </a>
              </p>
            </div>

            <h3 className="mt-8 font-semibold text-ink">Charity Navigator</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Separate from Candid. Star ratings need multiple full Form 990 filings—not 990-N alone. We will not show
              fake stars.
            </p>
            {site.charityNavigatorUrl ? (
              <a
                href={site.charityNavigatorUrl}
                className="mt-2 inline-block text-sm font-semibold text-brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Charity Navigator
              </a>
            ) : (
              <p className="mt-2 text-xs text-ink-soft">Listing link will appear here when available.</p>
            )}

            <h3 className="mt-8 font-semibold text-ink">Operating partners</h3>
            <p className="mt-2 text-sm text-ink-soft">
              <PartnerLinks />
            </p>
          </article>
        </div>
        <div className="container-narrow mt-12 text-center">
          <ButtonLink href="/donate" variant="primary">
            Donate to our 501(c)(3)
          </ButtonLink>
        </div>
      </section>
      <DonateEmbedSection title="Donate with verified trust" />
    </>
  );
}

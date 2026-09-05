import type { Metadata } from "next";
import Image from "next/image";
import { GivebutterForm } from "@/components/GivebutterForm";
import { PartnerLinks } from "@/components/PartnerLinks";
import { TrustBar } from "@/components/TrustBar";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Donate | Tax-Deductible Support for Rural Nepal",
  `Make a tax-deductible gift to ${site.legalName} (EIN ${site.ein}) via Givebutter—primary donation path for Bodgaun Hospital, schools, water, and opportunity.`,
  "/donate",
);

export default function DonatePage() {
  return (
    <>
      <section className="section-pad bg-forest text-white !pb-10">
        <div className="container-narrow text-center">
          <p className="eyebrow eyebrow-on-dark">Donate</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Donate today
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Surgery is operating at Bodgaun. Your gift sustains staff, supplies, classrooms, clean water, and
            opportunity. {site.programPercent}% goes to programs. Gifts are tax-deductible to the extent allowed by law.
            Primary online giving is through Givebutter on this page.
          </p>
        </div>
      </section>
      <TrustBar compact />
      <section className="section-pad !pt-10" id="monthly">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <GivebutterForm />
            <p className="mt-4 text-center text-xs text-ink-soft lg:text-left">
              Processed securely via Givebutter for {site.legalName}. EIN {site.ein}.
            </p>
          </div>
          <aside className="space-y-6">
            <div className="border border-line bg-white p-7">
              <h2 className="font-display text-xl font-semibold">Why give here</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>U.S. {site.nonprofitStatus} public charity</li>
                <li>EIN {site.ein}</li>
                <li>{site.programPercent}% directed to programs</li>
                <li>
                  Partners: <PartnerLinks />
                </li>
              </ul>
            </div>
            <div className="border border-line bg-white p-7">
              <h2 className="font-display text-xl font-semibold">Other ways to give</h2>
              <div className="mt-4 space-y-5 text-sm text-ink-soft">
                <div>
                  <p className="font-semibold text-ink">Zelle</p>
                  <p className="mt-1">
                    Send to <span className="font-semibold text-ink">{site.zelleHandle}</span>
                    <br />
                    Memo: <span className="font-semibold text-ink">{site.zelleMemo}</span>
                  </p>
                  <div className="relative mt-3 h-36 w-36">
                    <Image
                      src="/images/from-wrh/wallets/zelle-qr.jpeg"
                      alt="Zelle QR code for We Raise Hope"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-ink">Venmo</p>
                  <p className="mt-1">
                    <a href={site.venmoUrl} className="font-semibold text-brand" target="_blank" rel="noopener noreferrer">
                      {site.venmoHandle}
                    </a>
                    {" · "}
                    Note: {site.zelleMemo}
                  </p>
                  <div className="relative mt-3 h-36 w-36">
                    <Image
                      src="/images/from-wrh/wallets/venmo-qr.jpeg"
                      alt="Venmo QR code for We Raise Hope"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-ink">Check by mail</p>
                  <p className="mt-1">
                    Payable to {site.legalName}
                    <br />
                    New York, NY · Contact {site.email} for mailing details
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

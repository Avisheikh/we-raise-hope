import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { PartnerLinks } from "@/components/PartnerLinks";
import { TrustBar } from "@/components/TrustBar";
import { pageMetadata } from "@/lib/seo";
import { img, operatingModel, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "About Our U.S. Charity Mission",
  "New York 501(c)(3) with a Nepal-focused mission—healthcare, education, water, and opportunity with local partners.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden bg-forest text-white">
        <Image src={img.mission} alt="We Raise Hope mission in Nepal" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-forest/75" />
        <div className="container-narrow relative flex min-h-[48vh] flex-col justify-end pb-14 pt-24">
          <p className="eyebrow eyebrow-on-dark">About us</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A U.S. charity. A Nepal-focused mission.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            We Raise Hope Inc. is a U.S. charity with a Nepal-focused mission: fund locally led healthcare, education,
            clean water, and opportunity so rural communities can lead lasting change.
          </p>
        </div>
      </section>
      <TrustBar compact />
      <section className="section-pad">
        <div className="container-narrow space-y-6 text-ink-soft">
          <p className="text-lg text-ink">
            {site.legalName} is a New York–based {site.nonprofitStatus} public charity. We raise and steward resources in
            the United States to support locally led healthcare, education, clean water, and livelihood programs in rural
            Nepal—especially Sindhupalchowk District.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-ink">Our story</h2>
          <p>
            Our work grew from {site.founded} earthquake volunteer response into long-term, locally led partnership. Hope
            is not a handout. It is a foundation—built with communities, not for them.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-ink">How we are structured</h2>
          <p>
            Legally, we are {site.legalName} (EIN {site.ein}), a public charity under IRC {site.publicCharity}. Donors can
            deduct contributions under IRC Section 170 to the extent allowed by law.
          </p>
          <ol className="mt-6 space-y-4">
            {operatingModel.map((item, index) => (
              <li key={item.name} className="border border-line bg-cream p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Step {index + 1}</p>
                <p className="mt-1 font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm">{item.role}</p>
                {"lead" in item && item.lead ? (
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="font-semibold text-ink">{item.lead.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{item.lead.role}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                      Partners under {item.lead.name}
                    </p>
                    <ul className="mt-3 space-y-3">
                      {item.partners.map((partner) => (
                        <li key={partner.name}>
                          <p className="text-sm font-semibold text-ink">{partner.name}</p>
                          <p className="mt-0.5 text-sm text-ink-soft">{partner.role}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-6">
            Partners: <PartnerLinks separator=", " />.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-ink">Connecting Nepal and the U.S.</h2>
          <p>
            We connect American supporters—including the Nepali community in New York—with transparent giving that funds
            permanent local capacity: hospitals, classrooms, water systems, and opportunity.
          </p>
          <div className="flex flex-wrap gap-3 pt-6">
            <ButtonLink href="/donate">Donate</ButtonLink>
            <ButtonLink href="/team" variant="ghost">
              Meet leadership
            </ButtonLink>
            <ButtonLink href="/trust" variant="ghost">
              Transparency & financials
            </ButtonLink>
          </div>
        </div>
      </section>
      <DonateEmbedSection />
    </>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { PartnerLinks } from "@/components/PartnerLinks";
import { moneyFlow, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Where Your Money Goes",
  "Where your money goes: see how gifts to We Raise Hope Inc. move from U.S. donors to locally led healthcare, education, and community programs in rural Nepal.",
  "/where-money-goes",
);

export default function WhereMoneyGoesPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Stewardship</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Where your money goes
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Where your money goes is simple: {site.programPercent}% to programs. Here is the path from your gift to
            healthcare, education, and community work in rural Nepal—plainly.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <ol className="grid gap-6 lg:grid-cols-3">
            {moneyFlow.map((item) => (
              <li key={item.step} className="border border-line bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Step {item.step}</p>
                <h2 className="font-display mt-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 border border-line bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">Program investment</h2>
            <p className="mt-4 text-ink-soft">
              We publish that <strong className="text-ink">{site.programPercent}%</strong> of resources go to programs.
              Local delivery partners include <PartnerLinks separator=", " />.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate">Donate with confidence</ButtonLink>
              <ButtonLink href="/trust" variant="ghost">
                Financials & trust
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <DonateEmbedSection title="Give knowing where it goes" />
    </>
  );
}

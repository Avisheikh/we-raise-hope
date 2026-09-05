import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Ways to Give",
  "One-time gifts, monthly giving, Zelle, Venmo, events, and major gifts to We Raise Hope Inc.",
  "/ways-to-give",
);

const ways = [
  {
    title: "Give today",
    body: "One-time gift through Givebutter—card, Venmo, PayPal, and more.",
    href: "/donate",
    cta: "Donate now",
  },
  {
    title: "Give monthly",
    body: "Reliable monthly support keeps hospital care and classrooms running year-round.",
    href: "/donate#monthly",
    cta: "Start monthly giving",
  },
  {
    title: "Zelle",
    body: `Send to ${site.zelleHandle} with memo ${site.zelleMemo}.`,
    href: "/donate",
    cta: "See Zelle details",
  },
  {
    title: "Venmo",
    body: `${site.venmoHandle} · note ${site.zelleMemo}`,
    href: site.venmoUrl,
    cta: "Open Venmo",
    external: true,
  },
  {
    title: "Events & galas",
    body: "Join New York gatherings that fund surgical care and education in Nepal.",
    href: "/events",
    cta: "View events",
  },
  {
    title: "Major gifts & partnerships",
    body: "Foundations, workplaces, and major donors—let’s design lasting impact together.",
    href: `mailto:${site.email}`,
    cta: "Contact development",
    external: true,
  },
] as const;

export default function WaysToGivePage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Ways to give</p>
          <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Every path leads to rural Nepal
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Choose the giving method that fits you. All online gifts to {site.legalName} are received by a U.S.{" "}
            {site.nonprofitStatus} (EIN {site.ein}).
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <article key={way.title} className="flex flex-col border border-line bg-white p-7">
              <h2 className="font-display text-2xl font-semibold">{way.title}</h2>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{way.body}</p>
              <div className="mt-6">
                <ButtonLink href={way.href} external={"external" in way && way.external} variant="secondary">
                  {way.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateEmbedSection
        title="Or give right here"
        body="Complete a one-time or monthly gift without leaving this page—card, Venmo, PayPal, and more."
      />
    </>
  );
}

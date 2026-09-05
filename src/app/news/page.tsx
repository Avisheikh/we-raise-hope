import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { fieldUpdates, liveImpact } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Field Updates & News | 2026 Impact Reports",
  "Current 2026 field updates from We Raise Hope partners in rural Nepal—hospital patients, surgeries, schools, and IT education.",
  "/news",
);

export default function NewsPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Field updates</p>
          <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
            What happened—on the record
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Monthly and milestone reporting from partners. This domain is the source of truth for current results.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="border border-line bg-mist/50 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Latest · {liveImpact.period}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">{liveImpact.headline}</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {liveImpact.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="font-display text-3xl font-semibold text-forest">{metric.value}</dt>
                  <dd className="mt-1 text-sm font-semibold">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-12 space-y-6">
            {fieldUpdates.map((update) => (
              <li key={update.slug} className="border border-line bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  {new Date(update.date + "T12:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold">
                  <Link href={update.href} className="no-underline hover:text-brand">
                    {update.title}
                  </Link>
                </h2>
                <p className="mt-3 text-ink-soft">{update.summary}</p>
                <Link href={update.href} className="mt-4 inline-block text-sm font-bold text-brand hover:underline">
                  Read update →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/impact">Impact evidence room</ButtonLink>
            <ButtonLink href="/bodgaun-hospital" variant="ghost">
              Bodgaun Hospital
            </ButtonLink>
          </div>
        </div>
      </section>

      <DonateEmbedSection title="Turn this month’s results into next month’s care" />
    </>
  );
}

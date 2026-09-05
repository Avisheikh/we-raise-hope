import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { aprilImpact, impactStats, liveImpact, stories } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Our Impact in Nepal — Healthcare, Education & Infrastructure",
  "Our impact in Nepal: August 2026 hospital activity (550+ patients/month, major and minor surgeries), education metrics, lifetime results, and field stories from We Raise Hope partners.",
  "/impact",
);

export default function ImpactPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Evidence room</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Our impact in Nepal
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Our impact in Nepal spans healthcare, education, and infrastructure—numbers with period, definition, and
            reporting basis. Problem → action → result → proof.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">{liveImpact.period} snapshot</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{liveImpact.headline}</p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {liveImpact.metrics.map((metric) => (
              <div key={metric.label} className="border-l-4 border-brand bg-white pl-4 py-3">
                <dt className="font-display text-4xl font-semibold text-brand">{metric.value}</dt>
                <dd className="mt-2 text-sm font-semibold text-ink">{metric.label}</dd>
                <dd className="mt-1 text-xs text-ink-soft">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-mist/40">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">By program</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-line bg-white p-7">
              <h3 className="font-display text-2xl font-semibold">Healthcare</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>· 20,000+ people served in healthcare (lifetime)</li>
                <li>· 8K+ patients treated (lifetime)</li>
                <li>· 13+ major and 50+ minor surgeries (lifetime)</li>
                <li>· August 2026: 550+ patients/month · 13 major · 50+ minor surgeries</li>
              </ul>
              <ButtonLink href="/bodgaun-hospital" className="mt-6" variant="secondary">
                Bodgaun Hospital
              </ButtonLink>
            </article>
            <article className="border border-line bg-white p-7">
              <h3 className="font-display text-2xl font-semibold">Education & IT</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>· 350+ IT students currently learning</li>
                <li>· 88 children supported in our education program</li>
                <li>· April 2026 baseline: 298 IT students · 22 teachers trained · 85 kindergarten</li>
              </ul>
              <ButtonLink href="/programs#education" className="mt-6" variant="secondary">
                Education programs
              </ButtonLink>
            </article>
            <article className="border border-line bg-white p-7">
              <h3 className="font-display text-2xl font-semibold">Water, livelihoods & sports</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>· Clean water systems with local maintenance</li>
                <li>· Skills and entrepreneurship pathways</li>
                <li>· 70+ students in sports with soccer coach support</li>
              </ul>
              <ButtonLink href="/programs" className="mt-6" variant="secondary">
                All programs
              </ButtonLink>
            </article>
            <article className="border border-line bg-white p-7">
              <h3 className="font-display text-2xl font-semibold">April 2026 (prior month)</h3>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                {aprilImpact.map((item) => (
                  <div key={item.label}>
                    <dt className="font-display text-2xl font-semibold text-forest">{item.value}</dt>
                    <dd className="text-xs text-ink-soft">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">Lifetime proof points</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="border border-line bg-cream p-5">
                <dt className="font-display text-3xl font-semibold text-forest">{stat.value}</dt>
                <dd className="mt-2 text-sm font-semibold">{stat.label}</dd>
                <dd className="mt-2 text-xs text-ink-soft">
                  {stat.detail}
                  <br />
                  Period: {stat.period}
                  <br />
                  Source: {stat.source}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">Field stories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={story.image} alt={story.imageAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand">{story.place}</p>
                <h3 className="font-display mt-1 text-xl font-semibold">{story.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{story.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/news">Field updates</ButtonLink>
            <ButtonLink href="/donate" variant="ghost">
              Donate
            </ButtonLink>
          </div>
        </div>
      </section>

      <DonateEmbedSection title="Fund the next month of proven care" />
    </>
  );
}

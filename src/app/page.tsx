import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { PartnerLinks } from "@/components/PartnerLinks";
import { TrustBar } from "@/components/TrustBar";
import { pageMetadata } from "@/lib/seo";
import {
  img,
  liveImpact,
  operatingModel,
  programs,
  site,
  stories,
  waysToHelp,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Learn, Heal & Thrive in Rural Nepal",
  "U.S. 501(c)(3) helping children learn, heal, and thrive in rural Nepal through hospital care, schools, and opportunity.",
  "/",
);

const pathways = [
  {
    href: "/about",
    title: "Who we are",
    body: "A New York 501(c)(3) funding locally led programs in rural Nepal.",
  },
  {
    href: "/where-money-goes",
    title: "Where money goes",
    body: "Clear path from your gift to partners and programs on the ground.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* First viewport: hero + TrustBar (fits under sticky header on every screen) */}
      <div className="home-first-screen">
        <section className="relative flex min-h-0 flex-1 overflow-hidden bg-forest">
          <Image
            src={img.hero}
            alt="A hopeful child in rural Nepal, fully visible, looking toward the camera with a warm smile"
            fill
            priority
            quality={90}
            className="home-hero-image"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/55 to-forest/20 md:bg-gradient-to-r md:from-forest/92 md:via-forest/55 md:via-35% md:to-transparent md:to-58%"
            aria-hidden
          />
          <div className="container-page relative flex min-h-0 flex-1 items-end py-4 sm:py-6 md:items-center md:py-8 lg:py-10">
            <div className="home-hero-copy text-white">
              <p className="font-display home-hero-title fade-up font-semibold tracking-tight text-white">
                {site.name}
              </p>
              <h1 className="font-display home-hero-tagline fade-up-delay font-semibold leading-[1.15] tracking-tight text-white">
                {site.tagline}
              </h1>
              <p className="home-hero-body fade-up-delay-2 leading-relaxed text-white/90">
                When we give together, children in rural Nepal can learn, heal, and thrive—closer to home.
              </p>
              <div className="home-hero-actions fade-up-delay-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <ButtonLink
                  href="/donate"
                  variant="amber"
                  className="!px-6 !py-3 !text-sm !font-bold !uppercase !tracking-wide !text-ink"
                >
                  Give now
                </ButtonLink>
                <ButtonLink
                  href="/programs"
                  variant="ghostLight"
                  className="!px-6 !py-3 !text-sm"
                >
                  Our work
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <TrustBar compact />
      </div>

      {/* FA: Start here / utility pathways */}
      <section className="section-pad bg-cream" aria-labelledby="pathways">
        <div className="container-page">
          <p className="eyebrow">Start here</p>
          <h2 id="pathways" className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Understand the need. See the work. Make a difference.
          </h2>
          <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {pathways.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-line bg-white p-6 no-underline transition hover:border-brand/50"
              >
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
                <span className="mt-4 inline-block text-sm font-bold text-brand">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FA: Make a Difference */}
      <section className="section-pad bg-forest text-white" aria-labelledby="help-heading">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber">Make a difference</p>
          <h2 id="help-heading" className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            We can raise hope when we all work together.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {waysToHelp.map((item) => {
              const isGive = item.href.startsWith("/donate");
              return (
                <article key={item.title} className="flex h-full flex-col border border-white/15 bg-white/5 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">{item.body}</p>
                  <div className="mt-6">
                    <ButtonLink
                      href={item.href}
                      variant={isGive ? "primary" : "amber"}
                      className="!px-4 !py-2.5 !text-xs"
                    >
                      {item.cta}
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FA: Crisis / need with math */}
      <section className="section-pad" aria-labelledby="need-heading">
        <div className="container-page">
          <p className="eyebrow">The need</p>
          <h2 id="need-heading" className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Rural families should not travel days for care—or lose a future for lack of a classroom.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Right now, Bodgaun Primary Hospital treats{" "}
            <strong className="text-ink">550+ patients every month</strong>, with{" "}
            <strong className="text-ink">13 major</strong> and{" "}
            <strong className="text-ink">50+ minor surgeries</strong> in {liveImpact.period}. Surgery has
            arrived—help keep it running.
          </p>
          <ButtonLink href="/impact" className="mt-8" variant="secondary">
            See the impact
          </ButtonLink>
        </div>
      </section>

      {/* FA: What we do */}
      <section className="section-pad bg-mist/40" aria-labelledby="programs-home">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 id="programs-home" className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                We unite partners to raise hope that lasts.
              </h2>
            </div>
            <ButtonLink href="/programs" variant="ghost">
              Learn about our work
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article key={program.slug} className="border border-line bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className={
                      program.slug === "healthcare"
                        ? "object-cover object-[center_42%]"
                        : "object-cover"
                    }
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">{program.eyebrow}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold">{program.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{program.summary}</p>
                  <Link href={program.href} className="mt-4 inline-block text-sm font-bold text-brand hover:underline">
                    {program.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — alternating impact cards */}
      <section className="section-pad bg-cream" aria-labelledby="model-home">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 id="model-home" className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Local partnership. Permanent infrastructure. Clear roles.
          </h2>
          <p className="mt-5 max-w-3xl text-ink-soft">
            Partners: <PartnerLinks separator=", " />.
          </p>
          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {operatingModel.map((item, index) => {
              const tone = index % 2 === 0 ? "forest" : "deep";
              return (
                <li
                  key={item.name}
                  className={`flex flex-col rounded-sm p-7 text-white sm:p-8 ${
                    tone === "forest" ? "bg-forest" : "bg-chocolate"
                  }`}
                >
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand ring-[3px] ring-brand/40"
                    aria-hidden
                  >
                    {item.icon === "hope" ? (
                      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11a3 3 0 1 0-2.8-4M8 11a3 3 0 1 1 2.8-4M4.5 19a4.5 4.5 0 0 1 7.2-3.6M12.3 15.4A4.5 4.5 0 0 1 19.5 19"
                        />
                      </svg>
                    )}
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-amber">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">{item.role}</p>
                  {"lead" in item && item.lead ? (
                    <div className="mt-5 border-t border-white/25 pt-4">
                      <p className="font-semibold text-white">{item.lead.name}</p>
                      <p className="mt-1 text-sm text-white/85">{item.lead.role}</p>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-amber">
                        Partners under {item.lead.name}
                      </p>
                      <ul className="mt-3 space-y-3">
                        {item.partners.map((partner) => (
                          <li key={partner.name}>
                            <p className="text-sm font-semibold text-white">{partner.name}</p>
                            <p className="mt-0.5 text-sm text-white/80">{partner.role}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Link
                    href={item.cta.href}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-white no-underline hover:text-amber"
                  >
                    {item.cta.label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FA: Our Impact */}
      <section className="relative overflow-hidden section-pad text-white" aria-labelledby="impact-home">
        <Image
          src={img.collage}
          alt="Community collage showing children, families, and programs We Raise Hope supports in Nepal"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/88" />
        <div className="container-page relative">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber">Our impact · {liveImpact.period}</p>
          <h2 id="impact-home" className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Our resolve to raise hope is stronger than ever.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">{liveImpact.headline}</p>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {liveImpact.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-display text-4xl font-semibold text-amber sm:text-5xl">{metric.value}</dt>
                <dd className="mt-2 text-sm font-semibold">{metric.label}</dd>
                <dd className="mt-1 text-xs text-white/65">{metric.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-white/70">
            Lifetime: 20,000+ people served in healthcare · 8K+ patients treated · 13+ major / 50+ minor surgeries ·
            70+ students in sports
          </p>
          <div className="mt-8">
            <ButtonLink href="/impact" variant="amber">
              Full impact evidence
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Field stories */}
      <section className="section-pad bg-mist/40" aria-labelledby="stories-heading">
        <div className="container-page">
          <p className="eyebrow">Field stories</p>
          <h2 id="stories-heading" className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            Proof on the ground
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={story.image} alt={story.imageAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand">{story.place}</p>
                <h3 className="font-display mt-2 text-xl font-semibold">{story.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{story.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/news" variant="ghost">
              2026 field updates
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FA: Partners */}
      <section className="section-pad bg-white" aria-labelledby="partners-home">
        <div className="container-page text-center">
          <p className="eyebrow">Partners</p>
          <h2 id="partners-home" className="font-display mt-3 text-3xl font-semibold">
            We raise hope when we work together
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {site.partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-line bg-mist px-6 py-4 text-sm font-semibold text-forest no-underline transition hover:border-brand hover:bg-white hover:text-brand"
                >
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/get-involved" variant="ghost">
              Partner with us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Transparency strip */}
      <section className="border-y border-line bg-cream py-10" aria-labelledby="transparency-home">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="transparency-home" className="font-display text-2xl font-semibold">
              Verify before you give
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              {site.legalName} · U.S. {site.nonprofitStatus} · EIN {site.ein} · {site.programPercent}% to programs
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/trust" variant="secondary">
              Transparency & financials
            </ButtonLink>
            <ButtonLink href="/news" variant="ghost">
              Field updates
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FA climax: Give today + math + form */}
      <DonateEmbedSection
        eyebrow="Give today"
        title={`${site.programPercent}% goes to programs`}
        body={`Your gift to ${site.legalName} is tax-deductible to the extent allowed by law. Primary online giving is Givebutter on this site—sustain surgical care, classrooms, clean water, and opportunity.`}
      />

      {/* FA: Join us strip */}
      <section className="relative overflow-hidden py-20 text-white">
        <Image
          src={img.infra}
          alt="Infrastructure and community facilities supported by We Raise Hope in rural Nepal"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/85" />
        <div className="container-page relative text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Join us to raise hope in rural Nepal
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/donate" variant="amber">
              Donate
            </ButtonLink>
            <ButtonLink href="/get-involved" variant="ghostLight">
              Get involved
            </ButtonLink>
            <ButtonLink href="/ways-to-give" variant="ghostLight">
              Ways to give
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghostLight">
              Contact
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

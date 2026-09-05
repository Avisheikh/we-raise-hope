import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { PartnerLinks } from "@/components/PartnerLinks";
import { TrustBar } from "@/components/TrustBar";
import { pageMetadata } from "@/lib/seo";
import {
  bodgaun,
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
    href: "/bodgaun-hospital",
    title: "See the hospital",
    body: "Bodgaun Primary Hospital—surgical care is operating. Help keep it running.",
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
      {/* Full-bleed hero: face stays clear on the left; copy sits in a soft right fade */}
      <section className="relative overflow-hidden bg-cream">
        <div className="relative h-[52vh] w-full md:absolute md:inset-0 md:h-auto md:min-h-[min(88vh,820px)]">
          <Image
            src={img.hero}
            alt="Two hopeful children looking toward the camera at a community center in rural Nepal"
            fill
            priority
            className="object-cover object-[28%_38%] md:object-[18%_40%]"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-transparent from-30% via-cream/35 via-55% to-cream to-72% md:block"
            aria-hidden
          />
        </div>
        <div className="container-page relative flex md:min-h-[min(88vh,820px)] md:items-center md:justify-end">
          <div className="w-full max-w-md py-10 md:py-16 md:pl-6">
            <p className="font-display fade-up text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
              {site.name}
            </p>
            <h1 className="font-display fade-up-delay mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              {site.tagline}
            </h1>
            <p className="fade-up-delay-2 mt-5 max-w-md text-base text-ink-soft sm:text-lg">
              Fund hospital care, classrooms, and opportunity in rural Nepal—U.S. {site.nonprofitStatus}, EIN{" "}
              {site.ein}.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate" variant="primary" className="!px-7 !py-3.5 !text-base">
                Donate now
              </ButtonLink>
              <ButtonLink href="/programs" variant="ghost">
                Our work
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-ink-soft">
              Tax-deductible · {site.programPercent}% to programs · Givebutter on this site
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* FA: Start here / utility pathways */}
      <section className="section-pad bg-cream" aria-labelledby="pathways">
        <div className="container-page">
          <p className="eyebrow">Start here</p>
          <h2 id="pathways" className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Understand the need. See the work. Make a difference.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
          <h2 id="help-heading" className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            We can raise hope when we all work together.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {waysToHelp.map((item) => {
              const isGive = item.href.startsWith("/donate");
              return (
                <article key={item.title} className="flex flex-col border border-white/15 bg-white/5 p-6">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-white/75">{item.body}</p>
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
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The need</p>
            <h2 id="need-heading" className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Rural families should not travel days for care—or lose a future for lack of a classroom.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
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
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img.where}
              alt="Rural Nepal communities We Raise Hope supports"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
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
                    className="object-cover"
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

      {/* Hospital spotlight — audit flagship */}
      <section className="section-pad bg-white" aria-labelledby="hospital-home">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img.hospital}
              alt="Bodgaun Primary Hospital and medical care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">The hospital</p>
            <h2 id="hospital-home" className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Bodgaun now has local surgical care
            </h2>
            <p className="mt-5 text-lg text-ink-soft">{bodgaun.status}</p>
            <ul className="mt-6 space-y-2 text-sm text-ink-soft">
              <li>· {bodgaun.beds}</li>
              <li>· {bodgaun.population}</li>
              <li>· {bodgaun.location}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/bodgaun-hospital">Hospital details</ButtonLink>
              <ButtonLink href="/donate" variant="secondary">
                Help keep it running
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — entity clarity */}
      <section className="section-pad bg-cream" aria-labelledby="model-home">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 id="model-home" className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Local partnership. Permanent infrastructure. Clear roles.
          </h2>
          <p className="mt-5 max-w-3xl text-ink-soft">
            Partners: <PartnerLinks separator=", " />.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {operatingModel.map((item, index) => (
              <li key={item.name} className="border border-line bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Step {index + 1}</p>
                <h3 className="font-display mt-2 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.role}</p>
              </li>
            ))}
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

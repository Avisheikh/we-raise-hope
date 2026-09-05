import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { img, site, waysToHelp } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Get Involved",
  "Donate, volunteer, partner, or join We Raise Hope events in New York and Nepal.",
  "/get-involved",
);

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative min-h-[42vh] overflow-hidden bg-forest text-white">
        <Image src={img.engage} alt="Get involved with We Raise Hope" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="container-page relative flex min-h-[42vh] flex-col justify-end pb-12 pt-24">
          <p className="eyebrow eyebrow-on-dark">Take action</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Get involved
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Donate, give monthly, volunteer, partner medically, or join an evening that turns compassion into sustained
            funding.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {waysToHelp.map((item) => (
            <article key={item.title} className="border border-line bg-white p-8">
              <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.body}</p>
              <div className="mt-6">
                <ButtonLink href={item.href}>
                  {item.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-12 border border-line bg-mist/50 p-8">
          <h2 className="font-display text-2xl font-semibold">Medical & community volunteering</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Clinical and community volunteers help multiply what local partners already lead at Bodgaun Primary Hospital
            and in schools. Email {site.email} to explore fit, timing, and requirements.
          </p>
          <ButtonLink href={`mailto:${site.email}`} className="mt-6" external>
            Email us about volunteering
          </ButtonLink>
        </div>
      </section>
      <DonateEmbedSection title="Start with a gift" />
    </>
  );
}

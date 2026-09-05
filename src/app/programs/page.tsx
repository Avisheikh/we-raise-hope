import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { programs } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Our Work | Healthcare, Education, Water & Livelihoods",
  "Programs We Raise Hope supports in rural Nepal: Bodgaun Primary Hospital surgical care, education and IT schools, clean water, and livelihoods—led locally with Jay Nepal NGO.",
  "/programs",
);

export default function ProgramsPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow eyebrow-on-dark">Our work</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for permanence, led locally
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We invest in systems communities can run—surgical capacity, classrooms, water, and livelihoods—so progress
            does not leave when a campaign ends.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page space-y-14">
          {programs.map((program, index) => (
            <article
              key={program.slug}
              id={program.slug}
              className="grid items-center gap-8 border border-line bg-white lg:grid-cols-2 lg:gap-12"
            >
              <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">{program.eyebrow}</p>
                <h2 className="font-display mt-2 text-3xl font-semibold">{program.title}</h2>
                <p className="mt-4 text-lg text-ink">{program.summary}</p>
                <p className="mt-4 text-ink-soft">{program.body}</p>
                <ButtonLink href={program.href} className="mt-8">
                  {program.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateEmbedSection title="Fund the next mile of care" />
    </>
  );
}

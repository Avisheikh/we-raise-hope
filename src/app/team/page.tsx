import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { board, fieldTeam } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Leadership",
  "Meet the board and partners behind We Raise Hope Inc.",
  "/team",
);

export default function TeamPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">People</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Who is accountable
          </h1>
          <p className="mt-6 text-lg text-white/80">
            U.S. donors give to people they can name. Meet our board and field partners.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold">Board of Directors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((person) => (
              <article key={person.name} className="border border-line bg-white">
                <div className="relative aspect-square bg-mist">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top" sizes="(max-width:768px) 50vw, 25vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{person.role}</p>
                  <p className="mt-3 text-sm text-ink-soft">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <h2 className="font-display mt-16 text-2xl font-semibold">Field partners</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {fieldTeam.map((person) => (
              <article key={person.name} className="border border-line bg-white">
                <div className="relative aspect-square bg-mist">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top" sizes="(max-width:768px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact" variant="ghost">
              Contact leadership
            </ButtonLink>
          </div>
        </div>
      </section>
      <DonateEmbedSection />
    </>
  );
}

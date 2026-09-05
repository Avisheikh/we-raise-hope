import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contact",
  `Contact ${site.legalName}: ${site.email} · ${site.phone}`,
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Contact</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            We are easy to reach
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Questions about programs, partnerships, volunteering, or major gifts—start here.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="border border-line bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">Email & phone</h2>
            <a href={`mailto:${site.email}`} className="mt-4 block text-lg font-semibold text-brand">
              {site.email}
            </a>
            <a href={`tel:${site.phoneTel}`} className="mt-2 block text-lg font-semibold text-brand">
              {site.phone}
            </a>
            <h2 className="font-display mt-10 text-2xl font-semibold">U.S. presence</h2>
            <p className="mt-3 text-ink-soft">
              {site.legalName}
              <br />
              {site.address.city}, {site.address.region}
              <br />
              {site.address.country}
              <br />
              EIN {site.ein}
            </p>
          </div>
          <div className="border border-line bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">Social & events</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
            <div className="mt-10">
              <ButtonLink href="/donate">Prefer to give?</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <DonateEmbedSection title="Prefer to give from here?" />
    </>
  );
}

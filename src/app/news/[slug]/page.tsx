import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { fieldUpdates } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fieldUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = fieldUpdates.find((item) => item.slug === slug);
  if (!update) return {};
  return pageMetadata(update.title, update.summary, `/news/${update.slug}`, { ogType: "article" });
}

export default async function NewsUpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = fieldUpdates.find((item) => item.slug === slug);
  if (!update) notFound();

  return (
    <>
      <article className="section-pad">
        <div className="container-narrow">
          <p className="text-sm font-semibold text-brand">
            <Link href="/news" className="hover:underline">
              ← Field updates
            </Link>
          </p>
          <p className="eyebrow mt-8">
            {new Date(update.date + "T12:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{update.title}</h1>
          <p className="mt-8 text-lg text-ink-soft">{update.body}</p>
          <p className="mt-6 text-sm text-ink-soft">
            Source basis: partner field reporting shared with We Raise Hope Inc. Figures include period labels on the
            Impact and Hospital pages.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/donate">Donate</ButtonLink>
            <ButtonLink href="/impact" variant="ghost">
              Impact evidence
            </ButtonLink>
            <ButtonLink href="/bodgaun-hospital" variant="ghost">
              Bodgaun Hospital
            </ButtonLink>
          </div>
        </div>
      </article>
      <DonateEmbedSection />
    </>
  );
}

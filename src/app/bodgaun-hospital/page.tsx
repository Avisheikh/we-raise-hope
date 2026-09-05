import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { bodgaun, img, liveImpact, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Bodgaun Primary Hospital | Rural Healthcare in Nepal",
  "Bodgaun Primary Hospital in Sindhupalchowk provides emergency care, diagnostics, and an operating surgical room. We Raise Hope Inc. helps fund this locally led facility.",
  "/bodgaun-hospital",
);

export default function BodgaunHospitalPage() {
  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow eyebrow-on-dark">Flagship facility</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{bodgaun.name}</h1>
          <p className="mt-6 text-lg text-white/80">{bodgaun.status}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/donate" variant="amber">
              Help keep it running
            </ButtonLink>
            <ButtonLink href={bodgaun.externalUrl} variant="ghostLight" external>
              Hospital site
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={img.hospital} alt="Bodgaun Primary Hospital" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">Facility facts</h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              <li>
                <strong className="text-ink">Location:</strong> {bodgaun.location}
              </li>
              <li>
                <strong className="text-ink">Scale:</strong> {bodgaun.beds}
              </li>
              <li>
                <strong className="text-ink">Catchment:</strong> {bodgaun.population}
              </li>
            </ul>
            <h3 className="font-display mt-10 text-2xl font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {bodgaun.services.map((service) => (
                <li key={service}>· {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist/40">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">Latest clinical activity</h2>
          <p className="mt-3 text-ink-soft">
            {liveImpact.period} field reporting from partners at Bodgaun Primary Hospital.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveImpact.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="border border-line bg-white p-6">
                <dt className="font-display text-4xl font-semibold text-brand">{metric.value}</dt>
                <dd className="mt-2 text-sm font-semibold text-ink">{metric.label}</dd>
                <dd className="mt-1 text-xs text-ink-soft">{metric.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-sm text-ink-soft">{bodgaun.partnersNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/news">Field updates</ButtonLink>
            <ButtonLink href="/impact" variant="ghost">
              Full impact evidence
            </ButtonLink>
            <ButtonLink href="/trust" variant="ghost">
              Transparency
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Who does what</h2>
          <div className="mt-6 space-y-4 text-ink-soft">
            <p>
              <strong className="text-ink">{site.legalName}</strong> is the U.S. {site.nonprofitStatus} that raises and
              stewards charitable funds (EIN {site.ein}).
            </p>
            <p>
              <strong className="text-ink">Jay Nepal NGO</strong> is the Nepal operating partner delivering hospital and
              community programs.
            </p>
            <p>
              <strong className="text-ink">Indrawati Rural Municipality</strong> is the local government partner for
              public systems and community ownership.
            </p>
            <p>
              <strong className="text-ink">Bodgaun Primary Hospital</strong> is the healthcare facility serving rural
              families in Sindhupalchowk.
            </p>
          </div>
        </div>
      </section>

      <DonateEmbedSection
        title="Sustain Bodgaun’s surgical care"
        body="Staff, supplies, equipment, and maintenance—not a theoretical operating room. Surgery is already happening."
      />
    </>
  );
}

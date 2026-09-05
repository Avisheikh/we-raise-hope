import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GivebutterForm } from "@/components/GivebutterForm";
import { PartnerLinks } from "@/components/PartnerLinks";
import { pageMetadata } from "@/lib/seo";
import { img, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Donate Today to Rural Nepal",
  `Tax-deductible gifts to ${site.legalName} (EIN ${site.ein}) fund Bodgaun Hospital, schools, and opportunity.`,
  "/donate",
);

export default function DonatePage() {
  return (
    <>
      {/* Feeding America–style focused give surface: emotion + form */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0">
          <Image
            src={img.donateHero}
            alt="A hopeful child in rural Nepal whose community We Raise Hope supports"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/78 to-forest/45" />
        </div>

        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[1fr_minmax(320px,420px)] lg:items-center lg:py-16">
          <div className="max-w-xl">
            <p className="font-display text-2xl font-semibold tracking-tight text-amber sm:text-3xl">
              {site.name}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Help a child learn, heal, and thrive
            </h1>
            <p className="mt-5 text-lg text-white/85">
              Your gift sustains surgical care at Bodgaun Primary Hospital, classrooms, clean water, and opportunity in
              rural Nepal. Tax-deductible. {site.programPercent}% to programs.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
              <li className="border-l-2 border-amber pl-3">Surgery operating in Bodgaun</li>
              <li className="border-l-2 border-amber pl-3">88 children in education support</li>
              <li className="border-l-2 border-amber pl-3">550+ patients served monthly</li>
              <li className="border-l-2 border-amber pl-3">U.S. {site.nonprofitStatus} · EIN {site.ein}</li>
            </ul>
          </div>

          <div id="give" className="scroll-mt-24 rounded-sm bg-cream p-4 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] sm:p-5">
            <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-brand">Give today</p>
            <p className="mt-2 text-center font-display text-2xl font-semibold text-ink">Make your gift</p>
            <p className="mx-auto mt-2 max-w-sm text-center text-sm text-ink-soft">
              One-time or monthly. Secure checkout via Givebutter.
            </p>
            <div className="mt-4" id="monthly">
              <GivebutterForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-4" aria-label="Trust signals">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">{site.legalName}</span>
            {" · "}
            U.S. {site.nonprofitStatus}
            {" · "}
            EIN {site.ein}
            {" · "}
            {site.programPercent}% to programs
          </p>
          <p className="text-sm text-ink-soft">
            <Link href="/trust" className="font-semibold text-brand hover:underline">
              Verify our status
            </Link>
            {site.candidUrl ? (
              <>
                {" · "}
                <a
                  href={site.candidUrl}
                  className="font-semibold text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Candid profile
                </a>
              </>
            ) : null}
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="border border-line bg-white p-7">
            <h2 className="font-display text-2xl font-semibold">Because of you</h2>
            <p className="mt-3 text-ink-soft">
              Families reach care closer to home. Children stay in school. Local partners lead the work—Jay Nepal NGO,
              Indrawati Rural Municipality, and Bodgaun Primary Hospital. Your gift keeps that progress running.
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Partners: <PartnerLinks />
            </p>
            <div className="mt-6">
              <a href="#give" className="font-semibold text-brand hover:underline">
                ↑ Back to donation form
              </a>
            </div>
          </article>

          <article className="border border-line bg-white p-7">
            <h2 className="font-display text-2xl font-semibold">Other ways to give</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-ink">Zelle</p>
                <p className="mt-1 text-sm text-ink-soft">
                  Send to <span className="font-semibold text-ink">{site.zelleHandle}</span>
                  <br />
                  Memo: <span className="font-semibold text-ink">{site.zelleMemo}</span>
                </p>
                <div className="relative mt-3 h-32 w-32">
                  <Image
                    src="/images/from-wrh/wallets/zelle-qr.jpeg"
                    alt="Zelle QR code for We Raise Hope"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Venmo</p>
                <p className="mt-1 text-sm text-ink-soft">
                  <a href={site.venmoUrl} className="font-semibold text-brand" target="_blank" rel="noopener noreferrer">
                    {site.venmoHandle}
                  </a>
                  {" · "}
                  Note: {site.zelleMemo}
                </p>
                <div className="relative mt-3 h-32 w-32">
                  <Image
                    src="/images/from-wrh/wallets/venmo-qr.jpeg"
                    alt="Venmo QR code for We Raise Hope"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Check by mail: payable to {site.legalName}. Contact {site.email} for mailing details.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

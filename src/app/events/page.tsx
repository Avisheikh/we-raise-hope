import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbedSection } from "@/components/DonateEmbedSection";
import { pageMetadata } from "@/lib/seo";
import { eventPillars, events, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Events | Galas & Gatherings in New York",
  "Join We Raise Hope events in New York—including the Metropolitan Club gala—to support healthcare, education, and opportunity in rural Nepal.",
  "/events",
);

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "upcoming");
  const past = events.filter((event) => event.status === "past");

  return (
    <>
      <section className="section-pad bg-forest text-white">
        <div className="container-narrow">
          <p className="eyebrow eyebrow-on-dark">Events</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Gather with purpose. Help hope become lasting progress.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We Raise Hope connects supporters with locally shaped work in healthcare, education, clean water, skills,
            and livelihoods. Our events bring people together to understand the mission and help sustain practical
            solutions in rural Nepal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#upcoming" variant="amber">
              Explore upcoming events
            </ButtonLink>
            <ButtonLink href="/about" variant="ghostLight">
              Understand our approach
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="why-events">
        <div className="container-page">
          <p className="eyebrow">Why we exist</p>
          <h2 id="why-events" className="font-display mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Communities deserve more than short-term relief.
          </h2>
          <p className="mt-5 max-w-3xl text-ink-soft">
            The mission grew from volunteer earthquake response into long-term work that helps rural communities
            strengthen the services and opportunities they rely on—with local ownership, not outside imposition.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eventPillars.map((pillar, index) => (
              <article key={pillar.title} className="border border-line bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">0{index + 1}</p>
                <h3 className="font-display mt-2 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="upcoming" className="section-pad bg-mist/40 scroll-mt-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Calendar</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">Upcoming events</h2>
            </div>
            <p className="text-sm font-semibold text-ink-soft">{upcoming.length} listed</p>
          </div>

          {upcoming.length === 0 ? (
            <p className="mt-8 border border-line bg-white p-8 text-ink-soft">No upcoming events yet. Check back soon.</p>
          ) : (
            <ul className="mt-10 space-y-8">
              {upcoming.map((event) => (
                <li key={event.id} className="grid gap-6 border border-line bg-white lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[280px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col p-7 lg:p-9">
                    <p className="inline-flex w-fit rounded-sm bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Upcoming
                    </p>
                    <h3 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">{event.title}</h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand">
                      {formatEventDate(event.date)} · {event.time}
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">{event.location}</p>
                    <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                      {event.description.map((line) => (
                        <li key={line}>· {line}</li>
                      ))}
                    </ul>
                    {event.ticketPrice ? (
                      <p className="mt-5 text-lg font-semibold text-ink">
                        ${event.ticketPrice}
                        <span className="ml-2 text-sm font-medium text-ink-soft">per guest</span>
                      </p>
                    ) : null}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonLink href="#tickets">{event.cta ?? "Get tickets"}</ButtonLink>
                      <ButtonLink href="/donate" variant="ghost">
                        Donate instead
                      </ButtonLink>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section id="tickets" className="section-pad bg-white scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Tickets</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">Reserve your gala tickets</h2>
            <p className="mt-4 text-ink-soft">
              Metropolitan Club gala tickets are $400 per guest. Pay by Givebutter (card), Zelle, or Venmo. In your
              payment note, include guest names. Only the portion of a ticket exceeding the fair market value of goods
              and services received may be tax-deductible—retain your acknowledgement and consult a tax adviser.
            </p>
            <ol className="mt-6 space-y-3 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">1. Before giving</strong> — Review event purpose, amount, and ticket notice.
              </li>
              <li>
                <strong className="text-ink">2. During payment</strong> — Use Givebutter below, or Zelle/Venmo with the
                handles shown.
              </li>
              <li>
                <strong className="text-ink">3. After giving</strong> — Keep your payment record; email{" "}
                {site.email} if you need acknowledgement.
              </li>
            </ol>
          </div>
          <div className="border border-line bg-cream p-7">
            <h3 className="font-display text-xl font-semibold">Payment options</h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">Givebutter (card)</strong>
                <br />
                Preferred for receipts. Complete payment on our donate form, then email guest names to {site.email}.
              </li>
              <li>
                <strong className="text-ink">Zelle</strong>
                <br />
                Send to <span className="font-semibold text-ink">{site.zelleHandle}</span>
                <br />
                Memo: GALA TICKETS + guest names
              </li>
              <li>
                <strong className="text-ink">Venmo</strong>
                <br />
                <a href={site.venmoUrl} className="font-semibold text-brand" target="_blank" rel="noopener noreferrer">
                  {site.venmoHandle}
                </a>
                <br />
                Note: GALA TICKETS + guest names
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="relative h-32 w-32">
                <Image
                  src="/images/from-wrh/wallets/zelle-qr.jpeg"
                  alt="Zelle QR code"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-32 w-32">
                <Image
                  src="/images/from-wrh/wallets/venmo-qr.jpeg"
                  alt="Venmo QR code"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <ButtonLink href="/donate" className="mt-6">
              Pay with Givebutter
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-labelledby="donor-trust">
        <div className="container-page">
          <p className="eyebrow">Donor trust</p>
          <h2 id="donor-trust" className="font-display mt-3 max-w-3xl text-3xl font-semibold">
            Know what happens before and after you give.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Registered nonprofit",
                body: `${site.legalName} is a U.S. ${site.nonprofitStatus} (EIN ${site.ein}). Eligible charitable gifts are deductible according to applicable law.`,
              },
              {
                title: "Community-led decisions",
                body: "Projects begin with local consultation. Community members help review needs, budgets, implementation, and outcomes.",
              },
              {
                title: "Transparent payment choices",
                body: "Zelle and Venmo details are shown before payment. Card gifts go through Givebutter—we never ask for card or bank credentials by email.",
              },
              {
                title: "Questions are welcome",
                body: `Contact ${site.email} or ${site.phone} before or after giving.`,
              },
            ].map((item) => (
              <article key={item.title} className="border border-line bg-white p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-ink-soft">
            Event proceeds help sustain connected programs. Restricted campaign gifts are directed to their stated
            purpose. Contact us for accessibility needs, payment assistance, or an alternative way to receive information.
          </p>
          <div className="mt-6">
            <ButtonLink href="/trust" variant="ghost">
              Transparency & financials
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold">Previous events</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {past.map((event) => (
              <li key={event.id} className="overflow-hidden border border-line bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">Past</p>
                  <h3 className="font-display mt-2 text-2xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand">
                    {formatEventDate(event.date)} · {event.time}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{event.location}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                    {event.description.map((line) => (
                      <li key={line}>· {line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DonateEmbedSection
        eyebrow="Support beyond tickets"
        title="Give directly to programs"
        body="If you cannot attend, your gift still sustains Bodgaun Hospital, classrooms, water, and opportunity."
      />
    </>
  );
}

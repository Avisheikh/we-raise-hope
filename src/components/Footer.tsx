import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const socialLinks = [
  { href: site.social.facebook, label: "Facebook", icon: "facebook" as const },
  { href: site.social.instagram, label: "Instagram", icon: "instagram" as const },
  { href: site.social.linkedin, label: "LinkedIn", icon: "linkedin" as const },
  { href: site.social.youtube, label: "YouTube", icon: "youtube" as const },
];

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
  const common = "h-3.5 w-3.5 fill-current";
  switch (type) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6.2-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M6.5 9H3.7v11h2.8V9ZM5.1 3.5A1.7 1.7 0 1 0 5.1 7a1.7 1.7 0 0 0 0-3.5ZM20.3 13.3c0-2.7-1.5-4.5-4-4.5-1.3 0-2.3.6-2.8 1.4h-.1V9H10.8v11h2.8v-5.6c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.6 1.8 3V20h2.8v-6.7Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M22 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.3 5.3 12 5.3 12 5.3s-6.3 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7ZM10 15.2V9.2l5.2 3-5.2 3Z" />
        </svg>
      );
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest text-white">
      <div className="container-page py-8 md:py-10">
        {/* Top: left links · right Charity Navigator badge (FA layout) */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-sm font-bold text-white">Contact</p>
              <div className="mt-3 space-y-1 text-sm text-white">
                <p>
                  {site.address.city}, {site.address.region}
                </p>
                <p>
                  <a href={`tel:${site.phoneTel}`} className="text-white no-underline hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="text-white no-underline hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <Link href="/donate" className="text-sm font-bold text-white no-underline hover:underline">
                Donate
              </Link>
            </div>

            <div>
              <Link href="/trust" className="text-sm font-bold text-white no-underline hover:underline">
                Transparency
              </Link>
            </div>
          </div>

          <Link
            href="/trust"
            className="shrink-0 self-start no-underline"
            aria-label="Charity Navigator — view transparency"
          >
            <Image
              src="/images/badges/charity-navigator-4star.png"
              alt="Charity Navigator Four-Star Charity"
              width={112}
              height={112}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
          </Link>
        </div>

        {/* Bottom brand bar */}
        <div className="mt-8 border-t border-white/25 pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-md">
              <Link href="/" className="inline-block no-underline">
                <Image
                  src="/logo.png"
                  alt={site.name}
                  width={300}
                  height={99}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="mt-3 text-xs leading-relaxed text-white">
                Copyright © {year} {site.legalName}. All Rights Reserved.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white">
                {site.legalName} is a U.S. {site.nonprofitStatus} nonprofit recognized by the IRS. Tax ID: {site.ein}.
              </p>
            </div>

            <div className="sm:text-right">
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white text-white no-underline transition hover:bg-white/10"
                  >
                    <SocialIcon type={item.icon} />
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs text-white">
                <Link href="/privacy" className="text-white no-underline hover:underline">
                  Privacy Policy
                </Link>
                <span className="mx-1.5 text-white/50">/</span>
                <Link href="/terms" className="text-white no-underline hover:underline">
                  Terms
                </Link>
              </p>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/80 sm:ml-auto">
                Photos feature real community members and program work unless noted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

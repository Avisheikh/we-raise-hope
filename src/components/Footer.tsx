import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest text-white">
      <div className="container-page section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="We Raise Hope logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full bg-white object-contain p-1"
              />
              <p className="font-display text-2xl font-semibold">{site.name}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/75">{site.description}</p>
            <p className="mt-5 text-sm text-white/90">
              {site.legalName}
              <br />
              EIN / Tax ID: {site.ein}
              <br />
              U.S. {site.nonprofitStatus} public charity
              <br />
              <a href={`tel:${site.phoneTel}`} className="no-underline hover:underline">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="no-underline hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 no-underline hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Give</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link href="/donate" className="no-underline hover:text-white">
                  Donate today
                </Link>
              </li>
              <li>
                <Link href="/ways-to-give" className="no-underline hover:text-white">
                  Ways to give
                </Link>
              </li>
              <li>
                <Link href="/where-money-goes" className="no-underline hover:text-white">
                  Where money goes
                </Link>
              </li>
              <li>
                <Link href="/news" className="no-underline hover:text-white">
                  Field updates
                </Link>
              </li>
              <li>
                <Link href="/bodgaun-hospital" className="no-underline hover:text-white">
                  Bodgaun Hospital
                </Link>
              </li>
              <li>
                <Link href="/trust" className="no-underline hover:text-white">
                  Transparency & financials
                </Link>
              </li>
              <li>
                <a
                  href={site.candidUrl}
                  className="no-underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Candid profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Connect</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={site.social.facebook} className="no-underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.social.instagram} className="no-underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.linkedin} className="no-underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.social.youtube} className="no-underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href={site.social.tiktok} className="no-underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <Link href="/events" className="no-underline hover:text-white">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Contributions are tax-deductible to the
            extent allowed by law. Photos feature real community members and program work unless noted.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="no-underline hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="no-underline hover:text-white">
              Terms
            </Link>
            <Link href="/team" className="no-underline hover:text-white">
              Leadership
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

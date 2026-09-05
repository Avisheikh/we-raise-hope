"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest text-white">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide text-white/85">
            U.S. {site.nonprofitStatus} · EIN {site.ein} · {site.programPercent}% to programs
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-white/85 no-underline hover:text-white sm:inline"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-line/80 bg-cream/95 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 no-underline"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-tight text-forest group-hover:text-brand">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-soft no-underline transition-colors hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href="/donate" className="!px-4 !py-2.5">
              Donate
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ButtonLink href="/donate" className="!px-3.5 !py-2 text-xs">
              Donate
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-4 flex-col gap-1" aria-hidden>
                <span className={`h-0.5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className="border-t border-line bg-cream px-4 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-sm px-3 py-2.5 text-sm font-semibold text-ink no-underline hover:bg-mist"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>

      <div className="grid grid-cols-2 lg:hidden">
        <Link
          href="/donate"
          className="flex items-center justify-center bg-brand py-2.5 text-sm font-bold text-white no-underline"
        >
          Donate
        </Link>
        <Link
          href="/programs"
          className="flex items-center justify-center bg-mist-strong py-2.5 text-sm font-bold text-forest no-underline"
        >
          Our Work
        </Link>
      </div>
    </header>
  );
}

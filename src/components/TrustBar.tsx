import Link from "next/link";
import { site } from "@/lib/site";

export function TrustBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`shrink-0 border-y border-line bg-white ${compact ? "py-2 sm:py-2.5" : "py-4"}`}
      role="region"
      aria-label="Nonprofit legal identity"
    >
      <div
        className={`container-page flex text-center sm:text-left ${
          compact
            ? "flex-col gap-0.5 md:flex-row md:items-center md:justify-between md:gap-4"
            : "flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
        }`}
      >
        <p className={`text-ink-soft ${compact ? "text-[0.7rem] leading-snug sm:text-xs md:text-sm" : "text-sm"}`}>
          <span className="font-semibold text-ink">{site.legalName}</span>
          {" · "}
          U.S. {site.nonprofitStatus}
          {" · "}
          EIN {site.ein}
          {" · "}
          {site.programPercent}% to programs
        </p>
        <p className={`text-ink-soft ${compact ? "text-[0.7rem] leading-snug sm:text-xs md:text-sm" : "text-sm"}`}>
          <span className={compact ? "hidden lg:inline" : undefined}>
            Tax-deductible to the extent allowed by law.{" "}
          </span>
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
    </div>
  );
}

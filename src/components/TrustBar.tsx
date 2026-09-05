import Link from "next/link";
import { site } from "@/lib/site";

export function TrustBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`shrink-0 border-y border-line bg-white ${compact ? "py-2.5 sm:py-3" : "py-4"}`}
      role="region"
      aria-label="Nonprofit legal identity"
    >
      <div className="container-page flex flex-col gap-1.5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:text-left">
        <p className={`text-ink-soft ${compact ? "text-xs sm:text-sm" : "text-sm"}`}>
          <span className="font-semibold text-ink">{site.legalName}</span>
          {" · "}
          U.S. {site.nonprofitStatus}
          {" · "}
          EIN {site.ein}
          {" · "}
          {site.programPercent}% to programs
        </p>
        <p className={`text-ink-soft ${compact ? "text-xs sm:text-sm" : "text-sm"}`}>
          Tax-deductible to the extent allowed by law.{" "}
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

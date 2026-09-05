import Link from "next/link";
import { site } from "@/lib/site";

export function TrustBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`border-y border-line bg-white ${compact ? "py-3" : "py-4"}`}
      role="region"
      aria-label="Nonprofit legal identity"
    >
      <div className="container-page flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
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

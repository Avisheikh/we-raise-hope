import Script from "next/script";
import { site } from "@/lib/site";

/** Load Givebutter once site-wide (required for widgets to render). */
export function GivebutterScript() {
  const acct = site.givebutterAccountId;
  if (!acct) return null;

  return (
    <Script
      src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${acct}&p=other`}
      strategy="afterInteractive"
    />
  );
}

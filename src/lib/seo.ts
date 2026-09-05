import type { Metadata } from "next";
import { site } from "@/lib/site";

const baseUrl = site.url;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | U.S. 501(c)(3) Supporting Rural Nepal`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "We Raise Hope",
    "501(c)(3)",
    "Nepal healthcare charity",
    "rural healthcare Nepal",
    "Bodgaun hospital",
    "Nepal education charity",
    "IT education Nepal",
    "clean water Nepal nonprofit",
    "medical volunteering Nepal",
    "donate Nepal hospital",
    "New York charity",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: site.name,
    title: `${site.name} | Healthcare & Education in Rural Nepal`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Healthcare & Education in Rural Nepal`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#CF4209" },
    { media: "(prefers-color-scheme: dark)", color: "#602718" },
  ],
  alternates: {
    canonical: baseUrl,
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
    },
  };
}

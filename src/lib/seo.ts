import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";

const baseUrl = site.url;

/** Keep absolute titles under ~60 chars for SEO tools. */
export function absoluteTitle(pageTitle: string): string {
  const brand = site.name;
  const withBrand = `${pageTitle} | ${brand}`;
  if (withBrand.length <= 60) return withBrand;
  if (pageTitle.length <= 60) return pageTitle;
  return `${pageTitle.slice(0, 57).trimEnd()}…`;
}

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#CF4209" },
    { media: "(prefers-color-scheme: dark)", color: "#602718" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: absoluteTitle("Healthcare & Education in Rural Nepal"),
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "We Raise Hope",
    "501(c)(3)",
    "Nepal healthcare charity",
    "rural healthcare Nepal",
    "Bodgaun Primary Hospital",
    "Nepal education charity",
    "IT education Nepal",
    "clean water Nepal nonprofit",
    "medical volunteering Nepal",
    "donate Nepal hospital",
    "New York charity",
    "Sindhupalchowk",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "nonprofit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: site.name,
    title: absoluteTitle("Healthcare & Education in Rural Nepal"),
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "We Raise Hope — healthcare and education in rural Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: absoluteTitle("Healthcare & Education in Rural Nepal"),
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      "x-default": baseUrl,
    },
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options?: { ogType?: "website" | "article" },
): Metadata {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
  const fullTitle = absoluteTitle(title);
  const shortDescription =
    description.length > 155 ? `${description.slice(0, 152).trimEnd()}…` : description;

  return {
    title: { absolute: fullTitle },
    description: shortDescription,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      type: options?.ogType ?? "website",
      title: fullTitle,
      description: shortDescription,
      url,
      siteName: site.name,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: shortDescription,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

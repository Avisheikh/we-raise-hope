import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";

const baseUrl = site.url;

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#CF4209" },
    { media: "(prefers-color-scheme: dark)", color: "#602718" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | Give a Child in Rural Nepal the Chance to Learn, Heal & Thrive`,
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
    title: `${site.name} | Give a Child in Rural Nepal the Chance to Learn, Heal & Thrive`,
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
    title: `${site.name} | Learn, Heal & Thrive in Rural Nepal`,
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
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options?: { ogType?: "website" | "article" },
): Metadata {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: options?.ogType ?? "website",
      title: fullTitle,
      description,
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
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

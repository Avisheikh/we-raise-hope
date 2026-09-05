import { site } from "@/lib/site";

/** Valid, minimal JSON-LD — avoid OfferCatalog / invalid nested types that fail validators. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        alternateName: site.alternateName,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "NGO",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        alternateName: [site.alternateName, "We Raise Hope Inc"],
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/logo.png`,
        description: site.description,
        slogan: site.tagline,
        taxID: site.ein,
        foundingDate: String(site.founded),
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Country",
          name: "Nepal",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: site.email,
          telephone: site.phone,
          availableLanguage: "English",
        },
        sameAs: Object.values(site.social),
      },
      {
        "@type": "Hospital",
        "@id": `${site.url}/bodgaun-hospital#facility`,
        name: "Bodgaun Primary Hospital",
        url: `${site.url}/bodgaun-hospital`,
        description:
          "Rural hospital in Indrawati Rural Municipality, Sindhupalchowk, Nepal with emergency care, diagnostics, and an operating surgical room.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bodgaun",
          addressRegion: "Sindhupalchowk",
          addressCountry: "NP",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

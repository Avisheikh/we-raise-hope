import { site } from "@/lib/site";

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
        taxID: site.ein,
        nonprofitStatus: "Nonprofit501c3",
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
          "@type": "AdministrativeArea",
          name: "Sindhupalchowk District, Nepal",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "donations and general inquiries",
          email: site.email,
          telephone: site.phone,
        },
        sameAs: Object.values(site.social),
        knowsAbout: [
          "rural healthcare Nepal",
          "Bodgaun Primary Hospital",
          "education in Sindhupalchowk",
          "clean water Nepal",
        ],
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

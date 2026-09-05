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
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${site.url}/logo.png`,
        description: site.description,
        slogan: site.tagline,
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
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Sindhupalchowk District, Nepal",
          },
          {
            "@type": "Country",
            name: "Nepal",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "donations and general inquiries",
          email: site.email,
          telephone: site.phone,
          availableLanguage: ["English"],
        },
        sameAs: Object.values(site.social),
        knowsAbout: [
          "rural healthcare Nepal",
          "Bodgaun Primary Hospital",
          "education in Sindhupalchowk",
          "clean water Nepal",
          "IT education Nepal",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ways to support",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Donate",
                url: `${site.url}/donate`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Event",
                name: "Events & galas",
                url: `${site.url}/events`,
              },
            },
          ],
        },
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
        parentOrganization: { "@id": `${site.url}/#organization` },
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

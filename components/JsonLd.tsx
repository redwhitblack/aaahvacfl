import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.shortName,
    legalName: site.legalName,
    url: site.url,
    foundingDate: "1999-08-19",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    areaServed: [
      "Naples, Florida",
      "Fort Myers, Florida",
      "Collier County, Florida",
      "Lee County, Florida",
    ],
    description: site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

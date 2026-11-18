import type { Dictionary } from "@/lib/i18n/types"
import { paths } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

/** Structured data for search engines, built from the same copy the page shows. */
export function JsonLd({ dict }: { dict: Dictionary }) {
  const url = siteConfig.url + paths[dict.lang]
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        url,
        description: dict.meta.description,
        email: siteConfig.email,
        inLanguage: dict.lang,
        sameAs: siteConfig.socials.map((s) => s.href),
        knowsAbout: dict.services.services.map((s) => s.label),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.nav.services,
          itemListElement: dict.services.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.label, description: s.outcome },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: dict.lang,
        mainEntity: dict.faq.items.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped cannot break out of the script element
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

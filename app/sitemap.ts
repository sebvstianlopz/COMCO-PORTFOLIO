import type { MetadataRoute } from "next"
import { paths } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: siteConfig.url + paths.es, en: siteConfig.url + paths.en }
  return (["es", "en"] as const).map((lang) => ({
    url: siteConfig.url + paths[lang],
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
    alternates: { languages },
  }))
}

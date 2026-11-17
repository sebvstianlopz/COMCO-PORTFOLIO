import type { Metadata, Viewport } from "next"
import type { Dictionary } from "@/lib/i18n/types"
import { siteConfig } from "@/lib/site-config"

export const paths = { es: "/", en: "/en/" } as const

export function buildMetadata(dict: Dictionary): Metadata {
  const path = paths[dict.lang]
  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { es: paths.es, en: paths.en, "x-default": paths.es },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.lang === "es" ? "es_ES" : "en_US",
      alternateLocale: dict.lang === "es" ? "en_US" : "es_ES",
    },
    twitter: { card: "summary_large_image", title: dict.meta.title, description: dict.meta.description },
    icons: { icon: "/favicon.ico" },
  }
}

export const viewport: Viewport = {
  themeColor: "#111215",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

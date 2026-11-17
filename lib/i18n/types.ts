import type { GlassFolderStrings } from "@/components/ui/glass-folder-cards"
import type { ArtName } from "@/lib/art"

export type Lang = "es" | "en"

/** A file inside a folder: a deliverable, an example post or a results sheet. */
export type FolderItem = {
  name: string
  meta: string
  /** Shown as a picture when set; otherwise drawn as a sheet of paper. */
  art?: ArtName
  /** What appears under the folder when this file is chosen. */
  detail: string
}

export type Service = {
  id: string
  label: string
  meta: string
  art: ArtName
  /** One line: what the client gets out of it. */
  outcome: string
  files: FolderItem[]
}

export type Metric = { label: string; before: string; after: string }

export type CaseStudy = {
  id: string
  client: string
  sector: string
  art: ArtName
  summary: string
  files: FolderItem[]
  metrics: Metric[]
}

export type Stat = { value: number; prefix?: string; suffix?: string; label: string }

export type Dictionary = {
  lang: Lang
  meta: { title: string; description: string; ogAlt: string }
  nav: {
    skip: string
    home: string
    services: string
    work: string
    process: string
    contact: string
    book: string
    language: string
    switchTo: string
  }
  hero: {
    tab: string
    tabMeta: string
    title: string
    lead: string
    primary: string
    secondary: string
    note: string
    files: [string, string, string]
  }
  proof: { title: string; stats: Stat[]; note: string }
  services: {
    title: string
    intro: string
    hint: string
    cta: string
    back: string
    services: Service[]
  }
  work: {
    title: string
    intro: string
    note: string
    before: string
    after: string
    cta: string
    back: string
    cases: CaseStudy[]
  }
  process: { title: string; intro: string; steps: { title: string; text: string }[]; cta: string }
  testimonials: { title: string; note: string; items: { quote: string; name: string; role: string }[] }
  booking: {
    title: string
    lead: string
    badges: string[]
    open: string
    loading: string
    fallback: string
    emailMe: string
    thanksTitle: string
    thanksText: string
  }
  faq: { title: string; items: { q: string; a: string }[] }
  footer: {
    title: string
    cta: string
    contact: string
    follow: string
    pay: string
    payNote: string
    rights: string
    placeholderNote: string
  }
  folder: Partial<GlassFolderStrings>
}

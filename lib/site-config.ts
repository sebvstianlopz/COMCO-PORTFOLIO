/**
 * Every link on the site lives here. Replace the placeholder values with
 * COMCO's real accounts before publishing; nothing else needs to change.
 */
export const siteConfig = {
  name: "COMCO",
  /** Public address of the site, used for SEO tags and the sitemap. PLACEHOLDER */
  url: "https://comco.example",
  /** Calendly event to book. PLACEHOLDER */
  calendlyUrl: "https://calendly.com/comco/30min",
  /** PayPal.me link for paying invoices. PLACEHOLDER */
  paypalUrl: "https://paypal.me/comco",
  /** PLACEHOLDER */
  email: "hola@comco.example",
  /** Shown in the footer and used for structured data. Remove any you don't use. PLACEHOLDERS */
  socials: [
    { id: "instagram", label: "Instagram", handle: "@comco", href: "https://instagram.com/comco" },
    { id: "tiktok", label: "TikTok", handle: "@comco", href: "https://tiktok.com/@comco" },
    { id: "linkedin", label: "LinkedIn", handle: "COMCO", href: "https://linkedin.com/in/comco" },
  ],
} as const

export type SocialId = (typeof siteConfig.socials)[number]["id"]

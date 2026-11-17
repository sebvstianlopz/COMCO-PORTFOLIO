import { Funnel_Display, Funnel_Sans } from "next/font/google"

/** Display face for headlines: compact, confident, with character. */
export const display = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
})

/** Text face from the same family, for everything else. */
export const text = Funnel_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-text",
  display: "swap",
})

export const fontVars = `${display.variable} ${text.variable}`

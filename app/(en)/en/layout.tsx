import "../../globals.css"
import { fontVars } from "@/lib/fonts"
import { en } from "@/lib/i18n/en"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata(en)
export { viewport } from "@/lib/seo"

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  )
}

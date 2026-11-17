import "../globals.css"
import { fontVars } from "@/lib/fonts"
import { es } from "@/lib/i18n/es"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata(es)
export { viewport } from "@/lib/seo"

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVars}>
      <body>{children}</body>
    </html>
  )
}

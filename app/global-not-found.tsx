import "./globals.css"
import type { Metadata } from "next"
import { fontVars } from "@/lib/fonts"
import { paths } from "@/lib/seo"

export const metadata: Metadata = {
  title: "404 · COMCO",
  description: "Esta página no existe. This page doesn't exist.",
  robots: { index: false },
}

/** Shown for any address that isn't a page, in both languages. */
export default function GlobalNotFound() {
  return (
    <html lang="es" className={fontVars}>
      <body className="grid min-h-svh place-items-center p-6">
        <main className="glass w-full max-w-[640px] rounded-[32px] p-8 md:p-12">
          <p className="font-heading text-xl font-bold tracking-[-0.04em]">COMCO</p>
          <h1 className="mt-10 text-[clamp(2.25rem,6vw,3.75rem)] leading-[1] font-semibold tracking-[-0.035em]">
            Esta página no existe.
          </h1>
          <p lang="en" className="mt-3 text-xl text-ink-soft">
            This page doesn&apos;t exist.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            <a href={paths.es} className="pill pill-primary">
              Volver al inicio
            </a>
            <a href={paths.en} lang="en" hrefLang="en" className="pill pill-glass">
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}

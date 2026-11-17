import { BookButton } from "@/components/booking/book-button"
import type { Dictionary } from "@/lib/i18n/types"
import { paths } from "@/lib/seo"

import { sectionIds } from "@/lib/sections"

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const { nav, lang } = dict
  const other = lang === "es" ? "en" : "es"
  const links = [
    { href: `#${sectionIds.services}`, label: nav.services },
    { href: `#${sectionIds.work}`, label: nav.work },
    { href: `#${sectionIds.process}`, label: nav.process },
    { href: `#${sectionIds.contact}`, label: nav.contact },
  ]

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 pt-5 md:px-8 md:pt-7">
      <a
        href="#main"
        className="pointer-events-auto sr-only rounded-full bg-ink px-4 py-2 text-graphite focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        {nav.skip}
      </a>
      <div className="glass-flat pointer-events-auto mx-auto flex h-14 max-w-[1360px] items-center gap-2 rounded-full pr-2 pl-5 md:pl-6">
        <a
          href={paths[lang]}
          aria-label={nav.home}
          className="font-heading text-[1.35rem] leading-none font-bold tracking-[-0.04em]"
        >
          COMCO
        </a>
        <nav aria-label={nav.services} className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[0.9375rem] text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <div role="group" aria-label={nav.language} className="flex items-center rounded-full p-1 text-[0.8125rem] font-semibold">
            {(["es", "en"] as const).map((code) =>
              code === lang ? (
                <span key={code} aria-current="true" className="rounded-full bg-white/12 px-2.5 py-1.5 text-ink">
                  {code.toUpperCase()}
                </span>
              ) : (
                <a
                  key={code}
                  href={paths[other]}
                  hrefLang={other}
                  lang={other}
                  aria-label={nav.switchTo}
                  className="rounded-full px-2.5 py-1.5 text-ink-soft transition-colors hover:text-ink"
                >
                  {code.toUpperCase()}
                </a>
              ),
            )}
          </div>
          <BookButton lang={lang} size="sm" bare>
            {nav.book}
          </BookButton>
        </div>
      </div>
    </header>
  )
}

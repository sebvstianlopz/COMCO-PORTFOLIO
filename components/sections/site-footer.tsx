import { Mail, Wallet, ArrowUpRight } from "lucide-react"
import { BookButton } from "@/components/booking/book-button"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/lib/i18n/types"
import { paths } from "@/lib/seo"
import { siteConfig, type SocialId } from "@/lib/site-config"

/** Brand marks drawn in the same 24-unit grid and stroke as the lucide icons. */
function SocialIcon({ id }: { id: SocialId }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-5",
    "aria-hidden": true,
  }
  if (id === "instagram")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  if (id === "tiktok")
    return (
      <svg {...common}>
        <path d="M14 3.5v11.25a3.75 3.75 0 1 1-3.75-3.75" />
        <path d="M14 3.5c.45 2.75 2.35 4.6 5.25 4.85" />
      </svg>
    )
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5v6" />
      <path d="M8 7.5v.01" />
      <path d="M12 16.5v-6" />
      <path d="M12 13a2.5 2.5 0 0 1 5 0v3.5" />
    </svg>
  )
}

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const f = dict.footer
  const other = dict.lang === "es" ? "en" : "es"
  return (
    <footer className="mx-auto max-w-[1360px] px-5 pb-28 md:px-10 md:pb-12">
      <Reveal className="border-t border-white/10 pt-20 md:pt-28">
        <h2 className="max-w-[14ch] text-[clamp(2.5rem,6.4vw,5.5rem)] leading-[0.96] font-semibold tracking-[-0.04em]">
          {f.title}
        </h2>
        <div className="mt-10">
          <BookButton lang={dict.lang}>{f.cta}</BookButton>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-3">
        <div>
          <h3 className="text-[0.875rem] text-ink-soft">{f.contact}</h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 inline-flex items-center gap-2.5 text-lg transition-colors hover:text-signal"
          >
            <Mail aria-hidden="true" className="size-5" />
            {siteConfig.email}
          </a>
        </div>
        <div>
          <h3 className="text-[0.875rem] text-ink-soft">{f.follow}</h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {siteConfig.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-lg transition-colors hover:text-signal"
                >
                  <SocialIcon id={s.id} />
                  <span>{s.label}</span>
                  <span className="text-[0.9375rem] text-ink-soft">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[0.875rem] text-ink-soft">{f.payNote}</h3>
          <a href={siteConfig.paypalUrl} target="_blank" rel="noopener noreferrer" className="pill pill-glass pill-sm mt-3">
            <Wallet aria-hidden="true" className="size-[1.1em]" />
            {f.pay}
            <ArrowUpRight aria-hidden="true" className="size-[1.1em]" />
          </a>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.875rem] text-ink-soft md:flex-row md:items-center md:justify-between">
        <p>{f.rights}</p>
        <p>{f.placeholderNote}</p>
        <a href={paths[other]} hrefLang={other} lang={other} className="underline transition-colors hover:text-ink">
          {dict.nav.switchTo}
        </a>
      </div>
    </footer>
  )
}

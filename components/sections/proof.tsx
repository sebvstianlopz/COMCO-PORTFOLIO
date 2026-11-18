"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary, Stat } from "@/lib/i18n/types"

export function Proof({ dict }: { dict: Dictionary }) {
  const p = dict.proof
  const locale = dict.lang === "es" ? "es-ES" : "en-GB"
  return (
    <section
      aria-labelledby="proof-title"
      className="mx-auto grid max-w-[1360px] gap-12 px-5 pt-28 md:px-10 md:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20"
    >
      <Reveal>
        <h2
          id="proof-title"
          className="max-w-[17ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.03em]"
        >
          {p.title}
        </h2>
        <p className="mt-6 text-[0.875rem] text-ink-soft">{p.note}</p>
      </Reveal>

      <Reveal>
        <dl className="border-t border-white/10">
          {p.stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 border-b border-white/10 py-6 md:py-7">
              <dt className="order-2 max-w-[22ch] text-right text-[0.9375rem] leading-snug text-ink-soft md:text-base">
                {s.label}
              </dt>
              <dd className="order-1 font-heading text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                <CountUp stat={s} locale={locale} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

/** Shows the final number; counts up to it once, when it first scrolls into view. */
function CountUp({ stat, locale }: { stat: Stat; locale: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [shown, setShown] = React.useState(stat.value)
  const format = (n: number) => (stat.prefix ?? "") + n.toLocaleString(locale) + (stat.suffix ?? "")

  React.useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const start = performance.now()
        const dur = 1500
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(2, -10 * t)
          setShown(Math.round(stat.value * (t === 1 ? 1 : eased)))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { rootMargin: "0px 0px -15% 0px" },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [stat.value])

  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(shown)}</span>
      <span className="sr-only">{format(stat.value)}</span>
    </span>
  )
}

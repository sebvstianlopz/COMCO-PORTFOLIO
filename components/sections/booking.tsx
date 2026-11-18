"use client"

import * as React from "react"
import { ArrowUpRight, Check, Mail } from "lucide-react"
import { ArtCanvas } from "@/components/art-canvas"
import { calendlyUrl, loadCalendly, useCalendlyBooked } from "@/components/booking/calendly"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/lib/i18n/types"
import { sectionIds } from "@/lib/sections"
import { siteConfig } from "@/lib/site-config"

type WidgetState = "idle" | "loading" | "ready" | "failed" | "booked"

/**
 * The page's destination: a glass frame over COMCO's artwork, holding
 * Calendly's own booking calendar, loaded as the section approaches.
 */
export function Booking({ dict }: { dict: Dictionary }) {
  const b = dict.booking
  const sectionRef = React.useRef<HTMLElement>(null)
  const slotRef = React.useRef<HTMLDivElement>(null)
  const [state, setState] = React.useState<WidgetState>("idle")
  const url = calendlyUrl(dict.lang)

  useCalendlyBooked(() => setState("booked"))

  React.useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        setState("loading")
        loadCalendly()
          .then((c) => {
            const slot = slotRef.current
            if (!slot) return
            slot.innerHTML = ""
            c.initInlineWidget({ url, parentElement: slot })
            const frame = slot.querySelector("iframe")
            if (frame) frame.addEventListener("load", () => setState((s) => (s === "loading" ? "ready" : s)))
            // the frame may already be there and loading; don't wait forever on its event
            window.setTimeout(() => setState((s) => (s === "loading" ? "ready" : s)), 6000)
          })
          .catch(() => setState("failed"))
      },
      { rootMargin: "600px 0px" },
    )
    io.observe(section)
    return () => io.disconnect()
  }, [url])

  return (
    <section
      ref={sectionRef}
      id={sectionIds.contact}
      aria-labelledby="booking-title"
      className="scroll-mt-4 p-2.5 pb-28 md:p-4 md:pb-40"
    >
      <div className="relative overflow-hidden rounded-[30px] bg-[#0b0b10] md:rounded-[40px]">
        <div aria-hidden="true" className="absolute inset-0">
          <ArtCanvas art="cobalt" seed={12} width={900} height={620} className="scale-110" />
        </div>
        <div className="relative mx-auto grid max-w-[1360px] gap-10 px-3 py-3 md:px-5 md:py-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-5">
          <Reveal className="glass flex flex-col justify-between rounded-[24px] p-7 md:rounded-[32px] md:p-12">
            <div>
              <h2
                id="booking-title"
                className="max-w-[12ch] text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.04em]"
              >
                {b.title}
              </h2>
              <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-ink/80">{b.lead}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {b.badges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-1.5 rounded-full bg-white/[0.08] py-1.5 pr-3.5 pl-2.5 text-[0.9375rem] shadow-[inset_0_0_0_1px_rgb(255_255_255/.12)]"
                  >
                    <Check aria-hidden="true" className="size-4 text-signal" />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-12 text-[0.9375rem] text-ink-soft">
              {b.fallback}{" "}
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 text-ink underline">
                <Mail aria-hidden="true" className="size-4" />
                {b.emailMe}
              </a>
            </p>
          </Reveal>

          <div
            className={`glass relative overflow-hidden rounded-[24px] md:rounded-[32px] ${state === "failed" ? "min-h-[280px]" : "min-h-[700px]"}`}
          >
            {state === "booked" ? (
              <div role="status" className="grid h-full min-h-[700px] place-content-center gap-4 p-10 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-ink text-graphite">
                  <Check aria-hidden="true" className="size-7" />
                </span>
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">{b.thanksTitle}</h3>
                <p className="mx-auto max-w-[34ch] text-lg text-ink/80">{b.thanksText}</p>
              </div>
            ) : (
              <>
                {state !== "ready" ? (
                  <div className="absolute inset-0 grid place-content-center gap-5 p-10 text-center">
                    {state === "failed" ? null : (
                      <p role="status" className="text-ink-soft">
                        {b.loading}
                      </p>
                    )}
                    <a href={url} target="_blank" rel="noopener" className="pill pill-primary mx-auto">
                      {b.open}
                      <ArrowUpRight aria-hidden="true" className="size-[1.1em]" />
                    </a>
                  </div>
                ) : null}
                <div
                  ref={slotRef}
                  className={`relative w-full [&_iframe]:rounded-[inherit] ${state === "failed" ? "hidden" : "h-[700px]"}`}
                  style={{ opacity: state === "ready" ? 1 : 0, transition: "opacity .6s var(--ease-out-expo)" }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

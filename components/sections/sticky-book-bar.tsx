"use client"

import * as React from "react"
import { BookButton } from "@/components/booking/book-button"
import type { Dictionary } from "@/lib/i18n/types"
import { sectionIds } from "@/lib/sections"
import { cn } from "@/lib/utils"

/**
 * Phones only: the booking action stays within thumb reach once the hero has
 * gone, and steps aside while the booking section itself is on screen.
 */
export function StickyBookBar({ dict }: { dict: Dictionary }) {
  const [pastHero, setPastHero] = React.useState(false)
  const [atBooking, setAtBooking] = React.useState(false)

  React.useEffect(() => {
    const hero = document.getElementById("inicio")
    const booking = document.getElementById(sectionIds.contact)
    const watch = (el: HTMLElement | null, cb: (e: IntersectionObserverEntry) => void, opts?: IntersectionObserverInit) => {
      if (!el) return () => {}
      const io = new IntersectionObserver(([e]) => cb(e), opts)
      io.observe(el)
      return () => io.disconnect()
    }
    const a = watch(hero, (e) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 })
    const b = watch(booking, (e) => setAtBooking(e.isIntersecting), { threshold: 0.15 })
    return () => {
      a()
      b()
    }
  }, [])

  const visible = pastHero && !atBooking
  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-[transform,opacity] duration-500 ease-[var(--ease-out-expo)] md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0",
      )}
    >
      <div className="glass-flat flex items-center justify-between gap-3 rounded-full py-2 pr-2 pl-5">
        <p className="text-[0.8125rem] leading-tight text-ink-soft">{dict.hero.note}</p>
        <BookButton lang={dict.lang} size="sm" bare>
          {dict.nav.book}
        </BookButton>
      </div>
    </div>
  )
}

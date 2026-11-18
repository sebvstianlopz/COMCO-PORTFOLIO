"use client"

import * as React from "react"
import { ArrowDown, CirclePlay, Layers, CircleDashed } from "lucide-react"
import { ArtCanvas } from "@/components/art-canvas"
import { BookButton } from "@/components/booking/book-button"
import { useSize } from "@/hooks/use-width"
import type { Dictionary } from "@/lib/i18n/types"
import type { ArtName } from "@/lib/art"
import { sectionIds } from "@/lib/sections"

const TAB_H = 46

/**
 * The glass front pane's outline: a rounded panel with a folder tab on its
 * top-left edge, drawn to the pane's measured size.
 */
function panePath(w: number, h: number, tabW: number, r: number) {
  const t = TAB_H
  const tr = 18
  return [
    `M0 ${tr}`,
    `A${tr} ${tr} 0 0 1 ${tr} 0`,
    `L${tabW - tr} 0`,
    `A${tr} ${tr} 0 0 1 ${tabW} ${tr}`,
    `L${tabW} ${t}`,
    `L${w - r} ${t}`,
    `A${r} ${r} 0 0 1 ${w} ${t + r}`,
    `L${w} ${h - r}`,
    `A${r} ${r} 0 0 1 ${w - r} ${h}`,
    `L${r} ${h}`,
    `A${r} ${r} 0 0 1 0 ${h - r}`,
    "Z",
  ].join(" ")
}

const FILES: { art: ArtName; seed: number; Icon: typeof CirclePlay }[] = [
  { art: "coral", seed: 4, Icon: CirclePlay },
  { art: "cobalt", seed: 9, Icon: Layers },
  { art: "plum", seed: 2, Icon: CircleDashed },
]

export function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero
  const [paneRef, pane] = useSize<HTMLDivElement>()
  const [artRef, artBox] = useSize<HTMLDivElement>()
  const sectionRef = React.useRef<HTMLElement>(null)
  const narrow = pane.w > 0 && pane.w < 640
  const tabW = narrow ? 128 : 300
  const radius = narrow ? 24 : 32
  const d = pane.w ? panePath(pane.w, pane.h, tabW, radius) : null

  // Paint the backdrop once, at a resolution that suits the screen's shape.
  const paintSize = React.useMemo(() => {
    if (!artBox.w) return null
    const portrait = artBox.h > artBox.w
    return portrait ? { w: 420, h: 700 } : { w: 720, h: 450 }
  }, [artBox.w, artBox.h])

  // The artwork leans away from the pointer, a little.
  React.useEffect(() => {
    const el = sectionRef.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      const r = el.getBoundingClientRect()
      const px = ((e.clientX - r.left) / r.width) * 2 - 1
      const py = ((e.clientY - r.top) / r.height) * 2 - 1
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--hx", px.toFixed(3))
        el.style.setProperty("--hy", py.toFixed(3))
      })
    }
    el.addEventListener("pointermove", move)
    return () => {
      el.removeEventListener("pointermove", move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-labelledby="hero-title"
      className="group/hero relative h-[100svh] min-h-[560px] md:min-h-[700px] p-2.5 md:p-4 [--hx:0] [--hy:0]"
    >
      {/* back panel: COMCO's liquid artwork */}
      <div
        ref={artRef}
        className="relative size-full overflow-hidden rounded-[30px] bg-[#0b0b10] md:rounded-[40px]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 22% 30%, rgb(53 82 216 / .75), transparent 70%), radial-gradient(50% 45% at 78% 62%, rgb(255 138 99 / .55), transparent 70%)",
        }}
      >
        <div
          className="absolute -inset-[6%] transition-transform duration-[1200ms] ease-[var(--ease-out-expo)]"
          style={{ transform: "translate3d(calc(var(--hx) * -14px), calc(var(--hy) * -10px), 0)" }}
        >
          <div className="art-drift size-full">
            {paintSize ? <ArtCanvas art="signal" seed={7} width={paintSize.w} height={paintSize.h} /> : null}
          </div>
        </div>
        {/* keeps the header readable over bright passages of the art */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />

        {/* front pane */}
        <div className="absolute inset-x-2.5 bottom-2.5 md:inset-x-5 md:bottom-5">
          <div ref={paneRef} className="relative">
            {/* example posts tucked behind the glass; they rise when the hero is hovered or focused */}
            <ul
              aria-hidden="true"
              className="pointer-events-none absolute right-[4%] flex -translate-y-[64%] items-end md:right-[7%]"
              style={{ top: TAB_H }}
            >
              {FILES.map((f, i) => (
                <li
                  key={f.art}
                  className="hero-file relative -ml-4 sm:-ml-6 aspect-[4/5] w-[clamp(78px,13vw,196px)] overflow-hidden rounded-[14px] shadow-[0_18px_40px_-16px_rgb(0_0_0/.8)] ring-1 ring-white/20 first:!ml-0 md:-ml-8 md:rounded-[18px]"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <ArtCanvas art={f.art} seed={f.seed} width={240} height={300} />
                  <span className="absolute inset-x-0 top-0 flex items-center gap-1.5 bg-gradient-to-b from-black/55 to-transparent px-2.5 pt-2 pb-5 text-[0.6875rem] font-semibold text-white md:text-[0.8125rem]">
                    <f.Icon className="size-[1.15em]" aria-hidden="true" />
                    {h.files[i]}
                  </span>
                </li>
              ))}
            </ul>

            {/*
              The glass: a tab and a panel, each a rounded box so the blur
              follows its corners (a blur cannot be clipped to a free path),
              outlined together by one drawn rim.
            */}
            <div className="relative z-10">
              <div
                aria-hidden="true"
                className="glass absolute top-0 left-0 [box-shadow:none]"
                style={{ width: tabW, height: TAB_H, borderRadius: "18px 18px 0 0", background: "var(--glass-tint-top)" }}
              />
              <div
                aria-hidden="true"
                className="glass absolute inset-x-0 bottom-0 [box-shadow:none]"
                style={{ top: TAB_H, borderRadius: `0 ${radius}px ${radius}px ${radius}px` }}
              />
              {d ? (
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                  viewBox={`0 0 ${pane.w} ${pane.h}`}
                >
                  <defs>
                    <linearGradient id="hero-rim" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                      <stop offset="0.3" stopColor="#fff" stopOpacity="0.22" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                  <path d={d} fill="none" stroke="url(#hero-rim)" strokeWidth="2.5" />
                </svg>
              ) : null}

              {/* tab label */}
              <div className="relative flex items-baseline gap-2.5 pt-3.5 pl-5 md:pl-6" style={{ height: TAB_H, width: tabW }}>
                <span className="font-heading text-[0.9375rem] font-bold tracking-[-0.02em]">{h.tab}</span>
                <span className="hidden truncate text-[0.8125rem] text-ink-soft sm:inline">{h.tabMeta}</span>
              </div>

              <div className="relative px-5 pt-5 pb-5 md:px-10 md:pt-12 md:pb-10 lg:px-14">
                <h1
                  id="hero-title"
                  className="max-w-[11ch] text-[clamp(2.6rem,8.4vw,6rem)] leading-[0.94] font-semibold tracking-[-0.04em]"
                >
                  {h.title}
                </h1>
                <div className="mt-4 flex flex-col gap-4 md:mt-10 md:gap-7 lg:flex-row lg:items-end lg:justify-between">
                  <p className="max-w-[44ch] text-base leading-relaxed text-ink/80 md:text-lg">{h.lead}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <BookButton lang={dict.lang} className="max-w-full whitespace-normal text-left max-[380px]:px-5 max-[380px]:text-[0.9375rem]">
                        {h.primary}
                      </BookButton>
                      <a href={`#${sectionIds.services}`} className="pill pill-glass max-sm:hidden">
                        {h.secondary}
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pl-1">
                      <p className="text-[0.75rem] whitespace-nowrap text-ink-soft sm:text-[0.8125rem]">{h.note}</p>
                      <a
                        href={`#${sectionIds.services}`}
                        className="inline-flex shrink-0 items-center gap-1 text-[0.875rem] font-semibold underline-offset-4 hover:underline sm:hidden"
                      >
                        {h.secondary}
                        <ArrowDown aria-hidden="true" className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{HERO_CSS}</style>
    </section>
  )
}

const HERO_CSS = `
.hero-file {
  transform-origin: 50% 100%;
  transform: translateY(calc(var(--lift, 0px))) rotate(calc((var(--i) - 1) * 6deg));
  transition: transform .9s var(--ease-spring) calc(var(--i) * 60ms);
  animation: hero-file-in 1.1s var(--ease-out-expo) calc(.35s + var(--i) * 110ms) both;
}
.group\\/hero:hover .hero-file,
.group\\/hero:focus-within .hero-file { --lift: -22px; }
@keyframes hero-file-in {
  from { translate: 0 60%; opacity: 0; }
  to { translate: 0 0; opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-file { animation: none; transition: none; }
}
`

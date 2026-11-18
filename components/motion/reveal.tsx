"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Stagger, in ms. */
  delay?: number
}

/**
 * Lifts a block into place the first time it scrolls into view. Content is
 * visible by default: only blocks still below the fold when the page loads
 * are hidden, and never with reduced motion or without JavaScript.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [state, setState] = React.useState<"idle" | "pending" | "shown">("idle")

  React.useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return
    setState("pending")
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        setState("shown")
      },
      { rootMargin: "0px 0px -12% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}

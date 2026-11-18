"use client"

import * as React from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

/** Weighted, smooth scrolling, including the page's anchor links. Off with reduced motion. */
export function SmoothScroll() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({ anchors: { offset: -8 }, lerp: 0.11, wheelMultiplier: 0.95 })
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
  return null
}

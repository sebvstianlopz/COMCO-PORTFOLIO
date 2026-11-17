"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/i18n/types"
import { calendlyUrl, loadCalendly, openCalendly } from "./calendly"

type BookButtonProps = {
  lang: Lang
  children: React.ReactNode
  variant?: "primary" | "glass"
  size?: "md" | "sm"
  className?: string
  /** Hide the arrow for compact placements. */
  bare?: boolean
}

/**
 * The one booking action, used everywhere on the page. A real link to the
 * Calendly page that opens the Calendly popup instead when it can.
 */
export function BookButton({ lang, children, variant = "primary", size = "md", className, bare }: BookButtonProps) {
  const warm = React.useCallback(() => {
    loadCalendly().catch(() => {})
  }, [])

  return (
    <a
      href={calendlyUrl(lang)}
      target="_blank"
      rel="noopener"
      onPointerEnter={warm}
      onFocus={warm}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        openCalendly(lang)
      }}
      className={cn("pill group", variant === "primary" ? "pill-primary" : "pill-glass", size === "sm" && "pill-sm", className)}
    >
      <span>{children}</span>
      {bare ? null : (
        <ArrowUpRight
          aria-hidden="true"
          className="size-[1.1em] transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  )
}

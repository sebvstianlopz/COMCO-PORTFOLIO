"use client"

import * as React from "react"
import { siteConfig } from "@/lib/site-config"

/**
 * Calendly, loaded only when someone is about to book: on hover or focus of a
 * booking button, or when the booking section scrolls near. Every booking
 * button is a real link to the Calendly page, so it still works without
 * JavaScript or if the widget is blocked.
 */

type CalendlyApi = {
  initPopupWidget: (opts: { url: string }) => void
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement; resize?: boolean }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyApi
  }
}

const SCRIPT = "https://assets.calendly.com/assets/external/widget.js"
const STYLE = "https://assets.calendly.com/assets/external/widget.css"

let loading: Promise<CalendlyApi> | null = null

export function loadCalendly(): Promise<CalendlyApi> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"))
  if (window.Calendly) return Promise.resolve(window.Calendly)
  if (loading) return loading
  loading = new Promise<CalendlyApi>((resolve, reject) => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = STYLE
    document.head.appendChild(link)
    const script = document.createElement("script")
    script.src = SCRIPT
    script.async = true
    script.onload = () => (window.Calendly ? resolve(window.Calendly) : reject(new Error("Calendly missing")))
    script.onerror = () => {
      loading = null
      reject(new Error("Calendly failed to load"))
    }
    document.body.appendChild(script)
  })
  return loading
}

/** The booking URL with COMCO's colours and the visitor's language. */
export function calendlyUrl(lang: string): string {
  const url = new URL(siteConfig.calendlyUrl)
  url.searchParams.set("hide_gdpr_banner", "1")
  url.searchParams.set("background_color", "17181c")
  url.searchParams.set("text_color", "eeece8")
  url.searchParams.set("primary_color", "ff7a59")
  url.searchParams.set("locale", lang)
  return url.toString()
}

export function openCalendly(lang: string) {
  const url = calendlyUrl(lang)
  loadCalendly()
    .then((c) => c.initPopupWidget({ url }))
    .catch(() => window.open(url, "_blank", "noopener"))
}

/** Calls `onBooked` when the visitor finishes booking in any Calendly widget. */
export function useCalendlyBooked(onBooked: () => void) {
  const cb = React.useRef(onBooked)
  React.useEffect(() => {
    cb.current = onBooked
  })
  React.useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return
      const data = e.data as { event?: string } | undefined
      if (data?.event === "calendly.event_scheduled") cb.current()
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])
}

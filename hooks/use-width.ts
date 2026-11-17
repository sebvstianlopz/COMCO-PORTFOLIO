"use client"

import * as React from "react"

/** The live content width of an element, or 0 before it has been measured. */
export function useWidth<T extends HTMLElement>(): [React.RefObject<T | null>, number] {
  const ref = React.useRef<T>(null)
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, width]
}

/** Width and height together, for shapes drawn to an element's size. */
export function useSize<T extends HTMLElement>(): [React.RefObject<T | null>, { w: number; h: number }] {
  const ref = React.useRef<T>(null)
  const [size, setSize] = React.useState({ w: 0, h: 0 })
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const box = entry.borderBoxSize?.[0]
      const w = Math.round(box ? box.inlineSize : entry.contentRect.width)
      const h = Math.round(box ? box.blockSize : entry.contentRect.height)
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, size]
}

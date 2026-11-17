"use client"

import * as React from "react"
import { paint, type ArtRecipe } from "@/components/ui/glass-folder-cards"
import { art, type ArtName } from "@/lib/art"
import { cn } from "@/lib/utils"

type ArtCanvasProps = {
  art: ArtName | ArtRecipe
  seed?: number
  /** Resolution the artwork is painted at, in px. CSS decides the shown size. */
  width: number
  height: number
  className?: string
}

/**
 * One of COMCO's liquid artworks, painted by the same shared queue the
 * folders use, so a page full of art never janks. Fades in once ready.
 */
export function ArtCanvas({ art: which, seed = 1, width, height, className }: ArtCanvasProps) {
  const ref = React.useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = React.useState(false)
  const recipe = typeof which === "string" ? art[which] : which
  const key = JSON.stringify(recipe)

  React.useEffect(() => {
    let live = true
    paint(JSON.parse(key) as ArtRecipe, seed, Math.round(width), Math.round(height), 0).then((src) => {
      const c = ref.current
      if (!live || !c) return
      c.width = src.width
      c.height = src.height
      c.getContext("2d")?.drawImage(src, 0, 0)
      setReady(true)
    })
    return () => {
      live = false
    }
  }, [key, seed, width, height])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      data-ready={ready || undefined}
      className={cn(
        "block size-full object-cover opacity-0 blur-md transition-[opacity,filter] duration-[1200ms] ease-[var(--ease-out-expo)] data-[ready]:opacity-100 data-[ready]:blur-none",
        className,
      )}
    />
  )
}

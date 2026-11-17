import type { ArtRecipe } from "@/components/ui/glass-folder-cards"

/**
 * COMCO's own liquid-art recipes. All the colour on the site comes from these:
 * the ground and the glass stay neutral graphite.
 */
export const art = {
  /** Long exposure: cobalt pulled into coral. The hero. */
  signal: {
    style: "streak",
    colors: ["#07080c", "#132055", "#3552d8", "#e9e4f5", "#ff8a63", "#b23a22", "#0b0b10"],
    scale: 0.62,
    warp: 1.6,
    angle: -0.5,
    gloss: 0.22,
    veins: 0,
  },
  /** Cold cobalt streak. Strategy. */
  cobalt: {
    style: "streak",
    colors: ["#f1ede7", "#a9b7dc", "#3552d8", "#121a3d", "#07080c", "#2f5bff", "#d9e2fb"],
    scale: 0.7,
    warp: 1.5,
    angle: -0.55,
    gloss: 0.2,
    veins: 0,
  },
  /** Coral ink folding through black. Content. */
  coral: {
    style: "marble",
    colors: ["#0a0a0c", "#22110f", "#8f2a1a", "#ff6a45", "#ffb18e", "#fff0e4"],
    scale: 0.65,
    warp: 3.3,
    angle: -0.4,
    gloss: 0.5,
    veins: 0.5,
  },
  /** Plum and rose. Management. */
  plum: {
    style: "marble",
    colors: ["#0c0a10", "#251634", "#6b3c86", "#d576a8", "#ffd6e6", "#f6efff"],
    scale: 0.72,
    warp: 3.5,
    angle: 1.2,
    gloss: 0.5,
    veins: 0.45,
  },
} satisfies Record<string, ArtRecipe>

export type ArtName = keyof typeof art

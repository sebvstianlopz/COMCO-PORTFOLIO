/**
 * COMCO's own photos, in `public/work/`. Shared by both languages, so the
 * copy files refer to these instead of repeating paths.
 */
export const media = {
  /** Portrait 4:5 crops for the cards peeking above the hero. */
  hero: ["/work/hero-dance.webp", "/work/hero-duo.webp", "/work/hero-rest.webp"],
  fitness: {
    /** Back panel of the folder. */
    cover: "/work/cover-dance.webp",
    duo: "/work/file-duo.webp",
    trainer: "/work/file-trainer.webp",
    rest: "/work/file-rest.webp",
  },
} as const

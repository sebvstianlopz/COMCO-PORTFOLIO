/**
 * COMCO's own photos and reel covers, in `public/work/`. Shared by both
 * languages, so the copy files refer to these instead of repeating paths.
 * Reel covers are still frames: swap in the MP4s once they are supplied.
 */
export const media = {
  /** Portrait 4:5 crops for the cards peeking above the hero. */
  hero: ["/work/hero-barra.webp", "/work/hero-mama.webp", "/work/hero-dance.webp"],
  mama: {
    cover: "/work/cover-mama.webp",
    gift: "/work/file-mama-gift.webp",
    generations: "/work/file-mama-generations.webp",
    detail: "/work/file-mama-detail.webp",
  },
  clinic: {
    cover: "/work/cover-clinic.webp",
    treatment: "/work/file-clinic-treatment.webp",
    equipment: "/work/file-clinic-equipment.webp",
    team: "/work/file-clinic-team.webp",
    reel: "/work/file-clinic-reel.webp",
    closeup: "/work/file-clinic-closeup.webp",
  },
  psychiatry: {
    cover: "/work/cover-psiq.webp",
    welcome: "/work/file-psiq-welcome.webp",
    firstVisit: "/work/file-psiq-first.webp",
  },
  bar: { cover: "/work/cover-barra.webp", reel: "/work/file-barra.webp" },
  fitness: {
    cover: "/work/cover-dance.webp",
    dance: "/work/file-dance.webp",
    duo: "/work/file-duo.webp",
    trainer: "/work/file-trainer.webp",
    rest: "/work/file-rest.webp",
  },
} as const

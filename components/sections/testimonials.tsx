import { ArtCanvas } from "@/components/art-canvas"
import { Reveal } from "@/components/motion/reveal"
import type { ArtName } from "@/lib/art"
import type { Dictionary } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

const SWATCH: ArtName[] = ["coral", "cobalt", "plum"]

/** Quotes as glass notes, set at slightly different heights like notes pinned up. */
export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials
  return (
    <section aria-labelledby="testimonials-title" className="mx-auto max-w-[1360px] px-5 pb-28 md:px-10 md:pb-40">
      <Reveal>
        <h2
          id="testimonials-title"
          className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.03em]"
        >
          {t.title}
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
        {t.items.map((item, i) => (
          <li key={item.name} className={cn(i === 1 && "md:mt-16", i === 2 && "md:mt-8")}>
            <Reveal delay={i * 120} className="h-full">
              <figure className="glass-flat flex h-full flex-col rounded-[28px] p-7 md:p-8">
                <blockquote className="flex-1 text-[1.1875rem] leading-[1.45] tracking-[-0.005em] text-ink">
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3.5">
                  <span className="size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
                    <ArtCanvas art={SWATCH[i % SWATCH.length]} seed={i * 5 + 1} width={88} height={88} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[0.875rem] text-ink-soft">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[0.875rem] text-ink-soft">{t.note}</p>
    </section>
  )
}

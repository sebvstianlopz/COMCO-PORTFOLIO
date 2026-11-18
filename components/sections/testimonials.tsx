import { ArtCanvas } from "@/components/art-canvas"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

/** Clients' words on smoked glass over COMCO's artwork, set at slightly different heights. */
export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials
  // nothing to show until COMCO supplies real reviews
  if (t.items.length === 0) return null
  return (
    <section aria-labelledby="testimonials-title" className="pb-28 md:pb-40">
      <Reveal className="mx-auto max-w-[1360px] px-5 md:px-10">
        <h2
          id="testimonials-title"
          className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.03em]"
        >
          {t.title}
        </h2>
      </Reveal>

      <div className="mt-12 p-2.5 md:mt-16 md:px-4">
        <div className="relative overflow-hidden rounded-[30px] bg-[#0b0b10] md:rounded-[40px]">
          <div aria-hidden="true" className="absolute inset-0">
            <ArtCanvas art="coral" seed={21} width={640} height={420} className="scale-110" />
          </div>
          <ul className="relative mx-auto grid max-w-[1360px] gap-3 p-3 md:grid-cols-3 md:gap-5 md:p-5 md:pb-24">
            {t.items.map((item, i) => (
              <li key={item.name} className={cn(i === 1 && "md:mt-20", i === 2 && "md:mt-10")}>
                <Reveal delay={i * 120} className="h-full">
                  <figure className="glass flex h-full flex-col rounded-[24px] p-7 md:rounded-[30px] md:p-9">
                    <blockquote className="flex-1 font-heading text-[clamp(1.375rem,2.1vw,1.75rem)] leading-[1.22] font-medium tracking-[-0.02em] text-ink">
                      <p>“{item.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-10 flex flex-col">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-[0.875rem] text-ink/70">{item.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {t.note ? <p className="mx-auto mt-6 max-w-[1360px] px-5 text-[0.875rem] text-ink-soft md:px-10">{t.note}</p> : null}
    </section>
  )
}

import { BookButton } from "@/components/booking/book-button"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/lib/i18n/types"
import { sectionIds } from "@/lib/sections"

/** Four steps on one glass rail. Numbered, because the order is the point. */
export function Process({ dict }: { dict: Dictionary }) {
  const p = dict.process
  return (
    <section
      id={sectionIds.process}
      aria-labelledby="process-title"
      className="mx-auto max-w-[1360px] scroll-mt-24 px-5 pb-28 md:px-10 md:pb-40"
    >
      <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <h2
          id="process-title"
          className="max-w-[14ch] text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1] font-semibold tracking-[-0.035em]"
        >
          {p.title}
        </h2>
        <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">{p.intro}</p>
      </Reveal>

      <ol className="relative mt-16 grid gap-10 md:mt-24 md:grid-cols-4 md:gap-8">
        {/* the rail */}
        <span
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-white/30 via-white/12 to-transparent md:top-6 md:right-0 md:bottom-auto md:left-6 md:h-px md:w-auto md:bg-gradient-to-r"
        />
        {p.steps.map((s, i) => (
          <li key={s.title} className="relative">
            <Reveal delay={i * 110} className="flex gap-7 md:block">
              <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-[#1b1c21] font-heading text-lg font-semibold tabular-nums shadow-[inset_0_1px_0_rgb(255_255_255/.16),inset_0_0_0_1px_rgb(255_255_255/.1)]">
                {i + 1}
              </span>
              <div className="pt-2.5 md:pt-0">
                <h3 className="text-xl font-semibold tracking-[-0.02em] md:mt-8">{s.title}</h3>
                <p className="mt-2 max-w-[30ch] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-16 md:mt-20">
        <BookButton lang={dict.lang}>{p.cta}</BookButton>
      </Reveal>
    </section>
  )
}

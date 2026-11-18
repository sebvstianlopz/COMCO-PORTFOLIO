"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import GlassFolder from "@/components/ui/glass-folder-cards"
import { BookButton } from "@/components/booking/book-button"
import { Reveal } from "@/components/motion/reveal"
import { useNear, useWidth } from "@/hooks/use-width"
import { art } from "@/lib/art"
import type { CaseStudy, Dictionary } from "@/lib/i18n/types"
import { sectionIds } from "@/lib/sections"
import { cn } from "@/lib/utils"
import { toFolderFiles } from "./services"

const FOLDER_RATIO = 340 / 326

export function Work({ dict }: { dict: Dictionary }) {
  const w = dict.work
  return (
    <section
      id={sectionIds.work}
      aria-labelledby="work-title"
      className="mx-auto max-w-[1360px] scroll-mt-24 px-5 pb-28 md:px-10 md:pb-40"
    >
      <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <h2
          id="work-title"
          className="max-w-[15ch] text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1] font-semibold tracking-[-0.035em]"
        >
          {w.title}
        </h2>
        <div>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">{w.intro}</p>
          {/* the headline figures, as one line of evidence rather than a stats block */}
          <p className="mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-soft">
            {dict.proof.stats.map((st, i) => (
              <span key={st.label}>
                {i > 0 ? " · " : null}
                <span className="font-semibold text-ink tabular-nums">
                  {(st.prefix ?? "") + st.value + (st.suffix ?? "")}
                </span>{" "}
                {st.label}
              </span>
            ))}
            <span className="mt-1 block text-[0.8125rem]">{dict.proof.note}</span>
          </p>
        </div>
      </Reveal>

      <ol className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
        {w.cases.map((c, i) => (
          <CaseRow key={c.id} study={c} index={i} dict={dict} />
        ))}
      </ol>

      <Reveal className="mt-24 flex flex-col items-start gap-4 md:mt-32 md:flex-row md:items-center md:gap-6">
        <BookButton lang={dict.lang}>{w.cta}</BookButton>
        <p className="text-[0.875rem] text-ink-soft">{w.note}</p>
      </Reveal>
    </section>
  )
}

function CaseRow({ study, index, dict }: { study: CaseStudy; index: number; dict: Dictionary }) {
  const w = dict.work
  const [ref, width] = useWidth<HTMLDivElement>()
  const near = useNear(ref, "500px")
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<number | null>(null)
  const files = React.useMemo(() => toFolderFiles(study.files), [study.files])
  const detailId = `${study.id}-case-detail`
  const chosen = selected === null ? null : study.files[selected]
  const flip = index % 2 === 1

  return (
    <li className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 lg:gap-24">
      <div className={cn("w-full", flip && "md:order-2")}>
        <div ref={ref} className="relative mx-auto w-full max-w-[420px]" style={{ aspectRatio: FOLDER_RATIO }}>
          {width && near ? (
            <GlassFolder
              label={study.client}
              meta={study.sector}
              tone="dark"
              art={art[study.art]}
              image={study.image}
              seed={index * 11 + 5}
              files={files}
              action="none"
              labelPlacement="bottom-left"
              className="folder-peek"
              width={width}
              open={open}
              onOpenChange={setOpen}
              onFileSelect={(_, i) => setSelected(i)}
              strings={dict.folder}
            />
          ) : null}
        </div>
      </div>

      <Reveal className={cn(flip && "md:order-1")}>
        <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
          {study.client}
        </h3>
        <p className="mt-1 text-[0.9375rem] text-ink-soft">{study.sector}</p>
        <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-ink/80">{study.summary}</p>

        <dl className="mt-8 border-t border-white/10">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-white/10 py-4"
            >
              <dt className="text-[0.9375rem] text-ink-soft">{m.label}</dt>
              <dd className="flex items-baseline gap-3 tabular-nums">
                <span className="text-[0.9375rem] text-ink-soft">
                  <span className="sr-only">{w.before}: </span>
                  {m.before}
                </span>
                <ArrowRight aria-hidden="true" className="size-4 self-center text-ink-soft" />
                <span className="font-heading text-2xl font-semibold tracking-[-0.02em] text-ink">
                  <span className="sr-only">{w.after}: </span>
                  {m.after}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={study.client}>
          {study.files.map((f, i) => (
            <li key={f.name}>
              <button
                type="button"
                aria-pressed={selected === i}
                aria-controls={detailId}
                onClick={() => {
                  setSelected(selected === i ? null : i)
                  setOpen(true)
                }}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[0.875rem] transition-colors duration-300",
                  selected === i
                    ? "bg-ink text-graphite"
                    : "bg-white/[0.06] text-ink/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/.1)] hover:bg-white/[0.1]",
                )}
              >
                {f.name}
              </button>
            </li>
          ))}
        </ul>

        <div id={detailId} aria-live="polite" className="mt-4">
          {chosen ? (
            <p key={chosen.name} className="max-w-[48ch] animate-in leading-relaxed text-ink/80 duration-500 fade-in-0 slide-in-from-bottom-1">
              <span className="font-semibold text-ink">{chosen.name}.</span> {chosen.detail}
            </p>
          ) : null}
        </div>
      </Reveal>
    </li>
  )
}

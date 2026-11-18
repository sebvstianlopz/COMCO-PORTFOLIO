"use client"

import * as React from "react"
import GlassFolder, { type FolderFile } from "@/components/ui/glass-folder-cards"
import { BookButton } from "@/components/booking/book-button"
import { Reveal } from "@/components/motion/reveal"
import { useNear, useWidth } from "@/hooks/use-width"
import { art } from "@/lib/art"
import type { Dictionary, FolderItem, Service } from "@/lib/i18n/types"
import { sectionIds } from "@/lib/sections"
import { cn } from "@/lib/utils"

/** The folder's own proportions: 340 wide, 272 tall plus 54 of headroom. */
const FOLDER_RATIO = 340 / 326

export function toFolderFiles(items: FolderItem[]): FolderFile[] {
  return items.map((f) => ({ name: f.name, meta: f.meta, art: f.art ? art[f.art] : undefined, image: f.image }))
}

export function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services
  return (
    <section
      id={sectionIds.services}
      aria-labelledby="services-title"
      className="mx-auto max-w-[1360px] scroll-mt-24 px-5 pt-32 pb-28 md:px-10 md:pt-44 md:pb-40"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <h2
          id="services-title"
          className="max-w-[16ch] text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1] font-semibold tracking-[-0.035em]"
        >
          {s.title}
        </h2>
        <div>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">{s.intro}</p>
          <p className="mt-4 text-[0.9375rem] text-ink">{s.hint}</p>
        </div>
      </div>

      <ul className="mt-20 grid gap-x-10 gap-y-20 md:mt-28 md:grid-cols-2 xl:grid-cols-3">
        {s.services.map((service, i) => (
          <ServiceFolder key={service.id} service={service} index={i} dict={dict} />
        ))}
      </ul>

      <Reveal className="mt-20 md:mt-24">
        <BookButton lang={dict.lang}>{s.cta}</BookButton>
      </Reveal>
    </section>
  )
}

function ServiceFolder({ service, index, dict }: { service: Service; index: number; dict: Dictionary }) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const near = useNear(ref, "500px")
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<number | null>(null)
  const files = React.useMemo(() => toFolderFiles(service.files), [service.files])
  const detailId = `${service.id}-detail`
  const chosen = selected === null ? null : service.files[selected]

  return (
    <li className="flex flex-col">
      <div ref={ref} className="relative mx-auto w-full max-w-[360px]" style={{ aspectRatio: FOLDER_RATIO }}>
        {width && near ? (
          <GlassFolder
            label={service.label}
            meta={service.meta}
            tone="dark"
            art={art[service.art]}
            seed={index * 7 + 3}
            files={files}
            action="none"
            width={width}
            appearDelay={index * 140}
            className="folder-peek"
            open={open}
            onOpenChange={setOpen}
            onFileSelect={(_, i) => setSelected(i)}
            strings={dict.folder}
          />
        ) : null}
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-1 flex-col">
        <p className="text-lg leading-snug text-ink">{service.outcome}</p>

        {/* the same files as text: scannable without opening, and a way in for keyboards */}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={service.label}>
          {service.files.map((f, i) => (
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

        <div id={detailId} aria-live="polite">
          {chosen ? (
            <div key={chosen.name} className="mt-5 animate-in duration-500 fade-in-0 slide-in-from-bottom-1">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                {chosen.name} <span className="text-base font-normal text-ink-soft">· {chosen.meta}</span>
              </h3>
              <p className="mt-2 leading-relaxed text-ink/80">{chosen.detail}</p>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  )
}

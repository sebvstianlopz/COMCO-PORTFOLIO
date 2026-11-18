import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/lib/i18n/types"

export function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq
  return (
    <section
      aria-labelledby="faq-title"
      className="mx-auto grid max-w-[1360px] gap-10 px-5 pb-28 md:px-10 md:pb-40 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
    >
      <Reveal>
        <h2
          id="faq-title"
          className="max-w-[12ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.03em] lg:sticky lg:top-28"
        >
          {f.title}
        </h2>
      </Reveal>
      <Accordion type="single" collapsible className="border-t border-white/10">
        {f.items.map((item, i) => (
          <AccordionItem key={item.q} value={`q${i}`} className="border-b border-white/10 not-last:border-white/10">
            <AccordionTrigger className="items-center rounded-none py-6 text-left text-lg font-medium tracking-[-0.01em] hover:no-underline md:text-xl [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-ink-soft">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="max-w-[60ch] pb-6 text-base leading-relaxed text-ink/75 md:text-[1.0625rem]">
              <p>{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

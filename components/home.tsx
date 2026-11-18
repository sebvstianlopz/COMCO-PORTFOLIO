import { JsonLd } from "@/components/json-ld"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { Booking } from "@/components/sections/booking"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { Proof } from "@/components/sections/proof"
import { Services } from "@/components/sections/services"
import { SiteFooter } from "@/components/sections/site-footer"
import { SiteHeader } from "@/components/sections/site-header"
import { StickyBookBar } from "@/components/sections/sticky-book-bar"
import { Testimonials } from "@/components/sections/testimonials"
import { Work } from "@/components/sections/work"
import type { Dictionary } from "@/lib/i18n/types"

/** The whole page for one language. Every section ends by pointing at the booking. */
export function Home({ dict }: { dict: Dictionary }) {
  return (
    <>
      <JsonLd dict={dict} />
      <SmoothScroll />
      <SiteHeader dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Proof dict={dict} />
        <Services dict={dict} />
        <Work dict={dict} />
        <Process dict={dict} />
        <Testimonials dict={dict} />
        <Booking dict={dict} />
        <Faq dict={dict} />
      </main>
      <SiteFooter dict={dict} />
      <StickyBookBar dict={dict} />
    </>
  )
}

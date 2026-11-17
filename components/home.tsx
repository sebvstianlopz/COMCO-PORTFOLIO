import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import type { Dictionary } from "@/lib/i18n/types"

/** The whole page for one language. */
export function Home({ dict }: { dict: Dictionary }) {
  return (
    <>
      <SiteHeader dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
      </main>
    </>
  )
}

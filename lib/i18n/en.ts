import { media } from "@/lib/media"
import type { Dictionary } from "./types"

/**
 * English copy. Everything marked "example" (clients, numbers, quotes) is a
 * placeholder until COMCO supplies the real content.
 */
export const en: Dictionary = {
  lang: "en",
  meta: {
    title: "COMCO · Social media for local businesses",
    description:
      "Strategy, content creation and full social media management for local businesses. Book a free 30-minute call.",
    ogAlt: "COMCO, social media manager for local businesses",
  },
  nav: {
    skip: "Skip to content",
    home: "COMCO, home",
    services: "Services",
    work: "Work",
    process: "Process",
    contact: "Contact",
    book: "Book a call",
    language: "Language",
    switchTo: "Ver en español",
  },
  hero: {
    tab: "COMCO",
    tabMeta: "Social media · local businesses",
    title: "Your business, impossible to ignore.",
    lead: "Strategy, content and social media management for local businesses. I handle all of it, so you can look after your customers.",
    primary: "Book a free call",
    secondary: "See services",
    note: "30 min · Free · No commitment",
    files: ["Reel", "Carousel", "Story"],
  },
  proof: {
    // No real figures yet: the line in the Work section stays hidden while empty.
    stats: [],
    note: "",
  },
  services: {
    title: "Everything your social media needs, in one person's hands.",
    intro:
      "Strategy, content and event coverage, without coordinating an agency, a photographer and a community manager separately.",
    hint: "Open a folder to see what's included",
    cta: "Book a call",
    back: "Back",
    services: [
      {
        id: "gestion",
        label: "Social media management",
        meta: "Strategy · Community",
        art: "cobalt",
        outcome: "Your social media with a clear plan, posted on time, and someone looking after your customers.",
        files: [
          {
            name: "Content strategy",
            meta: "Plan",
            art: "cobalt",
            detail:
              "Together we decide what to say, to whom and in what format, based on what your business needs to sell.",
          },
          {
            name: "Planning and scheduling",
            meta: "Calendar",
            detail: "A monthly calendar with every post ready and scheduled for the best time.",
          },
          {
            name: "Community management",
            meta: "Daily",
            detail: "I answer comments and messages in your voice, so no customer question goes unanswered.",
          },
        ],
      },
      {
        id: "contenido",
        label: "Content creation",
        meta: "Photo · Video · Copy",
        art: "coral",
        outcome: "Content that looks as good as your business, shot, edited and written by me.",
        files: [
          {
            name: "Photo and video",
            meta: "Shoot",
            image: media.clinic.closeup,
            detail: "Photo and video shoots at your business: your services, your space and your team.",
          },
          {
            name: "Video editing",
            meta: "Reels",
            image: media.bar.reel,
            detail:
              "I edit short reels with rhythm, on-screen text and captions, so they work even with the sound off.",
          },
          {
            name: "Copy and captions",
            meta: "Writing",
            detail: "The words for every post, in your voice and with a clear call to action.",
          },
        ],
      },
      {
        id: "eventos",
        label: "Event coverage",
        meta: "Photo and video",
        art: "plum",
        outcome: "Your event told on social media while it happens and after, so people keep talking about it.",
        files: [
          {
            name: "Event photo and video",
            meta: "Live",
            image: media.fitness.duo,
            detail: "I cover your event in photo and video: the atmosphere, the people and the moments that matter.",
          },
          {
            name: "Event recap",
            meta: "Recap",
            image: media.fitness.dance,
            detail: "A recap reel and a photo carousel to post after the event.",
          },
        ],
      },
    ],
  },
  work: {
    title: "Businesses that no longer go unnoticed.",
    intro: "Each folder is a project. Open it to see the content.",
    note: "",
    before: "Before",
    after: "After",
    cta: "I want content like this",
    back: "Back",
    cases: [
      {
        id: "madres",
        client: "Mother's Day",
        sector: "Creative campaign",
        art: "coral",
        image: media.mama.cover,
        summary: "A creative concept for Mother's Day, from art direction to final design.",
        files: [
          {
            name: "The gift",
            meta: "Photo",
            image: media.mama.gift,
            detail: "Flowers and a handwritten card: the whole idea of the campaign fits in a single gesture.",
          },
          {
            name: "Generations",
            meta: "Photo",
            image: media.mama.generations,
            detail: "Small hands and caring hands: the campaign told through its details.",
          },
          {
            name: "The details",
            meta: "Photo",
            image: media.mama.detail,
            detail: "Close-ups for carousels and stories, with the same palette across the whole campaign.",
          },
        ],
        metrics: [],
      },
      {
        id: "estetica",
        client: "Aesthetics centre",
        sector: "Beauty and skincare",
        art: "cobalt",
        image: media.clinic.cover,
        summary: "Photos and reels for an aesthetics centre: the treatments, the equipment and the people behind them.",
        files: [
          {
            name: "Treatments",
            meta: "Photo",
            image: media.clinic.treatment,
            detail: "Every treatment photographed in the room, so clients see exactly what will be done.",
          },
          {
            name: "Equipment",
            meta: "Photo",
            image: media.clinic.equipment,
            detail: "The centre's machines, photographed to convey trust and technology.",
          },
          {
            name: "The team",
            meta: "Photo",
            image: media.clinic.team,
            detail: "The centre's specialists at work: trust starts with knowing who will look after you.",
          },
          {
            name: "Skincare routine",
            meta: "Reel",
            image: media.clinic.reel,
            detail: "An educational reel with the aesthetician: useful tips that people save and share.",
          },
        ],
        metrics: [],
      },
      {
        id: "psiquiatria",
        client: "Psychiatry practice",
        sector: "Mental health",
        art: "plum",
        image: media.psychiatry.cover,
        summary: "Videos for the launch of a psychiatry service: warm, clear, and unafraid to talk about the subject.",
        files: [
          {
            name: "Welcome",
            meta: "Reel",
            image: media.psychiatry.welcome,
            detail: "The psychiatrist introduces the practice and the new service in his own words.",
          },
          {
            name: "Your first visit",
            meta: "Reel",
            image: media.psychiatry.firstVisit,
            detail:
              "What to expect from a first visit to a psychiatrist, explained by the doctor herself to ease the nerves.",
          },
        ],
        metrics: [],
      },
      {
        id: "fitness",
        client: "Fitness studio",
        sector: "Group class",
        art: "cobalt",
        image: media.fitness.cover,
        summary: "Class photography: the energy of the group, the coach and the quiet moment at the end.",
        files: [
          {
            name: "The community",
            meta: "Photo",
            image: media.fitness.duo,
            detail:
              "Portraits of members mid-class: nothing convinces someone to try a studio like seeing people like them having a good time.",
          },
          {
            name: "The coach",
            meta: "Photo",
            image: media.fitness.trainer,
            detail:
              "The coach in the middle of a class, in the studio's own light, so you know who you'll meet before you walk in.",
          },
          {
            name: "The cool-down",
            meta: "Photo",
            image: media.fitness.rest,
            detail:
              "The quiet moment at the end of a session: the studio isn't only hard work, and that's worth showing too.",
          },
        ],
        metrics: [],
      },
      {
        id: "barra",
        client: "Cocktail bar",
        sector: "Hospitality",
        art: "coral",
        image: media.bar.cover,
        summary: "A seasonal reel to launch the new autumn cocktail menu.",
        files: [
          {
            name: "Fall Cocktails",
            meta: "Reel",
            image: media.bar.reel,
            detail: "A short, warm reel to launch the autumn cocktails, made to work with the sound off.",
          },
        ],
        metrics: [],
      },
    ],
  },
  process: {
    title: "Getting started is one call.",
    intro: "No long contracts, no endless forms. This is how I work from day one.",
    steps: [
      {
        title: "Free call",
        text: "30 minutes to get to know your business and your goals, and see if we're a fit.",
      },
      {
        title: "Strategy",
        text: "I present a clear plan: what I'll post, where, and the results I'm aiming for.",
      },
      {
        title: "Content",
        text: "I shoot, photograph and design the month's content, with your approval.",
      },
      {
        title: "Publishing & results",
        text: "I publish, manage the community and send you a report every month.",
      },
    ],
    cta: "Book the first call",
  },
  testimonials: {
    title: "What the businesses I work with say.",
    note: "",
    // Hidden until real reviews are supplied.
    items: [],
  },
  booking: {
    title: "Let's talk about your business.",
    lead: "Pick a slot in my calendar. In 30 minutes you'll know what I'd do with your social media, even if we don't end up working together.",
    badges: ["Free", "30 minutes", "No commitment"],
    open: "Open the calendar",
    loading: "Loading the calendar…",
    fallback: "Rather write?",
    emailMe: "Send me an email",
    thanksTitle: "You're booked!",
    thanksText: "You'll get an email with the details. Talk soon.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on what you need: strategy only, content, or full management. On the free call I look at your case and send you a fixed quote, with no surprises.",
      },
      {
        q: "Is there a minimum contract?",
        a: "No. I work month to month. If you don't see the value, you can stop whenever you like.",
      },
      {
        q: "Do you only work in my city?",
        a: "I work in person with businesses in my city and remotely with businesses anywhere. In-person content shoots are arranged around your location.",
      },
      {
        q: "Which platforms do you work on?",
        a: "Mainly Instagram, TikTok and Facebook, which is where a local business's customers are. If yours needs another one, tell me and I'll look into it.",
      },
      {
        q: "When will I see results?",
        a: "The first improvements (content, consistency, image) show from the first month. Growth in reach and customers usually shows between the second and third month.",
      },
      {
        q: "How do I pay?",
        a: "I send you an invoice every month, which you can pay with PayPal or by bank transfer.",
      },
    ],
  },
  footer: {
    title: "Ready for your business to be seen?",
    cta: "Book a free call",
    contact: "Contact",
    follow: "Follow",
    pay: "Pay an invoice",
    payNote: "Secure payment with PayPal",
    rights: "© 2026 COMCO. All rights reserved.",
    placeholderNote: "Site in progress: contact links are provisional.",
  },
  folder: {
    open: "Open {label}, {count}",
    close: "Close {label}, {count}",
    countOne: "{n} file",
    countOther: "{n} files",
    contents: "{label} contents",
  },
}

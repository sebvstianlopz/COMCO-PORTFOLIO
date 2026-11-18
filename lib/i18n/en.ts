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
    stats: [
      { value: 3, suffix: "×", label: "more reach on average in 90 days" },
      { value: 40, suffix: "+", label: "local businesses supported" },
      { value: 120, suffix: "", label: "pieces of content a month" },
      { value: 5, suffix: " years", label: "managing social media" },
    ],
    note: "Example figures: they will be replaced with real results.",
  },
  services: {
    title: "Everything your social media needs, in one person's hands.",
    intro:
      "Strategy, content and day-to-day management, without coordinating an agency, a photographer and a community manager separately.",
    hint: "Open a folder to see what's included",
    cta: "Book a call",
    back: "Back",
    services: [
      {
        id: "strategy",
        label: "Strategy",
        meta: "Plan and metrics",
        art: "cobalt",
        outcome: "You know what to post, when and why, with goals you can measure.",
        files: [
          {
            name: "Content plan",
            meta: "Monthly",
            art: "cobalt",
            detail: "A calendar of topics, formats and dates, built around what your business needs to sell.",
          },
          {
            name: "Profile audit",
            meta: "Kick-off",
            detail: "I review your profiles, your competitors and your audience to see what works, what doesn't and where the opportunity is.",
          },
          {
            name: "Results report",
            meta: "Monthly",
            detail: "Reach, followers, messages and new customers: what matters, explained without jargon, with next steps.",
          },
        ],
      },
      {
        id: "content",
        label: "Content",
        meta: "Reels · Photo · Design",
        art: "coral",
        outcome: "Content that looks as good as your business, shot and edited by me.",
        files: [
          {
            name: "Photography",
            meta: "Shoot",
            art: "plum",
            detail: "Photo shoots of your products, your space and your team, with lighting and styling that fit your brand.",
          },
          {
            name: "Design & carousels",
            meta: "Templates",
            art: "cobalt",
            detail: "Carousels, covers and graphics in your visual identity, so every post is recognisable at a glance.",
          },
          {
            name: "Reels",
            meta: "Video",
            art: "coral",
            detail: "I shoot and edit short reels designed to reach people near you and turn them into customers.",
          },
        ],
      },
      {
        id: "management",
        label: "Full management",
        meta: "I handle it",
        art: "plum",
        outcome: "Your social media runs every week without you having to touch it.",
        files: [
          {
            name: "Check-ins",
            meta: "Monthly",
            art: "plum",
            detail: "One meeting a month to review results and adjust the plan. You decide, I deliver.",
          },
          {
            name: "Community",
            meta: "Daily",
            detail: "I reply to comments and messages in your voice, so no customer question goes unanswered.",
          },
          {
            name: "Publishing",
            meta: "Weekly",
            detail: "I schedule and publish everything at the best time, on Instagram, TikTok and Facebook.",
          },
        ],
      },
    ],
  },
  work: {
    title: "Businesses that no longer go unnoticed.",
    intro: "Each folder is a client. Open it to see the content and what changed.",
    note: "Example cases: they will be replaced with real clients.",
    before: "Before",
    after: "After",
    cta: "I want results like this",
    back: "Back",
    cases: [
      {
        id: "cafe",
        client: "Neighbourhood Café",
        sector: "Café",
        art: "coral",
        summary: "From a dormant profile to the go-to café in its area on Instagram.",
        files: [
          { name: "Opening reel", meta: "Reel", art: "coral", detail: "A reel of the first hour of the day: coffee, oven and team. The most watched video on the profile." },
          { name: "Seasonal menu", meta: "Carousel", art: "cobalt", detail: "A carousel of the autumn menu, designed to be saved and shared." },
          { name: "Results", meta: "90 days", detail: "Reach, profile visits and bookings by direct message, compared with the previous three months." },
        ],
        metrics: [
          { label: "Monthly reach", before: "3.1K", after: "12.4K" },
          { label: "Messages a month", before: "6", after: "41" },
          { label: "Followers", before: "820", after: "2.9K" },
        ],
      },
      {
        id: "gym",
        client: "Strength Studio",
        sector: "Gym",
        art: "cobalt",
        summary: "A content strategy that filled the morning classes.",
        files: [
          { name: "Technique series", meta: "Reels", art: "cobalt", detail: "A weekly technique series with the studio's coaches." },
          { name: "Team stories", meta: "Stories", art: "plum", detail: "Daily behind-the-scenes stories from the studio to build trust." },
          { name: "Results", meta: "60 days", detail: "Trial classes booked from Instagram and attendance at the morning classes." },
        ],
        metrics: [
          { label: "Trial classes", before: "4", after: "27" },
          { label: "Monthly reach", before: "5.6K", after: "19K" },
          { label: "Morning occupancy", before: "38%", after: "81%" },
        ],
      },
      {
        id: "salon",
        client: "Lumen Salon",
        sector: "Hair salon",
        art: "plum",
        summary: "Before-and-after content that turned the diary into a waiting list.",
        files: [
          { name: "Before & after", meta: "Reels", art: "plum", detail: "Transformations filmed in the salon, edited to land in seconds." },
          { name: "Care guide", meta: "Carousel", art: "coral", detail: "Colour-care tips that clients save and share." },
          { name: "Results", meta: "90 days", detail: "Appointments booked from social media and growth of the account in the city." },
        ],
        metrics: [
          { label: "Bookings from social", before: "9", after: "58" },
          { label: "Saves a month", before: "40", after: "610" },
          { label: "Local followers", before: "1.2K", after: "4.7K" },
        ],
      },
    ],
  },
  process: {
    title: "Getting started is one call.",
    intro: "No long contracts, no endless forms. This is how I work from day one.",
    steps: [
      { title: "Free call", text: "30 minutes to get to know your business and your goals, and see if we're a fit." },
      { title: "Strategy", text: "I present a clear plan: what I'll post, where, and the results I'm aiming for." },
      { title: "Content", text: "I shoot, photograph and design the month's content, with your approval." },
      { title: "Publishing & results", text: "I publish, manage the community and send you a report every month." },
    ],
    cta: "Book the first call",
  },
  testimonials: {
    title: "What the businesses I work with say.",
    note: "Example testimonials: they will be replaced with real reviews.",
    items: [
      {
        quote: "Finally my social media looks like my café. And best of all, I don't have to think about it anymore.",
        name: "Laura M.",
        role: "Neighbourhood Café",
      },
      {
        quote: "In two months we filled the morning classes. Every week new people come in saying they saw us on Instagram.",
        name: "Javier R.",
        role: "Strength Studio",
      },
      {
        quote: "He understands the business before he films anything. You can tell in every post.",
        name: "Carmen T.",
        role: "Lumen Salon",
      },
    ],
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
    placeholderNote: "Site in progress: clients, figures and testimonials are examples.",
  },
  folder: {
    open: "Open {label}, {count}",
    close: "Close {label}, {count}",
    countOne: "{n} file",
    countOther: "{n} files",
    contents: "{label} contents",
  },
}

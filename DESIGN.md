---
name: COMCO
description: Social media for local businesses, shown as smoked-glass folders over liquid artwork on a graphite ground.
colors:
  graphite: "#111215"
  graphite-raised: "#17181c"
  graphite-lifted: "#1b1c21"
  stage-black: "#0b0b10"
  ink: "#eeece8"
  ink-soft: "#a9a7a2"
  signal: "#ff7a59"
  alarm: "#ff6b5e"
  art-cobalt: "#3552d8"
  art-coral: "#ff6a45"
  art-plum: "#6b3c86"
  art-rose: "#d576a8"
typography:
  display:
    fontFamily: "Funnel Display, Funnel Sans, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.6rem, 8.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Funnel Display, Funnel Sans, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline-sm:
    fontFamily: "Funnel Display, Funnel Sans, ui-sans-serif, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  quote:
    fontFamily: "Funnel Display, Funnel Sans, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.375rem, 2.1vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Funnel Display, Funnel Sans, ui-sans-serif, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "Funnel Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  body:
    fontFamily: "Funnel Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  label:
    fontFamily: "Funnel Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  file: "14px"
  tab: "18px"
  card: "24px"
  pane: "32px"
  stage: "40px"
  pill: "999px"
spacing:
  stage-inset-sm: "10px"
  stage-inset: "16px"
  gutter-sm: "20px"
  gutter: "40px"
  section-sm: "112px"
  section: "160px"
  container: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
    typography: "{typography.body-lead}"
  button-primary-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "0 17.6px"
    height: "40px"
  button-glass:
    backgroundColor: "rgb(255 255 255 / 0.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-glass-hover:
    backgroundColor: "rgb(255 255 255 / 0.14)"
  chip-file:
    backgroundColor: "rgb(255 255 255 / 0.06)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-file-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-bar:
    backgroundColor: "rgb(22 23 27 / 0.62)"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    height: "56px"
  glass-card:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "36px"
  step-marker:
    backgroundColor: "{colors.graphite-lifted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "48px"
---

# Design System: COMCO

## Overview

**Creative North Star: "Smoked Glass over Liquid Light"**

COMCO is a dark, quiet room with one bright window in it. The ground is graphite, never black; the material is smoked glass with a white hairline rim and a tint that thickens toward the bottom; and every bit of colour on the page comes from COMCO's own generated liquid artwork (cobalt streaks, coral and plum marbles) seen behind or through that glass. The interface itself is colourless: off-white ink, soft-grey secondary text, white hairlines.

The organising object is the folder. Services and client cases are glass folders whose files peek above the rim at rest, rise on hover and focus, and fan out when opened; the hero is a folder too, a glass pane with a tab that reads COMCO and three post files tucked behind it. Large art "stages" (inset from the viewport, very rounded) hold the hero, the testimonials and the booking frame; between them the page is plain graphite with generous vertical air and big tight-tracked Funnel Display headlines.

The site is dark only, designed for a phone held in a shop or café, and it is calm: one primary action (an off-white pill that books a call) recurs at the close of every section, motion is slow and settles without bounce, and content is visible by default.

**Key Characteristics:**
- Graphite ground (#111215) with near-black art stages (#0b0b10); no light theme.
- One material, smoked glass: backdrop blur, bottom-weighted dark tint, white inset rim with a brighter top edge.
- Colour lives only inside the generated liquid artwork; the UI chrome is achromatic plus one coral signal for focus and tiny highlights.
- Folders as the signature object: peek at rest, rise on intent, fan open on click.
- Funnel Display headlines set tight (-0.03em to -0.04em) and large; Funnel Sans for everything else.
- Pills for every action: off-white primary, glass secondary.

## Colors

An achromatic graphite-and-ink interface that borrows its only colour from the artwork it frames.

### Primary
- **Bone Ink** (ink): the primary text colour and, inverted, the primary action. The off-white pill (ink on graphite text) is the brightest flat surface on any screen.

### Secondary
- **Ember Signal** (signal): a single coral drawn from the artwork. Used for the focus ring (2px outline, 3px offset), text selection, link hover in the footer, and the check marks on booking badges. Never a fill for large areas, never a button.

### Tertiary (artwork only)
- **Cobalt Streak** (art-cobalt), **Coral Marble** (art-coral), **Plum Marble** (art-plum), **Rose Vein** (art-rose): the key hues of the generated art recipes in `lib/art.ts` (signal for the hero, cobalt for strategy and booking, coral for content and testimonials, plum for management). They appear only rendered inside an art canvas behind or through glass, never as flat UI fills, text or borders.

### Neutral
- **Graphite** (graphite): the page ground and the scrollbar track.
- **Raised Graphite** (graphite-raised): card surface for shadcn primitives.
- **Lifted Graphite** (graphite-lifted): popovers and the numbered process markers.
- **Stage Black** (stage-black): the backing colour of every art stage, visible while the canvas paints.
- **Soft Ink** (ink-soft): secondary text, metadata, inactive nav links, captions.
- **White hairlines**: borders and dividers are white at low alpha, not grey hexes: rgb(255 255 255 / 0.1) for dividers and rims, 0.14 for inputs, 0.06 to 0.08 for quiet fills, 0.12 for the active language chip.
- **Alarm** (alarm): destructive state only; unused on the marketing page.

### Named Rules
**The Colour Comes From the Art Rule.** No hue appears in the interface except inside a liquid-art canvas, plus the one coral signal. If a new section wants colour, it gets an art stage, not a coloured background.

**The Graphite Not Black Rule.** The page ground is #111215. Pure black is reserved for nothing; even the art stage backing is #0b0b10.

## Typography

**Display Font:** Funnel Display (via `next/font`, falls back to Funnel Sans, ui-sans-serif)
**Body Font:** Funnel Sans (falls back to ui-sans-serif, system-ui)

**Character:** One family in two cuts. Funnel Display is compact and characterful at size; set tight and heavy (600) it reads as confident without shouting. Funnel Sans carries body text with stylistic sets ss01 and cv11 on globally.

### Hierarchy
- **Display** (600, clamp(2.6rem, 8.4vw, 6rem), 0.94): the hero headline only, on the glass pane, max 11ch. The booking and footer closers use a near sibling (clamp up to 4.75rem / 5.5rem, 0.96 to 0.98, -0.04em).
- **Headline** (600, clamp(2.25rem, 5.2vw, 4.25rem), 1): section titles for services, work, process; max 14 to 16ch.
- **Headline Small** (600, clamp(2rem, 4vw, 3.25rem), 1.04): lighter sections (testimonials, FAQ).
- **Quote** (Funnel Display 500, clamp(1.375rem, 2.1vw, 1.75rem), 1.22): testimonial pull quotes on glass.
- **Title** (600, 1.25rem, -0.02em): step titles, chosen-file detail headings. Case names step up to clamp(1.75rem, 3vw, 2.5rem).
- **Body Lead** (400, 1.125rem, 1.625): section intros and leads, max 40 to 46ch, usually in Soft Ink or ink at 80%.
- **Body** (400, 0.9375rem to 1rem, 1.625): running text, metric labels, FAQ answers (max 60ch).
- **Label** (400 to 600, 0.8125rem to 0.875rem): notes, captions, folder meta, language switch. Sentence case, no tracking.

### Named Rules
**The Tight Display Rule.** Every Funnel Display heading at 2rem and up tracks negative (-0.03em to -0.04em) and sits at line-height 1 or below; h1 to h3 use `text-wrap: balance`, paragraphs `pretty`.

**The Sentence Case Rule.** Labels, notes and metadata stay sentence case at normal tracking. Nothing on the page is set in spaced uppercase.

**The Tabular Figures Rule.** Metrics, step numbers and before/after values use tabular numerals; the "after" figure is Funnel Display 600 at 1.5rem in ink.

## Layout

A single centred column, 1360px max, with 20px side gutters on phones and 40px from `md`. Sections are separated by bottom padding alone (112px, 160px from `md`); there are no dividers between sections except the footer's top hairline.

Section openers use a two-column split at `lg`: headline left (1.25fr), intro right (1fr), bottom-aligned with a 64px gap. Below `lg` they stack with 24px between.

Art stages break the column: they are inset only 10px (16px from `md`) from the viewport edge, so they read as large objects lying on the graphite. The hero stage is `100svh` (min 560px, 700px from `md`); the glass front pane sits inside its lower part, inset 10px / 20px.

Folders sit in a 2-column (`md`) then 3-column (`xl`) grid for services, max 360px each; client cases alternate folder-left and folder-right rows (0.9fr / 1.1fr) with 96 to 128px between rows. Testimonial cards stagger vertically (second card down 80px, third 40px) on desktop.

On phones the secondary hero pill becomes an inline text link, and a sticky glass bar with the booking pill appears once the hero has scrolled away, stepping aside while the booking section is on screen.

## Elevation & Depth

Depth is optical, not lifted: it comes from layering glass over artwork. The glass recipe is backdrop blur (24px, saturate 1.5) over a vertical gradient from rgb(17 18 21 / 0.28) at the top to rgb(12 13 15 / 0.86) at the bottom, with two inset rims (a 1px rgb(255 255 255 / 0.42) top highlight and a 1px rgb(255 255 255 / 0.16) all-round hairline) and one long soft drop shadow beneath. A flatter variant (18px blur, rgb(22 23 27 / 0.62)) serves the header and the sticky bar.

### Shadow Vocabulary
- **Glass drop** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.7)`): beneath every full glass panel.
- **Glass rim** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.42), inset 0 0 0 1px rgb(255 255 255 / 0.16)`): the edge of the glass material.
- **Pill lift** (`box-shadow: inset 0 1px 0 #fff, inset 0 -2px 6px rgb(0 0 0 / 0.12), 0 14px 30px -12px rgb(0 0 0 / 0.8)`): the off-white primary pill at rest; the outer shadow grows to `0 20px 36px -12px rgb(0 0 0 / 0.85)` on hover.
- **File drop** (`box-shadow: 0 18px 40px -16px rgb(0 0 0 / 0.8)` with a 1px white/20 ring): post files peeking out of the hero pane.
- **Marker rim** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.16), inset 0 0 0 1px rgb(255 255 255 / 0.1)`): small solid objects such as process step markers.

### Named Rules
**The One Material Rule.** Every raised surface is the same smoked glass (full or flat). A new panel does not invent its own blur, tint or border.

**The Bright Top Edge Rule.** Light falls from above: rims and pills carry a brighter 1px inset at the top edge; nothing is lit from below or the side.

## Shapes

Everything is soft and generous. Art stages are the largest radius (30px on phones, 40px from `md`); glass panes inside them step down (24px / 32px) so nested corners stay concentric; testimonial cards use 24px / 30px. Post files are 14px / 18px. Every action, chip, nav bar and badge is a full pill (999px). The base shadcn radius is 0.875rem.

The folder tab is the one asymmetric silhouette: a 46px-tall tab with 18px top corners on the pane's top-left, outlined with the panel as one continuous drawn rim (a top-bright white gradient stroke, 2.5px), the panel's own top-left corner left square where the tab joins it. Dividers are 1px white/10 hairlines; there are no other borders.

## Components

### Buttons
Tactile and calm: a solid off-white pill that rises 2px under the pointer and presses to 0.97 when tapped.
- **Shape:** full pill (999px), 52px tall, 24px side padding; small size 40px tall, 17.6px padding, 0.9375rem text.
- **Primary:** ink background, graphite text, 600 weight, -0.01em, with the Pill lift shadow; an up-right arrow follows the label and nudges up-right on hover (omitted in compact placements: header, sticky bar).
- **Hover / Focus:** translateY(-2px) over 0.35s on the site spring; focus is the global 2px coral outline at 3px offset.
- **Glass (secondary):** ink text on white/8 with 14px backdrop blur and a white rim; white/14 on hover with the same 2px lift. Used for "see services" and the PayPal invoice link.
- **One action:** booking is the only primary-pill action and it recurs at the close of every section.

### Chips
- **Style:** file chips under each folder: white/6 fill, 1px white/10 inset rim, ink at 85%, 0.875rem, 6px by 14px.
- **State:** selected chips invert to ink fill and graphite text (`aria-pressed`); selecting one also opens its folder and reveals the file's detail below. Booking badges are the static sibling: white/8 fill, coral check icon.

### Cards / Containers
- **Corner Style:** 24px on phones, 30 to 32px from `md`.
- **Background:** the glass material, always over an art stage.
- **Shadow Strategy:** Glass drop plus Glass rim (see Elevation & Depth).
- **Internal Padding:** 28px on phones, 36 to 48px from `md`.

### Navigation
- **Style:** a fixed 56px glass-flat pill floating 20 to 28px below the top edge, max 1360px. COMCO wordmark in Funnel Display 700 at 1.35rem, -0.04em.
- **Links:** Soft Ink at 0.9375rem, turning ink on hover; hidden below `lg`.
- **Language switch:** ES / EN at 0.8125rem 600; the current one sits in a white/12 pill.
- **Action:** a small primary pill without arrow at the right end.
- **Mobile:** links drop away; the sticky booking bar (glass-flat pill, note in Soft Ink, small primary pill) appears after the hero.

### Glass Folder (signature)
A vendored glass-folder component restyled for COMCO: an art-filled folder with a glass front, label and meta in Funnel Display / Funnel Sans. At rest COMCO keeps the files peeking above the rim (`.folder-peek`: lift -6px, stack 14px) so the folder invites a touch; hover and focus hinge the front back and lift the files; clicking opens and fans them. The folder keeps its own overshooting spring (cubic-bezier(.34, 1.36, .5, 1)); the rest of the site never overshoots. Each folder is paired with text chips listing the same files, so it is scannable without opening and reachable by keyboard.

### Hero Pane (signature)
The first viewport: an art stage running the slowly drifting "signal" artwork (26s alternate drift, plus a 14px parallax lean away from the pointer), a glass front pane with the COMCO tab, three 4:5 post files (reel, carousel, story) tucked behind its top edge at ±6deg that rise 22px on hover or focus, and the display headline bottom-left with the primary pill, the glass pill and a "30 min" note beside it.

### Process Rail
Four numbered steps on a single hairline rail (white/30 fading to transparent), vertical on phones and horizontal from `md`. Markers are 48px Lifted Graphite circles with the Marker rim and a Funnel Display numeral.

### FAQ
A single-open accordion between white/10 hairlines; questions at 1.125rem to 1.25rem 500, answers in ink at 75%, max 60ch; chevron in Soft Ink. The heading sticks beside it on desktop.

## Do's and Don'ts

### Do:
- **Do** put colour on a screen only through a liquid-art canvas from `lib/art.ts`, behind or through smoked glass.
- **Do** keep the ground graphite (#111215) and art stages on stage black (#0b0b10), inset 10px / 16px from the viewport with 30px / 40px corners.
- **Do** build every panel from the one glass recipe (24px blur, bottom-weighted tint, bright top rim, long soft drop).
- **Do** close each section with the off-white booking pill; use the glass pill only for secondary actions.
- **Do** keep motion slow and settling: exponential ease-out (cubic-bezier(0.16, 1, 0.3, 1)) for reveals and rises, the non-overshooting spring (cubic-bezier(0.22, 1, 0.36, 1)) for controls, and leave content visible by default and still under reduced motion.
- **Do** pair every folder with a text list of its contents.

### Don't:
- **Don't** add a light theme or a pure black ground; the site is dark only by design.
- **Don't** use the art hues (cobalt, coral, plum, rose) as flat fills, text colours or borders.
- **Don't** use coral signal for buttons or large areas; it marks focus, selection and small confirmations only.
- **Don't** introduce a second glass recipe, grey hex borders or hard offset shadows; edges are white hairlines at low alpha.
- **Don't** let site controls overshoot; only the vendored folders keep their bounce.
- **Don't** fall back to the category default of a headline over a row of icon cards or floating phone mockups; services and cases are folders you open.

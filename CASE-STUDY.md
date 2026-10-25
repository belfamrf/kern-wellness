# Case study: KERN

**Project:** concept strength and mobility studio · **Role:** brand identity, copy, design, build · **Live:** https://kern.belfamuhammad.com · **Stack:** Next.js, Tailwind CSS, Vercel

## The brief

KERN is the first of three concept projects for my portfolio. I chose a personal training studio in Nørrebro, Copenhagen, aimed at busy professionals aged 30 to 50 who want to feel stronger but avoid crowded gyms. One main action: book a free 30-minute intro. Prices are illustrative, the business is fictional, and every page says so.

## The problem

A portfolio site for a fictional business has to do two jobs at once. It must look like a real studio a stranger would trust, and it must never pretend to be one. Most demo sites fail at the second job: invented testimonials, fake client logos, stock "results" numbers. That reads as a template, and a client comparing designers can spot it.

The design had a second problem. A quiet studio is easy to describe and hard to show. Strip the noise and you get beige minimalism that could belong to any brand. I needed calm with a spine: one memorable element, and enough detail that the page feels art-directed rather than assembled.

## The approach

**Brand before layout.** I wrote the brief and brand brief first, then built the identity: a wordmark with a calibrated K, a stacked lockup, colour variants, an app icon, a favicon and a seven-slide presentation. The K is drawn on a measured grid, and the clear space rule is four times the diameter of the lime dot, not the usual one. The dot is a detail, not a logo on its own: it stays visible on ink and moss, goes quiet on bone, and disappears below 24px instead of being enlarged to fake presence.

**One accent, one signature.** Bone, ink and moss carry the page. Lime appears in the dot, a single full stop, and small ticks. The signature element is a four-question movement screen: how long you sit, where you feel limited, your training history, what you want from the next 12 weeks. It returns a suggested format with a reason, sends that choice to the booking form, and says plainly that it is a preference guide, not a medical assessment.

**Honesty as a design material.** The concept label sits in the footer, the booking note, the form status, the manifest description and the social card. Prices say they are examples. Photography is credited on a public `/credits` page with photographer, licence and the changes I made. There is no coach name, no address, no testimonial, no before-and-after.

## Design decisions

| Decision | Why |
|---|---|
| Fraunces for display, Manrope for text | A serif with a little warmth carries "calm"; the sans keeps forms and numbers plain |
| Numbered sections 01 to 07 | Structure without decoration, and a clear sense of progress down one long page |
| Movement screen instead of a hero carousel | Gives a visitor a reason to interact, and turns a preference into a booking format |
| Photos in grayscale over moss, with small captions | Ties three unrelated Wikimedia photos into one room; captions admit they are photographs of equipment |
| Motion on time, not on scroll position | Reveals finish even on a slow phone; nothing depends on scroll distance |
| Plain text links and a visible focus ring | Keyboard users get the same path as everyone else |

## What testing changed

The first motion pass used CSS `animation-timeline: view()`. It looked right on desktop Chrome and did nothing on iOS Safari, where the page appeared static. On Chrome, elements also scrubbed with the scrollbar, so a fast flick skipped the animation entirely. I replaced it with an IntersectionObserver that runs on a clock: 28px and 650ms for text, 70ms stagger, 280ms maximum, and an 850ms clip-path for photos. The hero runs once on load. Reduced motion adds no classes at all, and without JavaScript the content is already visible.

Copy went through a second pass the next day. I removed developer language from the form status ("no endpoint yet"), gave the small-group price a duration so €960 was not a number floating alone, replaced empty program details like "Measured session" with facts, and cut the disclaimer repeated in three places down to one.

## Checks before launch

- Screenshots and measurements at 320, 375, 768 and 1440px: no horizontal overflow, no dead anchors, no missing images
- 720px viewport as a stand-in for 200% zoom
- Reduced-motion mode: reveals off, hero static, content complete
- Keyboard flow through the movement screen, mobile menu and form, including Escape and focus return
- Contrast measured, not guessed; one Studio credit line failed at 4.49 and was changed
- Lighthouse mobile and live; canonical URLs for `/` and `/credits`; sitemap, robots and a 1200×630 share card

## Results

- Lighthouse mobile: **95 to 96 Performance, 100 Accessibility, 100 Best Practices, 100 SEO**, CLS 0
- Live at **kern.belfamuhammad.com** with HTTPS, deployed from GitHub on Vercel
- The full flow works as one path: screen, recommendation, format carried into the form, validated submit

There are no booking numbers to report. KERN is a concept project, and the form is a working demo that sends nothing.

## What I would do next

Two things. First, a real motion review on a physical iPhone: emulation told me the animation ran, not whether it felt right in the hand. Second, one more price check with a trainer in Copenhagen, so the illustrative numbers sit closer to what the market charges. The layout and the writing are done; those two would make the fiction harder to argue with.

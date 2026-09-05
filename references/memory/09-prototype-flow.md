# Prototype Flow & Present Mode — Reference for `flow`

<!-- last-verified: 2026-09-05 -->

## What makes this a "prototype" rather than a set of pages
A Figma prototype's core value isn't the individual frames — it's the
click-through experience that lets a stakeholder feel the product before
it's built. This skill's `flow` command exists to reproduce that
experience in real, running HTML rather than a design tool's simulation.

## Journey-first, not link-everything
Map 2-4 real journeys from the brief (e.g. "visitor discovers pricing →
signs up → sees the empty-state dashboard → adds first item → sees
populated dashboard") and wire those specifically. A prototype where every
page links to every other page has no narrative — it's a sitemap, not a
journey.

## The prototype toolbar
A small, clearly-a-tool-not-part-of-the-design floating control
(`proto-nav.js`) giving:
- Jump to any page (for the reviewer exploring freely)
- "Restart flow" (return to the journey's first page)
- State toggles where a page/screen has meaningful alternate states
  (empty vs. populated dashboard, logged-out vs. logged-in) without
  needing separate physical pages for each

## State toggles without a backend
A dashboard's empty/loading/error/populated states can be selected via a
URL query parameter (`?state=empty`) read by a small inline check in the
shared `interactions.js`, or via the toolbar directly — this keeps the
prototype's states real and inspectable without simulating an actual data
layer.

## What to strip before a production handoff
`proto-nav.js` and any state-toggle scaffolding are prototype-only tools —
flag them explicitly in `deploy`'s output so they don't accidentally ship
if this project is later handed to `tidyfactor-html`/`tidyfactor-php-*` for
production.

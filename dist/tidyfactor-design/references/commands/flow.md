# Command: `flow` — Click-Through Prototype Navigation

## Purpose
Turns a folder of independent pages into a navigable prototype a client can
click through unassisted — the feature that makes this a genuine Figma
"present mode" alternative rather than a pile of static mockups.

## When to run it
- Enough pages exist to connect into a coherent path (a few pages minimum
  — running this on a single page has nothing to connect).
- User phrasing: "link these pages together", "make this clickable",
  "prototype the flow from signup to dashboard", `flow`.

## What it does
1. Map the intended user journeys from the brief (e.g. landing → pricing →
   signup → dashboard-overview) — real navigation intent, not just "link
   everything to everything".
2. Wire real `<a href="...">` links between pages for the primary
   journeys — this must work with plain static hosting/file:// browsing,
   not just the dev server.
3. Add the shared, dev-only **prototype toolbar** (`proto-nav.js`): a small
   floating control (page jump list, "back to flow start", state toggles
   for pages that expose empty/loading/error states) — visibly styled as a
   tool, not part of the design itself, and easy to strip out before any
   production handoff.
4. Where a linked page doesn't exist yet, either build it (route to `page`/
   `dashboard`) or mark it clearly as a stub end-point — never a silent
   dead link.
5. For state toggles (e.g. viewing a dashboard's empty vs. populated state
   without needing separate pages): drive them via a URL query param or the
   toolbar, documented in that page's markup comment.

## Output convention
```
proto-nav.js            ← shared floating toolbar, all pages include it
pages/*.html               ← real <a href> links for primary journeys
```

## Checklist
- [ ] Primary journeys from the brief are actually clickable end-to-end
- [ ] No silent dead links — every reference either resolves or is a
      marked stub
- [ ] Prototype toolbar is visually distinct from the design itself
- [ ] Works via plain static file browsing, not only the dev server

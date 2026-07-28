# Command: `page` — Add a Marketing/Content Page

## Purpose
The recurring loop this whole skill exists to support: add another page to
the prototype without any risk of visual drift, however large the site
grows. This is the command most likely to run dozens of times on one
project — its discipline matters more than any other command's.

## When to run it
- Any time a new website page (not a dashboard/app screen — see
  `dashboard` for that) is needed: landing, pricing, about, feature,
  listing, detail, contact, 404...
- User phrasing: "add a pricing page", "build the about page", `page`.

## What it does
1. Confirm `design-system/tokens.css` and `components.css` (or the
   foundation's theme) are current — never build against a stale set.
2. Apply the `references/foundations/<choice>.md` narrative-quality
   principles: the hero is a thesis for *this* page's job, structure
   encodes real information (no decorative numbering unless it's a real
   sequence), copy is real content for this page, not lorem ipsum.
3. Compose the page **only** from existing `components.css` classes /
   daisyUI components / Tailwind utilities per the locked foundation.
4. **Hit a design need with no existing match?** Stop. Route it through
   `components` first. Never write it inline "just this once" — that's
   exactly the drift this architecture prevents.
5. Add the page to `flow`'s navigation map if a prototype nav flow already
   exists (don't leave new pages orphaned/unreachable).
6. Verify: view source for any `<style>` tag or inline `style="..."`
   attribute, and for any `<script>` beyond the shared includes — both are
   automatic fails.

## Output convention
```
pages/<page-name>.html    ← markup only, references design-system/* in <head>
```

## Checklist
- [ ] Zero inline `<style>`, zero `style="..."` attributes
- [ ] Zero page-specific `<script>` logic (shared includes only)
- [ ] Every component used exists in `components.css`/foundation library —
      none invented ad hoc
- [ ] Hero/opening treats the page's specific job as a thesis, not a
      generic template
- [ ] Reachable from the prototype's `flow` navigation, if one exists

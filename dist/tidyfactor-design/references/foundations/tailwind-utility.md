# Foundation: Tailwind Utility-First

## When this is the right choice
- Fast iteration matters more than a hand-authored component vocabulary.
- The team downstream already works in Tailwind and will inherit these
  classes directly into production — matches `tidyfactor-cinematic`'s own
  CDN-only Tailwind usage, so a project can share visual language with a
  cinematic landing page built alongside it.
- No named component abstraction wanted — every page composed from raw
  utilities.

## Setup (CDN, zero build — same pattern as `tidyfactor-cinematic`)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: { /* generated from tokens.css / brand.json colors.* */ },
        fontFamily: { /* generated from typography.families.* */ },
        spacing: { /* generated from spacing.* if it departs from Tailwind defaults */ },
      }
    }
  }
</script>
```
This config block lives in one place — `design-system/` — and every page's
`<head>` includes the same two `<script>` tags. Never redefine
`tailwind.config` per page.

## Convention
- `components.css` still exists, but holds only the handful of patterns
  Tailwind utilities can't express cleanly (complex pseudo-element tricks,
  keyframe-driven states) — most pages need zero custom CSS at all.
- No `@apply` sprawl — if a class combination repeats across 3+ pages
  often enough to deserve a name, that's a signal to move it into
  `components.css` as a real named class (see `components` command),
  not to keep re-typing the utility string.

## brand.json → Tailwind mapping
`colors.*` → `theme.extend.colors`; `typography.families.*` →
`theme.extend.fontFamily`; `spacing.*`/`radius.*`/`shadow.*` → their
matching `theme.extend.*` keys when they depart from Tailwind's defaults.

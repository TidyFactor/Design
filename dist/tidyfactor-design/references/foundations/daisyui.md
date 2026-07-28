# Foundation: daisyUI (on Tailwind CDN)

## When this is the right choice
- Dashboards, SaaS app screens, admin panels — anything needing a large,
  complete, accessible component set fast (tables, modals, drawers,
  dropdowns, steps, toasts, stat cards...).
- The prototype needs to look and behave production-grade quickly, with
  design effort spent on the brand layer (theme, signature elements)
  rather than on rebuilding every interactive component from scratch.

## Setup (CDN, zero build)
```html
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/daisyui@latest/daisyui.css" rel="stylesheet" type="text/css" />
```
daisyUI v5 themes are CSS custom properties (OKLCH-based) — this is the one
foundation where `tokens.css` and the component library's theme system are
almost the same file. Define a custom `[data-theme="brand"]` block in
`design-system/tokens.css` mapping every `brand.json` color to daisyUI's
theme variables, then set `data-theme="brand"` on `<html>` in every page.

## brand.json → daisyUI theme mapping
`colors.primary` → `--p` (primary); `colors.light`/`colors.dark` base tones
→ `--b1`/`--b2`/`--b3` (base surfaces); a generated neutral/accent scale →
`--n`/`--a`. Full variable list: see the official daisyUI colors reference.

## Getting exact component markup — don't guess, don't vendor a stale copy
daisyUI publishes and maintains its own official, free, MIT-licensed skill
covering every component's exact class names and required markup structure,
at `https://daisyui.com/skills/daisyui/` (installable via
`npx skills add saadeghi/daisyui`, compatible with any coding agent). When a
component's exact daisyUI markup is needed (a `card`, a `steps` component, a
`drawer`...), fetch the matching reference from that live source rather than
reconstructing it from memory or from a frozen local copy — daisyUI ships
frequent version updates and class names do change across majors.

## Convention
- `components.css` in a daisyUI project holds only project-specific
  overrides and the signature/identity elements that shouldn't look like
  "generic daisyUI" — never a re-implementation of something daisyUI
  already provides.
- Respect daisyUI's own component structure exactly (required wrapper
  divs, ARIA attributes) — don't simplify it away for brevity; that's
  usually what breaks the built-in accessibility/interaction behavior.

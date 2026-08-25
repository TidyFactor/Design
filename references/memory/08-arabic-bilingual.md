# Arabic & Bilingual Design — Reference for `i18n`

Conventions carried consistently across Alwkala's production work and the
rest of the TidyFactor ecosystem (`tidyfactor-html`, `tidyfactor-cinematic`)
— not generic RTL advice.

## Typography
- Headings: **El Messiri** — modern, geometric-leaning, reads as
  contemporary rather than traditional/calligraphic.
- Body: **Tajawal** — high legibility at small sizes, wide weight range.
- **Never Amiri** for UI/display purposes — it's a naskh-style text face
  suited to long-form literary/religious typesetting, not product/marketing
  UI; it reads as the wrong register for almost every brief this skill
  serves.
- Arabic type generally needs slightly larger sizes and more line-height
  than the Latin equivalent at the same visual weight — don't reuse the
  Latin type scale unchanged.

## Layout mirroring
- Mirrors: navigation order, breadcrumbs, form label alignment, icon
  direction for directional affordances (back/next arrows), the reading
  flow of card grids.
- Does NOT mirror: numerals (Arabic numerals in most modern digital
  products are written left-to-right even inside RTL text), embedded Latin
  brand names/wordmarks, code or tabular data blocks.
- Use `unicode-bidi: isolate` (or `dir="ltr"` spans) around any LTR content
  embedded inside RTL flow to prevent bidi algorithm artifacts (numbers or
  Latin words appearing in the wrong order).

## Logo & identity
Logo/wordmark stays pixel-identical and unmirrored across locales — brand
identity doesn't flip with the reading direction, even when everything
around it does.

## Bilingual site patterns
- **Separate localized pages** — clean, works with every command
  unchanged, best when content structure genuinely differs by locale.
- **Single page, dual-tree toggle** — both language trees present in one
  file, toggled via `proto-nav.js` — best for fast side-by-side prototype
  review with a client, worse for a real production site (both trees ship
  to every visitor).
Pick one per project and record it in `brand.json`; don't mix within a
project.

## Voice & tone
If `brand.json`'s `voice.*` block has a localized Arabic register, apply it
directly — a good Arabic UI voice is not a literal translation of the
English one; register, formality, and idiom differ by convention.

## Interaction states in RTL
Re-check, don't just assume: dropdown/menu open-direction, modal
close-button position, tooltip anchor side, and any icon implying
directionality — all need a considered RTL equivalent, not just a global
`transform: scaleX(-1)`.

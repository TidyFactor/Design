# Command: `brand` — Brand Identity Scaffolding & Extraction

Runtime entry point for creating, extracting, or evolving `brand.json` v2. Part of the **Foundation** lifecycle phase.

## When to use

- **New project** → scaffold `brand.json` from scratch with user interview
- **Existing identity** → extract `brand.json` from a live site, PDF guidelines, or logo + reference photos (the `clone-brand` path)
- **Schema upgrade** → migrate `brand.json` v1 to v2

## Dispatch Steps

1. Load `memory/11-brand-json-v2.md` — full schema reference.
2. Load `memory/02-design-tokens.md` — token derivation rules.
3. Determine path: **scaffold** (no existing identity) or **extract** (existing site/PDF/assets).
4. Execute the appropriate protocol below.

## Path A: Scaffold (new identity)

### Interview (ask these in order)
1. **Product name + tagline** → `meta.product`, `meta.tagline`
2. **Logo files** → `identity.logo.*` (SVG preferred; if unavailable, flag as missing — do NOT fabricate)
3. **Primary color + accent** → seed `colors.light.primary`, `colors.light.accent`
4. **Light or dark default?** → determines which mode's `background`/`surface`/`text` values are set first
5. **Voice/tone** → `voice.tone`, `voice.personality` (3 adjectives)
6. **Foundation** → `foundation` (one of 8 supported options)
7. **Design school** → `school` (one of the movements in `memory/01-design-schools.md`)
8. **Locales** → `localization.supportedLocales`, `localization.rtl`

### Auto-derived tokens
From the primary color + mode choice, auto-generate:
- `primaryForeground` (contrast-safe white or dark)
- `secondary` (complementary hue shift)
- `surface`, `surface2`, `border` (tinted neutrals — NEVER pure black/white)
- Dark mode mirror tokens (shift lightness, preserve hue)
- `shadows.focusRing` using `color-mix()` from the primary

## Path B: Extract (existing identity → `brand.json`)

### What to extract, and from where

| Token | Primary source | Fallback |
|---|---|---|
| `colors.*` | **Computed styles** of existing site's key surfaces (buttons, header bg, body text) — sample actual rendered hex, NOT guesses from screenshots | Ask user for 2–3 hex values |
| `typography.families.*` | `<link>`/`@font-face` declarations in HTML/CSS | Route through `memory/12-typography-matrix.md` mood table |
| `voice.*` | Read 3–5 paragraphs of existing marketing copy; infer register | Ask user for 3 adjectives |
| `identity.logo.*` | Existing logo file (SVG or high-res PNG with transparency) | Flag as missing — do NOT fabricate |
| `localization.*` | `<html lang>` / `dir` on existing site | Ask which locales needed |

### What NOT to extract
- **Layout or page structure** — not a `brand.json` token
- **Exact copy text** — voice *rules* transfer, literal sentences don't
- **Font files** — only family *names*, resolved against Google Fonts. Non-Google fonts flagged, NOT silently substituted

### Extract procedure
1. Confirm source (URL / PDF / assets)
2. Extract candidate tokens per table above
3. **Present draft `brand.json` to user before writing** — extraction is inference, not ground truth
4. Once confirmed, write `brand.json` and validate

## Path C: Migrate (v1 → v2)

Load `memory/11-brand-json-v2.md` migration table and transform:
- Flat `colors.primary` → `colors.light.primary` + `colors.dark.primary`
- `typography.headings.arabic` → `typography.families.arabicHeading`
- Add missing sections: `shadows`, `radius`, `spacing`, `motion`, `breakpoints`, `iconography`, `components`, `localization`, `accessibility`

## Output Convention

After any path, the final `brand.json` must:
1. Pass JSON validation
2. Have `$schema: "brand-core-v2"`
3. Have all 16 tokens in both `colors.light` and `colors.dark`
4. Have `motion.reducedMotion` policy stated
5. Have `accessibility.minTouchTarget` ≥ 44px

## Checklist

- [ ] `$schema` is `"brand-core-v2"`
- [ ] Both color modes have all 16 semantic tokens
- [ ] No pure `#000000` or `#ffffff` in any surface token
- [ ] Contrast passes WCAG AA on all text/background pairings
- [ ] `googleFontsUrl` loads ONLY families referenced in `typography.families`
- [ ] Logo files exist or are explicitly flagged as missing
- [ ] Draft was confirmed by user before writing (extract path)

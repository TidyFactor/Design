# 11 · brand.json v2 Schema Reference

The single source of truth for brand identity across all TidyFactor surfaces. Every
design-system file, component, and page reads tokens from this file — never hardcode
a hex value or font name inline.

## Schema version

`"schemaVersion": "brand-core-v2"` — the v2 schema adds dual-mode colors, shadows, radius,
spacing scale, motion tokens, breakpoints, iconography, component token refs,
localization, and accessibility floor.

## Required sections

| Section | Purpose |
|---|---|
| `meta` | Product name, tagline, description, version, lastUpdated |
| `identity` | Logo paths (full, fullDark, mark, favicon), social preview (ogImage) |
| `voice` | Tone, personality, registers (professional/casual/error/success), doNotUse words |
| `colors.light` | 16 semantic tokens for light mode (background, surface, surface2, border, text, textMuted, primary, primaryForeground, secondary, secondaryForeground, accent, success, warning, danger, info, codeBackground) |
| `colors.dark` | Mirror 16 tokens for dark mode |
| `typography` | Families (heading, body, display, mono, arabicHeading, arabicBody), weights, scale, lineHeight, letterSpacing, googleFontsUrl |
| `spacing` | baseUnit (4px) + scale (0–24) |
| `radius` | none, sm, md, lg, xl, full, default |
| `shadows` | sm, md, lg, focusRing (uses `color-mix()`) |
| `motion` | duration (fast/base/slow), easing (standard/emphasized/spring), reducedMotion policy, scope |
| `breakpoints` | sm, md, lg, xl, 2xl |
| `iconography` | set (lucide), strokeWidth, sizes, rule |
| `components` | Token refs for button, input, card, codeBlock |
| `localization` | defaultLocale, supportedLocales, rtl, rtlLocales, mirrorOnRtl, dateFormat |
| `accessibility` | minTouchTarget (44px), focusVisible policy, altTextPolicy |
| `foundation` | Locked CSS foundation (native, tailwind, daisyui, hybrid, shadcn, pico, bootstrap, alpine) |
| `school` | Design school (minimalist, brutalist, neo-skeuomorphic, glassmorphic, editorial, playful) |
| `usage` | sharedBy (which kits consume this file), rules (governance) |

## Dual-mode colors rule

Brand colors (`primary`, `accent`) do NOT change between light/dark — only
`background`, `surface`, `border`, and `text` tokens shift. This ensures brand
recognition across modes.

## Token reference convention (components section)

Component specs reference other sections via dot-path strings:
```json
"button": {
  "radius": "radius.md",
  "primaryBg": "colors.primary",
  "primaryFg": "colors.primaryForeground"
}
```
These are resolved at build-time by the design-system generator — they are NOT
runtime CSS variable references.

## `focusRing` shadow using `color-mix()`

```json
"focusRing": "0 0 0 3px color-mix(in srgb, var(--primary) 40%, transparent)"
```
This produces a 40%-opacity brand-colored focus ring that automatically adapts
to the active primary color. Supported in all modern browsers (Safari 16.4+,
Chrome 111+, Firefox 113+).

## Backward compatibility (v1 → v2 migration)

| v1 token | v2 equivalent |
|---|---|
| `colors.primary` | `colors.light.primary` / `colors.dark.primary` |
| `colors.neutralDark` | `colors.light.text` |
| `colors.neutralLight` | `colors.light.surface` |
| `colors.paper` | `colors.light.background` |
| `colors.ink` | `colors.light.text` |
| `colors.inkSoft` | `colors.light.textMuted` |
| `typography.headings.arabic` | `typography.families.arabicHeading` |
| `typography.body.arabic` | `typography.families.arabicBody` |
| `typography.headings.latin` | `typography.families.display.primary` |
| `typography.body.latin` | `typography.families.body.primary` |

## Checklist
- [ ] `$schema` is `"brand-core-v2"`
- [ ] Both `colors.light` and `colors.dark` have all 16 tokens
- [ ] `contrastPolicy` specifies WCAG AA minimum
- [ ] `motion.reducedMotion` policy is stated
- [ ] `accessibility.minTouchTarget` is ≥ 44px
- [ ] `foundation` is one of the 8 supported options
- [ ] `googleFontsUrl` loads ONLY families referenced in `typography.families`

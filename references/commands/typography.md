# Command: `typography` — Mood-Routed Typography Pairing

Runtime entry point for selecting and configuring typography pairings based on project mood, layout archetype, and language requirements. Part of the **Foundation** lifecycle phase.

## When to use

- During `init` or `brand` when choosing fonts
- When the default pair (El Messiri + Tajawal) doesn't match the project mood
- When switching between layout archetypes that call for different type registers
- When adding a new locale or adjusting Arabic typography weight

## Dispatch Steps

1. Load `memory/12-typography-matrix.md` — the mood → pairing matrix.
2. Load `memory/08-arabic-bilingual.md` — Arabic/RTL base rules.
3. Identify the project mood from `brief` output or user description.
4. Route to the matching pairing row.
5. Update `brand.json` `typography.families` and `googleFontsUrl`.

## The Mood → Typography Matrix

| Mood | Arabic Heading | Arabic Body | Latin Accent | Best Layouts | Avoid For |
|---|---|---|---|---|---|
| **Default luxury** (safe, warm) | El Messiri | Tajawal | Cormorant Garamond | any | — |
| **Editorial / literary** | Markazi Text | IBM Plex Sans Arabic | Fraunces | `story` (editorial) | `app` (too soft for UI chrome) |
| **Art-Deco / high fashion** | Jomhuria *(display ≥48px only)* | Cairo | Bodoni Moda | `film` (fullbleed) | `creator` (too loud for quiet page) |
| **Modern minimal / tech** | Cairo | Cairo (weight-differentiated) | Marcellus | `app` (interface), `creator` (minimal) | `space` (reads cold for real estate) |
| **Warm hospitality / travel** | El Messiri | Almarai | Prata | `space` (spatial) | — |
| **E-Commerce & conversion** | El Messiri | Tajawal | Cormorant Garamond | `product`, `store` | — |
| **Automotive / performance** | El Messiri + Oswald (numerals) | Tajawal | Oswald | `film`, `story` (auto use case) | non-automotive builds |

## Font Rules

### Hard constraints (from `memory/06-quality-bar.md`)
- **Never Amiri** for headings above ~24px — too calligraphic for display text
- **Never manuscript/Naskh** faces above ~24px, regardless of which pair is chosen
- **Display-only faces** (e.g., Jomhuria) must NOT be used for body copy or long captions
- All fonts must be **Google Fonts** (CDN-only, no self-hosting, no build step)

### Pairing principles
- **Serif-with-serif**: Arabic serif heading → Latin serif accent (Markazi Text → Fraunces)
- **Geometric-with-geometric**: Arabic geometric heading → Latin geometric accent (Cairo → Marcellus)
- **Never mismatched by default**: Arabic serif heading + Latin sans accent is wrong unless it's a deliberate `brand.json` override (stated in report, not silent)

### Weight discipline
- ≤ 3 families, ≤ 4 weights total across the entire page (performance budget from `memory/15-performance-budget.md`)
- Use weight differentiation within a single family (e.g., Cairo 400 body / 700 heading) before adding a second family

## Accent Faces

- **`display`** token in `brand.json` — optional Latin accent face for large hero text
- Falls back to `Cormorant Garamond` when `typography.families.display` is absent
- **Oswald for numerals** — condensed Latin, used ONLY for spec numbers (horsepower, dimensions, pricing) inside automotive/performance builds, layered alongside the primary Arabic pair, never replacing it

## Google Fonts `<link>` Reference

Load only the families actually in use — never load every family in this file on every build:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[FAMILIES]&display=swap" rel="stylesheet">
```

## Output Convention

After selecting a pairing, update `brand.json`:
```json
"typography": {
  "families": {
    "heading": { "primary": "[Selected]", "fallback": "[Stack]" },
    "body": { "primary": "[Selected]", "fallback": "[Stack]" },
    "display": { "primary": "[Selected]", "fallback": "[Stack]" },
    "arabicHeading": "[Selected]",
    "arabicBody": "[Selected]"
  }
}
```

## Checklist

- [ ] Pairing matches the mood table row, or deviation is a deliberate `brand.json` override (stated explicitly)
- [ ] No manuscript/calligraphic face above ~24px
- [ ] Display-only faces not used for body copy
- [ ] `<link>` loads ONLY families actually referenced in CSS
- [ ] ≤ 3 families, ≤ 4 weights total (performance budget)
- [ ] Latin accent pairs intentionally with Arabic heading (serif+serif or geometric+geometric)

# 12 · Typography Matrix — Mood-Routed Font Pairings

<!-- last-verified: 2026-09-05 -->

This document defines the 7 mood-routed typography pairings for `tidyfactor-design`. 
While the default pairing (`El Messiri` + `Tajawal` + `Cormorant Garamond`) remains safe and clean for general builds, brand personality often demands a distinctive font pairing matching the visual layout's emotional register.

## Constraint Rules
1. **Clean over calligraphic for display headings**: Never use **Amiri** or any Naskh/manuscript script face above ~24px.
2. **Display-only font rules**: Faces like **Jomhuria** are display-only (≥48px) and must never be used for body text.
3. **CDN-only**: All fonts must be available via Google Fonts. No self-hosting or build step required.

## Mood → Typography Pairing Matrix

| Mood | Arabic Heading | Arabic Body | Latin Accent | Best Layouts | Avoid For |
|---|---|---|---|---|---|
| **Default luxury** | El Messiri | Tajawal | Cormorant Garamond | Any | — |
| **Editorial / literary** | Markazi Text | IBM Plex Sans Arabic | Fraunces | `story` (editorial) | `app` (too soft for UI chrome) |
| **Art-Deco / high fashion** | Jomhuria *(display ≥48px)* | Cairo | Bodoni Moda | `film` (fullbleed) | `creator` (too loud) |
| **Modern minimal / tech** | Cairo | Cairo (weight-differentiated) | Marcellus | `app` (interface), `creator` | `space` (reads cold) |
| **Warm hospitality / travel** | El Messiri | Almarai | Prata | `space` (spatial) | — |
| **E-Commerce & conversion** | El Messiri | Tajawal | Cormorant Garamond | `product`, `store` | — |
| **Automotive / performance** | El Messiri + Oswald (numerals) | Tajawal | Oswald | `film`, `story` (auto) | non-automotive |

## Google Fonts Loading Standard

Always use preconnect links and load only the required families to satisfy the performance budget (≤3 families, ≤4 weights):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
```

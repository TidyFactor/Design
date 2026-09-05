# 21 · Eyebrow & Kicker Architecture Matrix (16 Professional Alternatives)
<!-- last-verified: 2026-09-05 -->

The **Eyebrow Pill Badge** is effective but heavily overused. This matrix provides **16 production-grade alternatives** organized into 4 design families for code-native design and prototype flows, supporting Arabic RTL and full accessibility.

---

## 1. Quick-Reference Matrix

| # | Component | Visual Weight | Personality | Best Context |
|---|-----------|--------------|-------------|--------------|
| 01 | Uppercase Kicker | ●○○ | Editorial / Minimal | Luxury, portfolio, SaaS |
| 02 | Numbered Editorial Index | ●○○ | Swiss / Structured | Docs, design systems |
| 03 | Monospace Annotation | ●○○ | Technical / Dev-native | Developer tools, APIs |
| 04 | Slash Category Path | ●○○ | Editorial / Archival | Blogs, magazines |
| 05 | Ghost Chip | ●●○ | Refined / Quiet | Enterprise, fintech |
| 06 | Hard-Edge Tag | ●●○ | Brutalist / Bold | Agencies, streetwear |
| 07 | Status Dot Indicator | ●●○ | Live / Real-time | Dashboards, status pages |
| 08 | Highlight Marker | ●●○ | Human / Warm | Education, storytelling |
| 09 | Rule-Kicker Lockup | ●○○ | Classic / Print | Editorial, law, reports |
| 10 | Left / Inline Border Accent | ●●○ | Structural / Serious | Enterprise, B2B, heritage |
| 11 | Icon Lockup Eyebrow | ●●○ | Functional / Clear | Product UI, onboarding |
| 12 | Vertical Rail Label | ●●○ | Avant-garde / Spatial | Portfolios, agencies |
| 13 | Corner Ribbon | ●●● | Promotional / Urgent | E-commerce, offers |
| 14 | Rotating Stamp Seal | ●●● | Crafted / Premium | Branding, packaging, heritage |
| 15 | Marquee Strip | ●●● | Energetic / Loud | Drops, events, hype |
| 16 | Hand-Drawn Underline Accent | ●●○ | Playful / Personal | Indie, creative tools |

---

## 2. Universal Token Schema (for Programmatic & AI Generation)

```yaml
eyebrow_variant:
  family: containerless | minimal_container | structural | expressive
  type: kicker | numbered_index | mono | slash | ghost | hard_edge | status_dot | marker | rule_lockup | border_accent | icon_lockup | vertical_rail | ribbon | stamp_seal | marquee | drawn_accent
  container: none | border | fill | marker | structural | freeform
  typography:
    size: 11–13px
    weight: 500–700
    tracking: +0.05em to +0.14em
    transform: uppercase | none | small-caps
  color:
    text: "{muted | brand | foreground}"
    surface: "{transparent | brand-50 | contrast}"
  radius: 0 | 4px | full
  icon: none | leading-16px
  motion: none | pulse | draw-in | marquee | rotate
  reduced_motion_fallback: static-state
  a11y:
    min_contrast: 4.5:1
    decorative_elements: aria-hidden
```

---

## 3. Implementation Rules across Stacks & RTL

1. **RTL / Arabic Support**:
   - For `Left Border Accent`, use logical `border-inline-start: 3px solid var(--primary)` with `padding-inline-start: 8px`.
   - For `Slash Category Path`, keep slash or bullet directionally neutral (`/` or `•`).
   - For `Icon Lockup`, icon precedes text in reading direction (`gap: 8px`).
2. **A11y Contract**:
   - Contrast must be >= 4.5:1 on text (WCAG AA).
   - Icons must have `aria-hidden="true"` when paired with descriptive label text.
3. **Selection Heuristics**:
   - Primary heading secondary context -> Containerless (Family A).
   - Enterprise / High density -> Ghost Chip or Border Accent (Family B / C).
   - Editorial / Culture / Heritage -> Rule-Kicker, Stamp Seal, or Slash Path.
   - Limit expressive variants (Marquee, Ribbon, Stamp Seal) to **one per page**.

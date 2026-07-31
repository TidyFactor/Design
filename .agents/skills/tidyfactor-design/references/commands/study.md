# Command: `study` — Design DNA Extraction & Competitive Analysis

Runtime entry point for extracting design DNA from a live URL, screenshot, or reference site. Part of the **Discovery** lifecycle phase.

## When to use

- Before starting any new design project (run `study` → then `brief` → then `init`)
- When reverse-engineering a competitor's design language
- When a client says "make it feel like [reference]"

## Dispatch Steps

1. Load `memory/06-quality-bar.md` — anti-slop awareness (so the study doesn't praise AI patterns).
2. Load `memory/01-design-schools.md` — classify the reference into a design movement.
3. Execute the DNA extraction protocol below.
4. Output a diagnosis report — user decides next step.

## DNA Extraction Protocol

### Input
One of:
- **Live URL** → browse the page, capture computed styles, screenshot sections
- **Screenshot / image** → visual analysis only (less precise on exact hex values)
- **Multiple URLs** → cross-reference to find the shared design language

### Extraction Axes (6 Dimensions)

| Axis | What to extract | How to extract |
|---|---|---|
| **Macrostructure** | Section rhythm, hero type, scroll behavior | Map each viewport-height section, note sticky/parallax/pinned |
| **Color Anchor** | Primary, surface, text, accent colors | Computed styles from `getComputedStyle()` on buttons, headers, body, backgrounds — NOT visual guesses from screenshots |
| **Type Pairing** | Heading family, body family, weight usage | `<link>` and `@font-face` declarations, NOT visual matching |
| **Spacing System** | Base unit, scale pattern, section gaps | Measure actual padding/margin values on key containers |
| **Motion Register** | Entrance style, scroll interaction, transition timing | Observe scroll behavior, hover states, page transitions |
| **Component DNA** | Card style, button shape, nav pattern, footer pattern | Classify against the catalogs in `memory/14-nav-footer-catalog.md` |

### Critical Rules
- **Sample computed styles** (actual rendered hex values from buttons, headers, body text) — never guess from a screenshot's visual impression.
- **Extract font family names** from `<link>`/`@font-face` declarations — never from visual matching.
- **Do NOT extract layout structure** — the reference site's section order is not a design token; the engine's layout archetypes (`memory/13-layout-archetypes.md`) own that decision.
- **Do NOT extract literal copy text** — voice *rules* transfer (tone, banned words), literal sentences don't.

## Output: Design DNA Report

```markdown
## Design DNA Report: [Reference Name]

### Classification
- **Design School**: [from 01-design-schools.md]
- **Genre**: editorial / modern-minimal / atmospheric / playful / luxury / industrial
- **Mood**: [2-3 adjective tone words]

### Color Anchor
| Token | Hex | Source |
|---|---|---|
| primary | #XXXXXX | computed: button background |
| surface | #XXXXXX | computed: card background |
| text | #XXXXXX | computed: body color |
| accent | #XXXXXX | computed: link/highlight color |

### Type Pairing
- Heading: [Family] (weight [N])
- Body: [Family] (weight [N])
- Source: [<link> tag / @font-face / Google Fonts import]

### Spacing System
- Base unit: [N]px
- Section gaps: [pattern]

### Motion Register
- Entrance: [fade-up / clip-reveal / slide / none]
- Scroll: [sticky / parallax / scroll-snap / standard]
- Hover: [lift / scale / glow / none]

### Component DNA
- Nav: [N1–N9 from catalog]
- Footer: [Ft1–Ft8 from catalog]
- Cards: [elevation / bordered / flat / glassmorphic]
- Buttons: [rounded / pill / square / ghost]

### Anti-Pattern Tells Detected
- [List any of the 16 AI tells found in the reference]
```

## User Decision After Report

The user can:
1. **Lock** the DNA into a `design.md` project brief → flow into `init`
2. **Cherry-pick** specific axes (e.g., "use their color anchor but our own typography")
3. **Stop** at diagnosis — study is complete

## Checklist

- [ ] Color values extracted from computed styles, not visual guesses
- [ ] Font families extracted from `<link>`/`@font-face`, not visual matching
- [ ] Layout structure NOT carried over — only tokens
- [ ] Report classifies against design schools and anti-pattern catalogs
- [ ] User presented with 3 clear next-step options

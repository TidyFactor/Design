# Command: `handoff` — Developer Handoff Spec Generation

Runtime entry point for generating clean, developer-ready design system specifications, token maps, component state matrices, and implementation guidelines. Part of the **Delivery & Handoff** lifecycle phase.

## When to use

- After prototype approval, when handing off to engineering/developers
- When documenting design system tokens for production implementation
- When building a component library documentation site

## Handoff Package Specification

The `handoff` command extracts and formats technical documentation into `docs/handoff/`:

```
docs/handoff/
├── 01-token-map.md          ← Exact CSS variables, HSL values, typography scale, spacing grid
├── 02-component-matrix.md   ← Full inventory of components with all 8 interactive states
├── 03-layout-specs.md       ← Spacing rules, grid containers, breakpoint behaviors
└── 04-motion-handbook.md    ← Easings, timing curves, reduced motion fallbacks
```

## Generated Outputs

### 1. Token Map (`01-token-map.md`)
Export clean tables tracing `brand.json` v2 tokens to CSS variable implementations:
- Color swatches with hex, HSL, and light/dark role mappings
- Font family declarations, weights, line-height ratios, letter-spacing
- Spacing scale values in `rem` and `px`
- Elevation levels & shadow specs (including `color-mix()` focus rings)

### 2. Component Matrix (`02-component-matrix.md`)
For each shared component in `design-system/components.css`:
- HTML markup snippet
- Interactive state inventory: Default, Hover, Active, Focus-Visible, Disabled, Loading, Error, Success
- Accessibility requirements (ARIA roles, minimum 44px touch targets)

### 3. Layout & Grid Specs (`03-layout-specs.md`)
- Container max-widths (`sm`, `md`, `lg`, `xl`, `2xl`)
- Section padding discipline
- RTL mirroring guidelines for bidirectional UI

### 4. Motion Handbook (`04-motion-handbook.md`)
- Cubic-bezier curves and duration values
- Reduced-motion fallback rules (`prefers-reduced-motion: reduce`)

## Checklist

- [ ] Complete token mapping table generated
- [ ] All components documented with interactive states
- [ ] ARIA roles & WCAG AA contrast notes included
- [ ] Motion timing curves & reduced motion policy exported
- [ ] Handoff documentation written to `docs/handoff/`

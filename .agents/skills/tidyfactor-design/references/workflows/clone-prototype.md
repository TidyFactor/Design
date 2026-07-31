# Workflow: clone-prototype

One outcome: Extract design tokens, computed CSS, interaction models, and multi-state behaviors from an existing website or reference to rebuild a clean prototype design system.

## Execution Steps

1. **Analyze Target Reference & Extract Computed CSS**:
   - Extract exact `getComputedStyle()` values for colors, font families, tracking, and spacing rhythm.
   - Parse layered visual assets (background canvases, foreground cutouts, SVG overlays).
2. **Identify Interaction Model Before Scaffolding**:
   - For every interactive section, explicitly declare the interaction model:
     - `INTERACTION_MODEL: scroll-driven` (sticky header, scroll-reveals, Lenis smooth scroll)
     - `INTERACTION_MODEL: click-driven` (tabs, accordions, modals)
     - `INTERACTION_MODEL: hover-driven` (cards, nav dropdowns)
3. **Multi-State Behavior Diffing**:
   - Capture computed CSS at State 0 (initial load) and State 1 (scrolled/hovered/active).
   - Diff states to extract exact property changes, transition durations (`--duration-base`), and easings (`--ease-out-quint`).
4. **Write Auditable Component Specs (`docs/research/components/`)**:
   - Write persistent markdown specs (`docs/research/components/<section-name>.md`) before building components.
   - Enforce **150-Line Complexity Budget Rule**: if a component spec exceeds 150 lines, split into sub-component specs.
5. **Derive Token Schema (`brand.json` & `tokens.css`)**:
   - Map extracted colors to CSS custom properties in `tokens.css`.
   - Scaffold `brand.json` with identity and 4-context voice definitions (`voice.professional`, `voice.casual`, `voice.error`, `voice.success`).
6. **Build Shared Component Classes**:
   - Construct reusable classes in `components.css` matching target reference's visual language.
7. **Rebuild Reference Pages**:
   - Recreate target screens in `pages/` using clean markup consuming the extracted `design-system/`.

## Validation Checklist

- [ ] Interaction models explicitly declared for all interactive sections
- [ ] Computed CSS & multi-state transitions diffed and mapped to `tokens.css`
- [ ] Persistent component specs written in `docs/research/components/`
- [ ] 150-line complexity budget rule enforced for sub-component splitting
- [ ] Rebuilt pages carry zero per-page inline CSS/JS overrides

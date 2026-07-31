# TidyFactor Design Philosophy & Rationale

Human-facing documentation explaining the background, design theory, and motivation behind `tidyfactor-design`. Unreferenced by agent runtime command paths.

## Why Code-Native Prototyping?

Design tools like Figma are exceptional for visual layout, but prototypes built inside visual tools frequently suffer from handoff friction:
- Interaction details (easings, hover states, dynamic layout reflows) get lost during implementation.
- Per-screen design drift occurs as mockups scale.
- Responsive breakpoints and localization (RTL / Arabic text scaling) are treated as afterthoughts.

`tidyfactor-design` turns code into the primary prototyping medium. By defining design tokens and shared components in CSS/JS first, prototypes achieve:
1. **Structural Consistency**: New screens automatically inherit the global design system without drift.
2. **Instant Handoff**: The output is valid HTML/CSS/JS ready for inspection, demoing, or deployment.
3. **Bilingual Realism**: Arabic and English typography, layouts, and directional flow are tested live in real browsers from day one.

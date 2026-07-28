# Foundation: Native (hand-authored semantic components)

## When this is the right choice
- The brief calls for a visual identity that shouldn't read as "built on a
  known component library" — high-end brand work, a signature aesthetic.
- Zero external dependency is a hard requirement.
- The team downstream will hand-roll production CSS anyway, so a component
  library choice now wouldn't survive the handoff.

## Convention
- BEM-style class naming: `.card`, `.card__title`, `.card--featured`. No
  utility classes mixed in — layout uses `components.css`-defined layout
  primitives (`.stack`, `.cluster`, `.grid-auto`), not ad hoc flexbox per
  page.
- `tokens.css` custom properties are the only source of raw values —
  `components.css` rules reference `var(--color-primary)`,
  `var(--space-4)`, etc., never a literal.
- `utilities.css` stays small and layout-only (spacing/alignment helpers) —
  resist growing it into a parallel utility framework; that's what the
  Tailwind foundation is for.

## brand.json → tokens.css mapping
Same field set as the daisyUI/Tailwind foundations (see `tokens` command) —
`colors.*`, `typography.*`, `spacing.*` all become `:root` custom
properties. Native foundation is the only one with no theme-config layer in
between — the mapping is direct.

## What `components` produces here
Hand-authored rules in `components.css`, one block per component, each
documented with a one-line comment naming the states it supports (hover,
active, disabled, loading).

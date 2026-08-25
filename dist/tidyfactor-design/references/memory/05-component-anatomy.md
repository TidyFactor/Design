# Component Anatomy — Reference for `components`/`states`

## Atomic hierarchy (Atomic Design, adapted)
- **Atoms** — button, input, label, icon, badge. The smallest named unit;
  never composed of other named components.
- **Molecules** — a form field (label + input + error text), a stat
  (label + value + trend), a nav item (icon + label + active state).
- **Organisms** — a card, a data table, a navbar, a pricing tile, a modal.
  Composed from atoms/molecules, still a single reusable named unit.
- **Templates** (this skill's `page`/`dashboard` output) — organisms
  arranged into a page's actual layout. This is the one level that's
  allowed to be page-specific — it's arrangement, not new styling.

A new visual need almost always belongs at the atom/molecule/organism
level, added once to `components.css`/the foundation library — not
invented at the template level.

## The full state matrix (apply per interactive component)
`default → hover → focus-visible → active/pressed → disabled`, plus where
relevant: `loading`, `empty`, `error`, `success`. A component "supports"
these states means each has an intentional look, not that the browser
default happens to apply.

## Naming discipline
One canonical name per real pattern. A "featured pricing card" and a
"testimonial card" that share 90% of their structure should be one `.card`
component with modifiers (`.card--featured`), not two components that will
quietly diverge over time.

## When something looks like it needs a new component but doesn't
If the only difference from an existing component is a token value (a
different accent color, a different size) — that's a modifier class or a
data attribute, not a new component. New components are for genuinely
different structure/behavior, not restyled instances.

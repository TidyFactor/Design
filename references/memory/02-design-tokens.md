# Design Tokens — Reference for `tokens`

<!-- last-verified: 2026-09-05 -->

## Categories and what belongs in each

**Colors** — primary, secondary, accent; a light surface scale
(background/surface/surface-raised) and a dark equivalent if the project
supports both themes; semantic colors (success/warning/error/info) derived
from the palette, not generic red/green/yellow dropped in unrelated to the
brand.

**Typography** — a display family (used with restraint, per
`frontend-design`'s principle), a body family, optionally a mono/utility
family for data. A type scale (e.g. a 1.25 or 1.333 ratio from a base size)
— not arbitrary per-heading pixel values. Weight and letter-spacing as
named tokens tied to the scale, not per-instance tweaks.

**Spacing** — one consistent base unit (4px or 8px) and a small named scale
(`--space-1` through `--space-8` or similar) — every margin/padding/gap in
the project traces to this scale.

**Radius** — a small fixed set (e.g. none/sm/md/lg/full) — resist a
different radius value per component.

**Shadow** — a small fixed elevation set (e.g. sm/md/lg), consistent light
angle/color across all of them (usually a tint of the darkest neutral in
the palette, not pure black).

**Motion** — duration tokens (fast/base/slow) and easing tokens
(ease-out for entrances, ease-in for exits, a signature easing curve for
the brand's characteristic motion if `school` calls for one).

**Decorative Patterns & Friezes** — continuous horizontal ribbons, architectural
friezes, and cultural repeating motifs. Defined via SVG `<pattern>` tokens with
exact waveform bounding boxes (`patternUnits="userSpaceOnUse"`) to guarantee 0px gap
interlocking across 100% viewport width without manual DOM duplication or layout shifts.

## Naming convention
`--color-*`, `--font-*`, `--space-*`, `--radius-*`, `--shadow-*`,
`--ease-*`/`--duration-*`, `--pattern-*`, `--motif-*` — consistent prefixing so any command (or a human
reading the CSS) can immediately tell a value's category.

## Contrast policy
Every text/background pairing derived from tokens should pass WCAG AA
(4.5:1 for body text, 3:1 for large text/UI components) — check this when
`school` picks a direction with strong color contrast ambitions
(near-black grounds, saturated accents), not just at the end.

# Quality Bar — Auto-Reject Checklist for `audit`

A prototype fails review if any of these are true, regardless of how good
individual pages look in isolation.

## Structural (highest severity — breaks the skill's core promise)
- Any page has an inline `<style>` block or `style="..."` attribute.
- Any page has a `<script>` block that isn't `src`-linked to a shared
  `design-system/*` file.
- A value (color, font-size, spacing, radius, shadow) appears as a literal
  in any page or in `components.css` without tracing to a token.
- Two pages render visually different versions of "the same" component
  (drift), or two components that are 90%+ structurally identical exist
  under different names (near-duplicate).

## Design quality
- The hero/opening of any page is a generic template ("Welcome to X" +
  stock CTA) rather than a thesis specific to that page's job.
- Numbered markers, eyebrows, or dividers used where they don't encode
  real sequence/category information.
- The palette/type/motion default to one of the three overused AI-design
  looks (warm-cream+terracotta, near-black+single-accent,
  broadsheet-hairline-everywhere) without the brief calling for it.
- Motion is either absent where the direction calls for atmosphere, or
  scattered/simultaneous where staged, deliberate motion would read
  better.

## Interaction completeness
- An interactive component is missing hover, focus-visible, or disabled
  states.
- A dashboard screen shows only its populated state — no empty, loading,
  or error state designed.
- Focus rings are invisible or use the browser default instead of a
  token-colored ring.

## Arabic/bilingual (when applicable)
- `html[lang]`/`dir` incorrect or left at a template default.
- Arabic display type uses Amiri, or any family other than El Messiri
  (headings) / Tajawal (body).
- RTL mirroring applied inconsistently (some components mirrored, others
  not) or applied to elements that shouldn't mirror (numerals, embedded
  Latin brand names).

## Accessibility floor
- Contrast fails WCAG AA on any token-derived text/background pairing.
- Touch targets under 44px on anything meant for mobile/touch.
- `prefers-reduced-motion` not respected globally.

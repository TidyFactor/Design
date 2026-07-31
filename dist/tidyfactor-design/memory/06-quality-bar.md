# Quality Bar — Auto-Reject Checklist for `audit`

A prototype fails review if any of these are true, regardless of how good individual pages look in isolation.

## Pre-Emit Self-Critique (1–5 Scores on 6 Axes)
Before handing back any output, score the artifact on 6 axes:
- **Philosophy (P)**: Opinionated stance vs generic template default.
- **Hierarchy (H)**: Clear visual weight & focal structure.
- **Execution (E)**: Clean layout alignment, zero inline overrides, valid tokens.
- **Specificity (S)**: Customized specifically to the subject's world/materials.
- **Restraint (R)**: Zero clutter, excess gradients, or fake cards.
- **Variety (V)**: Non-repetitive section rhythm across project pages.

*Any score < 3 triggers an automatic revision pass. Output must be stamped:*
`/* Pre-emit critique: P5 H4 E5 S4 R5 V5 */`

## Compositing & Blend Rules
- **The Blend Trap**: `mix-blend-mode` (multiply or screen) breaks on any element transformed by GSAP or CSS 3D transforms, creating a visible light/dark rectangle. Use background-removed transparent PNG cutouts (`rembg` + `Pillow`) for animated hero assets. Reserve `mix-blend-mode` strictly for static, untransformed imagery.


## Structural (highest severity — breaks the skill's core promise)
- **Anti-Design-Soup Violation**: Combining more than 1 Primary School, 1 Secondary Influence, 1 Motion Language, 1 Storytelling Style, or 1 UX Philosophy on a single page (unless explicitly requested).
- Any page has an inline `<style>` block or `style="..."` attribute.
- Any page has a `<script>` block that isn't `src`-linked to a shared `design-system/*` file.
- A value (color, font-size, spacing, radius, shadow) appears as a literal in any page without tracing to a token.
- Two pages render visually different versions of "the same" component (drift), or two components that are 90%+ identical exist under different names (near-duplicate).

## The 16 Named AI Anti-Pattern Tells (Auto-Reject)
1. **Purple-Gradient Hero**: Purple-to-pink/blue background gradient with white centered text.
2. **Inter-Everywhere**: Single unpaired font family used across display and body.
3. **3-Column Feature Grid**: 3 equal columns with icon above 2-line heading above 3-line body.
4. **Card-in-Card**: Nested container cards with no semantic structural reason.
5. **Gradient Headline**: `background-clip: text` linear gradient fill on headlines.
6. **Side-Stripe Card**: 4–6px thick colored border on left edge of card.
7. **Full-Viewport Centered Hero**: `min-height: 100vh` centered short sentence + big CTA.
8. **Pure Black / Pure White**: Pure `#000000` or `#ffffff` flat surfaces (must use tinted neutrals).
9. **Default-Attractor Sameness**: Reusing the same macrostructure on consecutive project pages.
10. **Specimen Fall-Through**: Defaulting to editorial `01 - HELLO` specimen layout for SaaS/B2B.
11. **The AI Nav**: Wordmark left, 4-5 links center, CTA right, 1px bottom border.
12. **The AI Footer**: 4 columns (Product, Company, Resources, Legal) + social row + copyright line.
13. **Aurora-Blob Background**: Flowing organic mesh blobs in purple/cyan behind hero text.
14. **Floating-Orb Decoration**: 3D spheres or blurred circles drifting behind hero.
15. **Italic Headers**: Flipping one word in a headline to italic (`Built to <em>think</em>`) to "look editorial".
16. **Lazy-Loaded LCP**: Adding `loading="lazy"` to the main hero LCP image (tanks performance).

## Mechanical Anti-Slop & Anti-Generic UI (Rule 8)
- **Ubiquitous Eyebrows**: More than 1 eyebrow tag (uppercase tracking small label) per 3 sections (`count > ceil(sectionCount / 3)`).
- **Floating Mid-Screen Hero**: Hero top padding exceeds `pt-24` (6rem) on desktop; headline > 2 lines; subtext > 20 words / 4 lines; primary CTA not visible without scroll.
- **Wrapped CTA Buttons**: Primary CTA button text wraps to 2+ lines on desktop; CTA text > 3 words.
- **Duplicate CTA Intent**: Multiple CTAs with the same underlying intent (e.g. mixing "Contact us", "Get in touch", and "Let's talk" on one page).
- **Un-aligned Card CTAs**: Buttons in a card grid not pinned to the bottom (`mt-auto`), creating jagged horizontal lines.
- **Invented Metrics**: Inventing fake statistics (*"+47% conversion"*, *"trusted by 50,000+ teams"*)—must use real data or `—` metric placeholders.
- **Re-Drawn Fake Chrome**: Fake CSS browser window frames (red/yellow/green traffic lights wrapping an iframe) or fake IDE title bars.
- **Fake Div Screenshots**: Using `<div>` rectangles to fake product UI instead of real images or real component previews.

## Optical Alignment & Typography Hygiene
- **Data Table Numbers**: Multi-digit metrics or numbers missing `font-variant-numeric: tabular-nums` or monospace font alignment.
- **Orphaned Headline Words**: Single hanging words on display headers missing `text-wrap: balance` or `text-wrap: pretty`.
- **Optical Offsets**: Inline icons adjacent to text baselines missing 1-2px vertical optical adjustment.
- **Sudden Dark Sections**: A random dark-mode section breaking an otherwise light-mode page (or vice versa), reading as a copy-paste AI artifact.

## Interaction Completeness
- An interactive component is missing hover, active (`scale-[0.98]`), focus-visible, or disabled states.
- Focus rings are invisible or use browser default instead of token-colored ring.

## Arabic / Bilingual & Accessibility Floor
- Arabic display type uses any family other than El Messiri (headings) / Tajawal (body).
- Contrast fails WCAG AA on any token-derived text/background pairing.
- Touch targets under 44px on mobile/touch viewports.
- `prefers-reduced-motion` not respected globally.

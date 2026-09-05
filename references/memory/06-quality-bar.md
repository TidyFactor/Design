# Quality Bar — Auto-Reject Checklist for `audit`

<!-- last-verified: 2026-09-05 -->

A prototype fails review if any of these are true, regardless of how good individual pages look in isolation.

## 🛡️ 7-Axis Pre-Emit Self-Critique Stamp

Every generated prototype component, token set, or layout must be stamped:
`/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

| Axis | Dimension | Score 1 (Slop / Reject) | Score 5 (Production Pass) |
|:---:|---|---|---|
| **P** | **Philosophy & School Authenticity** | Generic Bootstrap look; inconsistent corner radii and shadows. | Pure school adherence (Swiss, Neo-Brutalist, Luxury, Editorial). |
| **H** | **Hierarchy & Layout Balance** | Crowded sections; poor whitespace ratio; no clear visual anchor. | Archetype-aligned macrostructure (L1–L4); strong focal hierarchy. |
| **E** | **Encapsulation & Architecture** | Inline styles on elements (`style="..."`); per-page CSS files. | 100% tokens in `design-system/`; clean semantic HTML pages. |
| **S** | **State Completeness** | Missing hover, focus, disabled, or loading states on inputs/buttons. | Complete 8-state wrappers across all interactive components. |
| **R** | **RTL & Typography Rigor** | Broken flow on `dir="rtl"`; Amiri used on giant display headlines. | Curated Arabic typography (El Messiri display, Tajawal body); full RTL. |
| **V** | **Velocity & Motion Polish** | Janky transitions; missing `prefers-reduced-motion` fallbacks. | Sub-200ms cubic-bezier easing curves; accessible reduced-motion rules. |
| **D** | **Decision Alignment** | Inconsistent foundation; arbitrary colors ignoring `brand.yaml`/`brand.json`. | 100% synchronized with `.tidyfactor/design-brief.md` and `brand.yaml`. |

*Any score < 3 triggers an automatic revision pass before emitting code to the user.*

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

## ⛔ 11 Explicit Codex & AI-Slop Defect Bans
1. **Ghost Cards**: Pairing 1px border with soft wide drop shadows `box-shadow: 0 Npx Mpx ...` (M ≥ 16px). Pick a solid border OR a shadow under 8px blur, never both as decoration.
2. **Over-Rounding (32px+)**: Applying `border-radius: 24px/32px/40px` to rectangular cards and sections. Cards top out at 12–16px radius (pills strictly for tags/buttons).
3. **Decorative Grid Background Overlays**: Adding two-axis `linear-gradient(... 1px, transparent 1px)` grid background patterns unless the page is an actual map, blueprint, canvas, or measurement tool.
4. **Side-Stripe Accent Borders**: Colored `border-left` or `border-right` > 1px as a card/alert callout crutch. Rewrite with solid borders or subtle background tinting.
5. **Warm Cream / Sand Saturated Neutral Default**: Defaulting all body backgrounds to warm beige/sand (`#F5F2EB` or token names like `--sand`, `--cream`, `--paper`). Pick a true neutral or brand-derived hue tint.
6. **Side-by-Side Saturated Text Gradients**: Applying `background-clip: text` gradients for emphasis. Use weight, size, or solid accent color.
7. **Reflexive Glassmorphism**: Adding decorative blurs and glass cards without clear spatial/layering purpose.
8. **Numbered Section Markers on Non-Sequences**: Prefixing non-sequential sections with `01 / 02 / 03`. Sequence numbers earn their place only on real multi-step processes or timelines.
9. **Sketchy SVG Illustrations**: Using crude 5-30 path SVG illustrations or doodle filters as fallback graphics.
10. **Diagonal Stripe Background Overlays**: Using `repeating-linear-gradient(...)` stripe overlays in hero/section backgrounds.
11. **Disjointed Display Heading Letter-Spacing**: Using letter-spacing tighter than `-0.04em` on H1 display headings causing characters to collide.

---

## 🚫 5 Header & Navigation Anti-Pattern Traps (Auto-Reject)
1. **Vertical Text-Wrapping Link Trap**: Link labels breaking/wrapping into 2 stacked lines inside a single link container (e.g. `المبادرات \n والتدريب` or `المؤلفات \n والأبحاث`). Navigation items must strictly stay 1–2 words and enforce `white-space: nowrap;`.
2. **The Escaping Action Overflow Trap**: Primary CTA buttons or action toggles spilling outside the navbar pill container due to link congestion or missing container boundaries. Header items must never cause horizontal clipping or overflow.
3. **Compound Title Congestion**: Cramming 6+ verbose compound phrases side-by-side (`المؤهلات والأكاديميا`, `المؤلفات والأبحاث`, `المسيرة المهنية`, `الأثر الميداني`, `المبادرات والتدريب`). When links exceed 5–6 items, mandatory escalation to Submenu/Mega Menu applies.
4. **Duplicate Primary CTA Intent**: Duplicating the conversion action in both the menu links and the header button (e.g. having `حجز استشارة` in the nav links right next to `تواصل مباشر` on the CTA button). The CTA is the single primary conversion button.
5. **Amateur Avatar & Emoji Trap**: Using plain circular placeholder avatars with raw single letters (e.g. a teal circle with a plain letter "ش") or emoji labels (`🌙 ليلي`). Always use authentic SVG royal emblems, cartouches, or clean linear SVG icons.

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

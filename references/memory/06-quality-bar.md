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

## 🛡️ The 66-Rule Anti-Slop Quality Gate (9 Categories)

Every generated component, layout, or style must pass all 66 criteria without exception.

### I. Color & Surface (Rules 1–21)
1. ❌ **Purple-Gradient Hero**: Banned generic `#7928CA` to `#FF0080` or indigo radial glows behind hero text.
2. ❌ **Inter-Everywhere**: Banned using Inter as an unthinking default across display, body, and cultural surfaces.
3. ❌ **Generic 3-Column Feature Grid**: Banned identical 3-card grids with icon above 2-line heading above 3-line body without focal hierarchy.
4. ❌ **Card-in-Card Nesting**: Banned nesting bordered cards inside other bordered cards with no semantic structural contrast.
5. ❌ **Gradient Text Headlines**: Banned unreadable multi-stop `background-clip: text` linear gradients on display typography.
6. ❌ **Side-Stripe Accent Cards**: Banned arbitrary colored 4–6px left/right border accents on feature boxes.
7. ❌ **Full-Viewport Centered Hero**: Banned reflexive `min-height: 100vh` centered short sentence + big CTA button crutch.
8. ❌ **Pure Black / Pure White Surfaces**: Banned harsh `#000000` or `#ffffff` flat surfaces lacking depth or undertone tinting.
9. ❌ **Default-Attractor Sameness**: Banned repeating the exact same macrostructure across distinct project briefs.
10. ❌ **Specimen Fall-Through**: Banned defaulting to editorial `01 - HELLO` specimen cards for SaaS, commerce, or technical products.
11. ❌ **The Cookie-Cutter AI Nav**: Banned reflexive wordmark-left, 4-links-center, CTA-right with 1px bottom border.
12. ❌ **The Cookie-Cutter AI Footer**: Banned generic 4-column (Product, Company, Resources, Legal) grid with copyright line.
13. ❌ **Aurora-Blob Backgrounds**: Banned flowing organic blurred mesh blobs in purple/cyan behind content.
14. ❌ **Floating-Orb Decorations**: Banned blurred 3D spheres or colorful ambient circles drifting without interaction purpose.
15. ❌ **Italic Single-Word Headers**: Banned flipping one word in a headline to italic (`Built to <em>think</em>`) to fake editorial depth.
16. ❌ **Lazy-Loaded LCP Media**: Banned adding `loading="lazy"` to the main hero LCP image, degrading Core Web Vitals.
17. ❌ **Cream-and-Terracotta Trope**: Banned `#F4F1EA` background + high-contrast serif + terracotta/clay accent (`~#D97757`) as a default "premium" look.
18. ❌ **Near-Black-and-Acid-Accent Trope**: Banned near-black background with a single bright acid-green or vermilion accent as the default "techy" look.
19. ❌ **Tinted-Black-as-True-Black**: Banned `#0B0B0B`/`#111` standing in for black without a stated reason.
20. ❌ **Dark Mode as Pure Inversion**: Banned flipping light-mode values instead of designing a second palette with its own contrast logic.
21. ❌ **Low-Contrast Text-on-Image**: Banned body copy laid directly on photography/gradients without a scrim or contrast-safe zone.

### II. Typography (Rules 22–28)
22. ❌ **Single-Word Headline Accent**: Banned italicizing/coloring one word in a headline as the "clever" default.
23. ❌ **All-Caps Labels**: Banned tracked-out ALL-CAPS for every small label regardless of brand voice.
24. ❌ **Unnecessary Eyebrow Labels**: Banned adding a label above every heading whether or not it clarifies anything.
25. ❌ **Monospace-for-Everything Data Labels**: Banned monospace fonts applied to non-tabular, non-code content just to look "technical."
26. ❌ **Justified Body Copy**: Banned justified text without hyphenation control, producing rivers and uneven spacing.
27. ❌ **Flat Serif/Sans Pairing**: Banned combining two typefaces at the same weight/contrast with no clear hierarchy between them.
28. ❌ **Line Length Over 80 Characters**: Banned body text columns that force the eye to hunt for the next line (`max-width: 65ch` exceeded).

### III. Layout & Composition (Rules 29–36)
29. ❌ **Numbered Markers on Non-Sequential Content**: Banned 01/02/03 badges on cards that aren't actually a sequence.
30. ❌ **Middle-Dot Meta Strings**: Banned "A · B · C" metadata formatting as a default chrome pattern.
31. ❌ **Em-Dash Label Pattern**: Banned "WORD — fragment" labeling used reflexively across unrelated sections.
32. ❌ **Uniform Border-Radius Regardless of Hierarchy**: Banned one border-radius value applied to every element with no relationship to importance.
33. ❌ **Identical Soft Shadow Under Every Card**: Banned the same `rgba(0,0,0,.1)` drop shadow as a universal card treatment.
34. ❌ **Default Big-Number-Small-Label Hero**: Banned the "big stat + small caption + gradient accent" hero unless it's genuinely the strongest asset.
35. ❌ **Broadsheet Hairline Overload**: Banned dense newspaper-style hairline rules and zero-radius columns as a default "editorial" look.
36. ❌ **Everything Centered by Default**: Banned center-aligning all content without considering left/justified alternatives for readability.

### IV. Decoration & Motion (Rules 37–41)
37. ❌ **Fade-and-Slide-Up on Every Section**: Banned the same scroll-reveal animation repeated on every block instead of one orchestrated moment.
38. ❌ **Arrow-Appended CTA Text**: Banned tacking "→" onto every link and button label as a tic.
39. ❌ **Icon-Before-Every-Heading Soup**: Banned decorative icons prefixed to headings that don't carry semantic weight.
40. ❌ **Decorative Gradient Washes**: Banned gradient backgrounds used purely as filler texture with no relation to content.
41. ❌ **Motion Without a Trigger or Meaning**: Banned animations that don't respond to a user action or communicate a state change.

### V. Interaction & State Design (Rules 42–47)
42. ❌ **No Disabled State Styling**: Banned buttons/inputs that look identical whether enabled or disabled.
43. ❌ **Missing Loading/Skeleton State**: Banned components that just blank out or jump-cut while data loads.
44. ❌ **Missing Empty State Design**: Banned "no data" screens left as a blank void instead of a call to action.
45. ❌ **Missing Error State Design**: Banned forms/components with no visual treatment for invalid or failed states.
46. ❌ **Hover Effects on Non-Interactive Elements**: Banned hover styling on elements that don't do anything when clicked.
47. ❌ **Focus Ring Removed Without Replacement**: Banned `outline: none` without a custom visible-focus alternative.

### VI. Internationalization & Accessibility (Rules 48–53)
48. ❌ **Un-Mirrored Icons in RTL**: Banned directional icons (arrows, chevrons, back buttons) that don't flip in RTL layouts.
49. ❌ **Color as the Only Signal**: Banned status/error indication that relies on color alone with no icon or text redundancy.
50. ❌ **Contrast Ratio Below WCAG AA**: Banned text/background pairs that fail 4.5:1 (body) or 3:1 (large text).
51. ❌ **Div Soup Instead of Semantic HTML**: Banned nav/button/heading elements built from unstyled `<div>`s, breaking screen readers.
52. ❌ **Ignored prefers-reduced-motion**: Banned shipping motion with no reduced-motion fallback for users who've opted out.
53. ❌ **Un-Localized Dates/Numbers**: Banned hardcoded date/number formatting that doesn't adapt to locale (e.g., Arabic-Indic numerals, DD/MM vs MM/DD).

### VII. Performance & Technical Hygiene (Rules 54–58)
54. ❌ **Layout Shift from Unset Image Dimensions**: Banned `<img>` tags without explicit `width`/`height` causing Cumulative Layout Shift (CLS).
55. ❌ **Render-Blocking Scripts in `<head>`**: Banned synchronous `<script>` tags with no `defer`/`async` blocking first paint.
56. ❌ **No Lazy-Loading Below the Fold**: Banned eagerly loading every image regardless of viewport position.
57. ❌ **CSS Specificity Wars**: Banned overlapping selectors (`.section` vs `.cta`) that silently cancel each other's spacing/padding.
58. ❌ **Missing Fallback Font Stack**: Banned a single custom font with no system-font fallback chain.

### VIII. Content & Copy (Rules 59–63)
59. ❌ **Passive-Voice CTAs**: Banned vague buttons like "Submit" instead of naming the action ("Save changes", "Create account").
60. ❌ **Apologetic or Vague Error Copy**: Banned error messages that apologize without stating what happened or how to fix it.
61. ❌ **Inconsistent Verb Naming Across a Flow**: Banned a button saying "Publish" that produces a toast saying "Uploaded."
62. ❌ **Lorem Ipsum Shipped to Production**: Banned placeholder copy left in a delivered build.
63. ❌ **Empty States With No Action**: Banned "Nothing here yet" screens with no next step offered.

### IX. AI-Generated "Tell" Patterns (Rules 64–66)
64. ❌ **Template Chrome Combo**: Banned stacking eyebrow label + middle-dot meta + em-dash label + arrow-CTA together — the fingerprint of ungrounded generation.
65. ❌ **SaaS-Card-Kit Sameness**: Banned identical rounded-card-plus-shadow treatment applied regardless of subject matter (a toy brand and a fintech dashboard shouldn't look related).
66. ❌ **One Component Library, Every Brief**: Banned reusing the same button/card/hero shapes across unrelated projects without adapting to the brief's own vernacular.

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

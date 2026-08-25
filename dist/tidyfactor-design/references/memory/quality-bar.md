# Memory: quality-bar (Anti-Slop & Design Quality Gate)

Enforces uncompromising design rigor, zero per-page CSS/JS, and token consistency.

---

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
| **D** | **Decision Alignment** | Inconsistent foundation; arbitrary colors ignoring `brand.json`. | 100% synchronized with `.tidyfactor/design-brief.md` and `brand.json`. |

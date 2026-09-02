# Component Anatomy — Reference for `components`/`states`
<!-- last-verified: 2026-09-01 -->

## 1. Atomic Hierarchy (Atomic Design, Adapted)
- **Atoms**: Button, input, label, icon, badge, watermark stamp.
- **Molecules**: Form field, stat counter, nav item, floating verification badge.
- **Organisms**: Card, data table, navbar, 3D book/exhibition card, timeline, modal.
- **Templates**: Organisms arranged into page layout with zero per-page CSS.

---

## 2. Advanced Specialized Organisms & Molecules

### A. Watermark Stamp & Media Protection (`.watermark-stamp`)
- Floating glassmorphic pill badge positioned over showcase media (e.g. `bottom: 12px; inset-inline-start: 12px;`).
- Visuals: `background: rgba(8, 7, 5, 0.85); backdrop-filter: blur(8px); border: 1px solid var(--border-gold);`.
- Protection: Non-draggable images (`-webkit-user-drag: none; user-select: none;`).

### B. 3D Exhibition & Editorial Book Showcase Card (`.book-card`)
- Layout: Asymmetric split (Cover viewport on one side, editorial hierarchy on the other).
- Visuals: Multi-layered spine shadow (`box-shadow: -8px 10px 24px rgba(0,0,0,0.25)`), dynamic hover lift (`translateY(-4px)`), and category badge.

### C. Continuous Architectural Friezes & Motifs (`.lotus-frieze-fullwidth`)
- Layout: Full-width continuous ribbon utilizing SVG `<pattern patternUnits="userSpaceOnUse">` tiled over a single `<rect width="100%" />` element with zero gap.
- Break Pattern: Optional centered floating medallion (`.lotus-frieze-center-emblem`) with subtle border elevation and micro-rotation on hover.

### D. Royal Cartouche & Shenu Ribbon Badges (`.section-eyebrow`, `.badge`)
- Styling: Dual-tone background gradients, gold border (`rgba(201, 136, 24, 0.45)`), inset highlight glow, and authentic cultural iconography.

### E. Responsive Positioning Protocol for Floating Badges & Frame Elements
- Desktop (`min-width: 992px`): Positioned absolutely outside frame boundaries (`position: absolute; inset-inline-end: -8px;`).
- Mobile (`max-width: 768px`): Must convert to centered static blocks (`position: relative; inset: auto; width: 100%; justify-content: center;`) to eliminate mobile horizontal scrolling and layout clipping.

### F. Header & Navigation Bar (`.navbar`)
- Layout: Single-line sticky frosted glass island with gold rim (`white-space: nowrap`).
- Brand Lockup: Logo emblem medallion (`.brand-emblem`) + Bold title (`.brand-title`) + Micro pedigree (`.brand-pedigree`).
- Prohibition: Zero emojis anywhere in the navigation bar. Use crisp inline SVGs (`currentColor`).

### G. Mobile Navigation Drawer (`.mobile-drawer`)
- Structure: Full-height frosted overlay (`backdrop-filter: blur(20px)`), body scroll lock, $\ge 44\times 44\text{px}$ touch targets, and docked bottom action buttons.

---

## 3. The Full 8-State Matrix (Apply per Interactive Component)
`default → hover → focus-visible → active/pressed → disabled`, plus: `loading` (spinner/skeleton), `empty` (illustrated container), `error`, and `success`.

---

## 4. Naming Discipline
One canonical name per real pattern. Use BEM modifiers (`.card--featured`, `.badge--accent`) or data attributes (`[data-theme]`, `[data-filter]`) rather than creating duplicate component structures.

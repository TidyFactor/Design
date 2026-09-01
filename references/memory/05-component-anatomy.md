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

---

## 3. The Full 8-State Matrix (Apply per Interactive Component)
`default → hover → focus-visible → active/pressed → disabled`, plus: `loading` (spinner/skeleton), `empty` (illustrated container), `error`, and `success`.

---

## 4. Naming Discipline
One canonical name per real pattern. Use BEM modifiers (`.card--featured`, `.badge--accent`) or data attributes (`[data-theme]`, `[data-filter]`) rather than creating duplicate component structures.

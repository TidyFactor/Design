# Workflow: init-prototype

One outcome: Scaffold a brand-new, consistent HTML/CSS/JS prototype with a locked design system structure.

## Execution Steps

1. **Identify Operating Mode & CSS Foundation**:
   - Confirm mode (`Init` for fresh prototype).
   - Confirm CSS Foundation (`Native`, `Tailwind Utility`, `daisyUI`, `Hybrid`) per `references/memory/foundations.md`.
2. **Select Design Movement / School**:
   - Select visual movement per `memory/01-design-schools.md` (e.g., Swiss Minimal, Neumorphic, Luxury Minimal, Brutalist, Glassmorphism).
3. **Scaffold Design System Directory (`design-system/`)**:
   - Create `design-system/tokens.css` with CSS variables for colors, typography, radii, spacing, and shadows.
   - Create `design-system/base.css` with CSS resets and HTML element defaults.
   - Create `design-system/components.css` with reusable component classes.
   - Create `design-system/motion.js` and `design-system/interactions.js` for shared interactive behavior.
   - Create `brand.json` for identity defaults.
4. **Build First Prototype Page (`pages/index.html`)**:
   - Assemble page markup consuming `design-system/` files.
   - Ensure zero inline `<style>` or `<script>` tags exist in `index.html`.
5. **Verify Local Prototype**:
   - Verify layout rendering and responsive flow in browser.

## Validation Checklist

- [ ] `design-system/` directory contains `tokens.css`, `base.css`, `components.css`, `motion.js`, and `interactions.js`
- [ ] Exactly one CSS Foundation is active and configured
- [ ] Page markup contains zero inline `<style>` blocks or local `.css` files
- [ ] All visual values in `index.html` trace to tokens in `tokens.css`
- [ ] Typography uses El Messiri for display headings and Tajawal for body copy (if Arabic)
- [ ] `prefers-reduced-motion` media query present in `motion.js`/`tokens.css`

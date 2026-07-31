# Design System Locked Architecture

Operational specification for the file tree and structural consistency rules in `tidyfactor-design` prototypes.

## Locked Project Structure

```
project/
  design-system/
    tokens.css           ← Single source of truth: color, typography, spacing, radii, shadows, motion
    base.css             ← CSS reset + base HTML element styling, inherited by every page
    components.css       ← Reusable component classes (buttons, cards, inputs, modals, navigation)
    utilities.css        ← Optional foundation-dependent helper utilities
    motion.js            ← Shared motion choreography: entrance animations, scroll reveals, easings
    interactions.js     ← Shared UI behavior: dropdowns, modals, tabs, toggles, accordions
    brand.json           ← Identity tokens and brand defaults
  pages/
    <page-name>.html     ← Markup ONLY — no inline <style>, no inline <script> logic
  proto-nav.js           ← Shared prototype toolbar for page-to-page navigation
```

## Structural Consistency Rules

1. **Zero per-page CSS/JS**: No page may carry an inline `<style>` block, local `.css` file, or local behavior script.
2. **Central Component Extensions**: Any new design requirement not covered in `components.css` must extend `components.css` directly—never be patched locally on a page.
3. **Token Dependency**: Every visual value (color hex, font family, pixel/rem spacing, box shadow) must trace to a token in `tokens.css`.

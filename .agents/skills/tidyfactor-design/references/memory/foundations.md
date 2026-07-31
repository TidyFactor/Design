# CSS Foundations Specification

Operational specification for pluggable CSS foundations in `tidyfactor-design`. A foundation is selected once per project and never mixed.

## The 8 Pluggable CSS Foundation Options

1. **Native** (`native`)
   - Pure hand-authored CSS variables and semantic component classes.
   - Zero external CDN dependencies or build steps.
   - Best for custom, signature brand identities and lightweight prototypes.

2. **Tailwind Utility** (`tailwind`)
   - Utility-first CSS using Tailwind CSS v4 via CDN engine.
   - All styling expressed via utility classes on HTML elements.
   - Theme configured via `@theme` or custom properties matching `tokens.css`.

3. **daisyUI** (`daisyui`)
   - Component library built on top of Tailwind CSS CDN.
   - Uses semantic component tags (`btn`, `card`, `modal`, `navbar`).
   - Custom daisyUI theme configured from `brand.json` and `tokens.css`.

4. **Hybrid** (`hybrid`)
   - Composite layout structures (tables, data grids, form fields) powered by daisyUI.
   - Signature brand elements and hero components powered by custom Native CSS classes in `components.css`.

5. **shadcn/ui Primitives** (`shadcn`)
   - Modern accessible component foundation combining Tailwind CSS v4 and Radix UI primitives.
   - Clean slate design tokens mapping CSS variables to HSL/OKLCH color channels.
   - Component markup authored cleanly into `components.css` / components folder.

6. **Pico CSS v2** (`pico`)
   - Minimalist semantic classless/lightweight CSS foundation.
   - Pure HTML5 tags (`<article>`, `<header>`, `<nav>`, `<main>`, `<dialog>`) styled automatically without utility bloat.
   - Ideal for ultra-fast documents, blogs, and reader-focused interfaces.

7. **Bootstrap 5.3** (`bootstrap`)
   - Enterprise-ready responsive framework with native CSS custom properties and theme engine.
   - Native dark mode support (`data-bs-theme="dark"`).
   - Component classes (`btn-primary`, `card`, `modal-dialog`, `table`) mapped to `tokens.css`.

8. **Alpine + Tailwind** (`alpine`)
   - Lightweight micro-interaction engine pairing Alpine.js (`x-data`, `x-show`, `x-on:click`) with Tailwind CSS v4.
   - Enables rich client-side interactivity (dropdowns, tabs, accordions, search filters) with zero build step.

## Rules
- **Foundation Locking**: Lock the CSS foundation during `init` or `clone`. Never alter or mix foundations mid-project.
- **Token Parity**: Every foundation choice must consume variables from `tokens.css` for primary/secondary colors, radii, fonts, and shadows.

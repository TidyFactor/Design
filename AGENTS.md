# AGENTS.md — TidyFactor Design System & Prototyping Engine

Build **interactive, code-native HTML/CSS/JS design prototypes** (Figma alternative) with strict structural visual consistency across all pages. Zero per-page CSS/JS, zero inline `<style>` or `<script>` tags, zero build step. Every visual and interaction decision is made once and lives in `design-system/`.

---

## ⚡ Skill & Modular Slash Commands

This project exposes an Agentic Skill under `.agents/skills/tidyfactor-design/SKILL.md` (and `.claude-skill/SKILL.md`). The following 14 modular sub-commands are supported:

| Command | Purpose | Reference Spec |
|---|---|---|
| `init` | **Primary deliverable** — scaffold design system, tokens, foundation, base components & initial page | `.agents/skills/tidyfactor-design/references/commands/init.md` |
| `school` | Select and document design-movement direction (Brutalism, Glassmorphism, Neumorphism, Minimalist, Swiss, Luxury) | `.agents/skills/tidyfactor-design/references/commands/school.md` |
| `tokens` | Read/scaffold `design-system/tokens.css` & `brand.json` single source of truth | `.agents/skills/tidyfactor-design/references/commands/tokens.md` |
| `palette` | Extract color palette & WCAG 2.1 AA contrast scores via `extract_palette.py` | `.agents/skills/tidyfactor-design/references/commands/palette.md` |
| `components` | Build reusable component library in `design-system/components.css` | `.agents/skills/tidyfactor-design/references/commands/components.md` |
| `page` | Add a new marketing or content page (markup-only, zero page-specific CSS/JS) | `.agents/skills/tidyfactor-design/references/commands/page.md` |
| `dashboard` | Add a new app or dashboard screen with data surfaces and shell layouts | `.agents/skills/tidyfactor-design/references/commands/dashboard.md` |
| `motion` | Motion tokens, micro-interactions, scroll-reveals & transition choreography in `motion.js` | `.agents/skills/tidyfactor-design/references/commands/motion.md` |
| `states` | Define component interactive states (hover, active, focus, disabled, loading, empty, error, success) | `.agents/skills/tidyfactor-design/references/commands/states.md` |
| `flow` | Wire clickable prototype navigation toolbar (`proto-nav.js`) between screens | `.agents/skills/tidyfactor-design/references/commands/flow.md` |
| `i18n` | Arabic/English RTL support, modesty rules & identity typography (El Messiri/Tajawal, never Amiri) | `.agents/skills/tidyfactor-design/references/commands/i18n.md` |
| `audit` | Comprehensive quality-bar & design consistency audit report | `.agents/skills/tidyfactor-design/references/commands/audit.md` |
| `clone` | Convert mode — extract design tokens & component system from reference site/design | `.agents/skills/tidyfactor-design/references/commands/clone.md` |
| `retrofit` | Improve mode — unify a drifted multi-page prototype into a single design system | `.agents/skills/tidyfactor-design/references/commands/retrofit.md` |
| `deploy` | Preview server, static asset packaging & prototype presentation export | `.agents/skills/tidyfactor-design/references/commands/deploy.md` |

---

## Critical Architecture (Non-Negotiable)

1. **Zero Per-Page Styles/Scripts**:
   - `pages/<page-name>.html` contains HTML markup ONLY.
   - **NEVER** write `<style>` blocks, page-specific `.css` files, or page-specific inline `<script>` logic.
2. **Centralized `design-system/` Directory**:
   ```
   design-system/
     tokens.css        ← Color, typography, spacing, border-radius, shadows, motion tokens
     base.css          ← CSS reset, element defaults, typography rules
     components.css    ← Universal component styles (buttons, cards, badges, navbars, modals)
     utilities.css     ← Foundation-dependent layout & utility classes
     motion.js         ← Shared animations, scroll triggers & transition choreography
     interactions.js   ← Shared component behaviors (dropdowns, tabs, accordions, modals)
   ```
3. **Pluggable CSS Foundations** (chosen once per project):
   - **Native**: Pure CSS custom properties & semantic component classes (zero dependencies).
   - **Tailwind Utility**: Utility-first CSS via CDN.
   - **daisyUI**: Tailwind CDN + daisyUI component library themed via tokens.
   - **Hybrid**: daisyUI for composite app widgets + Native CSS for signature brand elements.
4. **Bilingual & Luxury Typography**:
   - Arabic: **El Messiri** (headings) + **Tajawal** (body). **Never Amiri**.
   - Latin: Cormorant Garamond, Oswald, Inter, or Outfit.
   - RTL native: Always support `dir="rtl"` and logical padding/margins (`margin-inline-start`, etc.).

---

## Token Load Routing (Memory Budget Optimization)

| Command | Load ONLY these memory files |
|---|---|
| `init` | `memory/01-design-schools.md` + `memory/02-design-tokens.md` + `memory/05-component-anatomy.md` |
| `school` | `memory/01-design-schools.md` |
| `tokens` | `memory/02-design-tokens.md` |
| `palette` | `memory/02-design-tokens.md` + `memory/10-python-tooling.md` |
| `components` | `memory/05-component-anatomy.md` + `memory/07-consistency-contract.md` |
| `page` | `memory/03-narrative-conversion.md` + `memory/05-component-anatomy.md` |
| `dashboard` | `memory/09-prototype-flow.md` + `memory/05-component-anatomy.md` |
| `motion` | `memory/04-motion-principles.md` |
| `states` | `memory/05-component-anatomy.md` + `memory/07-consistency-contract.md` |
| `flow` | `memory/09-prototype-flow.md` |
| `i18n` | `memory/08-arabic-bilingual.md` |
| `audit` | `memory/06-quality-bar.md` + `memory/07-consistency-contract.md` + `memory/10-python-tooling.md` |
| `clone` | `memory/02-design-tokens.md` + `memory/03-narrative-conversion.md` + `memory/10-python-tooling.md` |
| `retrofit` | `memory/06-quality-bar.md` + `memory/07-consistency-contract.md` |
| `deploy` | `memory/09-prototype-flow.md` + `memory/10-python-tooling.md` |

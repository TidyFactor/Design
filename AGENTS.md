# AGENTS.md — TidyFactor Design System & Full UI Design Lifecycle Engine

Build **interactive, code-native HTML/CSS/JS design prototypes** (Figma alternative) with strict structural visual consistency across all pages. Zero per-page CSS/JS, zero inline `<style>` or `<script>` tags, zero build step. Every visual and interaction decision is made once and lives in `design-system/`.

---

## 🛠️ CLI Execution Modes (Human Terminal Wizard vs AI Agent Non-Interactive)

- **Human Terminal Interactive Mode** (`npx @alwkala/tidyfactor-design`): Launches step-by-step interactive CLI wizard (`readline`) prompting human developers in terminal for target directory, CSS foundation, visual school, and optional brand image color extraction.
- **AI Agent Non-Interactive Mode** (`npx @alwkala/tidyfactor-design -y` or `--foundation=... --school=...`): AI Agents bypass interactive terminal prompts by passing non-interactive flags (`-y` / `--yes`) or setting `AGENT_MODE=1` or `CI=1`.

---

## ⚡ Skill & 24 Modular Slash Commands (7 Lifecycle Stages)

This project exposes an Agentic Skill under `.agents/skills/tidyfactor-design/SKILL.md` (and `.claude-skill/SKILL.md`). The following 24 slash commands covering all 7 stages of the UI Design Lifecycle are supported:

| Stage | Command | Purpose | Reference Spec |
|---|---|---|---|
| **1. Discovery** | `study` | Extract Design DNA (colors, typography, macrostructure) from reference URL/image | `.agents/skills/tidyfactor-design/references/commands/study.md` |
| **1. Discovery** | `brief` | Establish 3-Question Design Context Brief & Fit Test | `.agents/skills/tidyfactor-design/references/commands/brief.md` |
| **2. Foundation** | `init` | **Primary deliverable** — scaffold design system, tokens, foundation, base components & initial page | `.agents/skills/tidyfactor-design/references/commands/init.md` |
| **2. Foundation** | `brand` | Scaffold, extract, or migrate `brand.json` v2 schema | `.agents/skills/tidyfactor-design/references/commands/brand.md` |
| **2. Foundation** | `typography` | Select mood-routed font pairing (7 Arabic + Latin routes) | `.agents/skills/tidyfactor-design/references/commands/typography.md` |
| **2. Foundation** | `school` | Select and document design-movement direction (Minimalist, Brutalism, Glassmorphism, Neumorphism, Swiss, Luxury) | `.agents/skills/tidyfactor-design/references/commands/school.md` |
| **2. Foundation** | `tokens` | Read/scaffold `design-system/tokens.css` & `brand.json` single source of truth | `.agents/skills/tidyfactor-design/references/commands/tokens.md` |
| **2. Foundation** | `palette` | Extract color palette & WCAG 2.1 AA contrast scores via `extract_palette.py` | `.agents/skills/tidyfactor-design/references/commands/palette.md` |
| **2. Foundation** | `assets` | Asset hygiene, web compression & Python image tools | `.agents/skills/tidyfactor-design/references/commands/assets.md` |
| **3. Architecture** | `layout` | Select surface layout archetype (`fullbleed`, `editorial`, `spatial`, `interface`, `minimal`, `product`, `store`, `auto`) | `.agents/skills/tidyfactor-design/references/commands/layout.md` |
| **3. Architecture** | `nav-footer` | Choose Navigation (N1-N9) and Footer (Ft1-Ft8) archetypes | `.agents/skills/tidyfactor-design/references/commands/nav-footer.md` |
| **3. Architecture** | `page` | Add a new marketing or content page (markup-only, zero page-specific CSS/JS) | `.agents/skills/tidyfactor-design/references/commands/page.md` |
| **3. Architecture** | `dashboard` | Add a new app or dashboard screen with data surfaces and shell layouts | `.agents/skills/tidyfactor-design/references/commands/dashboard.md` |
| **4. Components** | `components` | Build reusable component library in `design-system/components.css` with 8-state wrappers | `.agents/skills/tidyfactor-design/references/commands/components.md` |
| **4. Components** | `states` | Define component interactive states (hover, active, focus, disabled, loading, empty, error, success) | `.agents/skills/tidyfactor-design/references/commands/states.md` |
| **5. Motion** | `motion` | Motion tokens, micro-interactions, ambient layers, scroll-film & z-stack layers in `motion.js` | `.agents/skills/tidyfactor-design/references/commands/motion.md` |
| **5. Motion** | `flow` | Wire clickable prototype navigation toolbar (`proto-nav.js`) between screens | `.agents/skills/tidyfactor-design/references/commands/flow.md` |
| **5. Motion** | `i18n` | Arabic/English RTL support, modesty rules & identity typography (El Messiri/Tajawal, never Amiri above 24px) | `.agents/skills/tidyfactor-design/references/commands/i18n.md` |
| **6. Quality** | `perf` | Verify numeric asset performance budgets (hero ≤ 400KB, logo ≤ 40KB, fonts ≤ 3 families / 4 weights) | `.agents/skills/tidyfactor-design/references/commands/perf.md` |
| **6. Quality** | `audit` | Comprehensive quality-bar & design consistency audit report | `.agents/skills/tidyfactor-design/references/commands/audit.md` |
| **6. Quality** | `clone` | Convert mode — extract design tokens & computed styles from reference site | `.agents/skills/tidyfactor-design/references/commands/clone.md` |
| **6. Quality** | `retrofit` | Improve mode — unify a drifted multi-page prototype into a single design system | `.agents/skills/tidyfactor-design/references/commands/retrofit.md` |
| **7. Delivery** | `handoff` | Export developer handoff specs, token map, and component state matrix | `.agents/skills/tidyfactor-design/references/commands/handoff.md` |
| **7. Delivery** | `deploy` | Preview server, static asset packaging & prototype presentation export | `.agents/skills/tidyfactor-design/references/commands/deploy.md` |

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
     brand.json        ← Identity tokens and brand defaults (v2 schema)
   ```
3. **Pluggable CSS Foundations** (chosen once per project):
   - **Native**: Pure CSS custom properties & semantic component classes (zero dependencies).
   - **Tailwind Utility**: Utility-first CSS via CDN.
   - **daisyUI**: Tailwind CDN + daisyUI component library themed via tokens.
   - **Hybrid**: daisyUI for composite app widgets + Native CSS for signature brand elements.
   - **shadcn/ui**: Tailwind v4 + Radix UI accessible primitive tokens & components.
   - **Pico CSS v2**: Semantic classless/lightweight CSS foundation.
   - **Bootstrap 5.3**: Enterprise-ready CSS custom properties & native dark mode themes.
   - **Alpine + Tailwind**: Alpine.js micro-interactions + Tailwind v4 utility engine.
4. **Bilingual & Luxury Typography**:
   - Arabic: **El Messiri** (headings) + **Tajawal** (body). **Never Amiri** above 24px.
   - Latin: Cormorant Garamond, Oswald, Inter, Fraunces, or Outfit.
   - RTL native: Always support `dir="rtl"` and logical padding/margins (`margin-inline-start`, etc.).

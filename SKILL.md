---
name: tidyfactor-design
description: TidyFactor Design track — code-native interactive prototyping (Figma alternative). Builds interactive HTML/CSS/JS prototypes page-by-page (marketing sites, dashboards/app screens) with shared design-system files only (tokens.css, base.css, components.css, motion.js), zero per-page CSS/JS, zero build step. Pluggable CSS foundations (Native, Tailwind utility-first, daisyUI, Hybrid) and full Arabic/RTL support (El Messiri/Tajawal, never Amiri). Trigger on commands "init", "school", "tokens", "palette", "assets", "components", "page", "dashboard", "motion", "states", "flow", "i18n", "audit", "clone", "retrofit", "deploy", or requests like "build a design system", "prototype this website", "design a dashboard prototype", "Figma alternative", "نموذج أولي تفاعلي", "صمّم لوحة تحكم".
---

# TidyFactor Design (Code-Native Interactive Prototyping)

A command dispatcher. Builds professional, interactive HTML/CSS/JS prototypes page-by-page while structurally enforcing design system consistency.

## Commands

| User intent | Command | What it loads |
|---|---|---|
| "Start a brand-new prototype / design system" | `references/commands/init.md` | `references/workflows/init-prototype.md` + `references/memory/architecture.md` + `references/memory/foundations.md` |
| "Choose design movement / visual direction" | `references/commands/school.md` | `memory/01-design-schools.md` |
| "Manage design tokens and brand colors" | `references/commands/tokens.md` | `memory/02-design-tokens.md` + `references/memory/architecture.md` |
| "Scaffold color palette from reference image" | `references/commands/palette.md` | `memory/02-design-tokens.md` |
| "Asset hygiene and image optimization" | `references/commands/assets.md` | `memory/10-python-tooling.md` |
| "Manage shared UI components" | `references/commands/components.md` | `memory/05-component-anatomy.md` + `references/memory/architecture.md` |
| "Add a new content or marketing page" | `references/commands/page.md` | `references/workflows/init-prototype.md` + `memory/05-component-anatomy.md` |
| "Add a new dashboard or app screen" | `references/commands/dashboard.md` | `references/workflows/init-prototype.md` + `memory/05-component-anatomy.md` |
| "Add shared animations or transitions" | `references/commands/motion.md` | `memory/04-motion-principles.md` |
| "Define interactive component states" | `references/commands/states.md` | `memory/05-component-anatomy.md` |
| "Wire interactive prototype navigation" | `references/commands/flow.md` | `memory/09-prototype-flow.md` |
| "Add Arabic/RTL or bilingual localization" | `references/commands/i18n.md` | `memory/08-arabic-bilingual.md` |
| "Audit prototype structural consistency" | `references/commands/audit.md` | `references/workflows/audit-prototype.md` + `memory/06-quality-bar.md` + `memory/07-consistency-contract.md` |
| "Extract design system from external site" | `references/commands/clone.md` | `references/workflows/clone-prototype.md` + `memory/03-narrative-conversion.md` |
| "Unify drifted prototype under design system" | `references/commands/retrofit.md` | `references/workflows/retrofit-prototype.md` + `memory/07-consistency-contract.md` |
| "Local preview and deployment" | `references/commands/deploy.md` | `memory/06-quality-bar.md` |

## Non-negotiable constraints

1. **Zero per-page CSS/JS**: Every visual token and component style lives inside `design-system/`. Pages contain markup only.
2. **Single CSS Foundation**: Lock Native, Tailwind, daisyUI, or Hybrid once per project; never mix foundations.
3. **Typography Discipline**: Arabic display headings use El Messiri, body copy uses Tajawal. Never use Amiri for headings above 24px.
4. **Reduced Motion**: `prefers-reduced-motion` compliance is required on all animated interactions.

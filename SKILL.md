---
name: tidyfactor-design
version: 1.3.8
description: TidyFactor Design track — code-native UI design lifecycle engine (Figma alternative). Supports all 7 stages of UI design (Discovery, Foundation, Architecture, Components, Motion, Quality, Delivery) with zero per-page CSS/JS and zero build step. Pluggable CSS foundations (Native, Tailwind utility-first, daisyUI, Hybrid, shadcn, Pico, Bootstrap, Alpine) and full Arabic/RTL support (El Messiri/Tajawal, never Amiri above 24px). Trigger on commands "study", "brief", "init", "brand", "typography", "school", "tokens", "palette", "assets", "layout", "nav-footer", "components", "page", "dashboard", "motion", "states", "flow", "i18n", "perf", "audit", "clone", "retrofit", "handoff", "deploy", or requests like "build a design system", "UI design lifecycle", "prototype this website", "Figma alternative", "نموذج أولي تفاعلي", "صمّم لوحة تحكم".
---

# TidyFactor Design (Code-Native UI Design Lifecycle Engine)

A command dispatcher supporting the full UI design lifecycle—from initial discovery through developer handoff—with zero build steps and complete design system consistency.

## Lifecycle Commands (24 Commands across 7 Stages)

| Lifecycle Stage | User intent / Command | Command File | What it loads |
|---|---|---|---|
| **1. Discovery** | "Extract design DNA from reference URL/image" | `references/commands/study.md` | `memory/01-design-schools.md` + `memory/06-quality-bar.md` |
| **1. Discovery** | "Establish 3-question design context brief" | `references/commands/brief.md` | `memory/01-design-schools.md` + `memory/13-layout-archetypes.md` |
| **2. Foundation** | "Start brand-new design system / prototype" | `references/commands/init.md` | `references/workflows/init-prototype.md` + `references/memory/architecture.md` + `references/memory/foundations.md` |
| **2. Foundation** | "Scaffold or manage brand.json v2 schema" | `references/commands/brand.md` | `memory/11-brand-json-v2.md` + `memory/02-design-tokens.md` |
| **2. Foundation** | "Select mood-routed typography pairing" | `references/commands/typography.md` | `memory/12-typography-matrix.md` + `memory/08-arabic-bilingual.md` |
| **2. Foundation** | "Choose design movement / visual direction" | `references/commands/school.md` | `memory/01-design-schools.md` |
| **2. Foundation** | "Manage design tokens and brand colors" | `references/commands/tokens.md` | `memory/02-design-tokens.md` + `references/memory/architecture.md` |
| **2. Foundation** | "Scaffold color palette from reference image" | `references/commands/palette.md` | `memory/02-design-tokens.md` |
| **2. Foundation** | "Asset hygiene and image optimization" | `references/commands/assets.md` | `memory/10-python-tooling.md` |
| **3. Architecture** | "Select macrostructure layout archetype" | `references/commands/layout.md` | `memory/13-layout-archetypes.md` + `references/memory/architecture.md` |
| **3. Architecture** | "Choose navigation (N1-N9) and footer (Ft1-Ft8)" | `references/commands/nav-footer.md` | `memory/14-nav-footer-catalog.md` + `memory/06-quality-bar.md` |
| **3. Architecture** | "Add a new content or marketing page" | `references/commands/page.md` | `references/workflows/init-prototype.md` + `memory/05-component-anatomy.md` |
| **3. Architecture** | "Add a new dashboard or app screen" | `references/commands/dashboard.md` | `references/workflows/init-prototype.md` + `memory/05-component-anatomy.md` |
| **4. Components** | "Manage shared UI components (8-state wrappers)" | `references/commands/components.md` | `memory/05-component-anatomy.md` + `references/memory/architecture.md` |
| **4. Components** | "Define interactive component states" | `references/commands/states.md` | `memory/05-component-anatomy.md` |
| **5. Motion** | "Add shared animations, recipes & ambient layers" | `references/commands/motion.md` | `memory/04-motion-principles.md` |
| **5. Motion** | "Wire interactive prototype navigation" | `references/commands/flow.md` | `memory/09-prototype-flow.md` |
| **5. Motion** | "Add Arabic/RTL or bilingual localization" | `references/commands/i18n.md` | `memory/08-arabic-bilingual.md` |
| **6. Quality** | "Verify asset performance budgets & size limits" | `references/commands/perf.md` | `memory/15-performance-budget.md` |
| **6. Quality** | "Audit structural consistency & quality bar" | `references/commands/audit.md` | `references/workflows/audit-prototype.md` + `memory/06-quality-bar.md` + `memory/07-consistency-contract.md` |
| **6. Quality** | "Extract design system from external site" | `references/commands/clone.md` | `references/workflows/clone-prototype.md` + `memory/03-narrative-conversion.md` |
| **6. Quality** | "Unify drifted prototype under design system" | `references/commands/retrofit.md` | `references/workflows/retrofit-prototype.md` + `memory/07-consistency-contract.md` |
| **7. Delivery** | "Export developer handoff specs & token map" | `references/commands/handoff.md` | `memory/11-brand-json-v2.md` + `memory/05-component-anatomy.md` |
| **7. Delivery** | "Local preview and deployment" | `references/commands/deploy.md` | `memory/06-quality-bar.md` |

## Non-negotiable constraints

1. **Zero per-page CSS/JS**: Every visual token and component style lives inside `design-system/`. Pages contain markup only.
2. **Single CSS Foundation**: Lock Native, Tailwind, daisyUI, Hybrid, shadcn, Pico, Bootstrap, or Alpine once per project; never mix foundations.
3. **Typography Discipline**: Arabic display headings use El Messiri, body copy uses Tajawal. Never use Amiri for headings above 24px.
4. **Reduced Motion**: `prefers-reduced-motion` compliance is required on all animated interactions.
5. **Anti-Slop Bar**: Reject the 16 Named AI Anti-Pattern Tells and require Pre-Emit Self-Critique score stamps (`/* Pre-emit critique: P5 H4 E5 S4 R5 V5 */`).

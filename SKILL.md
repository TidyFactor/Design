---
name: tidyfactor-design
description: "Code-native UI design lifecycle engine (Figma alternative) with Contextual Decision Layer (CDL). Supports all 7 design stages with zero per-page CSS/JS and pluggable CSS foundations (Native, Tailwind, daisyUI, Pico, Hybrid). Trigger on commands 'brief', 'study', 'init', 'brand', 'tokens', 'palette', 'layout', 'components', 'page', 'dashboard', 'motion', 'i18n', 'audit', 'deploy', or design system requests."
---
# TidyFactor Design (Code-Native UI Design Lifecycle Engine)

A command dispatcher supporting the full UI design lifecycle—from discovery through developer handoff—with zero build steps and complete design system consistency.

## Lifecycle Commands (7 Stages)

| Lifecycle Stage | User intent | Command | What it loads |
|---|---|---|---|
| **1. Discovery** | Strategic Design Discovery & Brief Resolution | `references/commands/brief.md` | `references/workflows/brief.md` + `references/memory/decision-points.md` + `references/memory/quality-bar.md` |
| **1. Discovery** | Extract design DNA from reference URL/image | `references/commands/study.md` | `references/commands/study.md` + `references/memory/01-design-schools.md` |
| **2. Foundation** | Start brand-new design system / prototype | `references/commands/init.md` | `references/workflows/init-prototype.md` + `references/memory/architecture.md` + `references/memory/foundations.md` |
| **2. Foundation** | Scaffold or manage brand.json v2 schema | `references/commands/brand.md` | `references/commands/brand.md` + `references/memory/11-brand-json-v2.md` |
| **2. Foundation** | Select mood-routed typography pairing | `references/commands/typography.md` | `references/commands/typography.md` + `references/memory/12-typography-matrix.md` |
| **2. Foundation** | Choose design movement / visual direction | `references/commands/school.md` | `references/commands/school.md` + `references/memory/01-design-schools.md` |
| **2. Foundation** | Manage design tokens and brand colors | `references/commands/tokens.md` | `references/commands/tokens.md` + `references/memory/02-design-tokens.md` |
| **2. Foundation** | Scaffold color palette from reference image | `references/commands/palette.md` | `references/commands/palette.md` + `references/memory/02-design-tokens.md` |
| **2. Foundation** | Asset hygiene and image optimization | `references/commands/assets.md` | `references/commands/assets.md` + `references/memory/10-python-tooling.md` |
| **3. Architecture** | Select macrostructure layout archetype | `references/commands/layout.md` | `references/commands/layout.md` + `references/memory/13-layout-archetypes.md` |
| **3. Architecture** | Choose navigation (N1-N9) and footer (Ft1-Ft8) | `references/commands/nav-footer.md` | `references/commands/nav-footer.md` + `references/memory/14-nav-footer-catalog.md` |
| **3. Architecture** | Add a new content or marketing page | `references/commands/page.md` | `references/workflows/init-prototype.md` + `references/memory/05-component-anatomy.md` |
| **3. Architecture** | Add a new dashboard or app screen | `references/commands/dashboard.md` | `references/workflows/init-prototype.md` + `references/memory/05-component-anatomy.md` |
| **4. Components** | Manage shared UI components (8-state wrappers) | `references/commands/components.md` | `references/commands/components.md` + `references/memory/05-component-anatomy.md` |
| **4. Components** | Define interactive component states | `references/commands/states.md` | `references/commands/states.md` + `references/memory/05-component-anatomy.md` |
| **5. Motion** | Add shared animations, recipes & ambient layers | `references/commands/motion.md` | `references/commands/motion.md` + `references/memory/04-motion-principles.md` |
| **5. Motion** | Wire interactive prototype navigation | `references/commands/flow.md` | `references/commands/flow.md` + `references/memory/09-prototype-flow.md` |
| **5. Motion** | Add Arabic/RTL or bilingual localization | `references/commands/i18n.md` | `references/commands/i18n.md` + `references/memory/08-arabic-bilingual.md` |
| **6. Quality** | Verify asset performance budgets & size limits | `references/commands/perf.md` | `references/commands/perf.md` + `references/memory/15-performance-budget.md` |
| **6. Quality** | Audit structural consistency & quality bar | `references/commands/audit.md` | `references/workflows/audit-prototype.md` + `references/memory/quality-bar.md` |
| **6. Quality** | Extract design system from external site | `references/commands/clone.md` | `references/workflows/clone-prototype.md` + `references/memory/03-narrative-conversion.md` |
| **6. Quality** | Unify drifted prototype under design system | `references/commands/retrofit.md` | `references/workflows/retrofit-prototype.md` + `references/memory/07-consistency-contract.md` |
| **7. Delivery** | Export developer handoff specs & token map | `references/commands/handoff.md` | `references/commands/handoff.md` + `references/memory/11-brand-json-v2.md` |
| **7. Delivery** | Local preview and deployment | `references/commands/deploy.md` | `references/commands/deploy.md` + `references/memory/06-quality-bar.md` |

Read only the command file that matches the request. Do not load all commands simultaneously.

## Non-Negotiable Invariants

1. **Contextual Decision Layer (CDL)**: Resolve design baselines via `/brief` or `.tidyfactor/design-brief.md` before emitting code.
2. **Zero per-page CSS/JS**: Every visual token and component style lives inside `design-system/`. Pages contain markup only.
3. **Single CSS Foundation**: Lock Native, Tailwind, daisyUI, Pico, or Hybrid once per project; never mix foundations.
4. **Typography Discipline**: Arabic display headings use El Messiri, body copy uses Tajawal. Never use Amiri for headings above 24px.
5. **7-Axis Pre-Emit Critique**: All components and layouts must be evaluated with `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`.

---
name: tidyfactor-design
description: "Code-native UI design lifecycle engine (Figma alternative) with Contextual Decision Layer (CDL). Supports all 7 design stages with zero per-page CSS/JS and pluggable CSS foundations (Native, Tailwind, daisyUI, Pico, Hybrid). Trigger on commands 'brief', 'study', 'init', 'brand', 'tokens', 'palette', 'layout', 'components', 'page', 'dashboard', 'motion', 'i18n', 'audit', 'deploy', or design system requests."
---

# TidyFactor Design (Code-Native UI Design Lifecycle Engine)

A command dispatcher supporting the full UI design lifecycle—from discovery through developer handoff—with zero build steps and complete design system consistency.

## Commands

| User intent | Command | What it loads |
|---|---|---|
| Strategic Discovery & Brief Resolution | `references/commands/brief.md` | `workflows/brief.md` + `memory/decision-points.md` + `memory/06-quality-bar.md` |
| Extract design DNA from reference | `references/commands/study.md` | `commands/study.md` + `memory/01-design-schools.md` + `memory/06-quality-bar.md` |
| Start brand-new design system / prototype | `references/commands/init.md` | `workflows/init-prototype.md` + `memory/architecture.md` + `memory/foundations.md` |
| Scaffold or manage brand tokens (YAML / JSON) | `references/commands/brand.md` | `commands/brand.md` + `memory/11-brand-json-v2.md` |
| Mood-routed typography pairing | `references/commands/typography.md` | `commands/typography.md` + `memory/12-typography-matrix.md` |
| Select design school & movement | `references/commands/school.md` | `commands/school.md` + `memory/01-design-schools.md` |
| Design tokens, palette & color extraction | `references/commands/tokens.md` | `commands/tokens.md` + `memory/02-design-tokens.md` |
| Asset hygiene, media & image optimization | `references/commands/assets.md` | `commands/assets.md` + `memory/10-python-tooling.md` |
| Macrostructure layout archetype selection | `references/commands/layout.md` | `commands/layout.md` + `memory/13-layout-archetypes.md` |
| Navigation (N1-N9) & Footer (Ft1-Ft8) systems | `references/commands/nav-footer.md` | `commands/nav-footer.md` + `memory/14-nav-footer-catalog.md` |
| Add content/marketing page or app screen | `references/commands/page.md` | `workflows/init-prototype.md` + `memory/05-component-anatomy.md` |
| Manage shared UI components & 8-state catalog | `references/commands/components.md` | `commands/components.md` + `memory/05-component-anatomy.md` |
| Core Component Matrices (Eyebrow, Hero, Cards, CTA, Seams, Metrics) | `references/commands/components.md` | `memory/21-eyebrow-kicker-matrix.md` through `28-shared-motion-primitives.md` |
| Shared animations, scroll & motion recipes | `references/commands/motion.md` | `commands/motion.md` + `memory/04-motion-principles.md` + `memory/28-shared-motion-primitives.md` |
| Interactive prototype navigation flow | `references/commands/flow.md` | `commands/flow.md` + `memory/09-prototype-flow.md` |
| Arabic/RTL localization & bidirectional UI | `references/commands/i18n.md` | `commands/i18n.md` + `memory/08-arabic-bilingual.md` |
| Asset performance budget & size verification | `references/commands/perf.md` | `commands/perf.md` + `memory/15-performance-budget.md` |
| Structural consistency audit & quality bar | `references/commands/audit.md` | `workflows/audit-prototype.md` + `memory/06-quality-bar.md` |
| Extract design system from external URL/clone | `references/commands/clone.md` | `workflows/clone-prototype.md` + `memory/03-narrative-conversion.md` |
| Unify drifted prototype under design system | `references/commands/retrofit.md` | `workflows/retrofit-prototype.md` + `memory/07-consistency-contract.md` |
| Developer handoff specs & CSS variable map | `references/commands/handoff.md` | `commands/handoff.md` + `memory/11-brand-json-v2.md` |
| Local preview and static deployment | `references/commands/deploy.md` | `commands/deploy.md` + `memory/06-quality-bar.md` |

Read only the command file that matches the request. Do not load all commands simultaneously.

## Non-Negotiable Invariants

1. **Contextual Decision Layer (CDL)**: Resolve design baselines via `/brief` or `.tidyfactor/design-brief.md` before emitting code.
2. **Zero per-page CSS/JS**: Every visual token and component style lives inside `design-system/`. Pages contain markup only.
3. **Single CSS Foundation**: Lock Native, Tailwind, daisyUI, Pico, or Hybrid once per project; never mix foundations.
4. **Typography Discipline**: Arabic display headings use El Messiri, body copy uses Tajawal. Never use Amiri for headings above 24px.
5. **7-Axis Pre-Emit Critique**: All components and layouts must be evaluated with `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`.

## Tooling Scope (Rule 10)

- **Languages**: Python 3 (stdlib, Pillow, rembg)
- **Mutations**: Read-only audits (`audit_design`), palette token generation (`extract_palette`), image optimization (`optimize_media`)
- **Network**: None required (100% offline deterministic execution)

## Skill vs MCP Boundary (Rule 12)

- **Inside Skill**: Static design tokens, typography pairings, layout archetypes, component matrices (21–28), and zero-build CSS templates.
- **MCP Layer**: Companion MCP tools invocable via `tidyfactor-brain`'s `run_skill_tool(skill_id="tidyfactor-design", ...)`; live remote asset scraping and database operations delegate to external MCP servers.

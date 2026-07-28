---
name: tidyfactor-design
description: TidyFactor Design track — an AI-era, code-native alternative to Figma. Builds professional, interactive HTML/CSS/JS prototypes page-by-page (marketing sites, dashboards/app screens) while structurally guaranteeing every page stays visually consistent — shared design-system files only (tokens.css, base.css, components.css, motion.js), zero per-page CSS/JS, zero build step. Standalone — no dependency on any other design/frontend skill. Pluggable CSS foundation chosen once per project (Native, Tailwind utility-first, daisyUI, or Hybrid), full Arabic/RTL and bilingual support (El Messiri/Tajawal, never Amiri), click-through prototype flows between pages. Trigger on "init", "school", "tokens", "components", "page", "dashboard", "motion", "states", "flow", "i18n", "audit", "clone", "retrofit", "deploy", or "build a design system", "prototype this website", "design a dashboard prototype", "Figma alternative", "نموذج أولي تفاعلي", "صمّم لوحة تحكم". Covers Init, Convert (clone), Improve (retrofit).
---

# TidyFactor Design (Interactive Prototyping — a Figma Alternative)

Part of the TidyFactor skill library in spirit and command-library format (see
`references/tidyfactor-vision.md`) — but **fully standalone**: it doesn't call
into `frontend-design`, `tidyfactor-html`, or any other skill, and none of
them call into it. Same philosophy, independent tool, different use case.

## What this is, precisely

A **prototyping tool**, not a production-site builder: the deliverable is a
professional-grade, clickable, animated HTML/CSS/JS prototype — for a
marketing site of any kind, or for dashboard/app screens — built one page at
a time, where **consistency across pages is structural, not reviewed-in**.
No page may carry its own `<style>` block, its own `.css` file, or its own
behavior script. Every visual and interactive decision is made once, lives in
`design-system/`, and every page only *consumes* it.

**When this is the right tool vs `tidyfactor-html`:** the brief is about
exploring/proving a visual and interaction direction, fast, across many
pages, before (or instead of) production engineering → this skill. The brief
already has real content/data and needs to actually ship on free hosting
→ `tidyfactor-html`. Neither depends on the other; a project can move from
one to the other, but that's the user's call, never assumed.

## The locked architecture (non-negotiable, applies to every command)

```
project/
  design-system/
    tokens.css        ← single source of truth: color, type, space, radius, shadow, motion
    base.css           ← reset + base element styles, inherited by every page
    components.css       ← every reusable component class, one place only
    utilities.css          ← optional, foundation-dependent (see foundations/)
    motion.js               ← shared choreography: entrance, scroll-reveal, easing tokens
    interactions.js          ← shared component behavior: dropdown, modal, tabs, toggles
    brand.json
  pages/
    <page-name>.html    ← markup ONLY — no inline <style>, no inline <script> logic
  proto-nav.js           ← shared, dev-only prototype toolbar (jump between pages/states)
```

A design decision that doesn't fit an existing `components.css` class is
never solved by writing page-specific CSS — it's solved by extending
`components.css` itself (see `page`/`components` commands), so the next page
inherits it too.

## Step 0 — Identify the mode (ask if not obvious)

> "What are we doing?
> 1. **Init** — start a brand-new prototype/design system from scratch
> 2. **Convert** (`clone`) — extract a design direction from an existing
>    reference (site, screenshots) and rebuild it as our own token/component
>    system
> 3. **Improve** (`retrofit`) — an existing prototype has drifted (per-page
>    CSS, inconsistent components) and needs to be unified"

## Step 0b — Identify the CSS foundation (ask once, never mid-project)

> "Which CSS foundation for this project?
> 1. **Native** — hand-authored semantic component classes, zero dependency
> 2. **Tailwind Utility** — Tailwind CDN, utility classes only, no component
>    layer
> 3. **daisyUI** — Tailwind CDN + daisyUI plugin, full component library,
>    themed from our tokens
> 4. **Hybrid** — daisyUI for composite components (tables, modals, forms) +
>    Native classes for signature/identity elements"

Full detail on each in `references/foundations/`. Never mix foundations
within one project — this is exactly as strict as `tidyfactor-html`'s
componentization-method rule, for the same reason.

## Command Index

| Command | Purpose | Reference |
|---|---|---|
| `init` | One-pass foundation: mode + CSS foundation choice + school + tokens + brand.json + base components + first page | `references/commands/init.md` |
| `school` | Choose and document a conscious design-movement direction | `references/commands/school.md` |
| `tokens` | Design token system + `brand.json` — the single source of truth | `references/commands/tokens.md` |
| `components` | Shared component library in `components.css` (+ daisyUI/Tailwind mapping per foundation) | `references/commands/components.md` |
| `page` | Add a new marketing/content page — markup-only, zero drift | `references/commands/page.md` |
| `dashboard` | Add a new app/dashboard screen — shell, data surfaces, states | `references/commands/dashboard.md` |
| `motion` | Shared animation/interaction layer | `references/commands/motion.md` |
| `states` | Interactive states per component (hover/active/empty/loading/error/success) | `references/commands/states.md` |
| `flow` | Click-through prototype navigation between pages (present mode) | `references/commands/flow.md` |
| `i18n` | Arabic/RTL, bilingual sites, El Messiri/Tajawal typography | `references/commands/i18n.md` |
| `audit` | Structural consistency + quality-bar report (read-only) | `references/commands/audit.md` |
| `clone` | Convert mode — extract a design system from an existing reference | `references/commands/clone.md` |
| `retrofit` | Improve mode — unify a drifted prototype under one system | `references/commands/retrofit.md` |
| `deploy` | Local preview / client presentation / export | `references/commands/deploy.md` |

New commands follow `references/commands/_template.md`.

## Command Sequencing & Phases

1. **Phase 1 — Foundation (once).** `tokens` → `school` → `components` — in
   that order: tokens exist before anything can reference them, the design
   direction is chosen before components are styled, components exist before
   any page is built.
2. **Phase 2 — Build (repeats per page).** `page` or `dashboard` → `motion`
   (as needed) → `states` (as needed) — the recurring loop for growing the
   prototype.
3. **Phase 3 — Assemble & present.** `flow` (once enough pages exist to
   connect) → `i18n` (once, or per-locale) → `audit` (before every client
   review) → `deploy` (always last).

`clone` and `retrofit` are entry points, not phase members — `clone` hands
off into Phase 1 once the target direction is agreed; `retrofit` runs `audit`
first, then only the phases the findings require.

## Running a single command
1. Confirm mode (Step 0) and CSS foundation (Step 0b) — every command's
   output shape depends on both.
2. Read the matching reference file in full before acting.
3. Confirm `design-system/tokens.css` and `components.css` exist and are
   current before touching any page — a page built against a stale
   component set is exactly the drift this skill exists to prevent.
4. Execute one page/component/concern at a time.
5. Report using that command's checklist.

## Running a full mode end-to-end
- **Init**: `init` alone runs Phase 1 plus the first page/screen in one pass.
- **Convert**: `clone` first, then Phase 1→3 in full.
- **Improve**: `audit` first (read-only), then only the phases the confirmed
  findings require.

## Hard constraints (apply to every command)
- No page-level `.css`/`.js` files, ever. No inline `<style>`. No inline
  `<script>` beyond a single `<script src="...">` tag set shared across all
  pages.
- No hardcoded hex/font/spacing value in any page when a token exists —
  trace every visual value to `tokens.css` (or the foundation's theme
  config, for daisyUI).
- One CSS foundation per project — never mixed.
- `prefers-reduced-motion` and a missing-asset fallback are non-negotiable
  on every page.
- Arabic support is a first-class capability, not an add-on: `html[dir]`
  correctness, El Messiri (headings) + Tajawal (body), **never Amiri** —
  see `references/commands/i18n.md` and `memory/08-arabic-bilingual.md`.
- A design decision with no home in `components.css` gets added there via
  `components` — never patched locally on the page that needed it.

## Related skills
- Needs the prototype turned into a shippable, data-driven static site →
  `tidyfactor-html` (separate handoff, not a dependency).
- Needs a real backend/database behind a dashboard screen designed here →
  `tidyfactor-php-micro` / `tidyfactor-php-mono`.
- A cinematic, single-product scroll-driven landing page specifically →
  `tidyfactor-cinematic` (different technique — canvas film, not this
  skill's multi-page component system).

# ⚡ TidyFactor Design: Complete 24-Command Technical Reference

This guide provides exhaustive technical specifications, injected operational memory files, execution mechanics, and primary deliverables for all 24 slash commands in **TidyFactor Design**.

---

## 🧭 Command Matrix & Architecture Overview

The 24 commands are organized across the **7 UI Design Lifecycle Stages**:

```
1. Discovery    →  /brief, /study
2. Foundation   →  /init, /brand, /typography, /school, /tokens, /palette, /assets
3. Architecture →  /layout, /nav-footer, /page, /dashboard
4. Components   →  /components, /states
5. Motion       →  /motion, /flow, /i18n
6. Quality      →  /perf, /audit, /clone, /retrofit
7. Delivery     →  /handoff, /deploy
```

---

## Stage 1: Discovery

### `/brief`
- **Purpose**: Establishes strategic design context using the Contextual Decision Layer (CDL v2.0) and DM-DA protocol.
- **Injected Memory**:
  - `workflows/brief.md`
  - `memory/decision-points.md`
  - `memory/06-quality-bar.md`
- **Execution Mechanics**:
  - Automatically computes $\text{Unknowns} = \text{Required Decisions} - (\text{Discovered Facts} \cup \text{Brain KIs})$.
  - Executes **[MODE A] Smart 3-Round Protocol** or **[MODE B] Relentless Debate & Interview**.
- **Primary Outputs**:
  - `.tidyfactor/brief.md` (Local SSOT baseline).
  - `.tidyfactor/design-brief.snapshot.yaml` (Hash-tracked state).
  - `architectural_debate_synthesis.md` (If Mode B was executed).

### `/study`
- **Purpose**: Reverse-engineers the visual DNA, layout rhythm, and typography hierarchy from a reference URL or screenshot.
- **Injected Memory**:
  - `commands/study.md`
  - `memory/01-design-schools.md`
  - `memory/06-quality-bar.md`
- **Execution Mechanics**:
  - Breaks down the reference into 5 analytical pillars: Color Atmosphere, Spatial Rhythm, Type Scale, Motion Philosophy, and Interaction Density.
- **Primary Outputs**:
  - Markdown visual DNA report with extracted hex tokens and layout archetypes.

---

## Stage 2: Foundation

### `/init`
- **Purpose**: Scaffolds a zero-build design system workspace and semantic HTML foundation.
- **Injected Memory**:
  - `workflows/init-prototype.md`
  - `memory/architecture.md`
  - `memory/foundations.md`
- **Primary Outputs**:
  - Directory `design-system/` (`tokens.css`, `components.css`, `motion.js`).
  - Semantic `index.html` referencing shared tokens.

### `/brand`
- **Purpose**: Scaffolds, audits, and manages `brand.yaml` design token SSOT.
- **Injected Memory**:
  - `commands/brand.md`
  - `memory/11-brand-json-v2.md`
  - `schemas/brand.schema.json`
- **Primary Outputs**:
  - Validated `brand.yaml` and synchronized legacy fallback `brand.json`.

### `/typography`
- **Purpose**: Configures mood-routed typography pairings for Latin and Arabic scripts with modular ratio scales.
- **Injected Memory**:
  - `commands/typography.md`
  - `memory/12-typography-matrix.md`
- **Primary Outputs**:
  - Typography tokens in `design-system/tokens.css` with Google Fonts preconnect tags.

### `/school`
- **Purpose**: Selects and locks one of 6 architectural design movements (Minimalist, Neo-Brutalist, Glassmorphic, Neo-Skeuomorphic, Warm Editorial, Playful).
- **Injected Memory**:
  - `commands/school.md`
  - `memory/01-design-schools.md`
- **Primary Outputs**:
  - Updated visual movement tokens in `brand.yaml`.

### `/tokens`
- **Purpose**: Manages, audits, and generates CSS custom properties conforming to the 8pt spacing grid.
- **Injected Memory**:
  - `commands/tokens.md`
  - `memory/02-design-tokens.md`
- **Primary Outputs**:
  - Synchronized `design-system/tokens.css`.

### `/palette`
- **Purpose**: Extracts color tokens and calculates WCAG 2.1 AAA contrast ratios across light and dark modes.
- **Injected Memory**:
  - `commands/palette.md`
  - Runtime tool: `scripts/extract_palette.py`
- **Primary Outputs**:
  - Verified semantic color variables (`--bg`, `--surface`, `--text-primary`, `--accent`).

### `/assets`
- **Purpose**: Performs image optimization, WebP conversion, dimension budgeting, and background removal.
- **Injected Memory**:
  - `commands/assets.md`
  - Runtime tool: `scripts/optimize_images.py`
- **Primary Outputs**:
  - Optimized images in `assets/` (strictly $\le 150\text{ KB}$ per asset).

---

## Stage 3: Architecture

### `/layout`
- **Purpose**: Scaffolds macrostructure layout archetypes (L1: Hero+Story, L2: Split App, L3: Sidebar Dashboard, L4: Editorial Grid).
- **Injected Memory**:
  - `commands/layout.md`
  - `memory/13-layout-archetypes.md`
- **Primary Outputs**:
  - Responsive container grid and layout wrapper classes in `tokens.css`.

### `/nav-footer`
- **Purpose**: Wires production navigation shells (N1–N9) and responsive footers (Ft1–Ft8).
- **Injected Memory**:
  - `commands/nav-footer.md`
  - `memory/14-nav-footer-catalog.md`
- **Primary Outputs**:
  - Semantic `<header>` and `<footer>` components wired to design tokens.

### `/page`
- **Purpose**: Composes token-disciplined marketing or content pages (`pages/<name>.html`).
- **Injected Memory**:
  - `workflows/init-prototype.md`
  - `memory/05-component-anatomy.md`
- **Primary Outputs**:
  - Markup-only HTML page reading shared tokens with zero per-page CSS.

### `/dashboard`
- **Purpose**: Assembles data-dense admin or app screens with KPI cards, data tables, and sidebar rails.
- **Injected Memory**:
  - `workflows/init-prototype.md`
  - `memory/05-component-anatomy.md`
- **Primary Outputs**:
  - Dashboard template with tabular number alignment (`font-variant-numeric: tabular-nums`).

---

## Stage 4: Components

### `/components`
- **Purpose**: Authors reusable UI primitives adhering to strict component anatomy.
- **Injected Memory**:
  - `commands/components.md`
  - `memory/05-component-anatomy.md`
  - Matrices `21-` through `27-`
- **Primary Outputs**:
  - Drop-in component CSS classes in `design-system/components.css`.

### `/states`
- **Purpose**: Enforces mandatory 8-state interactive wrappers (idle, hover, focus, active, loading, disabled, error, success).
- **Injected Memory**:
  - `commands/states.md`
  - `memory/05-component-anatomy.md`
- **Primary Outputs**:
  - Comprehensive pseudo-class and state styles eliminating unresponsive buttons or controls.

---

## Stage 5: Motion

### `/motion`
- **Purpose**: Configures physics-based easing curves, scroll choreography, and GSAP transitions.
- **Injected Memory**:
  - `commands/motion.md`
  - `memory/04-motion-principles.md`
  - `memory/28-shared-motion-primitives.md`
- **Primary Outputs**:
  - `design-system/motion.js` with `@media (prefers-reduced-motion)` fallbacks.

### `/flow`
- **Purpose**: Wires client-side interactive prototype navigation and state transitions between screens.
- **Injected Memory**:
  - `commands/flow.md`
  - `memory/09-prototype-flow.md`
- **Primary Outputs**:
  - Interactive screen-linking logic in `proto-nav.js`.

### `/i18n`
- **Purpose**: Enforces bi-directional RTL layout mirroring and tailored Arabic typography.
- **Injected Memory**:
  - `commands/i18n.md`
  - `memory/08-arabic-bilingual.md`
- **Primary Outputs**:
  - Logical CSS properties (`margin-inline-start`, `dir="rtl"`) with balanced optical type scaling.

---

## Stage 6: Quality

### `/perf`
- **Purpose**: Audits the asset performance budget and enforces page weight ceilings.
- **Injected Memory**:
  - `commands/perf.md`
  - `memory/15-performance-budget.md`
- **Primary Outputs**:
  - Performance audit scorecard verifying total page weight $\le 500\text{ KB}$.

### `/audit`
- **Purpose**: Executes structural consistency audits, anti-slop scans, and issues the 7-Axis Quality Stamp.
- **Injected Memory**:
  - `workflows/audit-prototype.md`
  - `memory/06-quality-bar.md`
- **Primary Outputs**:
  - `[QUALITY GATE: P5 H5 E5 S5 R5 V5 D5 — 35/35 PASSED]` verification stamp.

### `/clone`
- **Purpose**: Reverse-engineers clean, normalized design tokens from an external URL.
- **Injected Memory**:
  - `workflows/clone-prototype.md`
  - `memory/03-narrative-conversion.md`
- **Primary Outputs**:
  - Reconstructed `brand.yaml` capturing colors, type scale, and container widths.

### `/retrofit`
- **Purpose**: Eradicates inline CSS styles from existing drifted pages and remaps them to shared design tokens.
- **Injected Memory**:
  - `workflows/retrofit-prototype.md`
  - `memory/07-consistency-contract.md`
- **Primary Outputs**:
  - Cleaned HTML files linked directly to central `tokens.css`.

---

## Stage 7: Delivery

### `/handoff`
- **Purpose**: Generates developer handoff documentation and CSS custom property token maps.
- **Injected Memory**:
  - `commands/handoff.md`
  - `memory/11-brand-json-v2.md`
- **Primary Outputs**:
  - Developer handoff specification and token glossary.

### `/deploy`
- **Purpose**: Verifies zero-build readiness and spins up local preview servers or static hosting deployment.
- **Injected Memory**:
  - `commands/deploy.md`
  - `memory/06-quality-bar.md`
- **Primary Outputs**:
  - Live preview server and static hosting deployment assets.

# Changelog - TidyFactor Design

All notable changes to the **[@alwkala/tidyfactor-design](https://www.npmjs.com/package/@alwkala/tidyfactor-design)** package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.3] - 2026-08-01

### 🛠️ Critical CLI & Template Scaffolding Upgrade
- **Fixed CLI Template Auto-Cleanup Bug**: Replaced stub `.template.` files with a production starter suite in `templates/` to prevent scaffolding from leaving an empty directory.
- **Created Production Template Suite (`templates/`)**:
  - `design-system/tokens.css`: Dual-theme CSS custom properties (colors, typography, spacing, radius, shadows).
  - `design-system/base.css`: Reset, typography inheritance, logical properties, smooth scrolling.
  - `design-system/components.css`: Button suite, cards, bento grids, badges, navbar pills, hero sections.
  - `design-system/utilities.css`: Spatial layout helpers and accessibility utilities.
  - `design-system/motion.js`: Scroll reveals, entrance choreography, reduced-motion fallbacks.
  - `design-system/interactions.js`: Theme toggle (light/dark) and direction toggle (RTL/LTR).
  - `index.html`: Responsive, accessible starter prototype landing page.
  - `proto-nav.js`: Dev-only floating prototype toolbar with `🎨 TF Design` badge.
- **Auto-Injection in `create-kit.js`**: Scaffolding a new project via `npx @alwkala/tidyfactor-design` now automatically injects `.agents/`, `.claude-skill/`, `memory/`, and `AGENTS.md` in a single pass.
- **Fixed CLI Argument Parsing**: Improved positional argument handling so space-separated target paths (e.g., `npx @alwkala/tidyfactor-design "TidyFactor Website"`) scaffold directly into the target directory.
- **Windows Console Encoding Fix**: Fixed `sys.stdout` UTF-8 re-encoding in `scripts/extract_palette.py` for Windows consoles.

## [1.3.2] - 2026-08-01

### 🧠 Major Upgrade: Design Decision Engine Architecture
- **Added 9 Structural Decision Layers**: Transformed `tidyfactor-design` into a deterministic Design Decision Engine.
- **Added `memory/18-design-decision-engine.md`**:
  - **The 9-Step Decision Tree Protocol**: `Project Scope → Industry Register → Audience Mode → Brand Personality → Storytelling → UX Philosophy → Visual School → Tokens → Components`.
  - **Enforced Anti-"Design Soup" Constraint Rule**: Hard limit capping mixing to 1 Primary School, 1 Compatible Secondary Influence, 1 Motion Language, 1 Storytelling Style, and 1 UX Philosophy Accent.
  - **Executable Signature Element Specification**: Mandatory implementation of concrete HTML/CSS signature code for every movement.
- **Structured All 20 Visual Movements (`memory/16-design-movements-guide.md`)**:
  - Added YAML `confidence` ratings across 6 surface targets.
  - Added `compatibility` lists (`compatible` vs `avoid`).
  - Added `brandPersonality` tone keywords.
  - Added 8-axis `visualDNA` vectors (`Grid`, `Typography`, `Geometry`, `Illustration`, `Motion`, `Texture`, `Photography`, `Depth`).
  - Added concrete `componentBehaviour` specifications (`Buttons`, `Cards`, `Forms`, `Navigation`, `Search`).
  - Added `motionLanguage` parameters (`Duration`, `Curve`, `Energy`, `Scroll`, `Hover`).
  - Added `executableSignature` snippets.
- **Added `memory/17-storytelling-industries-ux.md`**: Detailed guide for 4 Storytelling Archetypes, 8 Industry Registers, and 8 UX Philosophies.
- **Updated Command Specs**: Integrated 9-step decision protocol into `references/commands/brief.md` and `references/commands/school.md`.
- **Rebuilt Distribution Archive**: Updated `dist/tidyfactor-design.skill` (115.7 KB with 18 memory files).

## [1.3.1] - 2026-07-31

### 🧠 Evolution: Transformed into a Production Design Decision Engine
- **Added Structured Metadata to All 20 Visual Movements (`memory/16-design-movements-guide.md`)**:
  - `Confidence Matrix`: Surface suitability rating (`production`, `marketing`, `dashboard`, `landing`, `mobile`, `accessibility`).
  - `Compatibility Matrix`: Explicit synergy lists (`compatible` vs `avoid`).
  - `Brand Personality`: 4-6 tone keywords governing copy tone, media choices, and hover states.
  - `Visual DNA Vector`: 8-point radar scale (`Grid`, `Typography`, `Geometry`, `Illustration`, `Motion`, `Texture`, `Photography`, `Depth`).
  - `Component Behaviour`: Concrete shape/form specs for `Buttons`, `Cards`, `Forms`, `Navigation`, and `Search`.
  - `Motion Language`: Concrete specs for `Duration`, `Curve`, `Energy`, `Scroll`, and `Hover`.
  - `Executable Signature Element`: Concrete HTML/CSS implementation snippet for the school's signature tell.
- **Added 9-Step Design Decision Tree Protocol (`memory/18-design-decision-engine.md`)**: Sequential decision flow: `Project → Industry → Audience → Brand Personality → Storytelling → UX Philosophy → Visual School → Tokens → Components`.
- **Enforced Anti-"Design Soup" Constraint**: Hard limit capping mixing to 1 Primary School, 1 Compatible Secondary Influence, 1 Motion Language, 1 Storytelling Style, and 1 UX Philosophy Accent.
- **Fixed `brand.json` IDE Schema Warning**: Replaced `$schema` URL pointer with `"schemaVersion": "brand-core-v2"`.
- **Refactored `scripts/extract_palette.py`**: Added safe read-and-merge logic so `--json brand.json` updates color tokens (`colors.light` & `colors.dark`) without overwriting or wiping other sections.
- **License Standardization**: Standardized `LICENSE` file text to MIT License across all metadata.
- **Documentation Overhaul**:
  - Completely overhauled `README.md` and `README.ar.md` with visual surface screenshot embeds (`assets/light.png`, `assets/dark.png`, `dashboard_output.png`, `ecommerce_output.png`, `blog.png`, `media_output.png`).
  - Added dedicated section explaining **TidyFactor Skill Methodology & 8/8 Governance Architecture** in both English and Arabic.
  - Formatted 24 slash commands table across 7 UI Design Lifecycle stages.
- **Rebuilt Distribution Archive**: Updated `dist/tidyfactor-design.skill` (115.7 KB).

## [1.3.0] - 2026-07-31

### 🚀 Major Architectural Evolution: Full UI Design Lifecycle Skill
- **Evolved from Prototyping Engine to Full UI Design Lifecycle Engine**: Extended `tidyfactor-design` across all 7 design lifecycle stages (Discovery, Foundation, Architecture, Components, Motion, Quality, Delivery).
- **Expanded Command Palette (16 → 24 Commands)**:
  - **Discovery**: Added `study` (extract design DNA from URL/screenshot) and `brief` (3-question design context gate: Audience, Surface, Tone).
  - **Foundation**: Added `brand` (scaffold/extract `brand.json` v2) and `typography` (7 mood-routed font pairings matrix).
  - **Architecture**: Added `layout` (8 specialized surface layout archetypes) and `nav-footer` (N1–N9 nav catalog & Ft1–Ft8 footer catalog).
  - **Quality**: Added `perf` (numeric asset performance budgets table).
  - **Delivery**: Added `handoff` (developer design system spec export & component state matrix).
- **Upgraded `brand.json` Schema (v2)**: Dual-mode `colors.light/dark` (16 semantic tokens each), `shadows.focusRing` with `color-mix()`, `motion` tokens, `iconography` rules, `components` token references, `localization.mirrorOnRtl`, and `accessibility` floor.
- **Added 5 New Memory Reference Files**:
  - `memory/11-brand-json-v2.md`
  - `memory/12-typography-matrix.md`
  - `memory/13-layout-archetypes.md`
  - `memory/14-nav-footer-catalog.md`
  - `memory/15-performance-budget.md`
- **Quality Bar Additions**: Added anti-`mix-blend-mode` compositing rule (transparent PNG cutouts for animated hero assets) and strict numeric performance budget checks.

## [1.2.0] - 2026-07-31

### Added & Enhanced
- **Context-Engineered Architecture Refactor**:
  - Re-architected `SKILL.md` into a ~37-line dispatcher table (~350 tokens initial load) complying 100% with `tidyfactor-skill-architect` rules.
  - Modularized commands into `references/commands/`, single-outcome workflows into `references/workflows/`, operational rules into `references/memory/` and `memory/`, and human-facing manifesto into `references/memory/philosophy.md`.
- **Anti-Slop & Pre-Emit Self-Critique Control (Rule 8)**:
  - Added **Pre-Emit Self-Critique Scoring (1–5 on 6 Axes)**: *Philosophy (P)*, *Hierarchy (H)*, *Execution (E)*, *Specificity (S)*, *Restraint (R)*, *Variety (V)*. Scores < 3 trigger an automatic revision pass. Output is stamped: `/* Pre-emit critique: P5 H4 E5 S4 R5 V5 */`.
  - Added **16 Named AI Anti-Pattern Tells** to `memory/06-quality-bar.md` (Purple-gradient hero, Inter-everywhere, 3-column feature grid, Card-in-card, Gradient headline, Side-stripe card, Full-viewport centered hero, Pure black/white, Default-attractor sameness, Specimen fall-through, AI nav, AI footer, Aurora-blob background, Floating-orb decoration, Italic headers, Lazy-loaded LCP).
  - Added Gate 46 (No Invented Metrics) and Gate 47 (No Re-Drawn Fake Chrome).
- **Three-Dial System & Brand Voice Schema**:
  - Added dynamic 1–10 configuration dials (`designVariance`, `motionIntensity`, `visualDensity`) and 4-context voice definitions (`voice.professional`, `voice.casual`, `voice.error`, `voice.success`) to `brand.json` schema.
- **Advanced Reverse-Engineering Pipeline**:
  - Upgraded `references/workflows/clone-prototype.md` & `references/commands/clone.md` with Interaction Model declarations (`scroll-driven`, `click-driven`, `hover-driven`), Multi-State computed CSS diffing, 150-line complexity budget rule, and persistent component specs (`docs/research/components/*.md`).
- **5-Layer AI Photography Prompt Construction**:
  - Upgraded `references/commands/assets.md` with 5-layer photography prompt matrix (Subject, Environment, Lighting, Technical Photography, Post-Processing/Film Stock).
- **4-Tier Whimsy & 8-State Demo Wrapper**:
  - Added 4-tier Whimsy Taxonomy (`Subtle`, `Interactive`, `Discovery`, `Contextual`) to `references/commands/motion.md`.
  - Added mandatory 8-State Demo Wrapper generation (`<Component>.preview.html` rendering `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `error`, `success`) to `references/commands/components.md`.

## [1.1.0] - 2026-07-28

### Added & Enhanced
- **Python Power Tools Workflow Integration**:
  - `palette`: Integrated `scripts/extract_palette.py` with WCAG 2.1 AA relative luminance & contrast ratio validation against light (`#fff`) and dark (`#0f172a`) surfaces.
  - `assets`: Integrated background removal (`scripts/remove_backgrounds.py`), WebP batch optimization (`scripts/optimize_images.py`), and asset size validation (`scripts/inspect_images.py`).
  - `audit`: Integrated PNG alpha channel transparency testing (`scripts/check_alpha.py`) and prototype integrity checks (`scripts/test_build.py`).
  - `deploy`: Integrated asset minification (`scripts/minify_assets.py`) and distribution bundle packaging (`scripts/build.py`).
- **Automatic Template Cleanup**:
  - Scaffolding via `bin/create-kit.js` automatically cleans up lingering `.template.*` files post-instantiation.
- **Structured Component Section Maps**:
  - Standardized section header comment blocks in `templates/` and `components.css` (`01. NAV`, `02. CARDS`, `03. FORMS`, `04. MODALS`) for fast AI agent token lookup.
- **Visual Showcase Assets**:
  - Added real-world prototype screenshots to `assets/` (`dark.png`, `light.png`, `blog.png`, `video.png`) and updated README showcase gallery.
- **Automated Release Pipeline**:
  - Added `.github/workflows/release.yml` for automated GitHub Releases and NPM publishing.

## [1.0.0] - 2026-07-28

### Initial Release
- **Code-Native Interactive Prototyping Engine (Figma Alternative)**:
  - Professional interactive HTML/CSS/JS prototyping system with structural visual consistency across all pages.
  - Zero per-page CSS/JS rule — every page carries HTML markup ONLY, consuming shared `design-system/` resources.
- **4 Pluggable CSS Foundations**:
  - `native`: Custom CSS variables and semantic component classes (zero dependencies).
  - `tailwind`: Utility-first CSS via Tailwind CDN.
  - `daisyui`: Tailwind CDN + daisyUI component library themed via tokens.
  - `hybrid`: daisyUI composite widgets + Native CSS signature brand styling.
- **15 Universal Agent Slash Commands**:
  - `init`, `school`, `tokens`, `palette`, `components`, `page`, `dashboard`, `motion`, `states`, `flow`, `i18n`, `audit`, `clone`, `retrofit`, `deploy`.
- **Bilingual & RTL Native**:
  - Arabic font pairing: El Messiri (headings) + Tajawal (body).
  - Native CSS logical properties (`margin-inline-start`, `padding-inline`, etc.).
- **Interactive Prototype Toolbar (`proto-nav.js`)**:
  - Floating dev-only navigation bar to jump between prototype screens and state variations.

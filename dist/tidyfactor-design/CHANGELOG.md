# Changelog - TidyFactor Design

All notable changes to the **[@tidyfactor/design](https://www.npmjs.com/package/@tidyfactor/design)** package will be documented in this file.

## [1.8.0] - 2026-09-02

### ⚡ Added — Declarative Decision Gates, Staleness Tracking & Manifest v1.1.0
- **Declarative `decision_gates[]` Contract (`manifest.json`)**: Formally declared Required Decisions (`audience_mode`, `surface_type`, `tone_school`), priority ranks, discovery sources, and conservative fallbacks conforming to `skill-manifest.decision-gates.schema.json`.
- **Mechanical Context Delta Resolution (`workflows/brief.md`)**: Replaced heuristic agent arbitration with a deterministic set-difference algorithm: $\text{Unknowns} = \text{Required Decisions} - (\text{Discovered Facts} \cup \text{Brain KIs})$.
- **Local Staleness Tracking (`track_staleness: true`)**: Implemented local hash checking on `brand.json` within `.tidyfactor/design-brief.snapshot.json`—re-opening modified parameters into `Unknowns` without network or MCP round-trips.
- **SSOT Single-Direction Push Architecture**: Enforced local snapshot as the sole immutable source of truth, with Brain MCP persistence acting strictly as an outbound replica via `--sync-brain`.
- **Tooling Consolidation**: Unified media optimization under `scripts/optimize_images.py` across `manifest.json`, `assets.md`, and documentation.

---

## [1.7.0] - 2026-09-02

### 🧠 Added — Sovereign Brain MCP Integration & Deterministic Fail-Open Protocol
- **Brain Integration Contract (`references/memory/20-brain-baas-integration.md`)**: Operational specification codifying the sovereign self-hosted architecture, tenant isolation within local/agency SQLite databases, Design System Knowledge Item (KI) payload schemas, and tool latency classes.
- **Fail-Open Resolution Protocol (`references/workflows/brief.md`)**: Embedded deterministic context discovery: (1) Local workspace auto-sensing first, (2) Optional Brain MCP context acceleration (`search_knowledge_base`) when active, (3) Instant 0ms silent fallback to 3-question CDL interview if MCP is absent or offline.
- **Optional Knowledge Item Sync (`references/commands/handoff.md`)**: Added explicit `--sync-brain` flag to export verified Design System Baselines and token maps to local Brain MCP storage.
- **Tooling Scope & Latency Declarations**: Enriched `SKILL.md` with explicit Rule 10 Tooling Scope and updated `10-python-tooling.md` with execution latency classifications (sub-second AST audits vs async batch media inference).

---

## [1.6.0] - 2026-09-01

### Added - Runtime Tooling Manifest & Egyptian Heritage Design Lanes
- **Rule 10 Runtime Tooling Contract (`manifest.json`)**: Declared portable `audit_design`, `extract_palette`, and `optimize_media` executable tooling with schema validation.
- **Automated Design Quality Auditor (`scripts/audit_design.py`)**: Standalone and MCP-compatible CLI engine scanning HTML/CSS for unicode emojis, inline styles, untokenized colors, and the 16 AI anti-patterns with UTF-8 support.
- **Output JSON Schema (`references/schemas/audit_design.output.schema.json`)**: Standard schema defining structured quality audit reports and pre-emit critique stamps.
- **Egyptian & Regional Heritage Lanes (`references/memory/19-heritage-lanes-atmosphere.md`)**: Operational design grammar covering Nilotic Wadj & Lotus, Egyptian Nubian Folk & Earth Vaults, Sinai Bedouin Craft, Al-Muqarnas Geometry, and Kufic Modernity.
- **Bilingual & Responsive Enhancements**: Refined `01-design-schools.md`, `04-motion-principles.md`, `05-component-anatomy.md`, and `08-arabic-bilingual.md`.

## [1.5.0] - 2026-08-29

### Added - Global Multi-Tier & Multi-Language Documentation Architecture
- **Rule 13 Implementation**: Two-tier documentation separation between Canonical Technical Documentation (`README.md` SSOT) and First-Class Market Localizations.
- **Universal Multi-Language Switcher**: Standardized 8-language switcher navigation bar across all documentation files (`EN`, `AR`, `FA`, `ES`, `PT`, `ZH`, `DE`, `FR`).
- **First-Class Localized Developer Adoption Guides**: `README.es.md`, `README.pt.md`, `README.fa.md`, `README.zh.md`, `README.de.md`, `README.fr.md`.
- **Automated Validation & Packaging**: Updated `tools/build-skill.js` and `tools/validate_skill.py`.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-08-25

### Added
- **Contextual Decision Layer (CDL v1.0)**: Added `references/memory/decision-points.md` with thin arbitration protocol (D1–D5: CSS Foundation Layer, Design System School, Arabic Typography Pairing, Layout Archetype, Output Scope).
- **Brief Command (`/brief`)**: Added `references/commands/brief.md` and `references/workflows/brief.md` for pre-flight design system discovery.
- **7-Axis UI Quality Gate (`P/H/E/S/R/V/D`)**: Added `references/memory/quality-bar.md` enforcing 8-state model, zero per-page CSS/JS, and anti-slop rules.
- **Structured References & Workflows Architecture**: Migrated memory into `references/memory/`, created `references/workflows/` (init-prototype, clone-prototype, retrofit-prototype, audit-prototype, brief), and organized memory catalogs (`architecture.md`, `foundations.md`).
- **Validation & CLI Suite**: Added `bin/add-skill.js`, updated `package.json` `"bin"` map, created `tools/validate_skill.py`, and synchronized `brand.json` version.

---

## [1.3.9] - 2026-08-23

### 📜 License & Ecosystem Parity Synchronization
- **Apache-2.0 License Standardization**: Synchronized license badge in `README.md` and `README.ar.md` to `Apache-2.0`, aligning with `package.json`, `.tidyfactor`, and `LICENSE`.
- **Ecosystem Architecture Alignment**: Synchronized metadata and versioning across `.tidyfactor`, `brand.json`, and NPM packaging pipelines.

---

## [1.3.8] - 2026-08-01

### 🛡️ Agency & Impeccable Skill Learnings Integration
- **11 Codex & AI-Slop Defect Bans (`memory/06-quality-bar.md`)**: Enriched TidyFactor Quality Bar with 11 explicit defect bans (Ghost Cards prohibition, Over-Rounding limits 32px+, Grid overlays ban, Side-Stripe borders, Warm cream/sand neutral defaults, Numbered sequence eyebrows, Sketchy SVG fallbacks).
- **Neobrutalism Signature Components (`templates/design-system/components.css`)**: Added `.sticker-badge`, `.card-neobrutal`, `.github-social-card`, and `.metric-strip` helper classes.
- **Agency Compatibility Audit**: Verified 100% fit and readiness for agency/B2B products (Alwkala Agency stack compatibility).

## [1.3.7] - 2026-08-01

### 🗑️ New CLI Subcommand: `remove-skill` / `remove-design-skill`
- **Skill Uninstaller Script (`bin/remove-skill.js`)**:
  - Added dedicated uninstaller script allowing developers to cleanly remove injected agent skills and design system rules.
  - Subcommands supported: `npx @tidyfactor/cli-design remove-skill`, `remove-design-skill`, `uninstall-skill`, `clean-skill`.
  - Registered `"remove-design-skill": "bin/remove-skill.js"` in `package.json` `bin` map.
  - Safely removes `.agents/skills/tidyfactor-design/`, `.claude-skill/`, `memory/`, and generated `AGENTS.md` rules with clear terminal feedback.

## [1.3.6] - 2026-08-01

### 📦 Automated Versioned `.skill` Archive Build Pipeline
- **Claude Code Skill Manager Parity**: Added `version: 1.3.6` to `SKILL.md` YAML frontmatter for native compatibility with Claude Code skill managers and Agentic IDEs.
- **Automated Version-Tagged `.skill` Builds (`tools/build-skill.js`)**:
  - Rebuilding the skill automatically generates both `tidyfactor-design.skill` (latest release) AND `tidyfactor-design-v1.3.6.skill` (version-tagged release artifact).
  - Automatically syncs both versioned and unversioned `.skill` archives to `dist/` and `Skills-LAB/` root directory.

## [1.3.5] - 2026-08-01

### 💎 CLI UX Audit & Wizard Logic Polish (`tidyfactor-skill-architect`)
- **Graceful Cancellation (`SIGINT`)**: Registered a `rl.on('SIGINT', ...)` trap in `bin/create-kit.js` to handle `Ctrl+C` cleanly with an exit message (`✖ Operation cancelled.`).
- **Input Validation Loop**: Added validation loops to prompt steps so out-of-range numerical choices (e.g. `99`) display a clear warning instead of silent fallbacks.
- **Visual Breadcrumbs**: Added progress indicators `[1/4]` through `[4/4]` and formatted checkmarks (`✓ Target Directory`, `✓ Foundation Selected`, `✓ Design School Selected`, `✓ Palette Image Locked`).
- **Expanded Movement Menu**: Included all major visual design movements (`minimalist`, `brutalism`, `glassmorphism`, `neumorphism`, `swiss`, `luxury`, `bauhaus`, `industrial`, `bento`, `aurora`, `cyberpunk`, `claymorphism`) in the interactive CLI picker.
- **RTL & Bilingual Badge**: Highlighted `🌐 RTL & Bilingual Ready (El Messiri / Tajawal)` in CLI header banner.

## [1.3.4] - 2026-08-01

### 🧙 Upgrade: Dual-Mode Interactive CLI Wizard & Agent Detection
- **Added Human Terminal Interactive Wizard (`bin/create-kit.js`)**:
  - Automatically triggers an interactive `readline` terminal wizard when running `npx @tidyfactor/cli-design` in a live human TTY terminal.
  - Interactively prompts for: Target Directory, CSS Foundation (8 options), Visual Design School (12 options), and optional Brand Image Color Extraction path.
- **Added Non-Interactive Agent & CI Detection (`isInteractiveTerminal()`)**:
  - Bypasses terminal prompts instantly when AI Agent mode (`AGENT_MODE=1`), CI pipelines (`CI=1`), non-interactive TTY, or CLI flags (`--foundation=...`, `--school=...`, `-y`, `--yes`) are detected.
- **Updated `AGENTS.md` Guidelines**: Documented dual-mode CLI execution guidelines.

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
- **Auto-Injection in `create-kit.js`**: Scaffolding a new project via `npx @tidyfactor/cli-design` now automatically injects `.agents/`, `.claude-skill/`, `memory/`, and `AGENTS.md` in a single pass.
- **Fixed CLI Argument Parsing**: Improved positional argument handling so space-separated target paths (e.g., `npx @tidyfactor/cli-design "TidyFactor Website"`) scaffold directly into the target directory.
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

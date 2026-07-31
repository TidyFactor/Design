# Changelog - TidyFactor Design

All notable changes to the **[@alwkala/tidyfactor-design](https://www.npmjs.com/package/@alwkala/tidyfactor-design)** package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

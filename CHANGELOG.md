# Changelog - TidyFactor Design

All notable changes to the **[@alwkala/tidyfactor-design](https://www.npmjs.com/package/@alwkala/tidyfactor-design)** package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

# Changelog - TidyFactor Design

All notable changes to the **[@alwkala/tidyfactor-design](https://www.npmjs.com/package/@alwkala/tidyfactor-design)** package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

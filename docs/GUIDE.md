# 📘 TidyFactor Design: The Comprehensive Engineering & User Guide

> **Version**: 1.9.0  
> **Target Audience**: Developers, Design Engineers, and AI Coding Agents (*Google Antigravity, Claude Code, Cursor, Codex, Windsurf*)  
> **Status**: Authoritative Reference Manual

---

## 📖 Table of Contents
1. [The Mental Model: Design Engineering vs. Visual Prompting](#1-the-mental-model-design-engineering-vs-visual-prompting)
2. [Agent Discovery & Environment Setup](#2-agent-discovery--environment-setup)
3. [Step-by-Step Lifecycle Tutorial: Building a Production Prototype](#3-step-by-step-lifecycle-tutorial-building-a-production-prototype)
4. [Component & Seam Matrices Cookbook (Volumes 01–03)](#4-component--seam-matrices-cookbook-volumes-0103)
5. [The Anti-Slop Discipline & Quality Gate](#5-the-anti-slop-discipline--quality-gate)
6. [Rule 15: YAML Primacy & Token Management](#6-rule-15-yaml-primacy--token-management)
7. [Arabic & Bilingual RTL Engineering](#7-arabic--bilingual-rtl-engineering)
8. [CLI Tooling & Automated Verification](#8-cli-tooling--automated-verification)

---

## 1. The Mental Model: Design Engineering vs. Visual Prompting

Traditional AI coding interactions treat UI design as an ad-hoc text prompt:
```
User: "Create a SaaS landing page for an AI CRM"
Model: Emits arbitrary HTML with inline styles, un-tokenized colors, and generic components.
```

**TidyFactor Design** replaces prompt guesswork with an **Engineering Operating System**:
```
┌───────────────────────────────────────────────────────────┐
│                    Design Intelligence                    │
│      Operational Memory (Matrices) + Workflows (Steps)    │
└─────────────────────────────┬─────────────────────────────┘
                              ▼
┌───────────────────────────────────────────────────────────┐
│                     AI Coding Agent                       │
│    Scaffolds design-system/ with zero per-page CSS/JS     │
└─────────────────────────────┬─────────────────────────────┘
                              ▼
┌───────────────────────────────────────────────────────────┐
│               Deterministic Verification                  │
│       7-Axis Critique Stamp + AST Anti-Pattern Audit      │
└───────────────────────────────────────────────────────────┘
```

### Core Architecture Rules:
1. **Zero per-page CSS/JS**: All design tokens and component styles live inside `design-system/`. HTML pages in `pages/` contain semantic markup only.
2. **Single CSS Foundation**: Lock Native CSS, Tailwind, daisyUI, shadcn/ui, Pico, or Hybrid once during `/init`. Never mix foundations.
3. **Operational Memory Primacy**: Operational files (`references/memory/`) contain pure engineering constraints, formulas, and matrices—zero narrative essays.

---

## 2. Agent Discovery & Environment Setup

### Installing the Skill
```bash
# Via TidyFactor CLI
npx @tidyfactor/cli add tidyfactor-design

# Via skills.sh standard
npx skills add TidyFactor/Design
```

### Supported Coding Agents
- **Google Antigravity**: Native detection in `.agents/skills/tidyfactor-design` or `~/.gemini/config/skills/`.
- **Claude Code**: Direct slash command execution via `/brief`, `/init`, `/components`.
- **Cursor / Codex / Windsurf**: Contextual discovery from `SKILL.md` dispatcher.

---

## 3. Step-by-Step Lifecycle Tutorial: Building a Production Prototype

### Phase 1: Strategic Discovery (`/brief`)
Before writing markup, evaluate the Contextual Decision Layer (CDL) to resolve unknowns:
```bash
/brief
```
The agent scans existing project files (`brand.yaml`, `pages/`, configs) and only prompts for genuine unknowns:
- **Audience Mode**: Inspire (aspirational), Evaluate (data-dense), Act (conversion-first), or Learn (editorial).
- **Surface Type**: Landing, Dashboard, Product, Editorial, Minimal, or Spatial.
- **Tone School**: Swiss-international, Neo-brutalist, Luxury, Bento, or Heritage.

*Output*: Cached baseline locked in `.tidyfactor/design-brief.snapshot.json` and `.tidyfactor/design-brief.md`.

### Phase 2: Foundation Scaffolding (`/init` & `/brand`)
Initialize the project structure with zero build steps:
```bash
/init --foundation native --school swiss-international
```
This scaffolds:
```
project-root/
├── brand.yaml                    # Canonical design tokens & identity SSOT
├── brand.json                    # Backward-compatible mirror
├── design-system/
│   ├── tokens.css                # CSS custom properties (colors, type, radius)
│   ├── components.css            # 8-state component styles
│   └── motion.js                 # GSAP & scroll choreography
├── pages/                        # Markup-only HTML pages
└── index.html                    # Root entry point
```

### Phase 3: Typography & Color Palette (`/typography` & `/palette`)
Derive WCAG 2.1 AAA compliant colors directly from brand assets:
```bash
python scripts/extract_palette.py assets/logo.png --yaml
```
Select a mood-routed typography pairing:
```bash
/typography --mood confident-saas
```
- **Latin Display**: Outfit or Plus Jakarta Sans
- **Latin Body**: Inter or Roboto
- **Arabic Display**: El Messiri (never Amiri > 24px)
- **Arabic Body**: Tajawal

### Phase 4: Layout & Architecture (`/layout` & `/nav-footer`)
Assemble container shells from layout archetypes L1–L4:
```bash
/layout --archetype L1-split-hero
/nav-footer --nav N3-floating-glass --footer Ft2-minimal-split
```

### Phase 5: Component Composition (`/components`)
Scaffold modular components using authoritative matrices:
- Add a Kicker tag (`21-eyebrow-kicker-matrix.md`): `family-badge` or `family-code`
- Add a Hero architecture (`22-hero-section-matrix.md`): `kinetic-split-type` with GSAP
- Add Cards (`23-card-architecture-matrix.md`): Flex-column with `margin-top: auto` pinned CTAs
- Add 8-State Buttons (`24-button-cta-matrix.md`): Supporting idle, hover, active, focus, disabled, loading, success, error

### Phase 6: Mechanical Quality Audit (`/audit`)
Run the deterministic AST audit to verify zero inline styles and check anti-pattern tells:
```bash
/audit
# Or run deterministic script directly:
python scripts/audit_design.py --target .
```
Verify the output stamp:
```css
/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */
```

### Phase 7: Developer Handoff (`/handoff`)
Generate clean handoff tables mapping CSS variables to production frameworks:
```bash
/handoff --framework react-tailwind
```

---

## 4. Component & Seam Matrices Cookbook (Volumes 01–03)

### Eyebrow Kicker Badges (Volume 01)
```html
<div class="c-eyebrow c-eyebrow--pill" data-accent="emerald">
  <span class="c-eyebrow__dot"></span>
  <span class="c-eyebrow__label">Release v1.9.0 Available</span>
</div>
```

### Section Transitions & Parametric Seams (Volume 03)
The seam belongs to the outgoing section and draws color dynamically from the incoming section:
```html
<section class="s-hero s-hero--light">
  <!-- Section Content -->
  <div class="c-seam c-seam--wave" aria-hidden="true">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="var(--color-surface-next)" />
    </svg>
  </div>
</section>
```

### Card Pinning Invariant
Always enforce vertical flex and `margin-top: auto` on card actions:
```css
.c-card {
  display: flex;
  flex-direction: column;
}
.c-card__footer {
  margin-top: auto;
}
```

---

## 5. The Anti-Slop Discipline & Quality Gate

TidyFactor Design automatically rejects generic AI output. When authoring pages, ensure:
1. **No Purple Gradient Slop**: Never pair `#7C3AED` to `#EC4899` gradient backgrounds with white text.
2. **No Pure Black / White**: Use tinted neutrals (`#0F172A`, `#1E293B`) instead of `#000000`.
3. **No Un-aligned CTAs**: All buttons in grid rows must align horizontally via `mt-auto`.
4. **No Floating Mid-Screen Heroes**: Hero top padding must not push primary CTA below the fold.
5. **No Decorative Grid Overlays**: Do not place `linear-gradient(1px, transparent)` grids on non-technical pages.

---

## 6. Rule 15: YAML Primacy & Token Management

Store design tokens in `brand.yaml` instead of JSON:
```yaml
name: "Acme SaaS"
version: "1.0.0"
cssFoundation: "native"
school: "swiss-international"
colors:
  light:
    background: "#F8FAFC"
    surface: "#FFFFFF"
    text: "#0F172A"
    primary: "#2563EB"
    primaryForeground: "#FFFFFF"
    border: "#E2E8F0"
  dark:
    background: "#090D16"
    surface: "#0F172A"
    text: "#F8FAFC"
    primary: "#3B82F6"
    primaryForeground: "#FFFFFF"
    border: "#1E293B"
```

---

## 7. Arabic & Bilingual RTL Engineering

- **Headings**: Use `El Messiri` (`font-family: var(--font-arabic-heading)`).
- **Body Text**: Use `Tajawal` (`font-family: var(--font-arabic-body)`).
- **Hard Constraint**: Never use `Amiri` for headings larger than 24px (Amiri is a traditional Naskh book font; large display rendering produces spindly strokes).
- **Bidi Mirroring**: Use CSS logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`) instead of `left`/`right`.

---

## 8. CLI Tooling & Automated Verification

Run automated checks before pushing or deploying:
```bash
# 1. AST Lint & Design Consistency
python scripts/audit_design.py --target .

# 2. Release & Integrity Validation
python tools/validate_skill.py

# 3. Package & Sync Across Agents
node tools/build-skill.js
```

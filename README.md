<div align="center">

# 🎨 TidyFactor Design `v1.1.0`
## Code-Native Interactive Prototyping Engine & Design System Suite (An AI-Era Figma Alternative)

**The official interactive prototyping starter for the TidyFactor Ecosystem.**

[![npm version](https://img.shields.io/npm/v/@alwkala/tidyfactor-design.svg?style=for-the-badge&color=indigo)](https://www.npmjs.com/package/@alwkala/tidyfactor-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![RTL Ready](https://img.shields.io/badge/RTL-Native%20Arabic-emerald.svg?style=for-the-badge)](README.ar.md)
[![Zero Build](https://img.shields.io/badge/Build-Zero%20Step-purple.svg?style=for-the-badge)](#-architecture--zero-build-design-system)

[✨ Live Demo](https://alwkala.com/tidyfactor-design/) • [🚀 Quick Start](#-quick-start--usage-guide) • [⚡ Slash Commands](#-universal-16-slash-commands) • [📖 Read in Arabic (بالعربية)](README.ar.md)

</div>

---

## 🏛️ What is TidyFactor Design?

**TidyFactor Design** (`tidyfactor-design`) is a **code-native, AI-era alternative to Figma**. It empowers developers and AI coding agents (Google Antigravity, Claude Code, Cursor, Windsurf, Roo Code, Cline) to build professional, clickable, animated HTML/CSS/JS interactive prototypes across all stages of design development (Init, Convert, Improve, Audit, Flow, Retrofit, Deploy).

Unlike traditional page builders or unorganized prototypes, visual consistency across all pages is **structural, not reviewed-in**:
- **Zero per-page CSS/JS**: No page carries its own `<style>` tag or inline script.
- **Centralized `design-system/`**: Tokens, typography, base rules, component classes, and motion choreography live in one shared folder.
- **4 Pluggable CSS Foundations**: Native CSS, Tailwind Utility, daisyUI, or Hybrid.

---

## 📺 Visual Showcase & Prototype Surface Gallery

### 🌙 Dark Theme Interactive Prototype Surface (Hero)
![Dark Theme Surface](assets/dark.png)

### ☀️ Light Theme Catalog & Dashboard Surface
![Light Theme Surface](assets/light.png)

### 📰 Content & Article Publishing Surface
![Blog Surface](assets/blog.png)

### 🎬 Video Showcase & Interactive Overlay Surface
![Video Surface](assets/video.png)

---

## 📁 Prototype System Architecture

```
my-prototype/
├── design-system/
│   ├── tokens.css        ← Color, typography, spacing, radius, shadow, motion tokens
│   ├── base.css          ← Reset, base elements & typography inheritance
│   ├── components.css    ← Shared component library (buttons, cards, navbars, modals)
│   ├── utilities.css     ← Foundation layout & helper classes
│   ├── motion.js         ← Shared scroll-reveals, entrances & transition tokens
│   └── interactions.js   ← Shared dropdown, tab, modal & toggle behavior
├── pages/
│   ├── index.html        ← Landing page markup ONLY
│   ├── dashboard.html    ← App dashboard markup ONLY
│   └── pricing.html      ← Pricing table markup ONLY
├── scripts/              ← Python Power Tools (palette extraction, BG removal, WebP compression)
├── proto-nav.js          ← Dev-only floating prototype toolbar (switch screens/states)
└── brand.json            ← Single source of truth for identity & tokens
```

---

## 🚀 Quick Start & Usage Guide

Published on NPM as [**`@alwkala/tidyfactor-design`**](https://www.npmjs.com/package/@alwkala/tidyfactor-design).

### Interactive & Non-Interactive Scaffold:

```bash
# Interactive execution (via scoped package or shorthand alias)
npx @alwkala/tidyfactor-design
# or: npx tidyfactor-design

# Specify CSS Foundation (--foundation=native|tailwind|daisyui|hybrid)
npx @alwkala/tidyfactor-design my-proto --foundation=native

# Specify Design School (--school=minimalist|brutalism|glassmorphism|swiss|luxury)
npx @alwkala/tidyfactor-design my-brand --school=luxury

# Extract palette from logo during scaffold (--palette=<image>)
npx @alwkala/tidyfactor-design my-brand --palette=assets/logo.png

# Non-interactive / AI Agent / CI mode (automated defaults, zero prompts)
npx @alwkala/tidyfactor-design my-design-system --yes
```

### Inject Agent Skill into Existing Workspace:

```bash
npx @alwkala/tidyfactor-design add-skill
# or: npx tidyfactor-design add-skill
```

---

## ⚡ Universal 16 Slash Commands & Python Power Tools

When working with any Agentic IDE (Google Antigravity, Claude Code, Cursor, Windsurf, Roo Code, Cline, etc.), the following **16 modular commands** are available:

| Command | Purpose & Function | Integrated Power Tool | Reference Spec |
| :--- | :--- | :--- | :--- |
| `init` | **Primary Scaffold** — Scaffold design system, tokens, foundation choice & initial screen | Template Auto-Cleaner | `references/commands/init.md` |
| `school` | **Design Direction** — Select design movement (Brutalism, Glassmorphism, Swiss, Luxury, Minimal) | — | `references/commands/school.md` |
| `tokens` | **Design Tokens** — Manage `tokens.css` & `brand.json` single source of truth | — | `references/commands/tokens.md` |
| `palette` | **Palette Extraction** — Extract colors & WCAG 2.1 AA contrast scores | `scripts/extract_palette.py` | `references/commands/palette.md` |
| `assets` | **Asset Processing** — AI BG removal, WebP compression & image inspection | `scripts/remove_backgrounds.py`, `scripts/optimize_images.py` | `references/commands/assets.md` |
| `components` | **Component Library** — Build reusable component classes in `components.css` | Section Header Map | `references/commands/components.md` |
| `page` | **Marketing Screen** — Add a new content/marketing page (markup-only) | — | `references/commands/page.md` |
| `dashboard` | **App Screen** — Add a new app or dashboard screen with data surfaces & shells | — | `references/commands/dashboard.md` |
| `motion` | **Animation Layer** — Micro-interactions, scroll-reveals & choreography in `motion.js` | — | `references/commands/motion.md` |
| `states` | **Component States** — Define hover, active, loading, empty, error & success states | — | `references/commands/states.md` |
| `flow` | **Prototype Flow** — Wire clickable screen navigation toolbar (`proto-nav.js`) | — | `references/commands/flow.md` |
| `i18n` | **RTL & Modesty** — Arabic/English typography (El Messiri/Tajawal), RTL layout & modesty rules | — | `references/commands/i18n.md` |
| `audit` | **Consistency Check** — Read-only audit of design tokens, alpha channels & quality | `scripts/check_alpha.py`, `scripts/test_build.py` | `references/commands/audit.md` |
| `clone` | **Clone Design** — Extract design system & tokens from reference site or screenshots | — | `references/commands/clone.md` |
| `retrofit` | **Unify Prototype** — Retrofit a drifted multi-page project under one design system | — | `references/commands/retrofit.md` |
| `deploy` | **Export & Preview** — Local preview server, asset minification & presentation export | `scripts/minify_assets.py`, `scripts/build.py` | `references/commands/deploy.md` |

---

## 🎨 4 Pluggable CSS Foundations

| Foundation | Alias | Description | Best For |
|---|---|---|---|
| **Native CSS** | `native` | Hand-authored semantic classes & CSS variables | Pure zero-dependency design systems |
| **Tailwind Utility** | `tailwind` | Utility-first CDN mapping | Fast utility prototyping |
| **daisyUI** | `daisyui` | Tailwind CDN + daisyUI component library | Rapid web application screens |
| **Hybrid** | `hybrid` | daisyUI composite widgets + Native brand styling | Signature brand apps & dashboards |

---

## 🇸🇦 Native Arabic & RTL Support

TidyFactor Design is built from the ground up for native Arabic and bilingual experiences:
- **Typography**: Heading = **El Messiri**, Body = **Tajawal**. Never Amiri.
- **RTL Physics**: Direction switching (`dir="rtl"` / `dir="ltr"`) via CSS logical properties (`margin-inline-start`, `padding-inline`, etc.).
- **Modesty Rules**: Culturally respectful imagery guidelines for Middle Eastern regional targets.

---

## 📄 License

Distributed under the **MIT License**. Created & maintained by [Alwkala](https://alwkala.com) as part of the TidyFactor Ecosystem.

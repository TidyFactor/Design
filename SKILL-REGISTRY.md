# Skill Registry — tidyfactor-design

> Part of the **[TidyFactor Skills-LAB](../)** ecosystem.  
> Vision: **[TidyFactor-VISION.md](../TidyFactor-VISION.md)**

---

## Identity (100% Unified Naming)

| Field | Value |
|---|---|
| **Unified Tool Name** | `tidyfactor-design` |
| **NPM Package** | [`@alwkala/tidyfactor-design`](https://www.npmjs.com/package/@alwkala/tidyfactor-design) |
| **CLI Execution Command** | `npx @alwkala/tidyfactor-design` or `npx tidyfactor-design` |
| **Skill Injection Command** | `npx @alwkala/tidyfactor-design add-skill` or `npx tidyfactor-design add-skill` |
| **GitHub Repository** | [alwkala/tidyfactor-design](https://github.com/alwkala/tidyfactor-design) |
| **Version** | `1.3.6` |
| **Category** | Full UI Design Lifecycle & Prototyping Engine |
| **Output** | Code-native interactive HTML/CSS/JS prototype system |
| **Commercial Partner** | [Alwkala](https://alwkala.com) |
| **License** | [MIT License](LICENSE) |

---

## What This Skill Does

A **code-native, AI-era alternative to Figma and complete UI Design Lifecycle engine**. Supports all 7 stages of UI Design (Discovery, Foundation, Architecture, Components, Motion, Quality, Delivery) while structurally guaranteeing visual consistency across all screens — zero per-page CSS/JS, zero inline `<style>` or `<script>` tags, zero build step.

---

## 8 Pluggable CSS Foundations

| Foundation | Best For | Architecture |
|---|---|---|
| `native` | Zero dependencies, total brand control | Custom CSS variables + semantic component classes |
| `tailwind` | Utility-first workflows | Tailwind CDN + utility class mapping |
| `daisyui` | Rapid composite components | Tailwind CDN + daisyUI plugin + themed variables |
| `hybrid` | Signature brand + composite widgets | daisyUI composite widgets + Native brand classes |
| `shadcn` | High accessibility & Radix primitives | Tailwind v4 + Radix UI accessible token mappings |
| `pico` | Ultra-fast semantic minimalist sites | Semantic HTML5 tags styled without utility bloat |
| `bootstrap` | Enterprise apps & dark mode themes | Enterprise CSS variables & `data-bs-theme="dark"` |
| `alpine` | Client micro-interactions | Alpine.js reactive state (`x-data`) + Tailwind v4 |

---

## 24 Skill Commands (7 Lifecycle Stages)

```
1. Discovery:    study · brief
2. Foundation:   init · brand · typography · school · tokens · palette · assets
3. Architecture: layout · nav-footer · page · dashboard
4. Components:   components · states
5. Motion:       motion · flow · i18n
6. Quality:      perf · audit · clone · retrofit
7. Delivery:     handoff · deploy
```

Full specs: `references/commands/`

---

## Single Source of Truth & Build Workflow

This folder (`tidyfactor-design`) inside `Skills-LAB` is the **canonical Single Source of Truth** for the skill.

To validate and rebuild the packaged skill archive (`tidyfactor-design.skill`):
```bash
node tools/build-skill.js
```

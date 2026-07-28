# Skill Registry — tidyfactor-design

> Part of the **[TidyFactor Skills-LAB](../)** ecosystem.  
> Vision: **[TidyFactor-VISION.md](../TidyFactor-VISION.md)**

---

## Identity (100% Unified Naming)

| Field | Value |
|---|---|
| **Unified Tool Name** | `tidyfactor-design` |
| **NPM Package** | [`@alwkala/tidyfactor-design`](https://www.npmjs.com/package/@alwkala/tidyfactor-design) |
| **CLI Execution Command** | `npx @alwkala/tidyfactor-design` |
| **GitHub Repository** | [alwkala/tidyfactor-design](https://github.com/alwkala/tidyfactor-design) |
| **Version** | `1.0.0` |
| **Category** | Prototyping & Design Systems |
| **Output** | Code-native interactive HTML/CSS/JS prototype system |
| **Commercial Partner** | [Alwkala](https://alwkala.com) |

---

## What This Skill Does

A **code-native, AI-era alternative to Figma**. Builds interactive HTML/CSS/JS prototypes across all stages of development (Init, Convert, Improve, Audit, Flow, Retrofit, Deploy) while structurally guaranteeing visual consistency across all screens — zero per-page CSS/JS, zero inline `<style>` or `<script>` tags, zero build step.

---

## 4 Pluggable CSS Foundations

| Foundation | Best For | Architecture |
|---|---|---|
| `native` | Zero dependencies, total brand control | Custom CSS variables + semantic component classes |
| `tailwind` | Utility-first workflows | Tailwind CDN + utility class mapping |
| `daisyui` | Rapid composite components | Tailwind CDN + daisyUI plugin + themed variables |
| `hybrid` | Signature brand + composite widgets | daisyUI composite widgets + Native brand classes |

---

## 15 Skill Commands

```
init · school · tokens · palette · components · page · dashboard
motion · states · flow · i18n · audit · clone · retrofit · deploy
```

Full specs: `references/commands/`

---

## Single Source of Truth & Build Workflow

This folder (`tidyfactor-design`) inside `Skills-LAB` is the **canonical Single Source of Truth** for the skill.

To validate and rebuild the packaged skill archive (`tidyfactor-design.skill`):
```bash
node tools/build-skill.js
```

---

## Related Skills (TidyFactor Ecosystem)

| Skill | Focus |
|---|---|
| `tidyfactor-html` | Static content sites |
| `tidyfactor-php` | Full-stack PHP server-rendered |
| `tidyfactor-js` | Framework-free SPAs |
| `tidyfactor-htmx` | Server-driven interactivity |
| `tidyfactor-cinematic` | Luxury scroll-driven landing pages |
| **`tidyfactor-design`** | **Interactive prototyping & design systems** |

# TidyFactor Vision

This skill is part of the **TidyFactor Ecosystem**.

The TidyFactor Vision is maintained as the single source of truth at the Skills-LAB level:

👉 **[Read the full TidyFactor Vision](../TidyFactor-VISION.md)**

---

## TidyFactor-Design — Track Summary

**TidyFactor-Design** is the code-native interactive design & prototyping track within the TidyFactor ecosystem (an AI-era alternative to Figma).

It builds interactive, clickable, animated HTML/CSS/JS prototypes while structurally guaranteeing visual consistency across all screens — zero per-page CSS/JS, zero build step.

### How this track fits the TidyFactor vision

| TidyFactor Principle | How Design Delivers It |
|---|---|
| **Structure over Complexity** | Centralized `design-system/` directory — pages carry HTML markup ONLY |
| **Content over Code** | Design tokens (`tokens.css` & `brand.json`) define the system independently of presentation |
| **AI Native** | Full `AGENTS.md` + `SKILL.md` — designed to be driven by any AI coding agent |
| **Open by Design** | MIT Licensed, published on npm, zero proprietary file formats |
| **Convention over Configuration** | Pluggable CSS foundations (Native, Tailwind, daisyUI, Hybrid) chosen once per project |
| **Evolution over Replacement** | Prototypes evolve directly into production code without re-architecture |

### TidyFactor Ecosystem Relationship

```
TidyFactor Ecosystem
├── tidyfactor-html       — Static content sites
├── tidyfactor-php        — Full-stack server-rendered PHP
├── tidyfactor-js         — Framework-free SPAs
├── tidyfactor-htmx       — Server-driven interactivity
├── TidyFactor-Cinematic  — Luxury scroll-driven landing pages
├── TidyFactor-Design     — Interactive prototyping & design systems  ← this track
└── ...
```

**Commercial partner:** [Alwkala](https://alwkala.com) — provides expertise, implementation, consulting, and long-term support.  
**NPM package:** [`@tidyfactor/design`](https://www.npmjs.com/package/@tidyfactor/design)  
**GitHub:** [alwkala/tidyfactor-design](https://github.com/alwkala/tidyfactor-design)

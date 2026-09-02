# Workflow: brief

Discovers and records core design system baselines (Foundation, School, Typography, Archetype) using the Contextual Decision Layer (CDL).

---

## Steps

1. **Check Existing State (Local Auto-Sensing First)**:
   - Scan workspace for `BRAND-GUIDELINES.md`, `brand.json`, and `.tidyfactor/design-brief.md`.
   - If present, immediately extract tokens, typography, and palette baselines without prompting.

2. **Check Active MCP Acceleration (Fail-Open Fallback)**:
   - If local files do not exist AND `search_knowledge_base` is available in active agent tools:
     Query `search_knowledge_base(query="design tokens", scope="project")` for existing project baselines.
   - If MCP is unavailable, empty, or returns error: Silently proceed to Step 3 with 0ms delay.

3. **Conduct Structured Discovery (Max 3 Questions)**:
   - If parameters remain unresolved, present at most 3 concise multiple-choice options:
     1. **CSS Foundation (D1)**: (A) Native CSS (Default), (B) Tailwind CSS, (C) daisyUI, (D) Pico CSS.
     2. **Design School (D2)**: (A) Swiss Modern, (B) Neo-Brutalism, (C) Editorial Luxury, (D) Egyptian / Regional Heritage.
     3. **Layout Archetype (D4)**: (A) Split Hero Canvas, (B) Narrative Editorial, (C) Command Dashboard.

4. **Record Decisions**:
   - Persist confirmed parameters into `.tidyfactor/design-brief.md`.

5. **Report Summary**:
   - Present a concise baseline summary and suggest next action (`/init`, `/tokens`, `/components`).

---

## Validation checklist

- [ ] `.tidyfactor/design-brief.md` exists and contains confirmed values for D1–D5.
- [ ] No more than 3 questions were asked in a single round.
- [ ] Design baseline conforms to `references/memory/quality-bar.md`.

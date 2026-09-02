# Workflow: brief

Discovers and records core design system baselines (Audience Mode, Surface Type, Tone School) using declarative Context Delta Resolution.

---

## 📋 Step 0: Mechanical Context Delta Resolution

Evaluate the declared decision contract in `manifest.json["decision_gates"]["brief"]`:

$$\text{Unknowns} = \text{Required Decisions} - (\text{Discovered Facts} \cup \text{Brain KIs})$$

1. **Local Discovery & Staleness Check**:
   - Check `.tidyfactor/design-brief.snapshot.json` and `brand.json`.
   - If `brand.json` has changed since the snapshot was saved (`track_staleness: true`), invalidate the cached value and mark `surface_type` / `tone_school` as `Unknown`.
2. **Optional Brain MCP Lookup (Fail-Open)**:
   - If decisions remain Unknown and `search_knowledge_base` is active, query `search_knowledge_base(query="design context", scope="project")`.
   - If absent or empty, proceed with 0ms silent bypass.
3. **Delta Evaluation**:
   - If $\text{Unknowns} = \emptyset$: Skip all questioning immediately and emit confirmed baseline.
   - If $\text{Unknowns} \neq \emptyset$: Proceed to Step 1 for **only the missing keys**.

---

## 💬 Step 1: Surgical Micro-Discovery (Only for Unknown Decisions)

> **Anti-Bot Constraint**: Never greet the user or ask for facts already resolved on disk. Present at most `max_interactive_questions` (3) sorted by priority:

- **Audience Mode (Priority 1)**: `(A) act` (Default), `(B) inspire`, `(C) evaluate`, `(D) learn`.
- **Surface Type (Priority 2)**: `(A) landing` (Default), `(B) dashboard`, `(C) product`, `(D) editorial`, `(E) interface`, `(F) minimal`.
- **Tone School (Priority 3)**: `(A) minimal` (Default), `(B) neo-brutalism`, `(C) luxury`, `(D) swiss`, `(E) bento`, `(F) heritage-nilotic`, `(G) heritage-kufic`.

---

## 💾 Step 2: SSOT Local Persistence & Outbound Push

1. **Write Local SSOT**: Persist resolved choices + source file hashes to `.tidyfactor/design-brief.snapshot.json` and `.tidyfactor/design-brief.md`.
2. **Outbound Push to Brain (`--sync-brain`)**:
   - If and ONLY IF invoked with `--sync-brain`, push the resolved `design_context` KI via `extract_knowledge_item`.
   - The local snapshot remains the immutable source of truth.

---

## 🎯 Step 3: Summary & Actionable Handoff

Display a concise 4-line baseline summary and suggest next action (`/tokens`, `/layout`, `/components`).

---

## Validation checklist

- [ ] Evaluated Context Delta Resolution against `manifest.json["decision_gates"]`.
- [ ] Only truly Unknown decisions were surfaced to the user.
- [ ] `.tidyfactor/design-brief.snapshot.json` and `.tidyfactor/design-brief.md` written as local SSOT.
- [ ] If `--sync-brain` was passed, outbound push was executed without blocking local output.
- [ ] Baseline conforms to `references/memory/quality-bar.md`.

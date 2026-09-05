# Workflow: brief (Contextual Decision Layer — DM-DA Protocol)

Discovers, extracts, and records core design system baselines using the **TidyFactor Dual-Mode Decision Architect (DM-DA)** engine.

---

## 📋 Step 0: Mechanical Context Delta Resolution

Evaluate the declared decision contract in `manifest.json["decision_gates"]["brief"]`:

$$\text{Unknowns} = \text{Required Decisions} - (\text{Discovered Facts} \cup \text{Brain KIs})$$

1. **Local Discovery & Staleness Check**:
   - Check `.tidyfactor/design-brief.snapshot.yaml` (or `.json`), `.tidyfactor/brief.md`, and `brand.yaml` (or `brand.json`).
   - If `brand.yaml` has changed since the snapshot was saved (`track_staleness: true`), invalidate the cached value and mark `surface_type` / `tone_school` as `Unknown`.
2. **Optional Brain MCP Lookup (Fail-Open)**:
   - If decisions remain Unknown and `search_knowledge_base` is active, query `search_knowledge_base(query="design context", scope="project")`.
   - If absent or empty, proceed with 0ms silent bypass.
3. **Delta Evaluation**:
   - If $\text{Unknowns} = \emptyset$: Skip all questioning immediately and emit confirmed baseline.
   - If $\text{Unknowns} \neq \emptyset$: Proceed to Mode A or Mode B as requested by user.

---

## 🧭 Step 1: Operational Mode Execution

### [MODE A] 🎯 الارتجال الذكي المقيد (Smart 3-Round Protocol)
*Fast-track structured alignment without cognitive friction.*

- **Round 1: Root & Core Mission**:
  - Audience Mode: `(A) act` (Default), `(B) inspire`, `(C) evaluate`, `(D) learn`.
  - Mission & Value Proposition.
- **Round 2: Structural Boundaries & Tech Stack**:
  - Surface Type: `(A) landing`, `(B) dashboard`, `(C) product`, `(D) editorial`, `(E) interface`.
  - CSS Foundation Layer: `(A) native` (Default), `(B) tailwind`, `(C) daisyui`, `(D) pico`, `(E) hybrid`.
  - Typography Pairing: `(A) classic-display`, `(B) modern-geometric`, `(C) contemporary-tech`.
- **Round 3: Final Conflicts & Safe Defaults**:
  - Resolve unresolved dimensions, apply conservative fallbacks.
  - Terminate strictly at Round 3.
  - **Decision Gate Prompt**: Prompt the user whether to confirm the baseline or escalate to Debate Mode:
    > *"هل تعتمد هذه البنية المبدئية للبدء فوراً، أم تفضل تفعيل [نمط المناظرة 🔥 Debate Mode] لاختبار متانة القرارات المعمارية؟"*

### [MODE B] 🔥 الاستجواب والمناظرة اللانهائية (Relentless Debate & Interview)
*Deep ideological extraction and architectural stress-testing.*

- **Trigger**: Command `/debate`, user request, or escalation from Round 3 of Mode A.
- **Behavior**:
  - Relentless counter-questioning: Challenge every architectural choice and surface hidden dependencies.
  - Expose anti-patterns (e.g. bloated utility CSS vs clean tokens, unvetted RTL assumptions, performance budget leaks).
  - Probe trade-offs between speed, scalability, and code-native purity.
- **Termination**: Ends **only** when the user explicitly triggers `"END DEBATE"` or types `"اعتماد"`.
- **Debate Artifact**: Generates `architectural_debate_synthesis.md` documenting decisions, discarded alternatives, and trade-off rationales.

---

## 💾 Step 2: SSOT Local Persistence & Outbound Push

1. **Write Local SSOT**: Persist resolved choices + source file hashes to `.tidyfactor/design-brief.snapshot.yaml` and `.tidyfactor/brief.md`.
2. **Outbound Push to Brain (`--sync-brain`)**:
   - If and ONLY IF invoked with `--sync-brain`, push the resolved `design_context` KI via `extract_knowledge_item`.
   - The local workspace file remains the immutable Single Source of Truth.

---

## 🎯 Step 3: Summary & Actionable Handoff

Display a concise baseline summary with active tokens and recommend the next lifecycle step (`/tokens`, `/layout`, `/components`).

---

## Validation checklist

- [ ] Evaluated Context Delta Resolution against `manifest.json["decision_gates"]`.
- [ ] Only truly Unknown decisions were surfaced to the user.
- [ ] Followed chosen Operational Mode (Mode A: 3 rounds max | Mode B: ended by "END DEBATE").
- [ ] `.tidyfactor/brief.md` and `.tidyfactor/design-brief.snapshot.yaml` written as local SSOT.
- [ ] If Mode B was executed, formatted debate artifact was created and linked.
- [ ] Baseline conforms to `references/memory/06-quality-bar.md` (Axis 7: Decision Alignment).

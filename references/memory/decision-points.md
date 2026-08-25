# Memory: decision-points (Contextual Decision Layer — CDL v1.0)

A thin arbitration protocol for resolving high-impact design system foundations and aesthetic school ambiguities before code emission.

---

## 🏛️ Decision Matrix (D1–D5)

| Code | Decision Dimension | Options (Reference SSOT) | Default Fallback | Trigger / Ambiguity Condition |
|:---:|---|---|---|---|
| **D1** | **CSS Foundation Layer** | • `native` (Zero-dep vanilla CSS tokens)<br>• `tailwind` (Utility-first CDN/configured)<br>• `daisyui` (Tailwind semantic component classes)<br>• `pico` (Semantic HTML micro-framework)<br>• `hybrid` (Design tokens + utility classes) | `native` | When prompt asks to build a UI prototype without declaring the CSS engine. |
| **D2** | **Design System School** | • `swiss-international` (Clean, grid-disciplined, high whitespace)<br>• `neo-brutalist` (High contrast, bold borders, sharp shadows)<br>• `luxury-glassmorphic` (Deep dark obsidian, gold/cyan glows, frosted glass)<br>• `warm-editorial` (Serif elegance, earth tones, literary rhythm) | `swiss-international` | When request lacks specific visual styling directions. |
| **D3** | **Arabic Typography Pairing** | • `classic-display` (El Messiri + Tajawal)<br>• `modern-geometric` (Alexandria + Readex Pro)<br>• `contemporary-tech` (Cairo + IBM Plex Sans Arabic) | `classic-display` | When targeting bilingual or Arabic-first interfaces. |
| **D4** | **Layout Archetype** | • `L1` (Fullbleed Hero + Story Flow)<br>• `L2` (Split Screen App Walkthrough)<br>• `L3` (Sidebar Dashboard + Metrics Grid)<br>• `L4` (Multi-Column Magazine / Portal) | `L1` (Landing) / `L3` (App) | When building pages or app screens. |
| **D5** | **Output Scope & Depth** | • `single-screen` (Single interactive HTML prototype)<br>• `complete-design-system` (`design-system/` + multi-page prototype suite) | `single-screen` | When request could mean a quick mock or full design kit. |

---

## ⚡ Boolean Skip Conditions (Deterministic Bypass)

Skip interactive elicitation and proceed silently when ANY of the following are true:
1. **Cached Brief Exists**: `.tidyfactor/design-brief.md` or root `brand.json` exists.
2. **Explicit User Declaration**: Prompt explicitly declares foundation and school (e.g. `"Build a neo-brutalist dashboard with Tailwind"`).
3. **Direct Command Invocation**: User invokes explicit foundation commands (`/tokens`, `/school`, `/typography`, `/layout`).
4. **Maintenance / Audit Task**: Auditing (`/audit`), performance profiling (`/perf`), or CSS retrofit (`/retrofit`) silently preserves existing design system.

---

## 🎯 Single-Round Batching & Priority Overflow

When elicitation is required:
1. **Max 3 Questions**: Ask at most 3 concise questions in a single round.
2. **Priority Order**:
   $$\mathbf{D1 \text{ (Foundation)}} > \mathbf{D2 \text{ (School)}} > \mathbf{D3 \text{ (Typography)}} > \mathbf{D4 \text{ (Layout)}} > \mathbf{D5 \text{ (Scope)}}$$
3. **Conservative Default**: Any unasked or unanswered dimensions automatically adopt the **Default Fallback**.

---

## 💾 Brief Persistence Protocol

When `/brief` runs, save confirmed decisions to `.tidyfactor/design-brief.md`:
```markdown
# Design System Brief
- Foundation: [native | tailwind | daisyui | pico | hybrid]
- Design School: [swiss-international | neo-brutalist | luxury-glassmorphic | warm-editorial]
- Typography Pairing: [classic-display | modern-geometric | contemporary-tech]
- Layout Archetype: [L1 | L2 | L3 | L4]
- Output Scope: [single-screen | complete-design-system]
- Confirmed At: YYYY-MM-DD
```

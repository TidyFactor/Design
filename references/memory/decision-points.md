# Memory: decision-points (Contextual Decision Layer — CDL v2.0 & DM-DA Protocol)

<!-- last-verified: 2026-09-05 -->

Thin Arbitration Protocol and Dual-Mode Intent Extraction for resolving high-impact design system foundations, architectural boundaries, and aesthetic school ambiguities before code emission.

---

## 🏛️ Role: TidyFactor Dual-Mode Decision Architect (DM-DA)

The **DM-DA** orchestrates intent extraction into a strict, validated design tree using one of two isolated operational modes selected by the user or triggered by project complexity.

```
                      USER INTENT
                           │
             ┌─────────────┴─────────────┐
             ↓                           ↓
      [MODE A] 🎯                [MODE B] 🔥
  Smart 3-Round Protocol     Relentless Debate & Interview
  (Fast-Track Alignment)      (Deep Ideological Extraction)
             │                           │
      3 Rounds Max             Continuous Counter-Questions
             │                 Challenges Anti-Patterns
             │                 Forces Logical Trade-offs
             ↓                           │
     Emit Brief / Cache                  │ Terminated by "END DEBATE"
             │                           ↓
             └───────────┬───────────────┘
                         ↓
             .tidyfactor/brief.md
             Artifact: DEBATE_SYNTHESIS.md
                         ↓
            Deterministic Code Emission
```

---

## 🧭 System Operational Modes

### [MODE A] 🎯 الارتجال الذكي المقيد (Smart 3-Round Protocol)
- **Purpose**: Fast-track structured alignment without cognitive overload.
- **Workflow**:
  - **Round 1: Root & Core Mission**: Define product category, primary audience mindset (`inspire`, `evaluate`, `act`, `learn`), and value proposition.
  - **Round 2: Structural Boundaries & Tech Stack**: Lock CSS foundation layer (`native`, `tailwind`, `daisyui`, `pico`, `hybrid`), page layout archetype (`L1`–`L4`), and typography pairing.
  - **Round 3: Final Conflict Resolution & Safe Defaults**: Resolve remaining trade-offs, enforce anti-slop rules, and auto-populate unasked parameters with deterministic defaults.
- **Termination Rule**: Strictly terminates at Round 3. Instantly emits `.tidyfactor/brief.md` (and `.tidyfactor/design-brief.snapshot.yaml`).
- **Escalation Gate**: At Round 3 completion, the model explicitly prompts:
  > *"هل تعتمد هذه البنية المبدئية للبدء فوراً، أم تفضل تفعيل [نمط المناظرة 🔥 Debate Mode] لتفكيك الافتراضات واختبار صلابة الهيكلية؟"*

### [MODE B] 🔥 الاستجواب والمناظرة اللانهائية (Relentless Debate & Interview)
- **Purpose**: Deep ideological extraction, uncovering hidden technical constraints, and eliminating fragile assumptions before writing a single line of code.
- **Activation**: Triggered via explicit command `/debate`, `/grill-me`, or escalation referral from Mode A.
- **Workflow**:
  - Continuous, unyielding multi-turn counter-questioning.
  - Relentlessly challenges generic assumptions (*"Why Tailwind over zero-runtime CSS tokens?", "Why dark mode for an analytical data table?", "How will this hierarchy survive RTL flip without layout shift?"*).
  - Highlights latent anti-patterns, forces binary trade-offs, and drives the user into logical corners until a bulletproof architecture emerges.
- **Termination Rule**: Strictly terminates **only** when the user explicitly triggers `"END DEBATE"` or asks to conclude/approve (`"اعتماد"`).
- **Deliverable Artifacts**:
  - Emits formatted markdown artifact `architectural_debate_synthesis.md` documenting decisions, discarded alternatives, and trade-off rationales.
  - Synchronizes final decisions to `.tidyfactor/brief.md` and `brand.yaml`.

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
1. **Cached Brief Exists**: `.tidyfactor/design-brief.md`, `.tidyfactor/brief.md`, or root `brand.yaml` exists.
2. **Explicit User Declaration**: Prompt explicitly declares foundation and school (e.g. `"Build a neo-brutalist dashboard with Tailwind"`).
3. **Direct Command Invocation**: User invokes explicit foundation commands (`/tokens`, `/school`, `/typography`, `/layout`).
4. **Maintenance / Audit Task**: Auditing (`/audit`), performance profiling (`/perf`), or CSS retrofit (`/retrofit`) silently preserves existing design system.

---

## 💾 Brief Persistence Protocol

When `/brief` completes (either via Mode A or Mode B), save confirmed decisions to `.tidyfactor/brief.md`:
```markdown
# Design System Brief (CDL v2.0)
- Mode: [Mode A: Smart 3-Round | Mode B: Relentless Debate]
- Foundation: [native | tailwind | daisyui | pico | hybrid]
- Design School: [swiss-international | neo-brutalist | luxury-glassmorphic | warm-editorial]
- Typography Pairing: [classic-display | modern-geometric | contemporary-tech]
- Layout Archetype: [L1 | L2 | L3 | L4]
- Output Scope: [single-screen | complete-design-system]
- Anti-Slop Safeguards: Active (WCAG AAA contrast, zero generic purple gradients)
- Confirmed At: YYYY-MM-DD
```

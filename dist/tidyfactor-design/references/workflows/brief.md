# Workflow: brief

Discovers and records core design system baselines (Foundation, School, Typography, Archetype) using the Contextual Decision Layer (CDL).

---

## Steps

1. **Check Existing State**:
   - Inspect `brand.json` and `.tidyfactor/design-brief.md` for existing tokens and school choices.

2. **Conduct Structured Discovery (Max 3 Questions)**:
   - If not specified, ask:
     1. **CSS Foundation (D1)**: Native CSS, Tailwind, or DaisyUI?
     2. **Design School (D2)**: Swiss Clean, Neo-Brutalist, Luxury Glassmorphic, or Warm Editorial?
     3. **Layout Archetype (D4)**: L1 Landing Story, L2 Split Screen, or L3 Dashboard?

3. **Record Decisions**:
   - Save `.tidyfactor/design-brief.md` with confirmed parameters.

4. **Report Summary**:
   - Confirm baseline parameters and prompt user to invoke `/init` or `/components`.

---

## Validation checklist

- [ ] `.tidyfactor/design-brief.md` exists and contains confirmed values for D1–D5.
- [ ] No more than 3 questions were asked in a single round.
- [ ] Design baseline conforms to `references/memory/quality-bar.md`.

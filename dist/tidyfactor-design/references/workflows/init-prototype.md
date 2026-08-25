# Workflow: init-prototype

Scaffolds a brand-new design system and interactive code-native prototype with zero build step.

---

## Steps

0. **Step 0: CDL Resolution & Brief Check**:
   - Check `.tidyfactor/design-brief.md` and `brand.json`. If missing, apply default `native` foundation and `swiss-international` school.

1. **Scaffold Design System**:
   - Create `design-system/tokens.css`, `base.css`, `motion.css`, and `components/`.

2. **Assemble Prototype Page**:
   - Create semantic HTML page (`pages/index.html` or requested view) linking `design-system/`.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] Zero per-page CSS/JS; all styling lives in `design-system/`.
- [ ] Single CSS foundation applied consistently.
- [ ] Interactive component states defined.
- [ ] Pre-emit critique stamp included.

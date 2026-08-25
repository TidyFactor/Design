# Workflow: clone-prototype

Extracts design tokens, component styles, and layouts from an existing website or reference asset into the TidyFactor design system structure.

---

## Steps

0. **Step 0: CDL Resolution & Brief Check**:
   - Confirm extraction target and destination foundation.

1. **Extract Visual DNA**:
   - Extract primary/secondary colors, font families, base spacing units, and radius scale into `brand.json` and `design-system/tokens.css`.

2. **Reconstruct Components**:
   - Recreate core UI components (buttons, cards, navigation) as reusable CSS classes.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] Extracted tokens populated in `brand.json` and `design-system/tokens.css`.
- [ ] Components follow 8-state model.
- [ ] Pre-emit critique stamp included.

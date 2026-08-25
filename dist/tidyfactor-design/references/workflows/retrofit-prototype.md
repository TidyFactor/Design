# Workflow: retrofit-prototype

Unifies a drifted prototype by moving hardcoded inline styles and custom per-page CSS into the centralized design system.

---

## Steps

1. **Scan For Drift**:
   - Locate inline `style="..."` attributes and one-off CSS classes across HTML files.

2. **Migrate to Design System**:
   - Replace one-off values with CSS custom properties from `design-system/tokens.css`.
   - Extract recurring HTML patterns into reusable component classes in `design-system/components/`.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] All inline styles and ad-hoc rules replaced with design system tokens.
- [ ] Visual consistency restored across all pages.
- [ ] Pre-emit critique stamp included.

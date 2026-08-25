# Workflow: audit-prototype

Audits design system consistency, token hygiene, responsive layout behavior, and 8-state completeness.

---

## Steps

1. **Verify Token & Invariant Compliance**:
   - Check that all elements reference CSS custom properties.
   - Check that no Amiri headings exceed 24px.
   - Check that all interactive elements support focus states and reduced motion.

2. **Generate Audit Scorecard**:
   - Grade prototype against 7-axis quality gate.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] Complete audit report produced with concrete recommendations.
- [ ] Token coverage verified across all views.
- [ ] Pre-emit critique stamp included.

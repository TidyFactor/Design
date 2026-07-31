# Workflow: audit-prototype

One outcome: Generate a read-only structural health, anti-generic UI audit, and pre-ship finish gate report for an existing prototype.

## Execution Steps

1. **Check Structural Architecture**:
   - Verify `design-system/` directory structure against `references/memory/architecture.md`.
2. **Scan for Per-Page Drift & Inline Overrides**:
   - Search `pages/*.html` for inline `<style>`, inline `<script>` logic, or hardcoded hex colors.
3. **Verify CSS Foundation Consistency**:
   - Confirm only one CSS foundation is in use per `references/memory/foundations.md`.
4. **Anti-Interchangeable UI & Finish Gate Audit**:
   - Inspect screen layout against domain requirements to detect generic filler:
     - Detect **Generic Dashboards** (interchangeable metric boxes that fit any product).
     - Detect **Un-hierarchized Card Grids** (equal-weight cards hiding primary user actions).
     - Detect **Decorative Filler** (gradients, glassmorphism added solely to "look designed").
     - Detect **Lifeless Empty States** (generic icons instead of actionable onboarding CTAs).
5. **Audit Accessibility & Typography**:
   - Check WCAG contrast, `prefers-reduced-motion` handling, and font pairing (El Messiri / Tajawal).
6. **Produce Hard Finish-Gate Report**:
   - Issue binary **PASS** or **HOLD** verdict with file-level evidence (no vague taste-based adjectives like "looks dated" or "needs polish").

## Validation Checklist

- [ ] Audit is strictly read-only unless explicit fix requested
- [ ] Issued binary **PASS** or **HOLD** finish-gate verdict
- [ ] Every finding cites observable evidence (exact file, DOM element, or token path)
- [ ] Generic UI Anti-Pattern check completed across all screens in `pages/`

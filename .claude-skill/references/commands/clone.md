# Command: `clone` — Reverse-Engineering & Design System Extraction

Runtime entry point for reverse-engineering an external website reference into a clean, code-native prototype design system.

## Dispatch Steps

1. Load `references/memory/architecture.md` — locked file tree layout and consistency rules.
2. Load `memory/03-narrative-conversion.md` — token derivation rules.
3. Load `references/workflows/clone-prototype.md` — execution sequence, multi-state diffing, and validation checklist.
4. Enforce **150-Line Complexity Budget Rule**: split sections exceeding 150-line specs into sub-component tasks.
5. Execute workflow steps per `clone-prototype.md`.

## Checklist

- [ ] Interaction models (`scroll-driven`, `click-driven`, `hover-driven`) documented before building
- [ ] Multi-state CSS transition diffs mapped to `tokens.css`
- [ ] Component specs written to `docs/research/components/`
- [ ] `references/workflows/clone-prototype.md` validation checklist fully satisfied

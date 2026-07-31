# Command: `audit` — Structural Consistency & Health Report

Runtime entry point for auditing prototype compliance and structural integrity (read-only by default).

## Dispatch steps

1. Load `references/memory/architecture.md` — locked file tree layout and consistency rules.
2. Load `memory/06-quality-bar.md` — quality bar criteria.
3. Load `references/workflows/audit-prototype.md` — check sequence and report format.
4. Execute audit steps per `audit-prototype.md` and produce a read-only health report.

## Checklist

- [ ] Audit is read-only unless explicit fix requested
- [ ] `references/workflows/audit-prototype.md` validation checklist fully satisfied

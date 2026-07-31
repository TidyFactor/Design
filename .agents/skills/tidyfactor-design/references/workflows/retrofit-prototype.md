# Workflow: retrofit-prototype

One outcome: Audit a drifted prototype, extract scattered inline/page-level styles into `design-system/`, and unify all pages under one system.

## Execution Steps

1. **Run Scoped Structural Audit**:
   - Locate inline `<style>` tags, per-page `.css` files, and ad-hoc inline styles across all pages in `pages/`.
2. **Extract Common Utilities & Components**:
   - Consolidate repeated style definitions into `components.css` or `tokens.css`.
3. **Purge Page-Level Overrides**:
   - Strip inline styles from HTML pages and replace with design system component classes.
4. **Verify Zero-Drift Compliance**:
   - Run audit checklist to ensure no page-level styles remain.

## Validation Checklist

- [ ] Zero inline `<style>` blocks remaining across all `.html` files in `pages/`
- [ ] No per-page `.css` files exist in project tree
- [ ] All page elements use shared classes from `components.css` or utility tokens
- [ ] All pages visually match pre-refactor state without regressions

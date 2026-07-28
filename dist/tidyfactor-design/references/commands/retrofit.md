# Command: `retrofit` — Unify a Drifted Prototype

## Purpose
Improve mode's entry point: a prototype that grew page-by-page without this
skill's discipline (or drifted despite it) gets brought back under one
system — without a blind rebuild that loses real content/layout work
already done.

## When to run it
- An existing prototype (built with or without this skill) has
  inconsistent styling across pages.
- User phrasing: "clean up this prototype", "these pages don't match
  anymore", `retrofit`.

## What it does
1. **`audit` first, always** — the structural + consistency report is the
   map for this command; never start unifying without it.
2. From the audit's findings, reconstruct what the *intended* system
   should have been: the most common/best version of each repeated
   pattern becomes the canonical `components.css` entry (or foundation
   equivalent) — not an arbitrary new design.
3. Establish `tokens.css`/`brand.json` retroactively if missing, inferring
   values from the most consistent existing pages rather than inventing
   new ones wholesale (preserve what's already working).
4. Migrate pages one at a time onto the canonical system: replace inline
   styles/page-level CSS with the shared classes, preserving each page's
   actual content and layout intent — this is a styling-mechanism
   migration, not a content rewrite.
5. Re-run `audit` after each page migrates to confirm the violation is
   actually cleared, not just visually similar.

## Output convention
```
Before: pages/pricing.html with <style> block
After:  pages/pricing.html referencing design-system/components.css only,
        same content and layout, canonical classes added to components.css
        where a real reusable pattern was found
```

## Checklist
- [ ] `audit` run first and its findings used as the migration map
- [ ] Canonical components derived from what already existed, not invented
      from scratch
- [ ] Each migrated page's content/layout intent preserved
- [ ] `audit` re-run after migration confirms violations actually cleared

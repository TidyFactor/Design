# Command: `clone` — Extract a Direction from an Existing Reference

## Purpose
Convert mode's entry point: turn "make it feel like this" (a reference
site, a set of screenshots, a competitor) into our own token/component
system — never a literal copy of markup or a scrape, always a rebuilt
system that produces the same impression.

## When to run it
- The brief starts from an existing reference rather than a blank brief.
- User phrasing: "clone the feel of this site", "build our own version of
  this dashboard's style", `clone`.

## What it does
1. **Audit the reference** for its actual design decisions: approximate
   color palette (as named tokens, not literal copied hex if the source is
   copyrighted brand work), type pairing and scale rhythm, spacing rhythm,
   component patterns used, motion character.
2. Identify which `references/foundations/` choice the reference implies
   (a component-dense SaaS dashboard likely implies daisyUI/Hybrid; a
   highly custom brand site implies Native) — confirm with the user rather
   than assuming.
3. Run `school` to document the extracted direction in our own words —
   this step is what turns "copying" into "a conscious, own-able design
   decision".
4. Hand off into `tokens` → `components` → `page`/`dashboard` as normal —
   `clone` itself doesn't build pages, it establishes the direction they'll
   be built from.
5. **Never** reproduce the reference's actual copy, imagery, or literal
   markup — extract the *system* (palette, type, spacing, component
   shapes), not the content.

## Output convention
```
design-system/brand.json
  "school": { "direction": "...", "extractedFrom": "reference description, not a URL scrape" }
```

## Checklist
- [ ] Extracted as a token/component system, not copied markup or content
- [ ] `school` decision documents the direction in our own words
- [ ] CSS foundation choice confirmed against what the reference implies,
      not assumed

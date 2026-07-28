# Command: `audit` — Structural Consistency & Quality-Bar Report

## Purpose
The command that actually verifies the consistency guarantee holds —
read-only, so it's safe to run constantly (before every client review)
without risk of it changing anything.

## When to run it
- Before any client/stakeholder review.
- First step of Improve mode (`retrofit`) — always audit before touching
  anything.
- User phrasing: "check this prototype", "why do these pages feel
  inconsistent", `audit`.

## What it does
1. **Structural scan (primary, non-negotiable)** across every file in
   `pages/`:
   - Any `<style>` tag → violation.
   - Any `style="..."` attribute → violation.
   - Any `<script>` without a `src` pointing at a shared `design-system/*`
     file → violation.
   - Any literal hex color / px font-size / arbitrary spacing value not
     traceable to a token → violation.
2. **Cross-page consistency scan**: same component rendered with different
   markup/classes on different pages (drift), components that look similar
   but aren't the same class (near-duplicates that should have been one
   component with a modifier).
3. **Quality-bar checklist** (`memory/06-quality-bar.md`): hero-as-thesis
   present, real content vs. lorem ipsum, states matrix complete on
   interactive components, motion respects `prefers-reduced-motion`.
4. **i18n checklist**: `html[lang]`/`dir` correctness, El Messiri/Tajawal
   in use for Arabic (never Amiri), bilingual pattern applied consistently.
5. **Report as a scored, grouped list** — structural violations first
   (these are the ones that break the skill's core promise), then quality
   gaps, then polish suggestions. No file is changed by this command.

## Output convention
```
Report only — no files changed.
  Structural violations: N (page-level CSS/JS, untraced hardcoded values)
  Cross-page drift: N
  Quality-bar gaps: N
  i18n gaps: N
```

## Checklist
- [ ] Every page in `pages/` scanned, not a sample
- [ ] Findings grouped by severity, structural violations surfaced first
- [ ] No file edited by `audit` itself — fixes routed to their owning
      command after confirmation

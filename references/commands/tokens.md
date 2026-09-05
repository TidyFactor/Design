# Command: `tokens` — Design Tokens & `brand.json`

## Purpose
Establish the single source of truth every other command reads from. This
is the one command every later command depends on — re-running it (a
rebrand, a palette fix) is how a change propagates to every page at once.

## When to run it
- Start of `init` — always first, right after `school`.
- The user says "update the brand colors", "adjust the type scale",
  "we rebranded", `tokens`.

## What it does
1. Derive token categories from the `school` decision and brief:
   - `colors` — primary/secondary/accent + light/dark surface scales
   - `typography` — display/body/mono families, a type scale (not
     arbitrary per-heading sizes), weights
   - `spacing` — a consistent scale (e.g. 4px base), not ad hoc values
   - `radius`, `shadow` — a small fixed set, not one-off values per
     component
   - `motion` — duration/easing tokens (feeds `motion` command)
2. Write `design-system/tokens.css` as `:root` custom properties (Native/
   Hybrid), or the equivalent theme-config object (Tailwind), or the
   `[data-theme]` block (daisyUI) — per `references/foundations/<choice>.md`.
3. Write/update `design-system/brand.yaml` (and synced `brand.json`): `meta.*`, `colors.*`,
   `typography.*`, `spacing.*`, `voice.*` (copy tone/register), `cssFoundation`,
   `localization.*` (default locale, RTL locales — see `i18n`).
4. **If tokens.css already exists and pages already reference it**: this is
   a propagating change — flag every existing page for re-verification
   after the update, don't silently assume they still look correct.

## Output convention
```
design-system/
  tokens.css     ← :root custom properties (or foundation-equivalent)
  brand.yaml     ← primary structured source (Rule 15 YAML primacy)
  brand.json     ← legacy compatibility mirror
```

## Checklist
- [ ] Every token category present: colors, typography, spacing, radius,
      shadow, motion
- [ ] `cssFoundation` recorded in `brand.json` and matches the project's
      actual `<head>` includes
- [ ] If tokens changed on an existing project, affected pages flagged for
      re-verification

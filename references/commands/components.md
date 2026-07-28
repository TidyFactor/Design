# Command: `components` — The Shared Component Library

## Purpose
The mechanism that makes the consistency guarantee real: one place where
every reusable visual pattern lives, so no page ever needs to invent its
own. This command is the *only* legitimate way new styling enters the
project after `init`.

## When to run it
- Seeding the base set during `init`.
- A `page`/`dashboard` run hits a design need with no existing match —
  stop that command, run `components` to add it properly, then resume.
- User phrasing: "add a component for X", "we need a pricing table style",
  `components`.

## What it does
1. Confirm the project's `cssFoundation` (from `brand.json`) and read the
   matching `references/foundations/<choice>.md` — it decides *how* this
   command implements the component (hand-authored class, daisyUI markup,
   Tailwind utility combination).
2. **daisyUI/Hybrid**: check whether daisyUI already solves this pattern
   before writing anything — fetch the exact markup from the official
   daisyUI skill (`daisyui.com/skills/daisyui`) rather than guessing class
   names from memory.
3. **Native/Hybrid-signature**: author the class in `components.css`,
   referencing only `tokens.css` custom properties — no literal values.
4. Cover every state the component needs now (see `states` command for the
   full state matrix) — don't ship a hover-less button if hover is
   reachable.
5. Document the new component with a one-line comment: name, purpose, which
   states it supports.
6. **Never** duplicate an existing component under a new name because a
   page's context felt slightly different — extend the existing one with a
   modifier instead (`.card--compact`, not `.card-small`).

## Output convention
```
design-system/components.css
  /* Card — states: default, hover, featured */
  .card { ... }
  .card--featured { ... }
```

## Checklist
- [ ] Checked whether the chosen foundation already solves this before
      authoring anything new
- [ ] Every value traces to a token, none hardcoded
- [ ] Required states covered, not just the default look
- [ ] No near-duplicate of an existing component — extended instead

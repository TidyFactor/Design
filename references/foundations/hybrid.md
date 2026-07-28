# Foundation: Hybrid (daisyUI + Native)

## When this is the right choice
The default recommendation for most real briefs: composite, "solved"
components (tables, modals, forms, navigation, steps) don't need
reinventing — but the handful of elements that carry the brand's actual
personality (the hero, a signature interaction, a distinctive card variant)
deserve hand-authored treatment so the result doesn't read as "generic
daisyUI".

## Setup
Same CDN includes as `daisyui.md`. `components.css` loads after daisyUI's
stylesheet so Native overrides/additions win without needing `!important`.

## Division of labor
- **daisyUI owns**: anything structurally standard — tables, modals,
  drawers, dropdowns, form controls, pagination, toasts, steps.
- **Native (`components.css`) owns**: the hero treatment, any signature
  card/section variant called out during `school`, and anything the brief
  explicitly flags as "this must not look templated".

## Decision rule for `components`/`page`/`dashboard`
Before styling anything, ask: "is this a solved, standard UI pattern, or is
this where the brand's personality needs to show?" First → daisyUI class.
Second → Native class in `components.css`. Never build a Native
reimplementation of something daisyUI already solves well — that defeats
the point of choosing Hybrid over pure Native.

## brand.json mapping
Both mappings from `daisyui.md` and `native.md` apply simultaneously — the
daisyUI theme handles color of standard components, `tokens.css` custom
properties handle everything Native-owned.

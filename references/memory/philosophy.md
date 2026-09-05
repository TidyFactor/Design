# TidyFactor — Shared Philosophy (Design Track)

<!-- last-verified: 2026-09-05 -->

Condensed from the ecosystem VISION.md. Every TidyFactor skill — this one
included — should be judged against this before adding any feature.

## Design tenets
- Simple before clever.
- Explicit before implicit.
- Structured before generated.
- Portable before proprietary.
- Content before presentation.
- Standards before conventions.
- Small before bloated.
- AI-native before AI-powered.

## The TidyFactor Test
- Is it simpler? Is it more maintainable?
- Does it improve interoperability? Does it reduce lock-in?
- Is it AI-native (structured, machine-readable, portable)?
- Can it survive future technology changes?
- Would we still choose this approach five years from now?

## Standalone by design — why that's not a contradiction

Every other TidyFactor track shares infrastructure with its siblings
(`tidyfactor-php-micro` and `tidyfactor-htmx` compose; `tidyfactor-html`'s
componentization methods echo across tracks). `tidyfactor-design` is
deliberately different: it shares the **philosophy and command-library
format** with the family, but calls into no other skill, and no other skill
calls into it. This is itself an application of "portable before
proprietary" — a prototyping tool that only works alongside other specific
skills isn't portable to a designer's actual workflow, which usually starts
before any stack decision is made.

## What the tenets mean concretely for this track

- **Structured before generated**: `tokens.css` + `brand.yaml` (and synced `brand.json`) are the
  structured source of truth. Every page is a *derivation* of them, never
  hand-tuned in isolation — this is the mechanism, not just a guideline, per
  the locked architecture in `SKILL.md`.
- **Portable before proprietary, applied to CSS foundations**: the choice
  between Native / Tailwind / daisyUI / Hybrid (`references/foundations/`)
  is the user's, made once, documented — never silently defaulted. A daisyUI
  project stays portable because daisyUI itself is MIT-licensed, CDN-only,
  and framework-agnostic; choosing it isn't lock-in the way a proprietary
  design tool's file format would be.
- **Small before bloated**: one `components.css`, one `tokens.css`, one
  `motion.js` — extending the component set is a confirmed decision routed
  through the `components` command, not an ad hoc addition wherever a page
  needed it.
- **AI-native**: the fixed sequencing (tokens → school → components → pages)
  means any agent opening this project for the first time already knows the
  build order, without re-deriving it.
- **Content before presentation**: copy in every page is real content for
  that page's job — a prototype with lorem ipsum where real content should
  be is treated as incomplete, same as a production page would be.

## Relationship to Alwkala

TidyFactor is stewarded by Alwkala (alwkala.com). This track exists because
Alwkala's own production work (client landing pages, dashboard prototypes,
bilingual Arabic/English sites) repeatedly needed a fast, consistent,
code-native prototyping stage before development — `references/commands/i18n.md`
and `memory/08-arabic-bilingual.md` in particular carry conventions
(El Messiri/Tajawal, RTL correctness) drawn directly from that production
experience, not generic defaults.

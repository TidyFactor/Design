# Command: `init` — Foundation + First Page, One Pass

## Purpose
The primary entry point: establish everything a project needs once —
foundation choice, design direction, tokens, base components — and ship the
first working page, so the designer has something real to react to
immediately rather than an empty scaffold.

## When to run it
- No project exists yet.
- User phrasing: "start a new prototype", "build a design system for X",
  "ابدأ نموذج أولي جديد".

## What it does
1. **Step 0 / 0b** (from `SKILL.md`): confirm mode is Init, and ask the CSS
   foundation question if not already answered. Read the matching
   `references/foundations/<choice>.md` in full.
2. **Brief intake**: product/brand, audience, the page's job, any existing
   brand material (logo, colors, existing site) to anchor from. If nothing
   is given, ask for the one or two facts that would otherwise be guessed
   (per the ambiguity-handling default: pick a reasonable direction and
   state the assumption rather than blocking).
3. **`school`**: choose and document the design direction (see `school`
   command) — this happens before tokens so the token values serve a
   direction, not the other way around.
4. **`tokens`**: generate `design-system/tokens.css` + `design-system/brand.json`
   (see `tokens` command), including the `cssFoundation` field.
5. **`components`**: seed `design-system/components.css` (or the theme
   config, for daisyUI/Tailwind) with the base set: buttons, cards, nav,
   form fields — whatever the first page needs, nothing speculative.
6. **First page**: run `page` (or `dashboard`, if the brief is app-first)
   for the homepage/primary screen.
7. Serve locally and confirm the architecture is clean: zero inline styles,
   zero page-level CSS/JS files.

## Output convention
```
project/
  design-system/
    tokens.css
    base.css
    components.css
    brand.json
    (motion.js, interactions.js if the first page needs them)
  pages/
    home.html   (or the brief's actual first page)
```

## Checklist
- [ ] Mode and CSS foundation both confirmed and recorded (not re-askable
      later)
- [ ] `school` decision documented before any token was written
- [ ] First page has zero inline `<style>`/`<script>` and no page-level file
- [ ] Served and visually verified in a browser tab

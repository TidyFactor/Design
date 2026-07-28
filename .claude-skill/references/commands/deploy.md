# Command: `deploy` — Preview, Present, Export

## Purpose
Always the last command: verify the prototype actually behaves correctly
and package it for a client presentation or a developer handoff, with zero
build step required either way.

## When to run it
- Always last in a full sequence, after `audit` passes.
- User phrasing: "get this ready to present", "export the prototype",
  `deploy`.

## What it does
1. **Serve locally**: `python -m http.server 8123` or `npx serve` — open in
   a **visible** browser tab (backgrounded tabs pause
   `requestAnimationFrame`, which affects `motion`'s entrance/scroll
   effects and can produce false verification results).
2. **Present mode**: confirm `proto-nav.js`'s toolbar works — page jump,
   flow start, state toggles — this is the client-facing "click through it
   yourself" experience.
3. **Confirm portability**: the whole `pages/` + `design-system/` folder
   runs correctly opened via plain static file serving — no server
   process, no build step, matches the zero-dependency promise of every
   TidyFactor track's *output*, whatever the CSS foundation needed at
   design time.
4. **Handoff note (optional, never assumed)**: if the user wants this
   handed to `tidyfactor-html`/`tidyfactor-php-*` for production, that's a
   separate, explicit request — `deploy` doesn't restructure anything
   toward another skill's conventions unasked.
5. Final `audit` pass — nothing ships to a client review with open
   structural violations.

## Output convention
```
project/
  design-system/   ← shipped as-is, still the only source of styling
  pages/
  proto-nav.js       (strip before any production handoff — it's a dev tool)
```

## Checklist
- [ ] Verified in a visible browser tab
- [ ] `proto-nav.js` present-mode toolbar functions correctly
- [ ] Runs from plain static file serving, no build step
- [ ] Final `audit` clean (or open findings explicitly accepted by the user)

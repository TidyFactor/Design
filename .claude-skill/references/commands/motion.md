# Command: `motion` — Shared Animation & Choreography

## Purpose
One shared `motion.js` (+ motion tokens in `tokens.css`) so every page
moves with the same character, instead of each page's animations feeling
like a different designer built them.

## When to run it
- Seeding the base entrance/scroll-reveal behavior during `init`.
- A page feels static or the motion feels inconsistent with the rest of
  the prototype.
- User phrasing: "add scroll animations", "make this feel alive", `motion`.

## What it does
1. Read `tokens.css`'s motion tokens (durations, easing curves) — every
   animation in `motion.js` uses these, never a one-off duration/easing
   typed inline.
2. Apply the twelve animation principles adapted to UI (see
   `memory/04-motion-principles.md`): anticipation (subtle pre-state before
   a big reveal), staging (one focal change at a time, not everything
   animating simultaneously), follow-through/overshoot for a natural feel
   on entrance, ease-out for anything entering, ease-in for anything
   leaving.
3. Implement as shared, reusable behavior, not per-page scripts:
   - Entrance choreography (IntersectionObserver-driven reveal, staggered
     for lists/grids)
   - Scroll-driven accents (subtle parallax/progress indicators — full
     canvas-film scroll techniques belong to `tidyfactor-cinematic`, not
     here)
   - Hover/focus micro-interactions defined alongside the component in
     `components.css`, triggered by CSS `:hover`/`:focus-visible` where
     possible rather than JS
4. Respect `prefers-reduced-motion` globally in `motion.js` — disable
   scroll-driven and entrance effects, keep only opacity/color transitions,
   on every page automatically (not opt-in per page).

## Output convention
```
design-system/
  motion.js       ← shared entrance/scroll/stagger behavior
  tokens.css        ← --ease-*, --duration-* consumed by motion.js and components.css
```

## Checklist
- [ ] Every animation references a motion token, none hardcoded
- [ ] One focal change staged at a time on entrance, not simultaneous chaos
- [ ] `prefers-reduced-motion` disables scroll/entrance effects globally
- [ ] No per-page animation script — behavior lives in shared `motion.js`

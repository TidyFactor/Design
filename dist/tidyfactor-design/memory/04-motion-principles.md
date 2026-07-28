# Motion Principles — Reference for `motion`

Adapted from the classic animation principles, applied to UI motion rather
than character animation.

## Staging
One focal change communicated at a time. A section revealing five cards
simultaneously reads as noise; the same five staggered by ~60-80ms each
read as a considered sequence.

## Anticipation
A small pre-state before a bigger change helps the eye track what's about
to happen (a button's subtle scale-down before a bigger transition, a
skeleton before content pops in) — used sparingly, not on every
interaction.

## Ease-out for entrances, ease-in for exits
Things entering the screen should decelerate into place (ease-out);
things leaving should accelerate away (ease-in). Using the same easing
for both reads as mechanical rather than natural.

## Follow-through / slight overshoot
A very small overshoot-and-settle on an entrance (a card that slightly
overshoots its final position before settling) reads as more alive than a
purely linear arrival — use subtly, it's easy to overdo into "bouncy" and
undermine a restrained direction like Minimalism or Swiss.

## Secondary motion
A primary element moving (e.g. a hero image entering) can carry a small,
delayed secondary motion (a shadow settling a beat later, an accent
element trailing slightly) — this is what separates "orchestrated" motion
from "everything moves in lockstep".

## Restraint is a choice, not an absence
Per `frontend-design`: an orchestrated single moment usually lands harder
than scattered effects everywhere, and excess ambient animation is one of
the strongest tells that a design is AI-generated. `school`'s chosen
direction should determine how much motion is appropriate — Minimalism and
Swiss call for very little; Modern SaaS and Glassmorphism can carry more.

## Non-negotiable: `prefers-reduced-motion`
Every entrance/scroll/parallax effect in `motion.js` must check this media
query and fall back to instant or opacity-only transitions — applied
globally in the shared file, not per page.

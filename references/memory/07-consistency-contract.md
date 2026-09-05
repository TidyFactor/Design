# The Consistency Contract — Why the Architecture Is Strict

<!-- last-verified: 2026-09-05 -->

This is the mechanism, stated once so every command can refer back to it
instead of re-justifying it each time.

## The problem this skill exists to solve
A designer (or an agent) building a website one page at a time, with each
page free to write its own CSS/JS, will drift — not from carelessness, but
because "just this once" always feels justified in the moment a page needs
something slightly different. At 5 pages the drift is invisible. At 50
pages it's the whole project.

## The rule
Structural separation, not review discipline, is what prevents drift: if a
page *cannot* carry its own styling logic (no `<style>`, no inline
`style=`, no per-page `.css`/`.js` file), then drift becomes structurally
impossible rather than merely discouraged. This is why `page`/`dashboard`
treat a missing component as a hard stop, not a judgment call — "just add
it inline this once" is exactly the failure mode being designed against.

## The escape valve
The rule only works long-term if extending the shared system stays easy —
if adding a genuinely new component to `components.css` were harder than
writing 10 lines of scoped CSS, people would route around the rule. The
`components` command exists specifically to make the correct path (extend
the shared system) faster than the wrong path (patch locally), not just
more virtuous.

## What `audit` is actually checking
Every finding in `audit`'s structural scan traces back to this contract:
inline styles, per-page scripts, untraced literal values, and near-
duplicate components are all the same underlying failure — a page solved
its own problem instead of extending the shared one.

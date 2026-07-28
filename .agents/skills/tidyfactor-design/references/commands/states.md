# Command: `states` — Interactive States, Not a Static Mockup

## Purpose
This is what separates an "interactive prototype" from a picture of a
website — the difference the whole positioning of this skill depends on.
Kept as its own command because states are easy to skip under time
pressure and easy to audit for once isolated.

## When to run it
- After a component/page/screen has its default look — always follow with
  a states pass before calling it done.
- User phrasing: "add hover states", "what does this look like empty/
  loading", `states`.

## What it does
1. For every interactive component in scope, confirm the full matrix
   applies where relevant: default, hover, focus-visible, active/pressed,
   disabled, loading, empty, error, success.
2. Implement via `interactions.js` (shared) for stateful JS behavior
   (dropdown open/close, tab switching, modal show/hide, toast
   dismiss) and CSS pseudo-classes for the rest — never a per-page
   `<script>` for one page's interactive widget.
3. **Empty states are a design decision, not a placeholder**: what caused
   it, what the user should do next — same principle as `frontend-design`'s
   "an empty screen is an invitation to act", applied consistently across
   the whole prototype rather than per page.
4. **Loading states**: skeleton shapes matching the eventual content's
   layout, not a generic spinner-only blank — this is what makes a
   dashboard prototype credible.
5. Keyboard/focus-visible states are not optional — every interactive
   element needs a visible focus ring using a token color, not the browser
   default.

## Output convention
```
design-system/
  components.css     ← :hover, :focus-visible, [disabled], .is-loading, .is-empty, .is-error
  interactions.js      ← shared stateful behavior (toggle/modal/dropdown/tab)
```

## Checklist
- [ ] Hover, focus-visible, active, and disabled states present on every
      interactive component
- [ ] Empty and loading states designed deliberately, not left as
      placeholders
- [ ] Stateful behavior lives in shared `interactions.js`, never a
      per-page script
- [ ] Focus ring visible and token-colored on every focusable element

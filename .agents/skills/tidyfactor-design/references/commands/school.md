# Command: `school` — Conscious Design Direction

## Purpose
Force a named, justified aesthetic choice before any token or component
exists — the single biggest lever against a prototype defaulting to
generic AI-generated design patterns (see `memory/01-design-schools.md` for
the calibration list of overused defaults to actively avoid unless the brief
asks for them specifically).

## When to run it
- Always, as part of `init`, before `tokens`.
- The prototype "feels generic" or "could be any brand" — re-run to
  re-anchor the direction.
- User phrasing: "make this feel more [X]", "pick a design direction",
  `school`.

## What it does
1. Read the brief's subject matter, audience, and any stated visual
   references. If the brief pins down a direction, follow it exactly.
2. Where the brief leaves it open, choose deliberately from `memory/16-design-movements-guide.md` (all 20 Visual Aesthetics & Design Movements: Swiss, Flat, Material, Minimalism, Brutalism/Neo-Brutalism, Bauhaus, Skeuomorphism, Glassmorphism, Maximalism, Industrial, Bento Box, Aurora Mesh, Neumorphism, Corporate Memphis, Cyberpunk, Claymorphism, Isometric, Kinetic Typography, Organic/Amorphous, Frutiger Aero/Y2K) and `memory/17-storytelling-industries-ux.md` (4 Storytelling Archetypes, 8 Industry Registers, 8 UX Philosophies) — never by defaulting to whichever is most common in training data.
3. **Actively avoid** the three AI-design tells unless the brief calls for
   one specifically: warm-cream + terracotta serif, near-black + single
   acid accent, broadsheet-hairline-columns-everywhere applied
   indiscriminately regardless of subject.
4. Document the choice in one short paragraph: which school, why it fits
   this subject/audience, and the one signature element the direction will
   be remembered by.
5. This decision governs every later token value and component style —
   `tokens`/`components` implement it, they don't re-decide it.

## Output convention
```
design-system/brand.json
  "school": { "direction": "...", "rationale": "...", "signatureElement": "..." }
```

## Checklist
- [ ] Direction is a real choice made for this subject, not a default
- [ ] Signature element identified — the one thing this prototype will be
      remembered by
- [ ] Decision recorded in `brand.json`, not left implicit in code

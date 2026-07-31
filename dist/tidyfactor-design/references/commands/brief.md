# Command: `brief` — Design Context Gate & Fit Test

Runtime entry point for establishing design context before any build begins. Part of the **Discovery** lifecycle phase.

## When to use

- **Always** before `init`, `page`, `dashboard`, or `components` — the brief ensures the design has intention, not defaults.
- After `study` if a reference was analyzed.
- Whenever a design request lacks context ("build me a landing page" without audience/tone/purpose).

## The 3-Question Design-Context Gate

### Question 1: Audience
> Who is the primary audience, and what is their emotional state when they arrive?

**Why it matters**: A B2B decision-maker comparing vendors arrives in *evaluate mode* (needs tables, specs, trust signals). A luxury buyer arrives in *aspire mode* (needs atmosphere, restraint, desire). The same "landing page" requires completely different design DNA.

**Classify into**:
| Mode | Characteristics | Design implications |
|---|---|---|
| **Inspire** | Browse, dream, aspirate | Atmospheric, generous whitespace, cinematic motion, minimal text |
| **Evaluate** | Compare, decide, justify | Data-forward, specs tables, social proof, clear pricing |
| **Act** | Purchase, sign up, convert | Friction-free, prominent CTA, trust signals, minimal distraction |
| **Learn** | Study, explore, understand | Content-rich, good typography, navigation, readable hierarchy |

### Question 2: Use Case / Surface Type
> What kind of surface is this?

| Surface | Layout suggestions | Foundation fit |
|---|---|---|
| Marketing landing page | `film`, `story`, `minimal` (from `memory/13-layout-archetypes.md`) | native, tailwind |
| Product / e-commerce | `product`, `store` | tailwind, daisyui |
| Dashboard / app screen | Use `dashboard` command | native, shadcn |
| Documentation / content | Use `page` command with editorial school | native, pico |
| Real estate / spatial | `space` | tailwind |
| Personal brand / portfolio | `creator` | native, pico |

### Question 3: Tone / Design School
> What emotional register should the design communicate?

Route to `memory/01-design-schools.md` and lock one of:
- **Minimalist**: Restraint, whitespace, typography-driven
- **Brutalist**: Raw, exposed, high-contrast, intentionally rough
- **Neo-skeuomorphic**: Tactile, soft shadows, warm surfaces
- **Glassmorphic**: Frosted glass, translucency, depth layers
- **Editorial**: Magazine layout, strong hierarchy, serif typography
- **Playful**: Rounded, vibrant, animated, friendly

## Fit Test (3-Question Filter)

After the context gate, run the fit test to confirm the right tool:

1. **One clear subject?** (one product / one brand / one space / one person) → ✅ proceed. Multiple products / catalog → route to `store` layout.
2. **Transformation arc?** (before→after, raw→finished, outside→inside) → ✅ `film` layout. Static spec → `story` or `editorial` layout.
3. **User in inspire mode?** → ✅ cinematic/atmospheric. Evaluate/compare mode → data-forward layout.

## Output: Design Brief

```markdown
## Design Brief

### Context
- **Audience**: [description] — [inspire/evaluate/act/learn] mode
- **Surface**: [marketing / product / dashboard / docs / portfolio]
- **Tone**: [design school] — [2-3 adjective mood words]

### Decisions Locked
- **Foundation**: [native / tailwind / daisyui / hybrid / shadcn / pico / bootstrap / alpine]
- **Layout Archetype**: [film / story / space / app / creator / product / store / auto]
- **Typography Route**: [from memory/12-typography-matrix.md mood table]
- **Color Direction**: [dark luxury / light gallery / warm / cool / vibrant]

### What to Build
- [Specific sections and features based on the brief]
```

## Checklist

- [ ] All 3 context questions answered before building
- [ ] Audience mode classified (inspire / evaluate / act / learn)
- [ ] Surface type matched to layout archetype
- [ ] Design school locked and documented
- [ ] Foundation chosen and will not change mid-project

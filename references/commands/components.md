# Command: `components` — The Shared Component Library & 8-State Demo Wrapper

Runtime entry point for authoring shared component classes in `components.css` and generating an 8-state demo preview.

## Purpose
The mechanism that makes the consistency guarantee real: one place where every reusable visual pattern lives. When building a standalone component, this command authors `components.css` AND generates a temporary 8-state preview wrapper (`<Component>.preview.html`) rendering all interactive states.

## 8-State Component Matrix & Demo Wrapper (`<Component>.preview.html`)

When a component is created or updated, generate `<Component>.preview.html` rendering all **8 interactive states** vertically stacked:

```
┌──── Component — 8 states ────────────────────────┐
│ default       [ Component default state   ]    │
│ hover         [ Component hover state     ]    │  ← .is-hover
│ focus         [ Component focus state     ]    │  ← .is-focus
│ active        [ Component active state    ]    │  ← .is-active
│ disabled      [ Component disabled state  ]    │  ← disabled / aria-disabled
│ loading       [ Component loading state   ]    │  ← data-state="loading"
│ error         [ Component error state     ]    │  ← data-state="error"
│ success       [ Component success state   ]    │  ... data-state="success"
└────────────────────────────────────────────────┘
```

## What it does

1. Confirm `cssFoundation` from `brand.json` and read matching foundation file.
2. Author reusable class in `design-system/components.css` referencing tokens in `tokens.css`.
3. Support all 8 states in CSS using both pseudo-classes and preview helper classes (`.is-hover`, `.is-focus`, `.is-active`).
4. Generate `<Component>.preview.html` for single-file visual validation.
5. Never duplicate an existing component under a new name—extend with a modifier class (`.card--compact`, `.btn--accent`).

## Output Convention

```
design-system/
├── components.css              ← Reusable component styling with 8-state support
└── Button.preview.html         ← 8-state vertical demo preview wrapper
```

## Checklist

- [ ] All 8 interactive states supported in `components.css`
- [ ] `<Component>.preview.html` generated showing all 8 states vertically
- [ ] Every color/font value traces to a token in `tokens.css`
- [ ] No hardcoded hex or literal values in component CSS

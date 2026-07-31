# Command: `init` — Foundation + First Page, One Pass

Runtime entry point for starting a brand-new interactive prototype from scratch.

## Dispatch steps

1. Load `references/memory/architecture.md` — locked file tree layout and consistency rules.
2. Load `references/memory/foundations.md` — CSS foundation selection rules.
3. Load `references/workflows/init-prototype.md` — execution sequence and validation checklist.
4. Execute workflow steps per `init-prototype.md`.

## Output convention

```
project/
  design-system/
    tokens.css
    base.css
    components.css
    brand.json
    motion.js
    interactions.js
  pages/
    home.html
```

## Checklist

- [ ] Mode and CSS foundation both confirmed and recorded
- [ ] `references/workflows/init-prototype.md` validation checklist fully satisfied

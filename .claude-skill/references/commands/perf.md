# Command: `perf` — Asset Performance Budgets & Optimization Check

Runtime entry point for checking asset performance budgets, script preconnects, and load optimization. Part of the **Quality & Audit** lifecycle phase.

## When to use

- Before running `deploy` or finalizing any prototype
- During `audit` to verify asset weight compliance
- When performance or slow page load is flagged

## Asset Performance Budgets (Mechanical Checklist)

Report as a **table with actual numbers vs budget limit**, not generic pass/fail prose:

| Asset Class | Budget Limit | Rationale |
|---|---|---|
| **Total Frame Sequence** (`assets/seq/*.jpg`) | ≤ 6.0 MB total (~90–120 frames) | Frame sequence payload on scroll-driven canvas |
| **Single JPG Frame** | ≤ 60 KB at 1280px wide (q≈80) | Prevents un-scaled frame extraction issues |
| **Hero Cutout PNG** | ≤ 400 KB (max width 1200px) | Transparent PNGs compress poorly; resize before optimization |
| **Brand Logo PNG / SVG** | ≤ 40 KB (max width 240px) | Header/footer brand emblem |
| **Google Fonts Payload** | ≤ 3 families, ≤ 4 weights total | Excess font families delay First Text Paint |
| **Total CSS Payload** | ≤ 150 KB (gzipped/uncompressed) | Zero per-page CSS constraint enforces shared tokens |

## Execution Protocol

1. **Sum directory sizes**:
   - Check `assets/` and `design-system/` file sizes.
2. **Check Font `<link>` references**:
   - Verify `<link rel="preconnect" href="https://fonts.googleapis.com">` exists.
   - Verify `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` exists.
   - Ensure loaded font families match only those referenced in `brand.json`.
3. **Verify LCP Optimization**:
   - Confirm hero image does **NOT** have `loading="lazy"` (violates AI Anti-Pattern Rule #16).
   - Below-the-fold images MUST use `loading="lazy"`.
4. **Clean Script Tags**:
   - Check for dead/duplicate script tags.

## Report Output Format

```
Asset Class          Actual Weight    Budget Limit    Status
------------------------------------------------------------
Hero Cutout PNG      340 KB           400 KB          ✅ PASS
Brand Logo SVG       12 KB            40 KB           ✅ PASS
Google Fonts         2 families       3 families      ✅ PASS
Total CSS            48 KB            150 KB          ✅ PASS
LCP Image Eager      Yes              Yes             ✅ PASS
Font Preconnects     Present          Present         ✅ PASS
```

## Checklist

- [ ] All numeric budgets checked and reported in data table
- [ ] Preconnect tags present for font and CDN domains
- [ ] No `loading="lazy"` on LCP hero image
- [ ] Lazy loading enabled for below-the-fold assets
- [ ] Font families strictly capped at ≤ 3 families / 4 weights

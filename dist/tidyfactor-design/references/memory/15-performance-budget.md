# 15 · Performance Budget Specification

Mechanical performance budgets for asset weight and DOM performance across all prototypes in `tidyfactor-design`.

## Asset Class Budget Table

| Asset Class | Budget Limit | Validation Command / Check |
|---|---|---|
| Frame Sequence (`assets/seq/*.jpg`) | ≤ 6.0 MB total | Sum of directory file sizes |
| Individual Frame JPG | ≤ 60 KB at 1280px | Individual file size check |
| Hero Cutout Image | ≤ 400 KB | Image optimizer `scripts/optimize_assets.py` |
| Logo / Emblem Asset | ≤ 40 KB | Image optimizer check |
| Font Families | ≤ 3 families, ≤ 4 weights | Count in Google Fonts `<link>` tag |
| Design System CSS | ≤ 150 KB total | Combined size of `design-system/*.css` |

## LCP Image Optimization Rule
Hero LCP (Largest Contentful Paint) images MUST NOT use `loading="lazy"`. Doing so degrades load performance and violates Quality Bar Rule #16.
Below-the-fold images MUST use `loading="lazy"`.

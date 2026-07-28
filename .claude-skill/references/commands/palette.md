# Command: `palette` — Brand Color Extraction & WCAG Contrast Check

## Purpose
Extract dominant brand colors, background tones, accent highlights, and WCAG 2.1 AA contrast compliance scores from reference images, logos, or hero screenshots using the built-in Python tool `scripts/extract_palette.py`. Automatically updates `brand.json` and appends CSS custom properties to `design-system/tokens.css`.

## When to run it
- User phrased: "extract color palette", "extract colors from logo", "check contrast ratio", "palette", `/palette`.
- During `init` or `clone` when converting a reference logo or screenshot into a design token system.

## What it does
1. **Color Quantization & Extraction**:
   - Runs `python scripts/extract_palette.py <image_path> --json brand.json --css design-system/tokens.css`.
   - Quantizes the image palette to identify dominant Primary, Secondary, and Accent brand colors.
2. **WCAG 2.1 AA Contrast Analysis**:
   - Computes relative luminance and contrast ratios between text/primary colors against dark (`#0F172A`) and light (`#F8FAFC`) background surfaces.
   - Ensures text meets minimum 4.5:1 ratio (WCAG AA compliant).
3. **Token Synchronization**:
   - Updates `brand.json` colors object.
   - Appends CSS variables (`--color-primary`, `--color-secondary`, `--color-accent`) to `design-system/tokens.css`.

## Usage Examples
```bash
# Extract palette from logo and update brand.json
python scripts/extract_palette.py assets/logo.png --json brand.json

# Append extracted tokens to tokens.css
python scripts/extract_palette.py reference.png --css design-system/tokens.css
```

## Checklist
- [ ] Image path is valid and readable by Pillow
- [ ] Primary, secondary, and accent colors extracted cleanly
- [ ] WCAG contrast ratio verified (≥ 4.5:1 for body text)
- [ ] `brand.json` updated with new color tokens
- [ ] `design-system/tokens.css` updated with matching CSS variables

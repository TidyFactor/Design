# Test Scenarios for tidyfactor-design

<!-- last-verified: 2026-09-05 -->

## Test 1: Initialize New Design System & Prototype (Happy Path)
- **Type**: happy-path
- **Prompt**: "Build me a luxury editorial landing page prototype with zero build step following TidyFactor Design standards"
- **Expected Command**: `references/commands/init.md`
- **Expected Behavior**: Evaluates Contextual Decision Layer (`/brief`), locks CSS foundation to `native`, generates `brand.yaml` (and `brand.json` mirror), creates `design-system/tokens.css` and `design-system/components.css`, and scaffolds an initial semantic `index.html` with zero per-page CSS/JS.
- **Pass Criteria**:
  - `brand.yaml` exists with valid token schema.
  - `design-system/tokens.css` and `components.css` created without inline `<style>` overrides in `index.html`.
  - Stamped with valid 7-axis critique: `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`.

## Test 2: Color Palette Extraction & WCAG AAA Contrast (Edge Case)
- **Type**: edge-case
- **Prompt**: "Extract brand colors from assets/brand-mark.png and generate accessible color tokens for dark mode"
- **Expected Command**: `references/commands/palette.md`
- **Expected Behavior**: Executes `scripts/extract_palette.py` with `--source assets/brand-mark.png --yaml`, calculates WCAG 2.1 AAA contrast ratios against dark backgrounds, and writes dual-mode tokens into `brand.yaml` and `tokens.css`.
- **Pass Criteria**:
  - `brand.yaml` updated with dual-mode `colors.light` and `colors.dark`.
  - Contrast ratios for text tokens meet or exceed 7:1 (AAA compliance).
  - No trailing comma syntax errors or JSON formatting failures.

## Test 3: Backend API & Database Scaffold Request (Negative Test)
- **Type**: negative
- **Prompt**: "Write me a PHP Flight API route to query my PostgreSQL database and return JSON products"
- **Expected Command**: none (Anti-trigger)
- **Expected Behavior**: Declines activation as a design system engine; identifies that backend SQL queries and server-side routing belong to `tidyfactor-php` or `tidyfactor-next`.
- **Pass Criteria**:
  - `tidyfactor-design` does not attempt to emit backend PHP/PostgreSQL server code.
  - Politely routes the user to the appropriate domain engine (`tidyfactor-php` / `tidyfactor-next`).

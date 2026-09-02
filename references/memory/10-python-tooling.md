<!-- last-verified: 2026-09-02 -->
# 10 · Python Tooling & Asset Refinement Guide

The **TidyFactor Design** skill includes a lightweight Python tooling suite in `scripts/` to provide AI Agents with local media manipulation, palette extraction, background removal, and image optimization capabilities.

---

## 🛠️ Tooling Suite Inventory & Latency Classes

| Script | Responsibility | Latency Class | Isolation Scope | Invoked By |
|---|---|---|---|---|
| **`scripts/audit_design.py`** | Anti-pattern & token compliance auditor | Sub-second (<100ms) | In-process stdlib | `audit`, `perf` |
| **`scripts/extract_palette.py`** | WCAG 2.1 AAA contrast & palette derivation | Sub-second (<150ms) | `Pillow` (stdlib fallback) | `tokens`, `palette`, `init` |
| **`scripts/optimize_assets.py`** | Neural bg removal & WebP image optimization | Async Batch (2–8s) | `isolation_recommended: true` (`rembg`, `onnxruntime`) | `assets`, `deploy` |
| **`scripts/minify_assets.py`** | CSS/JS minification | Sub-second (<100ms) | Standard Python | `deploy` |


---

## 1 · Color Palette Extraction (`scripts/extract_palette.py`)

Extracts primary, secondary, and accent colors from reference images, photos, or logos. Computes WCAG 2.1 AA contrast scores.

```bash
# Extract palette and sync brand.json + tokens.css
python scripts/extract_palette.py assets/logo.png --json brand.json --css design-system/tokens.css
```

---

## 2 · AI Background Removal (`scripts/remove_backgrounds.py`)

Isolates product shots, logos, or hero items into transparent PNG cutouts using `rembg`:

```bash
# Single file background removal
python scripts/remove_backgrounds.py assets/product.jpg -o assets/product-cut.png

# Batch processing
python scripts/remove_backgrounds.py assets/logo1.jpg:assets/logo1.png assets/card.jpg:assets/card.png
```

---

## 3 · Asset Resizing & Optimization (`scripts/optimize_assets.py`)

Constrains image dimensions to design system tokens to prevent layout shifts and heavy page loads:

```bash
# Resize hero images to max 1200px dimension
python scripts/optimize_assets.py assets/hero.jpg --max-dim 1200

# Resize logo assets to max 240px dimension
python scripts/optimize_assets.py assets/logo.png --max-dim 240
```

---

## 📋 Dependency Management

Dependencies are documented in `requirements.txt`:
```bash
pip install -r requirements.txt
```
If `rembg` or `Pillow` is missing, scripts output clear installation guidance without crashing.

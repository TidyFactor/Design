# 10 · Python Tooling & Asset Refinement Guide

The **TidyFactor Design** skill includes a lightweight Python tooling suite in `scripts/` to provide AI Agents with local media manipulation, palette extraction, background removal, and image optimization capabilities.

---

## 🛠️ Tooling Suite Inventory

| Script | Primary Responsibility | Dependencies | Command Trigger |
|---|---|---|---|
| **`scripts/extract_palette.py`** | Image color quantization, WCAG 2.1 AA contrast check, `brand.json` & `tokens.css` sync | `Pillow` | `palette`, `tokens`, `init`, `clone` |
| **`scripts/remove_backgrounds.py`** | AI background removal (`rembg`) for transparent PNG logos, product shots, & cutouts | `rembg`, `Pillow` | `init`, `components`, `page`, `retrofit` |
| **`scripts/optimize_assets.py`** | Resizes heavy assets to design token bounds (heroes max 1200px, cards 400px, logos 240px) | `Pillow` | `deploy`, `audit` |
| **`scripts/minify_assets.py`** | Bundles & minifies CSS/JS for presentation deployment | Standard Python | `deploy` |
| **`scripts/inspect_images.py`** | Inspects image dimensions, color channels, and alpha channel status | Standard Python | `audit` |

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

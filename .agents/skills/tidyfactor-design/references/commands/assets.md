# Command: `assets` — Asset Processing & Media Optimization Engine

## Purpose
Automates background removal from product cutouts, batch WebP image optimization, and media size/dimension validation using Python power tools (`scripts/`).

## When to run it
- Preparing product photos, vehicle cutouts, or hero banners for interactive prototype pages.
- User asks to "remove background from image", "optimize images", "convert to webp", or "check asset dimensions".

## What it does
1. Runs `python scripts/remove_backgrounds.py <input_path>` using `rembg` and `Pillow` to produce transparent PNG product cutouts.
2. Runs `python scripts/optimize_images.py <assets_dir>` to batch compress images, generate WebP variants, and shrink prototype payload.
3. Runs `python scripts/inspect_images.py <assets_dir>` to verify image dimensions and validate file sizes.

## Output convention
```
my-prototype/
├── assets/
  ├── product-transparent.png    ← BG-removed cutout
  ├── hero-banner.webp            ← Compressed WebP
  └── gallery-01.webp            ← Batch-optimized image
```

## Checklist
- [ ] Product cutouts have clean transparent backgrounds.
- [ ] Images are converted to WebP for fast prototype loading.
- [ ] No raw image exceeds 500KB in `assets/`.

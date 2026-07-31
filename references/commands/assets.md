# Command: `assets` — Asset Processing & Media Optimization Engine

Runtime entry point for generating AI media, removing image backgrounds, and optimizing image payloads.

## 5-Layer AI Photography Prompt Construction Matrix

When generating visual assets with `generate_image` or external AI image engines, construct prompts across 5 technical photography layers:

1. **Subject Layer**: Primary subject, micro-textures, pose, surface materials (e.g. brushed aluminum, matte leather).
2. **Environment Layer**: Setting, time of day, atmospheric conditions (fog, volumetric haze, studio backdrop).
3. **Lighting Layer**: Source (softbox, natural light), direction (Rembrandt, split, backlit), color temperature.
4. **Technical Photography Layer**: Perspective, focal length (85mm f/1.4), depth of field / bokeh (`f/1.8` shallow focus).
5. **Post-Processing & Film Stock Layer**: Color grading, subtle film grain, Kodak Portra 400 aesthetic.

## Python Asset Tooling

1. **Background Removal**: `python scripts/remove_backgrounds.py <input_path>` (rembg + Pillow transparent PNG cutouts).
2. **Batch Optimization**: `python scripts/optimize_images.py <assets_dir>` (compress WebP variants).
3. **Asset Inspection**: `python scripts/inspect_images.py <assets_dir>` (dimension & size budget check).

## Output Convention

```
my-prototype/
└── assets/
    ├── hero-cutout.png      ← BG-removed cutout
    ├── banner.webp          ← WebP compressed asset
    └── photo-01.webp        ← 5-Layer AI prompt generated asset
```

## Checklist

- [ ] AI image prompts structured across all 5 technical photography layers
- [ ] Product cutouts have clean transparent backgrounds (`rembg`)
- [ ] Prototype assets optimized to WebP format (< 500KB payload per image)

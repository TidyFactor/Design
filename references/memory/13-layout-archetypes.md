# 13 · Layout Archetypes — Surface Blueprints

<!-- last-verified: 2026-09-05 -->

This document specifies the 8 macrostructure layout archetypes available in `tidyfactor-design`.

## Archetype Overview

| Layout | Codename | Hero Type | Section Rhythm | Best For |
|---|---|---|---|---|
| **Film** | `fullbleed` | Cutout + aura + motes | Hero → Film (600vh canvas) → Product reveal → Lifestyle → CTA | Physical luxury goods, brand stories |
| **Story** | `editorial` | Split-screen image & copy | Hero → Film (420vh) → Feature grid → Origin story → CTA | Specs-heavy products, events, founders |
| **Space** | `spatial` | Wide architectural shot | Hero → Spatial film (500vh) → Space details → Location → CTA | Real estate, architecture, hospitality |
| **App** | `interface` | Device mockup frame | Hero → UI flow film (420vh) → Feature highlights → Proof → CTA | SaaS, web/mobile applications |
| **Creator** | `minimal` | Centered cutout / photo | Hero → Statement → Story & Portrait → Portfolio → CTA | Personal brands, digital products |
| **Product** | `product` | Product + Price + Buy CTA | Hero product → Spec highlights → Reviews → Purchase CTA | High-conversion single-product store |
| **Store** | `store` | Banner + Category nav | Store banner → Category filter → Catalog grid → Footer | Multi-product catalog store |
| **Auto** | `auto` | Hero vehicle + HUD gauge | Hero → 3D stage slider → Tech specs → Performance gallery → CTA | Automotive, performance engineering |

## Hero Layering Architecture

Every cinematic or luxury layout uses nested container layers so each layer owns a single transform channel without conflicts:

```
.stage (perspective)
  .aura            → Radial background glow (CSS pulse + parallax)
  .motes           → Floating particles drift
  .hero-inner
    .media-float   → CSS float animation (translateY bob)
      .media-tilt  → JS pointer-driven 3D rotateX/rotateY
        img.cutout → GSAP entrance transform (scale/opacity)
```

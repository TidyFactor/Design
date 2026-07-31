# Command: `layout` — Surface Layout Archetypes

Runtime entry point for selecting and applying specialized surface layout blueprints. Part of the **Architecture** lifecycle phase.

## When to use

- During `init` to select the page's macrostructure
- When adding a new page type that doesn't fit standard `page` or `dashboard`
- When the user describes a surface type (e.g., "real estate showcase", "app launch page", "product showcase")

## Dispatch Steps

1. Load `memory/13-layout-archetypes.md` — full archetype specifications.
2. Run the fit test (from `brief`) to narrow the archetype choice.
3. Load `references/memory/architecture.md` — locked file tree rules.
4. Scaffold the page with the selected archetype's section rhythm.

## Layout Archetype Catalog

| Archetype | Codename | Best For | Hero Type | Section Rhythm |
|---|---|---|---|---|
| **Film** | `fullbleed` | Physical goods, brand stories, rebrands, fashion, artisan | Product cutout + aura + motes | Hero → Film (600vh canvas) → Product reveal → Lifestyle → CTA |
| **Story** | `editorial` | Specs-heavy products, founders, events, conferences | Split-screen: image + copy | Hero → Film (420vh) → Feature grid → Origin story → CTA |
| **Space** | `spatial` | Real estate, architecture, travel, hospitality, venues | Wide establishing shot, no cutout | Hero → Film walkthrough (500vh) → Space details → Location → CTA |
| **App** | `interface` | SaaS, apps, digital platforms | Device mockup (phone/laptop frame) | Hero → Film (420vh UI flow) → Feature highlights → Social proof → CTA |
| **Creator** | `minimal` | Personal brands, creators, digital products, books | Centered cutout, clean background | Hero → Statement → About → Portfolio grid → CTA |
| **Product** | `product` | Single product high-conversion e-commerce | Hero product + price + WhatsApp CTA | Hero → Optional film (480vh) → Specs → Social proof → Buy CTA |
| **Store** | `store` | Multi-product catalog store | Store banner + WhatsApp CTA | Banner → Category filter → Product grid → Footer CTA |
| **Auto** | `auto` | Automotive & performance magazine showpiece | Hero car + tachometer gauge preloader | Hero → 3D slider stage → HUD spec tooltips → Gallery → CTA |

## Fit Test (Quick Decision Tree)

```
1. One product or many?
   → Many → "store" archetype
   → One → continue

2. Physical product or digital?
   → Digital (SaaS/app) → "app" archetype
   → Physical → continue

3. Is it a space/place?
   → Yes → "space" archetype
   → No → continue

4. Person or brand?
   → Person → "creator" archetype
   → Brand → continue

5. High-ticket or conversion-focused?
   → Yes → "product" archetype
   → No → continue

6. Strong transformation story?
   → Yes → "film" archetype
   → No → "story" archetype
```

## Archetype Application

When an archetype is selected:

1. **Scaffold sections** — create the HTML skeleton with semantic section markers matching the archetype's rhythm
2. **Set ambient palette direction** — configure the `#ambient` background-color tween targets per section
3. **Configure hero type** — select the hero component variant matching the archetype (cutout vs. full-bleed vs. split-screen vs. device mockup)
4. **Lock nav + footer** — route to `memory/14-nav-footer-catalog.md` for genre-appropriate nav (N1–N9) and footer (Ft1–Ft8) selection

## Customization

Archetypes are **starting points, not straitjackets**. The user can:
- **Add/remove sections** from the archetype rhythm
- **Swap hero type** (e.g., use a split-screen hero on a `film` archetype)
- **Mix elements** from multiple archetypes (document the deviation in the design brief)

## Checklist

- [ ] Archetype selected via fit test, not defaulted
- [ ] Section rhythm follows archetype spec
- [ ] Hero type matches archetype (or deviation is documented)
- [ ] Nav and footer selected from catalogs (not AI-default)
- [ ] Ambient palette direction set per section

# Design Schools & Movements — Quick Calibration Index

For complete operational rules, visual tokens, typography pairings, color systems, CSS rules, shadow styles, and anti-patterns across all 20 visual aesthetics, see:
👉 **[`memory/16-design-movements-guide.md`](16-design-movements-guide.md)** (All 20 Visual Movements & Design Tokens)  
👉 **[`memory/17-storytelling-industries-ux.md`](17-storytelling-industries-ux.md)** (4 Storytelling Archetypes, 8 Industry Registers, 8 UX Philosophies)  
👉 **[`memory/18-design-decision-engine.md`](18-design-decision-engine.md)** (9-Step Decision Tree & Anti-Design-Soup Constraint)

---

## 🎨 20 Visual Aesthetics At-A-Glance Index
1. **Swiss Style**: Objective 12-column grid, sans-serif, high contrast.
2. **Flat Design**: 2D vector, zero shadows, vibrant color blocks.
3. **Material Design**: Paper/ink depth, elevation shadows, touch ripples.
4. **Minimalism**: Extreme negative space, typography focal point.
5. **Brutalism & Neo-Brutalism**: Hard 4px black offset shadows, 2px borders, pop colors.
6. **Bauhaus**: Primary color geometry (red/blue/yellow), form follows function.
7. **Skeuomorphism**: Tactile real-world textures, inner bevels, realistic depth.
8. **Glassmorphism**: Translucent frosted panels (`backdrop-filter: blur`), spatial layers.
9. **Maximalism**: Collage layering, kinetic typography, energetic multi-color.
10. **Industrial Style**: Monospaced data density, blueprint grids, telemetry dots.
11. **Bento Box UI**: Compartmentalized modular masonry grids, `rounded-2xl` tiles.
12. **Aurora UI**: Luminescent mesh gradients (`blur(60px)`), dark aura spotlights.
13. **Neumorphism**: Extruded surface shadows (`inset` + drop), monochromatic grounds.
14. **Corporate Memphis**: Friendly geometric characters, pastel panels, soft pills.
15. **Cyberpunk & Vaporwave**: Pitch black grounds, neon cyan/magenta, monospaced HUD.
16. **Claymorphism**: Soft 3D clay volumes, warm inner light reflections, rounded shapes.
17. **Isometric Design**: 30° 2D parallel projection vector worlds.
18. **Kinetic Typography**: Text as the animated hero visual (`clamp()` font scales).
19. **Organic / Amorphous UI**: Fluid blob shapes (`border-radius: 60% 40% ...`), natural tones.
20. **Frutiger Aero & Y2K**: Glossy glass buttons, lens flares, vibrant sky blue/lime gradients.

## Bauhaus
Geometric shapes as structural/decorative elements, primary-plus-black
palettes, function-follows-form typography. Fits: education, design tools,
brands wanting to signal craft/foundational thinking. Avoid: costume-party
Bauhaus (circles+triangles as decoration with no structural logic).

## Brutalism (web)
Raw, unstyled-looking HTML elements used deliberately, harsh contrast,
visible grid lines, monospace accents, intentionally "undesigned". Fits:
developer tools, portfolios, brands wanting to signal authenticity/anti-
polish. Avoid: actual unstyled defaults mistaken for the aesthetic —
brutalism is a considered choice, not the absence of one.

## Editorial / Broadsheet
Hairline rules, dense multi-column text, serif display, byline/dateline
conventions borrowed from print journalism. Fits: publications, long-form
content, thought-leadership brands. Avoid: applying hairline-column density
to a page that has nothing to say at that density (see `frontend-design`'s
warning on this as an overused AI-design default).

## Minimalism
Extreme restraint, one accent color maximum, huge whitespace, type doing
almost all the work. Fits: luxury, premium single-product brands. Avoid:
minimalism as an excuse for lack of a real design decision — every
remaining element must be precisely placed.

## Glassmorphism
Frosted-glass translucent panels, soft shadows, layered depth over a
blurred background. Fits: modern consumer apps, dashboards wanting a soft/
approachable data-density feel. Avoid: layering glass panels on glass
panels — contrast and legibility break down fast.

## Material-influenced
Elevation via shadow, clear touch targets, motion as spatial logic (things
move the way physical objects would). Fits: cross-platform app UI,
utilitarian dashboards. Avoid: importing Material's specific component
shapes wholesale when the brand wants its own identity — take the
principles, not the skin.

## Modern SaaS (Vercel/Linear-influenced)
Near-black or pure-white grounds, one saturated accent, monospace for data/
code, tight type scale, subtle gradient accents, generous but efficient
spacing. Fits: developer tools, B2B SaaS, technical dashboards. Avoid:
defaulting here just because the brief is "a SaaS product" — this look is
common enough now to read as generic if the brand has no other point of
view.

## Calibration: defaults to avoid unless the brief asks for them
Per `frontend-design`'s own calibration: warm-cream + terracotta-serif,
near-black + single acid-green/vermilion accent, and broadsheet-hairline-
columns applied regardless of subject are the three most common AI-design
tells right now. Choosing one deliberately because it fits the brief is
fine; landing on one by default is the failure mode `school` exists to
prevent.

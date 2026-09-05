# 16 · Design Movements & Aesthetics Knowledge Base

<!-- last-verified: 2026-09-05 -->

A comprehensive guide for AI coding agents (`tidyfactor-design`) declaring exact design tokens, visual decisions, CSS rules, typography pairings, color palettes, shadow styles, component behaviors, motion language, and executable signature elements for **all 20 Visual Aesthetics & Design Movements**.

---

## 🎨 20 Visual Aesthetics & Design Movements

### 1. Swiss Style (International Typographic Style)
* **Visual Philosophy**: Extreme objectivity, clarity, and mathematical grid alignment. Typography does 90% of the visual work.

```yaml
confidence:
  production: ★★★★★
  marketing: ★★★☆☆
  dashboard: ★★★★★
  landing: ★★★★☆
  mobile: ★★★★☆
  accessibility: ★★★★★

compatibility:
  compatible: [Minimalism, Editorial, Corporate, Industrial, Bauhaus]
  avoid: [Claymorphism, Corporate Memphis, Neumorphism, Y2K, Vaporwave]

brandPersonality: [Precise, Confident, Calm, Rational, Technical, Trustworthy]

visualDNA:
  grid: ★★★★★
  typography: ★★★★★
  geometry: ★★★★★
  illustration: ★☆☆☆☆
  motion: ★☆☆☆☆
  texture: ★☆☆☆☆
  photography: ★★☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: filled | square (0px/2px) | 1px border | no shadow
  cards: flat surface | hairline 1px border | sharp corners
  forms: dense data fields | clean inline labels
  navigation: top edge-aligned | thin hairline bottom rule
  search: prominent search bar with monospaced keyboard shortcut badge

motionLanguage:
  duration: 150ms
  curve: ease-out
  energy: low
  scroll: none
  hover: subtle background tint shift

executableSignature: |
  /* Swiss Signature: Hairline grid borders + massive scale contrast */
  .swiss-grid { display: grid; grid-template-columns: repeat(12, 1fr); border-top: 1px solid var(--border); }
  .swiss-cell { border-right: 1px solid var(--border); padding: 1.5rem; }
  .swiss-title { font-size: clamp(3rem, 7vw, 6rem); letter-spacing: -0.03em; font-weight: 700; }
```

* **Color Palette**: Monochromatic neutrals (stark white `#FFFFFF`, cool ink `#0F172A`, slate `#475569`) with 1 vibrant primary accent (Swiss Red `#E11D48` or International Blue `#2563EB`).
* **Typography**: Clean, unadorned sans-serifs (`Outfit`, `Inter`, `Helvetica`). Tight letter-spacing (`-0.02em`), massive size contrast.
* **Anti-Pattern Warning**: Applying the grid so rigidly that the page looks like an unformatted financial spreadsheet.

---

### 2. Flat Design
* **Visual Philosophy**: Digital-first 2D minimalism. Completely eliminates physical textures, bevels, and realistic shadows in favor of crisp vector shapes and vibrant color blocks.

```yaml
confidence:
  production: ★★★★★
  marketing: ★★★★☆
  dashboard: ★★★★☆
  landing: ★★★★☆
  mobile: ★★★★★
  accessibility: ★★★★☆

compatibility:
  compatible: [Corporate Memphis, Minimalist, Material, Swiss]
  avoid: [Skeuomorphism, Glassmorphism, Neumorphism, Cyberpunk]

brandPersonality: [Direct, Friendly, Clear, Efficient, Accessible]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★☆
  geometry: ★★★★☆
  illustration: ★★★★☆
  motion: ★★☆☆☆
  texture: ★☆☆☆☆
  photography: ★★☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: solid 2D fill | rounded-md (8px) | no shadow
  cards: flat solid surface tint | border-none | shadow-none
  forms: clean input fields | solid background focus ring
  navigation: top bar | solid brand background
  search: pill search input with flat icon button

motionLanguage:
  duration: 200ms
  curve: ease-in-out
  energy: medium
  scroll: smooth
  hover: slight background darkening

executableSignature: |
  /* Flat Signature: Solid 2D fill with zero drop shadow */
  .flat-card { background: var(--color-surface-subtle); border-radius: 12px; padding: 1.5rem; box-shadow: none; }
  .flat-btn { background: var(--color-primary); color: #fff; border-radius: 8px; border: none; font-weight: 600; }
```

* **Color Palette**: Saturated 2D colors (Teal `#0D9488`, Cyan `#06B6D4`, Emerald `#10B981`, Amber `#F59E0B`, Indigo `#4F46E5`).
* **Typography**: Friendly geometric sans-serifs (`Outfit`, `Inter`, `Tajawal`).
* **Anti-Pattern Warning**: Making clickable buttons look so flat that users cannot distinguish interactive elements from static labels.

---

### 3. Material Design (Paper & Ink Physics)
* **Visual Philosophy**: Simulates physical paper sheets floating in a 3D light field. Surfaces stack with elevation shadows and move with natural momentum.

```yaml
confidence:
  production: ★★★★★
  marketing: ★★★☆☆
  dashboard: ★★★★★
  landing: ★★★☆☆
  mobile: ★★★★★
  accessibility: ★★★★★

compatibility:
  compatible: [Flat, Minimalist, Corporate, Bento Box]
  avoid: [Brutalism, Cyberpunk, Neo-Brutalism, Vaporwave]

brandPersonality: [Systematic, Intuitive, Structured, Responsive, Familiar]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★☆
  geometry: ★★★★☆
  illustration: ★★★☆☆
  motion: ★★★★☆
  texture: ★☆☆☆☆
  photography: ★★★☆☆
  depth: ★★★★☆

componentBehaviour:
  buttons: elevated surface or text-link | rounded-md (12px) | ripple effect
  cards: elevated paper card | shadow-sm to shadow-md on hover | rounded-xl
  forms: outlined or filled floating-label inputs
  navigation: bottom navigation rail (mobile) or persistent drawer
  search: floating search bar card with rounded corners

motionLanguage:
  duration: 250ms
  curve: cubic-bezier(0.4, 0.0, 0.2, 1)
  energy: medium
  scroll: smooth elevation shifts
  hover: shadow elevation increase (dp2 -> dp8)

executableSignature: |
  /* Material Signature: Paper elevation shadow + touch ripple */
  .material-card { background: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); transition: box-shadow 250ms ease; }
  .material-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1); }
```

* **Color Palette**: Tonal color palettes (Primary `#0F62FE`, Surface `#F6F7F8`, Surface Elevation `#FFFFFF`, Dark `#14171C`).
* **Typography**: Clean readable sans-serifs (`Roboto`, `Inter`, `Tajawal`).
* **Anti-Pattern Warning**: Copying Google's specific component shapes wholesale without infusing brand identity.

---

### 4. Minimalism
* **Visual Philosophy**: Radical restraint. Strips away all non-essential decorative elements to focus purely on high-contrast typography, content, and spatial rhythm.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★★
  dashboard: ★★★☆☆
  landing: ★★★★★
  mobile: ★★★★☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Swiss, Editorial, Bento Box, Organic]
  avoid: [Maximalism, Neo-Brutalism, Cyberpunk, Mixed Media]

brandPersonality: [Refined, Elegant, Quiet, Sophisticated, Exclusive]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★★
  geometry: ★★★☆☆
  illustration: ★☆☆☆☆
  motion: ★★☆☆☆
  texture: ★☆☆☆☆
  photography: ★★★★☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: ghost or thin outline | rounded-md or pill | no shadow
  cards: borderless or 1px ultra-light hairline border
  forms: single-line underline inputs
  navigation: minimal wordmark left, single action right
  search: subtle search icon trigger expanding inline

motionLanguage:
  duration: 300ms
  curve: cubic-bezier(0.16, 1, 0.3, 1)
  energy: low
  scroll: subtle opacity fade-ins
  hover: delicate color opacity shift

executableSignature: |
  /* Minimalist Signature: Expansive whitespace + high-contrast display type */
  .minimal-hero { padding: 8rem 2rem; max-width: 800px; margin: 0 auto; text-align: center; }
  .minimal-headline { font-size: clamp(3rem, 6vw, 5rem); font-weight: 300; letter-spacing: -0.02em; line-height: 1.1; }
```

* **Color Palette**: Ultra-restrained neutrals (`#FFFFFF`, `#F8FAFC`, `#0F172A`, `#64748B`) with max 1 accent color.
* **Typography**: Refined display typography (`El Messiri`, `Outfit`, `Cormorant Garamond`).
* **Anti-Pattern Warning**: Using minimalism as an excuse for lack of design decisions — every remaining pixel must be intentionally placed.

---

### 5. Brutalism & Neo-Brutalism
* **Visual Philosophy**: High-energy, raw, and intentionally unpolished aesthetic. Neo-Brutalism combines stark black borders and hard offset shadows with vibrant pop-art colors.

```yaml
confidence:
  production: ★★★☆☆
  marketing: ★★★★★
  dashboard: ★★☆☆☆
  landing: ★★★★★
  mobile: ★★★☆☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Industrial, Pop Art, Kinetic Typography, Memphis]
  avoid: [Glassmorphism, Neumorphism, Skeuomorphism, Aurora]

brandPersonality: [Bold, Unapologetic, Rebellious, High-Energy, Raw, Creative]

visualDNA:
  grid: ★★★★★
  typography: ★★★★★
  geometry: ★★★★★
  illustration: ★★★☆☆
  motion: ★★★☆☆
  texture: ★★☆☆☆
  photography: ★★★☆☆
  depth: ★★☆☆☆

componentBehaviour:
  buttons: solid vibrant fill | 2px solid #000 | 4px 4px 0px #000 shadow | hover press down
  cards: solid background | 2px solid #000 | 4px 4px 0px #000 shadow | sharp/rounded-lg
  forms: thick 2px black border inputs | hard offset focus shadow
  navigation: thick bottom border | high contrast sticker pills
  search: prominent input with hard black shadow CTA button

motionLanguage:
  duration: 100ms
  curve: steps(2) or linear
  energy: high
  scroll: hard marquee scroll
  hover: translate(2px, 2px) shadow shrink

executableSignature: |
  /* Neo-Brutalist Signature: 2px solid black border + 4px hard offset shadow */
  .neo-btn { background: #FACC15; color: #000; border: 2px solid #000; box-shadow: 4px 4px 0px #000; font-weight: 800; padding: 0.75rem 1.5rem; transition: all 100ms ease; }
  .neo-btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0px #000; }
```

* **Color Palette**: Electric Yellow `#FACC15`, Neon Pink `#EC4899`, Mint `#34D399`, Cyan `#22D3EE`, Stark Black `#000000`, Pure White `#FFFFFF`.
* **Typography**: Heavy bold sans-serif headlines paired with monospaced code fonts (`JetBrains Mono`, `Oswald`).
* **Anti-Pattern Warning**: Confusing unstyled broken HTML with Neo-Brutalism — Neo-Brutalism requires precise contrast, clear usability, and intentional offset shadows.

---

### 6. Bauhaus (Digital Interpretation)
* **Visual Philosophy**: "Form follows function" meets primary geometry. Uses primary colors and basic geometric shapes (circle, square, triangle) as structural layout anchors.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★☆
  dashboard: ★★★☆☆
  landing: ★★★★☆
  mobile: ★★★★☆
  accessibility: ★★★★★

compatibility:
  compatible: [Swiss, Minimalist, Editorial, Modernism]
  avoid: [Glassmorphism, Claymorphism, Organic, Neumorphism]

brandPersonality: [Constructive, Geometric, Rational, Artistic, Foundational]

visualDNA:
  grid: ★★★★★
  typography: ★★★★★
  geometry: ★★★★★
  illustration: ★★☆☆☆
  motion: ★★☆☆☆
  texture: ★☆☆☆☆
  photography: ★★☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: primary color filled | square or circular end-caps | 2px solid border
  cards: color-blocked panels | geometric borders | sharp corners
  forms: clean rectangular fields with primary color focus indicators
  navigation: asymmetric top bar with circular emblem anchor
  search: geometric search bar with primary red/blue trigger icon

motionLanguage:
  duration: 200ms
  curve: ease-out
  energy: medium
  scroll: none
  hover: color block swap

executableSignature: |
  /* Bauhaus Signature: Primary color-blocked geometry */
  .bauhaus-badge { background: #DC2626; color: #fff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .bauhaus-card { border-left: 6px solid #2563EB; background: #F9FAFB; padding: 1.5rem; }
```

* **Color Palette**: Primary triad (Bauhaus Red `#DC2626`, Primary Blue `#2563EB`, Golden Yellow `#D97706`, Jet Black `#0F172A`, Off-White `#F9FAFB`).
* **Typography**: Geometric sans-serifs (`Outfit`, `Futura-style`).
* **Anti-Pattern Warning**: Placing floating circles and triangles on a page with no structural layout purpose.

---

### 7. Skeuomorphism & Digital Skeuomorphism
* **Visual Philosophy**: UI elements mirror physical real-world counterparts through textures, inner bevels, gradients, and realistic lighting.

```yaml
confidence:
  production: ★★☆☆☆
  marketing: ★★★☆☆
  dashboard: ★★★☆☆
  landing: ★★★☆☆
  mobile: ★★☆☆☆
  accessibility: ★★☆☆☆

compatibility:
  compatible: [Industrial, Neumorphism, Editorial]
  avoid: [Flat, Neo-Brutalism, Swiss, Material]

brandPersonality: [Tactile, Nostalgic, Craft-Focused, Physical, Instrumental]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★☆☆
  geometry: ★★★☆☆
  illustration: ★★★☆☆
  motion: ★★☆☆☆
  texture: ★★★★★
  photography: ★★★☆☆
  depth: ★★★★★

componentBehaviour:
  buttons: tactile push-button | metallic/leather gradient fill | inner highlight bevel
  cards: leather/metal textured card | inset shadow container
  forms: recessed input wells | inner top shadow
  navigation: instrument panel header with physical toggle switches
  search: inset search well with metallic magnifying glass button

motionLanguage:
  duration: 150ms
  curve: ease-in-out
  energy: low
  scroll: mechanical click feel
  hover: specular light highlight shift

executableSignature: |
  /* Skeuomorphic Signature: Dual inner/outer bevel & tactile gradient */
  .skeuo-btn { background: linear-gradient(180deg, #3B82F6 0%, #1D4ED8 100%); border: 1px solid #1E40AF; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 6px rgba(0,0,0,0.3); border-radius: 8px; color: #fff; font-weight: 600; }
```

* **Color Palette**: Tactile tones (Leather `#451A03`, Titanium `#64748B`, Cream Paper `#FDFBF7`, Deep Slate `#0F172A`).
* **Typography**: Classic serifs or technical instrument faces (`Cormorant Garamond`, `JetBrains Mono`).
* **Anti-Pattern Warning**: Overloading modern web apps with heavy textures that degrade mobile performance or screen reader access.

---

### 8. Glassmorphism
* **Visual Philosophy**: Frosted-glass translucency, multi-layered spatial hierarchy, and background blurring over vibrant backdrops.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★★
  dashboard: ★★★★☆
  landing: ★★★★★
  mobile: ★★★★☆
  accessibility: ★★★☆☆

compatibility:
  compatible: [Aurora UI, Bento Box, Minimalist, Cyberpunk]
  avoid: [Brutalism, Neo-Brutalism, Flat, Bauhaus]

brandPersonality: [Futuristic, Sleek, Spatial, Luminous, Premium]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★☆
  geometry: ★★★★☆
  illustration: ★★☆☆☆
  motion: ★★★☆☆
  texture: ★★☆☆☆
  photography: ★★★★☆
  depth: ★★★★★

componentBehaviour:
  buttons: frosted translucent pill | 1px light border | subtle glow hover
  cards: frosted glass card | backdrop-filter blur | 1px semi-transparent white border
  forms: translucent input fields with frosted background
  navigation: floating frosted pill navbar centered at top
  search: frosted search input bar with glass icon badge

motionLanguage:
  duration: 250ms
  curve: cubic-bezier(0.16, 1, 0.3, 1)
  energy: medium
  scroll: parallax glass depth layering
  hover: backdrop blur increase & border highlight

executableSignature: |
  /* Glassmorphism Signature: Backdrop blur + semi-transparent border */
  .glass-card { background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); border-radius: 20px; }
```

* **Color Palette**: Semi-transparent whites and darks (`rgba(255, 255, 255, 0.15)` / `rgba(15, 23, 42, 0.65)`) over vibrant background mesh gradients.
* **Typography**: Ultra-clean modern sans-serifs (`Outfit`, `Inter`, `Tajawal`).
* **Anti-Pattern Warning**: Layering glass panel over glass panel without sufficient text contrast — contrast breaks down rapidly if background blur is under-calculated.

---

### 9. Maximalism & Mixed Media
* **Visual Philosophy**: "More is more." Rich visual density, layered typography, kinetic text, collage imagery, and energetic color collisions.

```yaml
confidence:
  production: ★★☆☆☆
  marketing: ★★★★★
  dashboard: ★☆☆☆☆
  landing: ★★★★☆
  mobile: ★★★☆☆
  accessibility: ★★☆☆☆

compatibility:
  compatible: [Neo-Brutalism, Kinetic Typography, Cyberpunk, Memphis]
  avoid: [Minimalism, Swiss, Material, Corporate]

brandPersonality: [Energetic, Unconventional, Loud, Experimental, Expressive]

visualDNA:
  grid: ★★☆☆☆
  typography: ★★★★★
  geometry: ★★★☆☆
  illustration: ★★★★★
  motion: ★★★★★
  texture: ★★★★☆
  photography: ★★★★★
  depth: ★★★★☆

componentBehaviour:
  buttons: high-contrast multi-color button | custom typography mix
  cards: collage card with overlapping sticker badges & textures
  forms: expressive form fields with contrasting border styles
  navigation: marquee ticker header with overlapping logo emblem
  search: prominent full-width search input with animated search prompt

motionLanguage:
  duration: 350ms
  curve: cubic-bezier(0.34, 1.56, 0.64, 1)
  energy: high
  scroll: marquee text ticker & parallax stickers
  hover: scale bounce & color inversion

executableSignature: |
  /* Maximalist Signature: Overlapping sticker badge + kinetic ticker */
  .maximal-badge { transform: rotate(-4deg); background: #EC4899; color: #fff; padding: 0.4rem 1rem; font-weight: 900; box-shadow: 3px 3px 0 #000; display: inline-block; }
  .maximal-marquee { display: flex; overflow: hidden; white-space: nowrap; font-size: 2rem; font-weight: 800; }
```

* **Color Palette**: High-voltage multi-color palettes (Vivid Purple `#7C3AED`, Acid Green `#84CC16`, Hot Crimson `#E11D48`, Deep Indigo `#312E81`).
* **Typography**: Unexpected headline pairings (Super-bold Serif + Condensed Mono + Display Sans).
* **Anti-Pattern Warning**: Visual chaos without focal hierarchy — the primary CTA and navigation must remain crystal-clear amidst the maximalism.

---

### 10. Industrial Style (Web App / Technical)
* **Visual Philosophy**: Architectural and engineering rawness. Blueprint grids, monospaced data density, titanium grounds, and mechanical precision.

```yaml
confidence:
  production: ★★★★★
  marketing: ★★★☆☆
  dashboard: ★★★★★
  landing: ★★★★☆
  mobile: ★★★★☆
  accessibility: ★★★★★

compatibility:
  compatible: [Swiss, Brutalism, Cyberpunk, Bento Box]
  avoid: [Corporate Memphis, Claymorphism, Organic, Frutiger Aero]

brandPersonality: [Technical, Mechanical, Precision-Engineered, Utilitarian, Robust]

visualDNA:
  grid: ★★★★★
  typography: ★★★★★
  geometry: ★★★★☆
  illustration: ★☆☆☆☆
  motion: ★☆☆☆☆
  texture: ★★☆☆☆
  photography: ★★☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: monospaced label button | sharp 2px corners | hairline border
  cards: titanium surface card | fine blueprint hairline border (`1px solid #334155`)
  forms: compact monospaced input fields with unit suffixes (`ms`, `kb`, `fps`)
  navigation: telemetry status bar with `● LIVE` indicator dot
  search: monospaced CLI prompt input (`> search_query...`)

motionLanguage:
  duration: 100ms
  curve: linear
  energy: low
  scroll: none
  hover: hairline border color shift to amber/cyan

executableSignature: |
  /* Industrial Signature: Blueprint hairline grid + telemetry dot */
  .industrial-card { background: #0F172A; border: 1px solid #334155; padding: 1.25rem; font-family: 'JetBrains Mono', monospace; }
  .industrial-status { display: inline-flex; align-items: center; gap: 0.5rem; color: #F59E0B; font-size: 0.75rem; }
```

* **Color Palette**: Monochromatic metal (`#090A0F`, `#1E293B`, `#334155`, `#94A3B8`) with high-visibility signal accents (Amber `#F59E0B` or Safety Orange `#FF6B00`).
* **Typography**: Monospaced fonts for all data (`JetBrains Mono`, `Menlo`) paired with industrial sans (`Oswald`).
* **Anti-Pattern Warning**: Making text sizes so small and dense that readability on mobile viewports fails.

---

### 11. Bento Box UI (Bento Grid)
* **Visual Philosophy**: Compartmentalized modular rectangular tiles inspired by Japanese bento lunch boxes. High information density with responsive masonry grid rhythm.

```yaml
confidence:
  production: ★★★★★
  marketing: ★★★★★
  dashboard: ★★★★★
  landing: ★★★★★
  mobile: ★★★★★
  accessibility: ★★★★★

compatibility:
  compatible: [Minimalist, Glassmorphism, Material, Industrial, Aurora]
  avoid: [Maximalism, Neo-Brutalism, Skeuomorphism]

brandPersonality: [Organized, Efficient, Modular, High-Tech, Clean]

visualDNA:
  grid: ★★★★★
  typography: ★★★★☆
  geometry: ★★★★★
  illustration: ★★★☆☆
  motion: ★★☆☆☆
  texture: ★☆☆☆☆
  photography: ★★★★☆
  depth: ★★☆☆☆

componentBehaviour:
  buttons: rounded-xl button | primary color fill
  cards: modular bento tile | rounded-2xl (20px-24px) | 1px subtle border | subtle hover lift
  forms: rounded input fields embedded directly inside bento tiles
  navigation: clean header navbar aligned with bento grid container
  search: bento search tile with live keyboard shortcut badge

motionLanguage:
  duration: 200ms
  curve: cubic-bezier(0.16, 1, 0.3, 1)
  energy: medium
  scroll: smooth staggered card fade-ins
  hover: translate-y(-4px) lift

executableSignature: |
  /* Bento Grid Signature: Modular rounded-2xl masonry tiles */
  .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .bento-tile { background: var(--color-surface); border: 1px solid var(--border); border-radius: 24px; padding: 1.75rem; transition: transform 200ms ease; }
  .bento-tile:hover { transform: translateY(-4px); }
```

* **Color Palette**: Subtle surface steps (`#F8FAFC`, `#F1F5F9`, `#E2E8F0` for light; `#0F172A`, `#1E293B`, `#334155` for dark) with 1 primary accent.
* **Typography**: Clean geometric sans-serifs (`Outfit`, `Inter`, `Tajawal`).
* **Anti-Pattern Warning**: Filling bento tiles with generic icon+headline filler — every bento card must showcase a distinct visual widget or interactive micro-preview.

---

### 12. Aurora UI (Mesh Gradients)
* **Visual Philosophy**: Glowing, fluid background mesh gradients resembling the Northern Lights. Gives a futuristic, high-tech feel without cluttering foreground content.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★★
  dashboard: ★★★★☆
  landing: ★★★★★
  mobile: ★★★★☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Glassmorphism, Bento Box, Minimalist, Cyberpunk]
  avoid: [Brutalism, Neo-Brutalism, Skeuomorphism, Swiss]

brandPersonality: [Luminescent, Futuristic, Innovative, Fluid, Magical]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★★☆
  geometry: ★★★☆☆
  illustration: ★★☆☆☆
  motion: ★★★★☆
  texture: ★☆☆☆☆
  photography: ★★★☆☆
  depth: ★★★★☆

componentBehaviour:
  buttons: glowing primary button | subtle radial backlight ring
  cards: dark card with glowing mesh aura behind background
  forms: glowing input focus ring with mesh backdrop
  navigation: transparent dark navbar with glowing gradient border
  search: glowing mesh search pill container

motionLanguage:
  duration: 8000ms (mesh drift) / 200ms (interaction)
  curve: ease-in-out
  energy: medium (ambient glow drift)
  scroll: smooth parallax mesh glow shift
  hover: glow intensity increase

executableSignature: |
  /* Aurora Mesh Signature: Blended glowing blur backdrop */
  .aurora-bg { position: relative; background: #0F172A; overflow: hidden; }
  .aurora-bg::before { content: ''; position: absolute; top: -20%; left: -20%; width: 140%; height: 140%; background: radial-gradient(circle, rgba(79,70,229,0.3) 0%, rgba(6,182,212,0.2) 40%, transparent 70%); filter: blur(60px); }
```

* **Color Palette**: Blended luminescent gradients (Indigo `#4F46E5` → Cyan `#06B6D4` → Emerald `#10B981` → Violet `#8B5CF6`).
* **Typography**: Crisp modern sans-serifs (`Outfit`, `Inter`).
* **Anti-Pattern Warning**: Putting high-intensity mesh gradients directly behind small dark body text, destroying readability.

---

### 13. Neumorphism (Soft UI)
* **Visual Philosophy**: Minimalist evolution of skeuomorphism where UI elements appear extruded directly out of the background surface.

```yaml
confidence:
  production: ★★☆☆☆
  marketing: ★★★☆☆
  dashboard: ★★★☆☆
  landing: ★★★☆☆
  mobile: ★★☆☆☆
  accessibility: ★☆☆☆☆

compatibility:
  compatible: [Minimalist, Skeuomorphism, Organic]
  avoid: [Flat, Neo-Brutalism, Cyberpunk, Swiss]

brandPersonality: [Soft, Tactile, Monochromatic, Subtle, Futuristic]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★☆☆
  geometry: ★★★★☆
  illustration: ★☆☆☆☆
  motion: ★★☆☆☆
  texture: ★★☆☆☆
  photography: ★★☆☆☆
  depth: ★★★★★

componentBehaviour:
  buttons: extruded soft push button | dual light/dark shadow | inset shadow on press
  cards: extruded surface card | rounded-2xl | zero border outline
  forms: inset shadow input well (`box-shadow: inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #ffffff`)
  navigation: soft extruded navbar rail
  search: inset search well with soft extruded trigger button

motionLanguage:
  duration: 150ms
  curve: ease-out
  energy: low
  scroll: none
  hover: shadow depth shift (extruded to inset on click)

executableSignature: |
  /* Neumorphic Signature: Dual soft light/dark extrusion shadow */
  .neu-card { background: #E0E5EC; border-radius: 20px; box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff; padding: 1.5rem; }
  .neu-input { background: #E0E5EC; border-radius: 12px; box-shadow: inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff; border: none; }
```

* **Color Palette**: Monochromatic low-contrast grounds (Light `#E0E5EC` or Dark `#1E293B`).
* **Typography**: Soft rounded sans-serifs (`Outfit`, `Tajawal`).
* **Anti-Pattern Warning**: Neumorphic buttons often fail WCAG 2.1 AA contrast if high-contrast text or border outlines are omitted.

---

### 14. Corporate Memphis (Alegria)
* **Visual Philosophy**: Friendly, approachable flat illustration and UI style featuring geometric characters with colorful, disproportionate limbs.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★☆
  dashboard: ★★★☆☆
  landing: ★★★★☆
  mobile: ★★★★☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Flat, Material, Minimalist]
  avoid: [Industrial, Cyberpunk, Neo-Brutalism, Skeuomorphism]

brandPersonality: [Friendly, Approachable, Inclusive, Playful, Optimistic]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★★☆
  geometry: ★★★★☆
  illustration: ★★★★★
  motion: ★★★☆☆
  texture: ★☆☆☆☆
  photography: ★☆☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: pill button (`border-radius: 9999px`) | friendly pastel fill
  cards: soft pastel card panel (`#F8FAFC`) | rounded-2xl | no sharp edges
  forms: friendly rounded inputs with soft pastel focus ring
  navigation: top bar with friendly character emblem illustration
  search: pill search input with rounded search icon

motionLanguage:
  duration: 250ms
  curve: cubic-bezier(0.34, 1.56, 0.64, 1)
  energy: medium
  scroll: floating illustration entrance
  hover: gentle scale bounce

executableSignature: |
  /* Corporate Memphis Signature: Soft pastel pill button + rounded card panel */
  .memphis-card { background: #F8FAFC; border-radius: 24px; padding: 2rem; border: 1px solid #E2E8F0; }
  .memphis-pill { background: #7C3AED; color: #fff; border-radius: 9999px; padding: 0.75rem 1.75rem; font-weight: 600; }
```

* **Color Palette**: Playful pastel and vibrant tones (Warm Peach `#FFEDD5`, Soft Purple `#DDD6FE`, Mint `#A7F3D0`, Sky Blue `#BAE6FD`).
* **Typography**: Friendly rounded sans-serifs (`Outfit`, `Tajawal`).
* **Anti-Pattern Warning**: Using Corporate Memphis for high-security FinTech or industrial medical tools where gravity and trust are paramount.

---

### 15. Cyberpunk & Vaporwave
* **Visual Philosophy**: High-tech dystopian aesthetic (Cyberpunk) or 80s nostalgic retro-futurism (Vaporwave). High-octane neon accents over pitch-black grounds.

```yaml
confidence:
  production: ★★★☆☆
  marketing: ★★★★★
  dashboard: ★★★★☆
  landing: ★★★★★
  mobile: ★★★☆☆
  accessibility: ★★★☆☆

compatibility:
  compatible: [Industrial, Neon, Kinetic Typography, Glassmorphism]
  avoid: [Corporate Memphis, Claymorphism, Organic, Swiss]

brandPersonality: [Rebellious, Dystopian, High-Tech, High-Octane, Futuristic]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★★
  geometry: ★★★★☆
  illustration: ★★☆☆☆
  motion: ★★★★☆
  texture: ★★★☆☆
  photography: ★★☆☆☆
  depth: ★★★☆☆

componentBehaviour:
  buttons: neon border button (`1px solid #00F0FF`) | glowing text | sharp chamfered corners
  cards: dark card (`#090A0F`) | neon glow border | monospaced header bar
  forms: monospaced neon-bordered inputs with scanline overlays
  navigation: terminal HUD top bar with live telemetry counters
  search: monospaced prompt (`> SEARCH_SYSTEM`) with neon trigger button

motionLanguage:
  duration: 150ms
  curve: steps(3) or linear
  energy: high
  scroll: glitch keyframe reveals & scanline drift
  hover: neon border glow pulse

executableSignature: |
  /* Cyberpunk Signature: Pitch-black ground + neon glow border */
  .cyber-card { background: #090A0F; border: 1px solid #00F0FF; box-shadow: 0 0 12px rgba(0, 240, 255, 0.3); font-family: 'JetBrains Mono', monospace; padding: 1.5rem; }
  .cyber-btn { background: #00F0FF; color: #000; font-weight: 800; text-transform: uppercase; border: none; clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%); }
```

* **Color Palette**: Pitch Black (`#050508`), Neon Cyan (`#00F0FF`), Neon Magenta (`#FF007F`), Acid Yellow (`#FFE600`).
* **Typography**: Monospaced code fonts (`JetBrains Mono`) paired with heavy industrial display titles (`Oswald`).
* **Anti-Pattern Warning**: Overusing glitch animations to the point where text becomes unreadable or triggers motion sickness.

---

### 16. Claymorphism
* **Visual Philosophy**: Playful 3D clay-like elements featuring soft matte surfaces, rounded puffy volumes, and deep warm inner reflections.

```yaml
confidence:
  production: ★★☆☆☆
  marketing: ★★★★☆
  dashboard: ★★☆☆☆
  landing: ★★★★☆
  mobile: ★★★☆☆
  accessibility: ★★★☆☆

compatibility:
  compatible: [Corporate Memphis, Flat, Glassmorphism]
  avoid: [Swiss, Brutalism, Industrial, Cyberpunk]

brandPersonality: [Playful, Friendly, Tactile, Whimsical, Gamified]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★★☆
  geometry: ★★★★☆
  illustration: ★★★★☆
  motion: ★★★☆☆
  texture: ★★★☆☆
  photography: ★☆☆☆☆
  depth: ★★★★★

componentBehaviour:
  buttons: puffy 3D clay button | deep inner light reflection | rounded-2xl
  cards: puffy clay card | deep warm drop shadow + inner highlight
  forms: rounded clay input wells
  navigation: puffy floating top bar with rounded clay icons
  search: clay search pill with soft 3D magnifying glass button

motionLanguage:
  duration: 300ms
  curve: cubic-bezier(0.34, 1.56, 0.64, 1)
  energy: medium
  scroll: smooth floating clay bounce
  hover: 3D press-down spring animation

executableSignature: |
  /* Claymorphism Signature: Puffy rounded volume + dual inner highlight */
  .clay-card { background: #FFFBEB; border-radius: 28px; box-shadow: 8px 8px 16px rgba(0,0,0,0.08), inset -8px -8px 12px rgba(0,0,0,0.08), inset 8px 8px 12px rgba(255,255,255,0.7); padding: 1.75rem; }
```

* **Color Palette**: Soft pastel clay tones (Bubblegum `#F472B6`, Soft Sky `#38BDF8`, Mint `#34D399`, Clay Cream `#FFFBEB`).
* **Typography**: Round, friendly typography (`Outfit`, `Tajawal`).
* **Anti-Pattern Warning**: Excessive clay depth on small UI controls causing layout alignment issues on mobile screens.

---

### 17. Isometric Design
* **Visual Philosophy**: 3D parallel projection without converging perspective lines, creating detailed technical micro-worlds on 2D surfaces.

```yaml
confidence:
  production: ★★★★☆
  marketing: ★★★★★
  dashboard: ★★★★☆
  landing: ★★★★★
  mobile: ★★★☆☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Bento Box, Industrial, Corporate, Flat]
  avoid: [Neo-Brutalism, Skeuomorphism, Cyberpunk]

brandPersonality: [Architectural, Technical, Analytical, Structured, Systemic]

visualDNA:
  grid: ★★★★★
  typography: ★★★★☆
  geometry: ★★★★★
  illustration: ★★★★★
  motion: ★★☆☆☆
  texture: ★☆☆☆☆
  photography: ★★☆☆☆
  depth: ★★★★☆

componentBehaviour:
  buttons: clean vector button | sharp crisp edges
  cards: vector card containing isometric SVG workflow diagram
  forms: clean input fields aligned with isometric visual tiles
  navigation: clean header top bar
  search: isometric search trigger widget

motionLanguage:
  duration: 250ms
  curve: ease-out
  energy: low
  scroll: isometric layer parallax
  hover: SVG 3D tile lift

executableSignature: |
  /* Isometric Signature: 30-degree vector projection grid */
  .iso-stage { transform: rotateX(60deg) rotateZ(-45deg); transform-style: preserve-3d; }
  .iso-card { background: var(--color-surface); border: 1px solid var(--border); box-shadow: -10px 10px 0px rgba(0,0,0,0.05); }
```

* **Color Palette**: Structured multi-tone gradients (Primary Blue `#2563EB`, Slate `#475569`, Indigo `#4F46E5`).
* **Typography**: Crisp technical sans-serifs (`Inter`, `JetBrains Mono`).
* **Anti-Pattern Warning**: Using static raster PNG isometric images that pixelate on retina displays — use clean SVG vectors.

---

### 18. Kinetic Typography
* **Visual Philosophy**: Moving, scaling, and interactive text becomes the primary visual and structural hero element of the page, replacing traditional hero imagery.

```yaml
confidence:
  production: ★★★☆☆
  marketing: ★★★★★
  dashboard: ★☆☆☆☆
  landing: ★★★★★
  mobile: ★★★☆☆
  accessibility: ★★☆☆☆

compatibility:
  compatible: [Swiss, Minimalist, Maximalism, Brutalism]
  avoid: [Corporate Memphis, Skeuomorphism, Claymorphism]

brandPersonality: [Expressive, High-Contrast, Authoritative, Bold, Dynamic]

visualDNA:
  grid: ★★★★☆
  typography: ★★★★★
  geometry: ★★★☆☆
  illustration: ★☆☆☆☆
  motion: ★★★★★
  texture: ★☆☆☆☆
  photography: ★★☆☆☆
  depth: ★☆☆☆☆

componentBehaviour:
  buttons: giant typography CTA link with arrow hover shift
  cards: high-contrast text card with massive headline scale contrast
  forms: full-width display input field with floating scaling label
  navigation: full-viewport kinetic overlay navigation modal
  search: giant full-screen interactive search overlay

motionLanguage:
  duration: 400ms
  curve: cubic-bezier(0.16, 1, 0.3, 1)
  energy: high
  scroll: marquee text scroll ticker
  hover: interactive font-weight / letter-spacing stretch

executableSignature: |
  /* Kinetic Typography Signature: Massive clamp font headline + marquee scroll */
  .kinetic-title { font-size: clamp(3.5rem, 11vw, 8.5rem); font-weight: 900; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.04em; }
  .kinetic-outline { -webkit-text-stroke: 1.5px var(--color-primary); color: transparent; }
```

* **Color Palette**: Ultra-high contrast stark black & white (`#000000` / `#FFFFFF`) with 1 sharp signal accent (Vermilion `#EF4444` or Electric Blue `#2563EB`).
* **Typography**: Distinctive display serif or sans (`El Messiri`, `Outfit`, `Fraunces`, `Oswald`).
* **Anti-Pattern Warning**: Text moving too fast for users to read, or violating `prefers-reduced-motion` accessibility standards.

---

### 19. Organic / Amorphous UI
* **Visual Philosophy**: Natural, fluid, and asymmetrical blob-like shapes that break away from rigid rectangular grids.

```yaml
confidence:
  production: ★★★☆☆
  marketing: ★★★★☆
  dashboard: ★★☆☆☆
  landing: ★★★★☆
  mobile: ★★★★☆
  accessibility: ★★★★☆

compatibility:
  compatible: [Minimalist, Corporate Memphis, Editorial]
  avoid: [Swiss, Industrial, Cyberpunk, Bento Box]

brandPersonality: [Natural, Fluid, Calming, Warm, Harmonious]

visualDNA:
  grid: ★★☆☆☆
  typography: ★★★★☆
  geometry: ★★☆☆☆
  illustration: ★★★★☆
  motion: ★★★☆☆
  texture: ★★☆☆☆
  photography: ★★★★☆
  depth: ★★☆☆☆

componentBehaviour:
  buttons: fluid organic pill button | warm natural fill
  cards: asymmetrical amorphous card (`border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`)
  forms: soft rounded input fields with warm earthy focus indicator
  navigation: fluid top bar with SVG wave bottom divider
  search: organic search pill with soft leaf icon trigger

motionLanguage:
  duration: 6000ms (blob morph) / 250ms (click)
  curve: ease-in-out
  energy: low (gentle fluid morphing)
  scroll: smooth organic wave parallax
  hover: fluid shape morph shift

executableSignature: |
  /* Organic UI Signature: Asymmetrical fluid morphing border */
  .organic-blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; background: #F59E0B; transition: border-radius 6s ease-in-out infinite alternate; }
  .organic-card { background: #FDFBF7; border-radius: 32px 16px 40px 20px; padding: 2rem; border: 1px solid #E5E7EB; }
```

* **Color Palette**: Warm earthy tones (Terracotta `#C2410C`, Sage `#047857`, Sand `#F59E0B`, Cream Paper `#FDFBF7`).
* **Typography**: Warm serif or organic sans (`Markazi Text`, `Almarai`, `Tajawal`).
* **Anti-Pattern Warning**: Using amorphous shapes for data tables or forms where rectangular alignment is required for usability.

---

### 20. Frutiger Aero & Y2K Revival
* **Visual Philosophy**: Early 2000s optimistic tech aesthetic. Glossy glass buttons, vibrant sky-blue & lime-green gradients, lens flares, and skeuomorphic water droplets.

```yaml
confidence:
  production: ★★☆☆☆
  marketing: ★★★★☆
  dashboard: ★★☆☆☆
  landing: ★★★★☆
  mobile: ★★★☆☆
  accessibility: ★★★☆☆

compatibility:
  compatible: [Glassmorphism, Skeuomorphism, Y2K]
  avoid: [Swiss, Brutalism, Neo-Brutalism, Industrial]

brandPersonality: [Optimistic, Luminous, Nostalgic, Vibrant, Glossy]

visualDNA:
  grid: ★★★☆☆
  typography: ★★★☆☆
  geometry: ★★★★☆
  illustration: ★★★☆☆
  motion: ★★★☆☆
  texture: ★★★★☆
  photography: ★★★☆☆
  depth: ★★★★☆

componentBehaviour:
  buttons: glossy glass button pill | linear top highlight gradient | bright rounded edges
  cards: glossy Aero card | vibrant sky blue gradient backdrop | rounded-2xl
  forms: glossy input wells with top highlight sheen
  navigation: glossy glass header bar with bright emblem lens flare
  search: glossy search pill container with aero search trigger

motionLanguage:
  duration: 200ms
  curve: ease-out
  energy: medium
  scroll: lens flare shimmer on scroll
  hover: glossy sheen shift & glow increase

executableSignature: |
  /* Frutiger Aero Signature: Linear glossy glass highlight + sky blue gradient */
  .aero-btn { background: linear-gradient(180deg, #38BDF8 0%, #0284C7 50%, #0369A1 100%); border: 1px solid #7DD3FC; border-radius: 9999px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 12px rgba(2,132,199,0.3); color: #fff; font-weight: 700; padding: 0.75rem 2rem; position: relative; overflow: hidden; }
  .aero-btn::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%; background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); border-radius: 9999px 9999px 0 0; }
```

* **Color Palette**: Aero Sky Blue `#0284C7`, Lime Green `#65A30D`, Sun Yellow `#FACC15`, Glossy White `#FFFFFF`, Aurora Blue `#0369A1`.
* **Typography**: Clean early-digital sans (`Segoe UI`-style, `Outfit`, `Tajawal`).
* **Anti-Pattern Warning**: Over-saturating glossy overlays to the point where text contrast fails WCAG 2.1 AA legibility.

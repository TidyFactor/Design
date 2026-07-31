# 18 · Design Decision Engine Rules & Protocols

System operational rules for `tidyfactor-design` that transform visual references into deterministic, repeatable, and non-contradictory design decisions.

---

## 🌳 1. The 9-Step Design Decision Tree Protocol

Before selecting visual schools, tokens, or components, every AI agent execution MUST evaluate choices sequentially through this 9-step decision tree:

```
Step 1: Project Scope       → Determine surface type (marketing, dashboard, e-commerce, docs, spatial)
Step 2: Industry Register   → Map domain (Corporate, SaaS, FinTech, AI, Healthcare, Education, Luxury, E-Commerce)
Step 3: Audience Mode       → Classify user state (Inspire, Evaluate, Act, Learn)
Step 4: Brand Personality   → Lock 3-5 tone adjectives (e.g. Precise, Confident, Technical, Calm)
Step 5: Storytelling        → Choose archetype (Cinematic, Editorial, Documentary, Interactive)
Step 6: UX Philosophy       → Lock core principles (Accessibility-first, Mobile-first, RTL-first, Dark Native)
Step 7: Visual School       → Select Primary School & max 1 Secondary Influence from confidence/compatibility matrix
Step 8: Token Generation    → Derive tokens.css & brand.json v2 based on Visual DNA & Color Palettes
Step 9: Component Behavior  → Apply exact component shape, form, and motion language specifications
```

---

## 🍲 2. Anti-"Design Soup" Constraint Rule (Mandatory)

> [!CAUTION]
> **AI Anti-Pattern Failure**: AI generators frequently create "Design Soup" by mixing 4-5 clashing design movements on a single page (e.g., Glassmorphism frosted panels + Neo-Brutalist 4px hard black offset shadows + Neumorphic extruded buttons + Cyberpunk glitch effects).

### Strict Mixing Limits
Unless explicitly requested by the user, an AI Agent MUST NEVER exceed:
- **1 Primary Visual School** (e.g., Swiss)
- **1 Secondary Influence** (e.g., Minimalism — MUST be listed as `Compatible` in the school's matrix)
- **1 Motion Language** (e.g., Subtle / 150ms / ease-out)
- **1 Storytelling Style** (e.g., Editorial)
- **1 UX Philosophy Accent** (e.g., RTL-first + Dark Native)

Any output violating this cap fails audit and triggers an automatic revision pass.

---

## ⚡ 3. Executable Signature Element Rule

Every visual school defines a **Concrete Executable Signature Element**. The AI Agent MUST render this signature element at least 1-2 times on every project page to ensure the interface has distinct visual identity:

| Visual School | Executable Signature Element | Mechanical Implementation |
|---|---|---|
| **Swiss** | Asymmetric Grid Lines & Huge Type | Hairline 1px grid borders (`#E2E8F0`), display type `clamp(3rem,8vw,6rem)`, zero shadow |
| **Flat** | Saturated 2D Color Blocks | Solid 2D fills, `border-radius: 8px`, 0px shadow, high-contrast flat icon badges |
| **Material** | Floating Elevation Sheet & FAB | Floating action button, `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`, touch ripple feedback |
| **Minimalism** | Massive Negative Space & Single Focal Point | Section padding `96px`+, max 1 accent color, zero clutter |
| **Neo-Brutalism** | Hard Offset Box Shadow & Black Border | `box-shadow: 4px 4px 0px #000000`, `border: 2px solid #000000`, sharp/rounded corners |
| **Bauhaus** | Primary Color Block Geometry | Red/Blue/Yellow color blocking, circular accent containers mixed with sharp grids |
| **Skeuomorphism** | Dual Inner/Outer Bevel & Tactile Surface | `box-shadow: inset 0 2px 4px rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.2)` |
| **Glassmorphism** | Frosted Glass Pill / Card | `backdrop-filter: blur(12px) saturate(180%)`, `background: rgba(255,255,255,0.12)`, `border: 1px solid rgba(255,255,255,0.2)` |
| **Maximalism** | Layered Collage & Kinetic Marquee | Overlapping sticker badges, infinite text marquee ticker, dense typography contrast |
| **Industrial** | Monospaced Blueprint Telemetry | Monospace font, crosshair markers, `● LIVE` status indicator dots, titanium grounds |
| **Bento Box** | Modular Masonry Tiles | `border-radius: 20px`–`24px` compartmentalized cards, 1px subtle border |
| **Aurora UI** | Luminescent Mesh Gradient Spotlight | Radial glowing mesh gradient (`blur(60px)`) behind hero cutout or primary card |
| **Neumorphism** | Dual Soft Extrusion Shadow | Light/Dark dual shadow (`box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff`) |
| **Corporate Memphis** | Soft Pastel Pill Containers | `border-radius: 9999px` soft pill buttons, warm pastel background panels |
| **Cyberpunk** | Neon Glow Border & Monospace HUD | `box-shadow: 0 0 12px rgba(0,240,255,0.5)`, monospaced telemetry headers, pitch black ground |
| **Claymorphism** | Soft Clay 3D Extrusion | `border-radius: 24px`+, deep inner light reflection + warm outer shadow |
| **Isometric** | 30° Parallel Perspective SVG | SVG 30° parallel projection vector diagram or feature illustration |
| **Kinetic Type** | Interactive Scaling Display Headline | `font-size: clamp(4rem, 12vw, 9rem)` headline, hover stretch effect |
| **Organic UI** | Asymmetrical Morphing Blob | Fluid asymmetrical blob border (`border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`) |
| **Frutiger Aero** | Glossy Glass Overlay & Aero Pill | Linear glossy highlight (`background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)`) |

---

## 📊 4. School Evaluation Dimensions Schema

Every movement entry in `memory/16-design-movements-guide.md` is structured using 7 standardized evaluation dimensions:

1. **Confidence Matrix**: Rated `★` to `★★★★★` across 6 surface targets (`production`, `marketing`, `dashboard`, `landing`, `mobile`, `accessibility`).
2. **Compatibility Matrix**: Explicit lists of `Compatible` secondary schools and `Avoid / Not Recommended` clashing schools.
3. **Brand Personality**: 4-6 tone keywords governing copy tone, media choices, and hover states.
4. **Visual DNA Vector**: Rated `★` to `★★★★★` across 8 design dimensions (`Grid`, `Typography`, `Geometry`, `Illustration`, `Motion`, `Texture`, `Photography`, `Depth`).
5. **Component Behaviour**: Concrete styling for `Buttons`, `Cards`, `Forms`, `Navigation`, and `Search`.
6. **Motion Language**: Specified `Duration`, `Curve`, `Energy`, `Scroll`, and `Hover` behavior.
7. **Executable Signature Element**: Exact CSS/HTML code snippet for the school's signature tell.

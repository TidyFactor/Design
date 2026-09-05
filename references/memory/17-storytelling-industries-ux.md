# 17 · Storytelling Archetypes, Industry Registers & UX Philosophies

<!-- last-verified: 2026-09-05 -->

Operational guide for `tidyfactor-design` establishing visual rules, layout structures, typography pairings, color systems, and execution constraints across **4 Storytelling Archetypes**, **8 Industry Registers**, and **8 UX Design Philosophies**.

---

## 🎬 4 Storytelling Archetypes

### 1. Cinematic Storytelling
* **Core Philosophy**: The user experiences a luxury TV ad in continuous motion. Scroll drives product transformation, stage reveals, and lighting shifts.
* **Layout Structure**: Full-bleed hero stage with 3D product float & pointer tilt → Canvas frame-sequence scroll film (600vh stage) → Spec reveal → Lifestyle moments → Pinned video CTA with smoothstep wash overlay.
* **Typography**: Clean display serif (`El Messiri`, `Cormorant Garamond`) for headlines paired with high-contrast body sans (`Tajawal`, `Inter`). Small off-center captions over video/film.
* **Visual Tokens**: Deep dark ground (`#0F172A`), gold radial background aura, drifting particle motes, fixed z-stack layers (`#ambient`, `#glow`, `#vignette`, `#grain`, `#progress`).
* **Best For**: Physical luxury goods, flagship product launches, brand positioning, automotive, high-ticket offers.

---

### 2. Editorial Storytelling
* **Core Philosophy**: Literary journalism and broadsheet publishing. Focuses on narrative depth, authoritativeness, and structured typography hierarchy.
* **Layout Structure**: Magazine header masthead → Split-screen hero (image + narrative copy) → Multi-column article grid → Hairline rule dividers → Pull quote blocks → Author colophon footer.
* **Typography**: Expressive editorial serifs (`Markazi Text`, `Fraunces`, `El Messiri`) for display paired with legible sans or serif body (`IBM Plex Sans Arabic`, `Tajawal`).
* **Visual Tokens**: Warm cream/ivory grounds (`#FBF8F2`), ink black text (`#14171C`), fine hairline dividers (`1px solid #E2E5E9`), generous line-height (`1.75`).
* **Best For**: Media publications, founder origin stories, investigative reports, thought leadership, luxury brand manifests.

---

### 3. Documentary Storytelling
* **Core Philosophy**: Raw, unpolished, evidence-first presentation. Uses timestamped logs, concrete data points, real photography, and objective split-screen progression.
* **Layout Structure**: Metadata header bar (date, coordinates, telemetry) → Timeline sequence blocks → High-contrast photo evidence cards → Concrete metric grids → Fact verification footer.
* **Typography**: Monospaced technical typography (`JetBrains Mono`, `Oswald`) paired with neutral body sans (`Inter`, `Tajawal`).
* **Visual Tokens**: Titanium grays (`#0F172A`, `#1E293B`), signal amber accent (`#F59E0B`), telemetry badge dots (`● VERIFIED`), hairline grid borders (`1px solid #334155`).
* **Best For**: Sustainability reports, engineering case studies, NGO causes, supply-chain transparency, technical post-mortems.

---

### 4. Interactive Storytelling
* **Core Philosophy**: Choice-driven exploration where user interaction (clicks, toggles, hover paths) directly reveals content and alters page state.
* **Layout Structure**: Interactive hero preview → Tabbed exploration stage → Live calculator / filter widget → Before-and-after comparison slider → Interactive FAQ accordion → Action trigger CTA.
* **Typography**: Friendly modern sans-serifs (`Outfit`, `Tajawal`).
* **Visual Tokens**: Interactive hover lift (`transform: translateY(-2px)`), active press feedback (`scale-[0.98]`), focus ring glow (`color-mix()`), smooth tab transitions.
* **Best For**: SaaS product walk-throughs, pricing calculators, interactive product configurators, digital learning modules.

---

## 💼 8 Industry Registers

### 1. Corporate
* **Visual Register**: Trust, stability, security, institutional authority.
* **Color Palette**: Trust Navy (`#0F172A`), Deep Sapphire (`#1E40AF`), Neutral Gray (`#F8FAFC`), Slate (`#475569`).
* **Typography**: Professional sans-serifs (`Outfit`, `Inter`, `Tajawal`).
* **Layout Rules**: 12-column grid, clean executive stat callouts, structured table matrices, WCAG AA compliance.
* **Avoid**: Neo-brutalist offset shadows, neon colors, playful illustrations.

---

### 2. SaaS (Software-as-a-Service)
* **Visual Register**: High efficiency, modern tech, data clarity, conversion-driven.
* **Color Palette**: Dark Slate (`#0F172A`) or Clean Light (`#FFFFFF`), Electric Indigo (`#4F46E5`), Cyan (`#06B6D4`).
* **Typography**: Modern geometric sans (`Outfit`, `Tajawal`, `Inter`).
* **Layout Rules**: Bento box feature grids, interactive app preview mockups, pricing tier comparison cards, integration logo grids.
* **Avoid**: Heavy skeuomorphic textures, illegible display fonts.

---

### 3. FinTech
* **Visual Register**: Precision, high security, transparency, wealth growth.
* **Color Palette**: Deep Emerald (`#065F46`), Mint (`#10B981`), Dark Indigo (`#1E1B4B`), Slate (`#F8FAFC`).
* **Typography**: Tabular numeric typography (`tabular-nums`), clean sans (`Outfit`, `Tajawal`).
* **Layout Rules**: Tabular data displays, security badge trust bars, live balance widgets, crisp financial chart surfaces.
* **Avoid**: Low-contrast text, informal casual microcopy, playful pastel colors.

---

### 4. AI & Emerging Tech
* **Visual Register**: Innovation, intelligence, futuristic capabilities, fluid power.
* **Color Palette**: Pitch Black (`#090A0F`), Luminescent Cyan (`#06B6D4`), Neon Purple (`#7C3AED`), Mesh Gradients.
* **Typography**: Ultra-clean sans (`Outfit`, `Inter`) paired with monospaced prompt accents (`JetBrains Mono`).
* **Layout Rules**: Aurora mesh gradient backgrounds, interactive prompt bars, glowing input borders, clean dark theme.
* **Avoid**: Traditional corporate clip-art, heavy paper textures.

---

### 5. Healthcare & Wellness
* **Visual Register**: Calm, empathy, hygiene, human warmth, accessible clarity.
* **Color Palette**: Soft Teal (`#0D9488`), Sage Green (`#047857`), Warm Ivory (`#FDFBF7`), Soft Blue (`#0284C7`).
* **Typography**: Highly legible rounded sans-serifs (`Tajawal`, `Outfit`, `Almarai`).
* **Layout Rules**: Generous padding, large accessible touch targets (≥44px), calm color transitions, clear patient steps.
* **Avoid**: Harsh neon contrast, aggressive countdown timers, jarring animation bounces.

---

### 6. Education & EdTech
* **Visual Register**: Playful engagement, encouragement, progressive growth, clarity.
* **Color Palette**: Vibrant Primary Triad (Soft Violet `#7C3AED`, Amber `#F59E0B`, Emerald `#10B981`, Sky `#0284C7`).
* **Typography**: Friendly approachble fonts (`Outfit`, `Tajawal`).
* **Layout Rules**: Gamified progress meters, rounded cards (`rounded-2xl`), badge rewards, interactive step cards.
* **Avoid**: Overly dense corporate tables, dark dystopian cyber-themes.

---

### 7. Luxury & Haute Couture
* **Visual Register**: Exclusivity, craftsmanship, prestige, timeless elegance.
* **Color Palette**: Espresso Black (`#0B0D10`), Warm Cream (`#FBF8F2`), Muted Gold (`#A97B33`), Ink (`#241812`).
* **Typography**: Display serifs (`El Messiri`, `Cormorant Garamond`) with delicate light-weight Latin accents.
* **Layout Rules**: Massive negative space, centered product cutouts, minimal navigation, dark/light theme commitment.
* **Avoid**: Cheap gradient badges, busy multi-column grids, aggressive sales banners.

---

### 8. E-Commerce & Retail
* **Visual Register**: Immediate desire, friction-free purchase flow, trust proof.
* **Color Palette**: High-contrast Primary CTA (`#4F46E5` or `#000000`), Neutral Surface (`#FFFFFF`), Soft Tint (`#F8FAFC`).
* **Typography**: Clear sans-serifs (`Outfit`, `Tajawal`).
* **Layout Rules**: Hero product image, price tag display, sticky buy bar on scroll, customer star review badges, variant selectors.
* **Avoid**: Hiding pricing or buy buttons below multiple screens of filler text.

---

## 🧠 8 UX Design Philosophies

### 1. Minimalism & Flat Design
Strips away all non-essential visual fluff. Focuses on negative space, crisp typography, and clear focal hierarchy.

### 2. Emotional Design
Incorporate purposeful micro-interactions and microcopy across 4 whimsy tiers (subtle feedback, task celebrations, discovery Easter eggs, contextual microcopy) to make interfaces delightful.

### 3. Human-Centered Experience (HCD)
Design for human cognitive limits: progressive disclosure of complex features, clear visual hierarchy, max 3 words on primary CTAs, predictable interaction models.

### 4. Accessibility-First (WCAG 2.1 AA)
Minimum 4.5:1 contrast for body text, 3:1 for large display text/UI controls. Touch targets minimum 44px on touch viewports. Never suppress focus outlines without a `color-mix()` replacement ring.

### 5. Mobile-First & Responsive Physics
Design layout containers to collapse fluidly from desktop (`2xl` 1536px) to mobile (`sm` 640px). Place primary actions within natural thumb-reach zones.

### 6. Arabic RTL First (Bidi-Native)
Design natively for Right-to-Left languages (`dir="rtl"`). Use CSS logical properties (`margin-inline-start`, `padding-inline`, `border-inline-end`). Pair **El Messiri** (headings) + **Tajawal** (body); never Amiri above 24px.

### 7. Dark Mode Native
Treat dark mode as a first-class citizen using `brand.json` v2 dual-mode tokens (`colors.light` & `colors.dark`). Use tinted dark neutrals (`#0F172A`, `#1E293B`) instead of flat pure black `#000000`.

### 8. Mixed Media Maximalism
Embrace high visual density, kinetic typography, multi-layered collage imagery, and bold color contrast for youth-focused, creative, or entertainment brands.

# 22 · Hero Section Motion Architecture Library
<!-- last-verified: 2026-09-05 -->

> A GSAP ScrollTrigger + SVG detailing system — built for AI-assisted generation and production handoff.

The hero is the highest-attention surface of any page. This library treats it as **motion architecture**, not a static banner: every component combines a layout pattern, a scroll choreography, and an SVG detailing technique.

---

## 1. Quick-Reference Matrix

| # | Component | Motion Signature | SVG Technique | Personality | Perf Cost |
|---|-----------|-----------------|---------------|-------------|-----------|
| 01 | Kinetic Split-Type | Char stagger + rise | Scribble stroke-draw | Confident SaaS | ●○○ |
| 02 | Scribble Signature | Scrub line-drawing | `getTotalLength` + dashoffset | Editorial / human | ●○○ |
| 03 | Text-Mask Scene | Parallax inside type | `<clipPath>` + `<image>` | Bold agency | ●●○ |
| 04 | Organic Blob | Turbulence drift | `feTurbulence` + `feDisplacementMap` | Playful / warm | ●●○ |
| 05 | Aurora Grain | Drifting gradient mesh | Radial gradients + noise filter | Ambient / premium | ●●○ |
| 06 | Orbit Field | Idle rotation + scroll velocity | SVG groups + counter-rotation | Tech / networked | ●●○ |
| 07 | Blueprint Wireframe | Pinned scrub draw | Dashed strokes + measure labels | Engineering / dev-tool | ●●○ |
| 08 | Pinned Horizontal | Scroll → X translation | Panel dividers + rules | Product showcase | ●●● |

---

## 2. Architecture & Conventions

```html
<!-- Attribute API — every hero declares its behavior, no magic classes -->
<section data-hero="kinetic">
  <h1 data-split>Design in motion</h1>
  <p data-reveal>Subheadline</p>
</section>
```

| Attribute | Meaning |
|-----------|---------|
| `data-hero="…"` | Component variant selector |
| `data-split` | Opt-in character splitting |
| `data-reveal` | Generic entrance (rise + fade) |
| `data-speed` | Parallax depth layer (0.2–1.5) |
| `data-draw` | SVG path to stroke-draw |
| `data-count` | Animated counter (target value) |

---

## 3. Foundation Setup

```js
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

// Central reduced-motion guard — every animation registers inside this
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  initHeroAnimations();   // all components live here
});

// Fonts change metrics → refresh after load
document.fonts.ready.then(() => ScrollTrigger.refresh());
```

```css
/* CSS fallback: reduced-motion users see final state instantly */
@media (prefers-reduced-motion: reduce) {
  [data-reveal], [data-split] .char { opacity: 1 !important; transform: none !important; }
}
```

---

## 4. Shared Animation Modules

### 4.1 — Character Splitter (no plugin dependency)
```js
function splitChars(el) {
  const text = el.textContent;
  el.innerHTML = '';
  el.setAttribute('aria-label', text); // a11y: readable as one string
  return [...text].map(ch => {
    const span = document.createElement('span');
    span.className = 'char';
    span.setAttribute('aria-hidden', 'true'); // a11y: chars are decorative
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(span);
    return span;
  });
}
```

### 4.2 — Draw Utility (SVG stroke reveal)
```js
function prepDraw(scope = document) {
  scope.querySelectorAll('[data-draw]').forEach(path => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });
}

function drawIn(paths, opts = {}) {
  return gsap.to(paths, {
    strokeDashoffset: 0,
    ease: 'none',
    stagger: 0.12,
    ...opts
  });
}
```

### 4.3 — Depth Parallax Utility
```js
function depthParallax(scope) {
  scope.querySelectorAll('[data-speed]').forEach(el => {
    gsap.to(el, {
      yPercent: -18 * parseFloat(el.dataset.speed),
      ease: 'none',
      scrollTrigger: {
        trigger: scope, start: 'top top', end: 'bottom top', scrub: true
      }
    });
  });
}
```

### 4.4 — Counter Module
```js
function initCounters(scope) {
  scope.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: target, duration: 2, ease: 'power2.out',
      snap: { val: 1 },
      onUpdate: () => el.textContent = Math.round(proxy.val).toLocaleString(),
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });
}
```

---

## 5. Hero Components

### 01 · Kinetic Split-Type Hero
**Concept:** Characters fly in with random stagger; an SVG scribble draws itself under the key word. Transformational motion, container-free.

```html
<section class="hero" data-hero="kinetic">
  <h1 class="hero__title" data-split>Design in <em>motion</em></h1>
  <svg class="hero__scribble" viewBox="0 0 220 24" aria-hidden="true">
    <path data-draw d="M4 16 C 55 4, 115 26, 216 9"
          fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
  </svg>
  <p class="hero__sub" data-reveal>Interfaces that breathe.</p>
</section>
```

```js
function kineticHero(scope) {
  const chars = splitChars(scope.querySelector('[data-split]'));
  prepDraw(scope);

  const tl = gsap.timeline({
    scrollTrigger: { trigger: scope, start: 'top 70%' }
  });

  tl.from(chars, {
      yPercent: 120, opacity: 0, rotateX: -80,
      stagger: { each: 0.03, from: 'random' },
      duration: 1.1, ease: 'expo.out'
    })
    .to(scope.querySelectorAll('[data-draw]'), {
      strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut'
    }, '-=0.5')
    .from(scope.querySelector('[data-reveal]'), {
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    }, '-=0.6');
}
```

**SVG detailing:** `stroke-linecap="round"` + slight C-curve = handwriting feel.  
**CSS note:** `.hero__title { perspective: 600px; }` required for `rotateX`.  
**Pairs with (eyebrow lib):** Highlight Marker · Hand-Drawn Accent.

---

### 02 · Scribble Signature Hero
**Concept:** A single continuous SVG line draws across the hero **as the user scrolls** — the scroll position becomes the pen.

```html
<section class="hero" data-hero="signature">
  <svg class="hero__line" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <path data-draw
      d="M-20 700 C 300 640, 380 260, 720 300 S 1180 620, 1460 180"
      fill="none" stroke="currentColor" stroke-width="2"
      vector-effect="non-scaling-stroke"/>
  </svg>
  <div class="hero__content">
    <h1 data-split>One line.<br>One idea.</h1>
  </div>
</section>
```

```js
function signatureHero(scope) {
  prepDraw(scope);
  drawIn(scope.querySelectorAll('[data-draw]'), {
    scrollTrigger: {
      trigger: scope, start: 'top top', end: '+=80%', scrub: 0.6
    }
  });
  kineticHero(scope); // compose with split-type entrance
}
```

**SVG detailing:**
- `vector-effect="non-scaling-stroke"` keeps stroke weight crisp at any viewport
- `S` (smooth cubic) commands produce organic, hand-drawn continuity
- `scrub: 0.6` adds lerp smoothing — feels like physical inertia

---

### 03 · Text-Mask Scene Hero
**Concept:** The headline itself is the window — a live image moves inside the letterforms on scroll.

```html
<section class="hero" data-hero="typemask">
  <svg class="hero__scene" viewBox="0 0 1200 600" role="img" aria-label="Product in motion">
    <defs>
      <clipPath id="typeClip">
        <text x="50%" y="58%" text-anchor="middle"
              font-size="210" font-weight="800" letter-spacing="-6">MOTION</text>
      </clipPath>
    </defs>
    <image href="/hero-scene.jpg" width="1200" height="820"
           preserveAspectRatio="xMidYMid slice"
           clip-path="url(#typeClip)" data-mask-target/>
  </svg>
  <p class="hero__sub" data-reveal>Where type becomes a window.</p>
</section>
```

```js
function typeMaskHero(scope) {
  gsap.fromTo('[data-mask-target]', 
    { yPercent: -8, scale: 1.05 },
    {
      yPercent: -22, scale: 1.2, transformOrigin: '50% 50%',
      ease: 'none',
      scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom top', scrub: true }
    }
  );
}
```

**SVG detailing:** `<clipPath>` + `<image>` lives entirely inside SVG — no cross-browser `clip-path: url()` on HTML issues.  
**Critical:** wait for `document.fonts.ready` before measuring — custom fonts change glyph bounds.

---

### 04 · Organic Blob Hero
**Concept:** A living form driven by SVG turbulence — the shape *wobbles* continuously and parallaxes away on scroll.

```html
<svg width="0" height="0" aria-hidden="true">
  <filter id="organic">
    <feTurbulence id="blobTurb" type="fractalNoise"
                  baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="55"/>
  </filter>
</svg>

<section class="hero" data-hero="blob">
  <div class="hero__blob" data-blob data-speed="0.4"></div>
  <div class="hero__content">
    <h1 data-split>Softly<br>engineered.</h1>
  </div>
</section>
```

```js
function blobHero(scope) {
  // Ambient organic wobble (displacement, not path morph — GPU cheap, infinite)
  gsap.to('#blobTurb', {
    attr: { baseFrequency: '0.014 0.006' },
    duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut'
  });

  gsap.from('[data-blob]', {
    scale: 0.6, opacity: 0, duration: 1.4, ease: 'expo.out',
    scrollTrigger: { trigger: scope, start: 'top 70%' }
  });

  depthParallax(scope);
}
```

**SVG detailing:** Animating `baseFrequency` is a displacement-field morph — infinitely loopable without MorphSVG.  
**Browser note:** SVG filters on HTML elements degrade in Safari → provide a `border-radius` keyframe fallback via feature query.  
**A11y:** blob is decorative → `aria-hidden` context, never carries meaning.

---

### 05 · Aurora Grain Hero
**Concept:** Blurred gradient fields drift on scroll; an SVG grain layer adds analog texture and kills "flat gradient" cheapness.

```html
<section class="hero" data-hero="aurora">
  <div class="aurora" aria-hidden="true">
    <div class="aurora__blob aurora__blob--1" data-speed="0.3"></div>
    <div class="aurora__blob aurora__blob--2" data-speed="0.6"></div>
    <div class="aurora__blob aurora__blob--3" data-speed="0.9"></div>
    <svg class="aurora__grain">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.05"/>
    </svg>
  </div>
  <div class="hero__content"><h1 data-split>Calm on<br>the surface.</h1></div>
</section>
```

```css
.aurora__blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); will-change: transform;
  mix-blend-mode: screen;
}
```

```js
function auroraHero(scope) {
  gsap.from('.aurora__blob--1', { xPercent: -20, yPercent: 15, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.from('.aurora__blob--2', { xPercent: 25, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  depthParallax(scope);
  kineticHero(scope);
}
```

**SVG detailing:** `feTurbulence` + `feColorMatrix(saturate: 0)` = luminance-only film grain at 5% opacity — the single highest-leverage "premium" trick in hero design.

---

### 06 · Orbit Field Hero
**Concept:** Nodes orbit a central object; idle rotation + scroll velocity injection makes the system respond to input energy.

```html
<svg class="hero__orbit" viewBox="0 0 600 600" aria-hidden="true">
  <circle cx="300" cy="300" r="220" fill="none"
          stroke="currentColor" stroke-dasharray="4 10" opacity="0.3"/>
  <g id="orbit">
    <g transform="translate(300 80)"><g class="node__inner"><circle r="26"/><text y="5" text-anchor="middle">AI</text></g></g>
    <g transform="translate(520 300)"><g class="node__inner"><circle r="26"/><text y="5" text-anchor="middle">API</text></g></g>
    <g transform="translate(300 520)"><g class="node__inner"><circle r="26"/><text y="5" text-anchor="middle">CDN</text></g></g>
    <g transform="translate(80 300)"><g class="node__inner"><circle r="26"/><text y="5" text-anchor="middle">GPU</text></g></g>
  </g>
</svg>
```

```js
function orbitHero(scope) {
  const orbit = document.getElementById('orbit');

  // Idle rotation (slow, infinite)
  const idle = gsap.to(orbit, {
    rotation: 360, duration: 60, repeat: -1, ease: 'none',
    transformOrigin: '50% 50%'
  });

  // Counter-rotate labels so text stays upright
  scope.querySelectorAll('.node__inner').forEach(node => {
    gsap.to(node, {
      rotation: -360, duration: 60, repeat: -1, ease: 'none',
      transformOrigin: '50% 50%'
    });
  });

  // Scroll velocity injects energy into the system
  ScrollTrigger.create({
    trigger: scope, start: 'top top', end: 'bottom top',
    onUpdate: self => gsap.to(orbit, {
      rotation: `+=${self.getVelocity() / 250}`,
      duration: 0.5, ease: 'power2.out',
      overwrite: 'auto'
    })
  });
}
```

**Detailing insight:** the **counter-rotation group pattern** (`outer rotates +θ, inner rotates −θ`) is the key trick — icons orbit but never spin. Reusable across carousels and radial menus.

---

### 07 · Blueprint Wireframe Hero
**Concept:** A product wireframe draws itself with dashed strokes while pinned; measurement labels pop in at progress thresholds. Scroll = engineering narrative.

```html
<section class="hero" data-hero="blueprint">
  <svg viewBox="0 0 900 500" aria-hidden="true">
    <g stroke="currentColor" fill="none" stroke-linecap="round">
      <rect data-draw x="80" y="80" width="500" height="340" rx="12" stroke-dasharray="6 6"/>
      <path data-draw d="M80 180 H580" />
      <path data-draw d="M80 300 H580" />
      <circle data-draw cx="700" cy="250" r="90"/>
      <path data-draw d="M580 250 H610"/>
    </g>
    <g class="bp-labels" font-family="monospace" font-size="12">
      <text class="bp-label" x="80" y="70">NAV / 64px</text>
      <text class="bp-label" x="700" y="140">CTA ZONE</text>
    </g>
  </svg>
</section>
```

```js
function blueprintHero(scope) {
  prepDraw(scope);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope, start: 'top top', end: '+=140%',
      scrub: 0.5, pin: true, anticipatePin: 1
    }
  });

  tl.to(scope.querySelectorAll('[data-draw]'), {
      strokeDashoffset: 0, stagger: 0.2, ease: 'none'
    })
    .from(scope.querySelectorAll('.bp-label'), {
      opacity: 0, y: 10, stagger: 0.15
    }, '<0.3');
}
```

**Detailing:** dash pattern (`6 6`) + draw-on = technical drawing language. **Caution:** prep `getTotalLength` before the timeline or scrubbing shows partial strokes on refresh.

---

### 08 · Pinned Horizontal Hero
**Concept:** Vertical scroll drives horizontal travel through hero panels — a narrative corridor.

```html
<section class="hero" data-hero="horizontal">
  <div class="h-track">
    <article class="h-panel"><h1 data-split>Chapter one</h1></article>
    <article class="h-panel"><h2 data-split>Chapter two</h2></article>
    <article class="h-panel"><h2 data-split>Ship it</h2></article>
  </div>
  <div class="h-progress" aria-hidden="true"></div>
</section>
```

```js
function horizontalHero(scope) {
  const track = scope.querySelector('.h-track');

  gsap.to(track, {
    xPercent: -100 * (track.children.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: scope, pin: true, scrub: 1,
      end: () => '+=' + (track.scrollWidth - window.innerWidth),
      invalidateOnRefresh: true
    }
  });

  // Progress rule (SVG detailing: growing line)
  gsap.fromTo(scope.querySelector('.h-progress'), 
    { scaleX: 0 }, {
    scaleX: 1, transformOrigin: 'left center', ease: 'none',
    scrollTrigger: { trigger: scope, pin: true, scrub: 1,
      end: () => '+=' + (track.scrollWidth - window.innerWidth) }
  });
}
```

**Detailing:** a thin `scaleX` progress rule (not a dot) — editorial, zero-graphics solution.  
**Critical:** `invalidateOnRefresh: true` + function-based `end` keeps pin length correct on resize.

---

## 6. Composition Recipes

| Recipe | Stack | Eyebrow Pairing (prior lib) |
|--------|-------|------------------------------|
| **SaaS Launch** | 01 Kinetic + 05 Aurora grain | Status Dot Indicator |
| **Dev Tool** | 07 Blueprint + mono kicker | Monospace Annotation |
| **Agency Portfolio** | 03 Text-Mask + 02 Scribble | Hand-Drawn Accent |
| **Product Launch** | 08 Horizontal + counters | Numbered Editorial Index |
| **AI/Infra Brand** | 06 Orbit + 05 Aurora | Slash Category Path |
| **Consumer App** | 04 Blob + 01 Kinetic | Highlight Marker |

---

## 7. Token Schema (for AI generation)

```yaml
hero_component:
  layout: centered | split | full-bleed | pinned-corridor
  entrance:
    type: stagger-chars | mask-reveal | draw-in | scale-in
    easing: expo.out | power3.out
    stagger: 0.03–0.12
  scroll_behavior:
    mode: none | parallax | scrub-draw | pin | pin-horizontal
    scrub_lerp: 0.5–1.0
  ambient_layer:
    type: none | turbulence | gradient-mesh | orbit | grain
    blend: screen | normal
  svg_detailing: [stroke-draw, clip-mask, displacement, grain, dashed-blueprint]
  a11y:
    reduced_motion: static-final-state
    decorative_svg: aria-hidden
    split_text: aria-label on parent
  perf:
    budget: transform-opacity-only
    will_change: animated-layers-only
    refresh: after-fonts-ready
```

---

## 8. Performance Checklist

- [x] Animate **`transform` and `opacity` only** — never `top/left/width`
- [x] `scrub: 0.5–1` (lerped) over `scrub: true` (raw) — smoother feel, same cost
- [x] `will-change: transform` on persistent layers only; remove after one-shot animations
- [x] Blur radii <= 100px; grain via SVG filter, not `background-image` tiles
- [x] One pinned hero per page — pins hijack scroll physics
- [x] `ScrollTrigger.refresh()` after fonts + images; `invalidateOnRefresh` on resize-dependent values

## 9. A11y Checklist

- [x] `prefers-reduced-motion` -> all entrances resolve to final state, ambient loops disabled
- [x] All decorative SVG -> `aria-hidden="true"`
- [x] Split text -> `aria-label` on parent, `aria-hidden` on chars
- [x] Meaningful SVG (text-mask scene) -> `role="img"` + `aria-label`
- [x] Contrast survives motion: text never animates over low-contrast mid-states longer than 400ms

---

> **Pro rule:** The best heroes combine **one entrance** (what arrives), **one scroll behavior** (how it leaves), and **one ambient layer** (why it's alive). Three motions per hero — anything more is noise, not craft.

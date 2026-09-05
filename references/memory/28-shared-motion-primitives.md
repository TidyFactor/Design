# 28 · Shared Motion Primitives & Utilities
<!-- last-verified: 2026-09-05 -->

> Cross-cutting foundation modules for the TidyFactor Page-Composition Library. Build once, use everywhere across Heroes (Vol 02), Transitions (Vol 03), Features (Vol 04), and CTAs (Vol 05).

---

## 1. Foundation Architecture

All dynamic animations register within a centralized, accessible runtime environment:

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

// Global central guard — all scrub and dynamic choreographies live inside
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', (context) => {
  initPageAnimations();
});

// Font metrics changes trigger layout shift → refresh ScrollTrigger
document.fonts.ready.then(() => ScrollTrigger.refresh());
```

```css
/* Universal reduced-motion fallback: resolve immediately to final state */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  [data-reveal], [data-split] .char {
    opacity: 1 !important;
    transform: none !important;
  }
  [data-draw] {
    stroke-dashoffset: 0 !important;
  }
}
```

---

## 2. The 7 Core Motion Primitives

### 2.1 — Easing Token Set
Standardized easing curves aligned with physical velocity and premium interaction:
- **`expo.out`**: Decisive, sharp entrance with long cinematic decay (headlines, hero characters, crest unfolds).
- **`power3.out`**: Smooth, natural deceleration (subheadlines, modals, popovers).
- **`power2.in`**: Accelerating exit (curtain split panels, dismissals).
- **`sine.inOut`**: Infinite ambient breathing loops (aurora blobs, turbulence drifts).
- **`scrub: 0.5–0.6`**: Physical inertia damping for scroll-linked parameters (never `scrub: true` which feels robotic and raw).

---

### 2.2 — SVG Draw Utility (`prepDraw` & `drawIn`)
Initializes and reveals any SVG vector stroke without external dependencies:

```js
/**
 * Prepares path for stroke-dash animation by calculating exact arc length.
 * Must run before timelines or layout paints.
 */
function prepDraw(scope = document) {
  scope.querySelectorAll('[data-draw]').forEach(path => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });
}

/**
 * Animates stroke reveal.
 */
function drawIn(paths, opts = {}) {
  return gsap.to(paths, {
    strokeDashoffset: 0,
    ease: 'none',
    stagger: 0.12,
    ...opts
  });
}
```

---

### 2.3 — Accessible Character Splitter (`splitChars`)
Splits text into animated character spans while strictly preserving 100% accessibility for screen readers:

```js
/**
 * Character splitter with accessibility contract:
 * Parent gets aria-label with full string; individual chars are aria-hidden.
 */
function splitChars(el) {
  const text = el.textContent;
  el.innerHTML = '';
  el.setAttribute('aria-label', text); // a11y: read as single coherent word/sentence
  return [...text].map(ch => {
    const span = document.createElement('span');
    span.className = 'char';
    span.setAttribute('aria-hidden', 'true'); // a11y: ignore individual letters
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(span);
    return span;
  });
}
```

---

### 2.4 — Depth Parallax System (`data-speed`)
Standardized multi-layer depth engine driven by `data-speed` factors (0.2 = distant background, 1.0 = baseline, 1.5 = foreground):

```js
function initDepthParallax(scope = document) {
  scope.querySelectorAll('[data-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.5;
    const triggerSection = el.closest('section') || el.parentElement;
    gsap.to(el, {
      yPercent: -20 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}
```

---

### 2.5 — Scroll Progress Primitive
Universal progress rail and indicator utility for section headers, reading meters, and navigation spines:

```js
function initScrollProgress(barElement, triggerScope) {
  gsap.fromTo(barElement, 
    { scaleX: 0 }, 
    {
      scaleX: 1,
      transformOrigin: 'left center',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerScope,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    }
  );
}
```

---

### 2.6 — Numeric Counter Module (`data-count`)
Smooth count-up animations with formatting and zero layout shift:

```js
function initCounters(scope = document) {
  scope.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      snap: { val: 1 },
      onUpdate: () => {
        el.textContent = Math.round(proxy.val).toLocaleString();
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      }
    });
  });
}
```

---

### 2.7 — Parametric Wave Generator (`wavePath`)
Token-driven cubic bezier seam generator for seamless SVG transitions (inherited by Vol 03):

```js
function wavePath({ w = 1440, h = 120, cycles = 2, amp = 38, phase = 0 } = {}) {
  const mid = h / 2;
  const seg = w / cycles;
  let d = `M0 ${mid}`;
  for (let i = 0; i < cycles; i++) {
    const x = i * seg;
    const peak = mid + ((i + phase) % 2 ? amp : -amp);
    d += ` C ${(x + seg * 0.36).toFixed(1)} ${peak}, ${(x + seg * 0.64).toFixed(1)} ${peak}, ${x + seg} ${mid}`;
  }
  return `${d} L${w} ${h} L0 ${h} Z`;
}
```

---

## 3. Performance & A11y Rules

1. **Transform and Opacity Only**: Never animate `top`, `left`, `width`, or `height`.
2. **`margin-bottom: -1px` Invariant**: Apply to all divider SVGs to kill sub-pixel seam rendering.
3. **Tabular Numerals**: Apply `font-variant-numeric: tabular-nums;` to all elements running `initCounters()`.
4. **Invalidate On Refresh**: Function-based values in ScrollTrigger triggers must specify `invalidateOnRefresh: true` for clean window resize recalculation.

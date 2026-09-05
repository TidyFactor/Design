# 28 · Shared Motion Primitives & Utilities
<!-- last-verified: 2026-09-05 -->

> Cross-cutting foundation modules for the TidyFactor Page-Composition Library. Build once, use everywhere across Heroes, Transitions, Features, Preloaders, and CTAs.

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
  [data-reveal], [data-split] .char, [data-split-words] .word {
    opacity: 1 !important;
    transform: none !important;
  }
  [data-draw] {
    stroke-dashoffset: 0 !important;
  }
}
```

---

## 2. The 10 Core Motion Primitives

### 2.1 — Easing Token Set
Standardized easing curves aligned with physical velocity and premium interaction:
- **`expo.out`**: Decisive, sharp entrance with long cinematic decay (headlines, hero characters, crest unfolds).
- **`power3.out`**: Smooth, natural deceleration (subheadlines, modals, popovers).
- **`power2.in`**: Accelerating exit (curtain split panels, dismissals).
- **`sine.inOut`**: Infinite ambient breathing loops (aurora blobs, turbulence drifts).
- **`back.out(1.4)`**: Gentle spring-back for kinetic word rises and trust badges.
- **`scrub: 0.5–0.7`**: Physical inertia damping for scroll-linked parameters (never `scrub: true` which feels robotic).

---

### 2.2 — SVG Draw Utility (`prepDraw` & `drawIn`)
Initializes and reveals any SVG vector stroke without external dependencies:

```js
function prepDraw(scope = document) {
  scope.querySelectorAll('[data-draw]').forEach(path => {
    const len = path.getTotalLength ? path.getTotalLength() : 350;
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

---

### 2.3 — Accessible Latin Character Splitter (`splitChars`)
Splits Latin/English text into character spans while preserving accessibility:

```js
function splitChars(el) {
  const text = el.textContent;
  el.innerHTML = '';
  el.setAttribute('aria-label', text); // a11y: announce full text
  return [...text].map(ch => {
    const span = document.createElement('span');
    span.className = 'char';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(span);
    return span;
  });
}
```

---

### 2.4 — Accessible Word Splitter (`splitWords`) for Cursive & Arabic Typography
> **Critical Invariant**: Never use character splitting (`splitChars`) on Arabic, Urdu, Persian, or cursive scripts. Breaking letters apart destroys ligatures and word silhouettes. Always use `splitWords`:

```js
/**
 * Splits Arabic or cursive text into accessible animated word spans.
 * Preserves ligatures and ensures screen readers announce the full cohesive string.
 */
function splitWords(el) {
  if (!el) return [];
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text); // a11y: screen readers read full cohesive title
  const words = text.split(/\s+/);
  el.innerHTML = '';
  return words.map(w => {
    const span = document.createElement('span');
    span.className = 'word';
    span.setAttribute('aria-hidden', 'true'); // a11y: decorative split
    span.innerHTML = w + '&nbsp;';
    el.appendChild(span);
    return span;
  });
}
```

---

### 2.5 — Depth Parallax System (`data-speed`)
Standardized multi-layer depth engine driven by `data-speed` factors (0.2 = background, 1.0 = baseline, 1.5 = foreground):

```js
function initDepthParallax(scope = document) {
  scope.querySelectorAll('[data-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.5;
    const triggerSection = el.closest('section') || el.parentElement;
    gsap.to(el, {
      yPercent: -22 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.75
      }
    });
  });
}
```

---

### 2.6 — Numeric Counter Module (`data-count`)
Smooth count-up animations with formatting and zero layout shift:

```js
function initCounters(scope = document) {
  scope.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: target,
      duration: 2.0,
      ease: 'power2.out',
      snap: { val: 1 },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(proxy.val)}${suffix}`;
      }
    });
  });
}
```

---

### 2.7 — Parametric Wave Generator (`wavePath`)
Token-driven cubic bezier seam generator for seamless SVG transitions:

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

### 2.8 — High-Performance 3D Perspective Card Tilt (120fps RAF)
Universal multi-card physical depth tilt with specular radial spotlight sheen across both Light and Dark themes:

```js
/**
 * 3D Perspective Card Tilt across all bento, credential, and book cards.
 * Uses requestAnimationFrame throttling and GSAP auto-overwrite for silky 120fps motion.
 */
function init3DCardTilt(scope = document) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cards = scope.querySelectorAll(
    '.bento-card, .credential-card, .initiative-card, .book-card, .timeline-card, .card'
  );

  cards.forEach(card => {
    if (card._hasTiltBound) return;
    card._hasTiltBound = true;

    let cardRaf = null;
    let cardEvent = null;

    const onCardMove = () => {
      cardRaf = null;
      if (!cardEvent) return;
      const rect = card.getBoundingClientRect();
      const xPercent = (cardEvent.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (cardEvent.clientY - rect.top) / rect.height - 0.5;

      // Specular spotlight CSS variables
      card.style.setProperty('--mouse-x', `${cardEvent.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${cardEvent.clientY - rect.top}px`);

      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotationY: xPercent * 10,
          rotationX: -yPercent * 10,
          y: -5,
          transformPerspective: 900,
          duration: 0.25,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
    };

    card.addEventListener('mousemove', (e) => {
      cardEvent = e;
      if (!cardRaf) cardRaf = requestAnimationFrame(onCardMove);
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      if (cardRaf) { cancelAnimationFrame(cardRaf); cardRaf = null; }
      cardEvent = null;
      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotationY: 0, rotationX: 0, y: 0,
          duration: 0.5, ease: 'power2.out', overwrite: 'auto'
        });
      }
    });
  });
}
```

---

### 2.9 — Page Preloader Orchestration & Curtain-Lift Engine
Orchestrates a progressive counter with font/DOM readiness, exiting via curtain-lift and triggering hero entrance in sync:

```js
/**
 * Progressive Preloader Engine with Curtain-Lift and Hero Synchronization
 */
function initPagePreloader(onComplete) {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) { if (typeof onComplete === 'function') onComplete(); return; }

  const progressBar = document.getElementById('preloaderProgressBar');
  const percentEl = document.getElementById('preloaderPercent');
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentProgress = 0, isLoaded = false, finished = false;

  const updateProgress = (target, speed, cb) => {
    const step = () => {
      if (currentProgress < target) {
        currentProgress += Math.min(target - currentProgress, Math.random() * 4 + 1.8);
        const rounded = Math.round(currentProgress);
        if (progressBar) progressBar.style.width = `${rounded}%`;
        if (percentEl) percentEl.textContent = `${rounded}%`;
        setTimeout(step, speed);
      } else if (cb) cb();
    };
    step();
  };

  const finishPreloader = () => {
    if (finished) return;
    finished = true;
    currentProgress = 100;
    if (progressBar) progressBar.style.width = '100%';
    if (percentEl) percentEl.textContent = '100%';

    setTimeout(() => {
      preloader.classList.add('is-loaded');
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, REDUCED_MOTION ? 50 : 220);
      }
      setTimeout(() => {
        preloader.style.display = 'none';
        preloader.setAttribute('aria-hidden', 'true');
      }, 900);
    }, REDUCED_MOTION ? 60 : 350);
  };

  updateProgress(85, 22, () => { if (isLoaded) updateProgress(100, 14, finishPreloader); });

  const markReady = () => {
    isLoaded = true;
    if (currentProgress >= 80) updateProgress(100, 14, finishPreloader);
  };

  if (document.readyState === 'complete') markReady();
  else window.addEventListener('load', markReady, { once: true });

  setTimeout(() => { if (!finished) finishPreloader(); }, 2200); // Safety fallback guard
}
```

---

### 2.10 — Non-Blocking Scroll Reveal (`initScrollReveal`)
Reveals off-screen elements without locking transforms or trapping opacity:

```js
function initScrollReveal() {
  const revealElements = document.querySelectorAll('section:not(.hero-section) [data-reveal]');
  if (!revealElements.length) return;

  const vh = window.innerHeight || document.documentElement.clientHeight;

  revealElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.92) {
      el.classList.add('is-revealed');
      return;
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const delay = (index % 3) * 0.08;
      gsap.fromTo(el, 
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true, onEnter: () => el.classList.add('is-revealed') },
          clearProps: 'opacity,transform' // CRITICAL: leaves element with 0 inline lock
        }
      );
    } else {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            entry.target.style.opacity = '';
            entry.target.style.transform = '';
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '100px 0px 40px 0px', threshold: 0.05 });
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      observer.observe(el);
    }
  });
}
```

---

## 3. Performance & A11y Rules

1. **Transform and Opacity Only**: Never animate `top`, `left`, `width`, or `height`.
2. **`margin-bottom: -1px` Invariant**: Apply to all divider SVGs to kill sub-pixel seam rendering.
3. **Tabular Numerals**: Apply `font-variant-numeric: tabular-nums;` to all elements running `initCounters()`.
4. **Invalidate On Refresh**: Function-based values in ScrollTrigger triggers must specify `invalidateOnRefresh: true` for clean window resize recalculation.
5. **ClearProps on Typography Complete**: Text elements animated via GSAP must clear transforms via `onComplete: () => gsap.set(targets, { clearProps: 'transform' })` to preserve crisp subpixel font antialiasing.
6. **Zero-Lock ScrollReveal**: Never set `transform: translateY(0) !important` on `.is-revealed`. Use GSAP `clearProps: 'opacity,transform'` so card hover lifts and 3D tilts remain functional.
7. **HTMX Dynamic Swap Hook**: Always wire `htmx:afterSwap` to animate newly swapped cards, re-bind 3D tilt listeners, and refresh `ScrollTrigger`.
8. **Zero CDN Invariant**: Vendor GSAP and ScrollTrigger locally inside `assets/js/vendor/` to prevent offline or connection stalls.

---

## 4. Critical Motion Pitfalls & Anti-Patterns

1. **The `!important` Transform Trap**: Never add `transform: translateY(0) !important;` to reveal classes. It permanently overrides all `:hover` translateY lifts and all 3D mousemove rotations.
2. **Character Splitting Arabic Text**: Breaking connected cursive letters destroys Arabic orthography. Always use word-based splitting (`splitWords`).
3. **Transition-GSAP Fighting**: Never place CSS `transition: transform` on an element whose `x`, `y`, or rotation is driven by GSAP on `mousemove`. It creates severe frame lag and jitter.
4. **Un-throttled Mouse Tracking**: Direct DOM style manipulation inside raw `mousemove` causes layout thrashing. Always throttle via `requestAnimationFrame` with GSAP `overwrite: 'auto'`.

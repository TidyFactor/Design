# Motion Principles — Reference for `motion`
<!-- last-verified: 2026-09-01 -->

Adapted from classic animation principles, applied to UI motion rather than character animation.

---

## 1. Core Principles
- **Staging**: One focal change communicated at a time. Stagger card reveals by ~60-80ms.
- **Anticipation**: Small pre-state before a bigger change helps the eye track what's about to happen.
- **Ease-out for entrances, ease-in for exits**: Natural deceleration on entry, acceleration on exit.
- **Secondary motion**: Delayed subtle trail (e.g. shadow settling a beat later).
- **Restraint**: An orchestrated single moment lands harder than scattered effects everywhere.

---

## 2. Cursor Spotlight & Ambient Glow Engine (Interactive Depth)
- **Per-Card Cursor Spotlight & 3D Perspective Tilt (120fps)**:
  - Dynamically track `--mouse-x` and `--mouse-y` via `getBoundingClientRect()` on `.bento-card`, `.card`, `.book-card`, `.credential-card`.
  - Reveal a subtle `radial-gradient` (350-420px radius) in both light mode (gold tint) and dark mode (emerald sheen).
  - Apply physical 3D perspective tilt (`perspective(900px)`, `rotateX`, `rotateY`, `translateY(-4px)`) throttled via `requestAnimationFrame` with GSAP `overwrite: 'auto'` to ensure silky 120fps performance without layout thrashing.
- **Viewport Ambient Spotlight**:
  - Desktop-only (`min-width: 992px`), single fixed layer driven by `requestAnimationFrame` and `translate3d(x, y, 0)`.
  - Illuminates the underlying papyrus, granite, or obsidian texture with zero layout thrashing.
  - Must automatically disable under `prefers-reduced-motion: reduce`.

---

## 3. SVG Stroke Dash & Parallax Choreography

### A. SVG Stroke Dash Tracing (`.lotus-stroke-animated`)
- For cultural emblems, watermarks, and architectural line art, set `strokeDasharray` and `strokeDashoffset` equal to the total path perimeter (e.g. `1200-1600px` or `.getTotalLength()`).
- Animate `strokeDashoffset: 0` using GSAP timeline `power2.inOut` with micro-staggers (100-150ms) across petals/lines during initial page load.

### B. Interactive Parallax with Optical Counter-Movement (Desktop $\ge 992px$)
- Foreground hero visual frames receive soft directional tilt (`xOffset * 0.5`, `yOffset * 0.5`).
- Deep background watermarks and particles receive inverted counter-movement (`-xOffset * 0.8`, `-yOffset * 0.8`) with longer easing durations (1.2s vs 0.8s) to establish multi-plane spatial depth.
- On `mouseleave`, smoothly tween all planes back to origin `(0, 0)` via `power2.out`.

---

## 4. Page Preloader & Stage Synchronization
- **Progressive Counter Engine**:
  - Simulate progressive ramp from 0% to ~85% during initial parsing, finishing to 100% on `document.fonts.ready` + `window.load`.
- **Curtain-Lift Transition**:
  - On 100%, slide preloader upward (`transform: translateY(-100%)`) with `cubic-bezier(0.7, 0, 0.2, 1)`.
- **Hero Kinetic Trigger**:
  - Call `initSovereignHeroMotion()` strictly on preloader exit, ensuring hero title words rise and flourish paths draw right as the curtain clears the stage.
- **Safety Fallback Guard**:
  - Always enforce `setTimeout(finishPreloader, 2200)` to prevent trapping users under slow networks or blocked assets.

---

## 5. Critical Motion Anti-Patterns & Invariants
1. **The `!important` Transform Trap**: Never add `transform: translateY(0) !important;` to `.is-revealed` classes. It permanently kills `:hover` lifts and 3D card tilt rotations. Use `clearProps: 'opacity,transform'` in GSAP instead.
2. **Text Antialiasing Degradation**: Animated text remaining under CSS transform renders as a GPU texture with blurred subpixel edges. Always clear typography transforms with `onComplete: () => gsap.set(targets, { clearProps: 'transform' })`.
3. **HTMX Dynamic Swap Amnesia**: Hypermedia-swapped elements lack event listeners and initial styles. Always wire an `htmx:afterSwap` event listener to run entrance timelines, re-bind 3D tilts, and refresh `ScrollTrigger`.
4. **Transition-GSAP Fighting**: Never place CSS `transition: transform` on an element whose `x`, `y`, or rotation is driven by GSAP on `mousemove`. It creates severe frame lag and jitter.

---

## 6. Non-negotiable: `prefers-reduced-motion`
Every entrance, scroll, parallax, or ambient spotlight effect in `motion.js` must check `window.matchMedia('(prefers-reduced-motion: reduce)')` and fall back to instant or opacity-only transitions globally.

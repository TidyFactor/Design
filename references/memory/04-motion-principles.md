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
- **Per-Card Cursor Spotlight**:
  - Dynamically track `--mouse-x` and `--mouse-y` via `getBoundingClientRect()` on `.bento-card`, `.card`, and showcase tiles.
  - Reveal a subtle `radial-gradient` (350-400px radius) in dark mode to illuminate surface borders and textures.
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

## 4. Non-negotiable: `prefers-reduced-motion`
Every entrance, scroll, parallax, or ambient spotlight effect in `motion.js` must check `window.matchMedia('(prefers-reduced-motion: reduce)')` and fall back to instant or opacity-only transitions globally.

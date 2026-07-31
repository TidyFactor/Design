# Command: `motion` — Shared Animation, Choreography & Micro-Delight

Runtime entry point for configuring global motion tokens, scroll-reveals, and micro-delight interactions in `motion.js` and `interactions.js`.

## 4-Tier Whimsy & Micro-Interaction Taxonomy

Incorporate purposeful micro-interactions across 4 operational tiers to give prototypes distinct brand character without sacrificing usability or accessibility:

1. **Tier 1: Subtle Whimsy (Default UI Feedback)**
   - Micro-lifts on hover (`transform: translateY(-2px)`), smooth button scale on click, subtle focus ring glows.
   - Defined in `tokens.css` and `components.css`.
2. **Tier 2: Interactive Whimsy (Task Celebrations)**
   - Sparkle animation on form validation, smooth checkmark draw on task completion, progress step rewards.
   - Defined in `interactions.js`.
3. **Tier 3: Discovery Whimsy (Exploration Rewards)**
   - Subtle Easter eggs, custom keyboard shortcuts (`⌘+K`, `?` modal), hidden theme toggles.
4. **Tier 4: Contextual Whimsy (Charming Microcopy & States)**
   - Playful empty states with micro-illustrations, empathetic 404 error states, animated loading dot pulses.

## Advanced Motion Recipes & Fixed Z-Stack Layers

### Fixed Z-Stack Background Layers
Implement 5 persistent background layers behind page content for ambient depth:
- `#ambient` — Fullscreen background color, GSAP-tweened per section (`onEnter`/`onEnterBack`).
- `#glow` — Soft radial lighting; opacity animates based on active section.
- `#vignette` — Subtle edge darkening to direct visual focus toward center.
- `#grain` — SVG fractal noise data-URI film grain overlay with low opacity.
- `#progress` — Thin accent scroll-progress bar fixed at top of viewport.

### Ambient Section Background Color Tweening
```javascript
ScrollTrigger.create({
  trigger: section,
  onEnter: () => gsap.to('#ambient', { backgroundColor: section.dataset.ambient, duration: 1.1 }),
  onEnterBack: () => gsap.to('#ambient', { backgroundColor: section.dataset.ambient, duration: 1.1 })
});
```

### Canvas Scroll-Film Engine
For smooth video-like scroll reveals without H.264 playback stutter, draw pre-rendered frame sequences (`assets/seq/f000.jpg`) directly onto a fixed `<canvas>` element mapped to scroll progress.

## Global Motion Rules

1. **Token Discipline**: Every duration (`--duration-fast`, `--duration-base`) and easing curve (`--ease-out-quint`) must reference a CSS variable in `tokens.css`.
2. **Accessibility & Reduced Motion**: `prefers-reduced-motion: reduce` must automatically disable keyframe translates and scale bounces across all pages, falling back to simple opacity fades.
3. **Single Shared Script**: All interaction choreography lives inside `design-system/motion.js` and `design-system/interactions.js` — zero per-page JS scripts allowed.

## Output Convention

```
design-system/
├── motion.js          ← Shared entrance reveals & scroll choreography
├── interactions.js    ← Tier 1-4 micro-delight & component interactions
└── tokens.css         ← Motion easings & duration tokens
```

## Checklist

- [ ] Micro-interactions implemented across Tier 1-4 Whimsy taxonomy
- [ ] Every motion duration/easing traces to a token in `tokens.css`
- [ ] `prefers-reduced-motion` compliance enforced globally across all tiers
- [ ] No per-page motion scripts exist in `pages/`

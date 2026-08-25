# Memory: architecture (Design System & Prototype Macrostructure)

Defines the zero-build design system file tree, component encapsulation, and 7 lifecycle stages.

---

## 📁 Standard Prototype Directory Layout

```
project-root/
├── brand.json                    # Single source of truth for design tokens & identity
├── design-system/
│   ├── tokens.css                # CSS Custom Properties (Colors, Radii, Shadows, Typography)
│   ├── base.css                  # Reset, font imports, and typography scale
│   ├── components/               # Pure reusable component wrappers (zero page styling)
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── navigation.css
│   │   ├── forms.css
│   │   └── modals.css
│   └── motion.css                # Easing curves, transitions, reduced-motion rules
├── pages/                        # Individual HTML pages (markup only, loads design-system/)
│   ├── index.html
│   ├── dashboard.html
│   └── settings.html
└── assets/                       # Compressed SVGs, WebP icons, and optimized imagery
```

---

## 🏛️ 7 Lifecycle Stages

1. **Discovery**: Reference study, mood extraction, and 3-question CDL brief resolution.
2. **Foundation**: CSS foundation locking, brand tokens, typography pairing, palette calibration.
3. **Architecture**: Layout archetypes (L1–L4), navigation (N1–N9), footer (Ft1–Ft8) catalog.
4. **Components**: 8-state wrappers (Default, Hover, Active, Focus, Disabled, Loading, Error, Success).
5. **Motion**: Kinetic principles, transition choreography, and reduced-motion fallback.
6. **Quality**: 7-axis pre-emit self-critique, anti-slop checks, and token drift audits.
7. **Delivery**: Developer handoff specs, Figma token exports, and static deployment.

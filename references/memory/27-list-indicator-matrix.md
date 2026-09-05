# 27 · List Indicator & Trust Bullet Architecture Matrix (12 Professional Alternatives)
<!-- last-verified: 2026-09-05 -->

The **Generic Blue/Green Checkmark Inside a Circle** (`fa-check-circle` or green emoji check) is an overused cliché on pricing pages and feature lists. This matrix provides **12 production-grade list markers, trust indicators, and bullet architectures** with full CSS implementations, SVG detailing, Arabic RTL rules, and accessibility standards.

---

## 1. Quick-Reference Matrix

| # | Component | Technical Class | Visual Weight | Personality | Best Context |
|---|-----------|----------------|--------------|-------------|--------------|
| 01 | Diamond Lozenge | Geometric Minimal | ●○○ | Refined / Elegant | Luxury, jewelry, editorial |
| 02 | Editorial Gliding Dash | Typographic Pointer | ●○○ | Unhurried / Literary | Long-form, essays, monographs |
| 03 | Monospace Step Index | Tabular Numerical | ●●○ | Dev-Native / Structured | Documentation, APIs, setup steps |
| 04 | Status Beacon Dot | Radiant Optical Dot | ●●○ | Live / Operational | Service SLAs, active capabilities |
| 05 | Key-Value Accent Bar | Structural Border Line | ●●○ | Clean / Institutional | Enterprise feature grids |
| 06 | Shield / Crest Micro-Insignia | Trust Vector Stamp | ●●○ | Authoritative / Compliant | Legal, medical, cybersecurity |
| 07 | Chevron Rail Pointer | Directional Arrowhead | ●○○ | Dynamic / Forward | Feature roadmaps, next steps |
| 08 | Crosshair Plus Pip | Telemetry Crosshair | ●○○ | Technical / Precise | Industrial systems, specs |
| 09 | Chamfered Checkmark Box | Angular Vector Tag | ●●○ | Robust / Affirmative | Modern SaaS pricing, checkouts |
| 10 | Hyphen-Bullet Classic Rule | Archival Typography | ●○○ | Classical / Academic | Bibliographies, historical notes |
| 11 | Dual-Tone Arrowhead Lockup | Vector Velocity | ●●○ | Fast / Transformative | Growth, speed, high performance |
| 12 | Numbered Roman Sequence | Classical Numeral | ●●○ | Sovereign / Governance | Legal clauses, bylaws, constitutions |

---

## 2. Universal Token Schema

```yaml
bullet_variant:
  type: diamond_lozenge | gliding_dash | mono_index | status_beacon | accent_bar | shield_insignia | chevron_rail | crosshair_plus | chamfered_box | classic_hyphen | dual_arrow | roman_sequence
  size: 14px–18px
  alignment: align-items: baseline | flex-start
  offset_top: 2px–4px (to center with first line of cap height)
  color:
    primary: "{brand | success | gold | text-muted}"
    surface: transparent | subtle-tint
  spacing_inline: 0.75rem–1rem (gap between marker and text)
  a11y:
    semantic: <ul><li> or <ol><li>
    custom_markers: list-style: none; with aria-hidden="true" on vector pip
```

---

## 3. Code Implementations & CSS Invariants

### 01 · Diamond Lozenge (`◆` / `◇`)
* **Concept**: Clean 8x8px rotated square diamond. Much lighter and more refined than a heavy circular check.
```html
<ul class="list-diamond">
  <li>
    <span class="bullet-diamond" aria-hidden="true">◆</span>
    <span>Sovereign intelligence architecture without cloud dependencies.</span>
  </li>
</ul>
```
```css
.list-diamond { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.875rem; }
.list-diamond li { display: flex; align-items: baseline; gap: 0.75rem; }
.bullet-diamond {
  color: var(--brand-accent, #C98818);
  font-size: 0.7em;
  transform: translateY(-0.1em);
}
```

### 02 · Editorial Gliding Dash (`—›`)
* **Concept**: Typographic em-dash flowing into an arrow point. Moves 3px forward on parent hover.
```html
<li class="list-gliding-item">
  <span class="gliding-dash" aria-hidden="true">—›</span>
  <span>Continuous peer-reviewed clinical research.</span>
</li>
```
```css
.list-gliding-item { display: flex; align-items: baseline; gap: 0.75rem; }
.gliding-dash {
  font-family: monospace; font-weight: bold;
  color: var(--brand-primary);
  transition: transform 180ms ease;
}
.list-gliding-item:hover .gliding-dash {
  transform: translateX(4px);
}
[dir="rtl"] .list-gliding-item:hover .gliding-dash {
  transform: translateX(-4px);
}
```

### 03 · Monospace Step Index (`01.`, `02.`)
* **Concept**: Padded 2-digit numerals in a fixed monospace font.
```css
.list-mono-steps {
  counter-reset: mono-counter;
  list-style: none;
}
.list-mono-steps li {
  counter-increment: mono-counter;
  display: flex; align-items: baseline; gap: 0.75rem;
}
.list-mono-steps li::before {
  content: counter(mono-counter, decimal-leading-zero) ".";
  font-family: monospace; font-size: 0.85em; font-weight: 700;
  color: var(--brand-accent);
}
```

### 05 · Key-Value Accent Bar
* **Concept**: A simple 3px solid vertical accent bar aligned with the text block.
```css
.list-accent-bar li {
  padding-inline-start: 1rem;
  border-inline-start: 3px solid var(--brand-primary);
  margin-block: 0.75rem;
}
```

### 09 · Chamfered Checkmark Box
* **Concept**: Instead of a generic circle, use an architectural 18x18px box with 45-degree chamfered corners and an inline SVG check.
```html
<li class="list-chamfer-check">
  <span class="chamfer-box" aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </span>
  <span>Zero vendor lock-in with standard SQLite/MySQL backend.</span>
</li>
```
```css
.chamfer-box {
  width: 18px; height: 18px; display: inline-flex;
  align-items: center; justify-content: center;
  background: var(--brand-primary-light); color: var(--brand-primary);
  clip-path: polygon(3px 0%, calc(100% - 3px) 0%, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0% calc(100% - 3px), 0% 3px);
  flex-shrink: 0;
  transform: translateY(2px);
}
```

---

## 4. RTL Alignment Contract

1. **Baseline Alignment**:
   - Always pair bullet markers with `align-items: baseline` or `align-items: flex-start` with a `transform: translateY(2px)`. Never use `align-items: center` on multi-line text blocks as the bullet will awkwardly float in the middle of a 3-line paragraph.
2. **Logical Spacing**:
   - Strictly use `padding-inline-start` or `gap`.
3. **Directional Arrowheads**:
   - Ensure pointer vectors (`›`, `→`, `—›`) flip automatically in RTL contexts to always point forward in the reading direction.

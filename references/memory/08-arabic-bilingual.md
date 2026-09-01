# Arabic & Bilingual Design — Reference for `i18n` & RTL Engineering
<!-- last-verified: 2026-09-01 -->

Conventions carried consistently across Alwkala's production work and the rest of the TidyFactor ecosystem (`tidyfactor-design`, `tidyfactor-styler`, `tidyfactor-html`, `tidyfactor-cinematic`) — not generic RTL advice.

---

## 1. Typography & Hierarchy Rules
- **Display / Headings**: **El Messiri** or **Noto Kufi Arabic** — modern, geometric-leaning, high visual presence without breaking script joining.
- **Body / Editorial**: **Tajawal** or **Noto Naskh Arabic** — high legibility at small sizes, wide weight range.
- **Never Amiri for UI/display purposes**: It's a naskh-style text face suited to long-form literary/religious typesetting, not product/marketing UI.
- **Arabic Line Heights**: Display headings need `1.15–1.25`; body text needs `1.65–1.85`.
- **Zero Tracking Deformation**: Never apply negative `letter-spacing` to Arabic headings; it breaks cursive connections and destroys word silhouettes.

---

## 2. Strict Bidi & Logical Properties Contract
- **`<bdi>` Isolation (Mandatory)**: Always wrap embedded LTR content (phone numbers, email addresses, prices, Latin product codes, URLs) in `<bdi dir="ltr">` or `<bdi lang="en">` inside Arabic prose.
- **Tabular Numerals**: Apply `font-variant-numeric: tabular-nums;` and `font-feature-settings: "tnum" 1;` on all metrics, counters, and data tables.
- **Logical CSS Properties**:
  ```css
  /* Required Logical Properties */
  .card {
    padding-inline: var(--space-6);
    margin-inline-start: var(--space-4);
    border-inline-start: 4px solid var(--primary);
    inset-inline-end: 0;
  }
  ```
- **Mirroring Rules**:
  - Mirrors: navigation order, breadcrumbs, form label alignment, directional affordances (back/next arrows).
  - Does NOT mirror: numerals, embedded Latin brand marks, media controls, clocks, and universal marks.

---

## 3. 6 Hero Architectures for Arabic Mode
1. **The Arabic Typographic Monument**: One short Arabic phrase occupies 45–70% of the viewport with a low-contrast heritage material behind it.
2. **The Inscription Aperture**: Content framed through a geometric or vaulted aperture mask.
3. **The Bilingual Editorial Split**: Arabic owns the dominant side with compact Latin metadata opposite.
4. **The Heritage Material Close-Up**: Macro textural study (papyrus, carved relief, woven wool, alabaster) as focal hero image.
5. **The Horizontal Journey**: RTL timeline or cinematic strip traveling from right to left.
6. **The Contemporary Data Constellation**: Maps, coordinates, and telemetry with Arabic typography and tabular numbers.

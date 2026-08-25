# Memory: foundations (Pluggable CSS Foundations Catalog)

Operational rules and tokens for each pluggable CSS foundation layer.

---

## 🛠️ Supported CSS Foundations

| Foundation | Engine | Deliverable Shape | CDN / Runtime |
|---|---|---|---|
| `native` | Vanilla CSS | Custom properties in `design-system/tokens.css` + zero dependency reset | None (Pure CSS) |
| `tailwind` | Utility-First | Configured via `tailwind.config.js` or Tailwind CDN script | `https://cdn.tailwindcss.com` |
| `daisyui` | Semantic Components | Tailwind + DaisyUI component classes | Tailwind CDN + DaisyUI plugin |
| `pico` | Semantic Micro-CSS | Pure HTML semantic tags styled via Pico CSS | `https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css` |
| `hybrid` | Tokens + Utilities | Shared custom properties with micro-utility helpers | Custom bundle |

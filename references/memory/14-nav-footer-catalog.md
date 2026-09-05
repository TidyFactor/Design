# 14 · Navigation & Footer Catalogs

<!-- last-verified: 2026-09-05 -->

Reference catalog for Navigation (N1–N9) and Footer (Ft1–Ft8) components.

## Navigation Archetypes

- **N1: Floating Pill** — Glassmorphic floating navigation pill (`max-w-fit mx-auto`), rounded corners. Ideal for modern SaaS and mobile interfaces.
- **N2: Newspaper Masthead** — Traditional publishing layout with centered brand title, divider rule, and category links below.
- **N3: Brutal Slab** — Stark 4px bottom border, monochrome uppercase labels, sharp edges.
- **N4: Terminal / CLI** — Monospace typography with prompt caret `>` markers on dark background.
- **N5: Edge-Aligned Minimal** — Wordmark aligned hard left, navigation links hard right. Zero center clutter.
- **N6: Split Brand** — Centered brand emblem with links balanced on left and right sides.
- **N7: Double-Decker Utility** — Top notification/language bar paired with main brand header.
- **N8: Vertical Rail** — Fixed left/right navigation rail for web app dashboards.
- **N9: Fullscreen Overlay** — Trigger button opening full-viewport navigation overlay.

---

## 🏛️ Navigation & Header Design Invariants (Strict Quality Bar)

### 1. Zero Emoji Invariant (`No Emojis in Nav/Menu`)
- **Prohibition**: Emojis (e.g. 🏠, 📞, 📚, ⚡) are strictly prohibited in navigation links, headers, submenus, and action controls. Emojis represent an amateur AI-slop anti-pattern.
- **Enforcement**: Use lightweight inline SVG vector icons or ultra-lightweight linear icon sets (Lucide, Feather, Heroicons with 1.5–2px stroke) styled dynamically via `currentColor` or brand tokens.

### 2. Single-Line Discipline (`white-space: nowrap; flex-wrap: nowrap;`)
- **One-Line Invariant**: Navigation items must strictly fit in a single horizontal row on desktop viewports. Multi-line navigation wrapping is unacceptable.
- **Label Conciseness**: Labels must be 1 to 2 words maximum (e.g. `الرئيسية`, `المسيرة`, `المؤلفات`, `المبادرات`, `حاسبة الأسعار`).
- **Stacked Sub-descriptor Option**: If descriptive context is needed, stack a micro-caption (`font-size: 0.7rem`) vertically under the primary title within the link container, preserving compact horizontal width.
- **SEO vs Navigation Separation**: Full explanatory copy and SEO keywords belong in page body content and schema markup—navigation is dedicated exclusively to rapid, intuitive orientation.

### 3. Submenu & Mega Menu Fallback Protocol
- If a project requires more than 5–6 primary destinations, do NOT crowd the header bar.
- **Mandatory Escalation**: Group links into structured **Submenus (Dropdowns)** or an architectural **Mega Menu** with frosted glass backdrops, golden borders, and categorical grouping.

### 4. Mobile-First Navigation & Drawer Architecture (Must Rules)
- **Automatic Viewport Folding**: On screens `< 1024px` or `< 768px`, desktop navigation links must seamlessly fold into a slide-out drawer (`.mobile-drawer`) or bottom sheet.
- **Touch Target Integrity**: Minimum 44×44px hit areas for all hamburger triggers, menu links, and controls (WCAG 2.5.5).
- **Body Scroll Lock**: Automatically lock document scrolling when the mobile drawer is active (`body.menu-open { overflow: hidden; }`).
- **Zero Horizontal Overflow**: No absolute badge or floating frame element may cause horizontal scrolling on mobile viewports (`overflow-x: clip / hidden; width: 100vw;`).
- **Compact Sticky Height**: Mobile header height capped at 52–62px with logo/brand text truncation protection (`text-overflow: ellipsis; white-space: nowrap;`).

### 5. Header Action Controls Cap (Max 3 Controls)
- Header action clusters must not exceed **3 controls maximum** (e.g. Primary CTA + Language Switcher + Theme Toggle).
- All action controls must share geometric harmony (coordinated pill radii, consistent padding, and unified border treatment).

---

## Footer Archetypes

- **Ft1: Mast-Headed** — Giant brand wordmark overlaying top of footer section with multi-column links below.
- **Ft2: Minimal Inline** — Clean single-line layout containing wordmark, links, and copyright notice.
- **Ft3: Colophon / Credits** | Displays build metadata, typography credits, server location, and license.
- **Ft4: Big Statement** | Prominent quote or mission statement block preceding link navigation.
- **Ft5: Letter Close** | Personal signed letter from founder/creator with CTA before footer links.
- **Ft6: Newsletter-First** | Large email signup form occupying primary focal space.
- **Ft7: Marquee Scroll** | Continuous horizontal text ticker banner above secondary links.
- **Ft8: Sitemap Grid** | Comprehensive multi-column link directory with locale and theme switchers.

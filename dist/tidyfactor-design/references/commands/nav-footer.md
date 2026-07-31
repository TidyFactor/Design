# Command: `nav-footer` — Navigation & Footer Archetype Catalogs

Runtime entry point for selecting, customizing, and auditing Navigation (N1–N9) and Footer (Ft1–Ft8) components. Part of the **Architecture** lifecycle phase.

## When to use

- During `init` or `layout` when scaffolding page macrostructure
- When replacing a generic AI nav or footer with a genre-authentic archetype
- When auditing a page for anti-AI navigation/footer tells

## Navigation Catalog (N1–N9)

| ID | Name | Structure | Best For |
|---|---|---|---|
| **N1** | Floating Pill | Glassmorphic floating island (`max-w-fit mx-auto`), rounded-full | SaaS, modern minimal, mobile-first |
| **N2** | Newspaper Masthead | Centered title block top, rule divider, category links row below | Editorial, literary, publishing |
| **N3** | Brutal Slab | Stark thick bottom border (`border-b-4`), uppercase mono text | Industrial, dev tools, brutalist |
| **N4** | Terminal / CLI | Dark background, prompt symbol (`>`), monospace links | Developer tools, CLI apps, tech |
| **N5** | Edge-Aligned Minimal | Wordmark hard-left, navigation hard-right, no center links | Portfolio, creator, luxury |
| **N6** | Split Brand | Emblem center, links distributed evenly left & right | Fashion, luxury, artisan physical goods |
| **N7** | Double-Decker Utility | Top utility bar (announcement/currency/lang), main header below | E-commerce, multi-locale, enterprise |
| **N8** | Vertical Rail | Fixed side navigation bar (collapsed/expanded on hover) | Dashboards, complex web apps |
| **N9** | Fullscreen Overlay | Minimal trigger icon, click expands to full-screen menu modal | High-fashion, artistic showcases |

## Anti-AI Navigation Tell (Auto-Reject Rule #11)
> **The AI Nav**: Wordmark left, 4-5 links center, primary CTA right, 1px bottom border.
> 
> *Rule*: If N1–N9 is not explicitly declared, the nav must use an opinionated layout variance (e.g. N1 floating pill or N5 edge-aligned), never the default AI Nav template.

## Footer Catalog (Ft1–Ft8)

| ID | Name | Structure | Best For |
|---|---|---|---|
| **Ft1** | Mast-Headed | Giant brand display wordmark at top, multi-column grid below | Flagship brands, luxury, editorial |
| **Ft2** | Minimal Inline | Single horizontal line: Wordmark · Links · Copyright | Minimalist, single-page, creator |
| **Ft3** | Colophon / Credits | Technical metadata, font credits, server region, timestamp | Developer tools, design engineering |
| **Ft4** | Big Statement | Huge opinionated quote/tagline block, minimal links below | Personal brand, agency, manifesto |
| **Ft5** | Letter Close | Signed founder letter / closing note + CTA + copyright | Founder-led, indie hacker, newsletter |
| **Ft6** | Newsletter-First | Large email input form taking top 50% of footer | Content, publishing, e-commerce |
| **Ft7** | Marquee Scroll | Infinite scrolling text marquee above standard links | Fashion, agencies, events |
| **Ft8** | Sitemap Grid | Structured multi-section directory grid + locale switcher | Enterprise, SaaS, docs |

## Anti-AI Footer Tell (Auto-Reject Rule #12)
> **The AI Footer**: 4 equal columns (Product, Company, Resources, Legal) + social row + copyright line.
> 
> *Rule*: Reject 4-column equal grids without asymmetric visual hierarchy or distinctive hero elements (e.g. Ft1 giant wordmark or Ft5 letter close).

## Checklist

- [ ] Nav selected from N1–N9 catalog (or explicitly customized)
- [ ] Footer selected from Ft1–Ft8 catalog
- [ ] No generic 4-link center AI nav used
- [ ] No generic 4-column equal AI footer used
- [ ] RTL mirroring rules respected (`localization.mirrorOnRtl` in `brand.json`)

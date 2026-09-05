<div align="center">

# tidyfactor-design `v1.9.0`

**Code-Native UI-Design-Lifecycle-Engine und Anti-Slop Designsystem-Suite für KI-Agenten**

[![npm version](https://img.shields.io/npm/v/@tidyfactor/design.svg?style=for-the-badge&color=0284C7&logo=npm)](https://www.npmjs.com/package/@tidyfactor/design)
[![GitHub Stars](https://img.shields.io/github/stars/TidyFactor/Design.svg?style=for-the-badge&color=EAB308&logo=github)](https://github.com/TidyFactor/Design/stargazers)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg?style=for-the-badge)](LICENSE)
[![Ecosystem](https://img.shields.io/badge/TidyFactor-Skills--LAB-purple.svg?style=for-the-badge)](https://github.com/TidyFactor)
[![Compatibility](https://img.shields.io/badge/Agents-Antigravity%20|%20Claude%20|%20Cursor%20|%20Codex-orange.svg?style=for-the-badge)](SKILL.md)
[![RTL Native Arabic](https://img.shields.io/badge/RTL-Native%20Arabic-emerald.svg?style=for-the-badge)](README.ar.md)
[![Architect Score](https://img.shields.io/badge/Architect%20Score-15%2F15%20Pass%20(100%25)-green.svg?style=for-the-badge)](#-the-15-structural-rules-of-tidyfactor-skills)
[![AI Agents Compatible](https://img.shields.io/badge/AI%20Agents-Universal%20Compatibility-4285F4.svg?style=for-the-badge)](SKILL.md)

[ English ](README.md) • [ العربية ](README.ar.md) • [ فارسی ](README.fa.md) • [ Español ](README.es.md) • [ Português ](README.pt.md) • [ 简体中文 ](README.zh.md) • [ Deutsch ](README.de.md) • [ Français ](README.fr.md)

</div>

---

## 💡 Kernphilosophie: Trennung von Design-Intelligenz und Implementierung

Das fundamentale Prinzip von **TidyFactor Design** besteht in der strikten Trennung von **Design-Wissen und -Intelligenz** von der **technischen Code-Implementierung**:

```
                 DESIGN INTELLIGENCE
                        │
             ┌──────────┴──────────┐
             ↓                     ↓
       Operational Memory       Workflows
             │                     │
             └──────────┬──────────┘
                        ↓
                  AI Agent
                        ↓
                Design System
                        ↓
                  HTML/CSS/JS
                        ↓
                     Audit
                        ↓
                    Handoff
```

Diese Architektur macht die Skill zu einem wiederverwendbaren **Design-Engineering-Betriebssystem**, das deterministisch über unterschiedlichste Projekte hinweg agiert. Anstatt per Prompt unüberlegte Oberflächen zu generieren, führt der KI-Agent einen vollständigen, strukturierten Design-Lebenszyklus aus.

---

## ⚖️ TidyFactor Design vs. Figma: Die Code-Native Alternative

TidyFactor Design ist kein klassisches vektorbasiertes Zeichenwerkzeug, sondern eine **Code-Native Alternative zu Figma**:

| Kriterium | Figma | TidyFactor Design |
|---|---|---|
| **Paradigma** | Visuelles Gestaltungswerkzeug | Code-nativer Design-Workflow |
| **Arbeitsbereich** | Canvas-zentriert | Code-zentriert |
| **Zielgruppe** | Visuelle Designer | KI-Agent + Entwickler + Design-Engineer |
| **Bausteine** | Visuelle Komponenten & Variablen | Design-Tokens + Komponenten + Workflows |
| **Prototyping** | Klickbare Screen-Prototypen | Echte HTML/CSS/JS-Prototypen (Zero-Build-Step) |
| **Handoff** | Manuelle Übergabe Designer → Entwickler | Design und Implementierung in einer einheitlichen Umgebung |
| **Governance** | Manuelle visuelle Prüfung | Mechanische, automatisierte Qualitätsprüfungen |
| **Umfang** | Oberflächengestaltung | Ganzheitliches Design-Lifecycle-Management |

---

## 🧠 Was bedeutet „Operational Memory“?

Das operative Gedächtnis (`references/memory/`) besteht nicht aus abstrakten Texten, sondern aus **anwendbaren Regeln, Matrizen, Schemata und konkreten Restriktionen**:

- **Typografie-Matrix** (`01-typography-matrix.md`): Hierarchien und mathematische Skalen.
- **Layout-Archetypen** (`02-layout-archetypes.md`): Raster und Raumaufteilungen.
- **Bewegungsprinzipien** (`03-motion-principles.md`): Physikbasierte Kurven und GSAP-Muster.
- **Komponenten-Anatomie** (`04-component-anatomy.md`): Standardisierter Komponentenaufbau.
- **Quality Bar** (`06-quality-bar.md`): Mechanische 7-Achsen-Qualitätsprüfung (`P5 H5 E5 S5 R5 V5 D5`).
- **RTL- & Arabisch-Regeln** (`14-arabic-rtl-matrix.md`): Bidirektionale Layouts und Typografie.

Der KI-Agent muss grundlegende Design-Entscheidungen nicht jedes Mal neu erraten, sondern greift auf ein geprüftes operatives Regelwerk zurück.

---

## 🚫 Anti-Slop Governance: Mechanisch überprüfbare Qualität

Standard-KI neigt zu austauschbaren, künstlich wirkenden Oberflächen. TidyFactor Design setzt dem strikte Qualitätskriterien entgegen:

- ❌ **Verbot generischer KI-Muster**: Keine lila Farbverläufe (*Purple Gradient Heros*), kein inflationäres *Inter Everywhere*, keine identischen 3-Spalten-Raster und keine unstrukturierten Kartenverschachtelungen.
- 🎨 **Spezifische Designsysteme**: Farbwelten mit WCAG AAA-Kontrast und Oberflächen mit echter visueller Tiefe.
- ⚡ **YAML-Primat (Regel 15)**: Definition von Tokens in `brand.yaml`, was 35–50 % an LLM-Kontexttickets einspart.

---

## 🔄 Die 7 Lebenszyklus-Phasen und 24 Befehle

1. **Discovery**: `/study`, `/brief`
2. **Foundation**: `/init`, `/brand`, `/typography`, `/school`, `/tokens`, `/palette`, `/assets`
3. **Architecture**: `/layout`, `/nav-footer`, `/page`, `/dashboard`
4. **Components**: `/components`, `/states`
5. **Motion**: `/motion`, `/flow`, `/i18n`
6. **Quality**: `/perf`, `/audit`, `/clone`, `/retrofit`
7. **Delivery**: `/handoff`, `/deploy`

---

## 📚 Dokumentation & Leitfäden

- 📖 [Ausführlicher Leitfaden für Design-Engineering und Nutzung (docs/GUIDE.md)](docs/GUIDE.md)
- 📖 [Arabischer Engineering-Leitfaden (docs/GUIDE.ar.md)](docs/GUIDE.ar.md)
- 📋 [Vollständige technische Spezifikation (README.md)](README.md)

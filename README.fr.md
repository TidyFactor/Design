<div align="center">

# tidyfactor-design `v1.9.0`

**Moteur de Cycle de Vie de Design UI Natif en Code et Suite de Systèmes de Design Anti-Slop pour Agents IA**

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

## 💡 Philosophie Fondatrice : Dissociation de l'Intelligence de Design et de son Implémentation

Le principe directeur de **TidyFactor Design** repose sur la séparation stricte entre **l'intelligence de design** et son **exécution technique en code** :

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

Cette architecture transforme la compétence en un **Système d'Exploitation d'Ingénierie de Design** reproductible et déterministe à travers divers projets. Au lieu de demander à un agent de générer une interface à partir d'un prompt brut, l'IA exécute un cycle de vie d'ingénierie formel.

---

## ⚖️ TidyFactor Design vs Figma : L'Alternative Native en Code

TidyFactor Design ne vise pas à concurrencer les logiciels traditionnels de dessin vectoriel sur toile, mais constitue une **Alternative Native en Code à Figma (Code-Native Alternative)** :

| Critère | Figma | TidyFactor Design |
|---|---|---|
| **Paradigme** | Outil de dessin visuel | Flux de travail de design natif en code |
| **Environnement** | Centré sur la toile (Canvas-centric) | Centré sur le code (Code-centric) |
| **Public cible** | Designers visuels | Agents IA + Développeurs + Design Engineers |
| **Éléments de base** | Composants et variables visuels | Design tokens + composants + flux déterministes |
| **Prototypage** | Maquettes cliquables d'écrans | Prototypes réels en HTML/CSS/JS (zéro build step) |
| **Handoff** | Transfert manuel Designer → Développeur | Conception et implémentation unifiées |
| **Gouvernance** | Vérification manuelle visuelle | Portes de qualité mécaniques et automatisées |
| **Périmètre** | Création d'interfaces utilisateur | Gestion complète du cycle de vie de design |

---

## 🧠 Qu'est-ce que la Mémoire Opérationnelle (Operational Memory) ?

La mémoire opérationnelle (`references/memory/`) ne contient pas de prose théorique, mais des **règles applicables, des matrices structurées, des schémas de conception et des contraintes exécutables** :

- **Matrice Typographique** (`01-typography-matrix.md`) : Hiérarchies et échelles harmoniques.
- **Archétypes de Layout** (`02-layout-archetypes.md`) : Grilles et structuration spatiale.
- **Principes de Mouvement** (`03-motion-principles.md`) : Courbes cinématiques, cadences et intégration GSAP.
- **Anatomie des Composants** (`04-component-anatomy.md`) : Structure standardisée des éléments d'interface.
- **Barre de Qualité** (`06-quality-bar.md`) : Grille d'audit mécanique en 7 axes (`P5 H5 E5 S5 R5 V5 D5`).
- **Règles RTL et Arabes** (`14-arabic-rtl-matrix.md`) : Typographie et composition bidirectionnelle native.

L'agent IA n'a plus besoin de réinventer les règles typographiques à chaque session : il opère à partir d'un socle d'ingénierie préétabli.

---

## 🚫 Gouvernance Anti-Slop : Critères de Qualité Mécaniques

Contrairement aux outils d'IA générative produisant des interfaces stéréotypées et répétitives, TidyFactor Design applique des **contrôles qualité mécaniques et vérifiables** :

- ❌ **Interdiction des Clichés d'IA** : Élimination des dégradés violets génériques (*Purple Gradient Heros*), de l'omniprésence d'Inter (*Inter Everywhere*), des grilles à 3 colonnes arbitraires et des orbes lumineuses flottantes (*Aurora blobs*).
- 🎨 **Systèmes de Design Raffinés** : Palettes respectant les contrastes WCAG AAA et surfaces tactiles à profondeur réelle.
- ⚡ **Primauté YAML (Règle 15)** : Stockage des tokens de marque dans `brand.yaml`, réduisant de 35 à 50 % la consommation de tokens contextuels pour le LLM.

---

## 🔄 Les 7 Étapes du Cycle de Vie et les 24 Commandes

1. **Discovery** : `/study`, `/brief`
2. **Foundation** : `/init`, `/brand`, `/typography`, `/school`, `/tokens`, `/palette`, `/assets`
3. **Architecture** : `/layout`, `/nav-footer`, `/page`, `/dashboard`
4. **Components** : `/components`, `/states`
5. **Motion** : `/motion`, `/flow`, `/i18n`
6. **Quality** : `/perf`, `/audit`, `/clone`, `/retrofit`
7. **Delivery** : `/handoff`, `/deploy`

---

## 📚 Documentation et Guides

- 📖 [Guide Complet d'Ingénierie et d'Utilisation (docs/GUIDE.md)](docs/GUIDE.md)
- 📖 [Guide d'Ingénierie en Arabe (docs/GUIDE.ar.md)](docs/GUIDE.ar.md)
- 📋 [Spécification Technique Complète (README.md)](README.md)

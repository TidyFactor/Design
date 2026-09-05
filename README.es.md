<div align="center">

# tidyfactor-design `v1.9.0`

**Motor de Ciclo de Vida de Diseño UI Nativo en Código y Suite de Diseño Anti-Slop para Agentes de IA**

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

## 💡 La Filosofía Central: Separación de la Inteligencia de Diseño de su Implementación

El pilar fundamental de **TidyFactor Design** radica en separar la **inteligencia y conocimiento de diseño** de la **ejecución técnica en código**:

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

Esta arquitectura convierte a la habilidad en un **Sistema Operativo de Ingeniería de Diseño** reutilizable, transferible y predecible entre diferentes proyectos. En lugar de limitarse a generar código mediante un simple prompt, el agente ejecuta un ciclo de diseño formal y estructurado.

---

## ⚖️ TidyFactor Design vs. Figma: La Alternativa Nativa en Código

TidyFactor Design no pretende ser una herramienta de dibujo vectorial tradicional en lienzo, sino una **alternativa de diseño nativa en código (Code-Native Alternative)**:

| Característica | Figma | TidyFactor Design |
|---|---|---|
| **Paradigma** | Herramienta de diseño visual | Flujo de trabajo de diseño nativo en código |
| **Entorno** | Centrado en el lienzo (Canvas-centric) | Centrado en código (Code-centric) |
| **Audiencia** | Diseñadores visuales | Agente de IA + Desarrollador + Design Engineer |
| **Bloques de construcción** | Componentes y variables visuales | Tokens + componentes + flujos deterministas |
| **Prototipado** | Prototipos interactivos de pantalla | Prototipos reales en HTML/CSS/JS (cero build step) |
| **Handoff** | Transferencia manual Diseñador → Dev | Diseño e implementación unificados |
| **Gobernanza** | Inspección visual manual | Controles de calidad mecánicos y automatizados |
| **Ámbito** | Creación de interfaces de usuario | Gestión del ciclo de vida de diseño completo |

---

## 🧠 ¿Qué es la Memoria Operacional (Operational Memory)?

La memoria operacional (`references/memory/`) no consiste en teoría o artículos abstractos. Se compone de **estructuras de datos, matrices operativas, esquemas de diseño y restricciones ejecutables**:

- **Matrices Tipográficas** (`01-typography-matrix.md`): Jerarquías y escalas sin arbitrariedad.
- **Arquetipos de Layout** (`02-layout-archetypes.md`): Retículas y estructuras espaciales.
- **Principios de Movimiento** (`03-motion-principles.md`): Física de curvas de animación, tiempos y GSAP.
- **Anatomía de Componentes** (`04-component-anatomy.md`): Reglas de estructura de componentes.
- **Barrera de Calidad** (`06-quality-bar.md`): Verificación mecánica en 7 ejes (`P5 H5 E5 S5 R5 V5 D5`).
- **Reglas RTL y Árabe** (`14-arabic-rtl-matrix.md`): Tipografía y composición bidireccional nativa.

El agente de IA no necesita improvisar o reinventar las bases en cada proyecto; cuenta con una base de reglas operativas precisas y estandarizadas.

---

## 🚫 Gobernanza Anti-Slop: Calidad Mecánica Comprobable

A diferencia de los asistentes genéricos que generan interfaces predecibles, repetitivas y saturadas de patrones artificiales, TidyFactor Design impone **barreras de calidad mecánicas y comprobables**:

- ❌ **Prohibición de Slop de IA**: Adiós a *Purple Gradients*, *Inter Everywhere*, rejillas idénticas de 3 columnas, tarjetas anidadas sin jerarquía (*Card-in-card*) y orbes flotantes (*Floating orbs*).
- 🎨 **Sistemas de Diseño Específicos**: Paletas cromáticas con ratios de contraste WCAG AAA y superficies con profundidad real.
- ⚡ **Primacía YAML (Regla 15)**: Almacenamiento de tokens de marca en `brand.yaml`, ahorrando entre 35% y 50% de tokens de contexto para el LLM.

---

## 🔄 Las 7 Fases del Ciclo de Vida y los 24 Comandos

TidyFactor Design estructura el diseño en 7 etapas consecutivas gobernadas por un registro de **24 Slash Commands**:

1. **Discovery**: `/study`, `/brief`
2. **Foundation**: `/init`, `/brand`, `/typography`, `/school`, `/tokens`, `/palette`, `/assets`
3. **Architecture**: `/layout`, `/nav-footer`, `/page`, `/dashboard`
4. **Components**: `/components`, `/states`
5. **Motion**: `/motion`, `/flow`, `/i18n`
6. **Quality**: `/perf`, `/audit`, `/clone`, `/retrofit`
7. **Delivery**: `/handoff`, `/deploy`

---

## 📚 Documentación y Guías

- 📖 [Guía Exhaustiva de Ingeniería y Uso (docs/GUIDE.md)](docs/GUIDE.md)
- 📖 [Guía de Ingeniería en Árabe (docs/GUIDE.ar.md)](docs/GUIDE.ar.md)
- 📋 [Especificación Técnica Completa (README.md)](README.md)

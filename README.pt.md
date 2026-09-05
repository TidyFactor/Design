<div align="center">

# tidyfactor-design `v1.9.0`

**Motor de Ciclo de Vida de Design UI Nativo em Código e Suíte Anti-Slop para Agentes de IA**

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

## 💡 Filosofia Central: Separação de Inteligência de Design da Implementação

A base conceitual do **TidyFactor Design** baseia-se na separação estrita entre o **conhecimento e inteligência de design** e a **execução técnica em código**:

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

Esta arquitetura transforma a skill em um **Sistema Operacional de Engenharia de Design** reutilizável e determinístico entre projetos variados. Em vez de simplesmente solicitar ao modelo que "crie uma interface bonita", o agente executa um ciclo de vida de design formal.

---

## ⚖️ TidyFactor Design vs. Figma: Alternativa Nativa em Código

O TidyFactor Design não busca ser um aplicativo de desenho vetorial convencional, mas sim uma **Alternativa Nativa em Código ao Figma (Code-Native Alternative)**:

| Característica | Figma | TidyFactor Design |
|---|---|---|
| **Paradigma** | Ferramenta visual de design | Fluxo de design nativo em código |
| **Ambiente** | Focado em Canvas (Canvas-centric) | Focado em Código (Code-centric) |
| **Público** | Designers visuais | Agentes de IA + Desenvolvedores + Design Engineers |
| **Componentes** | Componentes e variáveis visuais | Tokens + componentes + fluxos determinísticos |
| **Prototipagem** | Protótipos visuais de tela | Protótipos reais em HTML/CSS/JS (zero build step) |
| **Handoff** | Transferência manual Designer → Dev | Design e implementação unificados no mesmo ambiente |
| **Governança** | Inspeção visual manual | Validações mecânicas de qualidade automatizadas |
| **Escopo** | Criação de interface de usuário | Gestão completa do ciclo de vida de design |

---

## 🧠 O Que É Memória Operacional (Operational Memory)?

A memória operacional (`references/memory/`) não consiste em artigos teóricos, mas em **regras acionáveis, matrizes estruturadas, esquemas de design e restrições executáveis**:

- **Matriz Tipográfica** (`01-typography-matrix.md`): Hierarquias e escalas sem suposições.
- **Arquétipos de Layout** (`02-layout-archetypes.md`): Grades e disposições espaciais.
- **Princípios de Movimento** (`03-motion-principles.md`): Curvas de animação física, tempos e integração GSAP.
- **Anatomia de Componentes** (`04-component-anatomy.md`): Estrutura canônica de elementos UI.
- **Quality Bar** (`06-quality-bar.md`): Auditoria mecânica em 7 eixos (`P5 H5 E5 S5 R5 V5 D5`).
- **Regras RTL e Árabe** (`14-arabic-rtl-matrix.md`): Tipografia e adaptação bidirecional nativa.

O modelo não precisa redescobrir como projetar uma tipografia a cada execução; ele opera sobre padrões já validados e testados.

---

## 🚫 Governança Anti-Slop: Qualidade Mecânica Auditável

Ao contrário de geradores genéricos de IA que produzem interfaces genéricas e artificiais, o TidyFactor Design estabelece **restrições formais de auditoria**:

- ❌ **Bloqueio de Clichês de IA**: Eliminação de *Purple Gradient Heros*, *Inter Everywhere*, grids de 3 colunas repetitivos, cartões aninhados sem contraste (*Card-in-card*) e orbes flutuantes (*Aurora blobs*).
- 🎨 **Sistemas de Design Coesos**: Paletas com contraste WCAG AAA e superfícies táteis com profundidade real.
- ⚡ **Primazia YAML (Regra 15)**: Definição de tokens de marca em `brand.yaml`, economizando entre 35% e 50% de tokens de contexto para os LLMs.

---

## 🔄 As 7 Fases do Ciclo de Vida e os 24 Comandos

1. **Discovery**: `/study`, `/brief`
2. **Foundation**: `/init`, `/brand`, `/typography`, `/school`, `/tokens`, `/palette`, `/assets`
3. **Architecture**: `/layout`, `/nav-footer`, `/page`, `/dashboard`
4. **Components**: `/components`, `/states`
5. **Motion**: `/motion`, `/flow`, `/i18n`
6. **Quality**: `/perf`, `/audit`, `/clone`, `/retrofit`
7. **Delivery**: `/handoff`, `/deploy`

---

## 📚 Documentação e Guias

- 📖 [Guia Completo de Engenharia e Uso (docs/GUIDE.md)](docs/GUIDE.md)
- 📖 [Guia de Engenharia em Árabe (docs/GUIDE.ar.md)](docs/GUIDE.ar.md)
- 📋 [Especificação Técnica Completa (README.md)](README.md)

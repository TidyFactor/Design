<div align="center">

# tidyfactor-design `v1.9.0`

**代码原生 UI 设计生命周期引擎与 AI 智能体 Anti-Slop 设计系统套件**

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

## 💡 核心设计哲学：将“设计智能”与“设计实现”彻底解耦

**TidyFactor Design** 的核心突破在于将**设计知识与智能（Design Intelligence）**与**具体的代码实现（Implementation）**进行严格解耦：

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

这一架构将技能转变为一个可在多个项目间无缝复用、确定性执行的**设计工程操作系统（Design Engineering Operating System）**。AI Agent 不再仅仅根据提示词盲目生成代码，而是按照工程化设计生命周期有序推进。

---

## ⚖️ TidyFactor Design 对比 Figma：代码原生的代际替代方案

TidyFactor Design 并不是传统的矢量画布绘制工具，而是**面向 AI 与开发者的代码原生替代方案（Code-Native Alternative）**：

| 维度 | Figma | TidyFactor Design |
|---|---|---|
| **核心范式** | 视觉绘图工具 | 代码原生设计工程工作流 |
| **工作环境** | 以画布为中心 (Canvas-centric) | 以代码为中心 (Code-centric) |
| **目标受众** | 视觉设计师 | AI Agent + 开发者 + 设计工程师 |
| **基础单元** | 视觉组件与变量 | Design Tokens + 原生组件 + 工作流 |
| **原型验证** | 屏幕视觉连线原型 | 真实 HTML/CSS/JS 原型（零构建开销） |
| **交付机制** | 设计师向开发者手动 Handoff | 设计与实现在统一代码环境中闭环 |
| **质量治理** | 人工视觉抽检 | 机械化、自动化质量审查门禁 |
| **业务范畴** | UI 界面绘制 | 全生命周期设计工程管理 |

---

## 🧠 什么是操作性记忆 (Operational Memory)？

操作性记忆 (`references/memory/`) 绝非冗长的泛论文章，而是**纯粹的规则、矩阵、数据架构与约束条件**：

- **排版矩阵** (`01-typography-matrix.md`): 确定性字号与层级规则。
- **布局原型** (`02-layout-archetypes.md`): 栅格与空间架构定义。
- **动效原则** (`03-motion-principles.md`): 物理动画曲线、时间尺度与 GSAP 原生模式。
- **组件解剖** (`04-component-anatomy.md`): 界面组件标准构造规范。
- **质量门禁** (`06-quality-bar.md`): 七维自评质检戳记 (`P5 H5 E5 S5 R5 V5 D5`)。
- **阿语与 RTL 规范** (`14-arabic-rtl-matrix.md`): 双向流与高质量阿文字体规范。

AI 智能体无需在每次生成时从头猜测设计原则，直接调用已验证的工程矩阵。

---

## 🚫 Anti-Slop 治理：可验证的机械质量门禁

普通 AI 生成的 UI 往往充斥着千篇一律的模式与工业废料（Slop）。TidyFactor Design 设立了强力的**机械质检验收标准**：

- ❌ **严禁 AI 刻板套路**：杜绝紫色渐变 Hero（Purple Gradient）、滥用 Inter 字体、千篇一律的三栏卡片网格、无序卡片嵌套（Card-in-card）以及漂浮光斑（Aurora blobs）。
- 🎨 **定制化设计系统**：严格遵守 WCAG AAA 对比度标准，构建具有真实触感与层次的界面。
- ⚡ **YAML 优先原则 (Rule 15)**：品牌与设计 Token 优先采用 `brand.yaml`，降低 35–50% 的上下文 Token 占用。

---

## 🔄 七大生命周期阶段与 24 个指令

1. **Discovery (探索阶段)**: `/study`, `/brief`
2. **Foundation (基础阶段)**: `/init`, `/brand`, `/typography`, `/school`, `/tokens`, `/palette`, `/assets`
3. **Architecture (架构阶段)**: `/layout`, `/nav-footer`, `/page`, `/dashboard`
4. **Components (组件阶段)**: `/components`, `/states`
5. **Motion (动效阶段)**: `/motion`, `/flow`, `/i18n`
6. **Quality (质检阶段)**: `/perf`, `/audit`, `/clone`, `/retrofit`
7. **Delivery (交付阶段)**: `/handoff`, `/deploy`

---

## 📚 详细文档与工程指南

- 📖 [完整设计工程与用户指南 (docs/GUIDE.md)](docs/GUIDE.md)
- 📖 [阿拉伯语工程指南 (docs/GUIDE.ar.md)](docs/GUIDE.ar.md)
- 📋 [完整技术规范 (README.md)](README.md)

<div align="center" dir="rtl">

# 🎨 TidyFactor Design `v1.1.0`
## محرك النماذج الأولية التفاعلية وأنظمة التصميم (بديل Figma بالسرعة والكود المباشر)

**البداية الرسمية لبناء النماذج الأولية والتصميم التفاعلي ضمن منظومة TidyFactor Ecosystem.**

[![npm version](https://img.shields.io/npm/v/@alwkala/tidyfactor-design.svg?style=for-the-badge&color=indigo)](https://www.npmjs.com/package/@alwkala/tidyfactor-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![RTL Ready](https://img.shields.io/badge/RTL-يدعم%20العربية%20بالكامل-emerald.svg?style=for-the-badge)](README.ar.md)

[✨ العرض المباشر](https://alwkala.com/tidyfactor-design/) • [🚀 البداية السريعة](#-البداية-السريعة) • [📖 Read in English](README.md)

</div>

---

## 🏛️ ما هو TidyFactor Design؟

**TidyFactor Design** (`tidyfactor-design`) هو **بديل كودي ذكي لـ Figma** مصمم لعصر الذكاء الاصطناعي. يُمكّن المطورين ووكلاء الذكاء الاصطناعي (Google Antigravity, Claude Code, Cursor, Windsurf) من بناء نماذج أوليّة تفاعليّة ومتحرّكة ومبهرة بتقنيات (HTML/CSS/JS) بدون أي خطوة تجميع (Zero Build Step).

على عكس أدوات بناء الصفحات التقليدية، يتحقق الاتساق البصري هنا **هيكلياً**:
- **صفر CSS/JS خاص بالصفحة**: لا تحتوي أي صفحة على وسوم `<style>` أو سكربتات داخلية.
- **مجلد `design-system/` مركزي**: المتغيرات (Tokens)، الخطوط، المكونات، والتحريكات تعيش في مكان واحد فقط.
- **4 قواعد تصميم مرنة**: Native CSS, Tailwind Utility, daisyUI, أو Hybrid.

---

## 📺 معرض الواجهات والنماذج التفاعلية

### 🌙 النموذج الأول الرئيسي بالوضع الداكن (Hero)
![الوضع الداكن](assets/dark.png)

### ☀️ النموذج التفاعلي بالوضع الفاتح
![الوضع الفاتح](assets/light.png)

### 📰 واجهة نشر المقالات والمحتوى
![واجهة المقالات](assets/blog.png)

### 🎬 معرض الفيديو والتفاعلات التراكبية
![واجهة الفيديو](assets/video.png)

---

## 🚀 البداية السريعة

منشور على NPM باسم [**`@alwkala/tidyfactor-design`**](https://www.npmjs.com/package/@alwkala/tidyfactor-design).

```bash
# تشغيل تفاعلي (بالاسم الكامل أو المختصر)
npx @alwkala/tidyfactor-design
# أو: npx tidyfactor-design

# تحديد قاعدة التصميم (--foundation=native|tailwind|daisyui|hybrid)
npx @alwkala/tidyfactor-design my-proto --foundation=native

# حقن مهام وكيل الذكاء الاصطناعي (Agent Skill)
npx @alwkala/tidyfactor-design add-skill
# أو: npx tidyfactor-design add-skill
```

---

## 🇸🇦 دعم كامل للغة العربية والاتجاه من اليمين لليسار (RTL)

- **الخطوط**: العنوان = **El Messiri**، الجسم = **Tajawal**.
- **الخصائص المنطقية**: تحويل كامل بين الاتجاهين (`dir="rtl"` / `dir="ltr"`) باستخدام CSS Logical Properties (`margin-inline-start`, `padding-inline`).

---

## 📄 الترخيص

موزع تحت رخصة **MIT License**. تم التطوير بواسطة [Alwkala](https://alwkala.com) لصالح منظومة TidyFactor Ecosystem.

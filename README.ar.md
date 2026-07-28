<div dir="rtl" align="right">

# 🎨 حزمة الأنظمة التصميمية — TidyFactor Design `v1.0.0`

**بديل كودي ذكي لبرنامج Figma لبناء النماذج الأولية التفاعلية والأنظمة التصميمية لكل وكلاء الذكاء الاصطناعي**

[![npm version](https://img.shields.io/npm/v/@alwkala/tidyfactor-design.svg?style=for-the-badge&color=indigo)](https://www.npmjs.com/package/@alwkala/tidyfactor-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![RTL Ready](https://img.shields.io/badge/RTL-Native%20Arabic-emerald.svg?style=for-the-badge)](README.ar.md)
[![Zero Build](https://img.shields.io/badge/Build-Zero%20Step-purple.svg?style=for-the-badge)](#-المكدس-التقني)

[✨ المعاينة الحية (Live Demo)](https://alwkala.com/tidyfactor-design/) • [🚀 طريقة الاستخدام](#-طريقة-الاستخدام-والأعلام-cli-flags) • [⚡ قائمة الأوامر المتاحة](#-قائمة-الأوامر-الـ-١٥-كاملة) • [📖 التوثيق باللغة الإنجليزية](README.md)

---

## 🏛️ ما هي حزمة TidyFactor Design؟

تُعد حزمة **TidyFactor Design** (`tidyfactor-design`) بديلاً كودياً حديثاً لبرنامج Figma، يُمكّن المطورين ووكلاء الذكاء الاصطناعي (مثل Google Antigravity, Claude Code, Cursor, Windsurf, Roo Code, Cline) من بناء **نماذج أولية تفاعلية قابلة للنقر والتحريك بالكامل (HTML/CSS/JS)** لصفحات التسويق ولوحات التحكم وتطبيقات الجوال صفحةً بصفحة في كافة مراحل التطوير والتصميم.

تضمن هذه الحزمة **التطابق والاتساق البصري الهيكلي** بين كافة الصفحات:
- **منع كتابة أي تنسيقات داخل الصفحات**: لا تحتوي أي صفحة على وسوم `<style>` أو أكواد JavaScript خاصة بها.
- **مجلد تصميمي موحد `design-system/`**: تُحفظ فيه كافة الألوان، الخطوط، المكونات، والأنيميشن التفاعلي في مكان واحد وتستهلكه جميع الصفحات.
- **٤ أسس تصميمية متكاملة**: Native CSS، Tailwind Utility، daisyUI، أو Hybrid.

---

## 📺 الهيكلية التقنية للمشروع

```
my-prototype/
├── design-system/
│   ├── tokens.css        ← المتغيرات والألوان والخطوط والظلال
│   ├── base.css           ← ضبط العناصر وتنسيقات الخطوط العامة
│   ├── components.css     ← مكتبة المكونات الموحدة (أزرار، كروت، قوائم، مودال)
│   ├── utilities.css      ← فئات المساعدة والتخطيط
│   ├── motion.js          ← أنيميشن التمرير وحركات الدخول التفاعلية
│   └── interactions.js    ← سلوكيات المكونات (القوائم المنسدلة، التبويبات)
├── pages/
│   ├── index.html        ← هيكل الصفحة الرئيسية (HTML فقط)
│   ├── dashboard.html    ← هيكل لوحة التحكم (HTML فقط)
│   └── pricing.html      ← هيكل صفحة الأسعار (HTML فقط)
├── proto-nav.js          ← شريط التنقل التجريبي الفوري بين الشاشات
└── brand.json            ← المصدر الموحد لهوية العلامة التجارية
```

---

## 🚀 طريقة الاستخدام والأعلام (CLI Flags)

الحزمة منشورة على NPM باسم موحد وسهل التذكر: [**`@alwkala/tidyfactor-design`**](https://www.npmjs.com/package/@alwkala/tidyfactor-design).

### أشكال التشغيل وأعلام السطر البرمجي:

```bash
# التشغيل التفاعلي المباشر
npx @alwkala/tidyfactor-design

# تحديد الأساس التصميمي (--foundation=native|tailwind|daisyui|hybrid)
npx @alwkala/tidyfactor-design my-prototype --foundation=native

# تحديد مدرسة الاتجاه التصميمي (--school=minimalist|brutalism|glassmorphism|swiss|luxury)
npx @alwkala/tidyfactor-design my-brand --school=luxury

# استخراج لوحة الألوان تلقائياً من شعار أو صورة مرجعية (--palette=<image>)
npx @alwkala/tidyfactor-design my-brand --palette=assets/logo.png

# التشغيل التلقائي الآلي (لوكيل الذكاء الاصطناعي أو CI)
npx @alwkala/tidyfactor-design my-design-system --yes
```

### حقن المهارة والقواعد للمشاريع القائمة:

```bash
npx @alwkala/tidyfactor-design add-skill
```

---

## ⚡ قائمة الأوامر الـ ١٥ كاملة

عند العمل مع أي بيئة ذكاء اصطناعي (Google Antigravity, Claude Code, Cursor, Windsurf, Roo Code, Cline)، تتوفر الأوامر التالية لاستدعائها فوراً:

| الأمر | الوظيفة والهدف | ملف التوثيق |
| :--- | :--- | :--- |
| `init` | **إنشاء النظام التصميمي** — اختيار الأساس، المتغيرات، وبناء أول شاشة تفاعلية | `references/commands/init.md` |
| `school` | **مدرسة التصميم** — اختيار اتجاه التصميم (Brutalism, Glassmorphism, Swiss, Luxury, Minimal) | `references/commands/school.md` |
| `tokens` | **متغيرات التصميم** — إدارة ملف `tokens.css` وملف الهوية `brand.json` | `references/commands/tokens.md` |
| `palette` | **استخراج الألوان والتباين** — استخراج الألوان وفحص تباين الرؤية WCAG عبر `extract_palette.py` | `references/commands/palette.md` |
| `components` | **مكتبة المكونات** — بناء المكونات المعاد استخدامها في `components.css` | `references/commands/components.md` |
| `page` | **شاشة تسويقية** — إضافة صفحة محتوى أو تسويق جديدة (HTML فقط) | `references/commands/page.md` |
| `dashboard` | **شاشة لوحة تحكم** — إضافة شاشة تطبيق أو لوحة تحكم تفاعلية مع البطاقات والجداول | `references/commands/dashboard.md` |
| `motion` | **الأنيميشن والحركة** — إضافة حركات التمرير والتفاعل في ملف `motion.js` | `references/commands/motion.md` |
| `states` | **حالات المكونات** — تعريف حالات التفاعل (Hover, Active, Disabled, Loading, Empty, Error) | `references/commands/states.md` |
| `flow` | **مسار المعاينة** — تفعيل شريط التنقل التجريبي الفوري بين الشاشات (`proto-nav.js`) | `references/commands/flow.md` |
| `i18n` | **الدعم العربي وRTL** — ضبط خطوط الوالدين (El Messiri/Tajawal) وتنسيق اتجاه الشاشة | `references/commands/i18n.md` |
| `audit` | **تقرير فحص الجودة** — إنشاء تقرير شامل لتدقيق الاتساق البصري والالتزام بالنظام | `references/commands/audit.md` |
| `clone` | **استخلاص الهوية** — استخراج النظام التصميمي والمتغيرات من موقع أو صورة مرجعية | `references/commands/clone.md` |
| `retrofit` | **تجميع وتوحيد المشروعات** — إعادة دمج مشروع تشتتت تنسيقاته تحت نظام تصميمي واحد | `references/commands/retrofit.md` |
| `deploy` | **التصدير والمعاينة** — تشغيل سيرفر المعاينة المحلي وتصدير النموذج للتسليم | `references/commands/deploy.md` |

---

## 🎨 الأساسيات التصميمية الأربعة (CSS Foundations)

| الأساس | الاسم | الوصف | الاستخدام الأمثل |
|---|---|---|---|
| **Native CSS** | `native` | متغيرات وفئات CSS مخصصة بدون أي مكتبات | المشروعات الحرة عالية الخصوصية |
| **Tailwind Utility** | `tailwind` | بناء السمة عبر فئات Tailwind المباشرة | النماذج السريعة ذات الفئات المباشرة |
| **daisyUI** | `daisyui` | Tailwind + مكتبة daisyUI الجاهزة | شاشات التطبيقات ولوحات التحكم |
| **Hybrid** | `hybrid` | المكونات المركبة من daisyUI + فئات الهوية المخصصة | التطبيقات ذات الشخصية الفاخرة المتميزة |

---

## 🇸🇦 الدعم العربي الأصيل والوقار الثقافي

تم بناء حزمة TidyFactor Design لتكون داعمة للغة العربية بشكل أصيل:
- **الخطوط**: خط العناوين الرئيسي **El Messiri** وخط النصوص **Tajawal**. يمنع استخدام خط Amiri.
- **تنسيق RTL**: التوافق الكامل مع التبديل الاتجاهي `dir="rtl"` باستخدام خصائص CSS المنطقية.

---

## 📄 الترخيص

تخضع هذه الحزمة لترخيص **MIT License**. تم إنشاؤها وتطويرها بواسطة فريق [الوكالة للبرمجيات (Alwkala)](https://alwkala.com) كجزء من منظومة TidyFactor Ecosystem.

</div>

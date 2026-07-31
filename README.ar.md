<div align="center" dir="rtl">

# 🎨 TidyFactor Design `v1.2.0`
### محرك النماذج الأولية التفاعلية ونظام التصميم المناهض للتكرار والنمطية

**البداية الرسمية لبناء النماذج الأولية والتصميم التفاعلي ضمن منظومة TidyFactor Ecosystem.**

[![npm version](https://img.shields.io/npm/v/@alwkala/tidyfactor-design.svg?style=for-the-badge&color=4F46E5)](https://www.npmjs.com/package/@alwkala/tidyfactor-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![RTL Ready](https://img.shields.io/badge/RTL-يدعم%20العربية%20بالكامل-emerald.svg?style=for-the-badge)](README.ar.md)
[![Anti--Slop Certified](https://img.shields.io/badge/Anti--Slop-مستوفٍ%20للمعايير-amber.svg?style=for-the-badge)](#-معايير-الجودة-ومناهضة-التكرار-rule-8)

[✨ العرض المباشر](https://alwkala.com/tidyfactor-design/) • [🚀 البداية السريعة](#-البداية-السريعة) • [⚡ 16 أمرًا ذكياً](#-16-أمراً-مباشراً) • [📖 Read in English](README.md)

</div>

---

> [!NOTE]
> **TidyFactor Design** هو بديل كودي ذكي لـ Figma مصمم لعصر الذكاء الاصطناعي. يُمكّن المطورين ووكلاء الذكاء الاصطناعي (Google Antigravity, Claude Code, Cursor, Codex, Windsurf) من بناء نماذج أوليّة تفاعليّة ومبهرة بتقنيات (HTML/CSS/JS) بدون أي خطوة تجميع وبدون أي تضارب في الأكواد.

---

## 🏛️ الهيكلية التنظيمية ومسار التدفق

```
my-prototype/
├── design-system/
│   ├── tokens.css        ← متغيرات التصميم (الألوان، الخطوط، المسافات، الظلال)
│   ├── base.css          ← إعادة الضبط، الوراثة والقواعد الأساسية
│   ├── components.css    ← مكتبة المكونات المشتركة (الأزرار، البطاقات، القوائم)
│   ├── utilities.css     ← فئات التنسيق المساعدة
│   ├── motion.js         ← تحريكات التمرير والدخول المشتركة
│   └── interactions.js   ← التفاعلات المشتركة (القوائم المنسدلة، التبويبات، النوافذ)
├── pages/
│   ├── index.html        ← وسم HTML فقط (بدون أي CSS/JS داخلي)
│   ├── dashboard.html    ← وسم HTML فقط للوحة التحكم
│   └── pricing.html      ← وسم HTML فقط لصفحة الأسعار
├── scripts/              ← أدوات بايثون الذكية (استخراج الألوان، ضغط WebP)
├── proto-nav.js          ← شريط التنقل العائم المساعد أثناء التطوير
└── brand.json            ← المصدر الرئيسي للهوية والمتغيرات والأصوات
```

---

## 🛡️ معايير الجودة ومناهضة التكرار (Rule 8)

يضمن `tidyfactor-design` عدم توليد واجهات نمطية مكررة عبر تطبيق قواعد صارمة:

> [!IMPORTANT]
> **ختم التقييم الذاتي**: يتم تقييم كل واجهة أو مكون قبل إنتاجه على 6 محاور: **الفلسفة (P)**، **الهرمية (H)**، **التنفيذ (E)**، **التخصص (S)**، **الضبط (R)**، و**التنوع (V)**. أي درجة أقل من 3 تطلق مراجعة تلقائية:
> `/* Pre-emit critique: P5 H4 E5 S4 R5 V5 */`

### ⚙️ نظام المؤشرات الثلاثة (`brand.json`)

تحكم ديناميكي في تباعد الهيكل، عمق الحركة، وكثافة البيانات:

```json
{
  "dials": {
    "designVariance": 8,
    "motionIntensity": 6,
    "visualDensity": 4
  }
}
```

---

## ⚡ 16 أمراً مباشراً مع أدوات بايثون الذكية

```bash
/init        # إنشاء نظام تصميم جديد وصفحة أولية
/school      # اختيار المدرسة البصرية (Brutalism, Glassmorphism, Swiss, Luxury, Minimal)
/tokens      # إدارة متغيرات التصميم وملف brand.json
/palette     # استخراج الألوان وفحص التباين بموجب WCAG 2.1 AA
/assets      # إزالة خلفيات الصور وضغط WebP الدفعي
/components  # بناء مكونات مشتركة وإنشاء المعرض التفاعلي (.preview.html)
/page        # إضافة صفحة تسويقية جديدة
/dashboard   # إضافة لوحة تحكم أو صفحة بيانات
/motion      # إضافة تحريكات التمرير والتفاعلات الذكية
/states      # تعريف المصفوفة التفاعلية للمكونات
/flow        # ربط شريط التنقل العائم للنموذج الأولي
/i18n        # ضبط الخطوط العربية (El Messiri/Tajawal) والاتجاه RTL
/audit       # فحص قراءة فقط لاتساق النظام وجودة الواجهات
/clone       # الهندسة العكسية للمواقع مع تحديد نموذج التفاعل
/retrofit    # توحيد المشاريع المشتتة تحت نظام تصميم واحد
/deploy      # خادم المعاينة المحلي وتجميع النسخة النهائية
```

---

## 🎨 8 قواعد تصميم مرنة (CSS Foundations)

| القاعدة | الرمز | الأنسب لـ |
|---|---|---|
| **Native CSS** | `native` | أنظمة التصميم النقية بدون مكتبات خارجية |
| **Tailwind Utility** | `tailwind` | النمذجة السريعة بفئات الفاعلية المباشرة |
| **daisyUI** | `daisyui` | التطبيقات السريعة بمكونات جاهزة مفاهيمية |
| **Hybrid** | `hybrid` | المكونات المجمعة مع هوية خاصة فريدة |
| **shadcn/ui** | `shadcn` | الواجهات إمكانية الوصول العالية مع Tailwind v4 وRadix |
| **Pico CSS v2** | `pico` | المواقع والأدلة فائقة السرعة بأسلوب HTML5 النقي |
| **Bootstrap 5.3** | `bootstrap` | الأنظمة المؤسسية مع دعم النمط الداكن المباشر |
| **Alpine + Tailwind** | `alpine` | التفاعلات الدقيقة السريعة بخفة Alpine.js |

---

## 🇸🇦 دعم كامل للغة العربية والاتجاه من اليمين لليسار (RTL)

- **الخطوط الرسمية**: عناوين العرض = **El Messiri**، الجسم = **Tajawal**. يمنع استخدام Amiri للعناوين أكبر من 24px.
- **الخصائص المنطقية**: تحويل كامل بين الاتجاهين (`dir="rtl"` / `dir="ltr"`) باستخدام CSS Logical Properties (`margin-inline-start`, `padding-inline`).

---

## 📄 الترخيص

موزع تحت رخصة **MIT License**. تم التطوير بواسطة [Alwkala](https://alwkala.com) لصالح منظومة TidyFactor Ecosystem. مستوفٍ لجميع معايير الحوكمة بنسبة **100% (8/8 PASS)**.

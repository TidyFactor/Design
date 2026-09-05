# 19 · Egyptian & Regional Heritage Lanes (Atmosphere & Texture)
<!-- last-verified: 2026-09-01 -->

Complete operational grammar, palettes, atmospheric textures, and anti-patterns for Egyptian and Regional Heritage Design.

---

## 🏛️ 1. Nilotic Wadj & Sacred Lotus (أصالة النيل ولوتس مصر العليا)
* **Cultural DNA**: Upper Egyptian heritage (Qena, Thebes, Dendera, Aswan), the Sacred Lotus (`Sesen`) representing awareness & resilience, and the sacred mineral green (`Wadj`) representing flourishing & wisdom.
* **Palette**:
  - `primary`: `#135E4E` (Wadj Emerald)
  - `lotus-green`: `#24826D` (Flora Leaf)
  - `terracotta`: `#B34A26` (Nile Silt Clay)
  - `khesbed`: `#0E3C66` (Royal Lapis Lazuli)
  - `nebu-gold`: `#C98818` (Sun Gold)
  - `papyrus-bg`: `#FAF8F2` (Sacred Papyrus)
* **Atmosphere & Texture**:
  - Fine Papyrus grain overlay (`feTurbulence` with 0.035 opacity).
  - Continuous Full-Width Frieze Ribbon (`.lotus-frieze-fullwidth` with SVG `<pattern>` repeat).
  - 4-Corner Lotus Filigree Brackets (`.corner-bracket`) framing key academic and authority portraits.
  - Shallow stone relief deboss on cards (`Low-Relief`).
  - Warm sunlit alabaster ambient glow.
* **Anti-Patterns**:
  - Never use stock pyramids, pharaonic tourist masks, or fake pseudo-hieroglyphs.
  - Never create segmented image dividers that break or produce seams on wide viewports (always use SVG `<pattern>`).

---

## 🏛️ 2. Egyptian Nubian Folk & Earth Vaults (النوبة المصرية والعمارة الطينية)
* **Cultural DNA**: Aswan & West Suhail mud-brick vaulted architecture (Hassan Fathy tradition), geometric chevron/zigzag murals, and radiant folk warmth.
* **Palette**:
  - `sun-ochre`: `#F59E0B`
  - `aswan-turquoise`: `#0284C7`
  - `nubian-clay`: `#C2410C`
  - `nile-green`: `#10B981`
  - `lime-plaster`: `#FFFFFF`
  - `cataract-indigo`: `#0C2340`
* **Atmosphere & Texture**:
  - Stepped triangles and chevron band dividers.
  - Soft vaulted card headers (`border-top-left-radius: 28px; border-top-right-radius: 28px;`).
  - Crisp lime plaster backgrounds with restrained vibrant accents.
* **Anti-Patterns**:
  - Never scatter colors uncontrollably; maintain crisp white/lime grounds with disciplined geometric borders.

---

## 🏛️ 3. Sinai Bedouin & Stitched Craft (البادية والتطريز السيناوي المصري)
* **Cultural DNA**: Authentic Sinai Bedouin cross-stitch embroidery (North & South Sinai), St. Catherine granite peaks, desert flora, and hospitality.
* **Palette**:
  - `sinai-madder`: `#B91C1C`
  - `wild-rose`: `#BE185D`
  - `sinai-night`: `#0F172A`
  - `wadi-ochre`: `#D97706`
  - `raw-wool`: `#F8F6F0`
  - `antique-silver`: `#94A3B8`
* **Atmosphere & Texture**:
  - Pixelated cross-stitch geometric borders (2px step grids).
  - Embroidered rail lines under section headings.
  - Granite stone texture and deep twilight indigo contrast.
* **Anti-Patterns**:
  - Never place busy embroidery behind long body text; preserve high-contrast reading.

---

## 🏛️ 4. Al-Muqarnas & Girih Geometry (التوريق والمقرنصات الهندسية)
* **Cultural DNA**: Historic Cairo (Fatimid & Mamluk architecture), Andalusian zellij, mashrabiya woodwork, and Islamic mathematical astronomy.
* **Palette**:
  - `cobalt-lapis`: `#0E3A60`
  - `turquoise-glaze`: `#0284A5`
  - `antique-gold`: `#C4922A`
  - `stucco-white`: `#F9F8F5`
  - `mashrabiya-walnut`: `#20150E`
* **Atmosphere & Texture**:
  - Strict 4/6/8-fold geometric repeat networks.
  - Aperture card masks and perforated shadow layers (`box-shadow` depth mimicking light through mashrabiya).
* **Anti-Patterns**:
  - Never place sacred or Quranic text on interactive, clickable, or croppable UI.
  - Never force arbitrary horseshoe arches on every element.

---

## 🏛️ 5. Kufic Modernity & Luminescent Noor (العمارة الحروفية والنور المعاصر)
* **Cultural DNA**: Sovereign Arabic minimalism, monumental contemporary Kufic letterforms, spacious architecture, and luminous daylight.
* **Palette**:
  - `modern-charcoal`: `#111827`
  - `pure-alabaster`: `#FFFFFF`
  - `limestone-grey`: `#E5E7EB`
  - `brushed-bronze`: `#9A7B56`
  - `single-accent`: Brand-specific vibrant hue (Electric Cyan / Mineral Teal)
* **Atmosphere & Texture**:
  - Monumental typographic heroes (45-70% viewport scale).
  - Honed terrazzo, brushed bronze, and limestone materials.
* **Anti-Patterns**:
  - Never resort to tacky "gold on black" luxury clichés.
  - Never squeeze Arabic letter tracking negatively.

---

## 🏛️ 6. ميثاق تفاصيل الأسطح والتراث (The Heritage Detailing Contract)

1. **قاعدة عدم تداخل الزخارف الصارمة (Zero Motif Overlap Invariant)**:
   - حظر كامل لوضع علامتين مائيتين أو رمزين فوق بعضهما في نفس الإحداثيات المكانية.
   - علامة مائية واحدة فقط معزولة في الهامش الجانبي البعيد لكل قسم (`margin-inline-end` / `opacity: 0.04–0.06`).
   - تفريغ كامل لخلفيات النصوص والبطاقات والنوافذ المنبثقة لضمان مقروئية 100% (WCAG AA).
2. **شريط الإفريز الفاصل المتصل (Continuous Seamless Frieze Ribbon)**:
   - منع استخدام الصور النقطية المتقطعة؛ الاعتماد الحصري على وحدة تكرار متجهية `SVG <pattern>` تمتد بعرض 100% دون أي فواصل أو تشوه على كافة الشاشات من الموبايل حتى شاشات 4K.
3. **هندسة تفاصيل البطاقات (Card Micro-Architecture)**:
   - خط تمييز علوي بلون الفئة (`border-top: 3px solid var(--primary)` أو `var(--gold)`).
   - علامة مائية مجهرية وحيدة في الزاوية السفلية المعاكسة بنعومة فائقة (`opacity: 0.05–0.08`).
   - ارتقاء ميكرو-تفاعلي عند التحويم (`transform: translateY(-4px)`).
4. **محرك تلوين الرموز المتجه (CSS `mask-image` Engine)**:
   - توظيف تقنية أقنعة CSS لتلوين الرموز عبر `currentColor` ومتغيرات السمة (`var(--gold)` / `var(--primary)`) دون الحاجة لطلب صور جديدة عند تبديل الوضع النهاري والليلي:
   ```css
   .heritage-icon {
     background-color: currentColor;
     mask-image: url('icon.svg');
     mask-size: contain;
     mask-repeat: no-repeat;
     mask-position: center;
   }
   ```


# 04_DESIGN_SYSTEM: مواصفات نظام التصميم والهوية البصرية
## إعداد: Agent 04 (Visual Identity Director)

---

### 1. الطابع البصري العام (Visual Persona)
**Dark Executive Tech / الرصانة الأكاديمية التنفيذية الفاخرة**
يمزج التصميم بين عمق المؤسسات الأكاديمية وهيبة البيئات الاستشارية القانونية العليا مع التطور التكنولوجي الهادئ غير المبتذل.

---

### 2. لوحة الألوان المعتمدة (Color Tokens)
```scss
// Backgrounds & Surfaces
$color-bg-deep: #080e1a;         // خلفية العرض الكبرى (Deep Obsidian Navy)
$color-bg-surface: #0f1a2e;      // أسطح الشرائح واللوحات
$color-bg-card: #14233c;         // بطاقات المفاهيم والعناصر المتفاعلة
$color-bg-card-hover: #1c3052;   // حالة التمرير للبطاقات
$color-border-subtle: #1e3357;   // الحدود الخفيفة الفاصلة
$color-border-glow: #38bdf840;   // حدود التوهج السياني الناعم

// Accents & Signals
$color-cyan-glow: #38bdf8;       // لون المسارات والتقنية والتركيز الأساسي (Cyan Glow)
$color-cyan-bright: #00f0ff;     // نقطة الضوء في المسارات النشطة
$color-ice-blue: #93c5fd;        // الأيقونات والتفاصيل البصرية التكميلية
$color-warm-orange: #f97316;     // لون التوكيد المحوري (Warm Orange) - يستخدم فقط للكلمات الحاسمة
$color-warm-orange-glow: #fb923c;// توهج بوابات الحسم والتفويض
$color-emerald-gate: #10b981;    // مؤشر موافقة البوابة البشرية والأمان
$color-ruby-boundary: #ef4444;   // مؤشر حدود المنع والمخاطر

// Typography Colors
$color-text-title: #f8fafc;      // أبيض دافئ للعناوين الرئيسية
$color-text-body: #e2e8f0;       // أبيض ثلجي للنصوص المفتاحية
$color-text-muted: #94a3b8;      // رمادي ناعم للشروح الثانوية والمصطلحات
```

---

### 3. منظومة الخطوط والطباعة (Typography Scale)
- **الخط العربي**: `Tajawal`, sans-serif.
- **الخط اللاتيني**: `Inter`, `Manrope`, sans-serif.
- **الأوزان المستخدمة**:
  - `800 / Bold`: للعناوين الرئيسية الكبرى.
  - `600 / Semi-Bold`: للعناوين الفرعية والمصطلحات المفتاحية.
  - `400 / Regular`: للنصوص الإيضاحية والشروح.
- **المقاييس المتوافقة مع دقة العرض في Zoom (Safe Hierarchy)**:
  - Hero Title: `clamp(2rem, 3.8vw, 3.2rem)`
  - Section Title: `clamp(1.5rem, 2.6vw, 2.2rem)`
  - Concept Heading: `clamp(1.1rem, 1.8vw, 1.5rem)`
  - Key Concept Body: `clamp(0.95rem, 1.3vw, 1.15rem)`
  - Caption / Metadata: `clamp(0.75rem, 1vw, 0.9rem)`

---

### 4. منطقة الأمان المتوافقة مع Zoom (Zoom Safe Zone)
- تم تصميم تخطيط الشاشة (Layout) ليراعي:
  - هوامش أمان علوية وسفلية بنسبة `6%` لتفادي أشرطة تحكم Zoom وتراكبات الأسماء.
  - تمركز المحتوى في المنطقة المركزية الذهبية (Central Safe Zone).
  - عدم وضع أي عنصر تفاعلي أو نص دقيق ملاصقاً لحواف الشاشة القصوى.

---

### 5. الشعار المؤسسي لأكاديمية العدالة (Official Academy Seal)
- يتم استدعاء الشعار المعتمد الأصلي في شريحة الغلاف `S01` وفي ترويسة اللوحات التنفيذية عند الحاجة.
- يُمنع تماماً تغيير ألوانه أو نسب أبعاده أو استخدام أشكال هندسية بديلة تقريبية.

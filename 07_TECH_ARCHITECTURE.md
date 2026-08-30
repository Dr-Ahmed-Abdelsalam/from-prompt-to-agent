# 07_TECH_ARCHITECTURE: الهيكلية التقنية للمشروع
## إعداد: Agent 07 (React Front-End Architect)

---

### 1. المكدس التقني المعتمد (Tech Stack)
- **البيئة والمحرك**: React 18 + TypeScript + Vite + Modular SCSS.
- **المعمارية**: Single Page Application (SPA) تعتمد على المكونات المعيارية الصرفة مع نظام ملاحة متجاوب عبر Hash Routing (`#S01` إلى `#S60`).
- **أمان النشر على GitHub Pages**: مسارات نسبية بالكامل (Relative Base Path `./`) لضمان العمل المباشر والمستقر على أي نطاق فرعي دون كسر للروابط أو الأصول.

---

### 2. هيكل المجلدات والمكونات (Folder Structure)
```
src/
├── app/
│   ├── App.tsx                     // نقطة الدخول الرئيسية وحاوي الشريحة
│   └── main.tsx                    // تهيئة React وربط DOM
├── components/
│   ├── SlideFrame.tsx              // إطار الشريحة الموحد وهوامش الأمان
│   ├── AcademyLogo.tsx             // الشعار المؤسسي الرسمي لأكاديمية العدالة
│   ├── PresenterControls.tsx       // شريط أدوات المحاضر السفلي الخفي/الهادئ
│   ├── MainHub.tsx                 // اللوحة المركزية للتنقل السريع بين المحاور
│   ├── AxisMap.tsx                 // خريطة المحور المعرفي الحالي
│   ├── BilingualTerm.tsx           // مكوّن التبادل اللغوي في نفس الموضع بدون إزاحة
│   ├── InteractiveBoard.tsx        // حاوي اللوحات المعرفية القابلة للنقر
│   ├── ConceptNode.tsx             // عقدة المفهوم التقني مع مؤشر النشاط
│   ├── ExplainerOverlay.tsx        // نافذة الشرح المصغر المنبثقة
│   ├── WorkshopEngine.tsx          // محرك الورش العملية التفاعلية الخمس
│   ├── HumanGate.tsx               // مكوّن بوابة المراجعة والموافقة البشرية
│   └── PermissionBoundary.tsx      // مكوّن جدار حماية الصلاحيات والتفويض
├── slides/
│   ├── S01_Cover.tsx
│   ├── S02_MainAxesMap.tsx
│   ├── S03_JourneyOverview.tsx
│   ├── S04_Axis01Transition.tsx
│   ├── ...                         // من S01 إلى S60 متكاملة
│   └── S60_ClosingCredo.tsx
├── state/
│   ├── presentationStore.ts        // إدارة حالة الشريحة الحالية، الشاشات التفاعلية، وتاريخ الجلسة
│   └── types.ts                    // تعريفات TypeScript للشرائح والبيانات
├── styles/
│   ├── _variables.scss             // الألوان، المقاييس، والمتغيرات
│   ├── _mixins.scss                // التجاوب، التوهج، وتأثيرات الزجاج
│   ├── _typography.scss            // خطوط Tajawal و Inter
│   └── main.scss                   // التنسيقات العامة الشاملة
└── data/
    └── slidesManifestData.ts       // بيانات الـ 60 شريحة وهيكلها المعرفي
```

---

### 3. مكوّن التبادل اللغوي ثنائي اللغة (`<BilingualTerm />`)
تم تصميمه لضمان استبدال المصطلح الإنجليزي بالعربي والعكس في نفس المساحة المحددة بدقة متناهية:
- حجز أبعاد ثابتة بناءً على العبارة الأطول (`min-width` و `display: inline-flex`).
- تأثير Cross-Fade سلس مع خفوت ناعم خلال 350ms.
- إيقاف مؤقت للتبديل عند تركيز المحاضر على العنصر أو النقر عليه.

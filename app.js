// ==========================================================================
// Interactive Web Presentation Application: «من مخاطبة الآلة إلى تفويضها»
// Presenter: Dr. Ahmed Abdelsalam
// 60 Slides (S01 to S60) Complete Standalone Architecture
// ==========================================================================

const SLIDES_DATA = [
  {
    "id": "S01",
    "axis": "الافتتاح",
    "axisNumber": 0,
    "title": "من مخاطبة الآلة إلى تفويضها",
    "subtitle": "من هندسة الأوامر إلى هندسة الوكلاء",
    "englishConcept": "From Prompting to Delegating",
    "sceneType": "TYPE A (Cinematic Hero)",
    "purpose": "إطلاق المحاضرة بإبراز العنوان الرسمي، شعار أكاديمية العدالة، وهوية المحاضر المتنوعة بين القانون وهندسة البيانات.",
    "coreIdea": "التحول الجذري في علاقة الإنسان بالذكاء الاصطناعي من مجرد تلقين الأوامر إلى التفويض السيادي الذكي.",
    "onScreenText": "من مخاطبة الآلة إلى تفويضها • من هندسة الأوامر إلى هندسة الوكلاء • د. أحمد عبدالسلام",
    "speakerIntent": "الترحيب بالجمهور ووضع الإطار الفكري العام: نحن اليوم لا نتعلم كيف نكتب محادثة أفضل، بل كيف نبني منظومات ذكاء اصطناعي ونفوضها باحترافية وأمان.",
    "visualMetaphor": "أفق فضائي عميق مع مسارات ضوئية سيانية متدفقة تلتقي عند شعار الأكاديمية ونواة التوكيد البرتقالية.",
    "interactionNeed": "تبادل خطي هادئ للصفات المهنية للمحاضر (دكتوراه في القانون / محام بالنقض / عضو المكتب الفني / مهندس بيانات).",
    "transitionIntent": "ظهور سينمائي تدريجي يستقر بهدوء أمام المحاضر.",
    "dependencies": [
      "AcademyLogo",
      "BilingualTerm"
    ]
  },
  {
    "id": "S02",
    "axis": "الافتتاح",
    "axisNumber": 0,
    "title": "خريطة المحاور الخمسة",
    "subtitle": "البنية الهيكلية الشاملة للمحاضرة",
    "englishConcept": "The Five Structural Axes",
    "sceneType": "TYPE B (Interactive Board)",
    "purpose": "استعراض المحاور العلمية الخمسة وطبقة الرقابة الحاكمة بوضوح بصري شامل.",
    "coreIdea": "خمسة محاور تصاعدية مترابطة تشكل الأساس المعرفي للتحول من مستخدم إلى مهندس منظومات.",
    "onScreenText": "1. كيف تعمل الآلة • 2. هندسة الأوامر • 3. هندسة السياق • 4. سير العمل • 5. هندسة الوكلاء • + الرقابة على التفويض",
    "speakerIntent": "إعطاء المتلقي خارطة طريق ذهنية واضحة لما سيتم تناوله في الجلسة خطوة بخطوة.",
    "visualMetaphor": "لوحة مفاهيم خماسية متصلة بمسار ضوئي سياني يعبر المحاور وينتهي بحلقة الحوكمة البرتقالية.",
    "interactionNeed": "إمكانية إبراز أي محور عند التركيز عليه دون تغيير الشريحة.",
    "transitionIntent": "توسع خفيف من المركز إلى الأطراف.",
    "dependencies": [
      "AxisMap",
      "ConceptNode"
    ]
  },
  {
    "id": "S03",
    "axis": "الافتتاح",
    "axisNumber": 0,
    "title": "المسار الفكري للمحاضرة",
    "subtitle": "رحلة التمكين المعرفي والتنفيذي",
    "englishConcept": "The Cognitive Journey",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "ترسيخ المسار الفكري السداسي الحاكم للمحاضرة من الفهم الأولي حتى الرقابة السيادية.",
    "coreIdea": "افهم ← وجّه ← زوّد ← نظّم ← فوّض ← راقب (UNDERSTAND → INSTRUCT → CONTEXTUALIZE → ORCHESTRATE → DELEGATE → CONTROL).",
    "onScreenText": "افهم ➔ وجّه ➔ زوّد ➔ نظّم ➔ فوّض ➔ راقب",
    "speakerIntent": "توضيح أن كل محطة في المحاضرة تمثل خطوة في هذا التطور الفكري، وهي رحلة ارتقاء مستمرة وليست مجرد معلومات منفصلة.",
    "visualMetaphor": "ست محطات ضوئية مترابطة على خط متصل، كل محطة تومض بهدوء وتعبر عن مرحلة معرفية.",
    "interactionNeed": "تبادل ثنائي للمصطلحات (العربية ↔ الإنجليزية) لكل محطة مع حركة نبض ضوئية هادئة.",
    "transitionIntent": "تدفق أفقي متسلسل من اليمين إلى اليسار.",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S04",
    "axis": "الافتتاح",
    "axisNumber": 0,
    "title": "الانتقال إلى المحور الأول",
    "subtitle": "كيف تعمل الآلة؟ من التدريب إلى التوليد",
    "englishConcept": "Axis 01: Machine Foundations",
    "sceneType": "TYPE A (Cinematic Transition)",
    "purpose": "تهيئة الذهن لبداية الغوص في الأساس العلمي الفيزيائي والرياضي لعمل نماذج الذكاء الاصطناعي.",
    "coreIdea": "لا يمكن توجيه أو تفويض نظام نجهل كيف يدرك العالم وينتج القرارات في جوهره.",
    "onScreenText": "المحور الأول • كيف تعمل الآلة؟ • من التدريب إلى التوليد",
    "speakerIntent": "كسر النظرة السحرية للذكاء الاصطناعي والبدء في تفكيك الصندوق الأسود إلى آليات رياضية وإحصائية دقيقة.",
    "visualMetaphor": "بوابة ضوئية سيانية عميقة تنفتح على مصفوفات الأرقام والأوزان.",
    "interactionNeed": "انتقال بصري غامر ومستقر بدون تعقيد.",
    "transitionIntent": "تقريب عميق هادئ (Soft Dive).",
    "dependencies": [
      "SlideFrame"
    ]
  },
  {
    "id": "S05",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "الذكاء الاصطناعي ليس تطبيق دردشة",
    "subtitle": "الهرم البنيوي والتصنيف العلمي",
    "englishConcept": "AI Taxonomy & Foundations",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "تصحيح الخلط الشائع بين واجهات الدردشة (ChatGPT) وبين الهرم العلمي للذكاء الاصطناعي.",
    "coreIdea": "الذكاء الاصطناعي مظلة كبرى، يندرج تحته تعلم الآلة، فالتعلم العميق، فالنماذج التأسيسية، فالنماذج اللغوية، فالذكاء التوليدي.",
    "onScreenText": "AI ⊃ Machine Learning ⊃ Deep Learning ⊃ Foundation Models ⊃ LLMs ⊃ Generative AI",
    "speakerIntent": "تأسيس لغة علمية مشتركة مع الجمهور وتوضيح الترتيب المنطقي للتقنيات.",
    "visualMetaphor": "هرم طبقي تداخلي متوهج (Concentric Concentrated Layers) يظهر العلاقات الاحتوائية بوضوح.",
    "interactionNeed": "نقر كل طبقة لإظهار خصائصها المعيارية ومجال تطبيقها.",
    "transitionIntent": "تجمع طبقي متسلسل من الخارج للداخل (Converge).",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S06",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "الخوارزمية مقابل نموذج الذكاء الاصطناعي",
    "subtitle": "المنطق الحتمي مقابل التنبؤ الإحصائي",
    "englishConcept": "Algorithm vs. AI Model",
    "sceneType": "TYPE B (Interactive Comparison Board)",
    "purpose": "إيضاح الفارق الجذري بين البرمجة الكلاسيكية القائمة على القواعد الحتمية وبين النماذج القائمة على الأوزان.",
    "coreIdea": "الخوارزمية: قواعد مكتوبة سلفاً (If/Else) تعطي نتائج قطعية. النموذج: شبكة أوزان إحصائية تستنبط الأنماط وتتنبأ بالاحتمالات.",
    "onScreenText": "الخوارزمية = منطق حتمي قطعي • النموذج = مصفوفة أوزان احتمالية",
    "speakerIntent": "شرح لماذا تفشل النماذج أحياناً في الحساب الدقيق بينما تبدع في الربط الدلالي، ولماذا نحتاج البرمجة الحتمية في بوابات الرقابة.",
    "visualMetaphor": "مقارنة ثنائية: شجرة قرارات صارمة مقابل شبكة عصبية سحابية متغيرة الكثافة.",
    "interactionNeed": "تبديل المقارنة بين المدخل والمخرج ومصادر الخطأ في كلا النظامين.",
    "transitionIntent": "انقسام الشاشة إلى نصفين متكاملين.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S07",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "النموذج مقابل التطبيق مقابل الوكيل",
    "subtitle": "مستويات التجريد والقدرة التشغيلية",
    "englishConcept": "Model vs. App vs. Agent",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "فض الاشتباك بين المحرك الأساسي (النموذج) والواجهة (التطبيق) والنظام المستقل (الوكيل).",
    "coreIdea": "النموذج (المحرك الرياضي) ← التطبيق (الواجهة والوظائف الثابتة) ← الوكيل (نظام موجه بأهداف يخطط وينفذ ذاتياً).",
    "onScreenText": "Model (المحرك) ➔ Application (الواجهة) ➔ Agent (النظام المستقل)",
    "speakerIntent": "وضع حجر الأساس لفهم التدرج من مجرد مناداة LLM إلى بناء وكيل كامل.",
    "visualMetaphor": "ثلاث كتل معمارية متصاعدة من النواة إلى الغلاف إلى النظام التكيفي المحيط.",
    "interactionNeed": "نقر كل مستوى لاستعراض حدوده، استقلاليته، واحتياجه للبنية التحتية.",
    "transitionIntent": "صعود تدريجي ثلاثي المراحل.",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S08",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "تشريح البيانات: المهيكلة وغير المهيكلة",
    "subtitle": "المادة الخام التي تتغذى عليها النماذج",
    "englishConcept": "Structured vs. Unstructured Data",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح طبيعة البيانات وكيف حولت النماذج الحديثة البيانات غير المهيكلة (نصوص، صور، صوت) إلى أصول قابلة للتحليل.",
    "coreIdea": "البيانات المهيكلة (جداول، أرقام) تمثل 20%، بينما 80% من ثروة المعرفة البشرية مخزنة في بيانات غير مهيكلة (عقود، مستندات، تقارير).",
    "onScreenText": "20% بيانات مهيكلة (Structured) • 80% بيانات غير مهيكلة (Unstructured)",
    "speakerIntent": "إبراز القيمة الحقيقية للنماذج اللغوية في فهم واستخلاص المعنى من النصوص القانونية والتقارير غير المنسقة.",
    "visualMetaphor": "جدول هندسي منظم يقابله سيل سحابي من المستندات والملفات المتدفقة.",
    "interactionNeed": "استكشاف أمثلة لكل نوع وتوضيح كيفية معالجتها رياضياً.",
    "transitionIntent": "تراكب سلس يبرز النسبة والنوع.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S09",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "كيف ترى الآلة النصوص والصور؟",
    "subtitle": "الترميز والتضمين الشعاعي",
    "englishConcept": "Tokenization & Vector Embeddings",
    "sceneType": "TYPE C (Mini Explainer Scene)",
    "purpose": "تفكيك عملية تحويل الكلمات والصور إلى أرقام ومتجهات تفهمها المصفوفات الرياضية.",
    "coreIdea": "النصوص تُجزأ إلى Tokens ثم تُحوّل إلى متجهات عالية الأبعاد (Embeddings) في فضاء دلالي، والصور إلى مصفوفات بكسلات.",
    "onScreenText": "النص ➔ Tokens ➔ Vectors (Embeddings) • الصورة ➔ Pixels ➔ Tensors",
    "speakerIntent": "شرح كيف تدرك الآلة تشابه المعاني من خلال تقارب المتجهات في الفضاء الرياضي وليس عبر فهم لغوي بشري.",
    "visualMetaphor": "كلمة تتفكك إلى كتل ملونة ثم تتحول إلى إحداثيات رقمية ثلاثية الأبعاد في فضاء نقطي.",
    "interactionNeed": "نقر تجربة التفكيك لمشاهدة كلمة عربية تتحول إلى Tokens ومتجه عددي.",
    "transitionIntent": "تفكيك موضعي (Decompose).",
    "dependencies": [
      "ExplainerOverlay",
      "BilingualTerm"
    ]
  },
  {
    "id": "S10",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "خريطة الأدوار التخصصية في البيانات والذكاء الاصطناعي",
    "subtitle": "سلسلة القيمة وتكامل الاختصاصات",
    "englishConcept": "Data & AI Roles Landscape",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "تحديد الفروق الدقيقة والمسؤوليات بين مهندس البيانات، محلل البيانات، عالم البيانات، مهندس تعلم الآلة، ومهندس الذكاء الاصطناعي.",
    "coreIdea": "مهندس البيانات يبني الأنابيب، المحلل يستخلص المؤشرات، عالم البيانات يبتكر النماذج، مهندس ML يدرب وينشر، ومهندس AI يدمج الوكلاء في التطبيقات.",
    "onScreenText": "Data Engineer ➔ Data Analyst ➔ Data Scientist ➔ ML Engineer ➔ AI Engineer",
    "speakerIntent": "مساعدة الحضور والمؤسسات على معرفة الدور الذي يحتاجونه في كل مرحلة من بناء الحلول الذكية.",
    "visualMetaphor": "سلسلة خط أنابيب تكاملي يربط خمسة محطات عمل متباينة الألوان والوظائف.",
    "interactionNeed": "نقر كل دور لاستعراض مدخلاته، مخرجاته، وأدواته التقنية.",
    "transitionIntent": "تسلسل أفقي لخط الأنابيب.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S11",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "دورة التدريب وبناء الأوزان",
    "subtitle": "كيف تكتسب النماذج معرفتها الإحصائية؟",
    "englishConcept": "Training Dynamics & Weights",
    "sceneType": "TYPE E (Process Simulation Scene)",
    "purpose": "شرح الديناميكية الرياضية لتدريب النماذج اللغوية والتعديل المستمر للأوزان الرياضية.",
    "coreIdea": "البيانات ← التنبؤ ← حساب الخطأ (Loss) ← التراجع الخلفي (Backpropagation) ← تعديل الأوزان (Optimizer) ← التكرار مليارات المرات.",
    "onScreenText": "Data ➔ Prediction ➔ Error (Loss) ➔ Backprop ➔ Weight Adjustment ➔ Repeat",
    "speakerIntent": "إيضاح أن المعرفة مخزنة داخل مليارات الأرقام العشرية (Weights) وأن النموذج لا يقرأ الإنترنت لحظياً أثناء الإجابة بل يسترجع تمثيلاً إحصائياً.",
    "visualMetaphor": "حلقة دائرية مضيئة تدور فيها البيانات وتشع إشارات التعديل الخلفي لتثبيت الأوزان.",
    "interactionNeed": "تشغيل محاكاة دورة تدريبية بنقرة واحدة لمشاهدة انخفاض دالة الخطأ.",
    "transitionIntent": "دوران هادئ (Loop & Feedback).",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S12",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "آليات التوليد وفضاء الاحتمالات",
    "subtitle": "توقع الرمز التالي والتوزيع الاحتمالي",
    "englishConcept": "Inference & Next Token Prediction",
    "sceneType": "TYPE C (Mini Explainer Scene)",
    "purpose": "شرح كيفية قيام النموذج بتوليد المخرجات عبر حساب توزيع الاحتمالات لكل كلمة تالية.",
    "coreIdea": "الأمر + السياق ← النموذج اللغوي ← توزيع احتمالي للكلمات التالية ← اختيار الرمز وفق معايير التوزيع (Sampling / Temperature).",
    "onScreenText": "Prompt + Context ➔ LLM ➔ Probability Distribution ➔ Next Token ➔ Repeat",
    "speakerIntent": "إيضاح مفهوم الـ Temperature والـ Top-p وكيف يؤثران على الإبداع والدقة، ولماذا تختلف الإجابة عند تكرار نفس السؤال.",
    "visualMetaphor": "شجرة احتمالات متفرعة تبرز الكلمات المرشحة مع نسب مئوية ضوئية متدرجة.",
    "interactionNeed": "تعديل مؤشر العشوائية (Temperature) لمشاهدة تغير ترجيح الكلمات في المحاكاة.",
    "transitionIntent": "انبثاق احتمالي ناعم.",
    "dependencies": [
      "ExplainerOverlay",
      "BilingualTerm"
    ]
  },
  {
    "id": "S13",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "حدود القدرة: الهلوسة، الاستدلال، والتحقق",
    "subtitle": "التمييز بين الطلاقة اللغوية والحقيقة المعرفية",
    "englishConcept": "Capabilities, Hallucination & Grounding",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "تحليل أسباب الهلوسة (Hallucination) وطبيعة الاستدلال في النماذج وحتمية الإسناد المعرفي (Grounding).",
    "coreIdea": "النموذج يتقن الطلاقة اللغوية، لكنه يفتقر إلى التحقق الذاتي من الحقيقة؛ الهلوسة تنشأ عند استكمال النمط دون وجود أصل في السياق.",
    "onScreenText": "طلاقة لغوية ≠ صحة واقعية • الهلوسة = توليد معطيات غير مسندة • الحل = Grounding & Verification",
    "speakerIntent": "ترسيخ ضرورة وجود آليات رقابة وتحقق وإسناد للسياق وعدم الوثوق الأعمى في مخرجات النماذج المجردة.",
    "visualMetaphor": "ميزان ضوئي يقارن بين الثقة الشكلية في التعبير والصلابة المرجعية للمعلومة.",
    "interactionNeed": "استكشاف الأسباب الثلاثة الرئيسية للهلوسة وحلولها الهندسية.",
    "transitionIntent": "توازن بصري هادئ.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S14",
    "axis": "المحور الأول",
    "axisNumber": 1,
    "title": "Workshop 01: هل دربت الآلة فعلًا؟",
    "subtitle": "المقارنة الحاسمة بين استراتيجيات التكييف",
    "englishConcept": "Workshop 01: Training vs Adaptation Strategies",
    "sceneType": "TYPE D (Interactive Workshop)",
    "purpose": "ورشة تفاعلية عملية لإزالة اللبس بين التدريب، الضبط الدقيق، هندسة الأوامر، تزويد السياق، واستخدام الأدوات.",
    "coreIdea": "ما هو التدخل الهندسي المناسب لكل مسألة؟ التدريب المسبق (Pre-training) vs الضبط الدقيق (Fine-tuning) vs التوليد المعزز (RAG) vs الأوامر (Prompting) vs الأدوات (Tools).",
    "onScreenText": "Pre-training • Fine-tuning • Prompting • RAG • Tool Use",
    "speakerIntent": "قيادة تمرين تفاعلي مع الحضور لتحديد الاستراتيجية الأنسب لسيناريوهات واقعية (مثل: إضافة لوائح داخلية جديدة لشركة vs تعليم النموذج لغة قديمة).",
    "visualMetaphor": "لوحة مصفوفية تفاعلية تمكن المحاضر من اختبار 4 حالات عملية ومشاهدة القرار الهندسي الصحيح مع التحليل.",
    "interactionNeed": "نقر السيناريوهات واختيار الحل الهندسي الأنسب ومقارنة التكلفة والجهد والأثر.",
    "transitionIntent": "انفتاح لوحة ورشة العمل التفاعلية.",
    "dependencies": [
      "WorkshopEngine",
      "BilingualTerm"
    ]
  },
  {
    "id": "S15",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "هندسة الأوامر: من التخمين إلى الهيكلة",
    "subtitle": "الانتقال من المحادثة العفوية إلى الصياغة الهندسية",
    "englishConcept": "Prompt Engineering Foundations",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "تعريف هندسة الأوامر كمنهجية علمية لتقليص مساحة الاحتمالات وتوجيه النموذج نحو النتيجة المحددة بدقة.",
    "coreIdea": "الأمر الاحترافي ليس مجرد سؤال، بل هو عقد برمجي مصغر يحدد المعالم والحدود والمخرجات.",
    "onScreenText": "من التخمين والمحادثة العفوية ➔ إلى التوجيه المعياري والهندسة المنضبطة",
    "speakerIntent": "توضيح أن الأوامر الضعيفة تنتج مخرجات عامة لأنها تترك فضاء الاحتمالات مفتوحاً على مصراعيه.",
    "visualMetaphor": "عدسة بصرية تركز حزمة ضوء مبعثرة وتوجهها نحو نقطة هدف فائقة الدقة.",
    "interactionNeed": "تبديل ثنائي هادئ للمفاهيم الأساسية.",
    "transitionIntent": "تركيز بؤري ناعم (Focus).",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S16",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "التشريح السداسي للأمر الاحترافي",
    "subtitle": "العمارة المعيارية لصياغة الأوامر المؤسسية",
    "englishConcept": "Hexagonal Prompt Architecture",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض الأركان الستة لأي أمر عالي الجودة لضمان أداء دقيق وغير مضلل.",
    "coreIdea": "1. الهدف (Goal) • 2. التعليمات (Instructions) • 3. السياق (Context) • 4. القيود (Constraints) • 5. التنسيق (Format) • 6. الأمثلة (Examples).",
    "onScreenText": "الهدف • التعليمات • السياق • القيود • التنسيق • الأمثلة",
    "speakerIntent": "تزويد المحاضر والمتدربين بقالب ذهني ثابت لتقييم وصياغة أي أمر قبل إرساله للنموذج.",
    "visualMetaphor": "شكل سداسي متوهج (Hexagon) تتكامل فيه الأضلاع الستة لتشكيل درع الأمر المحكم.",
    "interactionNeed": "نقر كل ركن من الأركان الستة لتفصيل وظيفته الحيوية في صياغة المخرج.",
    "transitionIntent": "بناء تركيبي للأضلاع الستة (Converge).",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S17",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "فن صياغة القيود والمخرجات المهيكلة",
    "subtitle": "التحكم في المدى، النبرة، وبنية الإخراج",
    "englishConcept": "Constraints & Structured Outputs",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيفية فرض القيود السلبية (Negative Constraints) وتحديد تنسيقات الإخراج البرمجية (JSON / Markdown / Tables).",
    "coreIdea": "تحديد ما يجب الامتناع عنه بنفس أهمية تحديد المطلوب؛ والمخرجات المهيكلة تحول النص إلى بيانات جاهزة للدمج البرمجي.",
    "onScreenText": "القيود الصريحة تمنع الانحراف • المخرجات المهيكلة (JSON/Markdown) تضمن القابلية للمعالجة الآلية",
    "speakerIntent": "شرح كيف تضمن القيود عدم خروج النموذج عن نطاق الاختصاص، وكيف تمكننا المخرجات المهيكلة من ربط النموذج بأنظمة المؤسسة.",
    "visualMetaphor": "جدار أمان مضيء يحيط بنسق بيانات مهيكل (Data Schema) محمي من التشوه.",
    "interactionNeed": "استعراض مقارنة بين مخرج نصي سائب ومخرج مهيكل منضبط برمجياً.",
    "transitionIntent": "ظهور إطار الأمان المنظم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S18",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "إدارة الغموض والتوجيه التكراري",
    "subtitle": "التطوير المرحلي للأوامر المعقدة",
    "englishConcept": "Ambiguity Resolution & Iterative Prompting",
    "sceneType": "TYPE C (Mini Explainer Scene)",
    "purpose": "إيضاح كيفية معالجة الغموض في الأسئلة المعقدة والاعتماد على التوجيه التكراري المنضبط (Iterative Refinement).",
    "coreIdea": "الغموض هو العدو الأول للدقة؛ الأوامر الاحترافية تطلب من النموذج طلب التوضيح أو تفكيك الغموض قبل الإجابة.",
    "onScreenText": "غموض في المدخلات = عشوائية في المخرجات • التوجيه التكراري = صقل تدريجي نحو الدقة القصوى",
    "speakerIntent": "تعليم المتدربين عدم اليأس من المخرج الأول، بل اتباع منهجية تشخيص الخلل وإعادة التوجيه الدقيق.",
    "visualMetaphor": "مسار حلزوني متدرج يضيق تدريجياً حتى ينطبق على الهدف النقطي.",
    "interactionNeed": "نقر مراحل التحسين الثلاث لمشاهدة قفزة الجودة بين الأمر البدائي والأمر المصقول.",
    "transitionIntent": "تقارب حلزوني ناعم.",
    "dependencies": [
      "ExplainerOverlay",
      "BilingualTerm"
    ]
  },
  {
    "id": "S19",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "نماذج وأنماط الأوامر المتقدمة",
    "subtitle": "أمثلة قليلة وسلاسل التفكير الاستدلالي",
    "englishConcept": "Advanced Patterns: Few-Shot & Chain-of-Thought",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح النمطين الأكثر تأثيراً في استدلال النماذج: Few-Shot Prompting و Chain-of-Thought (CoT).",
    "coreIdea": "تزويد النموذج بأمثلة (Few-Shot) يضبط النمط؛ ومطالبته بالتفكير خطوة بخطوة (CoT) يفعل الاستدلال المنطقي ويقلل الأخطاء الحسابية والمفاهيمية.",
    "onScreenText": "Few-Shot = ترويض النمط بالأمثلة • Chain-of-Thought (CoT) = تفعيل الاستدلال خطوة بخطوة",
    "speakerIntent": "إبراز قوة جملة «فكر خطوة بخطوة قبل الإجابة» في تغيير توزيع احتمالات الكلمات داخل النموذج نحو التحليل الرصين.",
    "visualMetaphor": "سلسلة حلقات مضيئة تتصل خطوة بخطوة وصولاً إلى الاستنتاج النهائي الصلب.",
    "interactionNeed": "تبديل المقارنة بين استجابة Zero-Shot واستجابة Chain-of-Thought لنفس المشكلة.",
    "transitionIntent": "ترابط تسلسلي متتابع.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S20",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "التقمص المهني للأدوار: متى يفيد ومتى يضر؟",
    "subtitle": "الاستخدام الرشيد لتأطير الشخصية",
    "englishConcept": "Persona & Role Framing",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "تقييم أسلوب «تصرف كمحامٍ خبير / ككبير مهندسين» وفهم أثره الحقيقي على النبرة والمحتوى.",
    "coreIdea": "تقمص الدور يضبط النبرة والمصطلحات التخصصية، لكنه لا يمنح النموذج معرفة غائبة أو يحل محل الحقائق الدقيقة في السياق.",
    "onScreenText": "تأطير الدور يضبط المفردات والنبرة • لا يعوض غياب السياق أو يمنح صلاحيات علمية زائفة",
    "speakerIntent": "تحذير المتدربين من الاعتماد الساذج على التقمص كبديل عن تزويد النموذج بالوثائق والوقائع.",
    "visualMetaphor": "قناع ضوئي يحدد زاوية الرؤية التخصصية دون أن يغير البنية الرياضية للنموذج.",
    "interactionNeed": "مقارنة الحالات التي يكون فيها التقمص فعالاً مقابل الحالات التي يكون فيها مجرد حشو بلا قيمة.",
    "transitionIntent": "تأطير بصري ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S21",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "تطبيقات مهنية وقانونية لهندسة الأوامر",
    "subtitle": "تحليل العقود، استخلاص البنود، وصياغة المذكرات",
    "englishConcept": "Professional & Legal Prompt Engineering",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض نماذج تطبيقية احترافية في البيئات القانونية والاستشارية الحساسة.",
    "coreIdea": "صياغة أوامر فحص شروط التعويض في عقود المقاولات (FIDIC) واستخراج الالتزامات الجوهرية مع العزل الصارم للاستنتاجات غير المدعومة.",
    "onScreenText": "تحليل بنود المسؤولية • استخلاص الالتزامات المتقابلة • التدقيق المقارن في اللوائح والاتفاقيات",
    "speakerIntent": "عرض أمثلة عملية رفيعة المستوى تثبت كيف تحمي هندسة الأوامر المحامي والمستشار من المخاطر المهنية.",
    "visualMetaphor": "مستند قانوني متوهج يتم تشريحه ضوئياً إلى طبقات استحقاق ومسؤولية منضبطة.",
    "interactionNeed": "استعراض هيكل أمر قانوني معياري واكتشاف عناصره التوجيهية الحاكمة.",
    "transitionIntent": "تدفق تحليلي للمستند.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S22",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "قياس جودة الأوامر وتقييم المخرجات",
    "subtitle": "معايير التقييم والاتساق المؤسسي",
    "englishConcept": "Prompt Evaluation & Output Quality",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح منهجيات اختبار الأوامر وضمان ثبات مخرجاتها عبر اختبارات القياس (Evaluation Rubrics).",
    "coreIdea": "لا يمكن اعتبار الأمر جاهزاً للاستخدام المؤسسي إلا بعد اختباره على مجموعة حالات حافة (Edge Cases) وقياس اتساقه ودقته.",
    "onScreenText": "معايير الجودة: الدقة الواقعية • الالتزام بالقيود • سلامة التنسيق • استقرار النبرة",
    "speakerIntent": "نقل ثقافة العمل من التجربة العشوائية إلى الاختبار والتقييم الهندسي المنظم.",
    "visualMetaphor": "لوحة مؤشرات أداء دقيقة تعرض درجات التوافق ومعايير الجودة الأربعة.",
    "interactionNeed": "نقر معايير التقييم لمشاهدة مقاييس الاختبار المعتمدة مؤسسياً.",
    "transitionIntent": "ظهور مؤشرات القياس.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S23",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "الحدود الجوهرية لهندسة الأوامر",
    "subtitle": "لماذا لا تكفي الأوامر وحدها لإنجاز المهام المعقدة؟",
    "englishConcept": "Fundamental Limits of Prompt Engineering",
    "sceneType": "TYPE A (Cinematic Paradigm Shift)",
    "purpose": "بيان السقف الهندسي الذي تقف عنده الأوامر، والتمهيد للانتقال الضروري إلى هندسة السياق وسير العمل.",
    "coreIdea": "مهما كان الأمر متقناً، فإنه يعجز عن: تزويد النموذج ببيانات خاصة محجوبة، تنفيذ مهام متعددة الخطوات، أو اتخاذ قرارات متفرعة ذاتياً.",
    "onScreenText": "الأمر يوجه الأسلوب... لكنه لا يصنع المعرفة المفقودة أو ينفذ مسارات معقدة بذاته",
    "speakerIntent": "بناء الجسر الفكري نحو المحور الثالث: فهمنا كيف نوجه الآلة، والآن كيف نزودها بالمعرفة الحقيقية؟",
    "visualMetaphor": "سهم توجيهي أنيق يصل إلى حافة جدار معرفي يتطلب مصادر بيانات وسير عمل للعبور.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع توكيد بصري برتقالي عند نقطة التحول.",
    "transitionIntent": "انتقال مفاهيمي حاسم.",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S24",
    "axis": "المحور الثاني",
    "axisNumber": 2,
    "title": "Workshop 02: مختبر هندسة الأوامر وإعادة الهيكلة",
    "subtitle": "تحويل الأوامر المعيبة إلى صيغ هندسية ذهبية",
    "englishConcept": "Workshop 02: Prompt Refactoring Lab",
    "sceneType": "TYPE D (Interactive Workshop)",
    "purpose": "ورشة تفاعلية عملية لمعالجة نماذج أوامر حقيقية مليئة بالثغرات وإعادة بنائها وفق الهيكل السداسي المعياري.",
    "coreIdea": "مقارنة حية بين أمر غامض وأمر مهيكل، ومشاهدة الفارق النوعي في مخرجات الاستدلال والتنفيذ.",
    "onScreenText": "تحليل الخلل ➔ تطبيق الهيكل السداسي ➔ تقييم الفارق في المخرج",
    "speakerIntent": "إشراك الحضور في نقد أمر قانوني/مهني ضعيف وإعادة صياغته خطوة بخطوة على اللوحة التفاعلية.",
    "visualMetaphor": "مختبر تفاعلي ثنائي: لوحة كود الأمر القديم المليء بالثغرات تتحول إلى أمر ذهبي محكم مع مقارنة المخرجات.",
    "interactionNeed": "اختيار الثغرات وتطبيق التصحيحات الهندسية ومشاهدة تحول المخرج فوراً.",
    "transitionIntent": "انفتاح واجهة المختبر التفاعلي.",
    "dependencies": [
      "WorkshopEngine",
      "BilingualTerm"
    ]
  },
  {
    "id": "S25",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "من توجيه الآلة إلى تزويدها",
    "subtitle": "مدخل إلى هندسة السياق",
    "englishConcept": "Context Engineering Paradigm",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "ترسيخ القاعدة الذهبية: الأمر يوجّه الدفة، بينما السياق هو الذي يزوّد النموذج بالحقائق والوقود المعرفي.",
    "coreIdea": "Prompt directs, Context powers. هندسة السياق هي علم إدارة وهيكلة وحقن كافة المعارف اللحظية التي يحتاجها النموذج أثناء الاستدلال.",
    "onScreenText": "الأمر يوجّه الدفة (Directs) • السياق يزوّد بالمعرفة والوقود (Powers)",
    "speakerIntent": "نقل تركيز الحضور من هوس العبارات التوجيهية إلى معمارية تجهيز البيانات والمستندات المحيطة.",
    "visualMetaphor": "قمع توجيهي علوي (Prompt) يصب فوق خزان معرفي عميق ومتدفق (Context) يغذي محرك المعالجة.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع حركة تدفق ضوئية ناعمة.",
    "transitionIntent": "تدفق ضوئي عمودي (Flow).",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S26",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "تشريح نافذة السياق",
    "subtitle": "السعة الاستيعابية وميزانية الرموز",
    "englishConcept": "Context Window Anatomy & Token Budget",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح مفهوم نافذة السياق (Context Window)، حدودها بالـ Tokens، وكيفية توزيع ميزانية السياق بذكاء.",
    "coreIdea": "نافذة السياق هي مساحة الذاكرة العاملة المؤقتة للنموذج في لحظة الاستدلال الواحدة؛ كل رمز يدخل يستهلك من الانتباه والحساب.",
    "onScreenText": "نافذة السياق = مساحة العمل المؤقتة للـ Tokens • التوزيع الذكي للميزانية يمنع اختناق الانتباه",
    "speakerIntent": "إيضاح لماذا لا يعني توسع نافذة السياق (إلى مليون رمز) أن نلقي بكل شيء عشوائياً داخلها دون ترشيد.",
    "visualMetaphor": "شريط ذاكرة مقسم بنسب لونية متدرجة يبرز حصة التعليمات، الوثائق، وتاريخ المحادثة.",
    "interactionNeed": "استكشاف أجزاء نافذة السياق ونسب استهلاكها المثالية.",
    "transitionIntent": "تمدد شريطي منظم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S27",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "مكونات السياق الشامل",
    "subtitle": "المنظومة البيئية المتكاملة لمدخلات النموذج",
    "englishConcept": "The Complete Context Ecosystem",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض الروافد الخمسة التي تشكل السياق الحقيقي للنموذج في التطبيقات المتقدمة.",
    "coreIdea": "1. تعليمات النظام (System) • 2. تاريخ المحادثة (History) • 3. المستندات المسترجعة (Docs) • 4. الذاكرة طويلة المدى (Memory) • 5. نتائج الأدوات (Tools).",
    "onScreenText": "System Instructions • History • Retrieved Docs • Long-term Memory • Tool Outputs",
    "speakerIntent": "توضيح أن السياق ليس مجرد ملف PDF مرفق، بل منظومة ديناميكية متكاملة تتغذى من مصادر متعددة.",
    "visualMetaphor": "نواة مركزية تلتقي عندها خمسة مسارات ضوئية متدفقة من مصادر متباينة.",
    "interactionNeed": "نقر كل رافد من الروافد الخمسة لمعرفة وظيفته وحجمه الأمثل.",
    "transitionIntent": "التقاء خماسي نحو المركز (Converge).",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S28",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "السياق ذو الصلة مقابل الضجيج",
    "subtitle": "ظاهرة الضياع في المنتصف وتلوث السياق",
    "englishConcept": "Signal vs. Noise & Lost in the Middle",
    "sceneType": "TYPE C (Mini Explainer Scene)",
    "purpose": "شرح ظاهرة Lost in the Middle وكيف يؤدي حشو السياق بالمعلومات غير المرتبطة إلى تدهور دقة الإجابة.",
    "coreIdea": "زيادة الضجيج تقلل من حدة انتباه النموذج للمعلومة الجوهرية؛ انتباه النموذج يتركز في البداية والنهاية ويضعف في الوسط.",
    "onScreenText": "إشارة نقية (Signal) ➔ إجابة حاسمة • ضجيج فائض (Noise) ➔ تشتت وفقدان الانتباه",
    "speakerIntent": "ترسيخ مبدأ «الجودة على حساب الكمية» في هندسة السياق وضرورة فلترة المعلومات قبل حقنها.",
    "visualMetaphor": "منحنى انتباه U-Shape يبرز انخفاض دقة التقاط المعلومات الواقعة في منتصف سياق طويل.",
    "interactionNeed": "تجربة بصرية تفاعلية لتحريك موضع معلومة حاسمة وملاحظة تأثير موضعها على قوة الانتباه.",
    "transitionIntent": "رسم بياني توضيحي ناعم.",
    "dependencies": [
      "ExplainerOverlay",
      "BilingualTerm"
    ]
  },
  {
    "id": "S29",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "التوليد المعزز بالاسترجاع (RAG)",
    "subtitle": "ربط النموذج بقواعد المعرفة الخارجية",
    "englishConcept": "Retrieval-Augmented Generation (RAG)",
    "sceneType": "TYPE E (Process Simulation Scene)",
    "purpose": "شرح معمارية RAG خطوة بخطوة من تقسيم المستندات إلى استرجاع المتجهات وحقن السياق المدعم.",
    "coreIdea": "السؤال ← تضمين شعاعي ← بحث دلالي في قاعدة المتجهات ← استرجاع المقاطع الأكثر صلة ← حقنها في السياق ← توليد إجابة مسندة.",
    "onScreenText": "Question ➔ Vector Search ➔ Relevant Chunks ➔ Augmented Context ➔ Grounded Answer",
    "speakerIntent": "تفكيك منظومة RAG كحل جذري لتحديث معارف النموذج ومنع الهلوسة دون الحاجة لإعادة التدريب الباهظة.",
    "visualMetaphor": "خط سير متدفق يربط مستودع المستندات بمحرك البحث الشعاعي ثم بنافذة السياق والمخرج النهائي.",
    "interactionNeed": "تشغيل محاكاة تدفق استرجاعي لسؤال قانوني لمشاهدة استخلاص الفقرة المطابقة وحقنها.",
    "transitionIntent": "تدفق أفقي خطوة بخطوة (Flow).",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S30",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "استراتيجيات الذاكرة في السياق",
    "subtitle": "الذاكرة اللحظية، الملخصة، والتراكمية المستمرة",
    "englishConcept": "Context Memory Systems",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض آليات حفظ وتحديث الذاكرة عبر الجلسات دون تجاوز سعة نافذة السياق.",
    "coreIdea": "الذاكرة المؤقتة (Buffer) ← الذاكرة التلخيصية (Summary Memory) ← الذاكرة المتجهة الدائمة (Vector Long-term Memory).",
    "onScreenText": "Short-term Buffer • Incremental Summary • Long-term Semantic Memory",
    "speakerIntent": "شرح كيف تحافظ الأنظمة الاحترافية على تذكر الحقائق والقرارات السابقة بكفاءة وحكمة دون هدر الرموز.",
    "visualMetaphor": "ثلاث طبقات ذاكرة هرمية متدرجة من الاستجابة السريعة إلى الأرشيف الدلالي العميق.",
    "interactionNeed": "نقر طبقات الذاكرة لاستعراض آليات الضغط والتحديث الخاصة بكل منها.",
    "transitionIntent": "تراكب طبقي ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S31",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "تكامل نتائج الأدوات في السياق",
    "subtitle": "تحويل مخرجات الواجهات البرمجية إلى سياق حي",
    "englishConcept": "Tool Results & State Integration",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيف تُحقن مخرجات الأدوات والبيانات الحية (API Responses / SQL Tables) داخل سياق النموذج بصيغة قابلة للاستدلال.",
    "coreIdea": "النموذج يطلب أداة ← النظام ينفذها حتمياً ← النتيجة تُعاد وتُنسق كجزء من السياق اللحظي ليتخذ النموذج قراره التالي.",
    "onScreenText": "Tool Call Request ➔ Deterministic Execution ➔ Structured Observation Injection",
    "speakerIntent": "إيضاح أن الأدوات لا تعمل بسحر مستقل، بل تعيد ملاحظاتها إلى نافذة السياق ليعيد النموذج قراءتها والاستدلال بناءً عليها.",
    "visualMetaphor": "حلقة وصل مضيئة تستقبل بيانات خام من خادم خارجي وتحولها فوراً إلى سياق مهيكل يغذي النموذج.",
    "interactionNeed": "استعراض سيناريو استدعاء أداة حسابية وحقن نتيجتها في سياق العقد.",
    "transitionIntent": "اتصال شبكي ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S32",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "معمارية السياق الديناميكي",
    "subtitle": "التقطيع، إعادة الترتيب، والفلترة الوصفية",
    "englishConcept": "Dynamic Context Orchestration",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض تقنيات تنظيم السياق المتقدمة: Chunking Strategies, Reranking, Metadata Filtering.",
    "coreIdea": "الاسترجاع الأولي ليس كافياً؛ إعادة الترتيب (Reranking) تضع المقاطع الأكثر أهمية في المواقع الأكثر جذباً لانتباه النموذج.",
    "onScreenText": "Smart Chunking ➔ Metadata Filter ➔ Semantic Retrieval ➔ Cross-Encoder Reranking",
    "speakerIntent": "شرح التقنيات التي تحول نظام RAG البسيط إلى محرك بحث استشاري فائق الدقة.",
    "visualMetaphor": "مصفاة ثلاثية المراحل تنقي المقاطع المسترجعة وتعيد ترتيبها حسب الأهمية القصوى.",
    "interactionNeed": "نقر مراحل الفلترة وإعادة الترتيب لمعرفة الأثر الرياضي على الدقة.",
    "transitionIntent": "تسلسل مرحلي ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S33",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "فخ التخمة السياقية واختناق الانتباه",
    "subtitle": "تدهور الدقة عند تشبع نافذة السياق",
    "englishConcept": "Context Overload & Saturation",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "التحذير من وهم الاعتماد على النوافذ العملاقة دون معمارية تصفية ذكية.",
    "coreIdea": "التخمة السياقية ترفع تكلفة الاستدلال، تبطئ زمن الاستجابة، وتزيد من احتمالية تجاهل البنود الدقيقة في المستندات الطويلة.",
    "onScreenText": "مزيد من الرموز العشوائية = استجابة أبطأ + تكلفة أعلى + تشتت انتباه النموذج",
    "speakerIntent": "ترسيخ خلاصة هندسة السياق: النجاح ليس في تكبير النافذة، بل في إدارتها بدقة متناهية.",
    "visualMetaphor": "شبكة عصبية مضاءة بكثافة مفرطة تفقد خطوط تمايزها الدقيقة بسبب الحمل الزائد.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع توكيد بصري على معايير الترشيد.",
    "transitionIntent": "تلاش تدريجي للضجيج الزائد.",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S34",
    "axis": "المحور الثالث",
    "axisNumber": 3,
    "title": "Workshop 03: مختبر هندسة السياق واسترجاع المعرفة",
    "subtitle": "بناء منظومة RAG وفلترة المستندات الحساسة",
    "englishConcept": "Workshop 03: Context & RAG Lab",
    "sceneType": "TYPE D (Interactive Workshop)",
    "purpose": "ورشة تفاعلية عملية لتصميم خط استرجاع سياق لمستندات قانونية وهندسية معقدة ومقارنة مخرجات السياق النقي بالسياق الملوث.",
    "coreIdea": "اختبار حي لكيفية تأثير حجم التقطيع (Chunk Size) وإعادة الترتيب (Rerank) على قدرة النموذج في استخراج البند التعاقدي الصحيح.",
    "onScreenText": "تعديل معايير الاسترجاع ➔ قياس نقاء السياق ➔ مقارنة دقة الإجابة المستندة",
    "speakerIntent": "تطبيق عملي مع الحضور يوضح كيفية تحويل مكتبة مستندات ضخمة إلى سياق مركز لا يضلل النموذج.",
    "visualMetaphor": "مختبر محاكاة RAG متكامل يتيح للمحاضر تبديل استراتيجيات الاسترجاع ومقارنة النتائج الحية.",
    "interactionNeed": "تبديل بارامترات التقطيع والفلترة ومشاهدة التغير الفوري في جودة الإسناد والتوثيق.",
    "transitionIntent": "انفتاح واجهة ورشة العمل التفاعلية.",
    "dependencies": [
      "WorkshopEngine",
      "BilingualTerm"
    ]
  },
  {
    "id": "S35",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "ما بعد الأمر الفردي: حتمية سير العمل",
    "subtitle": "المهام المعقدة تتطلب منظومات متعددة المراحل",
    "englishConcept": "Beyond Single Prompts: AI Workflows",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "بيان عجز الأوامر المنفردة عن إدارة العمليات المهنية المعقدة، وضرورة بناء مسارات عمل منسقة (Workflows).",
    "coreIdea": "المهام المهنية الكبرى لا تحل بـ Prompt سحري واحد؛ الحل يكمن في تفكيك العملية إلى خطوات مستقلة مترابطة تضمن الجودة والحتمية.",
    "onScreenText": "أمر أحادي عملاق (Fragile Monolith) ➔ مسار عمل مهيكل ومتعدد المراحل (Robust Workflow)",
    "speakerIntent": "تحويل تفكير الحضور من السعي وراء أمر واحد خارق إلى هندسة خط إنتاج فكري ذكي ومتماسك.",
    "visualMetaphor": "سلسلة إنتاج فكرية مضيئة تتحرك فيها المهمة عبر محطات فحص وتدقيق متتالية.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع حركة تدفق تسلسلي.",
    "transitionIntent": "انتقال تسلسلي ناعم.",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S36",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "تفكيك المهام المركبة إلى وحدات ذرية",
    "subtitle": "مبدأ الذرية والمسؤولية المنفردة",
    "englishConcept": "Task Decomposition & Modularity",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح استراتيجية تقسيم المهمة الكبرى (مثل تدقيق عقد كامل) إلى مهام ذرية صغيرة (استخراج الأطراف، فحص الاختصاص، قياس التعويضات).",
    "coreIdea": "كل خطوة في سير العمل تركز على هدف واحد محدد، مما يرفع الدقة إلى أقصاها ويجعل التحقق من صحة النتائج أمراً ممكناً برمجياً.",
    "onScreenText": "مهمة كلية كبرى ➔ تفكيك ذري (Decomposition) ➔ مهام دقيقة مستقلة سهلة التحقق",
    "speakerIntent": "تعليم المتدربين كيفية تفكيك أعقد الإجراءات المؤسسية إلى لبنات بناء بسيطة يسهل توجيه النموذج لإنجازها.",
    "visualMetaphor": "كتلة معقدة تتفكك ضوئياً إلى أربع وحدات ذرية منظمة ومستقلة الوظائف.",
    "interactionNeed": "نقر كل وحدة ذرية لمشاهدة مدخلاتها المحددة ومخرجاتها الصريحة.",
    "transitionIntent": "تفكيك تركيبي (Decompose).",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S37",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "تدفقات التنفيذ التتابعية والتفرعية",
    "subtitle": "المسارات الخطية، المتوازية، والمشروطة",
    "englishConcept": "Sequential, Parallel & Branching Flows",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض الأنماط الهيكلية لتنفيذ مسارات العمل: التسلسل الخطي، التنفيذ المتوازي لتسريع الوقت، والتفرع الشرطي.",
    "coreIdea": "Sequential (خطوة تلو أخرى) • Parallel (تحليل عدة مستندات في نفس اللحظة) • Branching (توجيه المسار حسب طبيعة المدخل).",
    "onScreenText": "التتابع الخطي • التنفيذ المتوازي • التفرع الشرطي الذكي",
    "speakerIntent": "إيضاح كيفية تسريع العمليات المعقدة عبر تشغيل عدة استدعاءات متوازية ثم تجميع نتائجها في تقرير موحد.",
    "visualMetaphor": "مخطط انسيابي متفرع مضيء يوضح مسارات التوازي والالتقاء في نقطة تجميع نهائية.",
    "interactionNeed": "تبديل مسار التدفق بين النمط التتابعي والنمط المتوازي لمشاهدة فارق الأداء والزمن.",
    "transitionIntent": "تفرع انسيابي ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S38",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "بوابات القرار والتحقق الشرطي",
    "subtitle": "الحتمية البرمجية في قلب المنظومة الذكية",
    "englishConcept": "Decision Gates & Conditional Routing",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيفية دمج بوابات التحقق الحتمية (Validation Gates) لمنع تمرير أي مخرج مشوه للخطوة التالية.",
    "coreIdea": "إذا لم يستوف المخرج معايير الجودة الصارمة (مثل التحقق من وجود رقم المادة وتاريخ السريان)، تُرفض النتيجة وتُعاد صياغتها تلقائياً.",
    "onScreenText": "المدخل ➔ التحليل ➔ بوابة التحقق [Pass / Fail] ➔ التمرير أو إعادة التوليد",
    "speakerIntent": "إبراز دور المنطق البرمجي الحتمي في ضبط مخرجات النماذج الاحتمالية وتحقيق الجودة المطلقة.",
    "visualMetaphor": "بوابة أمان مضيئة تفحص البيانات المارة وتسمح فقط للبيانات المطابقة للمعيار بالعبور.",
    "interactionNeed": "نقر سيناريو فحص مخرج غير مكتمل لمشاهدة رد فعل بوابة التحقق بإرجاعه للتصحيح.",
    "transitionIntent": "إضاءة بوابة العبور.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S39",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "تكامل الأدوات واستدعاء الوظائف",
    "subtitle": "ربط مسار العمل بالأنظمة وقواعد البيانات",
    "englishConcept": "Function & Tool Calling in Workflows",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح دور استدعاء الأدوات (Tool Calling) في تمكين مسار العمل من جلب بيانات حية أو تنفيذ حسابات رياضية دقيقة.",
    "coreIdea": "النماذج لا تملك آلة حاسبة أو وصولاً لقاعدة بيانات المحكمة؛ استدعاء الأدوات يربط ذكاء النموذج بقوة البرمجيات الحتمية.",
    "onScreenText": "Model Intelligence + External Deterministic Tools (Calculators, DBs, APIs)",
    "speakerIntent": "إيضاح كيف يستعين مسار العمل بأدوات خارجية للتحقق من أرقام القضايا وحساب المهل القانونية بدقة 100%.",
    "visualMetaphor": "محرك ذكاء اصطناعي محاط بترسانة أدوات برمجية ترتبط به عبر مقابس ضوئية متوافقة.",
    "interactionNeed": "استعراض أمثلة للأدوات الأكثر استخداماً في مسارات العمل القانونية والهندسية.",
    "transitionIntent": "تكامل شبكي للأدوات.",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S40",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "معالجة الأخطاء والتعافي الذاتي",
    "subtitle": "بناء مسارات عمل مرنة ومقاومة للانقطاع",
    "englishConcept": "Error Handling & Self-Healing Loops",
    "sceneType": "TYPE C (Mini Explainer Scene)",
    "purpose": "شرح استراتيجيات التعافي الذاتي (Self-Healing Loops) وإعادة المحاولة مع تنبيه النموذج بنوع الخلل لتصحيحه.",
    "coreIdea": "عند فشل خطوة في سير العمل، لا يتوقف النظام بل يتم تغذية رسالة الخطأ للنموذج لتعديل المدخل وإعادة المحاولة فوراً.",
    "onScreenText": "خطأ في التنسيق ➔ التقاط الخطأ برمجيًا ➔ توجيه النموذج لتصحيحه ➔ استئناف المسار بنجاح",
    "speakerIntent": "شرح كيفية تصميم أنظمة مستقرة قادرة على العمل دون انقطاع حتى في ظل تقلبات مخرجات النماذج.",
    "visualMetaphor": "حلقة تصحيح ذاتي خضراء تلتف حول نقطة العطل وتعيد توجيه التدفق للمسار السليم.",
    "interactionNeed": "محاكاة تفاعلية لحدوث خطأ في مخرج JSON وتصحيحه الذاتي خلال ميلي ثانية.",
    "transitionIntent": "دوران تصحيحي هادئ (Feedback).",
    "dependencies": [
      "ExplainerOverlay",
      "BilingualTerm"
    ]
  },
  {
    "id": "S41",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "بوابات المراجعة البشرية الحاكمة",
    "subtitle": "التدخل البشري في الحلقات المفصلية",
    "englishConcept": "Human-in-the-Loop (HITL) Gates",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "ترسيخ ضرورة وجود نقاط توقف إلزامية تتطلب اعتماداً بشرياً صريحاً قبل اتخاذ الإجراءات الحساسة.",
    "coreIdea": "الذكاء الاصطناعي يحلل، يلخص، ويعد المسودات؛ والإنسان يراجع، يعتمد، ويتحمل المسؤولية الأخلاقية والقانونية.",
    "onScreenText": "إعداد وتحليل آلي ➔ وقفة مراجعة بشرية إلزامية (Human Gate) ➔ اعتماد ومصادقة نهائية",
    "speakerIntent": "التأكيد على أن الهدف من سير العمل ليس إقصاء الإنسان، بل تمكينه ووضعه في موقع صاحب القرار الحاسم.",
    "visualMetaphor": "بوابة مراجعة سيادية تعترض المسار الآلي وتنتظر مصادقة بشرية مضيئة لاستكمال التدفق.",
    "interactionNeed": "نقر زر المصادقة البشرية في المحاكاة لمشاهدة استئناف سير العمل بعد الموافقة.",
    "transitionIntent": "وقفة انتباه مضيئة.",
    "dependencies": [
      "HumanGate",
      "BilingualTerm"
    ]
  },
  {
    "id": "S42",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "دراسة حالة: سير عمل قانوني ومهني متكامل",
    "subtitle": "تحليل مخاطر عقود الفيديك FIDIC والمطالبات المالية",
    "englishConcept": "Case Study: End-to-End Professional Workflow",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض سيناريو واقعي متكامل لتحليل ومطابقة مطالبات المقاولين وفق عقود الفيديك FIDIC.",
    "coreIdea": "استلام المستند ← استخراج التواريخ والمبالغ ← مطابقة شروط الإخطار (Sub-Clause 20.1) ← فحص السند الزمني ← تقرير المخاطر للمستشار.",
    "onScreenText": "استلام المطالبة ➔ فحص مهلة الإخطار ➔ تدقيق السند الزمني ➔ تقييم المخاطر ➔ مراجعة المستشار",
    "speakerIntent": "إثبات القوة الهائلة لمسارات العمل المنضبطة في اختصار أيام من العمل القانوني والهندسي إلى دقائق معدودة وبدقة متناهية.",
    "visualMetaphor": "خريطة سير عمل مهنية شاملة تتنقل فيها المطالبة عبر 5 محطات تدقيق متخصصة.",
    "interactionNeed": "استكشاف تفاصيل كل مرحلة من مراحل تدقيق عقد الفيديك والمخرجات الناتجة عنها.",
    "transitionIntent": "تسلسل تحليلي متكامل.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S43",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "تقييم ومراقبة كفاءة مسارات العمل",
    "subtitle": "مؤشرات الأداء، زمن الاستجابة، والتكلفة التشغيلية",
    "englishConcept": "Workflow Observability & Evaluation",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيفية قياس كفاءة مسار العمل من حيث: الدقة الإجمالية، زمن الاستجابة (Latency)، وتكلفة استهلاك الرموز (Cost).",
    "coreIdea": "المسار الاحترافي يوازن بين الدقة العالية والتكلفة الاقتصادية وسرعة التسليم من خلال المراقبة المستمرة (Observability).",
    "onScreenText": "مؤشرات الكفاءة: معدل النجاح الشامل • سرعة التنفيذ • ترشيد استهلاك الرموز • جودة المخرجات",
    "speakerIntent": "تزويد الحضور بالمعايير التي تحكم نجاح نشر الأنظمة الذكية على النطاق المؤسسي التجاري.",
    "visualMetaphor": "لوحة قياس ومراقبة متطورة (Observability Dashboard) تعرض مقاييس الأداء الحية.",
    "interactionNeed": "نقر مقاييس الأداء لمشاهدة استراتيجيات تحسين كل مؤشر.",
    "transitionIntent": "ظهور مؤشرات القياس.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S44",
    "axis": "المحور الرابع",
    "axisNumber": 4,
    "title": "Workshop 04: محاكي بناء مسار عمل ذكي",
    "subtitle": "تركيب مسار متعدد الخطوات مع بوابات قرار وتحقق",
    "englishConcept": "Workshop 04: AI Workflow Builder Simulator",
    "sceneType": "TYPE D (Interactive Workshop)",
    "purpose": "ورشة تفاعلية حية تتيح للمحاضر بناء واختبار مسار عمل ذكي متكامل يتضمن تفكيك مهام، استدعاء أدوات، وبوابات مراجعة بشرية.",
    "coreIdea": "محاكاة تشغيل مسار تدقيق عقد أو تقرير مالي وملاحظة تدفق البيانات عبر البوابات الشرطية حتى الوصول للاعتماد النهائي.",
    "onScreenText": "توصيل العقد ➔ ضبط بوابات القرار ➔ تشغيل المحاكاة ➔ مراجعة المخرج النهائي",
    "speakerIntent": "تمكين الحضور من رؤية فلسفة مسار العمل تتجسد حياً أمام أعينهم كمنظومة برمجية متماسكة.",
    "visualMetaphor": "محرر مسارات عمل مرئي (Visual Workflow Canvas) تفاعلي يربط العقد البرمجية بأسلاك ضوئية نشطة.",
    "interactionNeed": "تشغيل محاكاة المسار خطوة بخطوة والتفاعل مع بوابة المراجعة البشرية لاعتماد التقرير.",
    "transitionIntent": "انفتاح محاكي بناء مسار العمل.",
    "dependencies": [
      "WorkshopEngine",
      "BilingualTerm"
    ]
  },
  {
    "id": "S45",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "من المسار المبرمج إلى النظام الموجه بالهدف",
    "subtitle": "مدخل إلى هندسة الوكلاء الأذكياء",
    "englishConcept": "From Workflows to Autonomous Agents",
    "sceneType": "TYPE A (Cinematic Paradigm)",
    "purpose": "إيضاح النقلة النوعية من مسارات العمل المحددة مسبقاً (Deterministic Workflows) إلى الوكلاء الموجهين بالأهداف (Goal-Driven Agents).",
    "coreIdea": "سير العمل ينفذ مساراً ثابتاً محدد الخطوات سلفاً؛ بينما الوكيل المستقل يقرر بنفسه ما هي الخطوة والأداة التالية لتحقيق الهدف المحدد.",
    "onScreenText": "سير العمل = مسار خطوات مبرمج مسبقاً ➔ الوكيل الذكي = نظام موجه بهدف يقرر مساره ذاتياً",
    "speakerIntent": "إشعال الحماس للمحور الخامس: وصلنا إلى قمة الهرم، حيث تكتسب الآلة قدرة التخطيط وحرية الحركة المقيدة.",
    "visualMetaphor": "مسار قطار ثابت يتحول إلى طائرة استكشافية ذكية ترسم مسارها الخاص في الفضاء المعرفي نحو الهدف.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع توهج برتقالي لبوابة الهدف.",
    "transitionIntent": "انطلاق سينمائي نحو الهدف (Transform).",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S46",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "التشريح المعماري للوكيل الذكي",
    "subtitle": "المكونات الستة لمنظومة الوكيل المستقل",
    "englishConcept": "The Core Agent Architecture",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض الأعضاء الحيوية للوكيل: 1. الهدف (Goal) • 2. الشخصية (Persona) • 3. الذاكرة (Memory) • 4. محرك التخطيط (Planning) • 5. ترسانة الأدوات (Tools) • 6. حلقة التنفيذ والملاحظة (Execution Loop).",
    "coreIdea": "الوكيل ليس مجرد نموذج لغوي؛ بل هو معمارية متكاملة تدمج النموذج كعقل مفكر ومخطط داخل هيكل برمجي يمتلك ذاكرة وأدوات.",
    "onScreenText": "Goal • Persona • Planning Engine • Memory Systems • Toolset • Execution Loop",
    "speakerIntent": "تقديم نموذج معياري لهندسة الوكلاء يفصل بين وظيفة التفكير ووظيفة التخزين ووظيفة التنفيذ الفعلي.",
    "visualMetaphor": "مخطط هيكلي سداسي متطور يبرز تكامل النواة التخطيطية مع الذاكرة والأدوات المحيطة.",
    "interactionNeed": "نقر كل مكون من المكونات الستة لاستكشاف وظيفته الحيوية في اتخاذ القرار.",
    "transitionIntent": "تجميع معماري سداسي (Converge).",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S47",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "حلقة الإدراك والتخطيط والتنفيذ والملاحظة",
    "subtitle": "إطار عمل ReAct ومنهجية التفكير الإجرائي",
    "englishConcept": "The ReAct Loop: Reason + Act + Observe",
    "sceneType": "TYPE E (Process Simulation Scene)",
    "purpose": "شرح إطار ReAct وكيف يتنقل الوكيل بين التفكير الداخلي واستدعاء الأدوات الخارجية وملاحظة النتائج.",
    "coreIdea": "الهدف ← تفكير وتخطيط (Thought) ← تنفيذ إجراء أو استدعاء أداة (Action) ← ملاحظة النتيجة (Observation) ← تقييم الموقف وتكرار الحلقة حتى إنجاز الهدف.",
    "onScreenText": "Goal ➔ Thought / Plan ➔ Tool Action ➔ Environment Observation ➔ Reflection ➔ Next Step",
    "speakerIntent": "توضيح أن الوكيل لا يلقي بالجواب دفعة واحدة، بل يجري حواراً استدلالياً داخلياً يوجه به أفعاله خطوة بخطوة.",
    "visualMetaphor": "حلقة مدارية ديناميكية متدفقة تدور فيها الأفكار والإجراءات والملاحظات بتناغم دقيق.",
    "interactionNeed": "تشغيل محاكاة حية لحلقة ReAct لحل مسألة بحثية متعددة الخطوات.",
    "transitionIntent": "دوران مداري هادئ (Loop).",
    "dependencies": [
      "ConceptNode",
      "BilingualTerm"
    ]
  },
  {
    "id": "S48",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "استراتيجيات التخطيط وتقسيم الأهداف",
    "subtitle": "من التخطيط الخطي إلى شجرة الأفكار والتأمل الذاتي",
    "englishConcept": "Agent Planning Strategies: ToT & Reflexion",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "استعراض آليات التخطيط المتقدمة: Plan-and-Solve, Tree of Thoughts (ToT), ومناهج التأمل الذاتي (Reflexion).",
    "coreIdea": "الوكيل المتقدم يولد خطة عمل كاملة قبل البدء، ويستكشف مسارات تفكير بديلة، ويتعلم من محاولاته الفاشلة لتعديل خطته ذاتياً.",
    "onScreenText": "Plan-and-Solve • Tree of Thoughts (شجرة الأفكار) • Self-Reflection (التأمل الذاتي)",
    "speakerIntent": "إبراز الفارق بين وكيل مندفع يرتكب الأخطاء ووكيل استراتيجي يزن الاحتمالات ويراجع خطته قبل التنفيذ.",
    "visualMetaphor": "شجرة تفكير تفرعية مضيئة تستكشف مسارات متعددة وتختار المسار الأكثر أماناً وكفاءة.",
    "interactionNeed": "مقارنة استراتيجيات التخطيط الثلاث واكتشاف متى تستخدم كل منها.",
    "transitionIntent": "تفرع استكشافي ناعم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S49",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "ترسانة الأدوات واستقلالية التنفيذ",
    "subtitle": "تمكين الوكيل من التعامل مع العالم الرقمي",
    "englishConcept": "Tool Arsenal & Sandbox Execution",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيفية تزويد الوكيل بمكتبة أدوات (Web Search, File System, Code Execution, REST APIs) وقواعد اختيار الأداة المناسبة ديناميكياً.",
    "coreIdea": "الوكيل يقرأ وصف الأداة ومدخلاتها، ويولد طلب الاستدعاء بالمعايير الصحيحة، وينفذ الإجراء داخل بيئة معزولة آمنة (Sandbox).",
    "onScreenText": "محرك الوكيل يختار الأداة الأنسب بحرية مقيدة • التنفيذ حصرياً داخل بيئة معزولة وآمنة (Sandbox)",
    "speakerIntent": "شرح كيف يوسع الوكيل قدراته إلى ما لا نهاية من خلال استدعاء البرمجيات الخارجية المتخصصة.",
    "visualMetaphor": "خزانة أدوات ذكية ترتبط بحزام أمان برمجية يعزل منطقة التنفيذ.",
    "interactionNeed": "نقر فئات الأدوات (البحث، المعالجة، القراءة، التنفيذ) لمعرفة معايير الأمان المطبقة عليها.",
    "transitionIntent": "انتشار وتكامل للأدوات.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S50",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "الذاكرة التراكمية والتكيف الذاتي",
    "subtitle": "تراكم الخبرات وتطور أداء الوكيل عبر الزمن",
    "englishConcept": "Agent Memory & Experience Accumulation",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح كيفية قيام الوكيل بتخزين سجلات تجاربه الناجحة والفاشلة واسترجاعها لتحسين قراراته المستقبلية.",
    "coreIdea": "ذاكرة الأحداث (Episodic Memory) تسجل ما حدث • الذاكرة الدلالية (Semantic) تخزن الحقائق • الذاكرة الإجرائية (Procedural) تخزن المهارات المكتسبة.",
    "onScreenText": "Episodic (سجل التجارب) • Semantic (الحقائق) • Procedural (المهارات وقواعد العمل المكتسبة)",
    "speakerIntent": "إيضاح كيف يتحول الوكيل من نظام ثابت إلى منظومة ذكية تراكمية تتعلم من كل جلسة عمل.",
    "visualMetaphor": "شبكة بلورية ثلاثية الأبعاد تنمو وتزداد ترابطاً مع كل تجربة جديدة يخوضها الوكيل.",
    "interactionNeed": "استكشاف أنواع الذاكرة الثلاثة وكيفية استرجاعها أثناء حل المهام الجديدة.",
    "transitionIntent": "نمو وتوسع بلوري هادئ.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S51",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "أنظمة الوكلاء المتعددين",
    "subtitle": "التعاون والتخصص والتفويض الهرمي",
    "englishConcept": "Multi-Agent Systems (MAS)",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح معمارية الوكلاء المتعددين (Multi-Agent Systems): الوكيل المنسق (Orchestrator)، الوكلاء المتخصصون (Workers)، والمراجعة التناظرية.",
    "coreIdea": "بدلاً من تحميل وكيل واحد كافة الأعباء، يتم بناء فريق من الوكلاء المتخصصين (وكيل بحث، وكيل تحليل، وكيل تدقيق، وكيل صياغة) تحت قيادة وكيل منسق.",
    "onScreenText": "Orchestrator Agent (القائد المنسق) ➔ Specialist Agents (فريق الخبراء المتخصص) ➔ Final Synthesis",
    "speakerIntent": "توضيح أن قمة الذكاء الاصطناعي الحالي ليست نموذجاً عملاقاً وحيداً، بل شبكة وكلاء متعاونين يراجع بعضهم عمل بعض.",
    "visualMetaphor": "غرفة قيادة عمليات ذكية تضم قائداً مركزياً يوجه أربعة وكلاء تخصصيين بمسارات ضوئية متناسقة.",
    "interactionNeed": "نقر أدوار فريق الوكلاء المتعددين لمشاهدة بروتوكول تسليم المهام بينهم.",
    "transitionIntent": "تشبيك متعدد المحاور (Network).",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S52",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "الوكيل ليس شات بوت: الفروق الجوهرية",
    "subtitle": "مصفوفة الفوارق بين مستويات الأتمتة",
    "englishConcept": "Agent ≠ Chatbot ≠ Single Prompt",
    "sceneType": "TYPE B (Interactive Comparison Board)",
    "purpose": "ترسيخ الفوارق الجوهرية بين الأنماط الثلاثة وتحديد متى نحتاج كل مستوى في المؤسسات.",
    "coreIdea": "Chatbot: تفاعل حواري رد فعلي • Workflow: مسار مبرمج ثابت الخطوات • Agent: نظام موجه بهدف يمتلك التخطيط واستدعاء الأدوات والتكيف الذاتي.",
    "onScreenText": "Chatbot (حوار سطحي) vs Workflow (مسار ثابت) vs Agent (استقلالية موجهة بالأهداف)",
    "speakerIntent": "مساعدة متخذي القرار في المؤسسات على التمييز بين شراء شات بوت تقليدي وبين الاستثمار في بناء بنية تحتية للوكلاء المستقلين.",
    "visualMetaphor": "مصفوفة مقارنة ثلاثية الأعمدة تبرز مؤشرات الاستقلالية والتكيف والأدوات والتعقيد.",
    "interactionNeed": "تبديل محاور المقارنة بين الأنظمة الثلاثة لاكتشاف الفروق التقنية العميقة.",
    "transitionIntent": "انقسام ثلاثي منظم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S53",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "حدود الاستقلالية والمخاطر التشغيلية",
    "subtitle": "الحلقات اللانهائية، انحراف الأهداف، والآثار الجانبية",
    "englishConcept": "Bounded Autonomy & Failure Modes",
    "sceneType": "TYPE A (Cinematic Caution)",
    "purpose": "تشريح المخاطر التشغيلية الكبرى للوكلاء المستقلين: الحلقات التكرارية غير المنتهية (Infinite Loops)، انحراف الهدف (Goal Drift)، والتنفيذ غير المقصود للأدوات.",
    "coreIdea": "الاستقلالية المطلقة وهم خطير؛ الاستقلالية الآمنة يجب أن تكون مقيدة بحدود صلبة (Bounded Autonomy) ومحكومة بأسقف تكلفة وزمن وتدخل بشري.",
    "onScreenText": "الاستقلالية بلا ضوابط = مخاطر تشغيلية وانحراف أهداف • الحل = Bounded Autonomy & Hard Limits",
    "speakerIntent": "التمهيد المباشر للطبقة الحاكمة: لماذا تمثل الرقابة على التفويض صمام الأمان الحتمي لأي نظام وكلاء ناجح.",
    "visualMetaphor": "سياج أمان ضوئي أحمر متوهج يحيط بمسار الوكيل ويمنعه من الانزلاق خارج منطقة السلامة.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع تحذير بصري منضبط.",
    "transitionIntent": "ظهور سياج الأمان (Boundary).",
    "dependencies": [
      "PermissionBoundary",
      "BilingualTerm"
    ]
  },
  {
    "id": "S54",
    "axis": "المحور الخامس",
    "axisNumber": 5,
    "title": "Workshop 05: مختبر معمارية الوكيل متعدد الأدوات",
    "subtitle": "بناء وكيل مستقل مع حواجز أمان وصلاحيات محكمة",
    "englishConcept": "Workshop 05: Autonomous Agent Lab",
    "sceneType": "TYPE D (Interactive Workshop)",
    "purpose": "ورشة تفاعلية عملية شاملة لتصميم وتجميع وكيل ذكي مستقل: تحديد الهدف، اختيار الأدوات، ضبط الذاكرة، وفرض حواجز الأمان والبوابات البشرية.",
    "coreIdea": "بناء وكيل استشاري يقوم بجمع البيانات من مصادر متعددة، فحص التناقضات، وصياغة تقرير متكامل مع التوقف عند النقاط الحرجة لطلب الإذن.",
    "onScreenText": "تحديد الهدف ➔ تزويد الأدوات ➔ ضبط سياسة التخطيط ➔ تفعيل جدار الصلاحيات ➔ تشغيل المحاكاة",
    "speakerIntent": "تتويج الجانب العملي للمحاضرة عبر مشاهدة الوكيل يعمل بكامل طاقته المستقلة تحت المظلة الآمنة للمحاضر.",
    "visualMetaphor": "مختبر معمارية الوكلاء التفاعلي الشامل (Agent Architecture Builder) يربط النواة بالأدوات ومؤشرات الحوكمة.",
    "interactionNeed": "تعديل إعدادات الوكيل، إطلاق المهمة، وملاحظة حلقة ReAct وهي تنفذ المهام خطوة بخطوة مع طلب الإذن عند الأداة الحساسة.",
    "transitionIntent": "انفتاح واجهة ورشة العمل التفاعلية الكبرى.",
    "dependencies": [
      "WorkshopEngine",
      "BilingualTerm"
    ]
  },
  {
    "id": "S55",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "مصفوفة قرار التفويض: ماذا نفوض وماذا نحتفظ به؟",
    "subtitle": "الفرز الاستراتيجي للمهام المهنية والمؤسسية",
    "englishConcept": "The Delegation Decision Matrix",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "وضع معيار علمي حاسم لفرز المهام: ما الذي يجوز تفويضه للوكلاء بالكامل، ما الذي يفوض مع مراجعة، وما الذي يحظر تفويضه قطعياً.",
    "coreIdea": "نفوض: البحث، التلخيص، التنقيب، إعداد المسودات، وتحويل الصيغ • نحتفظ بـ: التقييم الأخلاقي، القرارات المصيرية، توقيع العقود، والمسؤولية القانونية.",
    "onScreenText": "تفويض كامل (Routine Execution) • تفويض مشروط بالمراجعة (Analysis) • حظر التفويض (Sovereign Judgment)",
    "speakerIntent": "تزويد القادة والمحترفين بقاعدة قرار واضحة تمنع الإفراط في التفويض أو التردد غير المبرر.",
    "visualMetaphor": "مصفوفة رباعية متدرجة المستويات تميز بين المهام القابلة للأتمتة والمهام الحصرية للسيادة البشرية.",
    "interactionNeed": "نقر مستويات التفويض الثلاثة لاستعراض أمثلة واقعية لكل مستوى.",
    "transitionIntent": "تصنيف مصفوفي منظم.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S56",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "حدود الصلاحيات وحواجز الأمان",
    "subtitle": "مبدأ الامتيازات الدنيا والعزل البيئي الصارم",
    "englishConcept": "Permission Boundaries & Sandboxing",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح تطبيق مبدأ Least Privilege على الوكلاء: لا تمنح الوكيل وصولاً كاملاً للبريد أو قواعد البيانات بل صلاحيات مقيدة ومؤقتة ومحددة بالنطاق.",
    "coreIdea": "عزل بيئة الوكيل (Sandboxing) وتقييد صلاحيات القراءة والكتابة يضمن أنه حتى في حال حدوث خطأ استدلالي، فإن الأثر يظل محاصراً.",
    "onScreenText": "صلاحيات مقيدة بالحد الأدنى • عزل بيئي كامل • منع الكتابة والتعديل المباشر دون تصريح",
    "speakerIntent": "شرح المعايير الأمنية المؤسسية التي تحمي بيانات الشركات الحساسة من تسريب أو عبث الوكلاء المستقلين.",
    "visualMetaphor": "غرفة عمليات زجاجية مدرعة محاطة بجدران حماية برمجية تمنع خروج أي أمر غير مصرح به.",
    "interactionNeed": "استكشاف درجات الصلاحيات الأربع وتأثير تطبيقها على أمان المنظومة.",
    "transitionIntent": "إحكام جدار الحماية (Boundary).",
    "dependencies": [
      "PermissionBoundary",
      "BilingualTerm"
    ]
  },
  {
    "id": "S57",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "البوابة البشرية واستعادة القرار الفوري",
    "subtitle": "حق النقض والتعطيل السيادي اللحظي",
    "englishConcept": "Human Sovereign Override & Kill-Switch",
    "sceneType": "TYPE A (Cinematic Authority)",
    "purpose": "ترسيخ مبدأ Sovereign Override: يجب أن يمتلك الإنسان دائماً زر إيقاف فوري (Kill-Switch) والقدرة على سحب التفويض وتعديل القرار في أي لحظة.",
    "coreIdea": "السيادة الإنسانية ليست خياراً إضافياً بل شرط شرعي وقانوني وهندسي؛ النظام الذكي يعمل بإذن الإنسان ويتوقف فور إشارته.",
    "onScreenText": "السيادة للإنسان دائماً • حق النقض الفوري (Override) • زر الإيقاف والتعطيل اللحظي (Kill-Switch)",
    "speakerIntent": "التأكيد على أن التطور التقني لا يعني التنازل عن القيادة والمسؤولية الإنسانية الأصيلة.",
    "visualMetaphor": "مفتاح سيادة ذهبي متوهج يعلو كافة الأنظمة ويمتلك السيطرة المطلقة على مسار الطاقة.",
    "interactionNeed": "تبادل ثنائي للمصطلحات مع نبض ضوئي هادئ لرمز السيادة.",
    "transitionIntent": "استقرار مهيب وراسخ.",
    "dependencies": [
      "HumanGate",
      "BilingualTerm"
    ]
  },
  {
    "id": "S58",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "التوثيق الجنائي ومسار التدقيق",
    "subtitle": "الشفافية الكاملة والقابلية للمساءلة القانونية",
    "englishConcept": "Audit Trails & Deterministic Logging",
    "sceneType": "TYPE B (Interactive Knowledge Board)",
    "purpose": "شرح أهمية حفظ سجلات تدقيق حتمية (Immutable Audit Logs) تسجل كل خطوة فكرية، أداة مستدعاة، ومخرج وسيط للوكيل.",
    "coreIdea": "لكي تكون المنظومة مقبولة قانونياً وقضائياً، يجب أن نتمكن من إعادة بناء سلسلة اتخاذ القرار خطوة بخطوة وتحديد سبب كل إجراء بدقة.",
    "onScreenText": "سجل تدقيق غير قابل للتعديل • توثيق كل خطوة استدلالية • الشفافية الكاملة أمام القضاء وجهات الرقابة",
    "speakerIntent": "ربط الخبرة القانونية الرفيعة بالمعايير الهندسية لضمان الامتثال للوائح الذكاء الاصطناعي الدولية (EU AI Act & ISO 42001).",
    "visualMetaphor": "سجل رقمي مشفر غير قابل للتلاعب تنحفر فيه خطوات العمليات بمسار زمني دقيق.",
    "interactionNeed": "نقر مكونات سجل التدقيق لمشاهدة تفاصيل تتبع خطوة اتخاذ القرار.",
    "transitionIntent": "تسجيل زمني متتابع.",
    "dependencies": [
      "InteractiveBoard",
      "BilingualTerm"
    ]
  },
  {
    "id": "S59",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "اكتمال الرحلة الفكرية",
    "subtitle": "المسار السداسي المتكامل من الفهم إلى الرقابة",
    "englishConcept": "The Completed Paradigm",
    "sceneType": "TYPE A (Cinematic Synthesis)",
    "purpose": "استرجاع ودمج المحطات الست الكبرى للمحاضرة في مشهد ختامي موحد يرسخ التحول الفكري لدى الحضور.",
    "coreIdea": "افهم (الآلة) ← وجّه (الأمر) ← زوّد (السياق) ← نظّم (سير العمل) ← فوّض (الوكيل) ← راقب (الحوكمة والسيادة).",
    "onScreenText": "افهم ➔ وجّه ➔ زوّد ➔ نظّم ➔ فوّض ➔ راقب",
    "speakerIntent": "إشعار الحضور باكتمال البناء المعرفي وانتقالهم الحقيقي من مجرد مستخدمين عاديين إلى مهندسين وقادة لمنظومات الذكاء الاصطناعي.",
    "visualMetaphor": "حلقة متكاملة تجمع الألوان الستة للمحاضرة وتلتقي عند مركز القيادة الإنسانية الرصينة.",
    "interactionNeed": "تبادل ثنائي للمسار السداسي بالكامل مع حركة توهج جامعة.",
    "transitionIntent": "تكامل بصري شامل (Synthesis).",
    "dependencies": [
      "BilingualTerm"
    ]
  },
  {
    "id": "S60",
    "axis": "الرقابة على التفويض",
    "axisNumber": 6,
    "title": "الرسالة الختامية",
    "subtitle": "من مخاطبة الآلة إلى تفويضها",
    "englishConcept": "Closing Credo & Master Takeaway",
    "sceneType": "TYPE A (Cinematic Credo)",
    "purpose": "إطلاق المقولة الحاكمة والرسالة النهائية للمحاضرة وترسيخ البصمة الفكرية للدكتور أحمد عبدالسلام.",
    "coreIdea": "«المهارة لم تعد أن تعرف ماذا تقول للآلة فقط؛ بل أن تعرف ماذا تعطيها، وكيف تنظّم عملها، وماذا تفوضها، ومتى تستعيد القرار منها.»",
    "onScreenText": "«المهارة لم تعد أن تعرف ماذا تقول للآلة فقط؛\nبل أن تعرف ماذا تعطيها، وكيف تنظّم عملها،\nوماذا تفوضها، ومتى تستعيد القرار منها.»\n— د. أحمد عبدالسلام",
    "speakerIntent": "ختام المحاضرة بوقفة فكرية مهيبة تحفر في أذهان الحضور المعنى الحقيقي للاحتراف في عصر الذكاء الاصطناعي التوليدي والوكلاء.",
    "visualMetaphor": "أفق ضوئي عميق يلتقي فيه شعار أكاديمية العدالة مع المقولة الذهبية بحروف بيضاء وكلمات مفتاحية برتقالية متوهجة.",
    "interactionNeed": "حركة نصية هادئة تستقر بمهابة وتبقى ثابتة للمناقشة الختامية.",
    "transitionIntent": "استقرار سينمائي نهائي.",
    "dependencies": [
      "AcademyLogo",
      "BilingualTerm"
    ]
  }
];

// Global Presentation State
const state = {
  currentIndex: 0,
  isHubOpen: false,
  isAxisMapOpen: false,
  activeExplainer: null,
  isFullscreen: false,
  bilingualIndex: 0,
  // Persistent workshop states
  w1Selected: 0,
  w2Fixes: { goal: false, format: false, constraints: false, fewShot: false },
  w3ChunkSize: 500,
  w3Rerank: true,
  w4Step: 1,
  w4Approved: false,
  w5Running: false,
  w5Logs: [],
  w5Permission: false,
  interactiveActiveCards: {}
};

// Initialize Application
function initApp() {
  parseHashRoute();
  setupKeyboardListeners();
  setupBilingualTimer();
  renderApp();
  window.addEventListener('hashchange', parseHashRoute);
  window.addEventListener('resize', handleResize);
}

function parseHashRoute() {
  const hash = window.location.hash.replace('#', '').toUpperCase();
  if (hash) {
    const idx = SLIDES_DATA.findIndex(s => s.id === hash);
    if (idx !== -1 && idx !== state.currentIndex) {
      state.currentIndex = idx;
      renderApp();
    }
  }
}

function updateHashRoute() {
  const currentSlide = SLIDES_DATA[state.currentIndex];
  if (currentSlide) {
    history.replaceState(null, '', '#' + currentSlide.id);
  }
}

function goToSlide(index) {
  if (index >= 0 && index < SLIDES_DATA.length) {
    state.currentIndex = index;
    state.activeExplainer = null;
    updateHashRoute();
    renderApp();
  }
}

function nextSlide() {
  if (state.currentIndex < SLIDES_DATA.length - 1) {
    goToSlide(state.currentIndex + 1);
  }
}

function prevSlide() {
  if (state.currentIndex > 0) {
    goToSlide(state.currentIndex - 1);
  }
}

function toggleHub() {
  state.isHubOpen = !state.isHubOpen;
  state.isAxisMapOpen = false;
  renderApp();
}

function toggleAxisMap() {
  state.isAxisMapOpen = !state.isAxisMapOpen;
  state.isHubOpen = false;
  renderApp();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn("Fullscreen request error:", err);
    });
    state.isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    state.isFullscreen = false;
  }
  renderApp();
}

function setupKeyboardListeners() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.isHubOpen || state.isAxisMapOpen || state.activeExplainer) {
        state.isHubOpen = false;
        state.isAxisMapOpen = false;
        state.activeExplainer = null;
        renderApp();
        return;
      }
    }

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'h' || e.key === 'H') {
      e.preventDefault();
      toggleHub();
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleAxisMap();
    }
  });
}

function setupBilingualTimer() {
  setInterval(() => {
    state.bilingualIndex = (state.bilingualIndex + 1) % 2;
    document.querySelectorAll('.bilingual-term-text').forEach(el => {
      el.classList.add('swapping');
      setTimeout(() => {
        const ar = el.getAttribute('data-ar');
        const en = el.getAttribute('data-en');
        if (state.bilingualIndex === 1) {
          el.textContent = ar;
          el.className = 'bilingual-term-text ar active';
        } else {
          el.textContent = en;
          el.className = 'bilingual-term-text en active';
        }
      }, 320);
    });
  }, 4800);
}

function handleResize() {
  // Safe zone bounds
}

// Render Main App
function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const currentSlide = SLIDES_DATA[state.currentIndex];
  
  root.innerHTML = `
    <div class="app-container">
      <div class="ambient-glow-layer">
        <div class="ambient-orb cyan"></div>
        <div class="ambient-orb orange"></div>
      </div>

      <main class="slide-frame">
        <header class="slide-header">
          <div class="header-meta">
            <div class="axis-badge">
              <span>●</span>
              <span>${currentSlide.axis}</span>
            </div>
            <div class="slide-counter">${currentSlide.id} / S60</div>
          </div>
          <div class="header-actions">
            ${currentSlide.id !== 'S01' ? renderAcademyLogoMini() : ''}
          </div>
        </header>

        <section class="slide-content-stage">
          ${renderSlideContent(currentSlide)}
        </section>
      </main>

      ${renderPresenterControls(currentSlide)}
      ${renderHubModal()}
      ${renderAxisMapModal(currentSlide)}
      ${renderExplainerModal()}
    </div>
  `;
}

function renderAcademyLogoMini() {
  return `
    <div style="display: flex; align-items: center; gap: 8px; opacity: 0.9;">
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M50 18L72 26V48C72 64 50 78 50 78C50 78 28 64 28 48V26L50 18Z" fill="#0d1c33" stroke="#38bdf8" strokeWidth="2"/>
        <path d="M50 28V62M42 34H58" stroke="#f8fafc" strokeWidth="2"/>
      </svg>
      <span style="font-size: 0.82rem; font-weight: 700; color: #94a3b8;">أكاديمية العدالة</span>
    </div>
  `;
}

function renderAcademyLogoBig() {
  return `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin-bottom: 20px;">
      <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.6" />
        <circle cx="50" cy="50" r="41" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
        <path d="M50 18L72 26V48C72 64 50 78 50 78C50 78 28 64 28 48V26L50 18Z" fill="#0d1c33" stroke="#38bdf8" strokeWidth="2" />
        <path d="M50 28V62M42 34H58" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M38 42L42 34L46 42C46 44 42 45 42 45C42 45 38 44 38 42Z" fill="#f97316" stroke="#f8fafc" strokeWidth="1" />
        <path d="M54 42L58 34L62 42C62 44 58 45 58 45C58 45 54 44 54 42Z" fill="#f97316" stroke="#f8fafc" strokeWidth="1" />
        <circle cx="50" cy="27" r="3" fill="#38bdf8" />
        <path d="M42 66H58" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div style="text-align: center;">
        <div style="font-size: 1.2rem; font-weight: 800; color: #f8fafc;">أكاديمية العدالة للدراسات القانونية</div>
        <div style="font-size: 0.85rem; color: #38bdf8; font-family: Inter, sans-serif; letter-spacing: 1px;">ACADEMY OF JUSTICE • LEGAL & AI RESEARCH</div>
      </div>
    </div>
  `;
}

function renderBilingualSpan(ar, en, highlight = false) {
  const currentText = state.bilingualIndex === 1 ? ar : en;
  const currentClass = state.bilingualIndex === 1 ? 'ar' : 'en';
  return `
    <span class="bilingual-term-wrapper" style="min-width: 140px; text-align: center;">
      <span class="bilingual-term-text ${currentClass} active" data-ar="${ar}" data-en="${en}" style="color: ${highlight ? '#f97316' : '#38bdf8'}; font-weight: 700;">
        ${currentText}
      </span>
    </span>
  `;
}

function renderSlideContent(slide) {
  // S01: Cover Hero
  if (slide.id === 'S01') {
    return `
      <div style="text-align: center; max-width: 1100px; z-index: 2;">
        ${renderAcademyLogoBig()}
        <h1 class="slide-main-title" style="font-size: clamp(2.2rem, 4.2vw, 3.4rem); margin-top: 10px;">
          من مخاطبة الآلة إلى <span class="accent">تفويضها</span>
        </h1>
        <div class="slide-subtitle" style="font-size: clamp(1.2rem, 1.9vw, 1.6rem); margin-bottom: 24px; color: #93c5fd;">
          من ${renderBilingualSpan('هندسة الأوامر', 'Prompt Engineering')} إلى ${renderBilingualSpan('هندسة الوكلاء', 'Agent Engineering', true)}
        </div>
        
        <div style="margin-top: 24px; display: inline-block; background: rgba(16, 28, 48, 0.8); border: 1px solid var(--border-card); padding: 18px 36px; border-radius: 16px; backdrop-filter: blur(10px);">
          <div style="font-size: 1.35rem; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">
            د. أحمد عبدالسلام
          </div>
          <div style="font-size: 0.95rem; color: #38bdf8; font-weight: 500; min-height: 24px;">
            دكتوراه في القانون • محامٍ بالنقض • عضو المكتب الفني بأكاديمية العدالة • مهندس بيانات (Microsoft Track)
          </div>
        </div>
      </div>
    `;
  }

  // S02: 5 Axes Map
  if (slide.id === 'S02') {
    const axesItems = [
      { num: '01', title: 'كيف تعمل الآلة؟', sub: 'من التدريب إلى التوليد', range: 'S05–S14', workshop: 'S14' },
      { num: '02', title: 'هندسة الأوامر', sub: 'Prompt Engineering', range: 'S15–S24', workshop: 'S24' },
      { num: '03', title: 'هندسة السياق', sub: 'Context Engineering', range: 'S25–S34', workshop: 'S34' },
      { num: '04', title: 'سير العمل بالذكاء الاصطناعي', sub: 'AI Workflow', range: 'S35–S44', workshop: 'S44' },
      { num: '05', title: 'هندسة الوكلاء', sub: 'Agent Engineering', range: 'S45–S54', workshop: 'S54' },
      { num: '★', title: 'الرقابة على التفويض', sub: 'الحوكمة والسيادة البشرية', range: 'S55–S60', workshop: 'الختام' }
    ];
    return `
      <div class="hero-title-group">
        <h2 class="slide-main-title">${slide.title}</h2>
        <div class="slide-subtitle">${slide.subtitle}</div>
      </div>
      <div class="board-grid" style="grid-template-columns: repeat(3, 1fr);">
        ${axesItems.map((ax, i) => `
          <div class="board-card ${i === 5 ? 'active' : ''}" onclick="goToSlide(${i === 0 ? 4 : i === 1 ? 14 : i === 2 ? 24 : i === 3 ? 34 : i === 4 ? 44 : 54})">
            <div class="card-header">
              <div class="card-icon-box" style="color: ${i === 5 ? '#f97316' : '#38bdf8'}; font-weight: 800;">${ax.num}</div>
              <div class="card-title">${ax.title}</div>
            </div>
            <div class="card-body">${ax.sub}</div>
            <div class="card-footer">
              <span>المدى: ${ax.range}</span>
              <span style="color: #f97316; font-weight: 700;">الورشة: ${ax.workshop}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // S03: The Cognitive Journey
  if (slide.id === 'S03') {
    const journeySteps = [
      { ar: 'افهم', en: 'UNDERSTAND', desc: 'استيعاب كيف تدرك الآلة وتتنبأ رياضياً' },
      { ar: 'وجّه', en: 'INSTRUCT', desc: 'صياغة الأوامر بدقة وهيكلة منضبطة' },
      { ar: 'زوّد', en: 'CONTEXTUALIZE', desc: 'تغذية النموذج بالحقائق والوثائق المسترجعة' },
      { ar: 'نظّم', en: 'ORCHESTRATE', desc: 'بناء مسارات عمل متعددة المراحل وبوابات قرار' },
      { ar: 'فوّض', en: 'DELEGATE', desc: 'بناء وكلاء أذكياء موجهين بأهداف مستقلة' },
      { ar: 'راقب', en: 'CONTROL', desc: 'فرض الحوكمة والحدود والسيادة البشرية' }
    ];
    return `
      <div class="hero-title-group">
        <h2 class="slide-main-title">${slide.title}</h2>
        <div class="slide-subtitle">${slide.subtitle}</div>
      </div>
      <div class="flow-diagram-container" style="max-width: 1300px;">
        ${journeySteps.map((s, idx) => `
          <div class="flow-step-node ${idx === 5 ? 'highlight' : ''}" style="flex: 1; min-width: 180px;">
            <div style="font-size: 1.6rem; font-weight: 900; color: ${idx === 5 ? '#f97316' : '#38bdf8'}; margin-bottom: 4px;">
              ${s.ar}
            </div>
            <div style="font-family: Inter, sans-serif; font-size: 0.8rem; font-weight: 700; color: #94a3b8; letter-spacing: 0.8px; margin-bottom: 8px;">
              ${s.en}
            </div>
            <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.4;">
              ${s.desc}
            </div>
          </div>
          ${idx < 5 ? '<div class="flow-arrow">➔</div>' : ''}
        `).join('')}
      </div>
    `;
  }

  // S04: Transition to Axis 1
  if (slide.id === 'S04') {
    return `
      <div style="text-align: center; max-width: 900px;">
        <div class="axis-badge" style="font-size: 1.1rem; padding: 8px 20px; margin-bottom: 20px;">
          المحور الأول • S05–S14
        </div>
        <h1 class="slide-main-title" style="font-size: clamp(2.4rem, 4vw, 3.6rem);">
          كيف تعمل الآلة؟
        </h1>
        <div class="slide-subtitle" style="font-size: 1.5rem; color: #f97316; margin-top: 12px;">
          من التدريب إلى التوليد
        </div>
        <p style="font-size: 1.1rem; color: #94a3b8; margin-top: 24px; line-height: 1.8;">
          قبل أن نوجه الآلة أو نفوضها، يجب أن نكسر الصندوق الأسود ونفهم كيف تدرك النصوص، كيف تبني أوزانها الرياضية، وأين تقف حدود قدرتها المعرفية.
        </p>
      </div>
    `;
  }

  // Workshops (S14, S24, S34, S44, S54)
  if (slide.id === 'S14') return renderWorkshopContainer('W01', slide);
  if (slide.id === 'S24') return renderWorkshopContainer('W02', slide);
  if (slide.id === 'S34') return renderWorkshopContainer('W03', slide);
  if (slide.id === 'S44') return renderWorkshopContainer('W04', slide);
  if (slide.id === 'S54') return renderWorkshopContainer('W05', slide);

  // S60: Closing Credo
  if (slide.id === 'S60') {
    return `
      <div style="text-align: center; max-width: 1000px;">
        ${renderAcademyLogoBig()}
        <div style="margin: 30px 0; background: rgba(16, 28, 48, 0.85); border: 1px solid var(--border-glow); padding: 36px 44px; border-radius: 20px; box-shadow: var(--cyan-glow); backdrop-filter: blur(14px);">
          <p style="font-size: clamp(1.4rem, 2.3vw, 2.1rem); font-weight: 800; color: #f8fafc; line-height: 1.7; text-align: center;">
            «المهارة لم تعد أن تعرف ماذا تقول للآلة فقط؛<br/>
            بل أن تعرف <span style="color: #38bdf8;">ماذا تعطيها</span>، وكيف <span style="color: #38bdf8;">تنظّم عملها</span>،<br/>
            وماذا <span style="color: #f97316;">تفوضها</span>، ومتى <span style="color: #f97316;">تستعيد القرار منها</span>.»
          </p>
          <div style="margin-top: 20px; font-size: 1.2rem; font-weight: 700; color: #93c5fd;">
            — د. أحمد عبدالسلام
          </div>
        </div>
      </div>
    `;
  }

  // Standard Rich Slide
  return renderStandardSlideBoard(slide);
}

function renderStandardSlideBoard(slide) {
  const cards = generateSlideCards(slide);

  return `
    <div class="hero-title-group">
      <h2 class="slide-main-title">${slide.title}</h2>
      <div class="slide-subtitle">${slide.subtitle} • ${renderBilingualSpan(slide.title.split(':')[0], slide.englishConcept)}</div>
    </div>

    <div class="board-grid" style="${cards.length <= 3 ? 'grid-template-columns: repeat(3, 1fr);' : 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));'}">
      ${cards.map((c, i) => `
        <div class="board-card ${c.isHighlight ? 'active' : ''}" onclick="openExplainer('${slide.id}', ${i})">
          <div class="card-header">
            <div class="card-icon-box" style="color: ${c.isHighlight ? '#f97316' : '#38bdf8'}; font-weight: 800;">${c.icon || '◈'}</div>
            <div class="card-title">${c.title}</div>
          </div>
          <div class="card-body">
            ${c.body}
          </div>
          <div class="card-footer">
            <span>${c.tag || 'تحليل علمي'}</span>
            <span style="color: #38bdf8; font-size: 0.8rem;">استعراض الشرح ⤢</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function generateSlideCards(slide) {
  return [
    {
      title: "الجوهر المعماري",
      icon: "⚙",
      body: slide.coreIdea,
      tag: "الأساس النظري",
      isHighlight: false
    },
    {
      title: "الممارسة المهنية",
      icon: "⚖",
      body: slide.speakerIntent,
      tag: "التطبيق الواقعي",
      isHighlight: true
    },
    {
      title: "التمثيل البصري والحركي",
      icon: "✦",
      body: slide.visualMetaphor,
      tag: "النموذج الذهني",
      isHighlight: false
    }
  ];
}

function renderWorkshopContainer(wId, slide) {
  if (wId === 'W01') {
    return `
      <div class="workshop-container">
        <div class="workshop-header-bar">
          <div class="workshop-title-badge">⚡ S14: Workshop 01 • هل دربت الآلة فعلًا؟</div>
          <div style="color: #93c5fd; font-size: 0.9rem;">مقارنة استراتيجيات التكييف: Pre-training vs Fine-tuning vs RAG vs Prompting</div>
        </div>
        <div class="workshop-interactive-grid">
          <div class="workshop-panel">
            <h4>الحالات المهنية للاختبار الفوري:</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div class="hub-slide-cell ${state.w1Selected === 0 ? 'current' : ''}" onclick="state.w1Selected = 0; renderApp();">
                1. تحديث شروط التعاقد وفق لائحة داخلية جديدة للشركة
              </div>
              <div class="hub-slide-cell ${state.w1Selected === 1 ? 'current' : ''}" onclick="state.w1Selected = 1; renderApp();">
                2. تدريب النموذج على مصطلحات لغة قانونية تاريخية نادرة
              </div>
              <div class="hub-slide-cell ${state.w1Selected === 2 ? 'current' : ''}" onclick="state.w1Selected = 2; renderApp();">
                3. حساب المهل القضائية ومواعيد استئناف الأحكام بدقة
              </div>
              <div class="hub-slide-cell ${state.w1Selected === 3 ? 'current' : ''}" onclick="state.w1Selected = 3; renderApp();">
                4. صياغة ملخص تنفيذي لمذكرة دفاع في 3 نقاط محددة
              </div>
            </div>
          </div>
          <div class="workshop-panel" style="border-left: 3px solid #f97316;">
            <h4>القرار الهندسي والاستراتيجية المثلى:</h4>
            <div style="margin-top: 14px;">
              <div style="font-size: 1.3rem; font-weight: 800; color: #f97316; margin-bottom: 10px;">
                ${state.w1Selected === 0 ? 'RAG (التوليد المعزز بالاسترجاع)' : state.w1Selected === 1 ? 'Fine-tuning / Domain Adaptation' : state.w1Selected === 2 ? 'Tool Use (استدعاء أداة برمجية حتمية)' : 'Prompt Engineering (هندسة الأوامر)'}
              </div>
              <p style="color: #e2e8f0; line-height: 1.7; font-size: 0.95rem;">
                ${state.w1Selected === 0 ? 'البيانات خاصة ومتغيرة باستمرار، لذلك RAG هو الأنسب لضمان التحديث اللحظي بدون تكلفة تدريب باهظة.' : state.w1Selected === 1 ? 'تعديل نمط فهم المفردات النادرة يتطلب تعديل الأوزان الرياضية للنموذج عبر الضبط الدقيق أو التدريب المتخصص.' : state.w1Selected === 2 ? 'الحسابات الزمنية والعددية تتطلب دقة قطعية 100% لا يمكن تركها لتخمين النموذج الإحصائي، بل تستدعي كوداً حسابياً.' : 'المهمة أسلوبية وتعتمد على نص معطى بالكامل، فتحل بكفاءة تامة عبر أمر مهيكل منضبط.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (wId === 'W02') {
    return `
      <div class="workshop-container">
        <div class="workshop-header-bar">
          <div class="workshop-title-badge">⚡ S24: Workshop 02 • مختبر هندسة الأوامر وإعادة الهيكلة</div>
          <div style="color: #93c5fd; font-size: 0.9rem;">تحويل الأوامر المعيبة إلى صيغ هندسية ذهبية</div>
        </div>
        <div class="workshop-interactive-grid">
          <div class="workshop-panel">
            <h4>أمر قانوني معيب (قبل الهندسة):</h4>
            <div style="background: #050a14; padding: 12px; border-radius: 8px; color: #ef4444; font-family: monospace; font-size: 0.9rem; margin-bottom: 14px;">
              "اقرأ عقد المقاولات المرفق وقلي إذا فيه مشاكل وسويلي تقرير كويس وسريع."
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <button class="nav-btn" style="background: ${state.w2Fixes.goal ? '#10b981' : ''}; color: ${state.w2Fixes.goal ? '#000' : ''};" onclick="state.w2Fixes.goal = !state.w2Fixes.goal; renderApp();">✓ تحديد الهدف الصريح</button>
              <button class="nav-btn" style="background: ${state.w2Fixes.constraints ? '#10b981' : ''}; color: ${state.w2Fixes.constraints ? '#000' : ''};" onclick="state.w2Fixes.constraints = !state.w2Fixes.constraints; renderApp();">✓ فرض القيود السلبية</button>
              <button class="nav-btn" style="background: ${state.w2Fixes.format ? '#10b981' : ''}; color: ${state.w2Fixes.format ? '#000' : ''};" onclick="state.w2Fixes.format = !state.w2Fixes.format; renderApp();">✓ هيكلة جدول المخرجات</button>
              <button class="nav-btn" style="background: ${state.w2Fixes.fewShot ? '#10b981' : ''}; color: ${state.w2Fixes.fewShot ? '#000' : ''};" onclick="state.w2Fixes.fewShot = !state.w2Fixes.fewShot; renderApp();">✓ تزويد نموذج Few-Shot</button>
            </div>
          </div>
          <div class="workshop-panel" style="border-left: 3px solid #10b981;">
            <h4>الأمر المعياري الذهبي المكتمل:</h4>
            <div style="background: #050a14; padding: 14px; border-radius: 8px; font-size: 0.88rem; line-height: 1.6;">
              ${state.w2Fixes.goal ? '<p style="color: #10b981;">[الهدف]: استخراج بنود المسؤولية العقدية وشروط التعويض وفق الفيديك.</p>' : ''}
              ${state.w2Fixes.constraints ? '<p style="color: #fb923c;">[القيود]: امتنع عن استنتاج أي تعويض غير وارد صراحة برقم المادة.</p>' : ''}
              ${state.w2Fixes.format ? '<p style="color: #93c5fd;">[التنسيق]: أخرج النتيجة في جدول Markdown: رقم المادة | الالتزام | الخطر.</p>' : ''}
              ${state.w2Fixes.fewShot ? '<p style="color: #f8fafc;">[المثال]: بند 20.1 ➔ إخطار خلال 28 يوماً ➔ سقوط الحق بالتقادم.</p>' : ''}
              ${!state.w2Fixes.goal && !state.w2Fixes.constraints && !state.w2Fixes.format && !state.w2Fixes.fewShot ? '<span style="color: #64748b;">انقر أزرار المعالجة في اللوحة المجاورة لبناء الأمر...</span>' : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (wId === 'W03') {
    return `
      <div class="workshop-container">
        <div class="workshop-header-bar">
          <div class="workshop-title-badge">⚡ S34: Workshop 03 • مختبر هندسة السياق واسترجاع المعرفة</div>
          <div style="color: #93c5fd; font-size: 0.9rem;">محاكاة ضبط محرك RAG وفلترة المستندات الحساسة</div>
        </div>
        <div class="workshop-interactive-grid">
          <div class="workshop-panel">
            <h4>إعدادات محرك استرجاع السياق (RAG Settings):</h4>
            <div style="margin-top: 14px;">
              <label style="color: #e2e8f0; font-size: 0.9rem;">حجم التقطيع (Chunk Size): <strong style="color: #38bdf8;">${state.w3ChunkSize} Tokens</strong></label>
              <input type="range" min="100" max="2000" step="100" value="${state.w3ChunkSize}" oninput="state.w3ChunkSize = Number(this.value); renderApp();" style="width: 100%; margin: 8px 0;" />
              <div style="margin-top: 12px;">
                <label style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" ${state.w3Rerank ? 'checked' : ''} onchange="state.w3Rerank = this.checked; renderApp();" style="accent-color: #f97316; width: 18px; height: 18px;" />
                  <span>تفعيل إعادة الترتيب المتقدمة (Cross-Encoder Reranker)</span>
                </label>
              </div>
            </div>
          </div>
          <div class="workshop-panel" style="border-left: 3px solid #38bdf8;">
            <h4>مؤشرات جودة السياق المسترجع:</h4>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
              <div style="display: flex; justify-content: space-between;">
                <span>دقة الإسناد المعرفي (Precision):</span>
                <strong style="color: ${state.w3Rerank ? '#10b981' : '#f59e0b'};">${state.w3Rerank ? '97.2%' : '76.4%'}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>خطر التخمة السياقية (Lost in the Middle):</span>
                <strong style="color: ${state.w3ChunkSize > 1200 ? '#ef4444' : '#10b981'};">${state.w3ChunkSize > 1200 ? 'مرتفع جداً ⚠️' : 'منخفض ومثالي ✓'}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (wId === 'W04') {
    return `
      <div class="workshop-container">
        <div class="workshop-header-bar">
          <div class="workshop-title-badge">⚡ S44: Workshop 04 • محاكي بناء مسار عمل ذكي</div>
          <div style="color: #93c5fd; font-size: 0.9rem;">تركيب مسار تدقيق عقود مع بوابات مراجعة بشرية</div>
        </div>
        <div class="workshop-interactive-grid">
          <div class="workshop-panel">
            <h4>خطوات مسار العمل (Workflow Pipeline):</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              <div class="hub-slide-cell ${state.w4Step >= 1 ? 'current' : ''}">1. استلام ملف العقد وتفكيك البنود</div>
              <div class="hub-slide-cell ${state.w4Step >= 2 ? 'current' : ''}">2. استدعاء أداة مطابقة شروط الفيديك</div>
              <div class="hub-slide-cell ${state.w4Step >= 3 ? 'current' : ''}" style="border-color: #f97316;">3. بوابة المراجعة البشرية الحاكمة (Human Gate)</div>
              <div class="hub-slide-cell ${state.w4Step >= 4 ? 'current' : ''}" style="border-color: #10b981;">4. تصدير التقرير النهائي المعتمد</div>
            </div>
          </div>
          <div class="workshop-panel" style="border-left: 3px solid #f97316;">
            <h4>إجراء المحاضر:</h4>
            <div style="margin-top: 14px;">
              ${state.w4Step < 3 ? `
                <button class="nav-btn" onclick="state.w4Step++; renderApp();">تشغيل الخطوة التالية ➔</button>
              ` : state.w4Step === 3 ? `
                <div style="color: #fb923c; margin-bottom: 12px;">⚠️ المنظومة متوقفة بانتظار مصادقة المستشار القانوني.</div>
                <button class="nav-btn" style="background: #10b981; color: #000; font-weight: 800;" onclick="state.w4Step = 4; state.w4Approved = true; renderApp();">✓ مصادقة المستشار واستكمال السير</button>
              ` : `
                <div style="color: #10b981; font-weight: 700;">✓ اكتمل مسار العمل بنجاح مع توثيق المصادقة في سجل التدقيق.</div>
                <button class="nav-btn" style="margin-top: 12px;" onclick="state.w4Step = 1; renderApp();">إعادة تشغيل المحاكاة ↺</button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (wId === 'W05') {
    return `
      <div class="workshop-container">
        <div class="workshop-header-bar">
          <div class="workshop-title-badge">⚡ S54: Workshop 05 • مختبر معمارية الوكيل المستقل</div>
          <div style="color: #93c5fd; font-size: 0.9rem;">إطلاق حلقة ReAct ومراقبة حواجز الأمان</div>
        </div>
        <div class="workshop-interactive-grid">
          <div class="workshop-panel">
            <h4>إطلاق الوكيل (ReAct Agent Launcher):</h4>
            <p style="color: #93c5fd; font-size: 0.88rem; margin: 10px 0;">الهدف: فحص وتحديث سجلات التحكيم الدولي واستدعاء الأدوات.</p>
            <button class="nav-btn" style="background: #38bdf8; color: #000; font-weight: 700;" onclick="startAgentSimulation();">
              🚀 تشغيل حلقة الوكيل المستقل
            </button>
          </div>
          <div class="workshop-panel" style="border-left: 3px solid #38bdf8;">
            <h4>سجل استدلال وتنفيذ الوكيل:</h4>
            <div id="w5-log-box" style="background: #050a14; padding: 12px; border-radius: 8px; min-height: 140px; font-family: monospace; font-size: 0.82rem; color: #38bdf8;">
              ${state.w5Logs.length === 0 ? '<span style="color: #64748b;">انقر زر التشغيل لبدء الملاحظة...</span>' : state.w5Logs.map(l => `<div>${l}</div>`).join('')}
              ${state.w5Logs.length >= 2 && !state.w5Permission ? `
                <div style="color: #f97316; margin-top: 8px; border-top: 1px dashed #f97316; padding-top: 6px;">
                  🛑 حاجز الصلاحيات: الوكيل يطلب إذن الكتابة في قاعدة البيانات.
                  <button class="nav-btn" style="background: #10b981; color: #000; margin-top: 6px;" onclick="grantAgentPermission();">منح التصريح</button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

function startAgentSimulation() {
  state.w5Logs = [
    "[Plan]: تفكيك المهمة إلى 3 إجراءات.",
    "[Act]: استدعاء أداة Search_Legal_DB..."
  ];
  state.w5Permission = false;
  renderApp();
}

function grantAgentPermission() {
  state.w5Permission = true;
  state.w5Logs.push("[Human Gate]: تم منح التصريح من المستشار.");
  state.w5Logs.push("[Action]: تحديث السجلات بنجاح.");
  state.w5Logs.push("[Goal]: اكتملت المهمة بسلام.");
  renderApp();
}

function renderPresenterControls(slide) {
  const progressPercent = ((state.currentIndex + 1) / SLIDES_DATA.length) * 100;
  return `
    <footer class="presenter-controls-bar">
      <div class="nav-cluster">
        <button class="nav-btn" onclick="prevSlide()" ${state.currentIndex === 0 ? 'disabled' : ''} title="السابق (Arrow Left / PageUp)">
          ◄ السابق
        </button>
        <button class="nav-btn" onclick="nextSlide()" ${state.currentIndex === SLIDES_DATA.length - 1 ? 'disabled' : ''} title="التالي (Arrow Right / Space / PageDown)">
          التالي ►
        </button>
      </div>

      <div class="slide-scrubber">
        <span style="font-size: 0.85rem; color: #94a3b8; font-family: Inter, sans-serif; font-weight: 700;">${slide.id}</span>
        <div class="scrubber-track" onclick="handleScrubberClick(event)">
          <div class="scrubber-progress" style="width: ${progressPercent}%;"></div>
        </div>
        <span style="font-size: 0.85rem; color: #64748b; font-family: Inter, sans-serif;">${state.currentIndex + 1}/${SLIDES_DATA.length}</span>
      </div>

      <div class="nav-cluster">
        <button class="nav-btn" onclick="toggleHub()" title="الخريطة الكبرى للشرائح (H)">⊞ المحاور (H)</button>
        <button class="nav-btn" onclick="toggleAxisMap()" title="خريطة المحور الحالي (M)">🗺 المحور (M)</button>
        <button class="nav-btn" onclick="toggleFullscreen()" title="ملء الشاشة (F)">${state.isFullscreen ? '⤓ تصغير' : '⤢ تكبير'}</button>
      </div>
    </footer>
  `;
}

function handleScrubberClick(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const targetIndex = Math.floor((clickX / rect.width) * SLIDES_DATA.length);
  goToSlide(Math.max(0, Math.min(SLIDES_DATA.length - 1, targetIndex)));
}

function renderHubModal() {
  if (!state.isHubOpen) return '';

  return `
    <div class="modal-backdrop" onclick="toggleHub()">
      <div class="modal-window" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h2 class="modal-title">المركز الرئيسي للمحاور والشرائح (Main Hub)</h2>
            <p style="color: #93c5fd; font-size: 0.92rem; margin-top: 4px;">
              60 شريحة مصنفة بدقة • الورش التفاعلية في S14, S24, S34, S44, S54
            </p>
          </div>
          <button class="modal-close-btn" onclick="toggleHub()">✕</button>
        </div>

        <div class="hub-slides-grid">
          ${SLIDES_DATA.map((s, idx) => {
            const isCurrent = idx === state.currentIndex;
            const isWorkshop = s.sceneType.includes('Workshop');
            return `
              <div class="hub-slide-cell ${isCurrent ? 'current' : ''}" style="${isWorkshop ? 'border-color: #f97316;' : ''}" onclick="goToSlide(${idx}); toggleHub();">
                <div class="hub-slide-id" style="color: ${isWorkshop ? '#f97316' : '#38bdf8'};">${s.id} ${isWorkshop ? '★' : ''}</div>
                <div class="hub-slide-title" title="${s.title}">${s.title}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAxisMapModal(slide) {
  if (!state.isAxisMapOpen) return '';

  const axisSlides = SLIDES_DATA.filter(s => s.axis === slide.axis);

  return `
    <div class="modal-backdrop" onclick="toggleAxisMap()">
      <div class="modal-window" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h2 class="modal-title">خريطة ${slide.axis}</h2>
            <p style="color: #93c5fd; font-size: 0.92rem; margin-top: 4px;">
              استعراض شرائح المحور الحالي
            </p>
          </div>
          <button class="modal-close-btn" onclick="toggleAxisMap()">✕</button>
        </div>

        <div class="hub-slides-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
          ${axisSlides.map((s) => {
            const globalIdx = SLIDES_DATA.findIndex(item => item.id === s.id);
            const isCurrent = globalIdx === state.currentIndex;
            const isWorkshop = s.sceneType.includes('Workshop');
            return `
              <div class="hub-slide-cell ${isCurrent ? 'current' : ''}" style="${isWorkshop ? 'border-color: #f97316;' : ''}" onclick="goToSlide(${globalIdx}); toggleAxisMap();">
                <div class="hub-slide-id" style="color: ${isWorkshop ? '#f97316' : '#38bdf8'};">${s.id} ${isWorkshop ? '★' : ''}</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #f8fafc; margin: 4px 0;">${s.title}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${s.subtitle}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function openExplainer(slideId, cardIdx) {
  const slide = SLIDES_DATA.find(s => s.id === slideId);
  state.activeExplainer = { slide, cardIdx };
  renderApp();
}

function renderExplainerModal() {
  if (!state.activeExplainer) return '';
  const { slide, cardIdx } = state.activeExplainer;

  return `
    <div class="modal-backdrop" onclick="state.activeExplainer = null; renderApp();">
      <div class="modal-window" style="max-width: 800px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h3 class="modal-title" style="font-size: 1.35rem;">شرح تفكيكي: ${slide.title}</h3>
            <p style="color: #38bdf8; font-size: 0.88rem; margin-top: 4px;">${slide.englishConcept} • ${slide.id}</p>
          </div>
          <button class="modal-close-btn" onclick="state.activeExplainer = null; renderApp();">✕</button>
        </div>

        <div style="font-size: 1.05rem; line-height: 1.8; color: #e2e8f0;">
          <div style="background: rgba(56, 189, 248, 0.08); border-right: 4px solid #38bdf8; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <strong style="color: #f8fafc;">التحليل العلمي والتنفيذي:</strong>
            <p style="margin-top: 6px;">${slide.coreIdea}</p>
          </div>

          <div style="background: rgba(249, 115, 22, 0.08); border-right: 4px solid #f97316; padding: 16px; border-radius: 8px;">
            <strong style="color: #fb923c;">توجيه المحاضر وسياق العرض:</strong>
            <p style="margin-top: 6px;">${slide.speakerIntent}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.onload = initApp;

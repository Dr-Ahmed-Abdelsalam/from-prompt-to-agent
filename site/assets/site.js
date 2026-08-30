(function () {
  'use strict';

  const professionalLines = [
    'دكتوراه في القانون',
    'محامٍ بالنقض والإدارية والدستورية العليا',
    'عضو المكتب الفني بأكاديمية العدالة',
    'مهندس بيانات — Data Engineer / Microsoft Track',
  ];
  const journey = [
    ['افهم', 'UNDERSTAND'], ['وجّه', 'INSTRUCT'], ['زوّد', 'CONTEXTUALIZE'],
    ['نظّم', 'ORCHESTRATE'], ['فوّض', 'DELEGATE'], ['راقب', 'CONTROL'],
  ];

  const slide = (axis, axisTitle, title, premise, english, arabic, kind, nodes, interactive) => ({ axis, axisTitle, title, premise, term: { english, arabic }, kind, nodes: nodes || [], interactive: interactive || 'none' });
  const opening = [
    { id: 'S01', axis: 'الافتتاح', axisTitle: 'من مخاطبة الآلة إلى تفويضها', title: 'من مخاطبة الآلة إلى تفويضها', premise: 'من هندسة الأوامر إلى هندسة الوكلاء', term: { english: 'Prompt → Context → Workflow → Agent', arabic: 'الأمر → السياق → سير العمل → الوكيل' }, kind: 'cover', nodes: journey.map((x) => x[0]) },
    slide('الافتتاح', 'خريطة المحاور', 'خريطة المحاور', 'خمس قدرات تتصل في مسار واحد، والرقابة لا تغيب.', 'Main Hub', 'الخريطة الرئيسية', 'map', journey.map((x) => x[0]), 'focus'),
    slide('الافتتاح', 'الرحلة', 'الرحلة من الأمر إلى التفويض', 'افهم قبل أن توجّه، وزوّد قبل أن تنظّم، وفوّض مع رقابة.', 'UNDERSTAND → INSTRUCT → CONTEXTUALIZE → ORCHESTRATE → DELEGATE → CONTROL', 'افهم → وجّه → زوّد → نظّم → فوّض → راقب', 'timeline', journey.map((x) => x[0]), 'drag'),
    slide('الافتتاح', 'المحور الأول', 'المحور الأول — كيف تعمل الآلة؟', 'قبل أن تحسن ما تقوله للآلة، افهم ما الذي تتعامل معه أصلًا.', 'From Training to Generation', 'من التدريب إلى التوليد', 'cover', ['بيانات', 'تمثيل', 'نموذج', 'توليد']),
  ];
  const groups = [
    ['المحور الأول', 'كيف تعمل الآلة؟', [
      ['قبل النموذج توجد البيانات', 'الذكاء الاصطناعي لا يبدأ بالنموذج. يبدأ بالبيانات.', 'Data', 'البيانات', 'pipeline', ['نص', 'صورة', 'صوت', 'وثيقة']],
      ['الذكاء الاصطناعي منظومة', 'افصل بين ما جرى في التدريب وما يحدث عند الاستخدام.', 'Data → Process → Train → Model → Inference → Output', 'بيانات → معالجة → تدريب → نموذج → استدلال → مخرج', 'pipeline', ['بيانات', 'معالجة', 'تدريب', 'نموذج', 'استدلال', 'مخرج']],
      ['كيف ترى الآلة النص والصورة؟', 'الإنسان يرى معنى؛ والحاسوب يحتاج تمثيلًا.', 'Representation', 'تمثيل رقمي', 'compare', ['معنى إنساني', 'تمثيل آلي'], 'drag'],
      ['من النص إلى التمثيل', 'المعنى يُبنى عبر وحدات وعلاقات وسياق.', 'Tokens → Embeddings → Contextual Representations', 'وحدات رمزية → تمثيلات متجهية → تمثيلات سياقية', 'pipeline', ['فسخ', 'العقد', 'التأخير']],
      ['السياق يغيّر المعنى', 'الكلمة لا تتغير؛ السياق هو الذي يغيّر القراءة.', 'Context', 'السياق', 'canvas', ['عين الإنسان', 'عين الماء', 'عين المشروع'], 'drag'],
      ['ماذا يعني التدريب؟', 'يتوقع النموذج، يقارن، يتعلم من الخطأ، ثم يكرر.', 'Predict → Compare → Error → Adjust → Repeat', 'يتوقع → يقارن → يخطئ → يعدّل → يكرر', 'pipeline', ['توقع', 'مقارنة', 'خطأ', 'تعديل', 'تكرار']],
      ['المعاملات والأوزان', 'المعاملات ليست مكتبة معلومات؛ بل علاقات مكتسبة.', 'Parameters & Weights', 'المعاملات والأوزان', 'canvas', ['علاقة', 'إشارة', 'ترجيح']],
      ['الأمر ليس تدريبًا', 'لا تخلط بين إعطاء الأمر، والاسترجاع، والضبط، والتدريب.', 'Prompting / RAG / Fine-tuning / Training', 'إعطاء الأمر / التوليد المعزّز بالاسترجاع / الضبط الدقيق / التدريب', 'compare', ['أمر', 'وثيقة', 'تخصيص', 'تدريب']],
      ['التوليد والسياق والتحقق', 'المحتمل لا يساوي الصحيح؛ والسياق له حد.', 'Generation / Hallucination / Context Window', 'التوليد / الهلوسة / نافذة السياق', 'canvas', ['تعليمات', 'ملف', 'نتيجة بحث'], 'drag'],
      ['ورشة: افتح الصندوق الأسود', 'رتّب المسار من المادة الخام إلى الإجابة.', 'Workshop', 'ورشة تطبيقية', 'workshop', ['بيانات', 'تمثيل', 'نموذج', 'مخرج'], 'arrange'],
    ]],
    ['المحور الثاني', 'هندسة الأوامر', [
      ['الأمر ليس سؤالًا', 'الأمر الجيد تكليف له مقصد ومخرج ومعيار.', 'Prompt Engineering', 'هندسة الأوامر', 'compare', ['سؤال عابر', 'تكليف محدد']],
      ['لماذا تفشل الأوامر الغامضة؟', 'كل غموض ينقل قرارًا غير معلن إلى النموذج.', 'Ambiguity', 'الغموض', 'canvas', ['هدف ناقص', 'سياق غائب', 'مخرج مجهول']],
      ['الهدف والسياق والمهمة', 'ثلاثة عناصر تسبق البلاغة في صياغة الأمر.', 'Goal / Context / Task', 'الهدف / السياق / المهمة', 'pipeline', ['الهدف', 'السياق', 'المهمة']],
      ['القيود والمخرج ومعيار الجودة', 'حدّد ما لا تريده قبل أن تطلب ما تريده.', 'Constraints / Output / Quality Bar', 'القيود / المخرج / معيار الجودة', 'pipeline', ['قيود', 'مخرج', 'معيار جودة']],
      ['الدور الوظيفي لا المديح', 'الدور يحدد زاوية العمل، لا درجة الإعجاب.', 'Role', 'الدور الوظيفي', 'compare', ['مديح عام', 'دور مهني']],
      ['الأفعال الدقيقة', 'حلّل، قارن، استخرج، صغ: أفعال تصنع فرقًا.', 'Verbs', 'الأفعال الدقيقة', 'canvas', ['حلّل', 'قارن', 'استخرج', 'صغ']],
      ['المثال يصنع النمط', 'المثال الجيد يقيس الشكل المطلوب دون إغراق.', 'Few-shot Example', 'مثال موجّه', 'compare', ['تعليمات', 'مثال', 'نتيجة']],
      ['فكّك المهمة الكبيرة', 'المهمة المركبة لا تُحل بجملة أطول.', 'Decomposition', 'تفكيك المهمة', 'pipeline', ['اجمع', 'حلّل', 'راجع', 'صغ']],
      ['صحّح الأمر قبل أن تكرره', 'اسأل: ما القرار الذي تركته للنموذج؟', 'Prompt Review', 'مراجعة الأمر', 'canvas', ['هدف', 'قيد', 'مصدر', 'صيغة']],
      ['ورشة: أصلح الأمر', 'حوّل طلبًا غامضًا إلى تكليف يمكن مراجعته.', 'Workshop', 'ورشة تطبيقية', 'workshop', ['الهدف', 'السياق', 'القيود', 'المخرج'], 'arrange'],
    ]],
    ['المحور الثالث', 'هندسة السياق', [
      ['أمر ممتاز وسياق خاطئ', 'الأمر المتقن لا يعالج مستندًا ناقصًا أو مصدرًا قديمًا.', 'Context Engineering', 'هندسة السياق', 'compare', ['أمر جيد', 'سياق خاطئ']],
      ['كيف أسأل؟ وماذا يحتاج الآن؟', 'السؤال عن المعلومات المطلوبة أهم من تحسين الجملة فقط.', 'Need to Know', 'ما يحتاجه النموذج الآن', 'canvas', ['مهمة', 'معلومة لازمة', 'قرار']],
      ['مما يتكون السياق؟', 'تعليمات، حقائق، مستندات، أمثلة، وسجل سابق.', 'Instruction / Facts / Documents / Examples / History', 'تعليمات / حقائق / وثائق / أمثلة / سجل سابق', 'pipeline', ['تعليمات', 'حقائق', 'وثائق', 'أمثلة', 'سجل']],
      ['الأكثر ليس الأفضل', 'السياق الجيد ينتقي؛ لا يكدّس.', 'Signal over Noise', 'الإشارة أهم من الضوضاء', 'compare', ['حزمة طويلة', 'حزمة ذات صلة']],
      ['ميزانية السياق', 'كل عنصر في النافذة يجب أن يبرر وجوده.', 'Context Budget', 'ميزانية السياق', 'canvas', ['ضروري', 'مفيد', 'زائد']],
      ['استرجع ثم أسّس ثم ولّد', 'لا تطلب من النموذج أن يخمّن ما يمكن استرجاعه.', 'Retrieve → Ground → Generate', 'استرجع → أسّس → ولّد', 'pipeline', ['استرجاع', 'تأسيس', 'توليد']],
      ['ذاكرة أم معرفة أم حالة؟', 'ليست كل معلومة ثابتة، وليست كل معلومة صالحة للحفظ.', 'Memory / Knowledge / State', 'ذاكرة / معرفة / حالة', 'compare', ['ذاكرة', 'معرفة', 'حالة']],
      ['حجية المصدر وحداثته', 'المصدر الصحيح قد لا يكون أحدث مصدر، والعكس صحيح.', 'Authority / Freshness', 'حجية المصدر / حداثته', 'compare', ['مصدر رسمي', 'مصدر حديث']],
      ['حزمة السياق', 'اجمع أقل قدر يكفي لإنجاز مهمة صحيحة قابلة للمراجعة.', 'Context Pack', 'حزمة السياق', 'canvas', ['تعليمات', 'مصدر', 'قيود', 'سجل']],
      ['ورشة: ابنِ حزمة سياق', 'اختر ما يدخل النافذة وما يبقى خارجها.', 'Workshop', 'ورشة تطبيقية', 'workshop', ['تعليمات', 'وثيقة', 'نتيجة بحث', 'ضوضاء'], 'arrange'],
    ]],
    ['المحور الرابع', 'سير العمل بالذكاء الاصطناعي', [
      ['متى لا يعود الأمر كافيًا؟', 'حين تتكرر الخطوات أو تتعدد القرارات، نحتاج سير عمل.', 'AI Workflow', 'سير العمل بالذكاء الاصطناعي', 'compare', ['طلب واحد', 'عملية متكررة']],
      ['من سؤال إلى عملية', 'المسار يوضح ما يدخل، وما يحدث، وما يُسلّم.', 'Workflow', 'سير العمل', 'pipeline', ['مدخل', 'معالجة', 'مراجعة', 'تسليم']],
      ['فكّك العمل قبل أتمتته', 'أتمتة الغموض لا تصنع نظامًا.', 'Process Mapping', 'رسم العملية', 'pipeline', ['استلام', 'تحليل', 'صياغة', 'تحقق']],
      ['تسلسل أم توازٍ أم تفرع؟', 'هندسة المسار تبدأ من علاقة الخطوات، لا من الأداة.', 'Sequential / Parallel / Branching', 'تسلسل / توازٍ / تفرع', 'canvas', ['تسلسل', 'توازٍ', 'تفرع']],
      ['البوابة البشرية', 'هناك قرارات يجب ألا تمر دون اعتماد بشري.', 'Human-in-the-loop', 'الإنسان ضمن الحلقة', 'pipeline', ['إنشاء', 'مراجعة بشرية', 'اعتماد']],
      ['لكل مهمة أداتها', 'النموذج لا يحل محل قاعدة البيانات أو محرك البحث أو البريد.', 'Tools', 'الأدوات', 'canvas', ['بحث', 'ملفات', 'بريد', 'قاعدة بيانات']],
      ['أين وصل العمل؟', 'الحالة تمنع العمل من البدء من الصفر كل مرة.', 'State', 'حالة العمل', 'pipeline', ['جديد', 'قيد الفحص', 'بانتظار اعتماد', 'مكتمل']],
      ['لا تجعل كل خطوة فقرة', 'المخرجات المنظمة تجعل التسليم والتتبع ممكنين.', 'Structured Output', 'مخرج منظّم', 'compare', ['فقرة حرة', 'هيكل منظّم']],
      ['الإنشاء لا يساوي التحقق', 'كل سلسلة تحتاج مرحلة مستقلة لفحص النتيجة.', 'Generation / Verification', 'الإنشاء / التحقق', 'pipeline', ['إنشاء', 'تحقق', 'تصحيح']],
      ['ورشة: صمّم سير العمل', 'رتّب عملية مهنية من المدخل إلى الاعتماد.', 'Workshop', 'ورشة تطبيقية', 'workshop', ['مدخل', 'تحليل', 'بوابة بشرية', 'تسليم'], 'arrange'],
    ]],
    ['المحور الخامس', 'هندسة الوكلاء', [
      ['محادثة أم سير عمل أم وكيل؟', 'اختر مقدار الاستقلال الملائم للمهمة لا الأكثر إثارة.', 'Chat / Workflow / Agent', 'محادثة / سير عمل / وكيل', 'compare', ['محادثة', 'سير عمل', 'وكيل']],
      ['هدف وقرار وفعل وتغذية راجعة', 'يظهر الوكيل عندما تتصل الدورة، لا عند مجرد تسمية النموذج وكيلًا.', 'Goal → Decide → Act → Feedback', 'هدف → قرار → فعل → تغذية راجعة', 'pipeline', ['هدف', 'قرار', 'فعل', 'تغذية راجعة']],
      ['راقب ثم قرر ثم افعل', 'المراقبة هي ما يجعل الفعل ملائمًا للحالة.', 'Observe → Decide → Act', 'راقب → قرر → افعل', 'pipeline', ['راقب', 'قرر', 'افعل']],
      ['تشريح الوكيل', 'الوكيل منظومة: هدف، ذاكرة، أدوات، حالة، وضوابط.', 'Agent Architecture', 'بنية الوكيل', 'canvas', ['هدف', 'ذاكرة', 'أدوات', 'حالة', 'ضوابط']],
      ['مستويات التفويض', 'لا تمنح الوكيل ما لا يحتاج إليه لإنجاز المهمة.', 'Autonomy Levels', 'مستويات التفويض', 'canvas', ['اقتراح', 'تنفيذ بإذن', 'تنفيذ محدود']],
      ['سير عمل أم وكيل؟', 'إذا كانت القرارات معروفة مسبقًا فابدأ بسير العمل.', 'Decision Space', 'مساحة القرار', 'compare', ['قرارات ثابتة', 'قرارات متغيرة']],
      ['وكيل واحد أم عدة وكلاء؟', 'قسّم الأدوار عندما يزيد التقسيم الوضوح والمساءلة.', 'Multi-agent System', 'نظام متعدد الوكلاء', 'canvas', ['باحث', 'محلل', 'مراجع']],
      ['عقد التفويض وأقل صلاحية', 'حدّد الهدف والحدود والأدوات وسجل الأثر قبل الفعل.', 'Least Privilege', 'أقل صلاحية', 'pipeline', ['هدف', 'حدود', 'صلاحيات', 'سجل']],
      ['ضوابط ورقابة وتقييم', 'التفويض لا يكتمل دون قابلية للتدقيق والإيقاف.', 'Guardrails / Oversight / Evaluation', 'ضوابط الحماية / الرقابة / التقييم', 'governance', ['ضوابط', 'مراجعة', 'إيقاف', 'تقييم']],
      ['ورشة: صمّم وكيلًا', 'صمّم تفويضًا يمكن الدفاع عنه ومراجعته.', 'Workshop', 'ورشة تطبيقية', 'workshop', ['هدف', 'أداة', 'صلاحية', 'اعتماد'], 'arrange'],
    ]],
  ];
  const slides = opening.concat(groups.flatMap((group) => group[2].map((item) => slide(group[0], group[1], item[0], item[1], item[2], item[3], item[4], item[5], item[6]))));
  const closing = [
    ['الرحلة كاملة', 'ننتقل من فهم الآلة إلى تفويض مضبوط.', 'Model → Prompt → Context → Workflow → Agent', 'نموذج → أمر → سياق → سير عمل → وكيل', 'pipeline', ['افهم', 'وجّه', 'زوّد', 'نظّم', 'فوّض', 'راقب']],
    ['من مستخدم إلى مصمم نظم', 'القيمة المهنية تنتقل من كتابة السؤال إلى تصميم النظام.', 'System Designer', 'مصمم نظم', 'compare', ['مستخدم', 'مصمم نظم']],
    ['معادلة القيمة المهنية', 'الخبرة تحدد ما نفوّضه، وما نراجعه، وما نتحمل مسؤوليته.', 'Professional Judgment', 'الحكم المهني', 'canvas', ['خبرة', 'نظام', 'مسؤولية']],
    ['السؤال الجديد', 'ليس: ماذا يكتب النموذج؟ بل: ما الذي أسمح له بفعله؟', 'Permission', 'صلاحية', 'governance', ['سؤال', 'صلاحية', 'أثر']],
    ['المستقبل في النظم الأفضل', 'السباق ليس إلى أكثر أداة؛ بل إلى نظام أوضح وأقوى.', 'Better Systems', 'نظم أفضل', 'canvas', ['وضوح', 'سياق', 'تحقق']],
    ['فوّض التنفيذ، لا المسؤولية', 'يبقى الإنسان مسؤولًا عن القرار والحدود والمراجعة.', 'Delegation Governance', 'حوكمة التفويض', 'governance', ['تفويض', 'ضوابط', 'رقابة بشرية']],
  ];
  closing.forEach((item) => slides.push(slide('الختام', 'الرقابة على التفويض', item[0], item[1], item[2], item[3], item[4], item[5])));
  slides.forEach((item, index) => { item.id = 'S' + String(index + 1).padStart(2, '0'); item.number = index + 1; });

  const starts = { 'المحور الأول': 'S05', 'المحور الثاني': 'S15', 'المحور الثالث': 'S25', 'المحور الرابع': 'S35', 'المحور الخامس': 'S45' };
  const session = {};
  let index = 0;
  let overlay = null;
  let termTimers = [];
  let professionalTimer = null;
  let professionalIndex = 0;

  const $ = (selector) => document.querySelector(selector);
  const slideById = (id) => slides.find((item) => item.id === id);
  const current = () => slides[index];
  const termHTML = (term) => term ? `<span class="term" data-en="${escapeHTML(term.english)}" data-ar="${escapeHTML(term.arabic)}"><span>${escapeHTML(term.english)}</span></span>` : '';
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const titleHTML = (title) => escapeHTML(title).replace('تفويضها', '<em>تفويضها</em>').replace('الوكلاء', '<em>الوكلاء</em>').replace('التوليد', '<em>التوليد</em>');

  function routeHTML() {
    return `<div class="journey">${journey.map((step, i) => `<div class="journey-step"><span class="ring">${i + 1}</span><strong>${step[0]}</strong><small>${step[1]}</small>${i < journey.length - 1 ? '<i>→</i>' : ''}</div>`).join('')}</div>`;
  }

  function coverHTML(item) {
    const openingCover = item.id === 'S01';
    if (openingCover) {
      return `<section class="slide cover"><img class="cover-logo" src="./assets/academy-logo.png" alt="أكاديمية العدالة"><p class="eyebrow">عرض ويب تفاعلي · 2026</p><h1>من مخاطبة الآلة إلى <em>تفويضها</em></h1><p class="cover-subtitle">من هندسة الأوامر إلى هندسة الوكلاء</p><div class="speaker"><small>دكتور</small><strong>أحمد عبدالسلام</strong></div><div class="professional" id="professional-line">${professionalLines[professionalIndex]}</div>${termHTML(item.term)}<button class="start" id="start"><span>ابدأ</span><b>→</b></button>${routeHTML()}</section>`;
    }
    return `<section class="slide cover"><div class="cover-copy"><p class="eyebrow">${escapeHTML(item.axis)}</p><h1>${titleHTML(item.title)}</h1><p class="cover-subtitle">${escapeHTML(item.premise)}</p>${termHTML(item.term)}</div><div class="route"><div class="stop"><span class="ring">1</span><strong>بيانات</strong></div><div class="stop"><span class="ring">2</span><strong>تمثيل</strong></div><div class="stop"><span class="ring">3</span><strong>نموذج</strong></div><div class="stop"><span class="ring">4</span><strong>توليد</strong></div></div></section>`;
  }

  function hubVisual() {
    const labels = [['S05', 'كيف تعمل الآلة؟', 'UNDERSTAND'], ['S15', 'هندسة الأوامر', 'INSTRUCT'], ['S25', 'هندسة السياق', 'CONTEXTUALIZE'], ['S35', 'سير العمل بالذكاء الاصطناعي', 'ORCHESTRATE'], ['S45', 'هندسة الوكلاء', 'DELEGATE']];
    return `<div class="route">${labels.map((item, i) => `<button class="stop" data-go="${item[0]}"><span class="ring">${i + 1}</span><strong>${item[1]}</strong><small>${item[2]}</small></button>`).join('')}<div class="stop"><span class="ring">✓</span><strong>راقب</strong><small>CONTROL</small></div></div>`;
  }

  function timelineVisual(item) {
    const steps = ['أمر', 'نقر', 'بحث', 'توجيه', 'سير عمل', 'تفويض'];
    const value = session[item.id]?.range || 0;
    return `<div class="timeline"><div class="timeline-line"><span style="width:${(value / (steps.length - 1)) * 100}%"></span></div><div class="timeline-points">${steps.map((step, i) => `<button data-range="${i}" class="${i <= value ? 'active' : ''}"><b>${i + 1}</b><span>${step}</span></button>`).join('')}</div><div class="timeline-caption"><span>${steps[value]}</span>${termHTML(item.term)}</div></div>`;
  }

  function flowVisual(item) {
    const nodes = item.nodes.length ? item.nodes : ['مدخل', 'معالجة', 'نموذج', 'مخرج'];
    const cycles = session[item.id]?.cycles || 0;
    const active = cycles % nodes.length;
    return `<div class="flow">${nodes.map((node, i) => `<div class="flow-node ${i === active ? 'active' : ''}"><span class="ring">${i + 1}</span><strong>${escapeHTML(node)}</strong><small>${i === active ? '●' : '·'}</small></div>`).join('')}<button class="board-head" data-cycle aria-label="تشغيل دورة أخرى">↻</button></div>`;
  }

  function compareVisual(item) {
    const nodes = item.nodes.slice(0, 2);
    return `<div class="compare">${nodes.map((node, i) => `<button class="lane ${i ? 'accent' : ''}" data-explain="${escapeHTML(node)}"><small>0${i + 1}</small><strong>${escapeHTML(node)}</strong><span class="open">↗</span></button>`).join('')}</div>`;
  }

  function boardVisual(item) {
    const saved = session[item.id]?.items;
    const items = saved && saved.length ? saved : item.nodes;
    const canExplain = item.id === 'S48' || item.id === 'S53';
    return `<div class="board"><div class="board-head"><span>مساحة الفكرة</span><button data-reset="${item.id}" aria-label="إعادة ترتيب العناصر">↺</button></div><div class="board-items">${items.map((node, i) => `<button class="board-node" draggable="true" data-index="${i}" data-explain="${canExplain ? escapeHTML(node) : ''}"><span class="grab">⠿</span><span>${escapeHTML(node)}</span><span class="open">↗</span></button>`).join('')}</div></div>`;
  }

  function governanceVisual(item) {
    return `<div class="compare governance">${item.nodes.map((node, i) => `<button class="lane ${i % 2 ? 'accent' : ''}" data-explain="${escapeHTML(node)}"><small>0${i + 1}</small><strong>${escapeHTML(node)}</strong><span class="open">↗</span></button>`).join('')}</div>`;
  }

  function visualHTML(item) {
    if (item.kind === 'map') return hubVisual();
    if (item.kind === 'timeline') return timelineVisual(item);
    if (item.kind === 'pipeline') return flowVisual(item);
    if (item.kind === 'compare') return compareVisual(item);
    if (item.kind === 'governance') return governanceVisual(item);
    return boardVisual(item);
  }

  function render(item) {
    clearTimers();
    $('#axis-label').textContent = item.axis;
    $('#counter').innerHTML = `${item.id} <i>/ 60</i>`;
    $('#progress-fill').style.width = `${(item.number / 60) * 100}%`;
    $('#slide').innerHTML = item.kind === 'cover' ? coverHTML(item) : `<section class="slide"><div class="grid"><div class="heading"><p class="eyebrow">${escapeHTML(item.axis)} <em>·</em> ${item.id}</p><h1>${titleHTML(item.title)}</h1><p class="premise">${escapeHTML(item.premise)}</p>${termHTML(item.term)}</div><div class="visual">${visualHTML(item)}</div></div>${item.kind === 'workshop' ? '<div class="workshop-badge"><b>Workshop</b><small>مساحة بناء مشتركة</small></div>' : `<div class="signature">${escapeHTML(item.axisTitle)}</div>`}</section>`;
    attachSlideEvents(item);
    startBilingualClock();
    if (item.id === 'S01') startProfessionalClock();
  }

  function attachSlideEvents(item) {
    const start = $('#start');
    if (start) start.addEventListener('click', next);
    document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => goTo(button.dataset.go)));
    document.querySelectorAll('[data-range]').forEach((button) => button.addEventListener('click', () => { session[item.id] = { ...(session[item.id] || {}), range: Number(button.dataset.range) }; render(item); }));
    const cycle = document.querySelector('[data-cycle]');
    if (cycle) cycle.addEventListener('click', (event) => { event.stopPropagation(); session[item.id] = { ...(session[item.id] || {}), cycles: (session[item.id]?.cycles || 0) + 1 }; render(item); });
    document.querySelectorAll('[data-explain]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); if (button.dataset.explain) openExplainer(button.dataset.explain); }));
    document.querySelectorAll('[data-reset]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); session[button.dataset.reset] = { ...(session[button.dataset.reset] || {}), items: slideById(button.dataset.reset).nodes.slice() }; render(current()); }));
    let dragging = null;
    document.querySelectorAll('.board-node[draggable="true"]').forEach((node) => {
      node.addEventListener('dragstart', (event) => { event.stopPropagation(); dragging = Number(node.dataset.index); node.classList.add('drag'); });
      node.addEventListener('dragend', () => { dragging = null; node.classList.remove('drag'); });
      node.addEventListener('dragover', (event) => event.preventDefault());
      node.addEventListener('drop', (event) => { event.preventDefault(); event.stopPropagation(); if (dragging === null) return; const list = (session[item.id]?.items || item.nodes).slice(); const moved = list.splice(dragging, 1)[0]; list.splice(Number(node.dataset.index), 0, moved); session[item.id] = { ...(session[item.id] || {}), items: list }; render(item); });
    });
  }

  function clearTimers() { termTimers.forEach((timer) => clearTimeout(timer)); termTimers = []; if (professionalTimer) { clearInterval(professionalTimer); professionalTimer = null; } }
  function startBilingualClock() {
    document.querySelectorAll('.term').forEach((element, i) => {
      const tick = () => { if (!overlay) { const arabic = element.dataset.language === 'ar'; element.dataset.language = arabic ? 'en' : 'ar'; element.querySelector('span').textContent = arabic ? element.dataset.en : element.dataset.ar; } termTimers.push(setTimeout(tick, 4700)); };
      termTimers.push(setTimeout(tick, 4400 + i * 350));
    });
  }
  function startProfessionalClock() {
    professionalTimer = setInterval(() => { professionalIndex = (professionalIndex + 1) % professionalLines.length; const element = $('#professional-line'); if (element) { element.textContent = professionalLines[professionalIndex]; element.style.animation = 'none'; void element.offsetWidth; element.style.animation = 'morph .4s ease both'; } }, 4600);
  }

  function openExplainer(label) {
    const flows = { 'التصنيف': ['Objects', 'Categories'], 'Classification': ['Objects', 'Categories'], 'التوليد': ['Prompt', 'Model', 'Generated Output'], 'Generation': ['Prompt', 'Model', 'Generated Output'], 'RAG': ['Question', 'Retrieve', 'Relevant Sources', 'Context', 'Model'], 'الوكيل': ['Goal', 'Plan', 'Tool', 'Action', 'Observation', 'Next Action'] };
    const flow = flows[label] || [label, 'Role', 'Effect'];
    overlay = 'explainer';
    document.body.insertAdjacentHTML('beforeend', `<div class="overlay" id="overlay"><section class="overlay-panel"><button class="overlay-close" id="overlay-close" aria-label="إغلاق الشرح">×</button><p class="eyebrow">شرح بصري</p><h2>${escapeHTML(current().title)}</h2><div class="flow-overlay">${flow.map((step, i) => `<span><b>${escapeHTML(step)}</b>${i < flow.length - 1 ? '<i>→</i>' : ''}</span>`).join('')}</div></section></div>`);
    $('#overlay-close').addEventListener('click', closeOverlay);
  }
  function openMap() {
    overlay = 'map';
    const labels = [['S05', 'كيف تعمل الآلة؟', 'UNDERSTAND'], ['S15', 'هندسة الأوامر', 'INSTRUCT'], ['S25', 'هندسة السياق', 'CONTEXTUALIZE'], ['S35', 'سير العمل بالذكاء الاصطناعي', 'ORCHESTRATE'], ['S45', 'هندسة الوكلاء', 'DELEGATE']];
    document.body.insertAdjacentHTML('beforeend', `<div class="overlay" id="overlay"><section class="overlay-panel"><button class="overlay-close" id="overlay-close" aria-label="إغلاق الخريطة">×</button><p class="eyebrow">مسار المحاضرة</p><h2>من الفهم إلى <em>التفويض</em></h2><p class="overlay-lede">ست محطات، ومسؤولية واحدة لا تغيب.</p><div class="overlay-grid">${labels.map((x, i) => `<button data-overlay-go="${x[0]}"><span class="ring">${i + 1}</span><strong>${x[1]}</strong><small>${x[2]}</small></button>`).join('')}<div class="control"><span class="ring">✓</span><strong>راقب</strong><small>CONTROL</small></div></div></section></div>`);
    $('#overlay-close').addEventListener('click', closeOverlay);
    document.querySelectorAll('[data-overlay-go]').forEach((button) => button.addEventListener('click', () => { goTo(button.dataset.overlayGo); closeOverlay(); }));
  }
  function closeOverlay() { const element = $('#overlay'); if (element) element.remove(); overlay = null; render(current()); }
  function goTo(id) { const target = slideById(id); if (!target) return; index = target.number - 1; window.history.replaceState(null, '', `#${target.id}`); render(target); }
  function next() { if (index < slides.length - 1) goTo(slides[index + 1].id); }
  function previous() { if (index > 0) goTo(slides[index - 1].id); }
  function fullscreen() { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => undefined); }

  $('#next').addEventListener('click', next); $('#prev').addEventListener('click', previous); $('#nav-next').addEventListener('click', next); $('#nav-prev').addEventListener('click', previous); $('#hub').addEventListener('click', openMap); $('#map').addEventListener('click', openMap); $('#fullscreen').addEventListener('click', fullscreen);
  window.addEventListener('hashchange', () => { const target = slideById(window.location.hash.slice(1)); if (target) { index = target.number - 1; render(target); } });
  window.addEventListener('keydown', (event) => { if (event.target && /input|textarea|select/i.test(event.target.tagName)) return; if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); next(); } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); previous(); } else if (event.key.toLowerCase() === 'f') fullscreen(); else if (event.key.toLowerCase() === 'h' || event.key.toLowerCase() === 'm') openMap(); else if (event.key === 'Escape' && overlay) closeOverlay(); });
  const initial = slideById(window.location.hash.slice(1)); if (initial) index = initial.number - 1; render(current());
})();

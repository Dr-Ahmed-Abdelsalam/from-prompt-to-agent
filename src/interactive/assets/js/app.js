(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);

  if (document.body.classList.contains('opening-page')) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === 'ArrowLeft') window.location.href = 'hub.html';
    });
    return;
  }

  if (!document.body.classList.contains('deck-page')) return;

  const chapter = window.lectureChapters?.[document.body.dataset.chapter];
  const deck = $('#deck');
  if (!chapter || !deck) return;
  let slideIndex = 0;
  let pointerStart = 0;

  const escape = (text = '') => text.replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
  const visual = (type) => {
    const dots = '<span></span><span></span><span></span><span></span><span></span><span></span>';
    if (type === 'model') return `<div class="chapter-visual model-visual" aria-hidden="true"><div class="data-cluster">${dots}</div><div class="model-core"><i></i><i></i><i></i></div><div class="prediction">TOKEN<small>التالي</small></div></div>`;
    if (type === 'prompt') return `<div class="chapter-visual prompt-visual" aria-hidden="true"><div class="command-line"><span>›</span> حلّل القضية</div><div class="command-line is-complete"><span>›</span> حلّل · صنّف · صِغ</div></div>`;
    if (type === 'context') return `<div class="chapter-visual context-visual" aria-hidden="true"><i>عقد</i><i>لائحة</i><i>حكم</i><div>MODEL</div></div>`;
    if (type === 'workflow') return `<div class="chapter-visual workflow-visual" aria-hidden="true"><i>01</i><b></b><i>02</i><b></b><i>03</i><b></b><i>04</i></div>`;
    return `<div class="chapter-visual agent-visual" aria-hidden="true"><i>أداة</i><i>ذاكرة</i><i>معرفة</i><i>إنسان</i><div>وكيل</div></div>`;
  };

  const stage = (slide) => {
    const points = (slide.points || []).map((point, index) => `<li data-reveal="${index + 1}">${escape(point)}</li>`).join('');
    if (slide.type === 'data-flow') return `<div class="stage data-stage"><div class="data-cards"><span>نص</span><span>صورة</span><span>صوت</span></div><div class="flow-arrow">←</div><div class="token-stream"><b>ت</b><b>و</b><b>ك</b><b>ن</b></div><div class="flow-arrow">←</div><div class="representation">0.82<br><em>−0.13</em><br>0.47</div></div>${pointList(points, slide.note)}`;
    if (slide.type === 'weights') return `<div class="stage weights-stage"><div class="weight-input">السياق</div><div class="neural-grid">${dots(16)}</div><div class="weight-output">توقع</div><div class="correction">تصحيح</div></div>${pointList(points, slide.note)}`;
    if (slide.type === 'generation') return `<div class="stage generation-stage"><div class="sentence">التحكيم هو وسيلة…</div><div class="probability"><span style="--w:82%">بديلة <b>82%</b></span><span style="--w:49%">قضائية <b>49%</b></span><span style="--w:19%">ودية <b>19%</b></span></div></div>${pointList(points, slide.note)}`;
    if (slide.type === 'context-window') return `<div class="stage context-window-stage"><div class="window-label">CONTEXT WINDOW</div><span>القواعد</span><span>الوقائع</span><span>المستندات</span><span>الحوار</span><i>…</i></div>${pointList(points, slide.note)}`;
    if (slide.type === 'prompt-build') return `<div class="stage prompt-build-stage">${slide.steps.map((step, index) => `<div class="prompt-step" data-reveal="${index + 1}"><b>0${index + 1}</b><p>${escape(step)}</p></div>`).join('')}</div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'prompt-anatomy') return `<div class="stage anatomy-stage">${slide.points.map((point, index) => `<span data-reveal="${index + 1}"><b>0${index + 1}</b>${escape(point)}</span>`).join('')}</div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'comparison' || slide.type === 'agent-vs-chat') return `<div class="stage comparison-stage"><div><p>${slide.type === 'agent-vs-chat' ? 'Chatbot' : 'يوجه الشكل'}</p>${slide.left.map((item, index) => `<span data-reveal="${index + 1}">${escape(item)}</span>`).join('')}</div><b class="versus">↔</b><div class="is-accent"><p>${slide.type === 'agent-vs-chat' ? 'Agent' : 'يضبط المخاطر'}</p>${slide.right.map((item, index) => `<span data-reveal="${index + 4}">${escape(item)}</span>`).join('')}</div></div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'evaluation' || slide.type === 'agent-eval') return `<div class="stage evaluation-stage"><div class="loop">قياس</div><i>←</i><div class="loop">اختبار</div><i>←</i><div class="loop">تحسين</div></div>${pointList(points, slide.note)}`;
    if (slide.type === 'context-stream') return `<div class="stage context-stream-stage"><div class="doc doc-a">سياسة</div><div class="doc doc-b">حكم</div><div class="doc doc-c">عقد</div><div class="stream-target">MODEL</div></div>${pointList(points, slide.note)}`;
    if (slide.type === 'context-stack') return `<div class="stage stack-stage">${slide.points.map((item, index) => `<span data-reveal="${index + 1}">${escape(item)}</span>`).join('')}</div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'rag') return `<div class="stage rag-stage"><span>سؤال</span><i>←</i><span>بحث</span><i>←</i><span>مقاطع</span><i>←</i><strong>إجابة<br>مسندة</strong></div>${pointList(points, slide.note)}`;
    if (slide.type === 'guardrails' || slide.type === 'agent-boundaries') return `<div class="stage guardrail-stage"><div class="guard-core">${slide.type === 'agent-boundaries' ? 'وكيل' : 'سياق'}</div>${slide.points.map((item, index) => `<span data-reveal="${index + 1}">${escape(item)}</span>`).join('')}</div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'workflow-map' || slide.type === 'workflow-legal') return `<div class="stage workflow-stage">${slide.points.map((item, index) => `<div data-reveal="${index + 1}"><b>0${index + 1}</b><span>${escape(item)}</span></div>`).join('')}</div><p class="stage-note">${escape(slide.note)}</p>`;
    if (slide.type === 'workflow-branch') return `<div class="stage branch-stage"><div class="branch-start">مدخل</div><i></i><div class="branch-question">هل اكتملت البيانات؟</div><span class="yes">نعم ← تحليل</span><span class="no">لا ← استيضاح</span></div>${pointList(points, slide.note)}`;
    if (slide.type === 'human-loop') return `<div class="stage human-stage"><span>نموذج</span><i>←</i><strong>حكم مهني</strong><i>←</i><span>مخرج</span></div>${pointList(points, slide.note)}`;
    if (slide.type === 'agent-system') return `<div class="stage agent-stage"><div class="agent-core">وكيل</div><span class="tool t1">أدوات</span><span class="tool t2">ذاكرة</span><span class="tool t3">معرفة</span><span class="tool t4">إنسان</span></div>${pointList(points, slide.note)}`;
    return '';
  };
  const dots = amount => Array.from({ length: amount }, () => '<i></i>').join('');
  const pointList = (items, note) => `<div class="slide-copy"><ul>${items}</ul><p class="stage-note">${escape(note)}</p></div>`;

  const render = () => {
    const slide = chapter.slides[slideIndex];
    const progress = ((slideIndex + 1) / chapter.slides.length) * 100;
    const globalNumber = (chapter.start || 1) + slideIndex;
    let body = '';
    if (slide.type === 'intro') body = `<section class="slide slide--intro"><div class="slide-text"><p class="eyebrow">${slide.label}</p><span class="chapter-count">${chapter.number}</span><h1>${slide.title}</h1><p>${slide.text}</p><button class="hint-button" data-next>استكشف الفصل <b>←</b></button></div>${visual(slide.visual)}</section>`;
    else if (slide.type === 'topics') body = `<section class="slide slide--topics"><div class="slide-title"><p class="eyebrow">${chapter.number} — ${chapter.trail}</p><h1>${slide.title}</h1></div><div class="topic-list">${slide.topics.map((topic, index) => `<div data-reveal="${index + 1}"><b>0${index + 1}</b><span>${escape(topic)}</span><i>←</i></div>`).join('')}</div><p class="topics-note">هذه خريطة حديثنا، وليست ملخصًا للشرح.</p></section>`;
    else if (slide.type === 'workshop') body = `<section class="slide slide--workshop"><div class="workshop-orbit"><span></span><span></span><span></span></div><div class="workshop-card"><p class="eyebrow">${slide.title.includes('Workshop') ? 'تطبيق عملي' : 'الرحلة تبدأ هنا'}</p><h1>${slide.title}</h1><p>${escape(slide.prompt)}</p><b>${escape(slide.action)}</b><a href="${slide.next || 'hub.html'}">${escape(slide.cta || 'العودة إلى خريطة الرحلة')} <i>←</i></a></div></section>`;
    else body = `<section class="slide slide--concept"><div class="concept-heading"><p class="eyebrow">${slide.eyebrow}</p><h1>${slide.title}</h1></div><div class="concept-body">${stage(slide)}</div></section>`;
    deck.innerHTML = `<div class="deck-shell"><header class="deck-topbar"><a href="hub.html" aria-label="خريطة المحاضرة" class="hub-link">⌘ <span>المحاور</span></a><div class="deck-title"><b>${chapter.number}</b><span>${chapter.title}</span></div><button class="fullscreen-button" aria-label="ملء الشاشة" title="ملء الشاشة (F)">⛶</button></header>${body}<footer class="deck-footer"><span>${String(globalNumber).padStart(2, '0')} <i>/</i> 60</span><div class="progress"><i style="width:${progress}%"></i></div><span>${chapter.trail}</span></footer><div class="nav-hit nav-hit--prev" data-prev aria-label="السابق"></div><div class="nav-hit nav-hit--next" data-next aria-label="التالي"></div><button class="nav-button nav-button--prev" data-prev aria-label="السابق">→</button><button class="nav-button nav-button--next" data-next aria-label="التالي">←</button></div>`;
    revealNext();
    $('.fullscreen-button')?.addEventListener('click', toggleFullscreen);
  };
  const revealNext = () => {
    const hidden = [...deck.querySelectorAll('[data-reveal]:not(.is-revealed)')];
    if (hidden.length) { hidden[0].classList.add('is-revealed'); return true; }
    return false;
  };
  const next = () => { if (!revealNext() && slideIndex < chapter.slides.length - 1) { slideIndex++; render(); } };
  const prev = () => { if (slideIndex > 0) { slideIndex--; render(); } else window.location.href = 'hub.html'; };
  const toggleFullscreen = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
  deck.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    if (event.target.closest('[data-prev]')) prev();
    else if (event.target.closest('[data-next]') || !event.target.closest('button')) next();
  });
  document.addEventListener('keydown', event => {
    if (['ArrowLeft', 'PageDown', 'Enter'].includes(event.key) || event.key === ' ') { event.preventDefault(); next(); }
    if (['ArrowRight', 'PageUp', 'Backspace'].includes(event.key)) { event.preventDefault(); prev(); }
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
    if (event.key.toLowerCase() === 'h') window.location.href = 'hub.html';
  });
  document.addEventListener('pointerdown', event => { pointerStart = event.clientX; });
  document.addEventListener('pointerup', event => { const diff = event.clientX - pointerStart; if (Math.abs(diff) > 70) diff < 0 ? next() : prev(); });
  render();
})();

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
  let pointerStart = null;
  let roleTimer = null;
  let termTimers = [];

  const clearTermTimers = () => {
    termTimers.forEach(timer => window.clearTimeout(timer));
    termTimers = [];
  };

  const clearRoleCycle = () => {
    if (roleTimer) window.clearTimeout(roleTimer);
    roleTimer = null;
  };

  const startRoleCycle = (roles = []) => {
    clearRoleCycle();
    const target = $('[data-role-typer]');
    if (!target || !roles.length) return;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const tick = () => {
      const phrase = roles[roleIndex];
      target.textContent = deleting ? phrase.slice(0, charIndex--) : phrase.slice(0, charIndex++);
      if (!deleting && charIndex > phrase.length) {
        deleting = true;
        roleTimer = window.setTimeout(tick, 1750);
        return;
      }
      if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        roleTimer = window.setTimeout(tick, 280);
        return;
      }
      roleTimer = window.setTimeout(tick, deleting ? 22 : 48);
    };
    tick();
  };

  /*
   * A slide is a teaching surface, not a giant next button.  These helpers are
   * deliberately data-attribute driven so new interactions can be added in the
   * content layer without changing the navigation engine.
   */
  const initialiseTerms = () => {
    clearTermTimers();
    const pairedTerms = new Set();

    deck.querySelectorAll('[data-term-en][data-term-ar]').forEach(host => {
      const english = host.dataset.termEn || host.textContent.trim();
      const arabic = host.dataset.termAr;
      if (!english || !arabic) return;
      pairedTerms.add(host);
      host.textContent = english;
      host.dataset.termState = 'english';
      host.style.transition = 'opacity .34s ease, transform .34s ease, filter .34s ease';
      termTimers.push(window.setTimeout(() => {
        host.style.opacity = '0';
        host.style.transform = 'translateY(-.18em) scale(.98)';
        host.style.filter = 'blur(2px)';
        termTimers.push(window.setTimeout(() => {
          host.textContent = arabic;
          host.dir = 'rtl';
          host.dataset.termState = 'arabic';
          host.style.transform = 'translateY(.18em) scale(.98)';
          requestAnimationFrame(() => {
            host.style.opacity = '1';
            host.style.transform = 'translateY(0) scale(1)';
            host.style.filter = 'blur(0)';
          });
        }, 290));
      }, Number(host.dataset.termDelay || 2200)));
    });

    // Also supports: <span data-term-en>Agent</span><span data-term-ar>وكيل</span>
    deck.querySelectorAll('[data-term-en]:not([data-term-ar])').forEach(englishNode => {
      if (pairedTerms.has(englishNode)) return;
      const arabicNode = englishNode.parentElement?.querySelector(':scope > [data-term-ar]')
        || englishNode.nextElementSibling?.matches?.('[data-term-ar]') && englishNode.nextElementSibling;
      if (!arabicNode) return;
      const english = englishNode.dataset.termEn || englishNode.textContent.trim();
      if (!english) return;
      englishNode.textContent = english;
      arabicNode.hidden = true;
      englishNode.dataset.termState = 'english';
      termTimers.push(window.setTimeout(() => {
        englishNode.style.transition = 'opacity .3s ease, transform .3s ease';
        englishNode.style.opacity = '0';
        englishNode.style.transform = 'translateY(-.18em)';
        termTimers.push(window.setTimeout(() => {
          englishNode.hidden = true;
          arabicNode.hidden = false;
          arabicNode.dir = 'rtl';
          arabicNode.dataset.termState = 'arabic';
          arabicNode.style.opacity = '0';
          arabicNode.style.transform = 'translateY(.18em)';
          arabicNode.style.transition = 'opacity .3s ease, transform .3s ease';
          requestAnimationFrame(() => {
            arabicNode.style.opacity = '1';
            arabicNode.style.transform = 'translateY(0)';
          });
        }, 270));
      }, Number(englishNode.dataset.termDelay || 2200)));
    });
  };

  const initialiseInteractiveBoards = () => {
    const boards = [...deck.querySelectorAll('[data-interactive-board]')];
    const initialOrders = new Map();
    const resolveBoard = (value, fallback) => {
      if (!value || value === 'true') return fallback || null;
      try { return deck.querySelector(value) || document.querySelector(value); } catch (_) {
        return deck.querySelector(`#${CSS.escape(value)}`) || document.getElementById(value);
      }
    };

    const itemFor = (board, target) => {
      let candidate = target.closest?.('[data-draggable], [data-board-item], [draggable="true"]');
      if (!candidate) {
        candidate = target;
        while (candidate && candidate.parentElement !== board) candidate = candidate.parentElement;
      }
      return candidate?.parentElement === board && !candidate.matches('[data-no-drag], button, a, input, textarea, select') ? candidate : null;
    };

    boards.forEach((board, boardIndex) => {
      if (!board.id) board.id = `interactive-board-${slideIndex}-${boardIndex}`;
      const items = [...board.children].filter(item => !item.matches('[data-no-drag]'));
      initialOrders.set(board, items);
      board.dataset.interactiveBoard = board.dataset.interactiveBoard || board.id;
      board.dataset.slideInteraction = 'true';
      items.forEach(item => {
        item.draggable = true;
        item.dataset.boardItem = item.dataset.boardItem || 'true';
        item.dataset.slideInteraction = 'true';
      });

      let dragging = null;
      let pointer = null;
      let moved = false;
      const finish = () => {
        if (dragging) dragging.classList.remove('is-dragging');
        board.classList.remove('is-reordering');
        dragging = null;
        pointer = null;
        moved = false;
      };
      const moveItem = (event, item) => {
        const target = itemFor(board, document.elementFromPoint(event.clientX, event.clientY));
        if (!target || target === item) return;
        const bounds = target.getBoundingClientRect();
        const before = event.clientY < bounds.top + bounds.height / 2 || event.clientX < bounds.left + bounds.width / 2;
        board.insertBefore(item, before ? target : target.nextElementSibling);
      };

      board.addEventListener('pointerdown', event => {
        const item = itemFor(board, event.target);
        if (!item || event.target.closest('button, a, input, textarea, select')) return;
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, item };
      });
      board.addEventListener('pointermove', event => {
        if (!pointer || pointer.id !== event.pointerId) return;
        if (!moved && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) < 7) return;
        moved = true;
        dragging = pointer.item;
        dragging.classList.add('is-dragging');
        board.classList.add('is-reordering');
        event.preventDefault();
        moveItem(event, dragging);
      });
      board.addEventListener('pointerup', finish);
      board.addEventListener('pointercancel', finish);

      board.addEventListener('dragstart', event => {
        const item = itemFor(board, event.target);
        if (!item) return;
        dragging = item;
        item.classList.add('is-dragging');
        board.classList.add('is-reordering');
        event.dataTransfer.effectAllowed = 'move';
      });
      board.addEventListener('dragover', event => {
        if (!dragging) return;
        event.preventDefault();
        moveItem(event, dragging);
      });
      board.addEventListener('dragend', finish);
    });

    deck.querySelectorAll('[data-reset-board]').forEach(control => {
      control.dataset.slideInteraction = 'true';
      control.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const board = resolveBoard(control.dataset.resetBoard, control.closest('[data-interactive-board]'));
        const order = board && initialOrders.get(board);
        if (board && order) order.forEach(item => board.append(item));
      });
    });
  };

  const initialiseSlideInteraction = () => {
    initialiseTerms();
    initialiseInteractiveBoards();
  };

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
    clearRoleCycle();
    clearTermTimers();
    const slide = chapter.slides[slideIndex];
    const progress = ((slideIndex + 1) / chapter.slides.length) * 100;
    const globalNumber = slide.number || ((chapter.start || 1) + slideIndex);
    const slideId = slide.id || `S${String(globalNumber).padStart(2, '0')}`;
    let body = '';
    if (slide.type === 'opening') body = `<section class="slide slide--opening"><div class="opening-technical opening-technical--left" aria-hidden="true"><i></i><i></i><i></i></div><div class="opening-stage"><div class="academy-mark"><img src="assets/images/justice-academy-logo.png" alt=""><span>${slide.label}</span></div><div class="opening-icon" aria-hidden="true">⚖</div><h1>${slide.title}</h1><p class="opening-subtitle">${slide.subtitle}</p><div class="opening-route" aria-label="مسار المحاضرة"><span>افهم</span><i></i><span>وجّه</span><i></i><span>زوّد</span><i></i><span>نظّم</span><i></i><span>فوّض</span><i></i><span>راقب</span></div><div class="presenter"><b>دكتور أحمد عبدالسلام</b><p><span data-role-typer></span><i aria-hidden="true"></i></p></div><button class="enter-button" data-next>ابدأ <b>←</b></button></div><div class="opening-technical opening-technical--right" aria-hidden="true"><i></i><i></i><i></i></div></section>`;
    else if (slide.type === 'intro') body = `<section class="slide slide--intro"><div class="slide-text"><p class="eyebrow">${slide.label}</p><span class="chapter-count">${chapter.number}</span><h1>${slide.title}</h1><p>${slide.text}</p><button class="hint-button" data-next>استكشف المحور <b>←</b></button></div>${visual(slide.visual)}</section>`;
    else if (slide.type === 'topics') body = `<section class="slide slide--topics"><div class="slide-title"><p class="eyebrow">${chapter.number} — ${chapter.trail}</p><h1>${slide.title}</h1></div><div class="topic-list">${slide.topics.map((topic, index) => `<div data-reveal="${index + 1}"><b>0${index + 1}</b><span>${escape(topic)}</span><i>←</i></div>`).join('')}</div><p class="topics-note">هذه خريطة حديثنا، وليست ملخصًا للشرح.</p></section>`;
    else if (slide.type === 'workshop') body = `<section class="slide slide--workshop"><div class="workshop-orbit"><span></span><span></span><span></span></div><div class="workshop-card"><p class="eyebrow">${slide.title.includes('Workshop') ? 'تطبيق عملي' : 'الرحلة تبدأ هنا'}</p><h1>${slide.title}</h1><p>${escape(slide.prompt)}</p><b>${escape(slide.action)}</b><a href="${slide.next || 'hub.html'}">${escape(slide.cta || 'العودة إلى خريطة الرحلة')} <i>←</i></a></div></section>`;
    else body = `<section class="slide slide--concept"><div class="concept-heading"><p class="eyebrow">${slide.eyebrow}</p><h1>${slide.title}</h1></div><div class="concept-body">${stage(slide)}</div></section>`;
    deck.innerHTML = `<div class="deck-shell" data-slide-id="${slideId}"><header class="deck-topbar"><a href="hub.html" aria-label="خريطة المحاضرة" class="hub-link">⌘ <span>المحاور</span></a><div class="deck-title"><b>${chapter.number}</b><span>${chapter.title}</span></div><button class="fullscreen-button" aria-label="ملء الشاشة" title="ملء الشاشة (F)">⛶</button></header>${body}<footer class="deck-footer"><span>${slideId} <i>/</i> 60</span><div class="progress"><i style="width:${progress}%"></i></div><span>${chapter.trail}</span></footer><div class="nav-hit nav-hit--prev" data-prev aria-label="السابق"></div><div class="nav-hit nav-hit--next" data-next aria-label="التالي"></div><button class="nav-button nav-button--prev" data-prev aria-label="السابق">→</button><button class="nav-button nav-button--next" data-next aria-label="التالي">←</button></div>`;
    revealNext();
    $('.fullscreen-button')?.addEventListener('click', toggleFullscreen);
    initialiseSlideInteraction();
    if (slide.type === 'opening') startRoleCycle(slide.roles);
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
    if (event.target.closest('[data-slide-interaction], [data-interactive-board], [data-draggable], [data-board-item], [draggable="true"]')) return;
    if (event.target.closest('[data-prev]')) prev();
    else if (event.target.closest('[data-next]')) next();
  });
  document.addEventListener('keydown', event => {
    if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (['ArrowLeft', 'PageDown', 'Enter'].includes(event.key) || event.key === ' ') { event.preventDefault(); next(); }
    if (['ArrowRight', 'PageUp', 'Backspace'].includes(event.key)) { event.preventDefault(); prev(); }
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
    if (event.key.toLowerCase() === 'h') window.location.href = 'hub.html';
  });
  document.addEventListener('pointerdown', event => {
    pointerStart = {
      x: event.clientX,
      interactive: Boolean(event.target.closest('[data-slide-interaction], [data-interactive-board], [data-draggable], [data-board-item], [draggable="true"], button, a, input, textarea, select'))
    };
  });
  document.addEventListener('pointerup', event => {
    if (!pointerStart || pointerStart.interactive) return;
    const diff = event.clientX - pointerStart.x;
    if (Math.abs(diff) > 70) diff < 0 ? next() : prev();
  });
  render();
})();

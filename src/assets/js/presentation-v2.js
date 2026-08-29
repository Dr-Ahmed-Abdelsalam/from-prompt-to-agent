(() => {
  const deck = document.getElementById('deck');
  if (!deck) return;

  const scenes = [...deck.querySelectorAll('.scene')];
  const currentEl = document.getElementById('currentScene');
  const totalEl = document.getElementById('totalScenes');
  const nextBtn = deck.querySelector('[data-next]');
  const prevBtn = deck.querySelector('[data-prev]');
  const explainer = document.getElementById('explainer');
  const explainerStage = explainer?.querySelector('[data-explainer-stage]');
  const explainerClose = explainer?.querySelector('[data-explainer-close]');

  let index = Math.max(0, scenes.findIndex(s => s.classList.contains('is-active')));
  let timer = null;

  if (totalEl) totalEl.textContent = String(scenes.length).padStart(2, '0');

  function syncCounter() {
    if (currentEl) currentEl.textContent = String(index + 1).padStart(2, '0');
  }

  function restartEntry(scene) {
    scene.querySelectorAll('.enter').forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  function showScene(target) {
    if (target < 0 || target >= scenes.length || target === index) return;
    if (explainer?.classList.contains('is-open')) closeExplainer();
    window.clearTimeout(timer);
    const current = scenes[index];
    const next = scenes[target];
    current.classList.add('is-leaving');
    timer = window.setTimeout(() => {
      current.classList.remove('is-active', 'is-leaving');
      next.classList.add('is-active');
      index = target;
      syncCounter();
      restartEntry(next);
      requestAnimationFrame(() => drawAllBoardLinks(next));
      deck.focus({ preventScroll: true });
    }, 260);
  }

  function next() { if (index < scenes.length - 1) showScene(index + 1); }
  function prev() { if (index > 0) showScene(index - 1); }

  deck.querySelectorAll('[data-jump]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const target = Number(btn.dataset.jump);
      if (Number.isFinite(target)) showScene(target);
    });
  });

  nextBtn?.addEventListener('click', next);
  prevBtn?.addEventListener('click', prev);

  function isTyping(target) {
    return target instanceof HTMLElement && (target.isContentEditable || ['INPUT','TEXTAREA','SELECT'].includes(target.tagName));
  }

  async function fullscreen() {
    try {
      if (!document.fullscreenElement) await deck.requestFullscreen?.();
      else await document.exitFullscreen?.();
    } catch (_) {}
  }

  deck.addEventListener('keydown', e => {
    if (isTyping(e.target)) return;
    if (explainer?.classList.contains('is-open')) {
      if (e.key === 'Escape' || e.key === 'ArrowLeft') { e.preventDefault(); closeExplainer(); }
      return;
    }
    if (['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)) { e.preventDefault(); next(); return; }
    if (['ArrowLeft','ArrowUp','PageUp'].includes(e.key)) { e.preventDefault(); prev(); return; }
    if (e.key.toLowerCase() === 'h') { e.preventDefault(); showScene(1); return; }
    if (e.key.toLowerCase() === 'f') { e.preventDefault(); fullscreen(); }
  });

  // Generic bounded drag system for chapter map and concept boards.
  const dragState = { active:null, parent:null, startX:0, startY:0, offsetX:0, offsetY:0, moved:false, pointerId:null };

  function startDrag(node, event) {
    if (event.button !== 0) return;
    const parent = node.closest('[data-map-board], [data-concept-board]');
    if (!parent) return;
    event.preventDefault();
    const nr = node.getBoundingClientRect();
    dragState.active = node;
    dragState.parent = parent;
    dragState.startX = event.clientX;
    dragState.startY = event.clientY;
    dragState.offsetX = event.clientX - (nr.left + nr.width / 2);
    dragState.offsetY = event.clientY - (nr.top + nr.height / 2);
    dragState.moved = false;
    dragState.pointerId = event.pointerId;
    node.classList.add('is-dragging');
    node.setPointerCapture?.(event.pointerId);
  }

  function moveDrag(event) {
    const node = dragState.active;
    const parent = dragState.parent;
    if (!node || !parent) return;
    const pr = parent.getBoundingClientRect();
    const nr = node.getBoundingClientRect();
    const dx = event.clientX - dragState.startX;
    const dy = event.clientY - dragState.startY;
    if (Math.hypot(dx,dy) > 4) dragState.moved = true;
    const pad = 14;
    const halfW = nr.width / 2;
    const halfH = nr.height / 2;
    const x = Math.max(halfW + pad, Math.min(pr.width - halfW - pad, event.clientX - pr.left - dragState.offsetX));
    const y = Math.max(halfH + pad, Math.min(pr.height - halfH - pad, event.clientY - pr.top - dragState.offsetY));
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.removeProperty('--x');
    node.style.removeProperty('--y');
    drawBoardLinks(parent);
  }

  function endDrag(event) {
    const node = dragState.active;
    if (!node) return;
    node.classList.remove('is-dragging');
    try { node.releasePointerCapture?.(dragState.pointerId); } catch (_) {}
    const shouldOpen = !dragState.moved && node.classList.contains('explainer-trigger');
    const kind = node.dataset.kind;
    dragState.active = null;
    dragState.parent = null;
    if (shouldOpen && kind) openExplainer(kind);
  }

  deck.querySelectorAll('.draggable').forEach(node => node.addEventListener('pointerdown', e => startDrag(node,e)));
  window.addEventListener('pointermove', moveDrag, { passive:true });
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // Interactive AI board links / focus / reset.
  const boards = [...deck.querySelectorAll('[data-concept-board]')];
  const initialPositions = new WeakMap();
  boards.forEach(board => {
    const nodes = [...board.querySelectorAll('.concept-node')];
    nodes.forEach(node => initialPositions.set(node, {x:node.style.getPropertyValue('--x'), y:node.style.getPropertyValue('--y')}));
    board.querySelector('[data-board-reset]')?.addEventListener('click', e => {
      e.stopPropagation();
      nodes.forEach(node => {
        const p = initialPositions.get(node);
        node.style.left = '';
        node.style.top = '';
        node.style.setProperty('--x',p.x);
        node.style.setProperty('--y',p.y);
        node.classList.remove('is-dimmed');
      });
      board.dataset.focus = '';
      requestAnimationFrame(() => drawBoardLinks(board));
    });
    board.querySelector('[data-board-focus]')?.addEventListener('click', e => {
      e.stopPropagation();
      const core = nodes.find(n => n.dataset.key === 'ai');
      const isOn = board.dataset.focus === 'on';
      board.dataset.focus = isOn ? '' : 'on';
      nodes.forEach(n => n.classList.toggle('is-dimmed', !isOn && n !== core));
      drawBoardLinks(board);
    });
    drawBoardLinks(board);
  });

  function centerIn(parent,node) {
    const pr = parent.getBoundingClientRect();
    const nr = node.getBoundingClientRect();
    return {x:nr.left-pr.left+nr.width/2,y:nr.top-pr.top+nr.height/2};
  }

  function drawBoardLinks(board) {
    if (!board?.matches?.('[data-concept-board]')) return;
    const svg = board.querySelector('.live-links');
    const nodes = [...board.querySelectorAll('.concept-node')];
    const core = nodes.find(n => n.dataset.key === 'ai');
    if (!svg || !core) return;
    svg.innerHTML = '';
    const a = centerIn(board,core);
    nodes.filter(n => n !== core).forEach(node => {
      const b = centerIn(board,node);
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',a.x);line.setAttribute('y1',a.y);line.setAttribute('x2',b.x);line.setAttribute('y2',b.y);
      if (node.dataset.key === 'chatgpt') line.classList.add('orange');
      if (board.dataset.focus === 'on') line.classList.add('focused');
      svg.appendChild(line);
    });
  }

  function drawAllBoardLinks(scope=document) {
    scope.querySelectorAll?.('[data-concept-board]').forEach(drawBoardLinks);
  }

  window.addEventListener('resize', () => drawAllBoardLinks(document));

  const explainers = {
    classification:{title:'Classification',sub:'التصنيف',copy:'إسناد المدخل إلى فئة أو أكثر وفق أنماط يتعلمها النظام.',visual:'groups'},
    prediction:{title:'Prediction',sub:'التنبؤ',copy:'تقدير قيمة أو نتيجة محتملة اعتمادًا على البيانات والأنماط.',visual:'loop'},
    detection:{title:'Detection',sub:'الكشف',copy:'العثور على كيان أو نمط أو حالة داخل البيانات.',visual:'groups'},
    recommendation:{title:'Recommendation',sub:'التوصية',copy:'ترتيب أو اقتراح خيارات وفق معايير أو أنماط ذات صلة.',visual:'groups'},
    generation:{title:'Generation',sub:'التوليد',copy:'إنشاء مخرج جديد مثل نص أو صورة أو كود اعتمادًا على السياق.',visual:'loop'},
    assistant:{title:'Assistant',sub:'المساعد',copy:'دور يساعد الإنسان في تنفيذ المهمة؛ وليس تعريفًا للذكاء الاصطناعي كله.',visual:'human'},
    agent:{title:'Agent',sub:'الوكيل',copy:'نظام يعمل نحو هدف عبر خطوات وأدوات مع ضوابط محددة.',visual:'loop'},
    chatgpt:{title:'ChatGPT',sub:'تطبيق',copy:'تطبيق يستخدم نماذج وقدرات ذكاء اصطناعي؛ لكنه لا يساوي مجال AI كله.',visual:'architecture'},
    training:{title:'Training',sub:'التدريب',copy:'يتعلم النموذج من البيانات عبر تعديل أوزانه أثناء التدريب.',visual:'weight'},
    finetuning:{title:'Fine-tuning',sub:'تدريب إضافي',copy:'تدريب إضافي لنموذج موجود بهدف تكييفه مع نمط أو مهمة معينة.',visual:'weight'},
    prompting:{title:'Prompting',sub:'التوجيه',copy:'تعليمات تُعطى للنموذج وقت الاستخدام ولا تعني تغيير أوزانه.',visual:'human'},
    context:{title:'Context',sub:'السياق',copy:'المعلومات المتاحة للنموذج أثناء تنفيذ المهمة الحالية.',visual:'architecture'},
    rag:{title:'RAG',sub:'الاسترجاع المعزز',copy:'استرجاع معلومات من مصدر خارجي ثم إضافة الأجزاء ذات الصلة إلى السياق.',visual:'rag'},
    tools:{title:'Tool Use',sub:'استخدام الأدوات',copy:'استدعاء قدرة خارجية مثل البحث أو قاعدة بيانات أو آلة حاسبة أثناء التنفيذ.',visual:'architecture'}
  };

  function visualMarkup(type) {
    if (type === 'groups') return '<div class="mini-groups"><span>A</span><span>B</span><span>C</span><span>D</span></div>';
    if (type === 'loop') return '<div class="mini-loop"><span>Input</span><i></i><span>Process</span><i></i><span>Output</span></div>';
    if (type === 'human') return '<div class="mini-human"><span>Human</span><i>↔</i><span>AI</span></div>';
    if (type === 'architecture') return '<div class="mini-architecture"><span>Model</span><span>Context</span><span>Tools</span><span>Interface</span><span>Data</span><span>Rules</span></div>';
    if (type === 'weight') return '<div class="mini-weight">Weights</div>';
    if (type === 'rag') return '<div class="mini-rag"><span>Knowledge</span><i></i><span>Retrieve</span><i></i><span>Context</span></div>';
    return '';
  }

  function openExplainer(kind) {
    const data = explainers[kind];
    if (!data || !explainer || !explainerStage) return;
    explainerStage.innerHTML = `<div class="mini-scene"><div class="mini-copy"><h3>${data.title}</h3><p><strong>${data.sub}</strong><br>${data.copy}</p></div><div class="mini-visual">${visualMarkup(data.visual)}</div></div>`;
    explainer.classList.add('is-open');
    explainer.setAttribute('aria-hidden','false');
  }

  function closeExplainer() {
    if (!explainer) return;
    explainer.classList.remove('is-open');
    explainer.setAttribute('aria-hidden','true');
  }

  deck.querySelectorAll('.explainer-trigger:not(.draggable)').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); openExplainer(btn.dataset.kind); }));
  explainerClose?.addEventListener('click', closeExplainer);

  // Workshop interaction.
  const caseCards = [...deck.querySelectorAll('.case-card')];
  const message = deck.querySelector('.workshop-message');
  function revealCard(card) {
    card.classList.add('is-revealed');
    const answer = card.dataset.answer || '';
    const em = card.querySelector('em');
    if (em) em.textContent = answer;
  }
  caseCards.forEach(card => card.addEventListener('click', () => {
    revealCard(card);
    if (caseCards.every(c => c.classList.contains('is-revealed'))) message?.classList.add('is-visible');
  }));
  deck.querySelector('[data-reveal-all]')?.addEventListener('click', () => {
    caseCards.forEach(revealCard);
    message?.classList.add('is-visible');
  });

  syncCounter();
  restartEntry(scenes[index]);
  requestAnimationFrame(() => drawAllBoardLinks(document));
  deck.focus({ preventScroll:true });
})();

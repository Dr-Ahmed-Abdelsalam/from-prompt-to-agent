(() => {
  const deck = document.getElementById('deck');
  if (!deck) return;

  const scenes = [...deck.querySelectorAll('.scene')];
  const currentEl = document.getElementById('currentScene');
  const totalEl = document.getElementById('totalScenes');
  const nextBtn = deck.querySelector('[data-next]');
  const prevBtn = deck.querySelector('[data-prev]');
  const explainer = document.getElementById('explainer');
  const explainerBack = deck.querySelector('[data-explainer-back]');
  let sceneIndex = Math.max(0, scenes.findIndex(s => s.classList.contains('is-active')));
  let transitionTimer = null;

  if (totalEl) totalEl.textContent = String(scenes.length).padStart(2, '0');

  const pad = n => String(n).padStart(2, '0');
  const isExplainerOpen = () => explainer?.classList.contains('is-open');

  function updateCounter(){ if(currentEl) currentEl.textContent = pad(sceneIndex + 1); }

  function restartScene(scene){
    scene.querySelectorAll('.enter').forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
    requestAnimationFrame(drawAllBoards);
  }

  function showScene(index){
    if(index < 0 || index >= scenes.length || index === sceneIndex) return;
    if(isExplainerOpen()) closeExplainer();
    if(transitionTimer) clearTimeout(transitionTimer);
    const current = scenes[sceneIndex];
    const target = scenes[index];
    current.classList.add('is-leaving');
    transitionTimer = setTimeout(() => {
      current.classList.remove('is-active','is-leaving');
      target.classList.add('is-active');
      sceneIndex = index;
      updateCounter();
      restartScene(target);
      deck.focus({preventScroll:true});
    }, 300);
  }

  function next(){ if(sceneIndex < scenes.length - 1) showScene(sceneIndex + 1); }
  function prev(){ if(sceneIndex > 0) showScene(sceneIndex - 1); }

  async function fullscreen(){
    try{
      if(!document.fullscreenElement) await deck.requestFullscreen?.();
      else await document.exitFullscreen?.();
    }catch(_){ }
  }

  deck.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => showScene(Number(btn.dataset.jump))));
  nextBtn?.addEventListener('click', next);
  prevBtn?.addEventListener('click', prev);

  deck.addEventListener('keydown', e => {
    if(e.target instanceof HTMLElement && ['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
    if(isExplainerOpen()){
      if(e.key === 'Escape' || e.key === 'ArrowLeft'){ e.preventDefault(); closeExplainer(); }
      return;
    }
    if(['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)){ e.preventDefault(); next(); return; }
    if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); prev(); return; }
    if(e.key.toLowerCase() === 'f'){ e.preventDefault(); fullscreen(); return; }
    if(e.key.toLowerCase() === 'h'){ e.preventDefault(); showScene(1); }
  });

  /* Draggable concept boards */
  const boardStates = [];

  deck.querySelectorAll('[data-board]').forEach(board => {
    const nodes = [...board.querySelectorAll('.drag-node')];
    const core = nodes.find(n => n.dataset.key === 'ai') || nodes[0];
    const svg = board.querySelector('.live-links');
    const reset = board.querySelector('[data-board-reset]');
    const focus = board.querySelector('[data-board-focus]');
    const initial = new Map();
    let selected = null;
    let focusMode = false;
    let drag = null;

    nodes.forEach(node => initial.set(node,{x:node.style.getPropertyValue('--x'),y:node.style.getPropertyValue('--y')}));

    function center(node){
      const br = board.getBoundingClientRect();
      const nr = node.getBoundingClientRect();
      return {x:nr.left-br.left+nr.width/2,y:nr.top-br.top+nr.height/2};
    }

    function ensureLines(){
      if(!svg || !core) return;
      if(svg.children.length === nodes.length - 1) return;
      svg.innerHTML = '';
      nodes.filter(n => n !== core).forEach(node => {
        const line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.dataset.to = node.dataset.key || '';
        if(node.dataset.key === 'chatgpt') line.classList.add('orange');
        svg.appendChild(line);
      });
    }

    function draw(){
      if(!svg || !core || board.offsetParent === null) return;
      ensureLines();
      const a = center(core);
      svg.querySelectorAll('line').forEach(line => {
        const node = nodes.find(n => n.dataset.key === line.dataset.to);
        if(!node) return;
        const b = center(node);
        line.setAttribute('x1',a.x); line.setAttribute('y1',a.y); line.setAttribute('x2',b.x); line.setAttribute('y2',b.y);
        line.classList.toggle('focus', Boolean(selected && (node === selected || core === selected)));
      });
    }

    function select(node){
      selected = node;
      nodes.forEach(n => n.classList.toggle('dim',focusMode && selected && n !== selected && n !== core && selected !== core));
      draw();
    }

    function position(event){
      if(!drag) return;
      const rect = board.getBoundingClientRect();
      const nr = drag.node.getBoundingClientRect();
      const hw = nr.width/2, hh = nr.height/2, p = 14;
      const x = Math.min(rect.width-hw-p,Math.max(hw+p,event.clientX-rect.left-drag.dx));
      const y = Math.min(rect.height-hh-p,Math.max(hh+p,event.clientY-rect.top-drag.dy));
      drag.node.style.left = x+'px'; drag.node.style.top = y+'px';
      drag.node.style.removeProperty('--x'); drag.node.style.removeProperty('--y');
      draw();
    }

    nodes.forEach(node => {
      node.addEventListener('pointerdown', e => {
        if(e.button !== 0) return;
        e.preventDefault();
        const r = node.getBoundingClientRect();
        drag = {node,startX:e.clientX,startY:e.clientY,dx:e.clientX-(r.left+r.width/2),dy:e.clientY-(r.top+r.height/2),moved:false,pointerId:e.pointerId};
        node.classList.add('is-dragging');
        node.setPointerCapture?.(e.pointerId);
      });
      node.addEventListener('click', e => {
        if(node._suppressClick){ e.preventDefault(); e.stopPropagation(); node._suppressClick=false; return; }
      },true);
    });

    window.addEventListener('pointermove', e => {
      if(!drag) return;
      if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5) drag.moved=true;
      position(e);
    });
    window.addEventListener('pointerup', e => {
      if(!drag) return;
      const node = drag.node;
      node.classList.remove('is-dragging');
      try{ node.releasePointerCapture?.(drag.pointerId); }catch(_){ }
      if(drag.moved){ node._suppressClick=true; select(node); }
      drag=null; draw();
    });

    reset?.addEventListener('click', e => {
      e.stopPropagation();
      nodes.forEach(n => {
        const p = initial.get(n); n.style.left=''; n.style.top=''; n.style.setProperty('--x',p.x); n.style.setProperty('--y',p.y); n.classList.remove('dim');
      });
      selected=null; focusMode=false; focus?.classList.remove('is-active'); requestAnimationFrame(draw);
    });
    focus?.addEventListener('click', e => {
      e.stopPropagation(); focusMode=!focusMode; focus.classList.toggle('is-active',focusMode); select(selected || core);
    });
    board.addEventListener('pointerdown',e => { if(e.target===board || e.target===svg){ selected=null; nodes.forEach(n=>n.classList.remove('dim')); draw(); } });
    boardStates.push({board,draw});
  });

  function drawAllBoards(){ boardStates.forEach(s=>s.draw()); }
  window.addEventListener('resize',drawAllBoards);

  /* Mini explainer scenes */
  const explainers = {
    classification:{en:'CLASSIFICATION',title:'التصنيف',copy:'إسناد المدخل إلى فئة أو أكثر وفق الأنماط التي يستخدمها النظام.',anim:'categories'},
    prediction:{en:'PREDICTION',title:'التنبؤ',copy:'تقدير قيمة أو نتيجة محتملة اعتمادًا على البيانات والأنماط.',anim:'bars'},
    detection:{en:'DETECTION',title:'الكشف',copy:'العثور على كيان أو نمط أو حالة محددة داخل البيانات.',anim:'target'},
    recommendation:{en:'RECOMMENDATION',title:'التوصية',copy:'ترتيب أو اقتراح خيارات وفق معايير أو أنماط ذات صلة.',anim:'bars'},
    generation:{en:'GENERATION',title:'التوليد',copy:'إنشاء مخرج جديد مثل نص أو صورة أو صوت أو كود انطلاقًا من المدخلات والسياق.',anim:'flow',labels:['Prompt','Model','New Output']},
    assistant:{en:'ASSISTANT',title:'المساعد',copy:'دور أو تطبيق يساعد الإنسان في تنفيذ مهمة؛ وليس تعريفًا للذكاء الاصطناعي كله.',anim:'humanai'},
    agent:{en:'AGENT',title:'الوكيل',copy:'نظام يعمل نحو هدف، وقد يستخدم أدوات وينفذ عدة خطوات ضمن ضوابط محددة.',anim:'agent'},
    chatgpt:{en:'CHATGPT',title:'تطبيق للذكاء الاصطناعي',copy:'واجهة وتطبيق يستخدم نموذجًا وتعليمات وسياقًا وقدرات أخرى؛ لكنه لا يساوي مجال AI كله.',anim:'chat'},
    training:{en:'TRAINING',title:'التدريب',copy:'عملية تعلم أساسية تتغير خلالها أوزان/معلمات النموذج استنادًا إلى البيانات وإشارة التعلم.',anim:'flow',labels:['Data','Learn','Weights Change']},
    finetuning:{en:'FINE-TUNING',title:'التدريب الإضافي',copy:'تدريب إضافي يكيّف نموذجًا قائمًا لمجال أو سلوك أو مهمة؛ ويؤثر في الأوزان.',anim:'flow',labels:['Base Model','Additional Training','Adapted Model']},
    prompting:{en:'PROMPTING',title:'التوجيه وقت الاستخدام',copy:'تعليمات نرسلها أثناء المهمة لتحديد المطلوب والقيود وشكل المخرج؛ ولا تعني تدريبًا جديدًا.',anim:'flow',labels:['Instruction','Model','Response']},
    context:{en:'CONTEXT',title:'السياق',copy:'المعلومات المتاحة للنموذج أثناء تنفيذ المهمة الحالية: تعليمات، محادثة، مستندات، نتائج أدوات وغيرها.',anim:'flow',labels:['Prompt','Context','Model']},
    rag:{en:'RAG',title:'الاسترجاع المعزز للتوليد',copy:'استرجاع معلومات خارجية ذات صلة ثم إضافتها إلى السياق قبل التوليد.',anim:'flow',labels:['Knowledge','Retrieve','Context']},
    memory:{en:'MEMORY',title:'الذاكرة',copy:'حالة أو معلومات يحفظها التطبيق وفق تصميمه لاستخدام لاحق؛ وهي مختلفة عن التدريب والسياق اللحظي.',anim:'flow',labels:['Store','Recall','Use']},
    tool:{en:'TOOL USE',title:'استخدام الأدوات',copy:'استدعاء قدرة خارجية مثل البحث أو قاعدة بيانات أو آلة حاسبة أو ملف أو خدمة.',anim:'flow',labels:['Model','Tool','Result']}
  };

  function animationMarkup(item){
    if(item.anim==='categories') return '<div class="mini-categories"><span>فئة A</span><span>فئة B</span><span>فئة C</span></div>';
    if(item.anim==='bars') return '<div class="mini-bars"><span style="--w:88%"></span><span style="--w:64%"></span><span style="--w:37%"></span></div>';
    if(item.anim==='target') return '<div class="mini-target"></div>';
    if(item.anim==='humanai') return '<div class="mini-human-ai"><span>Human</span><i></i><span>AI</span></div>';
    if(item.anim==='agent') return '<div class="mini-agent"><span>Goal</span><i></i><span>Plan</span><i></i><span>Tool</span><i></i><span>Action</span><i></i><span>Result</span></div>';
    if(item.anim==='chat') return '<div class="mini-chat"><div><span>Model</span><span>Instructions</span><span>Context</span></div><strong>ChatGPT</strong><div><span>Interface</span><span>Tools</span><span>Output</span></div></div>';
    const labels = item.labels || ['Input','Process','Output'];
    return `<div class="mini-flow"><span>${labels[0]}</span><i></i><span>${labels[1]}</span><i></i><span>${labels[2]}</span></div>`;
  }

  function openExplainer(kind){
    const item = explainers[kind]; if(!item || !explainer) return;
    explainer.querySelector('.explainer-en').textContent=item.en;
    explainer.querySelector('h3').textContent=item.title;
    explainer.querySelector('.explainer-copy').textContent=item.copy;
    explainer.querySelector('.explainer-animation').innerHTML=animationMarkup(item);
    explainer.classList.add('is-open'); explainer.setAttribute('aria-hidden','false');
  }
  function closeExplainer(){ if(!explainer) return; explainer.classList.remove('is-open'); explainer.setAttribute('aria-hidden','true'); }

  deck.querySelectorAll('.explainer-trigger').forEach(el => el.addEventListener('click', e => {
    if(el._suppressClick){ el._suppressClick=false; return; }
    e.stopPropagation(); openExplainer(el.dataset.kind);
  }));
  explainerBack?.addEventListener('click', closeExplainer);

  /* Workshop */
  const answerLabels = {context:'Context',finetuning:'Fine-tuning',prompting:'Prompting',rag:'RAG',tool:'Tool Use'};
  const workshop = deck.querySelector('[data-workshop]');
  if(workshop){
    const scenarios=[...workshop.querySelectorAll('.scenario')];
    const zones=[...workshop.querySelectorAll('[data-zone]')];
    const reveal=workshop.querySelector('[data-workshop-reveal]');
    const final=deck.querySelector('.workshop-final');
    function solve(s){
      s.classList.add('is-solved'); s.dataset.label=answerLabels[s.dataset.answer];
      zones.forEach(z=>z.classList.toggle('active',z.dataset.zone===s.dataset.answer || z.classList.contains('active')));
    }
    scenarios.forEach(s=>s.addEventListener('click',()=>solve(s)));
    reveal?.addEventListener('click',()=>{ scenarios.forEach(solve); final?.classList.add('show'); });
  }

  updateCounter();
  restartScene(scenes[sceneIndex]);
  deck.focus({preventScroll:true});
})();

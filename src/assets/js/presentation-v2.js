(() => {
  const deck = document.getElementById('deck');
  if (!deck) return;
  const scenes = [...deck.querySelectorAll('.scene')];
  const currentEl = document.getElementById('currentScene');
  const totalEl = document.getElementById('totalScenes');
  const prev = deck.querySelector('[data-prev]');
  const next = deck.querySelector('[data-next]');
  let index = Math.max(0, scenes.findIndex(s => s.classList.contains('is-active')));

  function show(i){
    if(i < 0 || i >= scenes.length || i === index) return;
    scenes[index].classList.remove('is-active');
    index = i;
    scenes[index].classList.add('is-active');
    currentEl.textContent = String(index + 1).padStart(2,'0');
    requestAnimationFrame(drawAllBoards);
  }
  totalEl.textContent = String(scenes.length).padStart(2,'0');
  currentEl.textContent = String(index + 1).padStart(2,'0');
  prev?.addEventListener('click',()=>show(index-1));
  next?.addEventListener('click',()=>show(index+1));
  deck.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.jump))));
  deck.addEventListener('keydown',e=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
    if(['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)){e.preventDefault();show(index+1)}
    if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();show(index-1)}
    if(e.key.toLowerCase()==='f') deck.requestFullscreen?.();
  });

  const explainer = document.getElementById('explainer');
  const explainerTitle = document.getElementById('explainerTitle');
  const explainerText = document.getElementById('explainerText');
  const explainerVisual = document.getElementById('explainerVisual');
  const explainerBack = document.getElementById('explainerBack');
  const explainers = {
    classification:['Classification','التصنيف يضع المدخلات في فئات وفق الأنماط التي يتعرف عليها النظام.',['Input','Class A','Class B']],
    prediction:['Prediction','التنبؤ يقدّر نتيجة أو قيمة محتملة اعتمادًا على البيانات والأنماط.',['Data','Estimate','Outcome']],
    detection:['Detection','الكشف يبحث عن نمط أو كيان أو حالة محددة داخل البيانات.',['Data','Detect','Signal']],
    generation:['Generation','التوليد ينشئ مخرجًا جديدًا مثل النص أو الصورة أو الكود.',['Prompt','Model','New Output']],
    assistant:['Assistant','المساعد دور تطبيقي يساعد الإنسان في تنفيذ مهمة؛ وليس تعريفًا للذكاء الاصطناعي كله.',['Human','Assistant','Response']],
    agent:['Agent','الوكيل يعمل نحو هدف عبر خطوات وقد يستخدم أدوات خارجية ضمن ضوابط محددة.',['Goal','Tool','Action']],
    chatgpt:['ChatGPT','ChatGPT تطبيق يستخدم نماذج وقدرات ذكاء اصطناعي؛ لكنه ليس مجال الذكاء الاصطناعي كله.',['AI','Application','ChatGPT']],
    training:['Training','التدريب يغيّر أوزان النموذج من خلال التعلم من البيانات.',['Data','Learn','Weights']],
    finetuning:['Fine-tuning','تدريب إضافي لنموذج موجود لتكييفه مع مهمة أو نطاق محدد.',['Model','Extra Training','Adjusted Model']],
    prompting:['Prompting','تعليمات تقدّم للنموذج وقت الاستخدام لتحديد المطلوب وشكل المخرج.',['Instruction','Model','Response']],
    context:['Context','المعلومات المتاحة للنموذج أثناء تنفيذ المهمة الحالية.',['Prompt','Documents','Context']],
    rag:['RAG','يسترجع النظام معلومات خارجية ذات صلة ثم يضيفها إلى السياق قبل التوليد.',['Retrieve','Context','Generate']],
    tools:['Tool Use','يستخدم النظام قدرة خارجية مثل البحث أو قاعدة بيانات أو آلة حاسبة.',['Model','Tool','Result']]
  };
  function openExplainer(key){
    const data = explainers[key]; if(!data) return;
    explainerTitle.textContent=data[0];
    explainerText.textContent=data[1];
    explainerVisual.innerHTML=`<div class="mini-flow"><span>${data[2][0]}</span><i></i><span>${data[2][1]}</span><i></i><span>${data[2][2]}</span></div>`;
    explainer.classList.add('open'); explainer.setAttribute('aria-hidden','false');
  }
  function closeExplainer(){explainer.classList.remove('open');explainer.setAttribute('aria-hidden','true')}
  explainerBack?.addEventListener('click',closeExplainer);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&explainer.classList.contains('open')) closeExplainer()});
  deck.querySelectorAll('.explain-pill').forEach(b=>b.addEventListener('click',()=>openExplainer(b.dataset.key)));

  const boards=[...deck.querySelectorAll('[data-board]')];
  function center(node,board){const br=board.getBoundingClientRect(),nr=node.getBoundingClientRect();return{x:nr.left-br.left+nr.width/2,y:nr.top-br.top+nr.height/2}}
  function drawBoard(board){
    if(!board.closest('.scene')?.classList.contains('is-active')) return;
    const svg=board.querySelector('.links'),nodes=[...board.querySelectorAll('.node')],core=board.querySelector('[data-key="ai"]');
    if(!svg||!core) return;
    if(svg.children.length!==nodes.length-1){svg.innerHTML='';nodes.filter(n=>n!==core).forEach(n=>{const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.dataset.to=n.dataset.key;if(n.dataset.key==='chatgpt')l.classList.add('orange-line');svg.appendChild(l)})}
    const s=center(core,board);[...svg.children].forEach(l=>{const n=board.querySelector(`[data-key="${l.dataset.to}"]`);if(!n)return;const e=center(n,board);l.setAttribute('x1',s.x);l.setAttribute('y1',s.y);l.setAttribute('x2',e.x);l.setAttribute('y2',e.y)})
  }
  function drawAllBoards(){boards.forEach(drawBoard)}

  boards.forEach(board=>{
    const nodes=[...board.querySelectorAll('.drag-node')];
    const initial=new Map(nodes.map(n=>[n,{x:n.style.getPropertyValue('--x'),y:n.style.getPropertyValue('--y')}]))
    let drag=null,selected=null,focused=false;
    nodes.forEach(node=>{
      node.addEventListener('pointerdown',e=>{
        if(e.button!==0)return;e.preventDefault();
        const r=node.getBoundingClientRect();drag={node,id:e.pointerId,startX:e.clientX,startY:e.clientY,dx:e.clientX-(r.left+r.width/2),dy:e.clientY-(r.top+r.height/2),moved:false};
        node.classList.add('dragging');node.setPointerCapture?.(e.pointerId);
      });
    });
    window.addEventListener('pointermove',e=>{
      if(!drag)return;
      const boardRect=board.getBoundingClientRect(),nodeRect=drag.node.getBoundingClientRect();
      if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5)drag.moved=true;
      const hw=nodeRect.width/2,hh=nodeRect.height/2,pad=14;
      const x=Math.max(hw+pad,Math.min(boardRect.width-hw-pad,e.clientX-boardRect.left-drag.dx));
      const y=Math.max(hh+pad,Math.min(boardRect.height-hh-pad,e.clientY-boardRect.top-drag.dy));
      drag.node.style.left=x+'px';drag.node.style.top=y+'px';drag.node.style.removeProperty('--x');drag.node.style.removeProperty('--y');drawBoard(board);
    });
    window.addEventListener('pointerup',e=>{
      if(!drag)return;const node=drag.node;node.classList.remove('dragging');try{node.releasePointerCapture?.(drag.id)}catch(_){ }
      if(!drag.moved && node.classList.contains('explain')) openExplainer(node.dataset.key);
      selected=node;drag=null;
      if(focused)applyFocus();
    });
    const applyFocus=()=>nodes.forEach(n=>n.style.opacity=focused&&selected&&n!==selected&&n.dataset.key!=='ai'?'.16':'1');
    board.querySelector('[data-focus]')?.addEventListener('click',()=>{focused=!focused;applyFocus()});
    board.querySelector('[data-reset]')?.addEventListener('click',()=>{
      nodes.forEach(n=>{const p=initial.get(n);n.style.left='';n.style.top='';n.style.setProperty('--x',p.x);n.style.setProperty('--y',p.y);n.style.opacity='1'});selected=null;focused=false;requestAnimationFrame(()=>drawBoard(board));
    });
    new ResizeObserver(()=>drawBoard(board)).observe(board);
  });

  document.querySelectorAll('#workshop button').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('revealed')));
  window.addEventListener('resize',drawAllBoards);
  requestAnimationFrame(()=>requestAnimationFrame(drawAllBoards));
})();

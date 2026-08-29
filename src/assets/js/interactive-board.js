(() => {
  const boards = [...document.querySelectorAll('[data-knowledge-board]')];
  if (!boards.length) return;

  boards.forEach(board => {
    const nodes = [...board.querySelectorAll('[data-knowledge-node]')];
    const linksLayer = board.querySelector('.board-links');
    const detail = board.querySelector('[data-node-detail]');
    const focusButton = board.querySelector('[data-board-action="focus"]');
    const resetButton = board.querySelector('[data-board-action="reset"]');
    const status = board.querySelector('[data-board-status]');
    const core = nodes.find(node => node.dataset.nodeKey === 'ai');

    const initial = new Map();
    nodes.forEach(node => {
      initial.set(node, {
        x: node.style.getPropertyValue('--x'),
        y: node.style.getPropertyValue('--y')
      });
      node.setAttribute('aria-pressed', 'false');
      node.setAttribute('title', 'اسحب لتحريك العنصر · اضغط لعرض الشرح');
    });

    let selected = null;
    let focusMode = false;
    let dragState = null;

    const descriptions = {
      ai: ['Artificial Intelligence', 'الذكاء الاصطناعي', 'المجال الأوسع الذي يضم تقنيات وقدرات متعددة؛ وليس تطبيقًا واحدًا بعينه.'],
      classification: ['Classification', 'التصنيف', 'إسناد المدخل إلى فئة أو أكثر وفق أنماط يتعلمها النظام.'],
      prediction: ['Prediction', 'التنبؤ', 'تقدير قيمة أو نتيجة محتملة اعتمادًا على البيانات والأنماط.'],
      detection: ['Detection', 'الكشف', 'العثور على كيان أو نمط أو حالة داخل البيانات.'],
      recommendation: ['Recommendation', 'التوصية', 'ترتيب أو اقتراح خيارات بناءً على معايير أو أنماط ذات صلة.'],
      generation: ['Generation', 'التوليد', 'إنشاء مخرجات جديدة مثل النصوص أو الصور أو الصوت أو الكود.'],
      assistant: ['Assistant', 'المساعد', 'واجهة أو دور يساعد المستخدم في تنفيذ المهام؛ وليس تعريفًا للذكاء الاصطناعي كله.'],
      agent: ['Agent', 'الوكيل', 'نظام يعمل نحو هدف، وقد يستخدم أدوات وينفذ خطوات متعددة وفق ضوابط محددة.'],
      chatgpt: ['ChatGPT', 'تطبيق', 'تطبيق يستخدم نماذج وقدرات ذكاء اصطناعي. هو مثال مهم، لكنه لا يساوي مجال AI كله.']
    };

    function centerOf(node) {
      const boardRect = board.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      return {
        x: nodeRect.left - boardRect.left + nodeRect.width / 2,
        y: nodeRect.top - boardRect.top + nodeRect.height / 2
      };
    }

    function ensureLinks() {
      if (!linksLayer || !core) return;
      if (linksLayer.children.length === nodes.length - 1) return;
      linksLayer.innerHTML = '';
      nodes.filter(node => node !== core).forEach(node => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.dataset.linkTo = node.dataset.nodeKey;
        if (node.dataset.nodeKey === 'chatgpt') line.classList.add('link--chatgpt');
        linksLayer.appendChild(line);
      });
    }

    function drawLinks() {
      if (!linksLayer || !core) return;
      ensureLinks();
      const start = centerOf(core);
      linksLayer.querySelectorAll('line').forEach(line => {
        const target = nodes.find(node => node.dataset.nodeKey === line.dataset.linkTo);
        if (!target) return;
        const end = centerOf(target);
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', end.x);
        line.setAttribute('y2', end.y);
      });
    }

    function setStatus(text) {
      if (status) status.innerHTML = text;
    }

    function updateDetail() {
      if (!detail) return;
      if (!selected) {
        detail.classList.remove('is-open', 'node-detail--chatgpt');
        return;
      }
      const data = descriptions[selected.dataset.nodeKey];
      if (!data) return;
      detail.querySelector('[data-detail-eyebrow]').textContent = data[0];
      detail.querySelector('[data-detail-title]').textContent = data[1];
      detail.querySelector('[data-detail-copy]').textContent = data[2];
      detail.classList.toggle('node-detail--chatgpt', selected.dataset.nodeKey === 'chatgpt');
      detail.classList.add('is-open');
    }

    function updateFocus() {
      focusButton?.classList.toggle('is-active', focusMode);
      linksLayer?.classList.toggle('is-muted', focusMode && Boolean(selected));
      nodes.forEach(node => {
        if (!focusMode || !selected) {
          node.classList.remove('is-dimmed');
          return;
        }
        const keep = node === selected || node === core || selected === core;
        node.classList.toggle('is-dimmed', !keep);
      });
    }

    function setSelected(node) {
      selected = node;
      nodes.forEach(item => {
        const active = item === node;
        item.classList.toggle('is-selected', active);
        item.setAttribute('aria-pressed', String(active));
      });
      linksLayer?.querySelectorAll('line').forEach(line => {
        const related = node && (node === core || line.dataset.linkTo === node.dataset.nodeKey);
        line.classList.toggle('is-related', Boolean(related));
      });
      updateFocus();
      updateDetail();
    }

    function moveNodeFromPointer(event) {
      if (!dragState) return;
      const { node, pointerId, offsetX, offsetY } = dragState;
      if (event.pointerId !== pointerId) return;

      const rect = board.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const halfW = nodeRect.width / 2;
      const halfH = nodeRect.height / 2;
      const pad = 18;

      let centerX = event.clientX - rect.left - offsetX;
      let centerY = event.clientY - rect.top - offsetY;
      centerX = Math.max(halfW + pad, Math.min(rect.width - halfW - pad, centerX));
      centerY = Math.max(halfH + pad, Math.min(rect.height - halfH - pad, centerY));

      node.style.left = `${centerX}px`;
      node.style.top = `${centerY}px`;
      node.style.removeProperty('--x');
      node.style.removeProperty('--y');

      const distance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
      if (distance > 5) dragState.moved = true;
      drawLinks();
    }

    function finishDrag(event) {
      if (!dragState || event.pointerId !== dragState.pointerId) return;
      const state = dragState;
      dragState = null;
      state.node.classList.remove('is-dragging');
      board.classList.remove('is-dragging-board');
      document.documentElement.classList.remove('presenter-dragging');

      if (state.moved) {
        setSelected(state.node);
        setStatus(`<b>MOVED</b> ${state.node.dataset.nodeKey.toUpperCase()} · اسحب عنصرًا آخر أو اضغط للشرح`);
      } else {
        setSelected(selected === state.node ? null : state.node);
        setStatus('<b>DRAG</b> اسحب أي عقدة · <b>CLICK</b> لشرحها');
      }
      drawLinks();
    }

    nodes.forEach(node => {
      node.addEventListener('pointerdown', event => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();

        const rect = node.getBoundingClientRect();
        dragState = {
          node,
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          offsetX: event.clientX - (rect.left + rect.width / 2),
          offsetY: event.clientY - (rect.top + rect.height / 2),
          moved: false
        };

        node.classList.add('is-dragging');
        board.classList.add('is-dragging-board', 'has-interacted');
        document.documentElement.classList.add('presenter-dragging');
        setStatus(`<b>DRAGGING</b> ${node.dataset.nodeKey.toUpperCase()} · حرّك الماوس ثم اترك`);
      });

      node.addEventListener('pointerenter', () => {
        if (dragState) return;
        board.classList.add('has-hovered');
        setStatus(`<b>READY</b> ${node.dataset.nodeKey.toUpperCase()} · اسحب للتحريك · اضغط للشرح`);
      });

      node.addEventListener('pointerleave', () => {
        if (!dragState) setStatus('<b>DRAG</b> اسحب أي عقدة · <b>CLICK</b> لشرحها');
      });

      node.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setSelected(selected === node ? null : node);
        }
      });
    });

    window.addEventListener('pointermove', event => {
      if (!dragState) return;
      event.preventDefault();
      moveNodeFromPointer(event);
    }, { passive: false });

    window.addEventListener('pointerup', finishDrag);
    window.addEventListener('pointercancel', finishDrag);

    focusButton?.addEventListener('click', event => {
      event.stopPropagation();
      focusMode = !focusMode;
      updateFocus();
      if (focusMode && !selected) setStatus('<b>FOCUS</b> اضغط عقدة أولًا ثم فعّل التركيز');
      else setStatus(focusMode ? '<b>FOCUS ON</b> تم عزل الفكرة المحددة' : '<b>FOCUS OFF</b> كل المفاهيم ظاهرة');
    });

    resetButton?.addEventListener('click', event => {
      event.stopPropagation();
      nodes.forEach(node => {
        const state = initial.get(node);
        node.style.left = '';
        node.style.top = '';
        node.style.setProperty('--x', state.x);
        node.style.setProperty('--y', state.y);
        node.classList.remove('is-selected', 'is-dimmed', 'is-dragging');
        node.setAttribute('aria-pressed', 'false');
      });
      selected = null;
      focusMode = false;
      detail?.classList.remove('is-open', 'node-detail--chatgpt');
      linksLayer?.classList.remove('is-muted');
      focusButton?.classList.remove('is-active');
      board.classList.remove('has-interacted', 'is-dragging-board');
      requestAnimationFrame(drawLinks);
      setStatus('<b>RESET</b> عادت اللوحة إلى وضع البداية');
    });

    board.addEventListener('pointerdown', event => {
      if (event.target.closest('[data-knowledge-node], .board-toolbar')) return;
      setSelected(null);
    });

    const observer = new ResizeObserver(drawLinks);
    observer.observe(board);
    window.addEventListener('resize', drawLinks);
    requestAnimationFrame(() => requestAnimationFrame(drawLinks));
  });
})();
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
        left: node.style.getPropertyValue('--x'),
        top: node.style.getPropertyValue('--y')
      });
    });

    let selected = null;
    let focusMode = false;
    let drag = null;
    let moved = false;

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

    function setSelected(node) {
      selected = node;
      nodes.forEach(item => item.classList.toggle('is-selected', item === node));
      linksLayer?.querySelectorAll('line').forEach(line => {
        const related = node && (node === core || line.dataset.linkTo === node.dataset.nodeKey);
        line.classList.toggle('is-related', Boolean(related));
      });
      updateFocus();
      updateDetail();
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

    function setStatus(text) {
      if (status) status.innerHTML = text;
    }

    function positionFromPointer(event, node) {
      const rect = board.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const halfW = nodeRect.width / 2;
      const halfH = nodeRect.height / 2;
      const padding = 14;
      const x = Math.min(rect.width - halfW - padding, Math.max(halfW + padding, event.clientX - rect.left - drag.offsetX));
      const y = Math.min(rect.height - halfH - padding, Math.max(halfH + padding, event.clientY - rect.top - drag.offsetY));
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.removeProperty('--x');
      node.style.removeProperty('--y');
    }

    nodes.forEach(node => {
      node.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        const nodeRect = node.getBoundingClientRect();
        drag = {
          node,
          startX: event.clientX,
          startY: event.clientY,
          offsetX: event.clientX - (nodeRect.left + nodeRect.width / 2),
          offsetY: event.clientY - (nodeRect.top + nodeRect.height / 2)
        };
        moved = false;
        node.classList.add('is-dragging');
        node.setPointerCapture?.(event.pointerId);
        setStatus('<b>DRAG</b> حرّك العقدة ثم اتركها');
      });

      node.addEventListener('pointermove', event => {
        if (!drag || drag.node !== node) return;
        const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
        if (distance > 4) moved = true;
        positionFromPointer(event, node);
        drawLinks();
      });

      const endDrag = event => {
        if (!drag || drag.node !== node) return;
        node.classList.remove('is-dragging');
        try { node.releasePointerCapture?.(event.pointerId); } catch (_) {}
        if (!moved) setSelected(selected === node ? null : node);
        else setSelected(node);
        drag = null;
        setStatus('<b>DRAG</b> اسحب أي عقدة · <b>CLICK</b> لشرحها');
        drawLinks();
      };

      node.addEventListener('pointerup', endDrag);
      node.addEventListener('pointercancel', endDrag);
      node.addEventListener('mouseenter', () => {
        if (!drag) setStatus(`<b>${node.dataset.nodeKey.toUpperCase()}</b> اسحب أو اضغط للشرح`);
      });
      node.addEventListener('mouseleave', () => {
        if (!drag) setStatus('<b>DRAG</b> اسحب أي عقدة · <b>CLICK</b> لشرحها');
      });
    });

    focusButton?.addEventListener('click', event => {
      event.stopPropagation();
      focusMode = !focusMode;
      updateFocus();
      if (focusMode && !selected) setStatus('<b>FOCUS</b> اختر عقدة أولًا');
      else setStatus(focusMode ? '<b>FOCUS ON</b> بقية المفاهيم خافتة' : '<b>FOCUS OFF</b> كل المفاهيم ظاهرة');
    });

    resetButton?.addEventListener('click', event => {
      event.stopPropagation();
      nodes.forEach(node => {
        const state = initial.get(node);
        node.style.left = '';
        node.style.top = '';
        node.style.setProperty('--x', state.left);
        node.style.setProperty('--y', state.top);
        node.classList.remove('is-selected', 'is-dimmed', 'is-dragging');
      });
      selected = null;
      focusMode = false;
      detail?.classList.remove('is-open', 'node-detail--chatgpt');
      linksLayer?.classList.remove('is-muted');
      focusButton?.classList.remove('is-active');
      requestAnimationFrame(drawLinks);
      setStatus('<b>RESET</b> عادت اللوحة إلى وضع البداية');
    });

    board.addEventListener('pointerdown', event => {
      if (event.target === board || event.target === linksLayer) setSelected(null);
    });

    const observer = new ResizeObserver(() => drawLinks());
    observer.observe(board);
    window.addEventListener('resize', drawLinks);
    requestAnimationFrame(() => requestAnimationFrame(drawLinks));
  });
})();

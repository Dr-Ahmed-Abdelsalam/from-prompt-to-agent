(() => {
  const root = document.getElementById('presentation');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const scenes = [...root.querySelectorAll('.scene')];
  const numberEl = document.getElementById('sceneNumber');
  const nextButton = root.querySelector('[data-action="next"]');
  const prevButton = root.querySelector('[data-action="prev"]');

  let sceneIndex = Math.max(0, scenes.findIndex(scene => scene.classList.contains('is-active')));
  let revealIndex = 0;
  let transitionTimer = null;

  const getReveals = index => [...scenes[index].querySelectorAll('.reveal')];

  function clearTimer() {
    if (transitionTimer) {
      window.clearTimeout(transitionTimer);
      transitionTimer = null;
    }
  }

  function syncSpecialStates() {
    const scene = scenes[sceneIndex];
    const sign = scene.querySelector('.equation__sign');
    if (sign) sign.textContent = revealIndex >= 3 ? '≠' : '=';
  }

  function updateCounter() {
    if (numberEl) numberEl.textContent = String(sceneIndex + 1).padStart(2, '0');
  }

  function resetScene(index) {
    getReveals(index).forEach(el => el.classList.remove('is-revealed'));
    if (index === 2) {
      const sign = scenes[index].querySelector('.equation__sign');
      if (sign) sign.textContent = '=';
    }
  }

  function showScene(index, direction = 1) {
    if (index < 0 || index >= scenes.length || index === sceneIndex) return;
    clearTimer();

    const current = scenes[sceneIndex];
    const target = scenes[index];

    current.classList.add('is-leaving');
    current.dataset.direction = direction > 0 ? 'forward' : 'backward';
    target.dataset.direction = direction > 0 ? 'forward' : 'backward';

    transitionTimer = window.setTimeout(() => {
      current.classList.remove('is-active', 'is-leaving');
      target.classList.add('is-active');
      sceneIndex = index;
      revealIndex = 0;
      resetScene(sceneIndex);
      updateCounter();
      root.focus({ preventScroll: true });
    }, 430);
  }

  function revealNext() {
    const reveals = getReveals(sceneIndex);
    if (revealIndex < reveals.length) {
      reveals[revealIndex].classList.add('is-revealed');
      revealIndex += 1;
      syncSpecialStates();
      return;
    }
    if (sceneIndex < scenes.length - 1) showScene(sceneIndex + 1, 1);
  }

  function stepBack() {
    const reveals = getReveals(sceneIndex);
    if (revealIndex > 0) {
      revealIndex -= 1;
      reveals[revealIndex].classList.remove('is-revealed');
      syncSpecialStates();
      return;
    }
    if (sceneIndex > 0) showScene(sceneIndex - 1, -1);
  }

  function jumpToMap() {
    if (scenes.length > 1) showScene(1, sceneIndex > 1 ? -1 : 1);
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await root.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (_) {
      // Fullscreen may be blocked by the host browser; presentation remains usable.
    }
  }

  function isEditable(target) {
    return target instanceof HTMLElement && (
      target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
    );
  }

  root.addEventListener('keydown', event => {
    if (isEditable(event.target)) return;

    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      revealNext();
      return;
    }
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      stepBack();
      return;
    }
    if (event.key.toLowerCase() === 'm') {
      event.preventDefault();
      jumpToMap();
      return;
    }
    if (event.key.toLowerCase() === 'f') {
      event.preventDefault();
      toggleFullscreen();
    }
  });

  nextButton?.addEventListener('click', revealNext);
  prevButton?.addEventListener('click', stepBack);

  root.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    root.focus({ preventScroll: true });
  });

  updateCounter();
  root.focus({ preventScroll: true });
})();

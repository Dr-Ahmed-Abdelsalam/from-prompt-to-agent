(() => {
  const root = document.getElementById('presentation');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const scenes = [...root.querySelectorAll('.scene')];
  const numberEl = document.getElementById('sceneNumber');
  const nextButton = root.querySelector('[data-action="next"]');
  const prevButton = root.querySelector('[data-action="prev"]');

  let sceneIndex = Math.max(0, scenes.findIndex(scene => scene.classList.contains('is-active')));
  let transitionTimer = null;

  function clearTimer() {
    if (!transitionTimer) return;
    window.clearTimeout(transitionTimer);
    transitionTimer = null;
  }

  function updateCounter() {
    if (numberEl) numberEl.textContent = String(sceneIndex + 1).padStart(2, '0');
  }

  function restartSceneAnimation(scene) {
    scene.querySelectorAll('.anim').forEach(element => {
      element.style.animation = 'none';
      void element.offsetWidth;
      element.style.animation = '';
    });
  }

  function showScene(index, direction = 1) {
    if (index < 0 || index >= scenes.length || index === sceneIndex) return;
    clearTimer();

    const current = scenes[sceneIndex];
    const target = scenes[index];

    current.classList.add('is-leaving');
    target.dataset.direction = direction > 0 ? 'forward' : 'backward';

    transitionTimer = window.setTimeout(() => {
      current.classList.remove('is-active', 'is-leaving');
      target.classList.add('is-active');
      sceneIndex = index;
      updateCounter();
      restartSceneAnimation(target);
      root.focus({ preventScroll: true });
    }, 360);
  }

  function nextScene() {
    if (sceneIndex < scenes.length - 1) showScene(sceneIndex + 1, 1);
  }

  function previousScene() {
    if (sceneIndex > 0) showScene(sceneIndex - 1, -1);
  }

  function jumpToMap() {
    if (scenes.length > 1 && sceneIndex !== 1) showScene(1, sceneIndex > 1 ? -1 : 1);
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await root.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (_) {
      // Presentation remains usable if fullscreen is blocked by the browser.
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
      nextScene();
      return;
    }

    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      previousScene();
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

  nextButton?.addEventListener('click', nextScene);
  prevButton?.addEventListener('click', previousScene);

  root.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    root.focus({ preventScroll: true });
  });

  updateCounter();
  restartSceneAnimation(scenes[sceneIndex]);
  root.focus({ preventScroll: true });
})();

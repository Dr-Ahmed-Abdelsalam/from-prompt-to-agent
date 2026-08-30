(function () {
  'use strict';

  const forbiddenPresenterLines = new Set([
    'دكتوراه في القانون',
    'محامٍ بالنقض والإدارية والدستورية العليا',
    'عضو المكتب الفني بأكاديمية العدالة',
    'مهندس بيانات — Data Engineer / Microsoft Track',
  ]);

  function normalize(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
  }

  function patchOpeningScene() {
    const slide = document.getElementById('slide');
    if (!slide) return;

    const heading = Array.from(slide.querySelectorAll('h1')).find((element) =>
      normalize(element.textContent).includes('من مخاطبة الآلة إلى تفويضها')
    );

    if (heading && heading.dataset.approvedOpening !== 'true') {
      heading.dataset.approvedOpening = 'true';
      heading.innerHTML = '<span style="display:block">من مخاطبة الآلة</span><span style="display:block">إلى <em>تفويضها</em></span>';
    }

    Array.from(slide.querySelectorAll('*')).forEach((element) => {
      const text = normalize(element.textContent);
      if (forbiddenPresenterLines.has(text)) {
        const container = element.closest('.professional-line');
        if (container) container.remove();
        else element.remove();
      }
    });
  }

  function boot() {
    patchOpeningScene();
    const slide = document.getElementById('slide');
    if (!slide) return;

    const observer = new MutationObserver(() => patchOpeningScene());
    observer.observe(slide, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

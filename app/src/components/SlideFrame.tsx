import type { ReactNode } from 'react';
import type { Slide } from '../data/slides';

interface SlideFrameProps {
  slide: Slide;
  children: ReactNode;
  onPrevious: () => void;
  onNext: () => void;
  onHub: () => void;
  onMap: () => void;
  onFullscreen: () => void;
  isFullscreen: boolean;
}

export function SlideFrame({ slide, children, onPrevious, onNext, onHub, onMap, onFullscreen, isFullscreen }: SlideFrameProps) {
  return (
    <main className="slide-frame" aria-labelledby={`${slide.id}-title`}>
      <header className="presenter-bar">
        <div className="brand-lockup">
          <img src={`${import.meta.env.BASE_URL}assets/academy-logo.png`} alt="أكاديمية العدالة" />
          <span>أكاديمية العدالة</span>
        </div>
        <div className="presenter-bar__axis">{slide.axis}</div>
        <div className="presenter-bar__id" aria-label={`المشهد ${slide.id}`}>{slide.id} <span>/ 60</span></div>
      </header>

      <div className="slide-content" key={slide.id}>
        {children}
      </div>

      <div className="progress-rail" aria-hidden="true"><span style={{ width: `${(slide.number / 60) * 100}%` }} /></div>

      <button className="edge-control edge-control--previous" type="button" onClick={onPrevious} aria-label="الشريحة السابقة">‹</button>
      <button className="edge-control edge-control--next" type="button" onClick={onNext} aria-label="الشريحة التالية">›</button>

      <footer className="presenter-footer">
        <span className="presenter-footer__hint">{isFullscreen ? 'F' : 'F'} <small>ملء الشاشة</small></span>
        <nav className="presenter-controls" aria-label="أدوات المحاضر">
          <button type="button" onClick={onPrevious} aria-label="الشريحة السابقة">←</button>
          <button type="button" onClick={onNext} aria-label="الشريحة التالية">→</button>
          <button type="button" onClick={onHub} aria-label="الخريطة الرئيسية">⌘</button>
          <button type="button" onClick={onMap} aria-label="خريطة المحور">⌖</button>
          <button type="button" onClick={onFullscreen} aria-label="ملء الشاشة">⛶</button>
        </nav>
      </footer>
    </main>
  );
}

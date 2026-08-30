interface PresenterControlsProps { onPrevious: () => void; onNext: () => void; onHub: () => void; onMap: () => void; onFullscreen: () => void; }
export function PresenterControls({ onPrevious, onNext, onHub, onMap, onFullscreen }: PresenterControlsProps) {
  return <nav className="presenter-controls" aria-label="أدوات المحاضر">
    <button type="button" onClick={onPrevious} aria-label="الشريحة السابقة">←</button>
    <button type="button" onClick={onNext} aria-label="الشريحة التالية">→</button>
    <button type="button" onClick={onHub} aria-label="خريطة المحاور">⌘</button>
    <button type="button" onClick={onMap} aria-label="خريطة المحور">⌖</button>
    <button type="button" onClick={onFullscreen} aria-label="ملء الشاشة">⛶</button>
  </nav>;
}

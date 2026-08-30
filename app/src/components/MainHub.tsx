import { slides, type Slide } from '../data/slides';

interface MainHubProps { active: Slide; onChoose: (slide: Slide) => void; onClose: () => void; }
const starts = ['S05', 'S15', 'S25', 'S35', 'S45'];
export function MainHub({ active, onChoose, onClose }: MainHubProps) {
  return <section className="main-hub" role="dialog" aria-modal="true" aria-label="خريطة المحاور">
    <button className="hub-close" type="button" onClick={onClose}>إغلاق</button>
    <p className="eyebrow">خريطة المحاضرة</p><h2>من الفهم إلى التفويض المنضبط</h2>
    <div className="hub-route">
      {starts.map((id, index) => {
        const slide = slides.find((item) => item.id === id)!;
        return <button key={id} type="button" className={active.axis === slide.axis ? 'is-active' : ''} onClick={() => onChoose(slide)}><small>0{index + 1}</small><b>{slide.axis}</b><span>{slide.axisTitle}</span></button>;
      })}
      <span className="hub-governance">راقب</span>
    </div>
  </section>;
}

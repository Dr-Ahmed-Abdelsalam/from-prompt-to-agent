import { slides, type Axis, type Slide } from '../data/slides';

interface AxisMapProps {
  current: Slide;
  onChoose: (slide: Slide) => void;
  onClose: () => void;
}

const axisStarts: Array<{ axis: Axis; id: Slide['id']; label: string; english: string; color: 'cyan' | 'orange' }> = [
  { axis: 'المحور الأول', id: 'S05', label: 'كيف تعمل الآلة؟', english: 'UNDERSTAND', color: 'cyan' },
  { axis: 'المحور الثاني', id: 'S15', label: 'هندسة الأوامر', english: 'INSTRUCT', color: 'cyan' },
  { axis: 'المحور الثالث', id: 'S25', label: 'هندسة السياق', english: 'CONTEXTUALIZE', color: 'cyan' },
  { axis: 'المحور الرابع', id: 'S35', label: 'سير العمل بالذكاء الاصطناعي', english: 'ORCHESTRATE', color: 'orange' },
  { axis: 'المحور الخامس', id: 'S45', label: 'هندسة الوكلاء', english: 'DELEGATE', color: 'orange' },
];

export function AxisMap({ current, onChoose, onClose }: AxisMapProps) {
  return (
    <div className="overlay-shell" role="dialog" aria-modal="true" aria-label="خريطة المحاور">
      <section className="axis-map-panel">
        <button className="overlay-close" type="button" onClick={onClose} aria-label="إغلاق الخريطة">×</button>
        <p className="eyebrow">مسار المحاضرة</p>
        <h2>من الفهم إلى <em>التفويض</em></h2>
        <p className="overlay-lede">ست محطات، ومسؤولية واحدة لا تغيب.</p>
        <div className="axis-map-line" aria-hidden="true" />
        <div className="axis-map-grid">
          {axisStarts.map((item, index) => {
            const firstSlide = slides.find((slide) => slide.id === item.id)!;
            return (
              <button key={item.id} className={`axis-stop ${item.color} ${current.axis === item.axis ? 'is-active' : ''}`} type="button" onClick={() => onChoose(firstSlide)}>
                <span className="axis-stop__number">0{index + 1}</span>
                <span className="axis-stop__ring"><span>{index + 1}</span></span>
                <strong>{item.label}</strong>
                <small>{item.english}</small>
              </button>
            );
          })}
          <div className="axis-stop axis-stop--control"><span className="axis-stop__number">06</span><span className="axis-stop__ring"><span>✓</span></span><strong>راقب</strong><small>CONTROL</small></div>
        </div>
      </section>
    </div>
  );
}

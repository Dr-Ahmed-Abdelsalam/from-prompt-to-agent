import { slides, type Axis, type Slide } from '../data/slides';

interface AxisMapProps {
  current: Slide;
  onChoose: (slide: Slide) => void;
  onClose: () => void;
  mode?: 'hub' | 'axis';
}

const axisStarts: Array<{ axis: Axis; id: Slide['id']; label: string; english: string; color: 'cyan' | 'orange' }> = [
  { axis: 'المحور الأول', id: 'S05', label: 'كيف تعمل الآلة؟', english: 'UNDERSTAND', color: 'cyan' },
  { axis: 'المحور الثاني', id: 'S15', label: 'هندسة الأوامر', english: 'INSTRUCT', color: 'cyan' },
  { axis: 'المحور الثالث', id: 'S25', label: 'هندسة السياق', english: 'CONTEXTUALIZE', color: 'cyan' },
  { axis: 'المحور الرابع', id: 'S35', label: 'سير العمل بالذكاء الاصطناعي', english: 'ORCHESTRATE', color: 'orange' },
  { axis: 'المحور الخامس', id: 'S45', label: 'هندسة الوكلاء', english: 'DELEGATE', color: 'orange' },
];

export function AxisMap({ current, onChoose, onClose, mode = 'hub' }: AxisMapProps) {
  const currentAxisSlides = slides.filter((slide) => slide.axis === current.axis);
  const axisOnly = mode === 'axis' && currentAxisSlides.length > 0;
  return (
    <div className="overlay-shell" role="dialog" aria-modal="true" aria-label="خريطة المحاور">
      <section className="axis-map-panel">
        <button className="overlay-close" type="button" onClick={onClose} aria-label="إغلاق الخريطة">×</button>
        <p className="eyebrow">{axisOnly ? current.axis : 'مسار المحاضرة'}</p>
        <h2>{axisOnly ? <>مشاهد <em>{current.axis}</em></> : <>من الفهم إلى <em>التفويض</em></>}</h2>
        <p className="overlay-lede">{axisOnly ? 'تسلسل المحور مع بقاء الحالة محفوظة.' : 'ست محطات، ومسؤولية واحدة لا تغيب.'}</p>
        <div className={`axis-map-grid ${axisOnly ? 'axis-map-grid--slides' : ''}`}>
          {axisOnly ? currentAxisSlides.map((slide) => <button key={slide.id} className={`axis-stop axis-stop--slide ${slide.id === current.id ? 'is-active' : ''}`} type="button" onClick={() => onChoose(slide)}><span className="axis-stop__number">{slide.id}</span><span className="axis-stop__ring"><span>{slide.number}</span></span><strong>{slide.title}</strong><small>{slide.term?.english ?? slide.axisTitle}</small></button>) : <>
            {axisStarts.map((item, index) => {
              const firstSlide = slides.find((slide) => slide.id === item.id)!;
              return <button key={item.id} className={`axis-stop ${item.color} ${current.axis === item.axis ? 'is-active' : ''}`} type="button" onClick={() => onChoose(firstSlide)}><span className="axis-stop__number">0{index + 1}</span><span className="axis-stop__ring"><span>{index + 1}</span></span><strong>{item.label}</strong><small>{item.english}</small></button>;
            })}
            <div className="axis-stop axis-stop--control"><span className="axis-stop__number">06</span><span className="axis-stop__ring"><span>✓</span></span><strong>راقب</strong><small>CONTROL</small></div>
          </>}
        </div>
      </section>
    </div>
  );
}

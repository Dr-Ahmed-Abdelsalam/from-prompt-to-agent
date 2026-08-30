import { useEffect, useMemo, useState } from 'react';
import { AxisMap } from './components/AxisMap';
import { BilingualTerm } from './components/BilingualTerm';
import { ExplainerOverlay } from './components/ExplainerOverlay';
import { InteractiveBoard } from './components/InteractiveBoard';
import { MotionLayer } from './components/MotionLayer';
import { SlideFrame } from './components/SlideFrame';
import { slides, type Slide } from './data/slides';
import { usePresentation } from './state/usePresentation';
import './styles/app.scss';

type SessionValue = { items?: string[]; range?: number; mode?: string; focus?: string; cycles?: number };

const axisStarts = ['S05', 'S15', 'S25', 'S35', 'S45'] as const;

function titleWithAccent(title: string) {
  if (title.includes('تفويضها')) {
    const [before, after] = title.split('تفويضها');
    return <>{before}<em>تفويضها</em>{after}</>;
  }
  if (title.includes('التوليد')) {
    const [before, after] = title.split('التوليد');
    return <>{before}<em>التوليد</em>{after}</>;
  }
  if (title.includes('الوكلاء')) {
    const [before, after] = title.split('الوكلاء');
    return <>{before}<em>الوكلاء</em>{after}</>;
  }
  return title;
}

function JourneyTrack({ compact = false }: { compact?: boolean }) {
  const steps = [
    ['افهم', 'UNDERSTAND'], ['وجّه', 'INSTRUCT'], ['زوّد', 'CONTEXTUALIZE'],
    ['نظّم', 'ORCHESTRATE'], ['فوّض', 'DELEGATE'], ['راقب', 'CONTROL'],
  ];
  return <div className={`journey-track ${compact ? 'journey-track--compact' : ''}`}>
    {steps.map(([ar, en], index) => <div className="journey-step" key={ar}>
      <span className="journey-step__ring"><span>{index + 1}</span></span>
      <strong>{ar}</strong><small>{en}</small>
      {index < steps.length - 1 && <i aria-hidden="true">→</i>}
    </div>)}
  </div>;
}

function CoverScene({ slide, onNext }: { slide: Slide; onNext: () => void }) {
  const isOpening = slide.id === 'S01';
  return <div className={`cover-scene ${isOpening ? 'cover-scene--opening' : 'cover-scene--axis'}`}>
    {isOpening && <img className="cover-logo" src={`${import.meta.env.BASE_URL}assets/academy-logo.png`} alt="أكاديمية العدالة" />}
    <div className="cover-copy">
      {isOpening ? <>
        <p className="cover-kicker">عرض ويب تفاعلي · 2026</p>
        <h1 id={`${slide.id}-title`} className="opening-title">
          <span>من مخاطبة الآلة</span>
          <span>إلى <em>تفويضها</em></span>
        </h1>
        <p className="cover-subtitle">من هندسة الأوامر إلى هندسة الوكلاء</p>
      </> : <>
        <p className="eyebrow">{slide.axis}</p>
        <h1 id={`${slide.id}-title`}>{titleWithAccent(slide.title)}</h1>
        <p className="cover-subtitle">{slide.premise}</p>
      </>}
      {isOpening && <div className="speaker-name"><span>دكتور</span><strong>أحمد عبدالسلام</strong></div>}
      {slide.term && <BilingualTerm english={slide.term.english} arabic={slide.term.arabic} className="cover-term" />}
      {isOpening && <button className="start-button" type="button" onClick={onNext}><span>ابدأ</span><b aria-hidden="true">→</b></button>}
    </div>
    {isOpening ? <JourneyTrack /> : <div className="axis-intro-visual"><span className="axis-intro-node">بيانات</span><i>→</i><span className="axis-intro-node">تمثيل</span><i>→</i><span className="axis-intro-node axis-intro-node--accent">نموذج</span><i>→</i><span className="axis-intro-node axis-intro-node--accent">توليد</span></div>}
  </div>;
}

function HubVisual({ onChoose }: { onChoose: (id: string) => void }) {
  const labels = [
    ['S05', 'كيف تعمل الآلة؟', 'UNDERSTAND'], ['S15', 'هندسة الأوامر', 'INSTRUCT'], ['S25', 'هندسة السياق', 'CONTEXTUALIZE'],
    ['S35', 'سير العمل بالذكاء الاصطناعي', 'ORCHESTRATE'], ['S45', 'هندسة الوكلاء', 'DELEGATE'],
  ];
  return <div className="hub-visual">
    <div className="hub-visual__line" aria-hidden="true" />
    <div className="hub-stops">
      {labels.map(([id, ar, en], index) => <button type="button" key={id} className={`hub-stop hub-stop--${index > 2 ? 'orange' : 'cyan'}`} onClick={() => onChoose(id)}>
        <span className="hub-stop__ring"><b>{index + 1}</b></span><strong>{ar}</strong><small>{en}</small>
      </button>)}
      <div className="hub-stop hub-stop--control"><span className="hub-stop__ring"><b>✓</b></span><strong>راقب</strong><small>CONTROL</small></div>
    </div>
  </div>;
}

function TimelineVisual({ slide, value, onChange }: { slide: Slide; value: number; onChange: (value: number) => void }) {
  const steps = ['أمر', 'نقر', 'بحث', 'توجيه', 'سير عمل', 'تفويض'];
  const active = Math.max(0, Math.min(steps.length - 1, value));
  return <div className="timeline-visual">
    <div className="timeline-axis" aria-hidden="true"><span style={{ width: `${(active / (steps.length - 1)) * 100}%` }} /></div>
    <div className="timeline-points">{steps.map((step, index) => <button type="button" key={step} className={index <= active ? 'is-active' : ''} onClick={() => onChange(index)}><span>{index + 1}</span><strong>{step}</strong></button>)}</div>
    <div className="timeline-caption"><span>{steps[active]}</span><BilingualTerm english={slide.term?.english ?? 'Interface'} arabic={slide.term?.arabic ?? 'واجهة'} /></div>
  </div>;
}

function FlowVisual({ slide, activeIndex = 0, onCycle }: { slide: Slide; activeIndex?: number; onCycle?: () => void }) {
  const nodes = slide.nodes ?? ['مدخل', 'معالجة', 'نموذج', 'مخرج'];
  const active = activeIndex % nodes.length;
  return <div className="flow-visual">
    <div className="flow-line" aria-hidden="true" />
    <div className="flow-nodes">{nodes.map((node, index) => <div key={`${node}-${index}`} className={`flow-node ${index === active ? 'is-active' : ''}`}><span className="flow-node__dot" /><strong>{node}</strong><small>{index === active ? '●' : '·'}</small></div>)}</div>
    {onCycle && <button type="button" className="icon-action flow-cycle" onClick={onCycle} aria-label="تشغيل دورة أخرى">↻</button>}
  </div>;
}

function CompareVisual({ slide, onFocus }: { slide: Slide; onFocus: (label: string) => void }) {
  const nodes = slide.nodes ?? ['قبل', 'بعد'];
  return <div className="compare-visual">
    {nodes.slice(0, 2).map((node, index) => <button type="button" className={`compare-lane ${index ? 'compare-lane--accent' : ''}`} key={node} onClick={() => onFocus(node)}><span className="compare-lane__index">0{index + 1}</span><strong>{node}</strong><i aria-hidden="true">↗</i></button>)}
    <div className="compare-divider"><span>↔</span></div>
  </div>;
}

function GovernanceVisual({ slide, onFocus }: { slide: Slide; onFocus: (label: string) => void }) {
  const nodes = slide.nodes ?? ['ضوابط', 'مراجعة', 'إيقاف', 'تقييم'];
  return <div className="governance-visual">
    <div className="governance-core"><span className="governance-shield">✓</span><strong>قرار</strong><small>HUMAN GATE</small></div>
    <div className="governance-orbit">{nodes.map((node, index) => <button type="button" key={node} className={`governance-node governance-node--${index}`} onClick={() => onFocus(node)}><span>{index + 1}</span>{node}</button>)}</div>
  </div>;
}

function SlideScene({ slide, session, updateSession, openExplainer, onChoose }: { slide: Slide; session: SessionValue; updateSession: (next: SessionValue) => void; openExplainer: (label: string) => void; onChoose: (id: string) => void }) {
  if (slide.kind === 'map') return <HubVisual onChoose={onChoose} />;
  if (slide.kind === 'timeline') return <TimelineVisual slide={slide} value={session.range ?? 0} onChange={(range) => updateSession({ ...session, range })} />;
  if (slide.kind === 'pipeline') return <FlowVisual slide={slide} activeIndex={session.cycles ?? 0} onCycle={() => updateSession({ ...session, cycles: (session.cycles ?? 0) + 1 })} />;
  if (slide.kind === 'governance') return <GovernanceVisual slide={slide} onFocus={openExplainer} />;
  return <InteractiveBoard slide={slide} savedItems={session.items} onItemsChange={(items) => updateSession({ ...session, items })} onOpenExplainer={slide.id === 'S48' || slide.id === 'S53' ? openExplainer : undefined} />;
}

export default function App() {
  const presentation = usePresentation();
  const [session, setSession] = useState<Record<string, SessionValue>>({});
  const [explainer, setExplainer] = useState<string | null>(null);
  const current = presentation.current;
  const currentSession = session[current.id] ?? {};
  const isAxisMapSlide = current.id === 'S02';

  const updateSession = (next: SessionValue) => setSession((previous) => ({ ...previous, [current.id]: next }));
  const goToId = (id: string) => {
    const target = slides.find((slide) => slide.id === id);
    if (target) presentation.goTo(target.number - 1);
    presentation.setHubOpen(false);
    presentation.setMapOpen(false);
  };
  const chooseSlide = (slide: Slide) => goToId(slide.id);
  const openExplainer = (label: string) => setExplainer(label);
  const scene = useMemo(() => <SlideScene slide={current} session={currentSession} updateSession={updateSession} openExplainer={openExplainer} onChoose={goToId} />, [current, currentSession]);

  useEffect(() => { setExplainer(null); }, [current.id]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setExplainer(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <div className="presentation-app">
    <MotionLayer />
    <SlideFrame slide={current} onPrevious={presentation.previous} onNext={presentation.next} onHub={() => presentation.setHubOpen(true)} onMap={() => presentation.setMapOpen(true)} onFullscreen={presentation.toggleFullscreen} isFullscreen={presentation.isFullscreen}>
      {current.kind === 'cover' ? <div className={`scene scene--cover scene--${current.id.toLowerCase()}`}><CoverScene slide={current} onNext={presentation.next} /></div> : <div className={`scene scene--${current.kind}`}>
        <div className="scene-heading">
          <p className="eyebrow">{isAxisMapSlide ? 'الافتتاح' : current.axis} <span>·</span> {current.id}</p>
          <h1 id={`${current.id}-title`}>{titleWithAccent(current.title)}</h1>
          <p className="scene-premise">{current.premise}</p>
          {current.term && <BilingualTerm english={current.term.english} arabic={current.term.arabic} className="scene-term" paused={Boolean(explainer)} />}
        </div>
        <div className="scene-visual">{scene}</div>
        {current.kind === 'workshop' ? <div className="workshop-mark"><span>Workshop</span><small>مساحة بناء مشتركة</small></div> : <div className="scene-signature">{current.axisTitle}</div>}
      </div>}
    </SlideFrame>

    {presentation.hubOpen && <AxisMap mode="hub" current={current} onChoose={chooseSlide} onClose={() => presentation.setHubOpen(false)} />}
    {presentation.mapOpen && <AxisMap mode="axis" current={current} onChoose={chooseSlide} onClose={() => presentation.setMapOpen(false)} />}
    {explainer && <ExplainerOverlay title={current.title} label={explainer} onClose={() => setExplainer(null)} />}
  </div>;
}
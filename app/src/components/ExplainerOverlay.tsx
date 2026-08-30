interface ExplainerOverlayProps { title: string; label: string; onClose: () => void; }

const flows: Record<string, string[]> = {
  'Classification': ['Objects', 'Categories'],
  'التصنيف': ['Objects', 'Categories'],
  'Generation': ['Prompt', 'Model', 'Generated Output'],
  'التوليد': ['Prompt', 'Model', 'Generated Output'],
  'RAG': ['Question', 'Retrieve', 'Relevant Sources', 'Context', 'Model'],
  'Agent': ['Goal', 'Plan', 'Tool', 'Action', 'Observation', 'Next Action'],
  'الوكيل': ['Goal', 'Plan', 'Tool', 'Action', 'Observation', 'Next Action'],
};

export function ExplainerOverlay({ title, label, onClose }: ExplainerOverlayProps) {
  const flow = flows[label] ?? [label, 'Role', 'Effect'];
  return (
    <div className="explainer-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <section className="explainer-panel">
        <button className="overlay-close" type="button" onClick={onClose} aria-label="إغلاق الشرح">×</button>
        <p className="eyebrow">شرح بصري</p>
        <h2>{title}</h2>
        <div className="explainer-flow">
          {flow.map((step, index) => <span key={step}><b>{step}</b>{index < flow.length - 1 && <i aria-hidden="true">→</i>}</span>)}
        </div>
      </section>
    </div>
  );
}

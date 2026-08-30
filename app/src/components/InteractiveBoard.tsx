import { useMemo, useState } from 'react';
import type { Slide } from '../data/slides';

interface InteractiveBoardProps {
  slide: Slide;
  savedItems?: string[];
  onItemsChange: (items: string[]) => void;
  onOpenExplainer?: (label: string) => void;
}

const sortItems = (items: string[], from: number, to: number) => {
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
};

export function InteractiveBoard({ slide, savedItems, onItemsChange, onOpenExplainer }: InteractiveBoardProps) {
  const initial = useMemo(() => savedItems?.length ? savedItems : slide.nodes ?? [], [savedItems, slide.nodes]);
  const [items, setItems] = useState(initial);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const commit = (next: string[]) => { setItems(next); onItemsChange(next); };
  const handleDrop = (targetIndex: number) => {
    if (dragIndex === null || dragIndex === targetIndex) return;
    commit(sortItems(items, dragIndex, targetIndex));
    setDragIndex(null);
  };
  const reset = () => commit(slide.nodes ?? []);

  return (
    <section className={`interactive-board interactive-board--${slide.interactive ?? 'none'}`} onPointerDown={(event) => event.stopPropagation()}>
      <div className="board-heading">
        <span className="board-state" aria-hidden="true"><i /><i /><i /></span>
        <span>مساحة الفكرة</span>
        <button className="icon-action" type="button" onClick={reset} aria-label="إعادة ترتيب العناصر">↺</button>
      </div>
      <div className="board-items">
        {items.map((item, index) => (
          <button
            className={`board-node ${dragIndex === index ? 'is-dragging' : ''}`}
            key={`${item}-${index}`}
            type="button"
            draggable={slide.interactive === 'drag' || slide.interactive === 'arrange'}
            onDragStart={(event) => { event.stopPropagation(); setDragIndex(index); }}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => { event.preventDefault(); event.stopPropagation(); handleDrop(index); }}
            onClick={() => onOpenExplainer?.(item)}
            aria-label={item}
          >
            <span className="grab-mark" aria-hidden="true">⠿</span>
            <span className="board-node__label">{item}</span>
            <span className="node-open" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}

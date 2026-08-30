import { useEffect, useState } from 'react';

interface BilingualTermProps {
  english: string;
  arabic: string;
  paused?: boolean;
  intervalMs?: number;
  className?: string;
}

/** A layout-stable technical term: English first, then Arabic, on a calm loop. */
export function BilingualTerm({ english, arabic, paused = false, intervalMs = 4800, className = '' }: BilingualTermProps) {
  const [arabicVisible, setArabicVisible] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setArabicVisible((value) => !value), intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, paused]);

  return (
    <span className={`bilingual-term ${arabicVisible ? 'is-arabic' : 'is-english'} ${className}`} aria-label={`${english}، ${arabic}`}>
      <span key={arabicVisible ? 'arabic' : 'english'} className="bilingual-term__slot">{arabicVisible ? arabic : english}</span>
    </span>
  );
}

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getSlideById, slides } from '../data/slides';

const initialIndex = () => {
  const match = getSlideById(window.location.hash.slice(1));
  return match ? match.number - 1 : 0;
};

export function usePresentation() {
  const [index, setIndex] = useState(initialIndex);
  const [isFullscreen, setFullscreen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const current = slides[index];

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, next));
    setIndex(bounded);
    window.history.replaceState(null, '', `#${slides[bounded].id}`);
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    const onHash = () => {
      const target = getSlideById(window.location.hash.slice(1));
      if (target) setIndex(target.number - 1);
    };
    const onFull = () => setFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('hashchange', onHash);
    document.addEventListener('fullscreenchange', onFull);
    return () => {
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('fullscreenchange', onFull);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('input, textarea, [contenteditable=true]')) return;
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); next(); }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); previous(); }
      if (event.key.toLowerCase() === 'f') void toggleFullscreen();
      if (event.key.toLowerCase() === 'h') setHubOpen(true);
      if (event.key.toLowerCase() === 'm') setMapOpen(true);
      if (event.key === 'Escape') { setHubOpen(false); setMapOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, previous, toggleFullscreen]);

  return useMemo(() => ({ current, index, goTo, next, previous, isFullscreen, toggleFullscreen, hubOpen, setHubOpen, mapOpen, setMapOpen }), [current, index, goTo, next, previous, isFullscreen, toggleFullscreen, hubOpen, mapOpen]);
}

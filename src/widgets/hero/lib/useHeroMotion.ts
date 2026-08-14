import { useEffect } from 'react';

export function useHeroMotion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('hero-motion-pending')) return;

    const frame = requestAnimationFrame(() => root.classList.add('hero-motion-ready'));

    return () => cancelAnimationFrame(frame);
  }, []);
}

import { useEffect, useRef } from 'react';

export function useTimelineProgress<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const { top, height } = element.getBoundingClientRect();
      if (height === 0) return;

      const progress = (window.innerHeight / 2 - top) / height;
      element.style.setProperty(
        '--timeline-progress',
        String(Math.min(Math.max(progress, 0), 1)),
      );
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return ref;
}

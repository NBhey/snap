import { useEffect, useRef, useState } from 'react';

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = '0px 0px -12% 0px',
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsRevealed(true);
        observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return {
    ref,
    isRevealed,
    revealClassName: isRevealed ? 'dds-reveal is-visible' : 'dds-reveal',
  };
}

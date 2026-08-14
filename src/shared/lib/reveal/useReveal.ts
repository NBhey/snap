import { useEffect, useRef, useState } from 'react';

type UseRevealOptions = {
  /** Доля секции во вьюпорте, после которой запускается анимация. */
  threshold?: number;
  /** Сдвиг границы срабатывания: по умолчанию секция раскрывается, не доходя до низа экрана. */
  rootMargin?: string;
};

/**
 * Подключает секцию к скролл-анимации `.dds-reveal` из inline-body.css.
 * Стили ждут класс `is-visible` — хук выставляет его один раз, когда секция
 * появляется во вьюпорте, и сразу отписывается.
 *
 * Режим `prefers-reduced-motion` обрабатывается в CSS: там `.dds-reveal`
 * отрисовывается сразу, поэтому отдельной ветки в JS не нужно.
 */
export function useReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = '0px 0px -12% 0px',
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  // Без IntersectionObserver анимации не будет — показываем секцию сразу,
  // иначе она навсегда останется с opacity: 0.
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

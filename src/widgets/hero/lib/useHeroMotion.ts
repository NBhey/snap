import { useEffect } from 'react';

/**
 * Запускает entrance-анимацию героя из runtime.css.
 *
 * Стили ждут пару классов на <html>: `hero-motion-pending` прячет заголовок,
 * CTA и превью (его ставит инлайн-скрипт в index.html до первой отрисовки),
 * `hero-motion-ready` включает сам въезд со стаггером 160/220/420ms.
 */
export function useHeroMotion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('hero-motion-pending')) return;

    // Ждём кадр после монтирования, иначе браузер схлопнет начальное
    // и конечное состояния в одну отрисовку и анимации не будет.
    const frame = requestAnimationFrame(() => root.classList.add('hero-motion-ready'));

    return () => cancelAnimationFrame(frame);
  }, []);
}

import type { CSSProperties } from 'react';

import { useReveal } from '@/shared/lib/reveal';

import { securityMedia } from '../assets';

const points = [
  {
    title: 'Только одобренные модели',
    description: 'Работаем только с российскими и локализованными моделями, без экспортных ограничений',
    icon: 'shield',
  },
  {
    title: 'Ваш контур, ваша юрисдикция',
    description: 'Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями',
    icon: 'cloud',
  },
  {
    title: 'Собственный AI-стек',
    description: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации',
    icon: 'layers',
  },
] as const;

function FeatureIcon({ type }: { type: (typeof points)[number]['icon'] }) {
  if (type === 'cloud') {
    return <path d="M5 16.5a4.5 4.5 0 0 1-.9-8.9A6 6 0 0 1 15.8 9a3.8 3.8 0 0 1-.4 7.5H5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />;
  }
  if (type === 'layers') {
    return <path d="m10 3 8 4-8 4-8-4 8-4Zm-7 8 7 3.5 7-3.5M3 15l7 3.5 7-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />;
  }
  return <path d="M10 2.5 17 5v5c0 4.3-2.8 7.3-7 8.5C5.8 17.3 3 14.3 3 10V5l7-2.5Zm-3 7.2 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />;
}

export function Features() {
  const { ref, revealClassName } = useReveal();

  return (
    <section id="features" ref={ref} className={`features dds-why-safe ${revealClassName}`}>
      <h2 className="dds-why-safe-section-title">Безопасность без компромиссов</h2>
      <div className="dds-why-safe-points">
        {points.map((point, index) => (
          <div
            className="dds-why-safe-point dds-reveal-item"
            key={point.title}
            style={{ '--reveal-index': index } as CSSProperties}
          >
            <picture className="dds-why-safe-image">
              <source media="(max-width: 767px)" srcSet={securityMedia[index].mobile} />
              <img src={securityMedia[index].desktop} alt="" aria-hidden="true" />
            </picture>
            <div className="dds-why-safe-card">
              <span className="dds-why-safe-tile" aria-hidden="true">
                <svg viewBox="0 0 20 20"><FeatureIcon type={point.icon} /></svg>
              </span>
            </div>
            <div className="dds-why-safe-point-text">
              <h3 className="dds-why-safe-point-title">{point.title}</h3>
              <p className="dds-why-safe-point-desc">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


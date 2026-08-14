import type { CSSProperties } from 'react';

import { useReveal } from '@/shared/lib/reveal';

const roleCases = [
  {
    role: 'Маркетинг',
    title: 'Кампания целиком из одного брифа',
    description:
      'Лендинг, баннеры под площадки и письма собираются в одной сетке и палитре — без сборки по кусочкам от трёх подрядчиков.',
    formats: ['Лендинги', 'Баннеры', 'Рассылки'],
  },
  {
    role: 'Дизайн',
    title: 'Дизайнеры возвращаются к дизайну',
    description:
      'Ресайзы и адаптации уходят в платформу. Команда занимается системой, а не сороковой версией одного макета.',
    formats: ['Ресайзы', 'Пресеты', 'Библиотека'],
  },
  {
    role: 'Продажи',
    title: 'Персональный питч за вечер',
    description:
      'Презентация под конкретного клиента в фирменной дизайн-системе — без очереди в дизайн-отдел.',
    formats: ['Питч-деки', 'КП'],
  },
  {
    role: 'Продукт',
    title: 'Промо релиза в день релиза',
    description:
      'Страница фичи, скриншоты и OG-графика готовы, пока фича катится на прод.',
    formats: ['Страницы фич', 'OG', 'Скриншоты'],
  },
] as const;

export function Roles() {
  const { ref, revealClassName } = useReveal();

  return (
    <section id="roles" ref={ref} className={`dds-section dds-roles ${revealClassName}`}>
      <header className="dds-section__header">
        <span className="dds-roles-added">+ Добавлено</span>
        <p className="dds-section__eyebrow">Кейсы по ролям</p>
        <h2 className="dds-section__title">Каждая команда получает свой быстрый сценарий</h2>
        <p className="dds-section__subtitle">
          Снэпбилд подстраивается под задачи каждого отдела — без очередей, ручных ресайзов и
          потери фирменного стиля.
        </p>
      </header>

      <div className="dds-roles-grid">
        {roleCases.map(({ role, title, description, formats }, index) => (
          <article
            className="dds-role-card dds-reveal-item"
            key={role}
            style={{ '--reveal-index': index } as CSSProperties}
          >
            <p className="dds-role-eyebrow">{role}</p>
            <h3 className="dds-role-title">{title}</h3>
            <p className="dds-role-description">{description}</p>

            <ul className="dds-role-formats" aria-label={`Форматы для роли «${role}»`}>
              {formats.map((format) => (
                <li className="dds-role-format" key={format}>
                  {format}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';
import type { CSSProperties } from 'react';

import { useReveal } from '@/shared/lib/reveal';

import {
  pricingBusinessImage,
  pricingEnterpriseImage,
  pricingTeamImage,
} from '../assets';

type BillingPeriod = 'month' | 'year';

const plans = [
  {
    id: 'team',
    name: 'Команда',
    audience: 'Один отдел, первые кампании',
    image: pricingTeamImage,
    imageAlt: 'Модули команды вокруг общего творческого пространства',
    prices: {
      month: { value: '49 000 ₽', note: 'в месяц' },
      year: { value: '39 200 ₽', note: 'в месяц, оплата за год' },
    },
    features: [
      'До 10 участников',
      '1 дизайн-система',
      'Все режимы генерации',
      'Экспорт до 4K',
      'Поддержка по почте',
    ],
    action: 'Начать сейчас',
    featured: false,
  },
  {
    id: 'business',
    name: 'Бизнес',
    audience: 'Несколько команд и брендов',
    image: pricingBusinessImage,
    imageAlt: 'Единый центр управления несколькими каналами и командами',
    prices: {
      month: { value: '149 000 ₽', note: 'в месяц' },
      year: { value: '119 200 ₽', note: 'в месяц, оплата за год' },
    },
    features: [
      'До 50 участников',
      '5 дизайн-систем',
      'Приоритетная очередь генерации',
      'SSO и роли',
      'Интеграция с GitHub и GitLab',
      'Персональный менеджер',
    ],
    action: 'Начать сейчас',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Корпоративный',
    audience: 'Свой контур и требования ИБ',
    image: pricingEnterpriseImage,
    imageAlt: 'Защищённое ядро корпоративной AI-инфраструктуры',
    prices: {
      month: { value: 'По запросу', note: 'индивидуальный расчёт' },
      year: { value: '—', note: 'индивидуальный расчёт' },
    },
    features: [
      'Развёртывание в вашей сети',
      'Соответствие 152-ФЗ',
      'Собственный AI-стек',
      'SLA 99,9%',
      'Обучение команды',
    ],
    action: 'Запросить расчёт',
    featured: false,
  },
] as const;

export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>('month');
  const { ref, revealClassName } = useReveal();

  return (
    <section id="pricing" ref={ref} className={`dds-pricing dds-section ${revealClassName}`}>
      <header className="dds-pricing-head">
        <span className="dds-pricing-added">+ Добавлено</span>
        <div className="dds-pricing-heading">
          <p className="dds-pricing-eyebrow">Тарифы</p>
          <h2 className="dds-pricing-title">Выберите масштаб подключения</h2>
          <p className="dds-pricing-subtitle">
            От первой команды до защищённого корпоративного контура
          </p>
        </div>

        <div className="dds-btn-group dds-pricing-switch" aria-label="Период оплаты">
          <button
            className={`dds-pricing-period${period === 'month' ? ' is-active' : ''}`}
            type="button"
            aria-pressed={period === 'month'}
            onClick={() => setPeriod('month')}
          >
            Месяц
          </button>
          <button
            className={`dds-pricing-period${period === 'year' ? ' is-active' : ''}`}
            type="button"
            aria-pressed={period === 'year'}
            onClick={() => setPeriod('year')}
          >
            Год
            <span className="dds-pricing-discount">−20%</span>
          </button>
        </div>
      </header>

      <div className="dds-pricing-grid">
        {plans.map((plan, index) => {
          const price = plan.prices[period];

          return (
            <article
              className={`dds-pricing-plan dds-reveal-item${plan.featured ? ' is-featured' : ''}`}
              key={plan.id}
              style={{ '--reveal-index': index } as CSSProperties}
            >
              <div className="dds-pricing-media">
                <img src={plan.image} alt={plan.imageAlt} loading="lazy" />
              </div>

              <div className="dds-pricing-plan-head">
                <div>
                  <h3 className="dds-pricing-plan-name">{plan.name}</h3>
                  <p className="dds-pricing-audience">{plan.audience}</p>
                </div>
                {plan.featured && <span className="dds-pricing-popular">Популярный</span>}
              </div>

              <div className="dds-pricing-price" aria-live="polite">
                <span className="dds-pricing-price-value">{price.value}</span>
                <span className="dds-pricing-price-note">{price.note}</span>
              </div>

              <ul className="dds-pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="dds-pricing-action" href="#demo">
                {plan.action}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

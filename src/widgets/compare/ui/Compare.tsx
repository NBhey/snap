import type { CSSProperties } from 'react';

import { useReveal } from '@/shared/lib/reveal';

import { comparisonCheckIcon } from '../assets';

const benefitColumns = { '--dds-benefit-cols': 6 } as CSSProperties;

export function Compare() {
  const { ref, revealClassName } = useReveal();

  return (
    <section
      id="compare"
      ref={ref}
      className={`compare dds-compare dds-benefit ${revealClassName}`}
      data-cms-section="compare.benefit"
      data-section-id="019f8703-47cb-76a5-a38e-b7781e1d2734"
      data-template-id="23fe54bb-2b2b-4d84-bc1b-cd8d93a127ea"
      data-section-type="compare"
      data-section-name="Сравнение — Преимущества"
      style={benefitColumns}
    >
      <header className="dds-benefit-header">
        <h2 className="dds-benefit-title" data-cms-key="compare.title">
          Почему команды выбирают Снэпбилд
        </h2>
        <p className="dds-benefit-subtitle" data-cms-key="compare.subtitle">
          {'Вы\u00a0получаете не\u00a0редактор, а\u00a0результат: готовые маркетинговые материалы без\u00a0проблем с\u00a0настройками'}
        </p>
      </header>

      <div className="dds-benefit-scroll">
        <div className="sds-compare-table" role="table">
          <div className="sds-compare-brand-border" aria-hidden="true" />

          <div className="sds-compare-row sds-compare-row--head" role="row">
            <div className="sds-compare-cell sds-compare-cell--label">
              <span data-cms-key="compare.head.feature">Особенности</span>
            </div>
            <div className="sds-compare-cell">
              <span className="sds-compare-brandname" data-cms-key="compare.head.brand">снэпбилд</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.head.c1">Claude + Figma MCP</span>
            </div>
            <div className="sds-compare-cell sds-compare-cell--narrow">
              <span data-cms-key="compare.head.c2">No-code платформы</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.head.c3">Cursor</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.head.c4">Традиционный</span>
            </div>
          </div>

          <div className="sds-compare-row" role="row">
            <div className="sds-compare-cell sds-compare-cell--label">
              <span data-cms-key="compare.r1.label">Time-to-market</span>
            </div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r1.brand">5 минут</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r1.c1">30–60 мин</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r1.c2">2–3 дня</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r1.c3">1–2 дня</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r1.c4">3–5 недель</span></div>
          </div>

          <div className="sds-compare-row" role="row">
            <div className="sds-compare-cell sds-compare-cell--label">
              <span data-cms-key="compare.r2.label">Дизайн-система</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.r2.brand">100%<br />точность</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.r2.c1">{'Частично, из\u00a0Figma'}</span>
            </div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r2.c2">Шаблоны</span></div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.r2.c3">{'Вручную в\u00a0коде'}</span>
            </div>
            <div className="sds-compare-cell">
              <span data-cms-key="compare.r2.c4">Вручную, через ревью</span>
            </div>
          </div>

          <div className="sds-compare-row" role="row">
            <div className="sds-compare-cell sds-compare-cell--label">
              <span data-cms-key="compare.r3.label">Визуальный редактор</span>
            </div>
            <div className="sds-compare-cell">
              <span className="sds-check">
                <img
                  src={comparisonCheckIcon}
                  data-cms-image="compare.r3.check-1"
                  data-cms-no-generate=""
                  alt=""
                  width="100%"
                  height="100%"
                />
              </span>
              <span data-cms-key="compare.r3.brand">+ ИИ</span>
            </div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r3.c1">—</span></div>
            <div className="sds-compare-cell">
              <span className="sds-check">
                <img src={comparisonCheckIcon} alt="" width="100%" height="100%" />
              </span>
              <span data-cms-key="compare.r3.c2" />
            </div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r3.c3">—</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r3.c4">—</span></div>
          </div>

          <div className="sds-compare-row" role="row">
            <div className="sds-compare-cell sds-compare-cell--label">
              <span data-cms-key="compare.r4.label">Требуемые навыки</span>
            </div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r4.brand">Нет</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r4.c1">Промпты + код</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r4.c2">Дизайн</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r4.c3">Разработка</span></div>
            <div className="sds-compare-cell"><span data-cms-key="compare.r4.c4">Полная команда</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

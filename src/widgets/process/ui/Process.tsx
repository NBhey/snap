import type { ReactNode } from 'react';

import { processMedia } from '../assets';

type Step = {
  title: string;
  mobileTitle?: string;
  description: string;
  media: ReactNode;
};

const steps: Step[] = [
  {
    title: 'Дизайн-система — ядро платформы',
    mobileTitle: 'Дизайн-система Снэпбилд',
    description: 'Ваши компоненты, цвета и шрифты — единственный источник стиля',
    media: <img className="dds-steps-media dds-steps-media--1" src={processMedia.designSystem} alt="" />,
  },
  {
    title: 'Гибкая конфигурация',
    description: 'Правила бренда задаются один раз — работают в каждой генерации',
    media: (
      <picture className="dds-steps-picture">
        <source media="(max-width: 767px)" srcSet={processMedia.flexibleConfiguration.mobile} />
        <source media="(max-width: 1023px)" srcSet={processMedia.flexibleConfiguration.tablet} />
        <img className="dds-steps-media dds-steps-media--2" src={processMedia.flexibleConfiguration.desktop} alt="" />
      </picture>
    ),
  },
  {
    title: 'Соответствие по умолчанию',
    description:
      'AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам',
    media: <img className="dds-steps-media dds-steps-media--3" src={processMedia.compliance} alt="" />,
  },
];

export function Process() {
  return (
    <section id="process" className="process dds-steps">
      <div className="dds-steps-header">
        <h2 className="dds-steps-title">
          <span className="dds-steps-wide">Одна платформа — весь маркетинг</span>
          <span className="dds-steps-narrow">Одна платформа —<br />весь маркетинг</span>
        </h2>
        <p className="dds-steps-subtitle">
          Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле
        </p>
      </div>
      <div className="dds-steps-grid">
        {steps.map((step) => (
          <article className="dds-steps-card" key={step.title}>
            {step.media}
            <div className="dds-steps-overlay">
              <div className="dds-steps-copy">
                <h3 className="dds-steps-name">
                  <span className="dds-steps-wide">{step.title}</span>
                  <span className="dds-steps-narrow">{step.mobileTitle ?? step.title}</span>
                </h3>
                <p className="dds-steps-desc">
                  <span className="dds-steps-wide">{step.description}</span>
                  <span className="dds-steps-narrow">{step.description}</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


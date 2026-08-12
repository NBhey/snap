import { useState } from 'react';

import { useCaseMedia } from '../assets';

const copy = [
  [
    ['Результат за один запрос', 'Отправляйте документ или ссылку на описание продукта — платформа собирает структуру'],
    ['Страница за минуту', 'В вашей дизайн-системе, с вашими шрифтами, сеткой и компонентами'],
    ['AI или визуальный редактор', 'Меняйте контент через чат или редактируйте вручную'],
    ['Адаптация под ЦА за один клик', 'Версия сайта под новый сегмент без работы дизайнеров и копирайтеров'],
  ],
  [
    ['В стиле и цвете бренда', 'Изображения по композиционным правилам вашей дизайн-системы'],
    ['Попадание с первой генерации', 'Без часов промптинга и поиска на стоках'],
    ['Редактирование объектов', 'Меняйте композицию и удаляйте элементы прямо на изображении'],
    ['Любой стиль и формат', 'Портреты, иллюстрации, обложки — в нужном соотношении, до 4K'],
  ],
  [
    ['Изображения как ключевые кадры', 'Используйте графику из модуля изображений напрямую'],
    ['Контроль качества и формата', 'Длительность, соотношение, качество — под площадку'],
    ['Сохранение стиля и композиции', 'AI удерживает визуальную целостность ролика'],
    ['Один сценарий — десятки адаптаций', 'Версии под популярные форматы соцсетей и рекламные площадки'],
  ],
  [
    ['Креативы из одной идеи', 'Готовые баннеры в фирменном стиле для любой кампании'],
    ['Все размеры автоматически', 'Готовые размеры площадок без ручной пересборки'],
    ['Текст и графика под контролем', 'Редактируйте оффер, композицию и визуальные акценты'],
    ['Экспорт под площадку', 'Форматы и вес файлов соответствуют требованиям размещения'],
  ],
  [
    ['Презентация из запроса', 'Платформа собирает структуру и черновик слайдов'],
    ['В вашей дизайн-системе', 'Шрифты, сетки и компоненты применяются автоматически'],
    ['Редактирование через AI', 'Меняйте отдельный слайд или всю историю через чат'],
    ['Экспорт в нужном формате', 'Собирайте презентации для встречи, рассылки или публикации'],
  ],
] as const;

export function UseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
    setActiveItem(0);
  };

  return (
    <section
      id="use-cases"
      className="use-cases dds-use-cases dds-tabs"
      data-section-id="019f8703-47cb-7689-a38e-b7781d811c91"
    >
      {useCaseMedia.map((group, index) => (
        <input
          key={group.id}
          type="radio"
          name="uc-tabs"
          id={`uc-tab-${index + 1}`}
          className="dds-tabs-radio"
          checked={activeTab === index}
          onChange={() => selectTab(index)}
        />
      ))}
      <div className="dds-tabs-inner">
        <div className="dds-tabs-header">
          <h2 className="dds-tabs-title">
            <span className="dds-tabs-wide" data-cms-key="use-cases.title">
              {'Любой контент в\u00a0фирменном стиле'}{`\n`}{'за\u00a0считанные минуты'}
            </span>
            <span className="dds-tabs-narrow" data-cms-key="use-cases.title-narrow">
              Любой контент{`\n`}{'в\u00a0фирменном стиле'}{`\n`}{'за\u00a0считанные минуты'}
            </span>
          </h2>
          <div className="dds-tabs-group" role="tablist">
            {useCaseMedia.map((group, index) => (
              <label
                className="dds-tabs-tab"
                htmlFor={`uc-tab-${index + 1}`}
                key={group.id}
                role="tab"
                aria-selected={activeTab === index}
              >
                {group.label}
              </label>
            ))}
          </div>
        </div>
        <div className="dds-tabs-body">
          <div className="dds-tabs-points">
            {copy.map((group, groupIndex) => (
              <div className={`dds-tabs-points-set dds-tabs-points-set--${groupIndex + 1}`} key={useCaseMedia[groupIndex].id}>
                {group.map(([title, description], itemIndex) => (
                  <article
                    className={`dds-tabs-card${activeTab === groupIndex && activeItem === itemIndex ? ' dds-tabs-card--active' : ''}`}
                    key={title}
                    tabIndex={0}
                    role="button"
                    onClick={() => setActiveItem(itemIndex)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') setActiveItem(itemIndex);
                    }}
                  >
                    <h3 className="dds-tabs-card-title">{title}</h3>
                    <p className="dds-tabs-card-desc"><span>{description}</span></p>
                    <div className="dds-tabs-card-progress"><div className="dds-tabs-card-progress-fill" /></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <div className="dds-tabs-panel">
            {useCaseMedia.flatMap((group, groupIndex) =>
              group.items.map((src, itemIndex) => (
                <img
                  className={`dds-tabs-media dds-tabs-media--tab${groupIndex + 1}-item${itemIndex + 1}${
                    activeTab === groupIndex && activeItem === itemIndex ? ' dds-tabs-media--active' : ''
                  }`}
                  key={src}
                  src={src}
                  alt=""
                />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

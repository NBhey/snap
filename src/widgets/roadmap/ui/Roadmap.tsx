import { useRef } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';

import { useReveal } from '@/shared/lib/reveal';

type RoadmapItem = {
  key: number;
  title: string;
  description: string;
  date: string;
  reached: boolean;
};

const roadmapItems: RoadmapItem[] = [
  {
    key: 1,
    title: 'Сайты за\u00a05 минут',
    description: 'Генерация корпоративных сайтов по\u00a0вашей дизайн-системе\u00a0— 100% консистентность, без\u00a0разработчиков',
    date: 'Декабрь,\u00a02025',
    reached: true,
  },
  {
    key: 2,
    title: 'Консистентные AI-иллюстрации',
    description: 'Настраиваете фирменный стиль один раз\u00a0— графика для\u00a0каждой секции сайта в\u00a0едином виде через стилевые пресеты',
    date: 'Январь,\u00a02026',
    reached: true,
  },
  {
    key: 3,
    title: 'Дизайн-система из\u00a0вашего сайта',
    description: 'Сканируем существующие страницы и\u00a0собираем из\u00a0них готовую дизайн-систему; AI\u00a0сам выстраивает структуру',
    date: 'Февраль,\u00a02026',
    reached: true,
  },
  {
    key: 4,
    title: 'Режим изображений',
    description: 'Брендовая графика в\u00a0один клик: управление стилями и\u00a0темами, десятки параметров редактирования',
    date: 'Март,\u00a02026',
    reached: true,
  },
  {
    key: 5,
    title: 'Генерация видео',
    description: 'Видео из\u00a0ваших изображений с\u00a0ключевыми кадрами; AI\u00a0точнее на\u00a078%, панель рассуждений и\u00a0управление правами',
    date: 'Апрель,\u00a02026',
    reached: true,
  },
  {
    key: 6,
    title: 'Ресайзы изображений',
    description: 'Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и\u00a0другие) с\u00a0автоматическим бюджетом веса на\u00a0экспорт',
    date: 'Май,\u00a02026',
    reached: true,
  },
  {
    key: 7,
    title: 'Расширенный редактор, как\u00a0в\u00a0Figma',
    description: 'Слои, изменение размеров любого контейнера, превью структуры в\u00a0чате, версии промптов и\u00a0ветвление диалогов',
    date: 'Июнь,\u00a02026',
    reached: true,
  },
  {
    key: 8,
    title: 'Канвас, баннеры и\u00a0презентации',
    description: 'Канвас во\u00a0всех режимах; новые режимы\u00a0— генерация рекламных баннеров и\u00a0корпоративных презентаций',
    date: 'Июль,\u00a02026',
    reached: true,
  },
  {
    key: 9,
    title: 'ИИ-маркетолог',
    description: 'Следит за\u00a0данными, сам обновляет ваши материалы и\u00a0собирает кампанию целиком\u00a0— от\u00a0изображений до\u00a0сайта',
    date: 'Август,\u00a02026',
    reached: true,
  },
  {
    key: 10,
    title: 'Компонентный подход',
    description: 'AI сам компонует секции сайтов из\u00a0элементов вашей дизайн-библиотеки',
    date: 'Сентябрь,\u00a02026',
    reached: false,
  },
  {
    key: 11,
    title: 'Предиктивные рекомендации',
    description: 'Платформа сама предлагает, что\u00a0обновить в\u00a0кампаниях\u00a0— от\u00a0секций сайта до\u00a0баннеров',
    date: 'Октябрь,\u00a02026',
    reached: false,
  },
  {
    key: 13,
    title: 'Инфраструктура',
    description: 'Развертывание в\u00a0вашей сети и\u00a0контуре',
    date: 'Ноябрь,\u00a02026',
    reached: false,
  },
];

const progressStyle = { '--dds-rmap-progress': 8 } as CSSProperties;

export function Roadmap() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const { ref: sectionRef, revealClassName } = useReveal();

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className={`roadmap dds-rmap ${revealClassName}`}
      data-cms-section="roadmap.platform"
      data-section-id="019f8703-47cb-76b5-a38e-b7781e65d44b"
      data-template-id="3e95b975-11d0-4fdb-8edb-7d1c7073bd94"
    >
      <header className="dds-rmap-header">
        <h2 className="dds-rmap-title" data-cms-key="roadmap.platform.title">
          {'Каждый день\u00a0— новый релиз'}
        </h2>
        <p className="dds-rmap-subtitle" data-cms-key="roadmap.platform.subtitle">
          {'Приоритизируем бэклог для\u00a0ваших целей'}
        </p>
      </header>

      <div
        ref={scrollerRef}
        className="dds-rmap-scroller"
        data-dds-drag-scroll=""
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return;

          dragRef.current = {
            active: true,
            startX: event.clientX,
            scrollLeft: event.currentTarget.scrollLeft,
          };
          event.currentTarget.classList.add('is-dragging');
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragRef.current.active) return;
          event.currentTarget.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
        }}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <div className="dds-rmap-track" style={progressStyle}>
          {roadmapItems.map((item) => (
            <article className={`dds-rmap-item${item.reached ? ' is-reached' : ''}`} key={item.key}>
              <span className="dds-rmap-dot">
                <span className="dds-rmap-dot-halo" />
                <span className="dds-rmap-dot-core" />
              </span>
              <div className="dds-rmap-body">
                <h3 className="dds-rmap-name" data-cms-key={`roadmap.platform.item${item.key}.title`}>
                  {item.title}
                </h3>
                <p className="dds-rmap-desc" data-cms-key={`roadmap.platform.item${item.key}.desc`}>
                  {item.description}
                </p>
                <p className="dds-rmap-date" data-cms-key={`roadmap.platform.item${item.key}.date`}>
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

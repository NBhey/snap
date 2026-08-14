import { useCallback, useRef, useState } from 'react';
import type {
  CSSProperties,
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';

import { useReveal } from '@/shared/lib/reveal';

const testimonials = [
  {
    quote:
      'Раньше промо новой линейки жило две недели в переписке с подрядчиком. Сейчас первый вариант страницы у нас на руках в тот же день.',
    name: 'Марина Егорова',
    position: 'Руководитель маркетинга',
    company: '«Формат Ритейл»',
    result: 'Time-to-market: 12 дней → 1 день',
  },
  {
    quote:
      'Меня как арт-директора продавали страхом: «AI сломает бренд». Он не ломает, если правила зашиты в систему. Мы ни разу не откатывали генерацию из-за стиля.',
    name: 'Даниил Ковалёв',
    position: 'Арт-директор',
    company: '«Северный Банк»',
    result: '0 правок по бренду за квартал',
  },
  {
    quote:
      'Ресайзы съедали треть времени команды. Теперь одна фокус-точка — и все площадки закрыты.',
    name: 'Ольга Пирогова',
    position: 'Дизайн-лид',
    company: '«Точка Логистики»',
    result: '−34% рутинных задач в спринте',
  },
  {
    quote:
      'Юристы согласовали за неделю: модели российские, контур наш. Для нас это было главным блокером.',
    name: 'Артём Свиридов',
    position: 'Директор по цифровым продуктам',
    company: '«Атлас Групп»',
    result: 'Запуск за 7 дней вместо квартала',
  },
] as const;

type Direction = 'next' | 'prev';
type Drag = {
  pointerId: number;
  startX: number;
  deltaX: number;
  active: boolean;
};

const initialDrag: Drag = { pointerId: -1, startX: 0, deltaX: 0, active: false };

const DRAG_THRESHOLD = 40;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('next');
  const [isDragging, setIsDragging] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag>({ ...initialDrag });
  const { ref: sectionRef, revealClassName } = useReveal();

  const showSlide = useCallback((index: number, nextDirection: Direction) => {
    setDirection(nextDirection);
    setActiveIndex((index + testimonials.length) % testimonials.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      setDirection('next');
      return (currentIndex + 1) % testimonials.length;
    });
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      setDirection('prev');
      return (currentIndex - 1 + testimonials.length) % testimonials.length;
    });
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || drag.current.active) return;

    drag.current = { pointerId: event.pointerId, startX: event.clientX, deltaX: 0, active: true };
    stackRef.current?.style.setProperty('--drag-x', '0');
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || event.pointerId !== drag.current.pointerId) return;

    drag.current.deltaX = event.clientX - drag.current.startX;
    stackRef.current?.style.setProperty('--drag-x', String(drag.current.deltaX));
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || event.pointerId !== drag.current.pointerId) return;

    const { deltaX } = drag.current;
    drag.current = { ...initialDrag };
    setIsDragging(false);

    if (deltaX <= -DRAG_THRESHOLD) showNext();
    else if (deltaX >= DRAG_THRESHOLD) showPrevious();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`dds-section dds-testimonials ${revealClassName}`}
    >
      <header className="dds-section__header">
        <span className="dds-testimonials-added">+ Добавлено</span>
        <p className="dds-section__eyebrow">Отзывы</p>
        <h2 className="dds-section__title">Результаты команд после внедрения</h2>
        <p className="dds-section__subtitle">
          Не обещания, а измеримые изменения в скорости, качестве и ежедневной работе команд.
        </p>
      </header>

      <div
        className="dds-testimonials-slider"
        role="region"
        aria-roledescription="карусель"
        aria-label="Отзывы клиентов"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`dds-testimonials-stack${isDragging ? ' is-dragging' : ''}`}
          ref={stackRef}
          style={{ '--stack-dir': direction === 'next' ? 1 : -1 } as CSSProperties}
          aria-live="polite"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {testimonials.map((testimonial, index) => {
            const depth = (index - activeIndex + testimonials.length) % testimonials.length;
            const isTop = depth === 0;
            const isOffDeck = depth === testimonials.length - 1;

            return (
              <article
                className={`dds-testimonial-card${isTop ? ' is-top' : ''}${
                  isOffDeck ? ' is-off-deck' : ''
                }`}
                key={testimonial.name}
                style={{ '--stack-depth': depth } as CSSProperties}
                aria-hidden={!isTop}
                inert={!isTop}
                aria-label={isTop ? `Отзыв ${index + 1} из ${testimonials.length}` : undefined}
              >
                <blockquote className="dds-testimonial-quote">«{testimonial.quote}»</blockquote>

                <footer className="dds-testimonial-footer">
                  <div className="dds-testimonial-author">
                    <p className="dds-testimonial-name">{testimonial.name}</p>
                    <p className="dds-testimonial-meta">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                  <p className="dds-testimonial-result">{testimonial.result}</p>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="dds-testimonials-navigation">
          <div className="dds-testimonials-dots" role="tablist" aria-label="Выбор отзыва">
            {testimonials.map((testimonial, index) => (
              <button
                className={`dds-testimonials-dot${index === activeIndex ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Показать отзыв: ${testimonial.name}`}
                onClick={() => showSlide(index, index >= activeIndex ? 'next' : 'prev')}
                key={testimonial.name}
              />
            ))}
          </div>

          <div className="dds-testimonials-arrows">
            <button
              className="dds-testimonials-arrow"
              type="button"
              aria-label="Предыдущий отзыв"
              onClick={showPrevious}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="dds-testimonials-arrow"
              type="button"
              aria-label="Следующий отзыв"
              onClick={showNext}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

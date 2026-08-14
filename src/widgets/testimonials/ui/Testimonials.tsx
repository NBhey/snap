import { useCallback, useRef, useState } from 'react';
import type { KeyboardEvent, TouchEvent } from 'react';

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
type Gesture = {
  startX: number;
  startY: number;
  deltaX: number;
  axis: 'x' | 'y' | null;
};

const initialGesture: Gesture = { startX: 0, startY: 0, deltaX: 0, axis: null };

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('next');
  const gesture = useRef<Gesture>({ ...initialGesture });
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

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    gesture.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      deltaX: 0,
      axis: null,
    };
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    const deltaX = touch.clientX - gesture.current.startX;
    const deltaY = touch.clientY - gesture.current.startY;

    gesture.current.deltaX = deltaX;

    if (!gesture.current.axis && Math.hypot(deltaX, deltaY) >= 8) {
      gesture.current.axis = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y';
    }
  };

  const handleTouchEnd = () => {
    const { axis, deltaX } = gesture.current;

    if (axis === 'x' && Math.abs(deltaX) >= 40) {
      if (deltaX < 0) showNext();
      else showPrevious();
    }

    gesture.current = { ...initialGesture };
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

  const activeTestimonial = testimonials[activeIndex];

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <article
          className={`dds-testimonial-card dds-testimonial-card--${direction}`}
          key={activeIndex}
          aria-live="polite"
          aria-label={`Отзыв ${activeIndex + 1} из ${testimonials.length}`}
        >
          <blockquote className="dds-testimonial-quote">«{activeTestimonial.quote}»</blockquote>

          <footer className="dds-testimonial-footer">
            <div className="dds-testimonial-author">
              <p className="dds-testimonial-name">{activeTestimonial.name}</p>
              <p className="dds-testimonial-meta">
                {activeTestimonial.position}, {activeTestimonial.company}
              </p>
            </div>
            <p className="dds-testimonial-result">{activeTestimonial.result}</p>
          </footer>
        </article>

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

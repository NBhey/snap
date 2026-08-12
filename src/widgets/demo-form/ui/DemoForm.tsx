import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

type DemoFormValues = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  task: string;
  consent: boolean;
};

const demoBenefits = [
  'Разбор вашей дизайн-системы',
  'Живая генерация страницы и баннера',
  'Ответы по контуру и 152-ФЗ',
] as const;

const wait = (delay: number) => new Promise((resolve) => window.setTimeout(resolve, delay));

export function DemoForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      teamSize: '',
      task: '',
      consent: false,
    },
  });

  const taskValue = useWatch({ control, name: 'task' }) ?? '';

  const submitForm: SubmitHandler<DemoFormValues> = async () => {
    await wait(600);
    setIsSuccess(true);
    toast.success('Заявка отправлена. Свяжемся в течение рабочего дня.', {
      className: 'dds-demo-toast',
      icon: false,
    });
  };

  const restartForm = () => {
    reset();
    setIsSuccess(false);
  };

  return (
    <section id="demo" className="dds-section dds-demo-form dds-reveal is-visible">
      <div className="dds-demo-layout">
        <div className="dds-demo-intro">
          <header className="dds-section__header">
            <span className="dds-demo-form-added">+ Добавлено</span>
            <p className="dds-section__eyebrow">Персональная демонстрация</p>
            <h2 className="dds-section__title">Посмотрите на своей дизайн-системе</h2>
            <p className="dds-section__subtitle">
              Покажем платформу на ваших компонентах и соберём один реальный материал прямо на
              встрече.
            </p>
          </header>

          <ul className="dds-demo-benefits">
            {demoBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className={`dds-demo-card${isSuccess ? ' is-success' : ''}`}>
          {isSuccess ? (
            <div className="dds-demo-success" role="status">
              <span className="dds-demo-success-icon" aria-hidden="true">
                ✓
              </span>
              <h3 className="dds-demo-success-title">Заявка отправлена</h3>
              <p className="dds-demo-success-text">
                Свяжемся в течение рабочего дня. Если срочно — напишите в Telegram.
              </p>
              <button className="dds-demo-submit" type="button" onClick={restartForm}>
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form className="dds-demo-fields" onSubmit={handleSubmit(submitForm)} noValidate>
              <div className="dds-demo-field">
                <label htmlFor="demo-name">Имя</label>
                <input
                  id="demo-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'demo-name-error' : undefined}
                  {...register('name', {
                    required: 'Введите имя',
                    minLength: { value: 2, message: 'Минимум 2 символа' },
                  })}
                />
                {errors.name && (
                  <span className="dds-demo-error" id="demo-name-error" role="alert">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="dds-demo-field">
                <label htmlFor="demo-email">Рабочая почта</label>
                <input
                  id="demo-email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.ru"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'demo-email-error' : undefined}
                  {...register('email', {
                    required: 'Введите рабочую почту',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: 'Проверьте формат почты',
                    },
                  })}
                />
                {errors.email && (
                  <span className="dds-demo-error" id="demo-email-error" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="dds-demo-field">
                <label htmlFor="demo-company">Компания</label>
                <input
                  id="demo-company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Название компании"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'demo-company-error' : undefined}
                  {...register('company', { required: 'Введите название компании' })}
                />
                {errors.company && (
                  <span className="dds-demo-error" id="demo-company-error" role="alert">
                    {errors.company.message}
                  </span>
                )}
              </div>

              <div className="dds-demo-field">
                <label htmlFor="demo-team-size">Размер команды</label>
                <select
                  id="demo-team-size"
                  aria-invalid={Boolean(errors.teamSize)}
                  aria-describedby={errors.teamSize ? 'demo-team-size-error' : undefined}
                  {...register('teamSize', { required: 'Выберите размер команды' })}
                >
                  <option value="" disabled>
                    Выберите вариант
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
                {errors.teamSize && (
                  <span className="dds-demo-error" id="demo-team-size-error" role="alert">
                    {errors.teamSize.message}
                  </span>
                )}
              </div>

              <div className="dds-demo-field dds-demo-field--wide">
                <div className="dds-demo-label-row">
                  <label htmlFor="demo-task">Задача</label>
                  <span className="dds-demo-counter" aria-live="polite">
                    {taskValue.length}/500
                  </span>
                </div>
                <textarea
                  id="demo-task"
                  rows={4}
                  placeholder="Что хотите собрать или ускорить"
                  aria-invalid={Boolean(errors.task)}
                  aria-describedby={errors.task ? 'demo-task-error' : undefined}
                  {...register('task', {
                    maxLength: { value: 500, message: 'Не больше 500 символов' },
                  })}
                />
                {errors.task && (
                  <span className="dds-demo-error" id="demo-task-error" role="alert">
                    {errors.task.message}
                  </span>
                )}
              </div>

              <div className="dds-demo-consent dds-demo-field--wide">
                <label htmlFor="demo-consent">
                  <input
                    id="demo-consent"
                    type="checkbox"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'demo-consent-error' : undefined}
                    {...register('consent', { required: 'Нужно согласие на обработку данных' })}
                  />
                  <span>
                    Я согласен на обработку персональных данных и получение ответа по заявке
                  </span>
                </label>
                {errors.consent && (
                  <span className="dds-demo-error" id="demo-consent-error" role="alert">
                    {errors.consent.message}
                  </span>
                )}
              </div>

              <button
                className="dds-demo-submit dds-demo-field--wide"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="dds-demo-spinner" aria-hidden="true" />
                    Отправляем…
                  </>
                ) : (
                  'Записаться на демо'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

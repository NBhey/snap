const onboardingSteps = [
  {
    number: '01',
    title: 'Аудит бренда',
    description:
      'Сканируем сайт, макеты и гайдлайны, собираем черновик дизайн-системы. От вас — доступы и один созвон.',
    duration: '1 день',
  },
  {
    number: '02',
    title: 'Настройка правил',
    description:
      'Фиксируем компоненты, шрифты, сетку и композиционные пресеты для изображений. Проверяем на трёх реальных материалах.',
    duration: '3–5 дней',
  },
  {
    number: '03',
    title: 'Пилот на одной команде',
    description:
      'Одна команда ведёт настоящую кампанию целиком в платформе. Замеряем time-to-market и количество правок.',
    duration: '2 недели',
  },
  {
    number: '04',
    title: 'Масштабирование',
    description:
      'Подключаем SSO и роли, интеграции с CI/CD, обучаем остальные команды.',
    duration: 'Дальше — по вашему графику',
  },
] as const;

export function Onboarding() {
  return (
    <section
      id="onboarding"
      className="dds-section dds-onboarding dds-reveal is-visible"
    >
      <header className="dds-section__header">
        <span className="dds-onboarding-added">+ Добавлено</span>
        <p className="dds-section__eyebrow">Этапы внедрения</p>
        <h2 className="dds-section__title">От аудита бренда до масштабирования</h2>
        <p className="dds-section__subtitle">
          Начинаем с реальных материалов одной команды, проверяем результат и только потом
          масштабируем платформу на всю компанию.
        </p>
      </header>

      <ol className="dds-onboarding-list">
        {onboardingSteps.map(({ number, title, description, duration }) => (
          <li className="dds-onboarding-step" key={number}>
            <span className="dds-onboarding-marker" aria-hidden="true">
              <span className="dds-onboarding-marker-halo" />
              <span className="dds-onboarding-marker-core" />
            </span>

            <article className="dds-onboarding-card">
              <span className="dds-onboarding-number">{number}</span>
              <h3 className="dds-onboarding-title">{title}</h3>
              <p className="dds-onboarding-description">{description}</p>
              <p className="dds-onboarding-duration">{duration}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

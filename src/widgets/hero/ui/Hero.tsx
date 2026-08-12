import { heroScreenshot } from '../assets';

export function Hero() {
  return (
    <section id="hero" className="hero dds-app-preview">
      <div className="dds-app-preview-card">
        <div className="dds-app-preview-inner">
          <div className="dds-app-preview-intro">
            <div className="dds-app-preview-heading">
              <h1 className="dds-app-preview-title">
                Платформа, где все создается в рамках вашего бренда и дизайн-системы
              </h1>
              <p className="dds-app-preview-subtitle">
                Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать
                профессиональные материалы в фирменном стиле за минуты, а не дни.
              </p>
            </div>
            <a className="dds-app-preview-cta" href="#demo">
              <span className="dds-app-preview-cta-text">Начать сейчас</span>
            </a>
          </div>
          <div className="dds-app-preview-media">
            <img
              className="dds-app-preview-shot"
              data-cms-image="hero.app-screenshot"
              src={heroScreenshot}
              alt="Интерфейс платформы снэпбилд"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


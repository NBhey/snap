import { ctaDust } from '../assets';

export function Cta() {
  return (
    <section
      id="cta"
      className="cta dds-cta dds-launch"
      data-section-id="019f8703-47cb-76d5-a38e-b7781f231618"
    >
      <div className="dds-launch-dust" aria-hidden="true">
        <img className="dds-launch-dust--d" src={ctaDust.desktop} alt="" />
        <img className="dds-launch-dust--t" src={ctaDust.tablet} alt="" />
        <img className="dds-launch-dust--m" src={ctaDust.mobile} alt="" />
      </div>
      <div className="dds-launch-shine" aria-hidden="true" />
      <div className="dds-launch-content">
        <div className="dds-launch-intro">
          <h2 className="dds-launch-title" data-cms-key="cta.launch.title">
            <span className="dds-launch-title-desktop">
              {'Профессиональные материалы в\u00a0фирменном стиле'}<br />{'за\u00a0минуты, а\u00a0не\u00a0дни'}
            </span>
            <span className="dds-launch-title-responsive">
              {'Профессиональные материалы в\u00a0фирменном стиле за\u00a0минуты, а\u00a0не\u00a0дни'}
            </span>
          </h2>
          <p className="dds-launch-subtitle" data-cms-key="cta.launch.subtitle">
            Выстройте маркетинг в единый поток — от первой идеи до финального взаимодействия с клиентом.
          </p>
        </div>
        <div className="dds-launch-actions">
          <a className="dds-launch-btn" href="#demo">
            <span className="dds-launch-btn-text">Начать сейчас</span>
          </a>
        </div>
      </div>
    </section>
  );
}

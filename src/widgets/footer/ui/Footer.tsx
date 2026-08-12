import { snapbuildLogo } from '@/shared/assets/brand';

const columns = [
  {
    title: 'Навигация',
    links: [
      ['Продукт', '#process'],
      ['Возможности', '#use-cases'],
      ['Преимущества', '#compare'],
      ['Безопасность', '#features'],
      ['Роадмап', '#roadmap'],
      ['Частые вопросы', '#faq'],
    ],
  },
  {
    title: 'Документация',
    links: [
      ['Политика конфиденциальности', 'https://snapbuild.ru/privacy'],
      ['FAQ', '#faq'],
    ],
  },
  {
    title: 'Контакты',
    links: [
      ['Запросить демо', '#demo'],
      ['Telegram', 'https://t.me/snapbuild'],
      ['hey@snapbuild.ru', 'mailto:hey@snapbuild.ru'],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="footer dds-footer">
      <div className="dds-footer-top">
        <div className="dds-footer-brand">
          <a className="dds-footer-logo" href="#hero" aria-label="снэпбилд — на главную">
            <img src={snapbuildLogo} alt="снэпбилд" width="153" height="22" />
          </a>
          <p className="dds-footer-tagline">
            Платформа, где все создается в рамках вашего бренда и дизайн-системы
          </p>
        </div>
        <nav className="dds-footer-links" aria-label="Подвал">
          {columns.map((column) => (
            <div className="dds-footer-col" key={column.title}>
              <p className="dds-footer-col-title">{column.title}</p>
              <div className="dds-footer-list">
                {column.links.map(([label, href]) => (
                  <a className="dds-footer-link" href={href} key={label}>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="dds-footer-legal">
        <p className="dds-footer-copyright">© Сгенерировано в Снэпбилде. Все права защищены.</p>
        <a className="dds-footer-email" href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
      </div>
    </footer>
  );
}


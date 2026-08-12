import { useEffect, useState } from 'react';

import { snapbuildLogo } from '@/shared/assets/brand';

const navigation = [
  ['Продукт', '#process'],
  ['Возможности', '#use-cases'],
  ['Безопасность', '#features'],
  ['FAQ', '#faq'],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dds-menu-open', menuOpen);

    return () => document.documentElement.classList.remove('dds-menu-open');
  }, [menuOpen]);

  return (
    <section
      id="header"
      className={`header dds-header dds-main${scrolled ? ' is-scrolled' : ''}`}
      data-section-id="019f8703-47cb-75b5-a38e-b7781ba182e2"
    >
      <input
        className="dds-main-toggle"
        id="dds-main-toggle"
        type="checkbox"
        checked={menuOpen}
        onChange={(event) => setMenuOpen(event.target.checked)}
        aria-hidden="true"
      />
      <div className="dds-main-bar">
        <a className="dds-main-logo" href="#hero" aria-label="снэпбилд — на главную">
          <img src={snapbuildLogo} alt="снэпбилд" width="153" height="22" />
        </a>
        <nav className="dds-main-nav" aria-label="Основная навигация">
          {navigation.map(([label, href]) => (
            <a className="dds-main-link" key={href} href={href}>
              <span data-cms-key={`header.nav.${label}`}>{label}</span>
            </a>
          ))}
        </nav>
        <div className="dds-main-actions">
          <a className="dds-btn dds-btn--l dds-btn--secondary dds-main-demo" href="#demo">
            <span data-cms-key="header.cta.demo">Начать сейчас</span>
          </a>
          <label
            className="dds-main-burger"
            htmlFor="dds-main-toggle"
            role="button"
            tabIndex={0}
            aria-controls="dds-main-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span className="dds-main-burger-icon" />
          </label>
        </div>
      </div>
      <nav className="dds-main-menu" id="dds-main-menu" aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
        {navigation.map(([label, href]) => (
          <a className="dds-main-menu-link" key={href} href={href} onClick={() => setMenuOpen(false)}>
            <span>{label}</span>
          </a>
        ))}
        <a className="dds-btn dds-btn--l dds-btn--secondary" href="#demo" onClick={() => setMenuOpen(false)}>
          <span>Начать сейчас</span>
        </a>
      </nav>
    </section>
  );
}

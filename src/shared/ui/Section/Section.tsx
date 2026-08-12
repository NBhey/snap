import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  ...props
}: SectionProps) {
  const hasHeader = eyebrow || title || subtitle;

  return (
    <section className={`dds-section ${className}`.trim()} {...props}>
      {hasHeader && (
        <header className="dds-section__header">
          {eyebrow && <p className="dds-section__eyebrow">{eyebrow}</p>}
          {title && <h2 className="dds-section__title">{title}</h2>}
          {subtitle && <p className="dds-section__subtitle">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}


import { Section, WidgetPlaceholder } from '@/shared/ui';

export function DemoForm() {
  return (
    <Section
      id="demo"
      className="dds-demo-form"
      eyebrow="Персональная демонстрация"
      title="Посмотрите на своей дизайн-системе"
      subtitle="Покажем платформу на ваших компонентах и соберём один реальный материал прямо на встрече."
    >
      <WidgetPlaceholder name="demo-form" description="Две колонки: преимущества демо и форма заявки" />
    </Section>
  );
}


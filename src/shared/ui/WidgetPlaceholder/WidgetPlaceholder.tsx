type WidgetPlaceholderProps = {
  name: string;
  description: string;
};

export function WidgetPlaceholder({ name, description }: WidgetPlaceholderProps) {
  return (
    <div className="dds-placeholder" aria-label={`Каркас секции ${name}`}>
      <span>{description}</span>
    </div>
  );
}


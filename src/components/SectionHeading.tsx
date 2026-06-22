interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`relative mb-14 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`tagline mb-4 ${light ? '!text-orange-light/70' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-3xl font-medium leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-green-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-white/60' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

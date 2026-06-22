interface PageHeroProps {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ number, eyebrow, title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden px-6 pb-16 pt-28 md:pb-20 md:pt-36 ${
        dark ? 'bg-green-dark text-white mesh-hero' : 'mesh-hero'
      }`}
    >
      <span
        className={`pointer-events-none absolute -right-4 top-16 select-none font-display text-[10rem] font-light leading-none md:text-[14rem] ${
          dark ? 'text-white/[0.03]' : 'text-green-dark/[0.04]'
        }`}
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative mx-auto max-w-6xl">
        <p className={`tagline ${dark ? '!text-orange-light/80' : ''}`}>{eyebrow}</p>
        <h1
          className={`mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] md:text-6xl lg:text-7xl ${
            dark ? 'text-white' : 'text-green-dark'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

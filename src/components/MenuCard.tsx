import { formatPrice, type MenuItem } from '../data/menu';
import { getMenuItemImage } from '../data/menuImages';

interface MenuCardProps {
  item: MenuItem;
  category?: string;
  compact?: boolean;
  featured?: boolean;
}

export default function MenuCard({ item, category, compact = false, featured = false }: MenuCardProps) {
  const imageSrc = getMenuItemImage(item.name);

  return (
    <article
      className={`card-tilt group relative overflow-hidden rounded-3xl border border-green-dark/6 bg-paper transition-shadow hover:shadow-[0_20px_50px_rgba(26,48,38,0.1)] ${
        featured ? 'p-0' : compact ? 'p-5' : 'p-7'
      }`}
    >
      {featured && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={imageSrc}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent" />
          <span className="absolute bottom-4 left-4 font-display text-lg text-white">{item.name}</span>
          <span className="absolute bottom-4 right-4 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
            {formatPrice(item)}
          </span>
        </div>
      )}

      <div className={featured ? 'p-5' : ''}>
        {!featured && (
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className={`font-display font-medium text-green-dark ${compact ? 'text-base' : 'text-xl'}`}>
              {item.name}
            </h3>
            <span className="shrink-0 rounded-full bg-orange/10 px-3 py-1 text-sm font-bold text-orange-dark">
              {formatPrice(item)}
            </span>
          </div>
        )}
        {category && !featured && (
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-green">
            {category}
          </p>
        )}
        <p className={`text-muted leading-relaxed ${compact ? 'text-sm' : 'text-sm md:text-base'}`}>
          {item.description}
        </p>
      </div>

      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange/5 transition-transform duration-500 group-hover:scale-150"
        aria-hidden="true"
      />
    </article>
  );
}

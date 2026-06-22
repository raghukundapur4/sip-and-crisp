import { site } from '../data/site';

const items = [
  site.tagline,
  site.city,
  'Fresh juices',
  'Milkshakes & chocolates',
  'Pizzas & sandwiches',
  'Made to order',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-green-dark/8 bg-green-dark py-3.5" aria-hidden="true">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((text, i) => (
          <span key={i} className="flex items-center gap-12 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            {text}
            <span className="h-1 w-1 rounded-full bg-orange-light" />
          </span>
        ))}
      </div>
    </div>
  );
}

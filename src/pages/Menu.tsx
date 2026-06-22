import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import MenuCard from '../components/MenuCard';
import FadeIn from '../components/FadeIn';
import { site } from '../data/site';
import { menuCategories, menuHours } from '../data/menu';

export default function Menu() {
  return (
    <>
      <SEO
        title={`Menu | ${site.name}`}
        description={`${site.menuOfferings} View our full menu with prices.`}
        path="/menu"
      />

      <PageHero
        number="M"
        eyebrow="What we serve"
        title="Every pour, every bite"
        subtitle={`Made fresh when you order. Open ${menuHours}. All prices in INR.`}
      />

      <nav
        className="sticky top-[72px] z-30 border-b border-green-dark/6 bg-cream/90 backdrop-blur-xl"
        aria-label="Menu categories"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-4">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-green-dark/10 bg-paper px-5 py-2 text-xs font-semibold uppercase tracking-wider text-green-dark transition-all hover:border-orange hover:bg-orange/5 hover:text-orange-dark"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {menuCategories.map((category, idx) => (
        <SectionShell key={category.id} number={String(idx + 1).padStart(2, '0')} alt={idx % 2 === 1}>
          <div id={category.id} className="scroll-mt-32">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="tagline">{category.name}</p>
                <h2 className="mt-2 font-display text-3xl text-green-dark md:text-4xl">
                  {category.items.length} items
                </h2>
                {category.note && (
                  <p className="mt-2 text-sm text-muted">{category.note}</p>
                )}
              </div>
              <span className="hidden font-display text-6xl text-green-dark/5 md:block" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {category.items.map((item) => (
                <FadeIn key={item.name}>
                  <MenuCard item={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        </SectionShell>
      ))}
    </>
  );
}

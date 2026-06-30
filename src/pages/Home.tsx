import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock3, MapPin, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import SectionShell from '../components/SectionShell';
import MenuCard from '../components/MenuCard';
import ReviewsBlock from '../components/ReviewsBlock';
import FadeIn from '../components/FadeIn';
import { publicAsset } from '../lib/publicAsset';
import { site } from '../data/site';
import { getFeaturedItems } from '../data/menu';
import { primaryLocation } from '../data/locations';

const highlights = [
  { icon: Sparkles, title: 'Freshly made', text: 'Pressed, blended and prepared after you order.' },
  { icon: ShieldCheck, title: 'Clean kitchen', text: 'Quality ingredients and careful preparation.' },
  { icon: Zap, title: 'Quick service', text: 'Great food and drinks without the long wait.' },
];

export default function Home() {
  const featured = getFeaturedItems(6);
  const heroItem = featured[0];
  const gridItems = featured.slice(1, 5);

  return (
    <>
      <SEO
        title={`${site.name} — Fresh Juices, Milkshakes & Pizzas in BTM Layout`}
        description={`${site.taglineShort} Visit Sip & Crisp in BTM Layout, Bangalore.`}
        path="/"
      />

      <section className="relative isolate overflow-hidden bg-[#fffaf3] px-6 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_85%_20%,rgba(255,173,72,.32),transparent_32%),radial-gradient(circle_at_8%_30%,rgba(78,138,83,.18),transparent_28%)]" />
        <div className="absolute -right-20 top-32 -z-10 h-72 w-72 rounded-full border border-orange/20 bg-orange/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-green-light/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-green-dark shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-orange" /> {site.city}
            </div>
            <h1 className="mt-7 max-w-2xl font-display text-5xl font-medium leading-[.94] text-green-dark md:text-7xl lg:text-8xl">
              Your everyday stop for <span className="text-orange">fresh</span> sips and satisfying bites.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">{site.heroDescription}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                View our menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/locations" className="btn-secondary">Visit Sip & Crisp</Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-muted">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-orange text-orange" /> Loved by Bangalore foodies</div>
              <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-green" /> Quick pickup friendly</div>
            </div>
          </FadeIn>

          <FadeIn className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_28px_70px_rgba(42,69,47,.18)]">
              <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=90" alt="Colourful fresh drinks from Sip & Crisp" className="h-[29rem] w-full rounded-[2rem] object-cover md:h-[34rem]" />
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/50 bg-white/90 p-5 backdrop-blur md:right-auto md:w-72">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-orange">Made to order</p>
                <p className="mt-2 font-display text-2xl leading-tight text-green-dark">Fresh flavours for every mood.</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden rounded-3xl bg-green-dark px-6 py-5 text-white shadow-xl md:block">
              <p className="text-3xl font-display">Sip. Bite. Repeat.</p>
              <p className="mt-1 text-sm text-white/65">Juices · shakes · pizzas · sandwiches</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-green-dark/10 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-xs font-semibold uppercase tracking-[.16em] text-green-dark/70 md:justify-between">
          <span>Fresh Juices</span><span>Milkshakes</span><span>Chocolates</span><span>Pizzas</span><span>Sandwiches</span>
        </div>
      </section>

      <SectionShell number="01">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <SectionHeading eyebrow="Why people return" title="Simple food, done with care." subtitle="A relaxed, welcoming stop for a quick drink, a comfort-food break, or an easy catch-up." />
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <FadeIn key={title} className={index === 1 ? 'sm:-translate-y-5' : ''}>
                <article className="h-full rounded-3xl border border-green-dark/10 bg-[#fffaf3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange/15"><Icon className="h-5 w-5 text-orange" /></div>
                  <h3 className="mt-5 font-display text-xl text-green-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell number="02" alt>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Crowd favourites" title="Pick your next favourite." subtitle={site.menuOfferings} />
          <Link to="/menu" className="btn-ghost mb-14 shrink-0 self-start md:self-auto">Explore full menu <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {heroItem && <div className="md:col-span-2 md:row-span-2"><MenuCard item={heroItem} category={heroItem.category} featured /></div>}
          {gridItems.map((item) => <MenuCard key={item.name} item={item} category={item.category} compact />)}
        </div>
      </SectionShell>

      <SectionShell number="03">
        <SectionHeading eyebrow="Real reviews" title="A local favourite in the making." subtitle="Drop in for your usual or discover something new." />
        <ReviewsBlock variant="preview" />
      </SectionShell>

      <section className="relative overflow-hidden bg-green-dark px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${publicAsset('/images/logo.png')})`, backgroundPosition: '110% 120%', backgroundRepeat: 'no-repeat', backgroundSize: '22rem' }} />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-orange-light">Find us today</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">Close by. Worth the stop.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{primaryLocation.address}<br /><span className="text-white/45">{primaryLocation.landmark}</span></p>
            <Link to="/locations" className="btn-primary mt-9">Get directions <ArrowUpRight className="h-4 w-4" /></Link>
          </FadeIn>
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl">
              <iframe title="Sip & Crisp location map" src={primaryLocation.mapEmbedUrl} className="h-72 w-full rounded-[1.55rem] border-0 grayscale-[25%] md:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

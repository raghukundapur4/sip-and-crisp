import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Droplets, ShieldCheck, Zap, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import SectionShell from '../components/SectionShell';
import MenuCard from '../components/MenuCard';
import ReviewsBlock from '../components/ReviewsBlock';
import FadeIn from '../components/FadeIn';
import Marquee from '../components/Marquee';
import { publicAsset } from '../lib/publicAsset';
import { site } from '../data/site';
import { getFeaturedItems } from '../data/menu';
import { primaryLocation } from '../data/locations';

const whyUs = [
  {
    icon: Droplets,
    title: 'Always Fresh',
    text: 'Juices pressed to order. Shakes blended fresh. Nothing waits on a shelf.',
    accent: 'from-orange-light/20 to-orange/5',
  },
  {
    icon: ShieldCheck,
    title: 'Spotless',
    text: 'Gloves on, counters clean, ingredients sealed — hygiene you can see.',
    accent: 'from-green-light/20 to-green/5',
  },
  {
    icon: Zap,
    title: 'Fast',
    text: 'Your sip and bite ready in minutes. Quality without the wait.',
    accent: 'from-orange-light/15 to-green-light/10',
  },
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

      {/* Hero — asymmetric split */}
      <section className="mesh-hero relative min-h-[90vh] overflow-hidden px-6 pb-20 pt-32 md:pt-36">
        <div
          className="blob pointer-events-none absolute -right-32 top-20 h-96 w-96 bg-orange/10"
          aria-hidden="true"
        />
        <div
          className="blob pointer-events-none absolute -left-20 bottom-20 h-72 w-72 bg-green-light/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="tagline">{site.city}</p>
              <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] md:text-7xl lg:text-8xl">
                <span className="text-gradient-sip">Sip</span>
                <span className="text-green-dark"> & </span>
                <span className="text-gradient-crisp">Crisp</span>
              </h1>
              <p className="tagline mt-8">{site.tagline}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {site.heroDescription}
              </p>
            </FadeIn>
            <FadeIn className="mt-10 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                Explore Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/locations" className="btn-secondary">
                Find Us
              </Link>
            </FadeIn>
          </div>

          <FadeIn className="relative">
            <div className="float-slow relative mx-auto max-w-md lg:max-w-none">
              <img
                src={publicAsset('/images/logo.png')}
                alt="Sip & Crisp"
                className="relative z-10 mx-auto h-48 w-auto object-contain drop-shadow-2xl md:h-56"
              />
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80"
                alt=""
                className="absolute -left-4 top-8 h-28 w-28 -rotate-12 rounded-3xl object-cover shadow-xl md:-left-12 md:h-36 md:w-36"
              />
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                alt=""
                className="absolute -right-2 bottom-4 h-24 w-24 rotate-6 rounded-3xl object-cover shadow-xl md:-right-8 md:h-32 md:w-32"
              />
              <div
                className="blob absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-orange/15 to-green-light/15"
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Marquee />

      {/* Why Us — bento */}
      <SectionShell number="01">
        <SectionHeading
          eyebrow="The Experience"
          title="More than a juice shop"
          subtitle="We built Sip & Crisp for people who want fresh drinks, quick bites, and a space that feels considered."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, text, accent }, i) => (
            <article
              key={title}
              className={`glass-card rounded-3xl p-8 ${i === 1 ? 'md:-translate-y-4' : ''}`}
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent}`}
              >
                <Icon className="h-6 w-6 text-green-dark" />
              </div>
              <h3 className="font-display text-xl text-green-dark">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Menu bento */}
      <SectionShell number="02" alt>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Menu"
            title="Favourites worth ordering"
            subtitle={site.menuOfferings}
          />
          <Link to="/menu" className="btn-ghost mb-14 shrink-0 self-start md:self-auto">
            Full menu <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {heroItem && (
            <div className="md:col-span-2 md:row-span-2">
              <MenuCard item={heroItem} category={heroItem.category} featured />
            </div>
          )}
          {gridItems.map((item) => (
            <MenuCard key={item.name} item={item} category={item.category} compact />
          ))}
        </div>
      </SectionShell>

      {/* Reviews — featured + scroll */}
      <SectionShell number="03">
        <SectionHeading eyebrow="Voices" title="What Bangalore is saying" />
        <ReviewsBlock variant="preview" />
      </SectionShell>

      {/* Location — immersive */}
      <section className="relative overflow-hidden bg-green-dark px-6 py-24 text-white md:py-32">
        <div
          className="blob pointer-events-none absolute -left-40 top-0 h-80 w-80 bg-orange/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="tagline !text-orange-light/70">Visit Us</p>
              <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
                {primaryLocation.name}
              </h2>
              <p className="mt-6 flex items-start gap-3 text-white/60">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange-light" />
                <span>
                  {primaryLocation.address}
                  <br />
                  <span className="text-white/40">{primaryLocation.landmark}</span>
                </span>
              </p>
              <Link to="/locations" className="btn-primary mt-10">
                Get directions <ArrowUpRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <FadeIn>
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <iframe
                  title="Sip & Crisp location map"
                  src={primaryLocation.mapEmbedUrl}
                  className="h-72 w-full border-0 grayscale-[30%] contrast-[1.1] md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

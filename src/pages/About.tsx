import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import FadeIn from '../components/FadeIn';
import { site } from '../data/site';
import { publicAsset } from '../lib/publicAsset';

const values = [
  {
    title: 'Fresh',
    text: 'Every juice and shake made to order. Every pizza and sandwich prepared fresh — never reheated, never stale.',
    num: '01',
  },
  {
    title: 'Clean',
    text: 'Hygiene is non-negotiable. Gloves on, surfaces sanitised, ingredients stored sealed and labelled.',
    num: '02',
  },
  {
    title: 'Fast',
    text: 'Great food shouldn\'t mean a long wait. Our kitchen gets your order ready in minutes.',
    num: '03',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title={`About | ${site.name}`}
        description={`The story behind ${site.name} — ${site.taglineShort}`}
        path="/about"
      />

      <PageHero
        number="A"
        eyebrow="Our story"
        title="Born in BTM Layout"
        subtitle="A simple idea: pair the best fresh juices and milkshakes in Bangalore with pizzas, sandwiches, and house specials — in a space that feels as good as the food tastes."
      />

      <SectionShell number="01">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sip & Crisp opened in {site.foundedYear} with a simple idea — great juice shops that
              felt rushed and messy, and great snack spots with nothing fresh to drink. We wanted
              both, done properly on 16th Main Road in BTM Layout.
            </p>
            <p>
              Our menu spans fresh juices, thick milkshakes, chocolate shakes, seasonal mango
              specials, combination juices, grilled sandwiches, pizzas, refreshments, and house
              favourites like Berry Blast and Muskmelon Kulfi.
            </p>
            <p className="font-display text-xl text-green-dark">
              We&apos;re proud to call BTM Layout home. And we&apos;re just getting started.
            </p>
          </div>
          <FadeIn>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Sip & Crisp café interior"
                className="rounded-3xl shadow-2xl"
              />
              <div className="glass-card absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 md:-left-10">
                <p className="font-display text-3xl text-orange">{site.foundedYear}</p>
                <p className="text-xs uppercase tracking-widest text-muted">Est. BTM Layout</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell number="02" alt>
        <SectionHeading
          eyebrow="Our Promise"
          title="Three things we never compromise"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, text, num }) => (
            <article key={title} className="group relative overflow-hidden rounded-3xl bg-green-dark p-8 text-white">
              <span className="font-display text-6xl text-white/10" aria-hidden="true">{num}</span>
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange/10 transition-transform duration-500 group-hover:scale-150" />
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell number="03">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <img
              src={publicAsset('/images/founder.jpg')}
              alt={site.ownerName}
              className="mx-auto aspect-[3/4] w-full max-w-sm rounded-3xl object-cover object-top shadow-xl"
            />
          </FadeIn>
          <div className="lg:col-span-3">
            <p className="tagline">From the founder</p>
            <h2 className="mt-4 font-display text-4xl text-green-dark md:text-5xl">
              Built with passion
            </h2>
            <blockquote className="mt-8 border-l-2 border-orange pl-6 font-display text-xl leading-relaxed text-green-dark md:text-2xl">
              &ldquo;We opened Sip & Crisp in {site.foundedYear} because Bangalore deserves a juice
              and food shop that feels premium — not pretentious. Every recipe, every ingredient,
              every detail in our shop is intentional.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted">
              — {site.ownerName}, Founder
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

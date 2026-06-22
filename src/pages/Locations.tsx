import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import FadeIn from '../components/FadeIn';
import { site } from '../data/site';
import { locations } from '../data/locations';

export default function Locations() {
  return (
    <>
      <SEO
        title={`Locations | ${site.name}`}
        description={`Visit ${site.name} in BTM Layout, Bangalore. Hours, directions, and franchise opportunities.`}
        path="/locations"
      />

      <PageHero
        number="L"
        eyebrow="Find us"
        title="Our locations"
        subtitle="Currently serving BTM Layout — with more coming soon."
      />

      <SectionShell number="01">
        <div className="space-y-10">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="overflow-hidden rounded-3xl border border-green-dark/6 bg-paper shadow-[0_20px_60px_rgba(26,48,38,0.06)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <p className="tagline">{loc.landmark}</p>
                  <h2 className="mt-3 font-display text-3xl text-green-dark">{loc.name}</h2>
                  <ul className="mt-8 space-y-5 text-muted">
                    <li className="flex items-start gap-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                      {loc.address}
                    </li>
                    <li className="flex items-center gap-4">
                      <Phone className="h-5 w-5 shrink-0 text-orange" />
                      <a href={`tel:+91${loc.phone}`} className="hover:text-orange-dark">
                        {site.phoneDisplay}
                      </a>
                    </li>
                    {loc.hours.map((h) => (
                      <li key={h.day} className="flex items-center gap-4">
                        <Clock className="h-5 w-5 shrink-0 text-orange" />
                        {h.day}: {h.open} – {h.close}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-8"
                  >
                    Open in Google Maps <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="min-h-72">
                  <iframe
                    title={`Map of ${loc.name}`}
                    src={loc.mapEmbedUrl}
                    className="h-full min-h-72 w-full border-0 grayscale-[20%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-green-dark px-6 py-24 text-white md:py-32">
        <div className="blob absolute -right-20 top-10 h-64 w-64 bg-orange/10" aria-hidden="true" />
        <FadeIn className="relative mx-auto max-w-3xl text-center">
          <p className="tagline !text-orange-light/70">Franchise</p>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            Bring Sip & Crisp to your neighbourhood
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/60 leading-relaxed">
            We&apos;re building a brand that scales — same quality, same standards, new locations.
            Passionate about food and hospitality? Let&apos;s talk.
          </p>
          <Link to="/contact" className="btn-primary mt-10">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}

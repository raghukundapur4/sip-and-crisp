import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { navLinks, site } from '../data/site';
import { primaryLocation } from '../data/locations';
import Marquee from './Marquee';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-white">
      <Marquee />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="Sip & Crisp"
                className="h-20 w-auto rounded-2xl bg-white object-contain p-2"
              />
            </Link>
            <p className="tagline mt-6 !text-white/40">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              A neighbourhood favourite in {site.city}. Fresh juices, milkshakes, and hot plates — served with care.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 !text-xs"
            >
              Chat on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:pl-12">
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-orange-light">
                Explore
              </h3>
              <ul className="space-y-3">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-orange-light">
                Visit
              </h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-light" />
                  <span>{primaryLocation.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-orange-light" />
                  <a href={`tel:+91${site.phone}`} className="hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-orange-light" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6">
        <p className="text-center text-xs tracking-wider text-white/30">
          &copy; {currentYear} {site.name} &middot; BTM Layout, Bangalore
        </p>
      </div>
    </footer>
  );
}

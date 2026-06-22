import { MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import FadeIn from '../components/FadeIn';
import { site } from '../data/site';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Sip & Crisp! I would like to get in touch.')}`;

  return (
    <>
      <SEO
        title={`Contact | ${site.name}`}
        description={`Chat with ${site.name} on WhatsApp. ${site.phoneDisplay}`}
        path="/contact"
      />

      <PageHero
        number="C"
        eyebrow="Get in touch"
        title="Chat with us on WhatsApp"
        subtitle="Questions, orders, feedback, or franchise enquiries — we're just a message away."
      />

      <SectionShell number="01">
        <FadeIn className="mx-auto max-w-lg text-center">
          <div className="glass-card rounded-3xl p-10 md:p-14">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10">
              <MessageCircle className="h-8 w-8 text-[#25D366]" fill="currentColor" />
            </div>
            <h2 className="font-display text-2xl text-green-dark md:text-3xl">
              Message us directly
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tap below to open WhatsApp and chat with our team at{' '}
              <span className="font-semibold text-green-dark">{site.phoneDisplay}</span>.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </SectionShell>
    </>
  );
}

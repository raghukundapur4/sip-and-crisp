import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import GalleryGrid from '../components/GalleryGrid';
import { site } from '../data/site';

export default function Gallery() {
  return (
    <>
      <SEO
        title={`Gallery | ${site.name}`}
        description={`Photos of ${site.menuOfferings.toLowerCase()} at ${site.name}, BTM Layout, Bangalore.`}
        path="/gallery"
      />

      <PageHero
        number="G"
        eyebrow="Inside the shop"
        title="A feast for the eyes"
        subtitle="Juices, milkshakes, pizzas, sandwiches, and the flavours we serve every day."
      />

      <SectionShell number="01">
        <GalleryGrid />
      </SectionShell>
    </>
  );
}

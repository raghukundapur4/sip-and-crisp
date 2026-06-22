import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionShell from '../components/SectionShell';
import ReviewsBlock from '../components/ReviewsBlock';
import { site } from '../data/site';

export default function Reviews() {
  return (
    <>
      <SEO
        title={`Reviews | ${site.name}`}
        description={`Read customer reviews for ${site.name} in BTM Layout, Bangalore.`}
        path="/reviews"
      />

      <PageHero
        number="R"
        eyebrow="Testimonials"
        title="Loved by our guests"
        subtitle="Real feedback from people who've visited us in BTM Layout."
      />

      <SectionShell number="01">
        <ReviewsBlock variant="full" />
      </SectionShell>
    </>
  );
}

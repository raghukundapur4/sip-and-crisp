import { Helmet } from 'react-helmet-async';
import { site } from '../data/site';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = '' }: SEOProps) {
  const url = `${site.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

import { siteUrl, type Lang } from '@data/consts';

export const components = {
  items: [
    {
      url: '/playground/header',
      text: 'Header',
      img: 'img/playground/gif/header.gif',
    },
    {
      url: '/playground/carousel',
      text: 'Carrusel',
      img: 'img/playground/gif/carousel.gif',
    },
    {
      url: '/playground/accordion',
      text: 'Acordeón',
      img: 'img/playground/gif/accordion.gif',
    },
    {
      url: '/playground/marquee',
      text: 'Marquee',
      img: 'img/playground/gif/marquee.gif',
    },
    {
      url: '/playground/link-card',
      text: 'Enlace con imágenes',
      img: 'img/playground/gif/linkcard.gif',
    },
  ],
};

export const pageTitle =
  'Laboratorio | Jairo Cereceda Berciano - Portfolio de UI/UX';

export const pageDescription =
  'Explora mi laboratorio de experimentos y componentes UI, donde muestro diferentes técnicas, ideas y capacidades de diseño y desarrollo web.';

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Laboratorio | Jairo Cereceda Berciano - Portfolio de UI/UX',
  description:
    'Explora mi laboratorio de experimentos y componentes UI, donde muestro diferentes técnicas, ideas y capacidades de diseño y desarrollo web.',
  url: `${siteUrl}/laboratorio`,
  inLanguage: 'es',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
  },
  about: {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Jairo Cereceda Berciano',
  },
};

export interface PlaygroundSchemaProps {
  title: string;
  description: string;
  slug: string;
  lang: Lang;
}

export function getPlaygroundItemSchema({
  title,
  description,
  slug,
  lang,
}: PlaygroundSchemaProps) {
  const pagePath = lang === 'en' ? `/en/${slug}` : `/${slug}`;
  const canonicalUrl = new URL(pagePath, siteUrl).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description,
    url: canonicalUrl,
    inLanguage: lang === 'en' ? 'en-US' : 'es-ES',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Person',
      name: 'Jairo Cereceda Berciano',
      url: siteUrl,
    },
  };
}

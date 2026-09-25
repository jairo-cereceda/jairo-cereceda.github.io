import { siteUrl } from '@data/consts';

export const components = {
  items: [
    {
      url: '/playground/header',
      text: 'Header',
      img: 'img/playground/gif/header.gif',
    },
    {
      url: '/playground/carousel',
      text: 'Carousel',
      img: 'img/playground/gif/carousel.gif',
    },
    {
      url: '/playground/accordion',
      text: 'Accordion',
      img: 'img/playground/gif/accordion.gif',
    },
    {
      url: '/playground/marquee',
      text: 'Marquee',
      img: 'img/playground/gif/marquee.gif',
    },
    {
      url: '/playground/link-card',
      text: 'Link with pictures',
      img: 'img/playground/gif/linkcard.gif',
    },
  ],
};

export const pageTitle =
  'Playground | Jairo Cereceda Berciano - UI/UX Portfolio';

export const pageDescription =
  'Explore my playground of UI experiments and components, showcasing different techniques, ideas, and skills in web design and development.';

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Playground | Jairo Cereceda Berciano - UI/UX Portfolio',
  description:
    'Explore my playground of UI experiments and components, showcasing different techniques, ideas, and skills in web design and development.',
  url: `${siteUrl}/en/playground`,
  inLanguage: 'en',
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

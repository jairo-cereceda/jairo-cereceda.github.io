import { siteUrl } from '@data/consts';

export const techs = {
  items: [
    {
      img: 'img/techs/astro.png',
      text: 'Astro',
      description:
        'Modern web framework for building fast, accessible, and optimized websites, ideal for high-performance user experiences.',
    },
    {
      img: 'img/techs/tailwind.png',
      text: 'Tailwind',
      description:
        'Utility-first CSS framework for efficiently building custom, consistent, and responsive user interfaces.',
    },
    {
      img: 'img/techs/js.png',
      text: 'JavaScript',
      description:
        'Core language for creating interactive, dynamic interfaces and smoother web experiences.',
    },
    {
      img: 'img/techs/git.png',
      text: 'Git',
      description:
        'Version control system for managing projects, collaborating, and maintaining a reliable code history.',
    },
    {
      img: 'img/techs/w3c.png',
      text: 'Accessibility',
      description:
        'Principles and best practices for creating inclusive, usable, and accessible interfaces for everyone.',
    },
    {
      img: 'img/techs/css3.png',
      text: 'CSS 3',
      description:
        'Essential technology for designing visual, responsive interfaces adapted to different devices.',
    },
    {
      img: 'img/techs/sass.png',
      text: 'Sass',
      description:
        'CSS preprocessor that makes it easier to create scalable, organized, and maintainable styles.',
    },
    {
      img: 'img/techs/gsap.png',
      text: 'GreenSock',
      description:
        'Animation library for creating transitions, micro-interactions, and engaging dynamic web experiences.',
    },
    {
      img: 'img/techs/html.png',
      text: 'HTML 5',
      description:
        'Markup language that provides a semantic, solid, and accessible structure for web interfaces.',
    },
    {
      img: 'img/techs/jquery.png',
      text: 'jQuery',
      description:
        'JavaScript library that simplifies DOM manipulation, event handling, and web interactions.',
    },
    {
      img: 'img/techs/typescript.png',
      text: 'TypeScript',
      description:
        'JavaScript superset with static typing that helps create more robust, predictable, and maintainable code.',
    },
    {
      img: 'img/techs/php.png',
      text: 'PHP',
      description:
        'Server-side language used to build dynamic web applications and connect interfaces with backend systems.',
    },
  ],
};

export const pageTitle =
  'Technologies | Jairo Cereceda Berciano - UI/UX Portfolio';

export const pageDescription =
  'Discover the technologies and tools I use to design and develop accessible, engaging, and functional digital experiences.';

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Technologies | Jairo Cereceda Berciano - UI/UX Portfolio',
  description:
    'Discover the technologies and tools I use to design and develop accessible, engaging, and functional digital experiences.',
  url: `${siteUrl}/en/technologies`,
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

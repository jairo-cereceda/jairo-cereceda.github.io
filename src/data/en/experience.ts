import { siteUrl } from '@data/consts';

export const timelineData = {
  items: [
    {
      title: 'September 2023 - June 2025',
      position: 'Web Application Development Student at IES Mar de Cádiz',
    },
    {
      title: 'March 2025 - February 2026',
      position: 'UI Developer at Knowmad Mood',
    },
    {
      title: 'February 2026 - Present',
      position: 'Personal projects and learning',
    },
  ],
};

export const certificateScroller = {
  title: 'Certifications',
  imgs: [
    {
      img: 'img/certificates/bootstrap-cert.png',
      imgAlt: 'Bootstrap 5 Certificate',
    },
    {
      img: 'img/certificates/gsap-cert.png',
      imgAlt: 'Certificate in JavaScript Animations with Greensock',
    },
    {
      img: 'img/certificates/desarrollo-ia.png',
      imgAlt: 'Introduction to AI Development Certificate',
    },
    { img: 'img/certificates/jquery-cert.png', imgAlt: 'jQuery Certificate' },
    {
      img: 'img/certificates/php-cert.png',
      imgAlt: 'PHP 8 and MySQL Certificate',
    },
    {
      img: 'img/certificates/programacion-funcional.png',
      imgAlt: 'Functional Programming Certificate',
    },
    {
      img: 'img/certificates/hacking-cert.png',
      imgAlt: 'Ethical Hacking and Cybersecurity Certificate',
    },
    {
      img: 'img/certificates/hacking-avanzado-cert.jpg',
      imgAlt: 'Advanced Ethical Hacking and Cybersecurity Certificate',
    },
    {
      img: 'img/certificates/anonimato-cert.png',
      imgAlt:
        'Anonymity and Privacy for Ethical Hacking and Cybersecurity Certificate',
    },
    {
      img: 'img/certificates/api-rest.png',
      imgAlt: 'REST API and OpenAPI Design Certificate',
    },
  ],
};

export const imageCardData = {
  img: 'img/coding.jpg',
  imgAlt: 'Photo from when I was little with computers',
  text: 'A passion for technology since childhood',
};

export const pageTitle =
  'Experience | Jairo Cereceda Berciano - UI/UX Portfolio';

export const pageDescription =
  'Explore my experience as a UI/UX designer and developer, creating accessible, engaging, and functional digital interfaces for web products and experiences.';

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Experience | Jairo Cereceda Berciano',
  description:
    'Explore my experience as a UI/UX designer and developer, creating accessible, engaging, and functional digital experiences.',
  url: `${siteUrl}/en/experience`,
  inLanguage: 'en',
  mainEntity: {
    '@type': 'Person',
    name: 'Jairo Cereceda Berciano',
    jobTitle: 'UI/UX Designer & Developer',
    url: siteUrl,
  },
};

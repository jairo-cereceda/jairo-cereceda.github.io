import { siteUrl } from '@data/consts';

export const mainCard = {
  img: 'img/profile.jpeg',
  imgAlt: '',
  name: 'Jairo Cereceda Berciano',
  profession: 'UI/UX Developer',
};

export const contentList = {
  items: [
    {
      url: '/experience',
      icon: 'calendar',
      text: 'Experience',
    },
    {
      url: '/projects',
      icon: 'branch',
      text: 'Projects',
    },
    {
      url: '/techs',
      icon: 'tool',
      text: 'Techs',
    },
    {
      url: '/playground',
      icon: 'sandbox',
      text: 'Playground',
    },
  ],
};

export const factSlider = {
  items: [
    {
      title: 'About my studies',
      text: 'During my Web Application Development studies, I achieved a 10/10 average grade, earning the highest possible overall mark.',
    },
    {
      title: 'My curiosity about technology',
      text: 'I have been interested in technology from a young age. I have always enjoyed experimenting with computers, discovering how they work, and learning on my own.',
    },
    {
      title: 'Volunteering',
      text: 'I volunteered at an animal shelter for several months, helping care for the animals and supporting the team with day-to-day tasks.',
    },
  ],
};

export const contactData = {
  items: [
    {
      url: 'https://www.linkedin.com/in/jairo-cereceda-berciano/',
      text: 'Linkedin',
      icon: 'linkedin',
    },

    {
      url: 'https://github.com/jairo-cereceda',
      text: 'GitHub',
      icon: 'github',
    },
    {
      url: 'mailto:',
      text: 'Mail',
      icon: 'mail',
    },
  ],
};

export const pageTitle = 'Jairo Cereceda Berciano | UI/UX Portfolio';
export const pageDescription =
  'Portfolio of Jairo Cereceda Berciano. UI/UX designer and developer specializing in creating accessible, engaging, and functional digital experiences.';
export const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Jairo Cereceda Berciano',
      url: siteUrl,
      jobTitle: 'UI/UX Designer & Developer',
      description:
        'UI/UX designer and developer specializing in creating accessible, engaging, and functional digital experiences.',
      image: new URL('/profile.jpeg', siteUrl).toString(),
      sameAs: [
        'https://github.com/jairo-cereceda',
        'https://www.linkedin.com/in/jairo-cereceda-berciano/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: `${siteUrl}/en`,
      inLanguage: 'en',
      name: 'Jairo Cereceda Berciano — UI/UX Designer & Developer',
      description:
        'Portfolio of Jairo Cereceda Berciano, UI & UX designer & developer',
      publisher: {
        '@id': `${siteUrl}#person`,
      },
    },
  ],
};

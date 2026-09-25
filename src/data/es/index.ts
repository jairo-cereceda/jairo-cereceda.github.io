import { siteUrl } from '@data/consts';

export const mainCard = {
  img: 'img/pfp.png',
  imgAlt: '',
  name: 'Jairo Cereceda Berciano',
  profession: 'Desarrollador de UI/UX',
};

export const contentList = {
  items: [
    {
      url: '/experience',
      icon: 'calendar',
      text: 'Experiencia',
    },
    {
      url: '/projects',
      icon: 'branch',
      text: 'Proyectos',
    },
    {
      url: '/techs',
      icon: 'tool',
      text: 'Tecnologías',
    },
    {
      url: '/playground',
      icon: 'sandbox',
      text: 'Laboratorio',
    },
  ],
};

export const factSlider = {
  items: [
    {
      title: 'Acerca de mis estudios',
      text: 'Durante mis estudios de Desarrollo de Aplicaciones Web (DAW), conseguí una nota media de 10/10, alcanzando la máxima calificación posible.',
    },
    {
      title: 'Mi curiosidad por la tecnología',
      text: 'Desde pequeño me ha interesado la tecnología. Siempre he disfrutado trasteando con ordenadores, descubriendo cómo funcionan y aprendiendo por mi cuenta.',
    },
    {
      title: 'Voluntariado',
      text: 'Durante varios meses fui voluntario en una protectora de animales, colaborando en el cuidado de los animales y ayudando en las tareas del día a día.',
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

export const pageTitle = 'Jairo Cereceda Berciano | Portfolio de UI/UX';
export const pageDescription =
  'Portfolio de Jairo Cereceda Berciano. Diseñador y desarrollador UI/UX especializado en crear experiencias digitales accesibles, atractivas y funcionales.';
export const schema = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Jairo Cereceda Berciano',
      url: siteUrl,
      jobTitle: 'Diseñador y desarrollador UI/UX',
      description:
        'Diseñador y desarrollador UI/UX especializado en crear experiencias digitales intuitivas, atractivas y funcionales.',
      image: new URL('/profile.png', siteUrl).toString(), //ToDO (METER IMAGEN DE PERFIL)
      sameAs: [
        'https://github.com/jairo-cereceda',
        'https://www.linkedin.com/in/jairo-cereceda-berciano/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      inLanguage: 'es',
      name: 'Jairo Cereceda Berciano — Diseñador y desarrollador UI/UX',
      description:
        'Portfolio de Jairo Cereceda Berciano, diseñador y desarrollador UI/UX.',
      publisher: {
        '@id': `${siteUrl}#person`,
      },
    },
  ],
};

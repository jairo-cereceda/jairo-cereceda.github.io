import { siteUrl } from '@data/consts';

export const techs = {
  items: [
    {
      img: 'img/techs/astro.png',
      text: 'Astro',
      description:
        'Framework web moderno para crear sitios rápidos, accesibles y optimizados, ideal para experiencias de usuario de alto rendimiento.',
    },
    {
      img: 'img/techs/tailwind.png',
      text: 'Tailwind',
      description:
        'Framework CSS basado en utilidades que permite crear interfaces personalizadas, consistentes y responsive de forma eficiente.',
    },
    {
      img: 'img/techs/js.png',
      text: 'JavaScript',
      description:
        'Lenguaje fundamental para crear interfaces interactivas, dinámicas y experiencias web más fluidas.',
    },
    {
      img: 'img/techs/git.png',
      text: 'Git',
      description:
        'Sistema de control de versiones para gestionar proyectos, colaborar y mantener un historial seguro del código.',
    },
    {
      img: 'img/techs/w3c.png',
      text: 'Accesibilidad',
      description:
        'Principios y buenas prácticas para crear interfaces inclusivas, usables y accesibles para todas las personas.',
    },
    {
      img: 'img/techs/css3.png',
      text: 'CSS 3',
      description:
        'Tecnología esencial para diseñar interfaces visuales, responsive y adaptadas a diferentes dispositivos.',
    },
    {
      img: 'img/techs/sass.png',
      text: 'Sass',
      description:
        'Preprocesador CSS que facilita la creación de estilos escalables, organizados y fáciles de mantener.',
    },
    {
      img: 'img/techs/gsap.png',
      text: 'GreenSock',
      description:
        'Librería de animación para crear transiciones, microinteracciones y experiencias web dinámicas y atractivas.',
    },
    {
      img: 'img/techs/html.png',
      text: 'HTML 5',
      description:
        'Lenguaje de marcado que proporciona una estructura semántica, sólida y accesible para las interfaces web.',
    },
    {
      img: 'img/techs/jquery.png',
      text: 'jQuery',
      description:
        'Librería JavaScript que simplifica la manipulación del DOM, los eventos y determinadas interacciones web.',
    },
    {
      img: 'img/techs/typescript.png',
      text: 'TypeScript',
      description:
        'Extensión de JavaScript con tipado estático que ayuda a crear código más robusto, predecible y mantenible.',
    },
    {
      img: 'img/techs/php.png',
      text: 'PHP',
      description:
        'Lenguaje de servidor utilizado para desarrollar aplicaciones web dinámicas y conectar interfaces con sistemas backend.',
    },
  ],
};

export const pageTitle =
  'Tecnologías | Jairo Cereceda Berciano - Portfolio de UI/UX';

export const pageDescription =
  'Descubre las tecnologías y herramientas que utilizo para diseñar y desarrollar experiencias digitales accesibles, atractivas y funcionales.';

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tecnologías | Jairo Cereceda Berciano - Portfolio de UI/UX',
  description:
    'Descubre las tecnologías y herramientas que utilizo para diseñar y desarrollar experiencias digitales accesibles, atractivas y funcionales.',
  url: `${siteUrl}/tecnologias`,
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

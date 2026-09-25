import { siteUrl } from '@data/consts';

export const timelineData = {
  items: [
    {
      title: 'Septiembre 2023 - Junio 2025',
      position: 'Estudiante de DAW en IES Mar de Cádiz',
    },
    {
      title: 'Marzo 2025 - Febrero 2026',
      position: 'UI developer en Knowmad mood',
    },
    {
      title: 'Febrero 2026 - Actualidad',
      position: 'Proyectos personales y aprendizaje',
    },
  ],
};

export const certificateScroller = {
  title: 'Certificaciones',
  imgs: [
    {
      img: 'img/certificates/bootstrap-cert.png',
      imgAlt: 'Certificado en Bootstrap 5',
    },
    {
      img: 'img/certificates/gsap-cert.png',
      imgAlt: 'Certificado en animaciones en JavaScript con Greensock',
    },
    {
      img: 'img/certificates/desarrollo-ia.png',
      imgAlt: 'Certificado de iniciación al desarrollo con IA',
    },
    {
      img: 'img/certificates/jquery-cert.png',
      imgAlt: 'Certificado en JQuery',
    },
    {
      img: 'img/certificates/php-cert.png',
      imgAlt: 'Certificado en PHP 8 y MySQL',
    },
    {
      img: 'img/certificates/programacion-funcional.png',
      imgAlt: 'Certificado en Programación Funcional',
    },
    {
      img: 'img/certificates/hacking-cert.png',
      imgAlt: 'Certificado en Hacking Ético y Ciberseguridad',
    },
    {
      img: 'img/certificates/hacking-avanzado-cert.jpg',
      imgAlt: 'Certificado en Hacking Ético y Ciberseguridad Avanzada',
    },
    {
      img: 'img/certificates/anonimato-cert.png',
      imgAlt:
        'Certificado en Anonimato y privacidad para Hacking Ético y Ciberseguridad',
    },
    {
      img: 'img/certificates/api-rest.png',
      imgAlt: 'Certificado en Diseño de Api Rest y OpenApi',
    },
  ],
};

export const imageCardData = {
  img: 'img/mock.png',
  imgAlt: 'Foto de cuando era pequeño con ordenadores',
  text: 'Pasión por la tecnología desde pequeño',
};

export const pageTitle =
  'Experiencia | Jairo Cereceda Berciano - Portfolio de UI/UX';
export const pageDescription =
  'Conoce mi experiencia como diseñador y desarrollador UI/UX, creando interfaces digitales accesibles, atractivas y funcionales para productos y experiencias web.';
export const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Experiencia | Jairo Cereceda Berciano - Portfolio de UI/UX',
  description:
    'Conoce mi experiencia como diseñador y desarrollador UI/UX, creando experiencias digitales accesibles, atractivas y funcionales.',
  url: `${siteUrl}/experience`,
  inLanguage: 'es',
  mainEntity: {
    '@type': 'Person',
    name: 'Jairo Cereceda Berciano',
    jobTitle: 'Diseñador y desarrollador UI/UX',
    url: siteUrl,
  },
};

import { siteUrl } from '@data/consts';

export const projects = {
  slides: [
    {
      imgs: [
        {
          img: 'img/projects/portfolio-ilustradora/portfolio-1.png',
          imgAlt: 'Inicio del portfolio',
        },
        {
          img: 'img/projects/portfolio-ilustradora/portfolio-2.png',
          imgAlt: 'Galería de obras',
        },
        {
          img: 'img/projects/portfolio-ilustradora/portfolio-3.png',
          imgAlt: 'Sección "Sobre mí" del portfolio',
        },
        {
          img: 'img/projects/portfolio-ilustradora/portfolio-4.png',
          imgAlt: 'Sección de contacto del portfolio',
        },
      ],
      info: {
        title: 'Portfolio de Ilustradora',
        description: [
          'Portfolio web desarrollado para una ilustradora digital, diseñado para presentar su trabajo de forma visual, atractiva y accesible. El proyecto está construido con Astro y Tailwind CSS, priorizando el rendimiento, la experiencia de usuario y una arquitectura de componentes reutilizables.',
          'La estructura del proyecto sigue una organización basada en componentes, separando átomos, moléculas y organismos para facilitar su mantenimiento y escalabilidad. También incorpora pruebas automatizadas con Playwright y herramientas como ESLint y Prettier para garantizar la calidad y consistencia del código.',
        ],
        projectUrl: 'https://portfolio-ilustradora.vercel.app/',
        repositoryUrl:
          'https://github.com/jairo-cereceda/portfolio-ilustradora',
      },
    },
    {
      imgs: [
        {
          img: 'img/projects/lily-pub/lily-pub-mobile-1.png',
          imgAlt: 'Presentación de la web de Lily Pub',
        },
        {
          img: 'img/projects/lily-pub/lily-pub-mobile-2.png',
          imgAlt: 'Sección con información sobre Lily Pub',
        },
        {
          img: 'img/projects/lily-pub/lily-pub-mobile-3.png',
          imgAlt: 'Carta de Lily Pub',
        },
        {
          img: 'img/projects/lily-pub/lily-pub-mobile-4.png',
          imgAlt: 'Carrusel de marcas y ubicación de Lily Pub',
        },
        {
          img: 'img/projects/lily-pub/lily-pub-mobile-5.png',
          imgAlt: 'Sección de contacto de Lily Pub',
        },
      ],
      info: {
        title: 'Lily Pub',
        description: [
          'Lily Pub es una web demo para un negocio de hostelería, diseñada para presentar de forma atractiva su propuesta y facilitar el acceso a la información más relevante. Incluye un menú, información de contacto, ubicación y otros aspectos destacados del establecimiento.',
          'El proyecto está desarrollado con Astro y Tailwind CSS, con un enfoque centrado en el rendimiento, la navegación intuitiva y una experiencia visual acorde con la identidad de un pub. La arquitectura basada en componentes reutilizables facilita el mantenimiento del proyecto, mientras que Playwright permite comprobar el correcto funcionamiento de la interfaz.',
        ],
        projectUrl: 'https://lily-pub.vercel.app/',
        repositoryUrl: 'https://github.com/jairo-cereceda/lily-pub',
      },
    },
    {
      imgs: [
        {
          img: 'img/projects/agora-apartments/agora-1.png',
          imgAlt: 'Presentación de la web de Apartamento Agora',
        },
        {
          img: 'img/projects/agora-apartments/agora-2.png',
          imgAlt: 'Sección con información sobre Apartamento Agora',
        },
        {
          img: 'img/projects/agora-apartments/agora-3.png',
          imgAlt: 'Sección con los servicios incluidos en Apartamento Agora',
        },
        {
          img: 'img/projects/agora-apartments/agora-4.png',
          imgAlt: 'Sección de contacto de Apartamento Agora',
        },
      ],
      info: {
        title: 'Apartamento Agora',
        description: [
          'Apartamento Agora es una web demo para un alojamiento turístico, diseñada para presentar de forma clara y atractiva toda la información relevante del apartamento. Incluye detalles del alojamiento, servicios, imágenes, ubicación y opciones de contacto o reserva.',
          'El proyecto está desarrollado con Astro y Tailwind CSS, priorizando el rendimiento, la velocidad de carga y una experiencia de usuario cuidada. Su arquitectura basada en componentes reutilizables facilita el mantenimiento y la escalabilidad, mientras que Playwright permite validar el correcto funcionamiento de la interfaz.',
        ],
        projectUrl: 'https://apartamento-agora.vercel.app/',
        repositoryUrl: 'https://github.com/jairo-cereceda/apartamento-agora',
      },
    },
    {
      imgs: [
        {
          img: 'img/projects/my-chat/mychat-1.png',
          imgAlt: 'Comienzo de MyChat',
        },
        {
          img: 'img/projects/my-chat/mychat-2.png',
          imgAlt: 'Menú lateral de MyChat',
        },
        {
          img: 'img/projects/my-chat/mychat-3.png',
          imgAlt: 'Menú de gestión de mensajes de MyChat',
        },
        {
          img: 'img/projects/my-chat/mychat-4.png',
          imgAlt: 'Sección de mensajes destacados de MyChat',
        },
      ],
      info: {
        title: 'MyChat',
        description: [
          'MyChat es una aplicación web para crear y organizar conversaciones personales, permitiendo escribir, editar, eliminar y marcar mensajes como importantes. También permite importar y exportar chats, facilitando la gestión y respaldo de la información.',
          'El proyecto está desarrollado con React, TypeScript y Tailwind CSS, utilizando Local Storage para la persistencia de datos y ofreciendo capacidades de PWA. Su arquitectura basada en componentes, junto con React Context y hooks personalizados, permite mantener una estructura modular y reutilizable. Además, incorpora pruebas unitarias con Vitest y React Testing Library.',
        ],
        projectUrl: 'https://jairo-cereceda.github.io/MyChat/',
        repositoryUrl: 'https://github.com/jairo-cereceda/MyChat',
      },
    },
    {
      imgs: [
        {
          img: 'img/projects/sushi-count/sushi-count-1.png',
          imgAlt: 'Pantalla de inicio de Sushi Count',
        },
        {
          img: 'img/projects/sushi-count/sushi-count-2.png',
          imgAlt: 'Sesión activa de Sushi Count',
        },
        {
          img: 'img/projects/sushi-count/sushi-count-3.png',
          imgAlt: 'Sección de resumen de sesión de Sushi Count',
        },
      ],
      info: {
        title: 'SushiCount',
        description: [
          'SushiCount es una aplicación multiplataforma para registrar sesiones de sushi, generar imágenes mediante IA y exportar resúmenes visuales de cada sesión. Está diseñada para funcionar en Android, iOS y web como PWA, ofreciendo una experiencia consistente entre plataformas.',
          'El proyecto está desarrollado con React Native, Expo y TypeScript, con una interfaz dinámica basada en contadores y previsualización de imágenes. Se integra con un backend para autenticación anónima, generación de imágenes con IA y exportación de sesiones. Mi trabajo se centró en la orquestación y revisión del código, la integración frontend-backend y la validación de su funcionamiento multiplataforma.',
        ],
        projectUrl: 'https://app-sushi-count.vercel.app/',
        repositoryUrl: 'https://github.com/jairo-cereceda/SushiCount',
      },
    },
  ],
  sliderTrack: {
    items: [
      {
        img: 'img/projects/portfolio-ilustradora/favicon.png',
        title: 'Portfolio Ilustradora',
      },
      {
        img: 'img/projects/lily-pub/favicon.png',
        title: 'Lily Pub',
      },
      {
        img: 'img/projects/agora-apartments/favicon.png',
        title: 'Apartamento Agora',
      },
      {
        img: 'img/projects/my-chat/favicon.png',
        title: 'MyChat',
      },
      {
        img: 'img/projects/sushi-count/favicon.png',
        title: 'SushiCount',
      },
    ],
  },
};

export const pageTitle =
  'Proyectos | Jairo Cereceda Berciano - Portfolio de UI/UX';
export const pageDescription =
  'Explora mis proyectos de diseño y desarrollo UI/UX, creando interfaces accesibles, atractivas y funcionales para productos y experiencias digitales.';
export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Proyectos | Jairo Cereceda Berciano - Portfolio de UI/UX',
  description:
    'Explora mis proyectos de diseño y desarrollo UI/UX, creando interfaces accesibles, atractivas y funcionales para productos y experiencias digitales.',
  url: `${siteUrl}/proyectos`,
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website` },
  about: {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Jairo Cereceda Berciano',
  },
};

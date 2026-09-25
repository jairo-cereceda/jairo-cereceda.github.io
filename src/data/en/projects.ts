import { siteUrl } from '@data/consts';

export const projects = {
  slides: [
    {
      imgs: [
        {
          img: 'img/pfp.png',
          imgAlt: '',
        },
        {
          img: 'img/mock.png',
          imgAlt: '',
        },
      ],
      info: {
        title: 'Ilustrator Portfolio',
        description: [
          'Web portfolio developed for a digital illustrator, designed to showcase her work in a visual, engaging, and accessible way. The project is built with Astro and Tailwind CSS, with a strong focus on performance, user experience, and a reusable component architecture.',
          'The project follows a component-based structure, separating atoms, molecules, and organisms to improve maintainability and scalability. It also includes automated testing with Playwright and tools such as ESLint and Prettier to ensure code quality and consistency.',
        ],
        projectUrl: 'https://portfolio-ilustradora.vercel.app/',
        repositoryUrl:
          'https://github.com/jairo-cereceda/portfolio-ilustradora',
      },
    },
    {
      imgs: [
        {
          img: 'img/pfp.png',
          imgAlt: '',
        },
        {
          img: 'img/mock.png',
          imgAlt: '',
        },
      ],
      info: {
        title: 'Lily Pub',
        description: [
          'Lily Pub is a demo website for a hospitality business, designed to showcase its offering in an engaging way while providing easy access to essential information. It features a menu, contact details, location information, and other key business highlights.',
          "The project is built with Astro and Tailwind CSS, focusing on performance, intuitive navigation, and a visual experience suited to a pub's identity. Its reusable component-based architecture makes the project easier to maintain, while Playwright is used to verify the interface's reliability.",
        ],
        projectUrl: 'https://lily-pub.vercel.app/',
        repositoryUrl: 'https://github.com/jairo-cereceda/lily-pub',
      },
    },
    {
      imgs: [
        {
          img: 'img/pfp.png',
          imgAlt: '',
        },
        {
          img: 'img/mock.png',
          imgAlt: '',
        },
      ],
      info: {
        title: 'Apartamento Agora',
        description: [
          'Apartamento Agora is a demo website for a holiday rental, designed to present all relevant property information in a clear and engaging way. It includes accommodation details, amenities, images, location information, and booking or contact options.',
          'The project is built with Astro and Tailwind CSS, focusing on performance, fast loading times, and a polished user experience. Its reusable component-based architecture makes the project easier to maintain and scale, while Playwright is used to ensure the interface works reliably.',
        ],
        projectUrl: 'https://apartamento-agora.vercel.app/',
        repositoryUrl: 'https://github.com/jairo-cereceda/apartamento-agora',
      },
    },
    {
      imgs: [
        {
          img: 'img/pfp.png',
          imgAlt: '',
        },
        {
          img: 'img/mock.png',
          imgAlt: '',
        },
      ],
      info: {
        title: 'MyChat',
        description: [
          'MyChat is a web application for creating and organizing personal conversations, allowing users to write, edit, delete, and mark messages as important. It also supports importing and exporting chats, making it easier to manage and back up information.',
          'The project is built with React, TypeScript, and Tailwind CSS, using Local Storage for data persistence and providing PWA capabilities. Its component-based architecture, together with React Context and custom hooks, keeps the code modular and reusable. The project also includes unit testing with Vitest and React Testing Library.',
        ],
        projectUrl: 'https://jairo-cereceda.github.io/MyChat/',
        repositoryUrl: 'https://github.com/jairo-cereceda/MyChat',
      },
    },
    {
      imgs: [
        {
          img: 'img/pfp.png',
          imgAlt: '',
        },
        {
          img: 'img/mock.png',
          imgAlt: '',
        },
      ],
      info: {
        title: 'SushiCount',
        description: [
          'SushiCount is a cross-platform application for tracking sushi sessions, generating AI-powered images, and exporting visual summaries of each session. It is designed to run on Android, iOS, and the web as a PWA, providing a consistent experience across platforms.',
          "The project is built with React Native, Expo, and TypeScript, featuring a dynamic interface with counters and image previews. It integrates with a backend for anonymous authentication, AI image generation, and session exports. My role focused on code orchestration and review, frontend-backend integration, and validating the application's cross-platform functionality.",
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
        title: 'Ilustrator Portfolio',
      },
      {
        img: 'img/projects/lily-pub/favicon.png',
        title: 'Lily Pub',
      },
      {
        img: 'img/projects/agora-apartments/favicon.png',
        title: 'Agora Apartments',
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

export const pageTitle = 'Projects | Jairo Cereceda Berciano - UI/UX Portfolio';
export const pageDescription =
  'Explore my UI/UX design and development projects, creating accessible, engaging, and functional interfaces for digital products and experiences.';
export const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projects | Jairo Cereceda Berciano - UI/UX Portfolio',
  description:
    'Explore my UI/UX design and development projects, creating accessible, engaging, and functional interfaces for digital products and experiences.',
  url: `${siteUrl}/en/projects`,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website` },
  about: {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Jairo Cereceda Berciano',
  },
};

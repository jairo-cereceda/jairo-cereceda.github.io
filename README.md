# 🚀 Jairo Cereceda - UI/UX Designer & Developer Portfolio

Personal portfolio showcasing my work as a UI/UX Designer and Frontend Developer, featuring selected projects, interactive UI experiments, my experience, and multilingual content (EN/ES).

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) - High-performance, content-driven web framework with fast page loads.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Modern utility-first styling integrated via `@tailwindcss/vite`.
- **Content:** [MDX](https://mdxjs.com/) (`@astrojs/mdx`) - Rich, component-driven markdown for case studies and articles.
- **PWA:** [Vite PWA](https://vite-pwa-org.netlify.app/) (`vite-plugin-pwa`) - Progressive Web App support for offline capabilities and app-like experience.
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - Lightweight and scalable icon management.
- **Testing:** [Playwright](https://playwright.dev/) - Reliable end-to-end testing for components and critical user flows.
- **Linting & Formatting:** ESLint & Prettier - Enforcing clean, consistent code style and standards.

## 📁 Project Structure

```text
├── public/             # Static assets
│   ├── fonts/          # Custom web fonts
│   └── media/          # Project media files
├── src/
│   ├── assets/         # Optimizable assets
│   │   ├── audio/      # Audio assets
│   │   └── img/        # Image assets
│   ├── components/     # UI components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── playground/ # Standalone demo & experimental UI components
│   ├── content/        # MDX content collections
│   │   ├── en/         # English content (case studies, articles)
│   │   └── es/         # Spanish content (case studies, articles)
│   ├── data/           # Site copy, static text, and localizations
│   │   ├── en/         # English data
│   │   └── es/         # Spanish data
│   ├── icons/          # Custom SVG icons
│   ├── layouts/        # Shared page layouts
│   ├── pages/          # Site routes and views
│   ├── styles/         # Global styles and Tailwind directives
│   └── utils/          # Helper and utility functions
├── tests/              # Page and feature tests with Playwright
├── package.json        # Project metadata and dependencies
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed:

- **Node.js:** `>=22.12.0`

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:jairo-cereceda/jairo-cereceda.github.io.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd jairo-cereceda.github.io
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to view the portfolio.

## 📜 Available Scripts

| Script            | Description                            |
| :---------------- | :------------------------------------- |
| `npm run dev`     | Starts the local development server.   |
| `npm run build`   | Builds the site for production.        |
| `npm run preview` | Previews the production build locally. |
| `npm run lint`    | Runs ESLint to check for code issues.  |
| `npm run format`  | Formats code using Prettier.           |
| `npm run test`    | Runs end-to-end tests with Playwright. |

## 🌐 Deployment (GitHub Pages)

> This site is deployed and hosted on [GitHub Pages](https://jairo-cereceda.github.io).

## ✒️ Author

**Jairo Cereceda Berciano**

- **GitHub:** [@jairo-cereceda](https://github.com/jairo-cereceda)
- **LinkedIn:** [Jairo Cereceda Berciano](https://www.linkedin.com/in/jairo-cereceda-berciano/)

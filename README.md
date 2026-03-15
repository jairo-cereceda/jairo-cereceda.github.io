# 🚀 Personal Portfolio - Jairo Cereceda Berciano

Welcome to my personal portfolio repository. This project is a modern, high-performance static website built to showcase my work, skills, and experience as a developer.

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - For optimized performance and great developer experience.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Using the latest version for modern utility-first styling.
- **Animations:** [GSAP](https://gsap.com/) - For smooth and professional scroll-triggered animations.
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - High-performance icon management.
- **Testing:** [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/) - Ensuring component reliability.
- **Linting & Formatting:** ESLint & Prettier - Maintaining code quality and consistency.

## 📁 Project Structure

```text
├── public/             # Static assets
│   ├── fonts/          # Custom web fonts
│   └── img/            # Project and profile images
├── src/
│   ├── components/     # Reusable UI components
│   ├── icons/          # Custom SVG icons
│   ├── layouts/        # Page layouts (Base, Project, etc.)
│   ├── pages/          # Site routes and views
│   └── styles/         # Global CSS and Tailwind directives
├── tests/              # Unit and component tests
├── package.json        # Project metadata and dependencies
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (latest LTS recommended).

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

Open `http://localhost:4321` in your browser to see the result.

## 📜 Available Scripts

| Script            | Description                                  |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Starts the local development server.         |
| `npm run build`   | Builds the site for production.              |
| `npm run preview` | Previews the production build locally.       |
| `npm run lint`    | Runs ESLint to check for code issues.        |
| `npm run format`  | Formats code using Prettier.                 |
| `npm run test`    | Runs tests using Vitest.                     |
| `npm run test:ui` | Opens the Vitest UI for interactive testing. |

## 🌐 Deployment (GitHub Pages)

This project is configured to be deployed automatically via **GitHub Actions** when pushing to the main branch.

## ✒️ Author

**Jairo Cereceda Berciano**

- **GitHub:** [@jairo-cereceda](https://github.com/jairo-cereceda)
- **LinkedIn:** [Jairo Cereceda Berciano](https://www.linkedin.com/in/jairo-cereceda-berciano/)

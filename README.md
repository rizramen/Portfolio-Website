# Portfolio Website

Personal portfolio website built with React and Vite. It is a single-page site for presenting projects, skills, experience, and contact details.

## Stack

- `React 19`: component-based UI rendering.
- `React DOM`: mounts the React app into the page.
- `Vite`: local development server and production bundler.
- `JavaScript ES Modules`: app structure and content configuration.
- `CSS`: custom styling, layout, responsive behavior, and interaction states.
- `npm`: dependency management and script runner.
- `GitHub Actions`: optional automated deployment to GitHub Pages.
- `Vercel`: Deployed using Vercel. 

## Features

- Single-page portfolio layout with anchored navigation
- Editable project, skills, and timeline data from one content file
- Responsive custom UI
- Accessibility basics including semantic sections, focus states, and a skip link
- Static build output suitable for GitHub Pages or Vercel

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── siteContent.js
│   └── styles.css
└── .github/workflows/deploy-pages.yml
```

## Key Files

- `src/App.jsx`: page layout and section components
- `src/siteContent.js`: personal info, social links, project data, skills, and timeline
- `src/styles.css`: full visual styling and responsive rules
- `vite.config.js`: Vite setup with configurable `VITE_BASE_PATH`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Customizing Content

Update [`src/siteContent.js`](./src/siteContent.js) to change:

- name, role, email, and intro text
- GitHub and LinkedIn links
- project cards
- skills list
- timeline entries

Most portfolio content lives there, so you usually do not need to touch the React components unless you want to change the layout.

## Deployment

### GitHub Pages

This repo already includes [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml).

1. Push the repository to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger deployment.

If the site is hosted from a repository subpath, set `VITE_BASE_PATH` to that path during build.

### Vercel

Use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

## Scripts

- `npm run dev`: start local development server
- `npm run start`: alias for `vite`
- `npm run build`: create production build
- `npm run preview`: preview built site locally

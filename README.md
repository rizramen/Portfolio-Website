# Portfolio Website

Personal portfolio site built with React and Vite. The app is a static single-page website that highlights projects, skills, background, and contact information.

## Tools Used

- `React 19`: component-based UI rendering.
- `React DOM`: mounts the React app into the page.
- `Vite`: local development server and production bundler.
- `JavaScript ES Modules`: app structure and content configuration.
- `CSS`: custom styling, layout, responsive behavior, and interaction states.
- `npm`: dependency management and script runner.
- `GitHub Actions`: optional automated deployment to GitHub Pages.

## Project Structure

- [`index.html`](./index.html): base HTML document and SEO/social metadata.
- [`src/main.jsx`](./src/main.jsx): React entry point.
- [`src/App.jsx`](./src/App.jsx): top-level layout and page sections.
- [`src/siteContent.js`](./src/siteContent.js): editable content for projects, skills, timeline, and contact details.
- [`src/styles.css`](./src/styles.css): design system, layout, responsive rules, and accessibility styles.
- [`vite.config.js`](./vite.config.js): Vite configuration, including GitHub Pages base-path support.
- [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml): GitHub Pages deployment workflow.

## Site Parts

- `Header`: sticky top navigation with anchor links for fast section access.
- `Hero`: landing section with your name, positioning statement, and primary calls to action.
- `Workspace Visual`: decorative code-window mockup that supports the portfolio identity.
- `About`: short personal summary and internship goal.
- `Projects`: project cards with descriptions, stack tags, and live links when available.
- `Skills`: quick scan of technical strengths and tools.
- `Experience`: lightweight timeline of development progress.
- `Contact`: email call-to-action plus optional social profile links.

## Best-Practice Notes

- Content is separated from UI logic so text and links can be updated in one place.
- The app uses semantic sections and labeled navigation for better accessibility.
- Keyboard users get visible focus states and a skip link.
- Reduced-motion users are respected through a motion fallback.
- Broken placeholder social links are not rendered until real URLs are added.
- The project builds as a static site with no backend dependency.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Recommended: Vercel

This is the easiest option for a Vite static site.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Let Vercel detect the framework automatically.
4. Deploy with:

```txt
Build command: npm run build
Output directory: dist
```

### Alternative: GitHub Pages

This repository already includes a GitHub Actions workflow for Pages deployment.

1. Push the project to GitHub.
2. Make sure the production branch is `main`, or update the workflow.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main` to trigger deployment.

## Before Publishing

- Add your real GitHub profile URL in [`src/siteContent.js`](./src/siteContent.js).
- Add your real LinkedIn profile URL in [`src/siteContent.js`](./src/siteContent.js).
- Review project descriptions and external links.
- Add a custom domain later if needed.

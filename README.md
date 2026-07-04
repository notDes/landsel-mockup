# LandSel Title Agency Website

Production React/Vite frontend for the LandSel Title Agency public website.

## Tech stack

- React
- React Router
- Vite
- Plain CSS modules split by responsibility

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
```

The production-ready static files are generated in `dist/`.

## GoDaddy deployment

Upload the contents of the `dist/` folder to the hosting document root, usually `public_html/`. The project includes `public/.htaccess`, which Vite copies into `dist/` during build so React Router page refreshes work on Apache-based hosting.

## Important notes

- The online estimate tools intentionally continue to open LandSel's existing TitleCapture portal.
- Team and partner images live in `public/assets/` and are referenced from the data files in `src/data/`.
- Do not commit `node_modules/` or `dist/` to Git.

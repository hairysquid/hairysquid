# hairysquid

The hairysquid Ltd. marketing site, built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build
```

## Structure

- `src/pages/index.astro` — the single-page site
- `src/components/` — Hero, Approach, Team, Contact sections + shared bits
- `src/layouts/Layout.astro` — document shell, fonts, scroll-reveal script
- `public/logo.svg` — the tentacle logo

Contact form submits to Formspree (`xqkwlonj`) via a small fetch call in `ContactSection.astro`.

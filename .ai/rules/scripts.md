---
paths:
  - 'scripts/**'
---

# Scripts

## Static export must use Inertia v3 root markup
This project uses inertia-laravel v3, whose root template is `<script data-page="app" type="application/json">{json}</script><div id="app"></div>` (see vendor/inertiajs/inertia-laravel/src/View/Components/App.php). When generating a static/CSR HTML shell (scripts/build-static.mjs), do NOT use the old v1/v2 form `<div id="app" data-page="...">` — Inertia v3 will not find the initial page and React will not mount (empty #app, page chunk never requested). Also: `@laravel/vite-plugin-wayfinder` runs PHP at build time, so it is removed from vite.config.ts for static builds; no code imports @/actions or @/routes.

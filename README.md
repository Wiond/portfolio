# William Ondrejov — Portfolio

A fullstack developer portfolio built to be a real, extensible application rather
than a static page: projects are typed data, not hardcoded markup, so the dashboard
scales without touching a database or a CMS.

**Live site:** portfolio-black-three-76.vercel.app
**Contact:** william.ondrejov@outlook.com · [LinkedIn](https://www.linkedin.com/in/william-ondrejov-5b5616297/) · [GitHub](https://github.com/Wiond/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

<!-- ![Screenshot](./docs/screenshot.png) -->

## Overview

The dashboard is driven entirely by `src/data/projects.ts` — a typed array of
project objects (summary, tech stack, role, metrics, links, status, category).
Adding a new project is a single object in that array; the grid, category filters,
and counts all update automatically.

## Features

- **Typed, data-driven project dashboard** with category filtering
- **In-page resume viewer** — embedded PDF preview with download/open-in-new-tab
  fallbacks for browsers that can't render PDFs inline
- **Custom design system** — not a template: bespoke color tokens, type scale, and
  component styling via Tailwind
- **Fully responsive**, accessible markup (semantic sections, `aria` labels on
  interactive elements, focus states)
- **Zero backend** — static build, deploys anywhere that serves static files

## Tech stack

| Layer      | Choice                         |
| ---------- | ------------------------------- |
| Framework  | React 19 + TypeScript            |
| Build tool | Vite                             |
| Styling    | Tailwind CSS                     |
| Icons      | lucide-react                     |

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Deploying

Static build output (`dist/`) — deploys as-is to Vercel, Netlify, GitHub Pages, or
Cloudflare Pages. Build command `npm run build`, output directory `dist`.

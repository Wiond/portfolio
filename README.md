# William Ondrejov — Portfolio

A fullstack-developer portfolio built with React, TypeScript, and Vite. Designed to
scale: adding a project is a single object in a data file — no backend, no CMS.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Adding a project

Open `src/data/projects.ts` and add an object to the `projects` array. Every field is
documented in `src/types/project.ts`. The dashboard, category filters, and counts all
derive from this array automatically — nothing else needs to change.

Two placeholder entries ship in the array so you can see the shape of a second/third
card. Replace or delete them once you have real projects to show. See
`PROJECT_IDEAS.md` for suggestions on what to build next.

## Editing your bio / contact info

Open `src/data/profile.ts`.

## Updating your resume

Replace `public/resume.pdf` with your latest CV, keeping the filename `resume.pdf`
(or update `RESUME_PATH` in `src/components/ResumeButton.tsx` if you rename it). The
"Resume" button in the header and the "View resume" button in the hero both open an
in-page modal with the PDF embedded, plus "Open in new tab" and "Download" links as
fallbacks for browsers that can't preview PDFs inline (mainly some mobile browsers).

## Deploying

This is a static site — it builds to a `dist/` folder of plain HTML/CSS/JS. It deploys
as-is to Vercel, Netlify, GitHub Pages, or Cloudflare Pages. For Vercel/Netlify: point
the project at this repo, build command `npm run build`, output directory `dist`.

## Project structure

```
src/
  data/
    profile.ts     # your name, bio, contact links
    projects.ts     # <- add new projects here
  types/
    project.ts      # the Project type — documents every field
  components/
    Header.tsx
    Hero.tsx
    FilterBar.tsx
    ProjectCard.tsx
    ProjectDashboard.tsx
    About.tsx
    Contact.tsx
    icons.tsx        # brand icons (GitHub/LinkedIn) not shipped by lucide-react
  App.tsx
  main.tsx
```

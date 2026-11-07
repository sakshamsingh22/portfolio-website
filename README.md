# Saksham Singh | 3D Developer Portfolio

A personal portfolio built with React, Vite, Three.js, React Three Fiber, Drei, Tailwind CSS, and Framer Motion.

**Portfolio:** [saksham-singh.in](https://saksham-singh.in)  
**Source:** [github.com/sakshamsingh22/portfolio-website](https://github.com/sakshamsingh22/portfolio-website)

## What this project demonstrates

- A 3D scene and interactive visual presentation using Three.js and React Three Fiber
- Component-driven UI built with React
- Motion and transitions with Framer Motion
- Utility-first styling with Tailwind CSS
- Centralized portfolio content for projects, skills, timeline, and achievements

## Featured work shown in the portfolio

Project data is maintained in `src/data/content.js`. Current entries include:

| Project | Focus | Repository |
| --- | --- | --- |
| Quorum | Multi-agent AI research workflow | [Source](https://github.com/sakshamsingh22/quorum-multi-agent-research) |
| AI Video Assistant | Transcription, summarization, and RAG Q&A | [Source](https://github.com/sakshamsingh22/AI-Video-Assistant) |
| SamTrack OS | Productivity and coding tracker | [Source](https://github.com/sakshamsingh22/SamTrack-OS) |
| FocusList | Browser-based task manager | [Source](https://github.com/sakshamsingh22/TO-DO) |

The project cards and their links are editable in `src/data/content.js`. Confirm that each deployed destination is live before sharing it as a working demo.

## Tech stack

- **UI:** React 18, Tailwind CSS
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Animation:** Framer Motion
- **Build tooling:** Vite 5
- **Contact:** EmailJS browser SDK

## Requirements

- Node.js compatible with Vite 5
- npm

## Run locally

```bash
git clone https://github.com/sakshamsingh22/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deployment

This is a Vite static site. Configure the hosting provider with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

A GitHub Pages workflow is present under `.github/workflows/static.yml`. Check the repository's Actions and Pages settings for the current deployment status and published URL.

## Customize content

- `src/data/content.js`: projects, timeline, skills, certifications, and achievements
- `src/sections/Hero.jsx`: hero section
- `src/sections/About.jsx`: introduction
- `src/sections/Contact.jsx`: contact links

## Validation

Run `npm run build` before deploying. No build result is claimed by this README update; validate locally or through the repository's CI workflow.

## Author

**Saksham Singh** · [Portfolio](https://saksham-singh.in) · [GitHub](https://github.com/sakshamsingh22)

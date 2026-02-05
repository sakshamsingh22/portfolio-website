# Saksham Singh 3D Portfolio

Modern 3D portfolio built with React + Vite, Three.js (R3F + Drei), Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Import the repo in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### Netlify
1. New site from Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## Customize Content

Update these files:
- `src/data/content.js` for projects, timeline, and skills.
- `src/sections/Contact.jsx` for social links.
- `src/sections/Hero.jsx` and `src/sections/About.jsx` for intro copy.

## Performance Notes
- 3D assets are lightweight primitives.
- Stars backdrop uses an efficient point cloud.
- Motion animations are limited to key sections.


# Rassa Raaja

A restaurant website prototype built with Next.js, React and TypeScript. It presents a menu, chef profile, gallery and reservation interface with an animated dark visual theme.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a local production check, run `npm run build` followed by `npm start`. The GitHub Pages workflow sets its subpath and static-export options automatically; its build artifact is written to `out/`. `npm run lint` runs ESLint.

## Project structure

- `app/page.tsx`: assembles the landing page and footer.
- `components/ui/`: menu, gallery, booking form, navigation and visual effects.
- `public/`: static assets.

## Implemented scope

The repository contains a responsive visual interface, menu presentation, gallery, section navigation and client-side reservation fields. The booking button is a disabled preview: there is no booking backend, persistence, payment flow or confirmation email. Restaurant contact details and social links are sample content. Before adapting it for a real restaurant, supply verified details and connect an actual reservation service.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Three.js and React Three Fiber. Dependency versions are recorded in `package-lock.json`.

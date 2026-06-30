# 🌍 Earth — Geographic Survey

An interactive 3D Earth experience built with Next.js, Three.js, and Framer Motion. Explore a realistic, rotating 3D Earth, scroll through its history, and discover the seven continents with smooth scroll-driven animations.

## Features

- **Interactive 3D Earth** — A realistic, textured Earth rendered with Three.js (via React Three Fiber), draggable and zoomable with orbit controls.
- **Animated Hero Section** — Staggered text reveal animations powered by Framer Motion.
- **About Section** — An introduction to Earth with a slide-and-fade image animation.
- **History Timeline** — A scroll-revealed timeline from Earth's formation to the Cambrian Explosion.
- **Continents Gallery** — All seven continents with scroll-triggered scale animations.
- **Starfield Background** — A dynamic, twinkling star background built with `@react-three/drei`.

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework (App Router)
- [Three.js](https://threejs.org/) — 3D graphics engine
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — Useful helpers for React Three Fiber
- [Framer Motion](https://www.framer.com/motion/) — Animation library for React
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- TypeScript

## Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Project Structure

\`\`\`
earth-experience/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx              # Main page assembling all sections
│   └── globals.css           # Global styles and theme variables
├── components/
│   ├── EarthScene.tsx        # 3D Earth rendered with Three.js
│   ├── HeroOverlay.tsx       # Animated hero text overlay
│   ├── AboutSection.tsx      # About Earth, with slide-fade image
│   ├── HistorySection.tsx    # Scroll-revealed history timeline
│   └── ContinentsSection.tsx # Seven continents gallery
└── public/
    └── textures/              # Earth texture imagery
\`\`\`

## Imagery Credit

Earth texture imagery courtesy of NASA Blue Marble / NASA Earth Observatory.

## Author

**Emma**
- Email: emmnqb@gmail.com
- GitHub: [@Emma-SH](https://github.com/Emma-SH)

## License

This project is open for personal and educational use.

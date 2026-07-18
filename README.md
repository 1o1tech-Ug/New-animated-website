# Medovon Research Institute — Website

A premium, animation-driven marketing site for Medovon Research Institute,
built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion,
GSAP + ScrollTrigger, Lenis smooth scroll, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

If you hit peer-dependency resolution errors on `npm install` (common with
fast-moving R3F/Three.js versions), retry with:

```bash
npm install --legacy-peer-deps
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, Navbar/Footer, Lenis provider
    page.tsx           Composes all landing page sections
    globals.css         Tailwind base + glassmorphism/utility classes
    icon.svg             App icon (auto-detected by Next.js)
  components/
    layout/             Navbar, Footer, SmoothScroll (Lenis + GSAP ticker)
    sections/            One component per landing page section
    three/               FloatingMolecule — the R3F hero centerpiece
    ui/                  Reusable primitives: GlassCard, MagneticButton,
                         AnimatedCounter, Reveal, SectionHeading,
                         ParticleField, ResearchModal
  data/
    content.ts           All site copy/content in one place — edit here
                         to update text without touching components
  hooks/
    useMousePosition.ts   Normalized mouse position for parallax/tilt
  lib/
    utils.ts              cn() class-merging helper
```

## Design tokens

| Token         | Value                          |
|---------------|---------------------------------|
| Primary       | `#081C3A` (Navy)                |
| Secondary     | `#1E88E5` (Medical Blue)        |
| Accent        | `#00C896` (Emerald)             |
| Background    | `#05070B`                       |
| Muted text    | `#B0B8C5`                       |
| Display font  | Fraunces (serif, editorial)     |
| Body font     | Inter                           |
| Data/mono font| IBM Plex Mono (stats, eyebrows) |

All copy, stats, research entries, testimonials, and nav/footer links live
in `src/data/content.ts` — update the site by editing that file rather than
hunting through components.

## Notes & assumptions

- **No real photography is included.** Every "image" area (About panel,
  news cards, map) is an art-directed CSS gradient/pattern rather than a
  stock photo, so the deliverable ships with zero external dependencies.
  Swap in real lab/clinical photography via `next/image` where you see
  gradient placeholders (`About.tsx`, `News.tsx`, `Contact.tsx`).
- **Partner names, testimonials, researcher names, and study data are
  fictional placeholders** written for Medovon specifically — replace with
  real institutional partners and study data before launch.
- **The contact form and newsletter signup are client-side only** (no
  backend). Wire `handleSubmit` in `Contact.tsx` and `Footer.tsx` to your
  email/CRM API route or a service like Resend/Formspree.
- **Reduced motion is respected**: Lenis smooth scroll and the particle
  field both no-op when the OS-level "reduce motion" preference is set,
  and `globals.css` collapses all CSS animation durations globally.
- **React 18** is pinned deliberately (rather than React 19) for maximum
  stability with the current React Three Fiber / drei ecosystem.

## Performance

- All animated/canvas components (`FloatingMolecule`, `ParticleField`,
  `SmoothScroll`) are client components; the 3D canvas is loaded via
  `next/dynamic` with `ssr: false` and only mounts in the hero.
- Sections below the fold animate in via `whileInView` (Framer Motion) /
  ScrollTrigger, so nothing animates until it's scrolled into view.
- Fonts are loaded via `next/font/google` (self-hosted, zero layout shift).

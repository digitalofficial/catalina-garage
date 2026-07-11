# Catalina Garage

Automotive repair shop website for Tucson, AZ built with a **marker art / anime-inspired design system** -- hand-drawn energy marks, bold typography, offset ink shadows, and scroll-triggered animations. Inspired by sike_paint's automotive marker art style.

**Live:** https://catalina-garage.vercel.app

## Design System

The visual language fuses automotive performance culture with hand-drawn marker illustration:

- **Typography:** Anton (display), Space Grotesk (body), Caveat (marker accents)
- **Colors:** Ink black, Performance Red (#E63222), Electric Orange, Safety Yellow, warm off-white
- **Energy Marks:** 16 real hand-drawn SVG assets scattered across sections with scroll-triggered fade-in animations. On dark backgrounds, marks are CSS-inverted to white. Each section uses a unique layout variant.
- **Buttons:** Thick 3px ink borders, 5-6px offset drop shadows, aggressive hover shifts
- **Cards:** Manga-panel styling with heavy ink shadows, numbered badges, accent bars
- **Text Effects:** Outlined headings (WebkitTextStroke), paint block highlights, scribble underlines

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (scroll-triggered animations)
- Supabase (leads DB)
- Resend (email notifications)

## Project Structure

```
src/
  app/              # Pages (App Router)
  components/       # UI components
    manga/          # Reusable design system primitives
    EnergyMarks.tsx # SVG mark placement system
    MarkerArt.tsx   # Legacy marker art utilities
  lib/              # Supabase & email utilities
public/
  art/              # Hand-drawn SVG energy marks (mark-2..17)
  textures/         # Texture overlays
  overlays/         # Visual overlays
  frames/           # Frame assets
  halftones/        # Halftone pattern assets
```

## Key Components

| Component | Description |
|-----------|-------------|
| `EnergyMarks` | Places real SVG mark assets with scroll animations |
| `HeroMarks` | 10 marks scattered across hero at various sizes/rotations |
| `DarkSectionMarks` | 3 layout variants for dark backgrounds (inverted) |
| `LightSectionMarks` | 4 layout variants for light backgrounds (subtle) |
| `RedSectionMarks` | Preset for the red stats section |
| `manga/*` | Reusable primitives: RoughButton, InkFrame, MangaCard, etc. |

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services` | All Services Overview |
| `/services/oil-changes` | Oil Changes & Tune-Ups LP |
| `/services/brakes` | Brakes & Rotors LP |
| `/services/engine-diagnostics` | Engine Diagnostics & Repair LP |
| `/services/ac-heating` | AC & Heating LP |
| `/services/transmission` | Transmission Service LP |
| `/services/tires-alignment` | Tires & Alignment LP |
| `/services/electrical` | Electrical & Batteries LP |
| `/services/suspension` | Suspension & Steering LP |
| `/pricing` | Pricing |
| `/service-areas` | Service Areas |
| `/gallery` | Gallery |
| `/about` | About |
| `/contact` | Book Appointment |
| `/faq` | FAQ |
| `/reviews` | Reviews |
| `/privacy` | Privacy Policy |
| `/thank-you` | Thank You |

## Getting Started

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Deploy

Hosted on Vercel. Push to `main` to redeploy.

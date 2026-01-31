# Game Investments App (SkinVest)

A single-page, high-fidelity dashboard UI for tracking virtual item portfolios
across games like CS2, Dota 2, and Rust. The app is a static UI showcase with
mock data, charts, and inventory tables.

## Features
- Left sidebar navigation with status badges.
- Portfolio summary cards and performance history chart.
- Allocation donut chart and AI price prediction widget.
- Inventory table with per-item actions.
- Responsive layout built for a 1440px desktop canvas.

## Tech Stack
- React 18 + TypeScript
- Vite (React SWC plugin)
- Tailwind CSS (compiled CSS in `src/index.css`)
- Recharts for charts
- Lucide icons
- Radix UI-based components (`src/components/ui`)

## Project Structure
- `index.html` - Vite entry HTML
- `src/main.tsx` - React bootstrap
- `src/App.tsx` - Main dashboard UI and mock data
- `src/index.css` - Compiled Tailwind styles
- `src/components/ui` - Reusable UI primitives
- `src/Attributions.md` - Asset attribution notes

## Getting Started
1) Install dependencies
```
npm install
```

2) Start the dev server
```
npm run dev
```

The dev server is configured to open on port `3000`.

## Build
```
npm run build
```

Build output is emitted to `build/`.

## Data and Assets
- All chart series and inventory values in `src/App.tsx` are mock data.
- Image URLs are external (Unsplash) for demo purposes.
- Attribution details are tracked in `src/Attributions.md`.

## Notes
This project is a UI prototype; no backend or real market API calls are wired
in yet.

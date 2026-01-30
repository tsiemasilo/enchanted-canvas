# IEGS - Electrical & Security Solutions Website

## Overview
This is a React + Vite website for IEGS (Integrated Electrical & Security Solutions), a company providing electrical, solar, and security solutions for homes and businesses in Gauteng, South Africa.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack React Query
- **Routing**: React Router DOM v6

## Project Structure
```
src/
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── assets/         # Static assets (images, etc.)
└── index.css       # Global styles
```

## Development
- Run `npm run dev` to start the development server on port 5000
- The app uses Vite's HMR for fast refresh

## Netlify Deployment
The app is configured for Netlify hosting:
- `netlify.toml` - Build settings and SPA redirects
- `public/_redirects` - Fallback redirect file for client-side routing
- Build command: `npm run build`
- Publish directory: `dist`

## Recent Changes
- January 30, 2026: Added Netlify deployment configuration
- January 30, 2026: Migrated from Lovable to Replit environment
  - Updated vite.config.ts to use port 5000 and allow all hosts
  - Removed lovable-tagger dependency from build

## User Preferences
- None recorded yet

## Architecture Notes
- Single-page application with client-side routing
- Uses shadcn/ui component library built on Radix UI primitives
- Dark theme by default

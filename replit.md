# PupPress Landing Page

## Overview
PupPress is a React-based landing page for a digestive support supplement targeted at protein supplement consumers. The application is built with modern web technologies and features a Japanese-language interface.

## Project Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with animations
- **UI Components**: Radix UI primitives
- **Routing**: Wouter (lightweight router)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Package Manager**: pnpm

### Project Structure
```
puppress-lp/
├── client/              # Frontend application
│   ├── public/          # Static assets (images)
│   └── src/
│       ├── components/  # React components (UI library + custom)
│       ├── contexts/    # React contexts (Theme)
│       ├── hooks/       # Custom hooks
│       ├── lib/         # Utilities
│       └── pages/       # Page components
├── server/              # Express server for production
├── shared/              # Shared constants
└── patches/             # pnpm patches
```

## Development Setup

### Environment
- **Development Port**: 5000
- **Development Host**: 0.0.0.0 (configured for Replit proxy)
- **Package Manager**: pnpm 10.4.1

### Running Locally
The project is configured to run automatically via the "Server" workflow:
```bash
cd puppress-lp && pnpm run dev
```

### Available Scripts
- `pnpm run dev` - Start development server with Vite
- `pnpm run build` - Build for production (frontend + backend)
- `pnpm run start` - Start production server
- `pnpm run preview` - Preview production build
- `pnpm run check` - TypeScript type checking
- `pnpm run format` - Format code with Prettier

## Configuration

### Environment Variables (Optional)
The application uses these optional environment variables with fallbacks:
- `VITE_APP_TITLE` - Application title (default: "App")
- `VITE_APP_LOGO` - Logo URL (default: placeholder)
- `VITE_OAUTH_PORTAL_URL` - OAuth portal URL
- `VITE_APP_ID` - Application ID for OAuth
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

### Vite Configuration
- Configured to allow all hosts for Replit proxy compatibility
- Port 5000 for development
- Custom path aliases: `@/` for client/src, `@shared/` for shared

## Production Deployment

### Build Process
The build process compiles both frontend and backend:
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`

### Production Server
The Express server serves static files from the built frontend and handles client-side routing by serving `index.html` for all routes.

## Recent Changes
- **2025-10-23**: Initial Replit setup
  - Configured Vite to use port 5000 and allow all hosts for Replit proxy
  - Installed dependencies with pnpm
  - Set up development workflow
  - Verified application is running successfully

## Notes
- The landing page is in Japanese
- Uses Radix UI for accessible component primitives
- Includes digestive health and supplement-related imagery
- Configured with patches for wouter package

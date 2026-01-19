---
description: Repository Information Overview
alwaysApply: true
---

# KOVentures Website Information

## Summary
The official website for **KOVentures**, a company specializing in renewable energy solutions and precision calibration benches. Built with a modern tech stack focused on high-performance frontend, semantic HTML, and AI integration.

## Structure
- **src/app/**: Next.js App Router containing pages, layouts, and server actions.
- **src/components/**: Reusable UI components, including shadcn/ui and custom design elements.
- **src/ai/**: AI logic and flows utilizing **Genkit AI**.
- **src/lib/**: Utility functions and static resources.
- **src/hooks/**: Custom React hooks.
- **docs/**: Project blueprints and documentation.

## Language & Runtime
**Language**: TypeScript  
**Version**: ^5 (TypeScript), 15.5.9 (Next.js)  
**Build System**: Next.js Build System  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- `next`: 15.5.9
- `react`: ^19.2.1
- `genkit`: ^1.20.0
- `@genkit-ai/google-genai`: ^1.20.0
- `firebase`: ^11.9.1
- `framer-motion`: ^12.27.0
- `tailwindcss`: ^3.4.1
- `lucide-react`: ^0.475.0
- `nodemailer`: ^7.0.12

**Development Dependencies**:
- `typescript`: ^5
- `genkit-cli`: ^1.20.0
- `postcss`: ^8
- `@types/node`: ^20

## Build & Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## AI & Operations
The project integrates **Genkit AI** for intelligent features.

**Key Commands**:
```bash
# Start Genkit UI
npm run genkit:dev

# Watch Genkit flows
npm run genkit:watch
```

## Testing & Validation
**Quality Checks**:
- `npm run lint`: Runs Next.js linting.
- `npm run typecheck`: Runs TypeScript type checking.

**Commands**:
```bash
npm run lint
npm run typecheck
```

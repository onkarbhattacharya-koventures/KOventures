---
description: Repository Information Overview
alwaysApply: true
---

# KOVentures Website Information

## Summary
The official website for **KOVentures**, a company specializing in renewable energy solutions and precision calibration benches. Built with Next.js 15, TypeScript, and Genkit AI, featuring a unified architecture with centralized services.

## Structure
- **src/app/**: Next.js App Router (pages, layouts, server actions).
- **src/services/**: Business logic layer (e.g., `mail-service.ts`).
- **src/components/**: UI components (shadcn/ui and custom sections).
- **src/ai/**: Genkit AI configuration.
- **src/lib/**: Core utilities and constants.
- **src/hooks/**: Custom React hooks.

## Language & Runtime
**Language**: TypeScript  
**Version**: Next.js 15.5.9, TypeScript 5  
**Build System**: Next.js  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- `next`: 15.5.9
- `react`: ^19.2.1
- `genkit`: ^1.20.0
- `nodemailer`: ^7.0.12
- `framer-motion`: ^12.27.0
- `tailwindcss`: ^3.4.1

**Development Dependencies**:
- `typescript`: ^5
- `genkit-cli`: ^1.20.0
- `postcss`: ^8

## Build & Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## AI & Operations
Integrates **Genkit AI** via `src/ai/genkit.ts`.

**Key Commands**:
```bash
# Start Genkit UI
npx genkit start -- tsx src/ai/genkit.ts
```

## Testing & Validation
**Quality Checks**:
- `npm run lint`: Next.js linting.
- `npm run typecheck`: TypeScript verification.

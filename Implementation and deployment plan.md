# Goal Flash Cards - Implementation & Vercel Deployment Plan

## Current State
* **Project folder**: Contains only assets (logo-dark.png, PRD PDF, Terms list markdown) - no code yet
* **Environment**: Node v22.20.0, npm 10.9.3, Vercel CLI 48.10.5 installed
* **Content**: 76 terms across 5 categories (not 120+ as PRD mentions; will use provided terms)

## Proposed Changes

### Phase 1: Project Setup
1. Initialize Vite + React + TypeScript project
2. Configure ESLint and project structure per WARP.md
3. Copy logo-dark.png to public assets
4. Create base CSS variables for theming and GOAL brand colors

### Phase 2: Core Data & Types
1. Create TypeScript types (`src/types/index.ts`):
    * `Term` (id, term, definition, category)
    * `Category` enum
    * `GameState` (score, streak, currentIndex, etc.)
2. Create terms data file (`src/data/terms.ts`) with all 76 terms and definitions
    * Definitions will need to be written (only terms provided)

### Phase 3: State Management
1. Create `GameContext` (`src/context/GameContext.tsx`) for global state
2. Create `useGameState` hook (`src/hooks/useGameState.ts`):
    * Score/streak tracking
    * Card navigation
    * sessionStorage persistence
    * Category filtering

### Phase 4: UI Components
1. **Layout** (`src/components/Layout/`) - Header with logo, app title
2. **FlashCard** (`src/components/FlashCard/`) - 3D flip animation with CSS transforms
3. **ScorePanel** (`src/components/ScorePanel/`) - Score, streak, progress display
4. **CategoryFilter** (`src/components/CategoryFilter/`) - Category selection with counts
5. **HelpModal** (`src/components/HelpModal/`) - Instructions overlay
6. **ActionButtons** - Got It, Learn More, navigation buttons

### Phase 5: Screens & App Assembly
1. Welcome screen with category selection and start button
2. Game screen with card display, scoring, navigation
3. Wire up App.tsx to switch between screens

### Phase 6: Polish & Accessibility
1. Implement 3D card flip animation (0.4-0.6s, 60fps)
2. Add score increment animations
3. Keyboard navigation (spacebar, arrows)
4. ARIA labels and screen reader support
5. Color contrast validation (4.5:1 minimum)

### Phase 7: Testing & Build
1. Manual testing across breakpoints (1920x1080, 1366x768, 768x1024)
2. Run `npm run build` to verify production build
3. Run `npm run lint` to catch issues

### Phase 8: Vercel Deployment
1. Initialize git repository
2. Run `vercel` CLI to link project
3. Configure build settings (Vite defaults work)
4. Deploy to production with `vercel --prod`

## Key Technical Decisions
* **CSS Modules** for scoped styling (per WARP.md)
* **sessionStorage** for persistence (clears on browser close)
* **No external UI libraries** - vanilla CSS for animations to minimize bundle
* **Vite** build tool for fast dev and optimized production builds

## Term Definitions
The terms file only contains term names without definitions. I'll need to write appropriate definitions for each of the 76 terms based on industry knowledge. This is the largest content creation task.

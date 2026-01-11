# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Goal Flash Cards is a web-based educational game for GOAL platform employee onboarding. It teaches compliance, insurance industry, and platform-specific terminology through interactive flash cards with scoring and streak tracking.

**Status:** Pre-development (planning phase complete, implementation not started)

## Key Requirements (from PRD)

- 120+ terms across 5 categories: Legal & Regulatory, Advertising & Lead Generation, Metrics & KPIs, Insurance Industry, GOAL Strategy & Technology
- Interactive flip-card mechanics with 3D CSS animations (0.4-0.6s duration, 60fps)
- Session-based scoring with streak tracking (client-side sessionStorage)
- Category filtering without score reset
- WCAG 2.1 AA accessibility compliance
- Desktop and tablet support (no mobile <768px for MVP)
- No user authentication in MVP

## Recommended Tech Stack (per PRD)

- React + TypeScript
- CSS animations for card flips (CSS 3D transforms)
- sessionStorage for client-side data persistence
- Target browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Content Source

Flash card terms and categories are defined in `Terms for Flash Card Game.md`. Each term needs a definition added before implementation.

## Brand Assets

- Logo: `logo-dark.png` (use in header, minimum 100x50px)
- Category badge colors per PRD: Legal (blue #0066CC), Advertising (green #00AA44), Metrics (orange #FF8800), Insurance (red #CC0033), GOAL Strategy (purple #6633FF)

## Animation Requirements

- Card flip: 3D perspective transform, ease-in-out timing
- Score increment: "+1" pop-up with 0.5-0.8s fade-out
- Streak counter: glow/scale effect on increment
- Page transitions: 0.3-0.5s fade/slide
- Prevent double-flips: 0.8s debounce after flip

## Accessibility Checklist

- Keyboard navigation (tab, spacebar, arrow keys for card flip)
- ARIA landmarks and labels
- 4.5:1 minimum contrast ratio
- 44x44px minimum touch targets
- Screen reader announcements for score changes

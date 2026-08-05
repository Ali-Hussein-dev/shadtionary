# ADR-0006: Scroll-to-top floating action button

## Status

Accepted — 2026-08-05

## Context

Long entry and comparison pages require significant scrolling. Readers who reach the footer or end of an article need a quick way to return to the top without manual scrolling or relying on the browser chrome.

The site already sets `scroll-smooth` on the root `<html>` element and uses ghost icon buttons with Hugeicons in the header and footer.

## Decision

Add a global **Scroll-to-top FAB** mounted in the root layout:

- **Placement:** fixed floating action button, bottom-right (right-6 md:right-3 bottom-6)
- **Visibility:** appears after the user scrolls past **500px**; hidden on short pages
- **Style:** outline icon button (`variant="outline" size="icon-lg"`) with `ArrowUp01Icon`, matching header/footer social controls
- **Animation:** fade + scale transition (~200ms) on show/hide
- **Action:** `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Layering:** `z-40` — above page content, below the sticky header (`z-50`)
- **Component:** `src/components/scroll-to-top.tsx`, rendered in `src/routes/__root.tsx`

## Consequences

- New glossary term: **Scroll-to-top FAB** — a fixed, scroll-gated control that returns the viewport to the document top.
- The FAB may overlap TanStack devtools in development (devtools are `bottom-right`); acceptable for dev-only tooling.
- No per-route configuration; threshold and position are site-wide constants.

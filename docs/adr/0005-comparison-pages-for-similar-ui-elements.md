# ADR-0005: Comparison pages for similar UI elements

## Status

Accepted — 2026-07-27

## Context

Several Shadtionary entries describe overlapping UI patterns — drawer and sheet are often used interchangeably in conversation but ship as separate shadcn/ui components with different primitives and ergonomics. Readers need a dedicated place to understand when to pick one over the other without reading two full entry articles.

## Decision

Add a **Comparison** feature with an index and detail pages:

- **`/comparison`** — index of text-only **Comparison cards** (title, description, arrow). Each card links to a detail page. No thumbnails on the index.
- **`/comparison/$slug`** — detail page rendering a **Comparison body** markdown article.
- **Metadata** lives in `src/contstants/comparisons.json` — `slug`, `title`, `description`, `entries` (array of Entry slugs being compared). Mirrors the Entry index pattern.
- **Articles** live at `src/content/comparisons/{slug}.md`.
- **Article structure:** Overview → Key differences (table) → When to use A → When to use B → Related entries.
- **Navigation:** a "Comparisons" link in the site header.
- **First comparison:** `drawer-vs-sheet` only.

## Consequences

- New glossary terms: **Comparison**, **Comparison index**, **Comparison card**, **Comparison body**, **Comparison article structure**.
- `entries` in comparisons.json must reference valid Entry slugs from `data.json`.
- Adding a comparison requires index row + markdown file; no thumbnail or anatomy wiring.
- `urls.comparisonEdit(slug)` follows the same GitHub edit pattern as entries.

# ADR-0004: The new-entry command creates a complete Entry in one pass

## Status

Accepted — 2026-07-19

## Context

Adding a dictionary Entry touches five places: the Entry index in `src/contstants/data.json`, the Entry body at `src/content/{slug}.md`, a Component thumbnail plus its registration in `src/components/thumbnails/index.tsx`, and an anatomy diagram plus its registration in `src/components/anatomy/index.tsx`. A slug present in `data.json` without a matching thumbnail or anatomy component breaks the home page and entry page.

The glossary's **Placeholder scope** term says placeholder tasks create and export the component only, with page wiring as a follow-up. A one-shot "create entry" workflow is in tension with that.

## Decision

The `/new-entry` project command (`.cursor/commands/new-entry.md`) creates a **full entry** in a single run: index, body, thumbnail + registration, anatomy + registration. The app never sees a half-wired slug.

Supporting decisions made in the same session:

- **Research:** full — verify anatomy part names against the shadcn registry for official components (for UI blocks outside the shadcn docs, derive part names from common implementations) and check official docs/web for "also known as" names and usage guidance.
- **Thumbnail fidelity:** default to pure abstract chrome; use the real ui component only when its structural mechanics are what the thumbnail depicts, installing it via `pnpm dlx shadcn@latest add` when missing.
- **Verification:** `bun run check` + `bun run build`, plus browser screenshots of the listing card and `/content/{slug}`.

## Consequences

- **Placeholder scope** remains valid for standalone placeholder tasks, but the new-entry command is an explicit exception — it composes all steps in one run. The glossary term is amended to say so.
- The command encodes the canonical Entry body structure (Definition / Also known as / Component Anatomy / When to use it) and the `AnatomyContainer`-based diagram style as conventions; changing either means updating the command.

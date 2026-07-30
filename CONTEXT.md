# Shadtionary

A visual dictionary of shadcn/ui components — what they are, what they're called, and how to use them.

## Tooling

**Bun**:
The package manager and script runner for this project. Use `bun install` to install dependencies and `bun run <script>` for package.json scripts (e.g. `bun run dev`, `bun run build`).
_Avoid_: npm, pnpm, yarn (unless a third-party doc explicitly requires another tool, such as `pnpm dlx shadcn@latest add`)

## Language

**Thumbnail placeholder**:
A non-interactive visual preview of a UI component, rendered with abstract chrome. Sized small on listing cards; the same **Component thumbnail** may render larger on the entry page.
_Avoid_: Mini demo, live preview, skeleton

**Entry header**:
The back button, title, and tags for an entry. On desktop, lives in the left column and scrolls with the article. On mobile, appears below the preview (ADR-0003).
_Avoid_: Full-width header, page hero

**Entry layout**:
The entry page content area — `max-w-6xl` container. On desktop (`lg` / 1024px+), a two-column grid with the **Entry body** at ~70% width (left) and the **Entry preview** at ~30% width (right). Below `lg`, a single column per ADR-0003.
_Avoid_: 50/50 split, sidebar nav, `md` breakpoint, `max-w-3xl` inner constraint

**Preview chrome**:
The framed container around a **Component thumbnail** — bordered box, padded background, diagonal stripe overlay. Used on listing cards and **Entry preview** at the same fidelity.
_Avoid_: Bare placeholder, frameless preview

**Entry preview**:
The read-only **Component thumbnail** shown on an entry page — same component as the listing card, displayed larger in the right column beside the **Entry body**. On desktop, the preview is **sticky** at `top-20` (below the site header) and stays visible while the article scrolls. On mobile, the preview appears first (above the title/tags and article).
_Avoid_: Live demo, interactive preview, sandbox, `top-0` sticky

**Component thumbnail**:
A React component that renders a thumbnail placeholder for a specific shadcn/ui component. Lives in `src/components/ui/thumbnails/` and exports as `<Component>Thumbnail` (e.g. `AccordionThumbnail`).
_Avoid_: `*Placeholder` suffix, preview component

**Abstract chrome**:
Placeholder content made of muted bars, lines, and shapes — no readable copy — to suggest component structure at thumbnail size.
_Avoid_: Lorem ipsum, fake labels, skeleton text

**Expanded snapshot**:
A thumbnail placeholder default state where one accordion item is open, showing both trigger and content chrome.
_Avoid_: Collapsed-only, interactive default

**Placeholder scope**:
A placeholder task creates and exports the component only — wiring into pages is a separate follow-up. Exception: the **New-entry command** composes all steps in one run (ADR-0004).
_Avoid_: Bundling page integration into placeholder PRs

**Anatomy diagram**:
A labeled figure component that names each part of a UI component or block with `AnatomyLabel` tags over **Abstract chrome**. Lives in `src/components/anatomy/`, exports as `<Component>Anatomy`, built from `AnatomyContainer`/`AnatomySection`, and registered by slug in that folder's `index.tsx`.
_Avoid_: Annotated screenshot, live example, hand-rolled figure wrappers

**Entry article structure**:
The canonical section order of every **Entry body**: `## Definition`, `## Also known as`, `## Component Anatomy` (Part/Role table), `## When to use it`. No H1, no frontmatter.
_Avoid_: Custom section names, frontmatter metadata, H1 titles

**New-entry command**:
The `/new-entry` project command (`.cursor/commands/new-entry.md`) that creates a complete **Entry** in one pass — index, body, thumbnail, and anatomy diagram, all registered (ADR-0004).
_Avoid_: Partial scaffolds, half-wired slugs

**Entry**:
A dictionary article for one UI component or block, identified by a unique `slug`. Most entries cover official shadcn/ui components, but entries are not limited to them — UI blocks outside the shadcn docs qualify too.
_Avoid_: Page, post, component doc

**Entry index**:
The card-level metadata for an Entry — `slug`, `title`, `description`, `alsoCalled` — stored in `data.json` and used on the home page and content page header. The array is ordered newest-first: a new Entry index goes at the top.
_Avoid_: Frontmatter, manifest row, alphabetical ordering

**Entry body**:
The long-form article for an Entry, stored as a markdown file at `src/content/{slug}.md` and rendered on the content page.
_Avoid_: Content blob, article text

**Comparison**:
A side-by-side article explaining how two or more similar UI elements differ and when to pick each, identified by a unique `slug`. Comparisons reference existing Entries but are not Entries themselves.
_Avoid_: Entry, versus page, diff article

**Comparison index**:
The card-level metadata for a Comparison — `slug`, `title`, `description`, `entries` — stored in `comparisons.json` and used on the comparison index page and comparison detail page header.
_Avoid_: Frontmatter, manifest row

**Comparison card**:
A text-only link card on `/comparison` showing a Comparison's title and description. Links to `/comparison/{slug}`.
_Avoid_: Entry card, dual-thumbnail card

**Comparison body**:
The long-form article for a Comparison, stored as a markdown file at `src/content/comparisons/{slug}.md` and rendered on the comparison detail page.
_Avoid_: Content blob, article text

**Comparison article structure**:
The canonical section order of every **Comparison body**: `## Overview`, `## Key differences`, `## When to use …` (one per compared entry), `## Related entries`. No H1, no frontmatter.
_Avoid_: Entry article structure, custom section names

## Relationships

- A **Component thumbnail** renders a **Thumbnail placeholder** for one shadcn/ui component
- Each **Entry** has an **Entry index** and an **Entry body**
- An **Entry index** `slug` maps 1:1 to its **Entry body** file (`src/content/{slug}.md`)
- An **Entry index** is required for an Entry to appear in the app; an **Entry body** is optional until the article is written
- An **Entry body** without a matching **Entry index** is ignored
- Each **Entry** has a **Component thumbnail** on its listing card and as its **Entry preview** — every entry slug in `data.json` must have a matching thumbnail
- Each **Entry** has an **Anatomy diagram** — every entry slug in `data.json` must have a matching anatomy component
- Every **Entry body** follows the **Entry article structure**
- An **Entry preview** uses the same **Preview chrome** as listing cards
- Each **Comparison** has a **Comparison index** and a **Comparison body**
- A **Comparison index** `slug` maps 1:1 to its **Comparison body** file (`src/content/comparisons/{slug}.md`)
- A **Comparison index** `entries` array references Entry slugs from `data.json`
- Every **Comparison body** follows the **Comparison article structure**

## Example dialogue

> **Dev:** "Should the accordion thumbnail be clickable so users can expand items?"
> **Domain expert:** "No — placeholders are read-only snapshots at every size. Listing cards and entry previews both use the same non-interactive component."

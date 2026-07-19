# Shadtionary

A visual dictionary of shadcn/ui components — what they are, what they're called, and how to use them.

## Tooling

**Bun**:
The package manager and script runner for this project. Use `bun install` to install dependencies and `bun run <script>` for package.json scripts (e.g. `bun run dev`, `bun run build`).
_Avoid_: npm, pnpm, yarn (unless a third-party doc explicitly requires another tool, such as `pnpm dlx shadcn@latest add`)

## Language

**Thumbnail placeholder**:
A small, non-interactive visual preview of a UI component, sized for listing cards and entry thumbnails.
_Avoid_: Mini demo, live preview, skeleton

**Component placeholder**:
A React component that renders a thumbnail placeholder for a specific shadcn/ui component (e.g. `AccordionPlaceholder`).
_Avoid_: Thumbnail, preview component

**Abstract chrome**:
Placeholder content made of muted bars, lines, and shapes — no readable copy — to suggest component structure at thumbnail size.
_Avoid_: Lorem ipsum, fake labels, skeleton text

**Expanded snapshot**:
A thumbnail placeholder default state where one accordion item is open, showing both trigger and content chrome.
_Avoid_: Collapsed-only, interactive default

**Placeholder scope**:
A placeholder task creates and exports the component only — wiring into pages is a separate follow-up.
_Avoid_: Bundling page integration into placeholder PRs

**Entry**:
A dictionary article for one shadcn/ui component, identified by a unique `slug`.
_Avoid_: Page, post, component doc

**Entry index**:
The card-level metadata for an Entry — `slug`, `title`, `description`, `alsoCalled` — stored in `data.json` and used on the home page and content page header.
_Avoid_: Frontmatter, manifest row

**Entry body**:
The long-form article for an Entry, stored as a markdown file at `src/content/{slug}.md` and rendered on the content page.
_Avoid_: Content blob, article text

## Relationships

- A **Component placeholder** renders a **Thumbnail placeholder** for one shadcn/ui component
- Each **Entry** has an **Entry index** and an **Entry body**
- An **Entry index** `slug` maps 1:1 to its **Entry body** file (`src/content/{slug}.md`)
- An **Entry index** is required for an Entry to appear in the app; an **Entry body** is optional until the article is written
- An **Entry body** without a matching **Entry index** is ignored
- Each **Entry** may use a **Component placeholder** on its listing card

## Example dialogue

> **Dev:** "Should the accordion thumbnail be clickable so users can expand items?"
> **Domain expert:** "No — thumbnail placeholders are read-only snapshots. Interaction belongs on the full content page."

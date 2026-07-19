# Shadtionary

A visual dictionary of UI components. Learn the names of UI elements and their parts, so you can steer AI agents with precise vocabulary.

## Stack

TanStack Start, React 19, shadcn/ui, Tailwind CSS 4, TypeScript. Deployed to Cloudflare Workers.

## Development

```bash
bun install
bun dev        # start dev server on port 3000
bun run build  # production build
bun run deploy # build and deploy via wrangler
```

## Project Structure

```
src/
├── components/         # header, footer, entry layout, preview chrome
│   ├── anatomy/        # labeled anatomy diagrams per component
│   ├── thumbnails/     # listing-card preview per component
│   └── ui/             # shadcn components
├── content/            # one markdown entry per component
├── routes/             # TanStack Router routes
└── lib/                # content loading helpers
```

## Adding an entry

1. Add `src/content/<slug>.md`
2. Add a component thumbnail in `src/components/thumbnails/` — export it as `<Component>Thumbnail` and register it in the folder's `index.tsx`. Every entry must have one.
3. Add an anatomy diagram in `src/components/anatomy/`

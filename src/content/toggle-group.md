A toggle group is a **segmented row of toggle buttons** that share one container — each item stays visually pressed or unpressed, and the group enforces single-select or multi-select rules across the set.

The pattern is **compact mode switching in a toolbar**: use when several related on/off options should look like one control rather than separate buttons. Unlike tabs, toggle groups change modes or formatting without swapping large content panels; unlike radio groups, items can use icon-only chrome and support multi-select when `type="multiple"`.

## Also known as

- **Segmented control** — row of connected options where one or more segments can appear selected

## Component Anatomy

| Part | Role |
|------|------|
| **ToggleGroup** | Root container — selection type (`single` or `multiple`), shared variant and size |
| **ToggleGroupItem** | Individual toggle — pressed state, focus ring, and click/tap target within the group |
| **Icon** | Optional glyph — formatting symbol or action mark inside an item |
| **Label** | Optional text — names the item beside or after its icon |

## Common use cases

Use a toggle group when users need to **pick one or more modes from a compact toolbar row**:

- **Text formatting** — bold, italic, underline, or alignment in rich-text editors
- **View density** — comfortable, compact, or expanded layouts in data tables
- **Alignment or layout** — left, center, right, or justify controls in design tools
- **Filter chips in a bar** — starred, archived, or assigned views on list screens
- **Media controls** — shuffle, repeat, or caption toggles grouped in a player chrome

Avoid a toggle group when users must pick **one option from a long labeled list** (use radio buttons or a select), when only **one independent on/off setting** exists (use a switch or lone toggle button), or when switching should **replace a large content panel** (use tabs). Do not use icon-only items without `aria-label` — pressed state alone is not enough context for screen readers.

**Single-select** (`type="single"`) behaves like a segmented radio control — one active segment at a time. **Multiple-select** (`type="multiple"`) allows several pressed items, such as bold and italic together. **Outline** variants connect items into one bordered bar; **spacing** props separate chips for bookmark-style filters. **Size variants** (`sm`, `default`, `lg`) match dense toolbars and touch targets.

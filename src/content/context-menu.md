A context menu is a **floating action list** that opens on right-click (or long-press on touch) over a target region. It shows commands relevant to whatever the pointer hit — a file, a canvas selection, a table row — then closes when an item is chosen or the user dismisses it.

The pattern is **pointer-local commands**: use when actions should stay hidden until the user asks for them at a specific spot. Unlike a dropdown menu, there is usually no always-visible trigger button; the hit target itself is the trigger.

## Also known as

- **Right-click menu**
- **Contextual menu**

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — open/closed, controlled or uncontrolled |
| **Trigger** | Hit target that opens the menu on right-click or long-press |
| **Portal** | Renders the menu outside the DOM hierarchy to avoid clipping |
| **Content** | Floating panel that holds groups, items, and separators |
| **Group** | Cluster of related items |
| **Label** | Optional section heading inside a group |
| **Item** | A single actionable command |
| **Checkbox item** | Toggleable item — checked state shown with an indicator |
| **Radio group / item** | Exclusive choice within a set of options |
| **Shortcut** | Optional keyboard hint shown beside an item |
| **Separator** | Visual divider between groups or sections |
| **Sub** | Nested submenu — trigger row plus secondary content panel |

## Common use cases

Use a context menu when the user needs **actions tied to a specific target** without cluttering the chrome:

- **File and media surfaces** — open, rename, download, or delete the item under the pointer
- **Editors and canvases** — cut, copy, paste, arrange, or transform a selection
- **Data tables and lists** — row-level actions that would overwhelm every row if always visible
- **Canvas or map regions** — place, inspect, or filter at the clicked coordinates
- **Desktop-like web apps** — familiar right-click affordances for power users

Avoid a context menu when the action is a **primary, discoverable control** (use a button or dropdown), when users are mostly on **touch** and long-press is unreliable or conflicts with scroll, or when the same commands must be **findable without secondary click** (duplicate them in a toolbar or overflow menu). Do not hide the only path to a critical action behind right-click alone.

**Default** menus list plain items with optional shortcuts. **Checkbox** and **radio** item variants carry view toggles or exclusive choices without leaving the panel. **Submenus** nest secondary tools; keep nesting shallow so keyboard and pointer users can still navigate comfortably. Position the panel near the pointer and keep it dismissible with Escape or an outside click.

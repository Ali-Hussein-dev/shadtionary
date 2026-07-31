A dropdown menu is a **floating action list** that opens from a trigger — a button, icon, or avatar — and presents commands the user can run without leaving the page. Choosing an item typically performs an action and closes the menu.

The pattern is **on-demand commands**: use when related actions should stay out of the way until needed. Unlike a select, a dropdown menu does not commit a form value; it triggers behavior (navigate, edit, delete, share).

## Also known as

People also call this an **action menu**, **overflow menu**, or **popup menu**. **Kebab menu** and **meatball menu** refer to the ⋮ / ⋯ icon triggers often used for row or card actions. **Context menu** is a related pattern that opens on right-click or long-press rather than a visible trigger. **Select** and **combobox** look similar when open, but they choose a value for a form field instead of running commands. In code libraries, *dropdown menu* or *menu* are the usual names.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — open/closed, controlled or uncontrolled |
| **Trigger** | Control that opens the menu (button, icon button, avatar) |
| **Content** | Floating panel that holds groups, items, and separators |
| **Group** | Cluster of related items |
| **Label** | Optional section heading inside a group |
| **Item** | A single actionable command |
| **Shortcut** | Optional keyboard hint shown beside an item |
| **Separator** | Visual divider between groups or sections |
| **Sub** | Nested submenu — trigger row plus secondary content panel |

## Common use cases

Use a dropdown menu when the user needs a **compact set of actions** near a control or content item:

- **Account and app chrome** — profile, settings, theme, sign out
- **Overflow actions** — more options on a toolbar, table row, or card
- **File and document commands** — share, duplicate, download, rename
- **Grouped operations** — team invites, export formats, nested “Invite users” flows
- **Destructive actions** — delete or archive, often marked with a danger style

Avoid a dropdown menu when the choice is a **form value** that should persist as a field (use a select or radio group), when there are only **one or two primary actions** that deserve always-visible buttons, or when users need to **compare options side by side**. Do not use it for long, search-heavy catalogs — prefer a command palette or combobox. Right-click-only actions belong in a context menu, not a dropdown trigger.

**Default** menus list plain items with optional shortcuts. **Checkbox** and **radio** item variants let the menu carry toggles or exclusive choices (view density, sort order) without leaving the panel. **Submenus** nest secondary actions; keep nesting shallow so keyboard and touch users can still navigate comfortably.

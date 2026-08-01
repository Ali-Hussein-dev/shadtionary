A navigation menu is a **collection of site links** — often with hover or focus flyouts — that helps users move between sections of a product or marketing site. Triggers sit in a horizontal list; opening one reveals a content panel of links, featured destinations, or nested groups.

The pattern is **structured site navigation**: use when destinations should stay visible in the chrome and deeper routes need room to breathe in a panel. Unlike a dropdown menu, items primarily navigate rather than run page-local commands; unlike tabs, the menu is about routes, not in-page sections.

## Also known as

- **Nav menu**
- **Site nav**
- **Mega menu** — when the panel is wide and content-rich
- **Navbar** — surrounding chrome that often hosts it
- **Menubar** — visually persistent menu common in desktop applications that provides quick access to a consistent set of commands
- **Top nav**
- **Header menu**

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — which item is open, shared viewport positioning |
| **List** | Horizontal row of top-level navigation items |
| **Item** | One top-level entry — either a plain link or a trigger plus content |
| **Trigger** | Control that opens a content panel (often with a chevron) |
| **Content** | Panel body — links, featured cards, or grouped destinations |
| **Link** | Navigational destination inside the list or a content panel |
| **Indicator** | Optional visual cue under the active or hovered trigger |
| **Positioner** | Positions the shared popup (portal, popup shell, and viewport) |

## Common use cases

Use a navigation menu when users need **persistent, hierarchical site routes** from a header or marketing chrome:

- **Product marketing sites** — Product, Solutions, Resources with rich flyout panels
- **Documentation hubs** — Guides, API, Examples with grouped link lists
- **Multi-section apps** — Workspace areas that open secondary destination grids
- **Simple top links** — Mix flyout triggers with plain list links (Docs, Pricing)

Avoid a navigation menu when the choices are **page-local actions** (use a dropdown menu), when you are switching **in-page panels** (use tabs), when the trail is a **path to the current page** (use breadcrumbs), or when space is tight on mobile — collapse to a sheet, drawer, or accordion instead. Do not stuff every site page into one mega panel; keep groups scannable.

**Link-only** items sit in the list without a panel. **Trigger + content** items open a shared viewport that morphs between panels as focus moves. Keep flyouts shallow; deep nesting belongs in a sidebar or dedicated index page.

A hover card is a **rich floating preview** that appears when the user hovers over or focuses a trigger — typically a link, avatar, or handle — to reveal structured content without navigating away.

The pattern is **preview on hover**: use when sighted users need more context than a tooltip can carry — an avatar, title, description, or metadata — but the full destination is still one click away. Unlike a tooltip, a hover card holds multiple lines and optional media. Unlike a popover, it opens on hover and focus rather than click, and is meant for discovery rather than committed interaction.

## Also known as

- **Link preview** — floating summary of content behind a hyperlink or mention

## Component Anatomy

| Part | Role |
|------|------|
| **HoverCard** (Root) | State container — open/closed, `openDelay`, `closeDelay`, controlled or uncontrolled |
| **HoverCardTrigger** | Element that opens the card on hover or keyboard focus — often a link or button via `asChild` |
| **HoverCardContent** | Floating card panel — positioned with `side`, `align`, and `sideOffset`; renders through a portal |

## Common use cases

Use a hover card when the user needs a **quick, non-blocking preview** at the point of reference:

- **User and profile mentions** — show avatar, handle, bio, and join date when hovering `@username`
- **Link previews** — surface page title, description, and thumbnail for an external URL
- **Product or record summaries** — preview SKU, price, or status from a table link
- **Team and org references** — reveal member count, role, or location from an inline mention
- **Media attribution** — preview creator, license, or dimensions from a credit link

Avoid a hover card when the revealed content **requires interaction** — forms, buttons, or copy actions belong in a popover or dialog. Do not use it for **critical instructions** users must read to proceed, or on **touch-only flows** where hover does not exist — use a tap-to-expand pattern or navigate directly. If the preview is a single short label, a tooltip is lighter; if the user must click to open and work inside the panel, use a popover instead.

**Default** hover cards open after a short delay (often ~700ms) so accidental pointer passes do not flash content. **Fast** cards lower `openDelay` for dense social or mention UIs. **Wide** cards increase content width for link previews with thumbnails. Keep the panel scannable — a title, one or two supporting lines, and optional metadata; route full detail to the linked destination.

A popover is a **click-open floating panel** anchored to a trigger element — a button, input, or icon — that reveals interactive content without navigating away or blocking the entire page.

The pattern is **contextual interaction on demand**: use when the user needs a short form, picker, filter set, or action cluster tied to a specific control. Unlike a tooltip, a popover holds focusable content — inputs, buttons, links. Unlike a dialog, it does not dim the page or demand full attention; the user can dismiss it by clicking outside or pressing Escape and often keep working in the surrounding layout. Unlike a hover card, it opens on click (or programmatic toggle) and supports committed tasks rather than passive preview.

## Also known as

- **Floating panel** — non-modal surface positioned beside its trigger

## Component Anatomy

| Part | Role |
|------|------|
| **Popover** (Root) | State container — open/closed, `modal`, controlled or uncontrolled |
| **PopoverTrigger** | Control that toggles the panel — button, input, or custom element via `asChild` |
| **PopoverAnchor** | Optional positioning reference — anchors content to an element other than the trigger |
| **PopoverContent** | Floating panel — portaled, positioned with `side`, `align`, and `sideOffset`; holds the interactive body |
| **PopoverHeader** | Optional top group — title and description above the main body |
| **PopoverTitle** | Primary heading — names the panel's purpose |
| **PopoverDescription** | Supporting text — muted context or instructions |
| **PopoverClose** | Optional dismiss control — explicit close button inside the panel |

## Common use cases

Use a popover when the user needs a **compact, interactive surface** at the point of action:

- **Inline forms** — adjust dimensions, rename a layer, set a quick filter without a full page
- **Pickers** — date, time, color, or emoji selection opened from a field trigger
- **Settings and options** — column visibility, sort rules, export format, chart configuration
- **Rich toolbars** — formatting controls, mention picker, or tag editor from a single button
- **Confirmations lite** — destructive action with a short explanation and two buttons, without modal weight

Avoid a popover when the content is **long or multi-step** (use a dialog, drawer, or dedicated page), when users only need a **one-line hint** (use a tooltip), or for **read-only preview on hover** (use a hover card). Do not nest complex workflows inside a popover — if focus must stay trapped until completion, prefer a dialog. On touch devices, ensure the trigger is tappable and the panel is large enough for finger targets.

**Default** popovers open below the trigger, flip on collision, and close on outside click. **Modal** popovers set `modal` on the root for stricter focus trapping when the panel must hold attention. **Wide** panels increase `PopoverContent` width for multi-column filters or small forms. **Anchored** layouts use `PopoverAnchor` when the visible trigger and positioning reference differ — common for search-as-you-type result panels.

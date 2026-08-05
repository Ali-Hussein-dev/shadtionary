A tooltip is a **brief descriptive label** that appears when the user hovers over or focuses a trigger element. It anchors a short text hint to a control — an icon button, truncated label, or inline reference — without blocking the page or demanding a click.

The pattern is **supplementary context on demand**: use when a control needs a few words of clarification that would clutter the layout if always visible. Unlike a popover, a tooltip is non-interactive — no links, buttons, or focusable content inside. Unlike a toast, it is tied to a specific trigger and appears only while that trigger is hovered or focused.

## Also known as

- **Hint** — short label revealed on hover or keyboard focus

## Component Anatomy

| Part | Role |
|------|------|
| **TooltipProvider** | App-level wrapper — sets show and hide delay for descendant tooltips |
| **Tooltip** (Root) | State container — open/closed, controlled or uncontrolled |
| **TooltipTrigger** | Element that reveals the tooltip on hover or keyboard focus |
| **TooltipContent** | Floating label panel — short text anchored to the trigger via a positioner |
| **Arrow** | Optional pointer inside content — visually connects the label to the trigger |

## Common use cases

Use a tooltip when the user needs **brief, non-critical clarification** at the point of interaction:

- **Icon-only buttons** — name a toolbar or action button that has no visible text label
- **Truncated text** — show the full string when a table cell or title is clipped
- **Abbreviations and jargon** — expand a short code or metric name on hover
- **Disabled controls** — explain why an action is unavailable without a separate message
- **Chart and data points** — surface exact values on hover over a bar, dot, or slice

Avoid a tooltip when the content is **essential to completing a task** (use visible copy or an inline alert), when users need to **click or interact** with the revealed content (use a popover or dialog), or on **touch-only flows** where hover does not exist (use a toggletip, inline help, or always-visible label). Do not hide critical warnings or instructions in tooltips — many users never trigger them.

**Default** tooltips show plain text above or beside the trigger with a short open delay. **Instant** tooltips set `delay={0}` on `TooltipProvider` for dense toolbars. **With arrow** is the common shadcn default — the pointer reinforces which control the label describes. Keep copy to one or two short lines; longer explanations belong in a hover card, popover, or help panel.

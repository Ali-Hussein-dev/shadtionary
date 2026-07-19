## Definition

Tabs are a **tabbed interface** that organizes related content into labeled panels, showing one panel at a time. A row of tab triggers sits above or beside the active panel so users can switch views without leaving the page.

The pattern is **peer content switching**: use when several related sections share the same screen space and users need to move between them quickly. Whether the list is horizontal or vertical, or uses raised or line-style triggers, is a configuration choice — not a different component.

## Also known as

People also call this a **`tabbed interface`**, **`tab panel`**, **`tab bar`**, or **`tabbed navigation`**. **`Segmented control`** often describes a compact two-to-four-option variant with pill-shaped triggers. **`Tab strip`** and **`tab list`** refer to the trigger row specifically.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — active tab value, controlled or uncontrolled |
| **List** | Horizontal or vertical row that groups tab triggers |
| **Trigger** | Selectable tab label — activates its paired panel |
| **Indicator** | Active-state marker — underline, background, or border on the selected trigger |
| **Content** | Panel body — visible only when its trigger is active |

## When to use it

Use tabs when users need to **switch between related views** in the same context:

- **Settings screens** — profile, security, notifications, billing
- **Detail views** — overview, activity log, attachments on a record
- **Filtered content** — all, active, archived lists under one heading
- **Dashboard sections** — metrics, charts, tables for the same topic
- **Form grouping** — split a long form into logical sections without full navigation

Avoid tabs when users need to **compare content side by side** (use columns or a split layout), when there are **too many options** (more than roughly five to seven tabs — use a select menu or sidebar nav), or when each section is a **major destination** that deserves its own URL (use routed pages instead). Do not nest tabs inside tabs; flatten the hierarchy or promote inner groups to sub-sections.

**Default** tabs use a muted list with a raised active trigger. **Line** tabs underline the active item — lighter chrome for dense toolbars. **Vertical** tabs place the list beside the panel — useful in settings sidebars. Keep tab labels short; if triggers wrap to multiple lines, the set has likely outgrown tabs.

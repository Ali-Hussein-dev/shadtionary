**Dropdown menu** and **select** both open a floating list from a trigger, so they look alike when open. They solve different jobs: a menu runs **commands**, a select commits a **form value**. Choosing the wrong one usually shows up as awkward forms, missing selected-state, or action lists that feel like settings fields.

## Key differences

| | **Dropdown Menu** | **Select** |
|---|-----------|----------|
| **Primary job** | Trigger actions (edit, share, delete) | Pick one value for a field |
| **After choosing** | Runs a command, then closes | Stores the selection; trigger shows the value |
| **Form role** | Not a form control | Form control with a persisted value |
| **Typical trigger** | Button, icon, or avatar | Field-like control with current value or placeholder |
| **Also called** | Action menu, overflow menu, popup menu | Dropdown, picker, listbox |

## Common use cases for Dropdown Menu

A **compact set of commands** near a control or content item:

- **Account and app chrome** — profile, settings, theme, sign out
- **Overflow actions** — more options on a toolbar, table row, or card
- **File and document commands** — share, duplicate, download, rename
- **Destructive actions** — delete or archive, often marked with a danger style

## Common use cases for Select

A **single value from a known set**, kept as form or filter state:

- **Form fields** — country, status, role, priority, timezone
- **Filters** — sort order, category, page size
- **Settings** — theme, language, notification frequency
- **Grouped options** — cities by region, plans by tier, fruits by type

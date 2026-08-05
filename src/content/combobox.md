A combobox is a **searchable single-choice control** that combines a text input with a filterable option list — users type to narrow choices and pick one predefined value without leaving the form.

The pattern is **type to find, then select**: use when the option set is too long to scan in a closed dropdown but still finite and known in advance. Unlike a select, typing filters the list in real time. Unlike a plain text field, the committed value must come from the option set (or an explicitly allowed create flow). Unlike a command palette, a combobox is an inline form control anchored to one field, not a global action surface.

## Also known as

- **Autocomplete** — input that suggests and completes choices as the user types

## Component Anatomy

| Part | Role |
|------|------|
| **Combobox** (Root) | State container — open/closed, selected value, filtering, controlled or uncontrolled |
| **ComboboxInput** | Text entry — accepts typing to filter options; often wrapped in an input group with trigger and clear |
| **ComboboxTrigger** | Toggle control — chevron or button that opens the list without losing input focus |
| **ComboboxClear** | Optional reset — clears the current selection and input |
| **ComboboxContent** | Floating popup panel — portaled list surface positioned below or beside the input |
| **ComboboxList** | Scrollable option list — holds filtered items and empty state |
| **ComboboxItem** | Single selectable option — highlights on keyboard or pointer navigation |
| **ComboboxEmpty** | Empty state — shown when the current filter matches no options |
| **ComboboxGroup** | Optional cluster of related items |
| **ComboboxLabel** | Section heading inside a group |
| **ComboboxSeparator** | Visual divider between groups or sections |

## Common use cases

Use a combobox when the user must **pick one value from a long or unfamiliar list** and typing is faster than scrolling:

- **Location and entity pickers** — country, city, airport, organization, or account from hundreds of entries
- **People and assignee fields** — search teammates, customers, or contacts by name or email
- **Product and catalog lookup** — SKU, part number, or menu item where labels are not memorized
- **Taxonomy with search** — category, tag, or status when the full tree is too large for a select
- **Async-backed fields** — debounced queries against an API while keeping a single committed value

Avoid a combobox when there are only **a few fixed options** (use a select, radio group, or toggle group), when users may enter **any free-text value** with no list constraint (use a text field), or when the goal is **global navigation or commands** (use a command palette). Do not use it for **multi-select without a chip UI** — use a multi-select combobox with chips or a checkbox group instead. If users never need to type, a select is simpler.

**Default** comboboxes filter client-side as the user types and commit on item selection. **Async** comboboxes debounce server requests and show loading or empty states while results arrive. **Multi-select** variants use `ComboboxChips` to show selected values as removable tags with an inline filter input. **Popover + Command** compositions remain common for button-triggered pickers; the inline `ComboboxInput` pattern is the dedicated form-field shape in current shadcn/ui.

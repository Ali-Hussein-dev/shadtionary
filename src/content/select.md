A select is a **single-choice list control** that keeps options hidden until the user opens it. A trigger shows the current value (or a placeholder); a floating panel lists the choices so the user can pick one without leaving the form.

The pattern is **closed choice from a list**: use when the options are known in advance and only one value is needed. Unlike a native `<select>`, a styled select can group, label, and scroll long option sets while matching the rest of the UI.

## Also known as

People also call this a **dropdown**, **dropdown select**, or **picker**. **Listbox** usually refers to the open option list (or a permanently visible multi-select list). **Combobox** is a related pattern that pairs a text field with a list — users can type to filter or enter a value. **Dropdown menu** is often confused with select; menus trigger actions, while selects commit a form value. In HTML, the native control is simply `<select>`.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — open/closed and selected value, controlled or uncontrolled |
| **Trigger** | Button that opens the list and frames the current value |
| **Value** | Displays the selected label, or a placeholder when empty |
| **Content** | Floating panel that holds the option list |
| **Group** | Optional cluster of related items |
| **Label** | Section heading inside a group |
| **Item** | A single selectable option |
| **Separator** | Visual divider between groups or sections |

## Common use cases

Use a select when the user needs to **pick one value from a known set**:

- **Form fields** — country, status, role, priority, timezone
- **Filters** — sort order, category, page size
- **Settings** — theme, language, notification frequency
- **Grouped options** — fruits by type, cities by region, plans by tier
- **Long lists** — when scrollable content and section labels keep dozens of options manageable

Avoid a select when there are only **two or three options** that benefit from always being visible (use radio buttons or a toggle group), when users need to **compare options side by side**, when they must **select multiple values** (use a multi-select or checkbox group), or when the list is **search-heavy** and typing to filter is the main interaction (use a combobox or command palette). Do not use a select for navigation or destructive actions — that belongs in a menu.

**Default** selects show a bordered trigger with a chevron. Prefer the **native select** (`NativeSelect`) when you want browser chrome and minimal JS. Keep option labels short; if users must scan paragraphs of text per option, the pattern has likely outgrown a select.

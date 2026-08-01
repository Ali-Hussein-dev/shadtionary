A text field is a **single-line text input** for capturing short, free-form values — a bordered control where users type names, emails, search queries, or other brief strings.

The pattern is **typed entry**: use when users need to enter or edit a short string with full keyboard control and immediate feedback. Unlike a select, the value is not limited to predefined options; unlike a textarea, it stays on one line for compact forms and toolbars.

## Also known as

- **Input field** — the common form-control name for a labeled text entry box

## Component Anatomy

| Part | Role |
|------|------|
| **Field** | Wrapper — groups label, control, helper text, and error for one form value |
| **FieldLabel** | Accessible label — names the field and focuses the input via `htmlFor` |
| **Input** | Text control — native `<input>` styled for value entry, placeholder, and focus states |
| **FieldDescription** | Helper text — optional muted guidance below the control |
| **FieldError** | Validation message — replaces or supplements description when the value is invalid |

## Common use cases

Use a text field when a form or toolbar needs **short, unconstrained text**:

- **Identity fields** — name, username, company, job title
- **Contact details** — email, phone, website URL (match `type` to the data)
- **Search** — query bars, filter inputs, command-palette search
- **Authentication** — username or password entry alongside submit actions
- **Inline editing** — rename a file, edit a cell, update a setting value

Avoid a text field when users choose from a **fixed list** (use a select or combobox), need **multiple lines** (use a textarea), or toggle a **binary setting** (use a switch or checkbox). Do not use a plain input for **date, time, or file** data without the matching `type` — prefer dedicated date, time, or file inputs so browsers supply the right picker and keyboard.

**Labeled fields** pair `FieldLabel` with `Input` via matching `id` and `htmlFor`. **Icon or button add-ons** wrap the input in an `InputGroup` for search, currency, or copy actions. **Validation** sets `aria-invalid` on the input and `data-invalid` on the field so error styling and `FieldError` stay in sync. Pick `type="email"`, `type="password"`, `type="search"`, or `type="url"` when the value shape is known — mobile keyboards and autofill behave better than `type="text"` alone.

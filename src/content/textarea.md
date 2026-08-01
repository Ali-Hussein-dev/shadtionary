A textarea is a **multi-line text input** for capturing longer free-form values — a resizable control where users type comments, descriptions, messages, or other paragraph-length strings.

The pattern is **extended typed entry**: use when a single line is not enough and users need to see and edit several lines at once. Unlike a text field, it grows vertically; unlike a rich-text editor, it stays plain text with predictable line breaks.

## Also known as

- **Multi-line text input** — the common form-control name for a labeled box that accepts paragraphs

## Component Anatomy

| Part | Role |
|------|------|
| **Field** | Wrapper — groups label, control, helper text, and error for one form value |
| **FieldLabel** | Accessible label — names the field and focuses the textarea via `htmlFor` |
| **Textarea** | Multi-line control — native `<textarea>` styled for value entry, placeholder, and focus states |
| **FieldDescription** | Helper text — optional muted guidance below the control |
| **FieldError** | Validation message — replaces or supplements description when the value is invalid |

## Common use cases

Use a textarea when a form needs **longer, unconstrained plain text**:

- **Feedback and reviews** — product comments, support messages, survey responses
- **Descriptions** — bio, project summary, listing details, release notes
- **Notes and drafts** — internal comments, meeting notes, quick long-form capture
- **Addresses and instructions** — shipping details, delivery notes, how-to steps
- **Code or markup snippets** — short JSON, config, or template blocks in monospace styling

Avoid a textarea when users need **one short value** (use a text field), pick from **predefined options** (use a select or combobox), or format text with **bold, links, or lists** (use a rich-text editor). Do not use a textarea for **binary toggles** or **numeric-only** entry — the wrong control confuses keyboard and validation behavior.

**Labeled fields** pair `FieldLabel` with `Textarea` via matching `id` and `htmlFor`. **Character limits** combine `maxLength` with helper text or a live counter so users know remaining space. **Validation** sets `aria-invalid` on the textarea and `data-invalid` on the field so error styling and `FieldError` stay in sync. Set `rows` or `min-h-*` for a sensible default height; `field-sizing-content` lets the control grow with content when appropriate.

A checkbox group is a **multi-select list control** that presents related binary toggles under one heading. Each option has its own square indicator and label, and users may select none, one, or many choices independently.

The pattern is **explicit multi-opt-in**: use when several yes/no decisions belong together and more than one answer is valid. Unlike radio buttons, selections do not exclude each other; unlike a multi-select dropdown, every option stays visible for side-by-side comparison.

## Also known as

- **Checkbox list** — common label in forms and filter panels

## Component Anatomy

| Part | Role |
|------|------|
| **FieldSet** | Group container — wraps related checkboxes with shared context |
| **Legend** | Group heading — names the set for screen readers |
| **Checkbox** | Individual control — checked, unchecked, or indeterminate state per option |
| **Indicator** | Visual mark — check or minus icon on the active control |
| **Label** | Option text — names each choice beside its checkbox |

## Common use cases

Use a checkbox group when users need to **pick multiple values from a related set**:

- **Notification preferences** — email, push, SMS channels toggled independently
- **Filter panels** — categories, tags, amenities, or feature flags
- **Permissions and access** — grant several roles or capabilities at once
- **Bulk selection** — table rows with a header checkbox for select-all (indeterminate)
- **Optional add-ons** — extras, toppings, or plan features that stack

Avoid a checkbox group when only **one option** may be chosen (use radio buttons or a select), when there is a **single on/off setting** (use one checkbox or a switch), or when the list is **long and search-heavy** (use a multi-select combobox). Do not split one logical consent into many pre-checked boxes — keep legal choices clear and default sensitive options off.

**Vertical** groups scan well for settings and forms. **Horizontal** rows suit short option sets with brief labels. A **parent checkbox** with indeterminate state works for select-all when child rows can be partially selected. Pair the group with a fieldset legend or section heading so assistive tech announces the set before each option.

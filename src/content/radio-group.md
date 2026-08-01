A radio group is a **single-select list control** that presents related options where only one choice can be active at a time. Each option has a circular indicator and label, and selecting one automatically deselects the rest.

The pattern is **exclusive choice**: use when users must pick exactly one value from a small, related set and every option should stay visible for comparison. Unlike checkboxes, selections are mutually exclusive; unlike a select, all choices remain on screen without opening a panel.

## Also known as

- **Radio buttons** — the classic HTML form control name for mutually exclusive options

## Component Anatomy

| Part | Role |
|------|------|
| **FieldSet** | Group container — wraps related radio options with shared context |
| **Legend** | Group heading — names the set for screen readers |
| **RadioGroup** | State container — manages selected value, orientation, and keyboard focus |
| **RadioGroupItem** | Individual control — one exclusive option identified by a unique value |
| **Indicator** | Selected-state mark — filled dot rendered on the active item |
| **Label** | Option text — names each choice beside its radio control |

## Common use cases

Use a radio group when users need to **pick exactly one value from a related set**:

- **Shipping methods** — standard, express, or overnight delivery
- **Payment type** — card, bank transfer, or invoice
- **Plan or tier selection** — free, pro, or enterprise with visible trade-offs
- **Display density** — compact, comfortable, or spacious layout
- **Survey answers** — Likert scales and single-answer questions

Avoid a radio group when users may select **multiple options** (use a checkbox group or multi-select), when there is only a **binary on/off** choice (use a switch or single checkbox), or when the list is **long or search-heavy** (use a select or combobox). Do not use radio buttons for actions or navigation — those belong in menus or button groups.

**Vertical** groups scan well in forms and settings. **Horizontal** rows suit two or three short labels, such as size or alignment. **Card-style** layouts wrap each item in a larger hit target when options need descriptions or pricing. Pair the group with a fieldset legend or section heading so assistive tech announces the set before each option.

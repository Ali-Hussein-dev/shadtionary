A slider is a **range input control** that lets users pick a numeric value — or span of values — by dragging a thumb along a horizontal or vertical track.

The pattern is **continuous value selection**: use when users need to explore a range with immediate visual feedback, such as volume, brightness, or price filters. Unlike a text field, the value is constrained to min, max, and step; unlike radio buttons, the choice is granular rather than discrete.

## Also known as

- **Range slider** — the label most UI libraries and design systems use for draggable track controls

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — `min`, `max`, `step`, value array, orientation, and keyboard/drag handlers |
| **Track** | Full-length rail — the background path the thumb moves along |
| **Range** | Filled segment — highlights the selected portion from the origin (or between two thumbs) |
| **Thumb** | Draggable handle — one per value; users drag or focus it to change the selection |

## Common use cases

Use a slider when users need to **set or filter a numeric value along a known range**:

- **Media controls** — volume, playback speed, zoom level
- **Display and accessibility** — brightness, text size, contrast
- **Filters** — price range, distance radius, rating threshold, year span
- **Creative tools** — opacity, brush size, blur amount, color channel intensity
- **Form preferences** — satisfaction score, budget estimate, quantity when exact typing is awkward

Avoid a slider when values are **few and named** (use radio buttons or a select), when users need **precise entry** of arbitrary numbers (pair with a text field or use stepper buttons), or when the range is **unknown or open-ended** (use a number input). Do not use a slider for **binary on/off** settings — a switch communicates immediate toggle semantics better.

**Single-thumb** sliders pick one value — `defaultValue={[50]}` with one thumb. **Range sliders** use two thumbs and a value array (`[25, 75]`) for min–max filters. **Vertical** sliders set `orientation="vertical"` for compact panels like audio mixers. Show **current value** beside the track or in a tooltip on drag so screen-reader and sighted users share the same feedback. Wrap in `Field` with `FieldLabel` when the control sits in a labeled form.

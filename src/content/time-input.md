## Definition

A time input is a **native time field** that uses the browser's built-in time control (`type="time"`) for choosing a time of day without a custom clock popover. The styled `Input` accepts an `HH:MM` or `HH:MM:SS` string and opens the platform's time picker when focused or clicked.

The pattern is **platform-native entry**: use when a compact form field should defer picker UI to the operating system while still constraining input to valid hours and minutes. Unlike a custom time picker, the clock panel is provided by the browser — styling is limited but behavior is familiar on mobile.

## Also known as

People also call this a **time field**, **native time picker**, or **HTML5 time input**. **Meeting time field** and **appointment time field** describe common form contexts. **Datetime-local input** is the sibling control that adds a date (`type="datetime-local"`). Do not confuse this with a **time picker** — that pattern uses segmented fields or a custom clock UI; a time input keeps the picker native. In code, *time input* or *input type="time"* are the most common names — shadcn/ui implements it with the `Input` component (`type="time"`).

## Component Anatomy

| Part | Role |
|------|------|
| **Input** | Native time control — `type="time"`, bordered field that holds the value and picker affordance |
| **Icon** | Optional clock glyph inside the field — signals time entry at a glance |
| **Value** | Displayed time segments — browser-rendered text for hours, minutes, and optional seconds |
| **Picker button** | Native time control on the field edge — opens the OS time picker |

## When to use it

Use a time input when a form needs a **single time of day** with minimal custom UI:

- **Standard form fields** — meeting start, opening hours, reminder time alongside text inputs
- **Mobile-first flows** — leverage OS-native pickers tuned for touch and locale
- **Simple constraints** — `min`, `max`, and `step` bound selectable times without custom logic
- **Keyboard entry** — users can type or arrow through segments where the browser allows
- **Low maintenance** — no popover state, clock component, or format parsing layer

Avoid a time input when you need **12-hour AM/PM display with custom formatting** (use a segmented time picker), **timezone selection** (pair with a separate control or store UTC in form state), **duration or elapsed-time entry** (use a dedicated duration field), or **pixel-perfect cross-browser consistency** (native pickers vary by platform). Do not store `Date` objects directly on the input `value` — HTML inputs expect strings; convert to and from `Date` in form state (e.g. `toLocaleTimeString` with `hourCycle: "h23"` for controlled values).

**Icon-enhanced** fields wrap the input in a relative container with left padding (`pl-9`) so a clock icon does not overlap the value. **Stepped** fields set `step` to `60` for minute precision or `1` to include seconds. For combined date and time on one field, use `type="datetime-local"` or pair a [Date Input](/content/date-input) with a time input in the same row.

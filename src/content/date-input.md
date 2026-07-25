## Definition

A date input is a **native date field** that uses the browser's built-in date control (`type="date"`) for choosing a day without a custom calendar popover. The styled `Input` accepts a `YYYY-MM-DD` string and opens the platform's date picker when focused or clicked.

The pattern is **platform-native entry**: use when a compact form field should defer picker UI to the operating system while still constraining input to valid dates. Unlike a [Date Picker](/content/date-picker), the calendar panel is provided by the browser — styling is limited but behavior is familiar on mobile.

## Also known as

People also call this a **date field**, **native date picker**, or **HTML5 date input**. **Birth date field** and **appointment date field** describe common form contexts. **Datetime-local input** is the sibling control that adds time (`type="datetime-local"`). Do not confuse this with a **date picker** — that pattern composes a custom calendar popover; a date input keeps the picker native. In code, *date input* or *input type="date"* are the most common names — shadcn/ui implements it with the `Input` component (`type="date"`).

## Component Anatomy

| Part | Role |
|------|------|
| **Input** | Native date control — `type="date"`, bordered field that holds the value and picker affordance |
| **Icon** | Optional calendar glyph inside the field — signals date entry at a glance |
| **Value** | Displayed date segments — browser-rendered text for year, month, and day |
| **Picker button** | Native calendar control on the field edge — opens the OS date picker |

## When to use it

Use a date input when a form needs a **single date** with minimal custom UI:

- **Standard form fields** — birth date, due date, expiration date alongside text inputs
- **Mobile-first flows** — leverage OS-native pickers tuned for touch and locale
- **Simple constraints** — `min` and `max` disable out-of-range days without custom logic
- **Keyboard entry** — users can type or arrow through segments where the browser allows
- **Low maintenance** — no popover state, calendar component, or format parsing layer

Avoid a date input when you need **custom date formatting** in the field (use a date picker with a formatted trigger), **visual disabled ranges** on a month grid (use a [Calendar](/content/calendar) or date picker), **date ranges** with linked start/end highlights, or **pixel-perfect cross-browser consistency** (native pickers vary by platform). Do not store `Date` objects directly on the input `value` — HTML inputs expect strings; convert to and from `Date` in form state (e.g. `toISOString().split("T")[0]` for controlled values).

**Icon-enhanced** fields wrap the input in a relative container with left padding (`pl-9`) so a calendar icon does not overlap the value. **Bounded** fields set `min` and `max` for booking windows or age gates. For multi-field date entry (month / day / year selects), see separate select controls instead.

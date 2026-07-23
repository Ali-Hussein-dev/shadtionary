## Definition

A date picker is a **field with a calendar popover** that lets users choose a date without typing a formatted string. The trigger shows the current selection or a placeholder; opening it reveals a month grid for browsing and picking days.

The pattern is **guided date entry**: use when users benefit from seeing valid dates, month context, and disabled ranges while still anchoring the choice to a form field. Unlike a standalone calendar, a date picker couples display, open/close behavior, and selection into one compact control.

## Also known as

People also call this a **date selector**, **date input** (when the field opens a calendar rather than accepting free typing), or **calendar picker**. **Date range picker** usually means the same pattern in `range` mode with start and end values in the trigger. **Datetime picker** adds time selection alongside the date. **Appointment picker** and **booking date field** describe scheduling flows built on this pattern. In code libraries, *date picker*, *date field*, or *calendar popover* are the most common names — shadcn/ui documents it as a composition of `Popover`, `PopoverTrigger`, `PopoverContent`, and `Calendar`.

## Component Anatomy

| Part | Role |
|------|------|
| **Popover** | Root state container — open/closed for the calendar panel |
| **PopoverTrigger** | Control that opens the picker — outline button or input field |
| **Trigger icon** | Calendar glyph beside the value — signals date affordance |
| **Trigger label** | Selected date text or muted placeholder when empty |
| **PopoverContent** | Floating panel — anchors near the trigger, often `p-0` for a flush grid |
| **Calendar** | Month grid inside the panel — forwards `mode` (`single` or `range`), `selected`, and `onSelect` |

For month grid internals (Nav, Day, DayButton), see the [Calendar](/content/calendar) entry.

## When to use it

Use a date picker when a form needs a **single date or range** with visual validation:

- **Form fields** — due date, birth date, travel check-in, invoice date
- **Filters** — report period, activity window, "as of" date on dashboards
- **Scheduling** — pick a day before choosing a time slot or resource
- **Constraints** — disable weekends, past dates, or blackout periods before commit
- **Readable output** — show a formatted label (`Jan 4, 2026`) while storing a `Date` value

Avoid a date picker when users **already know the exact date** and typing is faster (power users, batch entry), when **minute-level precision** matters (use a datetime picker), or when space is extremely tight on mobile (consider native `<input type="date">`). Do not rely on calendar-only interaction for mandatory keyboard workflows — keep the trigger focusable and ensure the grid is fully keyboard navigable. For month-long planning where the grid should stay visible, use an inline **Calendar** instead of a popover.

**Single-date** pickers (`mode="single"`) highlight one day and close on select. **Range** pickers (`mode="range"`) keep the panel open until both ends are chosen and may show two months side by side. **Preset ranges** (Last 7 days, This month) can sit above the grid for analytics filters. The trigger is often a `Button`; swap in an `Input` when the field should look like other text inputs in the form.

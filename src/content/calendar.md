## Definition

A calendar is a **date grid** that lets users browse months and pick one or more days. It shows weekday headers, numbered day cells, and navigation to move between months — often embedded in a popover or form field rather than standing alone on the page.

The pattern is **spatial date selection**: use when the user needs to see days in month context (week alignment, adjacent dates, range length) instead of typing a date string. Unlike a plain text input, a calendar makes invalid dates and disabled ranges visible before selection.

## Also known as

People also call this a **date picker** (when combined with an input trigger), **date calendar**, or **month grid**. **Scheduling widget** and **appointment picker** describe booking flows built on top of a calendar. **Date range picker** usually means a calendar in `range` mode with start and end highlights. In code libraries, *calendar*, *date picker*, or *day picker* are the most common names — shadcn/ui exports `Calendar` as a styled wrapper around react-day-picker's `DayPicker`.

## Component Anatomy

| Part | Role |
|------|------|
| **Calendar** | Root wrapper — forwards DayPicker props (`mode`, `selected`, `onSelect`, `disabled`) |
| **Months** | Layout container — stacks one or more month panels side by side |
| **Month** | Single month view — caption, grid, and week rows |
| **Nav** | Month navigation — previous and next controls |
| **MonthCaption** | Header row — displays the current month and year |
| **CaptionLabel** | Month/year label — static text or dropdown trigger |
| **MonthGrid** | Date table — weekday header row and week rows |
| **Weekdays** | Column labels — abbreviated day names (Sun–Sat) |
| **Week** | Day row — seven day cells for one week |
| **Day** | Date cell — holds selection, today, outside, and range modifier states |
| **DayButton** | Interactive control — the styled button users click to select a date |

## When to use it

Use a calendar when the user needs to **choose a date or range** with visual month context:

- **Form dates** — birth date, due date, travel check-in (often inside a popover with an input)
- **Range selection** — hotel stays, report periods, filter by date range
- **Scheduling** — pick an available day before choosing a time slot
- **Inline planning** — dashboards or settings where the month view stays visible
- **Constraints** — disable weekends, past dates, or blackout days before the user commits

Avoid a calendar when a **typed date** is faster and familiar (power users, known exact dates), when **precision to the minute** matters (use a datetime picker), or when space is extremely tight (use native `<input type="date">` or a compact dropdown). Do not force calendar-only input for mandatory keyboard workflows — pair it with a text field or ensure full keyboard navigation. For a single day with no month context needed, a simple select (month / day / year) may suffice.

**Single-date** mode highlights one day. **Range** mode connects start, middle, and end cells. **Multiple** mode toggles independent days. **Dropdown captions** (`captionLayout`) swap the label for month/year selects when users jump far across time. Compose with **Popover** for the common "click field → pick date" pattern; the calendar is the grid, not the trigger.

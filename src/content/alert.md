An alert is an **inline status banner** that surfaces important feedback — success, warning, error, or neutral information — without blocking the page. It sits in the document flow (or a layout region) so users can read the message and keep working.

The pattern is **persistent inline feedback**: use when a message should stay visible until dismissed or resolved, unlike a toast that auto-hides. Unlike an alert dialog, an alert does not trap focus or require an immediate response.

## Also known as

People also call this an **inline alert**, **banner**, **callout**, or **notice**. **Notification banner** and **status message** describe the same inline role in dashboards and forms. **Toast** is a related pattern that appears temporarily and often stacks in a corner. **Alert dialog** is a different pattern — a modal confirmation that blocks interaction. In code libraries, *alert* or *callout* are the most common names; shadcn/ui exports `Alert`, `AlertTitle`, `AlertDescription`, and `AlertAction`.

## Component Anatomy

| Part | Role |
|------|------|
| **Alert** | Root container — `role="alert"`, bordered surface with variant styling (default, destructive) |
| **Icon** | Optional leading glyph — signals severity or category at a glance |
| **AlertTitle** | Primary heading — short summary of the message |
| **AlertDescription** | Supporting copy — details, next steps, or links; often muted |
| **AlertAction** | Optional trailing control — dismiss, undo, or secondary link aligned to the top-right |

## When to use it

Use an alert when the user needs **contextual feedback tied to a section or page**:

- **Form validation** — summarize errors above the fields or beside a failed submit
- **Destructive warnings** — explain consequences before a risky action elsewhere on the page
- **System status** — maintenance notice, connectivity issue, or feature availability
- **Success confirmation** — payment received, settings saved, file uploaded
- **Empty or blocked states** — explain why content is missing and what to do next

Avoid an alert for **fleeting confirmations** that need no follow-up (use a toast), **critical decisions that must be acknowledged** (use an alert dialog or dialog), or **long-form content** (use a card or dedicated page). Do not stack many alerts on one screen — consolidate into one message or a summary list.

**Default** alerts use neutral card styling for general information. **Destructive** alerts emphasize errors or irreversible risk with stronger color. **With icon** layouts place an SVG before the title and description in a two-column grid. **With action** adds a dismiss or undo control without turning the alert into a modal.

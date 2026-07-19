## Definition

A dialog is a **modal surface** that appears above the page to capture focused attention for a task, decision, or message. It dims or blocks the content behind it and returns the user to their prior context when dismissed.

The pattern is **interruptive focus**: use when the user must acknowledge, confirm, or complete something before continuing. Unlike inline panels, a dialog pauses the underlying workflow until it is closed.

## Also known as

People also call this a **modal**, **modal dialog**, or **popup** (informally). **Alert dialog** usually means a system-style confirmation with limited actions. **Lightbox** often refers to image or media overlays, though the interaction model is similar. **Drawer** and **sheet** are related patterns that slide in from an edge rather than centering on screen. In code libraries, *dialog* or *modal* are the most common names.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — open/closed, controlled or uncontrolled |
| **Trigger** | Control that opens the dialog (button, link, menu item) |
| **Portal** | Renders overlay and content outside the DOM hierarchy to avoid clipping |
| **Overlay** | Full-screen backdrop — dims page content and signals modality |
| **Content** | Centered panel — title, body, and actions |
| **Header** | Groups title and description at the top |
| **Title** | Primary heading — names the dialog's purpose |
| **Description** | Supporting text — often muted, explains consequences or context |
| **Footer** | Bottom action row — confirm, cancel, secondary links |
| **Close** | Dismiss control — icon button in the corner and/or explicit cancel action |

## When to use it

Use a dialog when the user needs a **short, focused interaction** without leaving the current page:

- **Confirmations** — delete account, discard unsaved changes, submit irreversible action
- **Quick forms** — edit a single record, add a note, invite a teammate
- **Alerts** — error summary, success acknowledgment, permission request
- **Detail on demand** — expand an item for more context without full navigation
- **Media preview** — enlarge an image or video in a lightbox-style overlay

Avoid a dialog when the content is **long or multi-step** (use a dedicated page or wizard), when users need to **reference the page behind** while working (use a side panel or inline expansion), or for **non-blocking information** (use a toast or inline banner). Do not stack dialogs on top of dialogs — combine steps or navigate to a full-page flow instead.

**Modal dialogs** block interaction with the page until dismissed. **Non-modal dialogs** are rare in web UI; prefer a popover or drawer when background interaction should remain available. Keep copy short; if the body scrolls extensively, the pattern has likely outgrown a dialog.

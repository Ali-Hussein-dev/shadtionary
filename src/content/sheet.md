A sheet is a **slide-out panel** that enters from an edge of the screen — top, right, bottom, or left — to present supplementary content, forms, or actions without navigating away. It dims the page behind it and can be dismissed via the overlay, a close control, or an explicit cancel action.

The pattern is **complementary focus**: use when the user needs more space than a popover but should remain in the current page context. Unlike a centered dialog, a sheet anchors to a screen edge and often leaves part of the underlying layout visible.

## Also known as

- **Side sheet**
- **Slide-over panel**
- **Modal**
- **Bottom sheet** — same component anchored to the foot of the screen

## Component Anatomy

| Part | Role |
|------|------|
| **Sheet** | Root state container — open/closed, controlled or uncontrolled |
| **SheetTrigger** | Control that opens the sheet (button, link, menu item) |
| **SheetPortal** | Renders overlay and content outside the DOM hierarchy to avoid clipping |
| **SheetOverlay** | Full-screen backdrop — dims page content and signals modality |
| **SheetContent** | Sliding panel — anchors to an edge via the `side` prop; may include a built-in close button |
| **SheetHeader** | Groups title and description at the top of the panel |
| **SheetTitle** | Primary heading — names the sheet's purpose |
| **SheetDescription** | Supporting text — often muted, explains context or consequences |
| **SheetFooter** | Bottom action row — submit, cancel, secondary links |
| **SheetClose** | Dismiss control — icon button in the corner and/or explicit cancel action |

## Common use cases

Use a sheet when the user needs **contextual content or a short workflow** while staying on the current page:

- **Settings and configuration** — edit profile, adjust preferences, manage account options
- **Detail panels** — show item metadata, order summary, or record details beside a list
- **Filters and sorting** — expose facet controls without leaving a catalog or search results
- **Short forms** — add an entry, invite a teammate, or update a single record
- **Secondary navigation** — menu, cart, or notification list that slides over the page

Avoid a sheet when the content is **long or multi-step** (use a dedicated page or wizard), when a **centered confirmation** is clearer (use a dialog or alert dialog), or for **non-blocking hints** (use a toast or inline alert). On mobile, a bottom sheet can work well for thumb reach; on desktop, a right-side sheet is typical for detail panels and settings.

**Right sheets** slide in from the trailing edge — the default in shadcn/ui, common for settings and detail views on desktop. **Left sheets** enter from the leading edge — typical for navigation menus. **Bottom sheets** anchor to the foot of the screen — popular on mobile for forms and action menus. **Top sheets** drop from the header — useful for announcements or compact toolbars. **Responsive dialog** patterns render a dialog on large viewports and a sheet on small ones for the same flow.

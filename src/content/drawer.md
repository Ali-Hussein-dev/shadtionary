## Definition

A drawer is a **sliding panel** that enters from an edge of the screen — bottom, top, left, or right — to present supplementary content or actions without navigating away. It typically dims the page behind it and can be dismissed by swiping, tapping the overlay, or an explicit close control.

The pattern is **edge-mounted focus**: use when the user needs more room than a popover but should stay in the current page context. Unlike a centered dialog, a drawer preserves a sense of place by anchoring to a screen edge and often leaving part of the page visible.

## Also known as

People also call this a **sheet**, **bottom sheet**, **side sheet**, or **slide-over panel**. **Off-canvas menu** and **off-canvas panel** describe the same slide-in behavior, especially for navigation. **Drawer** is the common mobile term; **sheet** is often used for the same component on iOS and in design systems. **Dialog** and **modal** are related but usually center on screen rather than slide from an edge. In code libraries, *drawer* or *sheet* are the most common names; shadcn/ui exports `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerDescription`, `DrawerFooter`, and `DrawerClose`.

## Component Anatomy

| Part | Role |
|------|------|
| **Drawer** | Root state container — open/closed, controlled or uncontrolled, swipe direction |
| **DrawerTrigger** | Control that opens the drawer (button, link, menu item) |
| **DrawerPortal** | Renders overlay and content outside the DOM hierarchy to avoid clipping |
| **DrawerOverlay** | Full-screen backdrop — dims page content and signals modality |
| **DrawerContent** | Sliding panel — anchors to an edge; may include a drag handle on bottom sheets |
| **DrawerHeader** | Groups title and description at the top of the panel |
| **DrawerTitle** | Primary heading — names the drawer's purpose |
| **DrawerDescription** | Supporting text — often muted, explains context or consequences |
| **DrawerFooter** | Bottom action row — submit, cancel, secondary links |
| **DrawerClose** | Dismiss control — cancel button or icon that closes the drawer |

## When to use it

Use a drawer when the user needs **contextual content or a short workflow** while staying on the current page:

- **Mobile-first forms** — edit profile, adjust settings, pick options on small screens
- **Filters and sorting** — expose facet controls without leaving a list or catalog
- **Detail panels** — show item metadata, order summary, or map pin details
- **Secondary navigation** — menu, cart, or notification list that slides over the page
- **Progressive disclosure** — reveal more options after a primary tap without a full page load

Avoid a drawer when the content is **long or multi-step** (use a dedicated page or wizard), when a **centered confirmation** is clearer (use a dialog or alert dialog), or for **non-blocking hints** (use a toast or inline alert). On desktop, a side drawer can work well for persistent tools; on mobile, prefer bottom sheets with swipe-to-dismiss for thumb reach.

**Bottom drawers** slide up from the foot of the screen — common on mobile for forms and pickers, often with a drag handle. **Side drawers** enter from the left or right — typical for navigation rails and detail panels on tablet and desktop. **Responsive dialog** patterns render a dialog on large viewports and a drawer on small ones for the same flow.

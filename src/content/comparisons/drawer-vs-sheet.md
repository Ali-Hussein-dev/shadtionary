## Overview

**Drawer** and **sheet** describe the same UX pattern in conversation — a panel that slides in from a screen edge over a dimmed backdrop. In design systems they often ship as **two separate patterns** with different defaults and interaction details. Picking one is less about how it looks and more about **which device you're designing for** and **how people should dismiss it**.

## Key differences

| | **Drawer** | **Sheet** |
|---|-----------|----------|
| **Where it usually slides from** | Bottom of the screen | Right side of the screen |
| **Best on** | Phones and tablets | Desktop and larger screens |
| **How you close it** | Swipe down, drag handle, or tap outside | Close button or tap outside |
| **Typical use** | Action menus, pickers, short forms | Detail panels, settings, navigation |
| **Also called** | Sheet, bottom sheet, slide-over panel | Drawer, side sheet, off-canvas panel |

## When to use Drawer

Reach for a **drawer** when the interaction should feel **mobile-native**:

- Bottom-anchored panels with a **drag handle** and **swipe-to-dismiss**
- Action menus, pickers, and short forms where thumb reach matters
- Flows where pulling the panel down to close feels natural

## When to use Sheet

Reach for a **sheet** when you want a **side panel** that stays out of the way on larger screens:

- Right- or left-anchored detail panels and settings
- Forms and supplementary content that sit beside the page
- Flows where a clear close button is enough
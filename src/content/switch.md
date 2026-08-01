A switch is a **binary toggle control** that slides between on and off states — a pill-shaped track with a movable thumb that signals an immediate setting change when activated.

The pattern is **instant state flip**: use when a single yes/no preference should take effect right away without a separate save action. Unlike checkboxes, switches imply immediate application; unlike radio groups, they represent one independent setting, not one choice among several.

## Also known as

- **Toggle switch** — common label in mobile and settings interfaces

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | Interactive track — holds state, focus ring, and click/tap target |
| **Thumb** | Sliding handle — moves along the track to show on or off |
| **Label** | Setting name — describes what the switch controls beside the track |

## Common use cases

Use a switch when users need to **flip one setting on or off with immediate effect**:

- **Feature flags** — dark mode, beta features, accessibility options
- **Notification channels** — enable or mute email, push, or SMS alerts
- **Privacy and permissions** — location access, camera, microphone, or data sharing
- **Device or account settings** — Wi-Fi, Bluetooth, two-factor authentication
- **Inline table or list actions** — activate, publish, or enable a single row

Avoid a switch when the change is **not immediate** (use a checkbox with an explicit submit button), when users must pick **one of several options** (use radio buttons or a select), or when they may select **multiple independent items in a list** (use checkboxes). Do not use a switch for irreversible or high-stakes actions without confirmation — pair destructive toggles with a dialog or undo affordance.

**Default-on** switches work for opt-out preferences where the safer baseline is enabled. **Label placement** on the left suits settings lists; label on the right matches compact toolbars. **Size variants** (`sm`, `default`) help dense tables and mobile layouts. Always pair the control with a visible label or `aria-label` so the setting name is clear out of context.

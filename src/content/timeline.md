A timeline is a **vertical sequence** of **events** arranged along a shared axis — each entry shows when something happened, what it was, and optional supporting detail. A spine line and markers tie the items together so order and progression read at a glance.

The pattern is **chronological narrative**: surface a history, workflow, or activity stream where **sequence matters**. Unlike a flat list, the axis emphasizes before-and-after; unlike a table, it favors scannable story over dense comparison.

## Also known as

- **Activity feed**
- **Event history**
- **Chronological list**
- **Status tracker**
- **Activity stream**
- **Audit log** — dashboards and admin tools
- **Roadmap**
- **Milestone view** — marketing or project timelines
- **Stepper** — related but usually a finite wizard with an explicit current step

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | List container — sets layout position (left, right, alternate, center) and wires context |
| **Item** | One row in the sequence — wraps marker and content as a list item |
| **Marker** | Dot or icon on the spine — signals status, category, or event type |
| **Connector** | Vertical line between markers — shows continuity (often implicit via CSS) |
| **Content** | Groups the readable body beside the marker |
| **Title** | Primary label — names the event or milestone |
| **Description** | Supporting text — detail, summary, or secondary context |
| **Time** | Timestamp or date — when the event occurred |
| **Spacer** | Optional empty column — balances content in center or alternate layouts |

## Common use cases

Use a timeline when users need to **follow a sequence over time**:

- **Order and delivery tracking** — shipment stages, ticket status, onboarding steps completed
- **Activity and audit history** — account changes, admin actions, version changelogs
- **Project milestones** — releases, phase completions, roadmap checkpoints
- **Personal or social feeds** — notifications, comments, profile activity (when order matters)
- **About and marketing stories** — company history, product evolution, case-study beats

Avoid a timeline when **time order is irrelevant** (use a grid or table), when there are **only one or two items** (a simple card or alert is enough), or when users must **compare many fields across rows** (a data table sorts and filters better). Do not cram **long-form content** into every item — link out or expand on demand.

**Left-aligned** timelines suit dashboards and detail panels. **Alternate** or **center** layouts work on marketing pages where entries deserve equal visual weight. **Icon markers** help when status is more than decorative color — pair variants with labels for accessibility.

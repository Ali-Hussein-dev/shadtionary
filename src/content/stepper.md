A stepper is a **progress guide** through a **finite sequence of steps** — numbered (or icon) indicators, short labels, and connectors that show completed, current, and upcoming stages in a multi-step flow.

The pattern is **guided progression**: break a complex task into ordered stages so users always know where they are, what they finished, and what comes next. Unlike a timeline (chronological history), a stepper tracks an active workflow with an explicit current step; unlike tabs, steps are usually completed in sequence rather than browsed freely.

## Also known as

- **Steps** — common registry name in Ant Design, Chakra, and similar libraries
- **Step navigation**
- **Step nav** — shorthand in docs and component APIs
- **Step list** — when the track is an ordered list for screen readers

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — current step, orientation, linear vs non-linear |
| **Nav / List** | Groups step markers in sequence (often an ordered list) |
| **Item** | One step in the sequence — wraps trigger, labels, and separator |
| **Trigger** | Interactive control for the step when jumping or revisiting is allowed |
| **Indicator** | Number, icon, or checkmark — communicates status (active, completed, upcoming, error) |
| **Title** | Short label naming the step |
| **Description** | Optional supporting text under the title |
| **Separator** | Connector line between steps — shows continuity along the path |
| **Content / Panel** | Body for the active step — form fields, instructions, or review |
| **Prev / Next** | Navigation actions that move between steps |

## Common use cases

Use a stepper when users need to **complete a task in stages** and benefit from seeing progress:

- **Checkout and payments** — cart, shipping, payment, review
- **Account onboarding** — profile, preferences, verification
- **Multi-step forms** — applications, surveys, KYC / identity flows
- **Product or workspace setup** — connect integrations, invite teammates, configure defaults
- **Wizards in admin tools** — create resource, configure, confirm

Avoid a stepper when the task is **short enough for one screen**, when steps are **not sequential** (use tabs or a sidebar), or when you are showing **past events** rather than guiding a live workflow (use a timeline). Do not invent many tiny steps — roughly three to seven keeps the path scannable; more usually needs a progress bar or a shorter flow.

**Horizontal** steppers suit short desktop wizards with clear labels. **Vertical** steppers work better for longer lists or narrow layouts. **Linear** flows lock forward progress until the current step is valid; **non-linear** flows let users jump among completed (or any) steps. Compact **dots**, **text** (“Step 2 of 4”), or **progress bar** variants help on mobile when full labels do not fit.

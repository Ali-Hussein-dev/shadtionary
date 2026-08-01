A wizard is a **multi-step flow** that guides users through a complex task in ordered stages — combining a step indicator, per-step content panels, and navigation actions so each screen stays focused and progress stays visible.

The pattern is **decomposed completion**: break work that would overwhelm on one page into a sequence with validation at each stage, optional review before submit, and clear forward/back controls. Unlike a single long form, a wizard sequences cognitive load; unlike tabs, steps are usually completed in order with accumulated state. A **stepper** is often embedded inside a wizard as the progress chrome, but the wizard owns the full flow — data, validation, and submission.

## Also known as

- **Multi-step form** — common name when the wizard collects input across stages

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — current step, collected data, linear vs branching flow |
| **Header** | Workflow title and context — often persistent across all steps |
| **Stepper** | Progress indicator — shows completed, current, and upcoming steps |
| **Step** | One stage in the sequence — wraps content and validation for that phase |
| **Content** | Active step panel — form fields, instructions, or review summary |
| **Footer** | Action bar — Back, Next, Cancel, and Finish/Submit |
| **Review** | Optional final step — summarizes choices before irreversible submit |

## Common use cases

Use a wizard when users must **complete a long or unfamiliar process** in manageable chunks:

- **Checkout and onboarding** — account setup, profile, preferences, verification
- **Applications and compliance** — loan, permit, KYC, or benefits flows with gated stages
- **Product or workspace setup** — connect integrations, invite teammates, configure defaults
- **Admin create flows** — provision a resource across configuration, access, and confirm steps
- **Guided data entry** — surveys or wizards where each step depends on the previous answers

Avoid a wizard when the task fits **one screen**, when users need to **jump freely between unrelated sections** (use tabs), or when you are showing **historical events** rather than guiding live work (use a timeline). Do not split trivial forms into many one-field steps — roughly three to seven stages keeps the path scannable.

**Full-page** wizards suit long setup flows with room for help text. **Modal or drawer** wizards work when the task is secondary to the page behind it. **Linear** flows require valid input before advancing; **branching** wizards skip or add steps based on earlier answers. Pair with a **stepper**, **progress bar**, or compact **Step X of Y** label depending on how much horizontal space you have.

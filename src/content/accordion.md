## Definition

An accordion is a **vertically stacked set of panels**. Each panel has a **trigger** (the clickable header) and **content** (the section that expands and collapses). Users open one or more panels to reveal detail while keeping the rest of the stack compact.

The pattern is **progressive disclosure**: show structure and labels first, reveal detail on demand. Whether only one panel or several can stay open at once is a configuration choice — not a different component.

## Also known as

People also call this a **`collapsible list`**, **`expandable sections`**, or **`expansion panels`**. **`Disclosure group`** is another name — though *disclosure* often implies a single open/close pair rather than a full stacked set.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | Container for the full stack; may enforce single- or multi-expand behavior |
| **Item / Panel** | One section — trigger and content as a unit |
| **Trigger** | Header control that toggles open and closed; usually shows a label and optional icon |
| **Content** | Region that expands and collapses; holds the panel body |
| **Indicator** | Chevron or plus/minus showing expanded vs. collapsed |
| **Divider** | Border or spacing between items |

## When to use it

Use an accordion when related content **does not all need to be visible at once**:

- **FAQs** — users scan questions and open only what they need
- **Settings groups** — organize many options without a long scroll
- **Dense reference material** — keep a single page navigable (specs, docs, help)
- **Forms with optional sections** — advanced or rarely used fields stay tucked away
- **Mobile or narrow layouts** — vertical stacking uses limited width well

Avoid an accordion when users need to **compare** content across sections at the same time, when every section must stay **visible** (use tabs, cards, or a flat layout instead), or when the list is **very short** — plain headings may be enough.

**Single-expand** keeps only one panel open at a time (common for FAQs). **Multi-expand** allows several panels open together (common for settings or reference).

## Definition

A breadcrumb is a **horizontal trail of links** from the current page back toward the site root. Each segment represents a level in the hierarchy — home, category, subcategory, and finally the **current page**, which is shown as plain text rather than a link.

The pattern is **wayfinding**: it answers “where am I?” and offers one-click jumps to ancestor pages. It does not replace primary navigation; it supplements it on deep or nested routes.

## Also known as

People also call this a **`breadcrumb trail`**, **`breadcrumb navigation`**, or **`hierarchy path`**.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | Landmark `nav` labeled for breadcrumbs |
| **List** | Ordered list of segments — reflects hierarchy left to right |
| **Item** | Wrapper for one segment and its following separator |
| **Link** | Clickable ancestor — navigates to that level |
| **Page** | Current location — not a link; marked as the active page |
| **Separator** | Visual divider between segments (chevron, slash, etc.) |
| **Ellipsis** | Collapsed middle segments when the trail is too long |

## When to use it

Use a breadcrumb when users land on **nested pages** and may need to climb back up the tree:

- **Docs and reference sites** — section → subsection → article
- **E-commerce** — department → category → product
- **Settings or admin** — org → workspace → resource
- **Deep app routes** — dashboards with several levels of drill-down
- **SEO and sharing** — reinforces page hierarchy in the UI (and in structured data when mirrored in markup)

Avoid a breadcrumb when the site is **flat** (only one or two levels — top nav is enough), when users **rarely arrive mid-hierarchy** (e.g. everything is reached from a single hub), or when **primary navigation already shows location** clearly (tabs, sidebar with active state). Do not use breadcrumbs as the **only** way to move between major sections.

**Full trail** shows every ancestor (good for shallow trees). **Collapsed trail** hides middle segments with an ellipsis (good for deep paths). The **last segment** is always the current page and should match the page title when possible.

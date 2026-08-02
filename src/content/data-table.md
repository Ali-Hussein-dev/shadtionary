A data table is a **tabular data view** that presents structured records in rows and columns so users can scan, compare, sort, filter, and act on information at scale. It is a UI pattern — not a single installable component — built by composing the shadcn `<Table />` primitives with TanStack Table for row models, column state, and interactive behavior.

The pattern is **structured record browsing**: use when users need to work with many homogeneous items — invoices, users, orders, tasks — and compare values across columns. Unlike `<Table />`, which only supplies styled markup (`TableHeader`, `TableRow`, `TableCell`, and so on), a data table adds **data logic** — column definitions, sorting, filtering, pagination, row selection, and toolbar controls. Reach for `<Table />` alone when the dataset is small and static; reach for a data table when the set is large, dynamic, or needs per-row actions.

## Also known as

- **Data grid** — spreadsheet-style table with sorting, filtering, and row interaction

## Component Anatomy

A data table layers pattern-specific parts on top of the `<Table />` primitives:

| Part             | Role                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Table**        | Root wrapper from `<Table />` — bordered, scrollable container for the grid               |
| **TableCaption** | Accessible summary — describes the table's purpose for screen readers                     |
| **TableHeader**  | Header section — groups the column label row                                              |
| **TableHead**    | Column header cell — label, sort control, or select-all checkbox                          |
| **TableBody**    | Data section — renders one row per record                                                 |
| **TableRow**     | Horizontal record — hover, selection, and click target for a single item                  |
| **TableCell**    | Data cell — formatted value, badge, link, or row action trigger                           |
| **TableFooter**  | Footer row — totals, aggregates, or summary values                                        |
| **ColumnDef**    | TanStack column config — accessor, header renderer, cell formatter, and sort/filter rules |
| **Toolbar**      | Top controls — search input, filters, and column visibility toggles                       |
| **Pagination**   | Bottom navigation — page size, previous/next, and row count; sits outside the table grid  |

## Common use cases

Use a data table when users need to **browse and manipulate structured lists**:

- **Admin dashboards** - users, roles, permissions, audit logs
- **Financial records** - invoices, payments, transactions, subscriptions
- **Inventory and orders** - products, stock levels, fulfillment status
- **Project management** - tasks, issues, milestones with assignees and due dates
- **Analytics exports** - campaign metrics, usage reports, event streams

Avoid a data table when there are **only a few items** (a plain `<Table />` or list is clearer), when **visual hierarchy matters more than columns** (use a timeline or feed), or when users need **rich per-item layouts** (use cards). Do not force **wide unstructured content** into cells — link to a detail view or expand a row instead.

`<Table />` **only** — hand-mapped rows for static content: pricing comparisons, invoice line items, simple key-value layouts. No TanStack dependency; you own all markup.

**Data table** — TanStack Table drives row models with sorting, filtering, pagination, and row selection; toolbar and pagination sit outside the cell grid. **Dense** variants reduce row height for large datasets; **actions** variants add a leading or trailing column with dropdown menus or icon buttons per row.

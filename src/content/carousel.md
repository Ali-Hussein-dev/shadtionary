## Definition

A carousel is a **fixed viewport** over a sequence of **slides** — images, cards, testimonials, or any repeated content. Users move through the set with previous and next controls, swipe or drag gestures, and optional dot or thumbnail indicators.

The pattern is **sequential browsing**: give one item (or a short shelf of items) focus without stacking the full set vertically. How many slides are visible, whether the list loops, and whether autoplay runs are configuration choices — not different components.

## Also known as

People also call this a **`slider`**, **`slideshow`**, or **`gallery slider`**. **`Rotator`** and **`content scroller`** show up in marketing and CMS contexts.

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | Container with carousel semantics; wires keyboard and scroll state |
| **Content** | Overflow-hidden viewport that holds the sliding track |
| **Item / Slide** | One unit of content in the sequence |
| **Previous** | Control to move to the prior slide |
| **Next** | Control to move to the following slide |
| **Indicators** | Dots or thumbnails showing position in the set |
| **Track** (implicit) | The flex row or column inside content that slides |

## When to use it

Use a carousel for a **small, finite set of related items** when one item, or a few items, should hold focus:

- **Product and image galleries** — browse photos without leaving the product or opening a new page
- **Related content** — articles, episodes, products, or profiles in a horizontal shelf
- **Testimonials and case studies** — give each quote room while keeping the section compact
- **Feature tours** — walk through a short sequence where order matters

Avoid a carousel when users need to **scan or compare** many items (use a grid or list), when **critical information** lives in later slides (many users never reach them), or when the set is **very small** — two or three items often work better as static cards. Prefer **user-driven** advance; treat **autoplay** as exceptional, pauseable, and off by default for essential content.

**Single-slide** carousels suit large images, stories, or ordered steps. **Multi-slide** carousels suit product and content shelves. Enable **looping** only when the sequence has no meaningful start or end; otherwise disable next on the final slide.

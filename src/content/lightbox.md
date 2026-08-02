A lightbox is a **fullscreen media overlay** that enlarges an image, video, or embed above a dimmed page so the user can inspect it without navigating away. It opens from a thumbnail or link and returns focus to the trigger when dismissed.

The pattern is **immersive media focus**: use when one piece of visual content deserves the full viewport — with optional prev/next navigation through a gallery. Unlike a general-purpose dialog, a lightbox centers the media itself and keeps chrome minimal so the artwork stays primary.

## Also known as

- **Image modal** — modal overlay dedicated to viewing photos or media at full size

## Component Anatomy

| Part | Role |
|------|------|
| **Root** | State container — open/closed, active item index in a gallery |
| **Trigger** | Control that opens the lightbox (thumbnail, link, gallery tile) |
| **Portal** | Renders overlay and content outside the DOM hierarchy to avoid clipping |
| **Overlay** | Full-screen backdrop — dims or obscures page content behind the media |
| **Content** | Centered viewport that frames the media at focal size |
| **Media** | Image, video, or embed displayed at enlarged scale |
| **Close** | Dismiss control — icon button, overlay click, and/or Escape key |
| **Previous** | Navigate to the prior item in a gallery sequence |
| **Next** | Navigate to the following item in a gallery sequence |
| **Caption** | Title, description, or alt text associated with the active media |
| **Counter** | Position indicator — e.g. "3 of 12" in a multi-image set |

## Common use cases

Use a lightbox when the user needs to **view media at full size** while staying on the current page:

- **Photo and art galleries** — enlarge portfolio, product, or editorial images from a grid of thumbnails
- **Product detail** — zoom into high-resolution photos on e-commerce pages
- **Social and news feeds** — expand an inline image or video without a full navigation
- **Document previews** — show a page, diagram, or map at readable scale
- **Mixed media sets** — browse a sequence of images or clips with prev/next controls

Avoid a lightbox when the content is **primarily text or forms** (use a dialog or drawer), when users need to **compare items side by side** (use a grid or split layout), or when **inline viewing is enough** (use a simple zoom or expandable image). Do not trap users in autoplaying slideshows — keep navigation explicit and pauseable.

**Single-image** lightboxes open one asset with a close control and optional caption. **Gallery** lightboxes add previous/next navigation and a counter across a finite set. **Minimal** variants hide chrome until hover or focus; **toolbar** variants add zoom, download, or share actions when those tasks are common.

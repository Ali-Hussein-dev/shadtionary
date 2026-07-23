import type { ReactNode } from "react";

import { AccordionThumbnail } from "./accordion-thumbnail";
import { BreadcrumbThumbnail } from "./breadcrumb-thumbnail";
import { CalendarThumbnail } from "./calendar-thumbnail";
import { CardThumbnail } from "./card-thumbnail";
import { CarouselThumbnail } from "./carousel-thumbnail";
import { DatePickerThumbnail } from "./date-picker-thumbnail";
import { DialogThumbnail } from "./dialog-thumbnail";
import { TabsThumbnail } from "./tabs-thumbnail";

const thumbnails = {
	accordion: <AccordionThumbnail />,
	breadcrumb: <BreadcrumbThumbnail />,
	calendar: <CalendarThumbnail />,
	card: <CardThumbnail />,
	carousel: <CarouselThumbnail />,
	"date-picker": <DatePickerThumbnail />,
	dialog: <DialogThumbnail />,
	tabs: <TabsThumbnail />,
} satisfies Record<string, ReactNode>;

export default thumbnails;

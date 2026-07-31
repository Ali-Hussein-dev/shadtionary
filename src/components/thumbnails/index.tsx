import type { ReactNode } from "react";

import { AccordionThumbnail } from "./accordion-thumbnail";
import { AlertThumbnail } from "./alert-thumbnail";
import { BreadcrumbThumbnail } from "./breadcrumb-thumbnail";
import { CalendarThumbnail } from "./calendar-thumbnail";
import { CardThumbnail } from "./card-thumbnail";
import { CarouselThumbnail } from "./carousel-thumbnail";
import { DateInputThumbnail } from "./date-input-thumbnail";
import { DatePickerThumbnail } from "./date-picker-thumbnail";
import { DialogThumbnail } from "./dialog-thumbnail";
import { DrawerThumbnail } from "./drawer-thumbnail";
import { DropdownMenuThumbnail } from "./dropdown-menu-thumbnail";
import { SelectThumbnail } from "./select-thumbnail";
import { SheetThumbnail } from "./sheet-thumbnail";
import { TabsThumbnail } from "./tabs-thumbnail";
import { TimeInputThumbnail } from "./time-input-thumbnail";
import { TimelineThumbnail } from "./timeline-thumbnail";

const thumbnails = {
	accordion: <AccordionThumbnail />,
	alert: <AlertThumbnail />,
	breadcrumb: <BreadcrumbThumbnail />,
	calendar: <CalendarThumbnail />,
	card: <CardThumbnail />,
	carousel: <CarouselThumbnail />,
	"date-input": <DateInputThumbnail />,
	"date-picker": <DatePickerThumbnail />,
	dialog: <DialogThumbnail />,
	drawer: <DrawerThumbnail />,
	"dropdown-menu": <DropdownMenuThumbnail />,
	select: <SelectThumbnail />,
	sheet: <SheetThumbnail />,
	tabs: <TabsThumbnail />,
	"time-input": <TimeInputThumbnail />,
	timeline: <TimelineThumbnail />,
} satisfies Record<string, ReactNode>;

export default thumbnails;

import type { ReactNode } from "react";

import { AccordionAnatomy } from "./accordion-anatomy";
import { AlertAnatomy } from "./alert-anatomy";
import { BreadcrumbAnatomy } from "./breadcrumb-anatomy";
import { CalendarAnatomy } from "./calendar-anatomy";
import { CardAnatomy } from "./card-anatomy";
import { CarouselAnatomy } from "./carousel-anatomy";
import { DateInputAnatomy } from "./date-input-anatomy";
import { DatePickerAnatomy } from "./date-picker-anatomy";
import { DialogAnatomy } from "./dialog-anatomy";
import { DrawerAnatomy } from "./drawer-anatomy";
import { DropdownMenuAnatomy } from "./dropdown-menu-anatomy";
import { SelectAnatomy } from "./select-anatomy";
import { SheetAnatomy } from "./sheet-anatomy";
import { TabsAnatomy } from "./tabs-anatomy";
import { TimeInputAnatomy } from "./time-input-anatomy";
import { TimelineAnatomy } from "./timeline-anatomy";

const anatomy = {
	accordion: <AccordionAnatomy />,
	alert: <AlertAnatomy />,
	breadcrumb: <BreadcrumbAnatomy />,
	calendar: <CalendarAnatomy />,
	card: <CardAnatomy />,
	carousel: <CarouselAnatomy />,
	"date-input": <DateInputAnatomy />,
	"date-picker": <DatePickerAnatomy />,
	dialog: <DialogAnatomy />,
	drawer: <DrawerAnatomy />,
	"dropdown-menu": <DropdownMenuAnatomy />,
	select: <SelectAnatomy />,
	sheet: <SheetAnatomy />,
	tabs: <TabsAnatomy />,
	"time-input": <TimeInputAnatomy />,
	timeline: <TimelineAnatomy />,
} satisfies Record<string, ReactNode>;

export default anatomy;

import type { ReactNode } from "react";

import { AccordionAnatomy } from "./accordion-anatomy";
import { BreadcrumbAnatomy } from "./breadcrumb-anatomy";
import { CalendarAnatomy } from "./calendar-anatomy";
import { CardAnatomy } from "./card-anatomy";
import { CarouselAnatomy } from "./carousel-anatomy";
import { DateInputAnatomy } from "./date-input-anatomy";
import { DatePickerAnatomy } from "./date-picker-anatomy";
import { DialogAnatomy } from "./dialog-anatomy";
import { TabsAnatomy } from "./tabs-anatomy";

const anatomy = {
	accordion: <AccordionAnatomy />,
	breadcrumb: <BreadcrumbAnatomy />,
	calendar: <CalendarAnatomy />,
	card: <CardAnatomy />,
	carousel: <CarouselAnatomy />,
	"date-input": <DateInputAnatomy />,
	"date-picker": <DatePickerAnatomy />,
	dialog: <DialogAnatomy />,
	tabs: <TabsAnatomy />,
} satisfies Record<string, ReactNode>;

export default anatomy;

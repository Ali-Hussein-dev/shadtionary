import type { ReactNode } from "react";

import { AccordionAnatomy } from "./accordion-anatomy";
import { BreadcrumbAnatomy } from "./breadcrumb-anatomy";
import { CalendarAnatomy } from "./calendar-anatomy";
import { CardAnatomy } from "./card-anatomy";
import { CarouselAnatomy } from "./carousel-anatomy";
import { DialogAnatomy } from "./dialog-anatomy";
import { TabsAnatomy } from "./tabs-anatomy";

const anatomy = {
	accordion: <AccordionAnatomy />,
	breadcrumb: <BreadcrumbAnatomy />,
	calendar: <CalendarAnatomy />,
	card: <CardAnatomy />,
	carousel: <CarouselAnatomy />,
	dialog: <DialogAnatomy />,
	tabs: <TabsAnatomy />,
} satisfies Record<string, ReactNode>;

export default anatomy;

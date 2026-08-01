import type { ReactNode } from "react";

import { AccordionAnatomy } from "./accordion-anatomy";
import { AlertAnatomy } from "./alert-anatomy";
import { BreadcrumbAnatomy } from "./breadcrumb-anatomy";
import { CalendarAnatomy } from "./calendar-anatomy";
import { CardAnatomy } from "./card-anatomy";
import { CarouselAnatomy } from "./carousel-anatomy";
import { CheckboxGroupAnatomy } from "./checkbox-group-anatomy";
import { ContextMenuAnatomy } from "./context-menu-anatomy";
import { DateInputAnatomy } from "./date-input-anatomy";
import { DatePickerAnatomy } from "./date-picker-anatomy";
import { DialogAnatomy } from "./dialog-anatomy";
import { DrawerAnatomy } from "./drawer-anatomy";
import { DropdownMenuAnatomy } from "./dropdown-menu-anatomy";
import { NavigationMenuAnatomy } from "./navigation-menu-anatomy";
import { RadioGroupAnatomy } from "./radio-group-anatomy";
import { SelectAnatomy } from "./select-anatomy";
import { SheetAnatomy } from "./sheet-anatomy";
import { StepperAnatomy } from "./stepper-anatomy";
import { SwitchAnatomy } from "./switch-anatomy";
import { TabsAnatomy } from "./tabs-anatomy";
import { TimeInputAnatomy } from "./time-input-anatomy";
import { TimelineAnatomy } from "./timeline-anatomy";
import { WizardAnatomy } from "./wizard-anatomy";

const anatomy = {
	accordion: <AccordionAnatomy />,
	alert: <AlertAnatomy />,
	breadcrumb: <BreadcrumbAnatomy />,
	calendar: <CalendarAnatomy />,
	card: <CardAnatomy />,
	carousel: <CarouselAnatomy />,
	"checkbox-group": <CheckboxGroupAnatomy />,
	"context-menu": <ContextMenuAnatomy />,
	"date-input": <DateInputAnatomy />,
	"date-picker": <DatePickerAnatomy />,
	dialog: <DialogAnatomy />,
	drawer: <DrawerAnatomy />,
	"dropdown-menu": <DropdownMenuAnatomy />,
	"navigation-menu": <NavigationMenuAnatomy />,
	"radio-group": <RadioGroupAnatomy />,
	select: <SelectAnatomy />,
	sheet: <SheetAnatomy />,
	stepper: <StepperAnatomy />,
	switch: <SwitchAnatomy />,
	tabs: <TabsAnatomy />,
	"time-input": <TimeInputAnatomy />,
	timeline: <TimelineAnatomy />,
	wizard: <WizardAnatomy />,
} satisfies Record<string, ReactNode>;

export default anatomy;

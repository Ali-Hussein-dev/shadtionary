import type { ReactNode } from "react";

import { AccordionAnatomy } from "./accordion-anatomy";
import { AlertAnatomy } from "./alert-anatomy";
import { BreadcrumbAnatomy } from "./breadcrumb-anatomy";
import { CalendarAnatomy } from "./calendar-anatomy";
import { CardAnatomy } from "./card-anatomy";
import { CarouselAnatomy } from "./carousel-anatomy";
import { CheckboxGroupAnatomy } from "./checkbox-group-anatomy";
import { ComboboxAnatomy } from "./combobox-anatomy";
import { ContextMenuAnatomy } from "./context-menu-anatomy";
import { DataTableAnatomy } from "./data-table-anatomy";
import { DateInputAnatomy } from "./date-input-anatomy";
import { DatePickerAnatomy } from "./date-picker-anatomy";
import { DialogAnatomy } from "./dialog-anatomy";
import { DrawerAnatomy } from "./drawer-anatomy";
import { DropdownMenuAnatomy } from "./dropdown-menu-anatomy";
import { HoverCardAnatomy } from "./hover-card-anatomy";
import { InputOtpAnatomy } from "./input-otp-anatomy";
import { LightboxAnatomy } from "./lightbox-anatomy";
import { NavigationMenuAnatomy } from "./navigation-menu-anatomy";
import { PopoverAnatomy } from "./popover-anatomy";
import { RadioGroupAnatomy } from "./radio-group-anatomy";
import { SelectAnatomy } from "./select-anatomy";
import { SheetAnatomy } from "./sheet-anatomy";
import { SliderAnatomy } from "./slider-anatomy";
import { StepperAnatomy } from "./stepper-anatomy";
import { SwitchAnatomy } from "./switch-anatomy";
import { TabsAnatomy } from "./tabs-anatomy";
import { TextFieldAnatomy } from "./text-field-anatomy";
import { TextareaAnatomy } from "./textarea-anatomy";
import { TimeInputAnatomy } from "./time-input-anatomy";
import { TimelineAnatomy } from "./timeline-anatomy";
import { ToggleGroupAnatomy } from "./toggle-group-anatomy";
import { TooltipAnatomy } from "./tooltip-anatomy";
import { WizardAnatomy } from "./wizard-anatomy";

const anatomy = {
	accordion: <AccordionAnatomy />,
	alert: <AlertAnatomy />,
	breadcrumb: <BreadcrumbAnatomy />,
	calendar: <CalendarAnatomy />,
	card: <CardAnatomy />,
	carousel: <CarouselAnatomy />,
	"checkbox-group": <CheckboxGroupAnatomy />,
	combobox: <ComboboxAnatomy />,
	"context-menu": <ContextMenuAnatomy />,
	"data-table": <DataTableAnatomy />,
	"date-input": <DateInputAnatomy />,
	"date-picker": <DatePickerAnatomy />,
	dialog: <DialogAnatomy />,
	drawer: <DrawerAnatomy />,
	"dropdown-menu": <DropdownMenuAnatomy />,
	"hover-card": <HoverCardAnatomy />,
	"input-otp": <InputOtpAnatomy />,
	lightbox: <LightboxAnatomy />,
	"navigation-menu": <NavigationMenuAnatomy />,
	popover: <PopoverAnatomy />,
	"radio-group": <RadioGroupAnatomy />,
	select: <SelectAnatomy />,
	sheet: <SheetAnatomy />,
	slider: <SliderAnatomy />,
	stepper: <StepperAnatomy />,
	switch: <SwitchAnatomy />,
	tabs: <TabsAnatomy />,
	textarea: <TextareaAnatomy />,
	"text-field": <TextFieldAnatomy />,
	"time-input": <TimeInputAnatomy />,
	timeline: <TimelineAnatomy />,
	"toggle-group": <ToggleGroupAnatomy />,
	tooltip: <TooltipAnatomy />,
	wizard: <WizardAnatomy />,
} satisfies Record<string, ReactNode>;

export default anatomy;

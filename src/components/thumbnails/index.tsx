import type { ReactNode } from "react";

import { AccordionThumbnail } from "./accordion-thumbnail";
import { AlertThumbnail } from "./alert-thumbnail";
import { BreadcrumbThumbnail } from "./breadcrumb-thumbnail";
import { CalendarThumbnail } from "./calendar-thumbnail";
import { CardThumbnail } from "./card-thumbnail";
import { CarouselThumbnail } from "./carousel-thumbnail";
import { CheckboxGroupThumbnail } from "./checkbox-group-thumbnail";
import { ContextMenuThumbnail } from "./context-menu-thumbnail";
import { DataTableThumbnail } from "./data-table-thumbnail";
import { DateInputThumbnail } from "./date-input-thumbnail";
import { DatePickerThumbnail } from "./date-picker-thumbnail";
import { DialogThumbnail } from "./dialog-thumbnail";
import { DrawerThumbnail } from "./drawer-thumbnail";
import { DropdownMenuThumbnail } from "./dropdown-menu-thumbnail";
import { HoverCardThumbnail } from "./hover-card-thumbnail";
import { InputOtpThumbnail } from "./input-otp-thumbnail";
import { LightboxThumbnail } from "./lightbox-thumbnail";
import { NavigationMenuThumbnail } from "./navigation-menu-thumbnail";
import { PopoverThumbnail } from "./popover-thumbnail";
import { RadioGroupThumbnail } from "./radio-group-thumbnail";
import { SelectThumbnail } from "./select-thumbnail";
import { SheetThumbnail } from "./sheet-thumbnail";
import { SliderThumbnail } from "./slider-thumbnail";
import { StepperThumbnail } from "./stepper-thumbnail";
import { SwitchThumbnail } from "./switch-thumbnail";
import { TabsThumbnail } from "./tabs-thumbnail";
import { TextFieldThumbnail } from "./text-field-thumbnail";
import { TextareaThumbnail } from "./textarea-thumbnail";
import { TimeInputThumbnail } from "./time-input-thumbnail";
import { TimelineThumbnail } from "./timeline-thumbnail";
import { ToggleGroupThumbnail } from "./toggle-group-thumbnail";
import { TooltipThumbnail } from "./tooltip-thumbnail";
import { WizardThumbnail } from "./wizard-thumbnail";

const thumbnails = {
	accordion: <AccordionThumbnail />,
	alert: <AlertThumbnail />,
	breadcrumb: <BreadcrumbThumbnail />,
	calendar: <CalendarThumbnail />,
	card: <CardThumbnail />,
	carousel: <CarouselThumbnail />,
	"checkbox-group": <CheckboxGroupThumbnail />,
	"context-menu": <ContextMenuThumbnail />,
	"data-table": <DataTableThumbnail />,
	"date-input": <DateInputThumbnail />,
	"date-picker": <DatePickerThumbnail />,
	dialog: <DialogThumbnail />,
	drawer: <DrawerThumbnail />,
	"dropdown-menu": <DropdownMenuThumbnail />,
	"hover-card": <HoverCardThumbnail />,
	"input-otp": <InputOtpThumbnail />,
	lightbox: <LightboxThumbnail />,
	"navigation-menu": <NavigationMenuThumbnail />,
	popover: <PopoverThumbnail />,
	"radio-group": <RadioGroupThumbnail />,
	select: <SelectThumbnail />,
	sheet: <SheetThumbnail />,
	slider: <SliderThumbnail />,
	stepper: <StepperThumbnail />,
	switch: <SwitchThumbnail />,
	tabs: <TabsThumbnail />,
	textarea: <TextareaThumbnail />,
	"text-field": <TextFieldThumbnail />,
	"time-input": <TimeInputThumbnail />,
	timeline: <TimelineThumbnail />,
	"toggle-group": <ToggleGroupThumbnail />,
	tooltip: <TooltipThumbnail />,
	wizard: <WizardThumbnail />,
} satisfies Record<string, ReactNode>;

export default thumbnails;

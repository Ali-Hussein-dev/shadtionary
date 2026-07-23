import {
	Calendar03Icon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

const WEEKDAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"] as const;
const WEEKS = ["week-1", "week-2", "week-3", "week-4"] as const;
const DAYS_BY_WEEK: Record<(typeof WEEKS)[number], readonly string[]> = {
	"week-1": ["d-1", "d-2", "d-3", "d-4", "d-5", "d-6", "d-7"],
	"week-2": ["d-8", "d-9", "d-10", "d-11", "d-12", "d-13", "d-14"],
	"week-3": ["d-15", "d-16", "d-17", "d-18", "d-19", "d-20", "d-21"],
	"week-4": ["d-22", "d-23", "d-24", "d-25", "d-26", "d-27", "d-28"],
};

function DayCell() {
	return (
		<div className="mx-auto flex size-6 items-center justify-center rounded-md">
			<div className="size-2.5 rounded-xs bg-muted-foreground/25" />
		</div>
	);
}

function NavButton({ direction }: { direction: "previous" | "next" }) {
	const icon = direction === "previous" ? ChevronLeftIcon : ChevronRightIcon;

	return (
		<div className="flex size-5 shrink-0 items-center justify-center">
			<HugeiconsIcon
				icon={icon}
				className="size-3.5 text-muted-foreground"
				strokeWidth={2}
			/>
		</div>
	);
}

function DatePickerAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of date picker parts: Popover root wrapping PopoverTrigger with trigger icon and trigger label, PopoverContent panel containing a Calendar month grid.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-8">
					<AnatomyLabel name="Popover" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-4 overflow-visible rounded-md border border-dashed border-primary/20 p-3 pt-8">
						<AnatomyLabel
							name="PopoverTrigger"
							className="absolute top-2.5 left-2.5"
						/>
						<div className="mt-2 flex items-end gap-6 rounded-md border bg-card px-3 pb-2.5">
							<div className="relative w-fit pt-6">
								<AnatomyLabel
									name="Trigger icon"
									className="absolute top-0 -left-2 whitespace-nowrap"
								/>
								<HugeiconsIcon
									icon={Calendar03Icon}
									className="size-4 text-muted-foreground"
									strokeWidth={2}
								/>
							</div>
							<div className="relative min-w-0 flex-1 pt-7.5 flex gap-2 items-center">
								<ChromeBar className="h-2.5 w-24" />
								<AnatomyLabel
									name="Trigger label"
									className=" top-0 left-10 whitespace-nowrap"
								/>
							</div>
						</div>
					</div>

					<div className="relative mt-4 overflow-visible rounded-md border border-dashed border-primary/20 p-3 pt-8">
						<AnatomyLabel
							name="PopoverContent"
							className="absolute top-2.5 left-2.5"
						/>

						<div className="relative mt-2 overflow-visible rounded-md border border-dashed border-primary/20 bg-card p-3 pt-8">
							<AnatomyLabel
								name="Calendar"
								className="absolute top-2.5 left-2.5"
							/>

							<div className="mt-4 flex items-center justify-between gap-3">
								<NavButton direction="previous" />
								<ChromeBar className="h-2.5 w-14" />
								<NavButton direction="next" />
							</div>

							<div className="mt-4 grid grid-cols-7 gap-1">
								{WEEKDAYS.map((weekday) => (
									<div
										key={weekday}
										className="flex items-center justify-center"
									>
										<ChromeBar tone="subtle" className="h-1.5 w-4" />
									</div>
								))}
							</div>

							<div className="mt-2 space-y-1">
								{WEEKS.map((week) => (
									<div key={week} className="grid grid-cols-7 gap-1">
										{DAYS_BY_WEEK[week].map((day) => (
											<DayCell key={day} />
										))}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { DatePickerAnatomy };

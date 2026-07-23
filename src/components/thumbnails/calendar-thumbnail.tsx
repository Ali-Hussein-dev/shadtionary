import { ChevronLeftIcon, ChevronRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"] as const;
const DAYS = Array.from({ length: 35 }, (_, index) => `day-${index + 1}`);

function DayCell({
	selected = false,
	outside = false,
}: {
	selected?: boolean;
	outside?: boolean;
}) {
	return (
		<div className="flex aspect-square w-full items-center justify-center">
			<div
				className={cn(
					"size-3 rounded-xs",
					selected && "bg-secondary-foreground/60",
					!selected && outside && "bg-muted",
					!selected && !outside && "bg-muted",
				)}
			/>
		</div>
	);
}

function CalendarThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[72%] max-w-52 rounded-lg border bg-card p-2 shadow-sm">
					<div className="flex items-center justify-between">
						<div className="flex size-5 items-center justify-center">
							<HugeiconsIcon
								icon={ChevronLeftIcon}
								className="size-3.5 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>
						<ChromeBar className="h-2.5 w-14" />
						<div className="flex size-5 items-center justify-center">
							<HugeiconsIcon
								icon={ChevronRightIcon}
								className="size-3.5 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>
					</div>

					<div className="mt-3 grid grid-cols-7 justify-items-center gap-0">
						{WEEKDAYS.map((weekday) => (
							<ChromeBar key={weekday} tone="subtle" className="h-1.5 w-4" />
						))}
					</div>

					<div className="mt-2 grid grid-cols-7 justify-items-center gap-0">
						{DAYS.map((day) => {
							const dayNumber = Number(day.replace("day-", ""));
							const isSelected = day === "day-17";
							const isOutside = dayNumber <= 2 || dayNumber >= 33;

							return (
								<DayCell key={day} selected={isSelected} outside={isOutside} />
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export { CalendarThumbnail };

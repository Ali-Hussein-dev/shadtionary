import {
	Calendar03Icon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"] as const;
const DAYS = Array.from({ length: 28 }, (_, index) => `day-${index + 1}`);

function DayCell({ selected = false }: { selected?: boolean }) {
	return (
		<div className="flex aspect-square w-full items-center justify-center">
			<div
				className={cn(
					"size-2.5 rounded-xs",
					selected ? "bg-secondary-foreground/60" : "bg-muted-foreground/25",
				)}
			/>
		</div>
	);
}

function DatePickerThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[78%] max-w-56 space-y-2">
					<div className="flex items-center gap-1.5 rounded-md border bg-card px-2 py-1.5 shadow-sm">
						<HugeiconsIcon
							icon={Calendar03Icon}
							className="size-3 shrink-0 text-muted-foreground"
							strokeWidth={2}
						/>
						<ChromeBar className="h-2 w-16" />
					</div>

					<div className="rounded-lg border bg-card p-2 shadow-sm">
						<div className="flex items-center justify-between">
							<div className="flex size-4 items-center justify-center">
								<HugeiconsIcon
									icon={ChevronLeftIcon}
									className="size-3 text-muted-foreground"
									strokeWidth={2}
								/>
							</div>
							<ChromeBar className="h-2 w-12" />
							<div className="flex size-4 items-center justify-center">
								<HugeiconsIcon
									icon={ChevronRightIcon}
									className="size-3 text-muted-foreground"
									strokeWidth={2}
								/>
							</div>
						</div>

						<div className="mt-2 grid grid-cols-7 justify-items-center gap-0">
							{WEEKDAYS.map((weekday) => (
								<ChromeBar key={weekday} tone="subtle" className="h-1 w-3" />
							))}
						</div>

						<div className="mt-1.5 grid grid-cols-7 justify-items-center gap-0">
							{DAYS.map((day) => (
								<DayCell key={day} selected={day === "day-12"} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { DatePickerThumbnail };

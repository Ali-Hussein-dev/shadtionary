import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function TimelineEntry({
	titleWidth,
	descriptionWidth,
}: {
	titleWidth: string;
	descriptionWidth: string;
}) {
	return (
		<div className="relative flex gap-2.5">
			<div className="flex w-3 shrink-0 flex-col items-center">
				<div className="size-2 rounded-full border-2 border-foreground/30 bg-background" />
			</div>
			<div className="min-w-0 flex-1 space-y-1 pb-3">
				<ChromeBar tone="subtle" className="h-1.5 w-8" />
				<ChromeBar className={`h-2 ${titleWidth}`} />
				<ChromeBar tone="subtle" className={`h-1.5 ${descriptionWidth}`} />
			</div>
		</div>
	);
}

function TimelineThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative w-full rounded-lg bg-secondary p-3">
				<div className="absolute top-4 bottom-4 left-4.25 w-px bg-border" />

				<div className="space-y-0">
					<TimelineEntry titleWidth="w-3/5" descriptionWidth="w-full" />
					<TimelineEntry titleWidth="w-2/5" descriptionWidth="w-4/5" />
					<TimelineEntry titleWidth="w-1/2" descriptionWidth="w-11/12" />
				</div>
			</div>
		</div>
	);
}

export { TimelineThumbnail };

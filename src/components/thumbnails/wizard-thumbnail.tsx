import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const INDICATOR_SIZE = "size-3.5";
const CONNECTOR_FLEX = "flex-[2]";

function StepConnector({
	completed,
	className,
}: {
	completed?: boolean;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"h-px w-full",
				completed ? "bg-foreground/45" : "bg-border",
				className,
			)}
		/>
	);
}

function StepIndicator({
	state,
}: {
	state: "completed" | "active" | "upcoming";
}) {
	return (
		<div
			className={cn(
				"relative z-10 flex shrink-0 items-center justify-center rounded-full bg-secondary",
				INDICATOR_SIZE,
				state === "completed" && "bg-foreground/75",
				state === "active" && "border-2 border-foreground/55 bg-background",
				state === "upcoming" && "border-2 border-foreground/20 bg-background",
			)}
		>
			{state === "completed" ? (
				<HugeiconsIcon
					icon={Tick02Icon}
					className="size-2 text-background"
					strokeWidth={2.5}
					aria-hidden
				/>
			) : state === "active" ? (
				<div className="size-1 rounded-full bg-foreground/55" />
			) : null}
		</div>
	);
}

function WizardThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="w-full rounded-lg border border-border/50 bg-background p-3">
				<div className="rounded-md bg-secondary/80 px-2.5 py-2.5">
					<div className="flex w-full items-center">
						<div className="flex flex-1 justify-center">
							<StepIndicator state="completed" />
						</div>
						<div
							className={cn(
								"flex items-center self-start",
								CONNECTOR_FLEX,
								INDICATOR_SIZE,
							)}
						>
							<StepConnector completed />
						</div>
						<div className="flex flex-1 justify-center">
							<StepIndicator state="active" />
						</div>
						<div
							className={cn(
								"flex items-center self-start",
								CONNECTOR_FLEX,
								INDICATOR_SIZE,
							)}
						>
							<StepConnector />
						</div>
						<div className="flex flex-1 justify-center">
							<StepIndicator state="upcoming" />
						</div>
					</div>

					<div className="mt-1.5 flex w-full">
						<div className="flex flex-1 justify-center">
							<ChromeBar className="h-1 w-7" />
						</div>
						<div className={CONNECTOR_FLEX} />
						<div className="flex flex-1 justify-center">
							<ChromeBar className="h-1 w-8" />
						</div>
						<div className={CONNECTOR_FLEX} />
						<div className="flex flex-1 justify-center">
							<ChromeBar tone="subtle" className="h-1 w-6" />
						</div>
					</div>
				</div>
				<div className="mt-2.5 space-y-2 rounded-md border border-border/40 bg-secondary/40 p-2.5">
					<div className="space-y-1">
						<ChromeBar className="h-1 w-9" />
						<div className="h-5 rounded-md border border-border/70 bg-card shadow-sm" />
					</div>
					<div className="space-y-1">
						<ChromeBar className="h-1 w-7" />
						<div className="h-5 rounded-md border border-border/70 bg-card shadow-sm" />
					</div>
				</div>
				<div className="mt-2.5 flex items-center justify-between gap-2 border-t border-border/40 pt-2.5">
					<ChromeBar tone="subtle" className="h-4 w-9 rounded-md" />
					<div className="flex gap-1.5">
						<ChromeBar tone="subtle" className="h-4 w-9 rounded-md" />
						<ChromeBar className="h-4 w-10 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { WizardThumbnail };

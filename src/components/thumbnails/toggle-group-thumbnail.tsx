import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function ToggleChip({ pressed, wide }: { pressed?: boolean; wide?: boolean }) {
	return (
		<div
			className={cn(
				"flex h-5 items-center justify-center rounded-md shadow-xs",
				wide ? "min-w-8 px-1.5" : "min-w-5 px-1",
				pressed ? "bg-foreground" : "border border-input bg-card",
			)}
		>
			<ChromeBar
				tone={pressed ? "default" : "subtle"}
				className={cn(
					"h-2 rounded-[2px]",
					wide ? "w-4" : "w-2",
					pressed && "bg-background/80",
				)}
			/>
		</div>
	);
}

function ToggleGroupThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[72%] max-w-44 rounded-lg border bg-card p-2.5 shadow-sm">
					<ChromeBar className="mb-2 h-2 w-14" />
					<div className="flex items-center gap-1 rounded-md border border-input bg-secondary/60 p-1">
						<ToggleChip pressed />
						<ToggleChip />
						<ToggleChip pressed />
						<div className="mx-0.5 h-3 w-px bg-border/70" />
						<ToggleChip wide />
					</div>
					<div className="mt-2 space-y-1">
						<ChromeBar className="h-1.5 w-full" />
						<ChromeBar tone="subtle" className="h-1.5 w-10/12" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { ToggleGroupThumbnail };

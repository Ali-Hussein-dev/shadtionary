import { ChromeBar } from "@/components/chrome-bar";
import { CursorSolidIcon } from "@/components/icons/cursor-solid-icon";
import { cn } from "@/lib/utils";

function IconButton({ active }: { active?: boolean }) {
	return (
		<div
			className={cn(
				"flex items-center justify-center rounded-md",
				active ? "bg-muted/90 ring-1 ring-border/70 p-1" : "opacity-60",
			)}
		>
			<ChromeBar
				tone={active ? "default" : "subtle"}
				className="h-2 w-6.5 rounded-[2px]"
			/>
		</div>
	);
}

function HoverCardThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="relative w-[74%] max-w-44">
					<div className="absolute bottom-[calc(100%+10px)] left-1/2 z-10 w-full -translate-x-1/2">
						<div className="rounded-lg border bg-card p-2.5 shadow-lg ring-1 ring-border/50">
							<div className="flex gap-2.5">
								<ChromeBar className="size-8 shrink-0 rounded-full" />
								<div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
									<ChromeBar className="h-2 w-2/5" />
									<div className="space-y-1">
										<ChromeBar tone="subtle" className="h-1.5 w-full" />
										<ChromeBar tone="subtle" className="h-1.5 w-[90%]" />
									</div>
									<ChromeBar tone="subtle" className="h-1 w-[38%] opacity-70" />
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-2.5 py-2 shadow-sm">
						<IconButton />
						<div className="relative">
							<IconButton active />
							<CursorSolidIcon className="absolute top-3 left-3 z-20 size-4 text-foreground drop-shadow-sm" />
						</div>
						<IconButton />
					</div>
				</div>
			</div>
		</div>
	);
}

export { HoverCardThumbnail };

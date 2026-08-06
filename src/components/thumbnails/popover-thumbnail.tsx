import { ChromeBar } from "@/components/chrome-bar";
import { CursorSolidIcon } from "@/components/icons/cursor-solid-icon";
import { cn } from "@/lib/utils";

function PopoverThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[74%] max-w-44 space-y-2">
					<div className="relative w-fit">
						<div className="flex items-center gap-1.5 rounded-md border bg-card px-2.5 py-1.5 shadow-sm ring-1 ring-border/70">
							<ChromeBar className="h-2 w-10" />
						</div>
						<CursorSolidIcon className="absolute top-2.5 left-6 z-20 size-4 text-foreground drop-shadow-sm" />
					</div>

					<div className="rounded-lg border bg-card p-2 shadow-lg ring-1 ring-border/50">
						<div className="space-y-1.5">
							<ChromeBar className="h-2 w-2/5" />
							<ChromeBar tone="subtle" className="h-1.5 w-full" />
						</div>
						<div className="mt-2.5 space-y-1.5">
							<ChromeBar tone="subtle" className="h-1.5 w-1/3" />
							<div className="rounded-md border bg-muted/40 px-2 py-1.5">
								<ChromeBar className="h-2 w-full" />
							</div>
						</div>
						<div className="mt-2.5 flex justify-end gap-1.5">
							<ChromeBar tone="subtle" className="h-4 w-8 rounded-md" />
							<ChromeBar className="h-4 w-10 rounded-md" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { PopoverThumbnail };

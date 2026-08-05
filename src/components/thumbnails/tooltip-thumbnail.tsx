import { Cursor01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function IconButton({ active }: { active?: boolean }) {
	return (
		<div
			className={cn(
				"flex size-6 items-center justify-center rounded-md",
				active ? "bg-muted/90 ring-1 ring-border/70" : "opacity-60",
			)}
		>
			<ChromeBar
				tone={active ? "default" : "subtle"}
				className="size-2.5 rounded-sm"
			/>
		</div>
	);
}

function TooltipThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="relative w-[74%] max-w-44">
					<div className="absolute bottom-[calc(100%-2px)] left-1/2 z-10 -translate-x-1/2">
						<div className="relative rounded-md bg-foreground px-2.5 py-1.5 shadow-md">
							<ChromeBar className="h-1.5 w-12 bg-background/85" />
							<div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-[1px] bg-foreground" />
						</div>
					</div>

					<div className="flex items-center justify-center gap-1.5 rounded-lg border bg-card px-2.5 py-2 shadow-sm">
						<IconButton />
						<div className="relative">
							<IconButton active />
							<HugeiconsIcon
								icon={Cursor01Icon}
								className="absolute top-3 left-3 z-20 size-4 text-foreground drop-shadow-sm"
								strokeWidth={2}
							/>
						</div>
						<IconButton />
					</div>
				</div>
			</div>
		</div>
	);
}

export { TooltipThumbnail };

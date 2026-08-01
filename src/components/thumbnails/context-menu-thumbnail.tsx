import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function ContextMenuThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="relative w-[78%] max-w-48">
					<div className="flex h-16 items-center justify-center rounded-md border border-dashed border-muted-foreground/35 bg-muted/40">
						<ChromeBar tone="subtle" className="h-1.5 w-12" />
					</div>

					<div className="absolute top-8 left-[18%] w-[72%] rounded-lg border bg-card p-1.5 shadow-md">
						<div className="space-y-1">
							<div className="flex items-center justify-between gap-1.5 rounded-md bg-muted/80 px-1.5 py-1">
								<ChromeBar className="h-1.5 w-12" />
								<ChromeBar tone="subtle" className="h-1.5 w-5" />
							</div>
							<div className="flex items-center gap-1.5 rounded-md px-1.5 py-1">
								<ChromeBar tone="subtle" className="h-1.5 w-10" />
							</div>
							<div className="mx-1 my-0.5 h-px bg-border" />
							<div className="flex items-center justify-between gap-1.5 rounded-md px-1.5 py-1">
								<ChromeBar tone="subtle" className="h-1.5 w-11" />
								<HugeiconsIcon
									icon={ArrowDown01Icon}
									className="size-2.5 shrink-0 -rotate-90 text-muted-foreground"
									strokeWidth={2}
								/>
							</div>
							<div className="flex items-center gap-1.5 rounded-md px-1.5 py-1">
								<ChromeBar tone="subtle" className="h-1.5 w-9" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { ContextMenuThumbnail };

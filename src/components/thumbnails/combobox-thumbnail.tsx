import {
	Search01Icon,
	Tick02Icon,
	UnfoldMoreIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function ComboboxThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[74%] max-w-44 space-y-1.5">
					<div className="flex items-center gap-1.5 rounded-md border bg-card px-2 py-1.5 shadow-sm">
						<HugeiconsIcon
							icon={Search01Icon}
							className="size-3 shrink-0 text-muted-foreground"
							strokeWidth={2}
						/>
						<ChromeBar className="h-2 w-12" />
						<div className="ml-auto flex shrink-0 items-center gap-1">
							<HugeiconsIcon
								icon={UnfoldMoreIcon}
								className="size-3 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>
					</div>

					<div className="rounded-lg border bg-card p-1.5 shadow-sm">
						<div className="space-y-1">
							<div className="flex items-center justify-between gap-1.5 rounded-md bg-muted/80 px-1.5 py-1">
								<ChromeBar className="h-1.5 w-12" />
								<HugeiconsIcon
									icon={Tick02Icon}
									className="size-2.5 shrink-0 text-muted-foreground"
									strokeWidth={2.5}
								/>
							</div>
							<div className="flex items-center gap-1.5 rounded-md px-1.5 py-1 opacity-55">
								<ChromeBar tone="subtle" className="h-1.5 w-10" />
							</div>
							<div className="flex items-center gap-1.5 rounded-md px-1.5 py-1 opacity-40">
								<ChromeBar tone="subtle" className="h-1.5 w-9" />
							</div>
							<div className="mx-1 my-0.5 h-px bg-border" />
							<div className="flex items-center gap-1.5 rounded-md px-1.5 py-1 opacity-35">
								<ChromeBar tone="subtle" className="h-1.5 w-11" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { ComboboxThumbnail };

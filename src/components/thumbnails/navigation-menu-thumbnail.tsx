import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function NavigationMenuThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[88%] max-w-56">
					<div className="flex items-center gap-1 rounded-lg border bg-card px-1.5 py-1 shadow-sm">
						<div className="flex items-center gap-1 rounded-md bg-muted/80 px-1.5 py-1">
							<ChromeBar className="h-1.5 w-8" />
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className="size-2.5 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>
						<div className="flex items-center gap-1 rounded-md px-1.5 py-1">
							<ChromeBar tone="subtle" className="h-1.5 w-10" />
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className="size-2.5 shrink-0 text-muted-foreground/70"
								strokeWidth={2}
							/>
						</div>
						<div className="rounded-md px-1.5 py-1">
							<ChromeBar tone="subtle" className="h-1.5 w-7" />
						</div>
					</div>

					<div className="mt-1.5 rounded-lg border bg-card p-2 shadow-sm">
						<div className="grid grid-cols-[0.85fr_1.15fr] gap-2">
							<div className="flex flex-col justify-end rounded-md bg-muted/60 p-2">
								<ChromeBar className="mb-1.5 h-2 w-10" />
								<ChromeBar tone="subtle" className="h-1.5 w-full" />
								<ChromeBar tone="subtle" className="mt-1 h-1.5 w-4/5" />
							</div>
							<div className="space-y-1.5">
								<div className="rounded-md px-1 py-1">
									<ChromeBar className="h-1.5 w-12" />
									<ChromeBar tone="subtle" className="mt-1 h-1 w-full" />
								</div>
								<div className="rounded-md bg-muted/70 px-1 py-1">
									<ChromeBar className="h-1.5 w-14" />
									<ChromeBar tone="subtle" className="mt-1 h-1 w-5/6" />
								</div>
								<div className="rounded-md px-1 py-1">
									<ChromeBar className="h-1.5 w-10" />
									<ChromeBar tone="subtle" className="mt-1 h-1 w-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { NavigationMenuThumbnail };

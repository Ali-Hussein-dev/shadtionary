import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function TabsThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="w-full rounded-lg bg-secondary p-4">
				<div className="flex items-end gap-4 border-b border-border/60">
					<div className="relative pb-2">
						<ChromeBar className="h-2 w-10" />
						<div className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-foreground/40" />
					</div>
					<div className="pb-2">
						<ChromeBar tone="subtle" className="h-2 w-8" />
					</div>
					<div className="pb-2">
						<ChromeBar tone="subtle" className="h-2 w-9" />
					</div>
				</div>

				<div className="mt-3 space-y-1.5">
					<ChromeBar className="h-2 w-full" />
					<ChromeBar tone="subtle" className="h-2 w-10/12" />
					<ChromeBar className="h-2 w-4/5" />
				</div>
			</div>
		</div>
	);
}

export { TabsThumbnail };

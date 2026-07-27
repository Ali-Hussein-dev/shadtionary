import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function SheetThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative aspect-5/3 w-full overflow-hidden rounded-lg bg-muted">
				<div className="absolute inset-0 bg-secondary" />
				<ChromeBar tone="subtle" className="absolute top-3 left-4 h-2 w-1/3" />
				<ChromeBar tone="subtle" className="absolute top-7 left-4 h-2 w-2/5" />
				<ChromeBar className="absolute top-11 left-4 h-2 w-1/4" />
				<ChromeBar tone="subtle" className="absolute top-16 left-4 h-2 w-3/5" />
				<ChromeBar tone="subtle" className="absolute top-20 left-4 h-2 w-2/5" />

				<div className="absolute inset-y-0 right-0 w-[42%] border-l bg-card p-3 shadow-lg">
					<div className="absolute top-2 right-2 flex size-4 items-center justify-center rounded-full border">
						<HugeiconsIcon
							icon={Cancel01Icon}
							strokeWidth={3}
							className="size-2.5 text-muted-foreground"
						/>
					</div>
					<div className="space-y-2 pr-4">
						<ChromeBar className="h-2.5 w-3/5" />
						<ChromeBar tone="subtle" className="h-2 w-full" />
						<ChromeBar className="h-2 w-4/5" />
					</div>
					<div className="mt-3 space-y-1.5">
						<ChromeBar tone="subtle" className="h-2 w-full" />
						<ChromeBar className="h-2 w-11/12" />
					</div>
					<div className="absolute inset-x-3 bottom-3 flex justify-end gap-1.5">
						<ChromeBar tone="subtle" className="h-4 w-8 rounded-md" />
						<ChromeBar className="h-4 w-8 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { SheetThumbnail };

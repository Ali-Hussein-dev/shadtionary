import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function DrawerThumbnail({ className }: { className?: string }) {
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

				<div className="absolute inset-x-0 bottom-0 rounded-t-lg border-t bg-card p-3 pt-2 shadow-lg">
					<ChromeBar
						tone="subtle"
						className="mx-auto mb-2 h-1 w-10 rounded-full"
					/>
					<div className="space-y-2">
						<ChromeBar className="h-2.5 w-2/5" />
						<ChromeBar tone="subtle" className="h-2 w-full" />
						<ChromeBar className="h-2 w-4/5" />
					</div>
					<div className="mt-3 flex justify-end gap-1.5">
						<ChromeBar tone="subtle" className="h-4 w-10 rounded-md" />
						<ChromeBar className="h-4 w-10 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { DrawerThumbnail };

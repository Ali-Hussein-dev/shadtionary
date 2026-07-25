import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function AlertThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="w-full rounded-lg bg-secondary p-3">
				<div className="flex gap-2 rounded-lg border bg-card p-2.5">
					<ChromeBar
						tone="subtle"
						className="mt-0.5 size-3 shrink-0 rounded-sm"
					/>
					<div className="min-w-0 flex-1 space-y-1.5">
						<ChromeBar className="h-2 w-2/5" />
						<ChromeBar tone="subtle" className="h-1.5 w-full" />
						<ChromeBar tone="subtle" className="h-1.5 w-4/5" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { AlertThumbnail };

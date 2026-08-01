import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function TextareaThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[68%] max-w-40 space-y-1.5">
					<ChromeBar className="h-2 w-16" />
					<div className="rounded-md border bg-card px-2 py-2 shadow-sm">
						<div className="space-y-1">
							<ChromeBar tone="subtle" className="h-1.5 w-full" />
							<ChromeBar tone="subtle" className="h-1.5 w-[85%]" />
							<ChromeBar tone="subtle" className="h-1.5 w-[70%]" />
						</div>
					</div>
					<ChromeBar tone="subtle" className="h-1.5 w-28" />
				</div>
			</div>
		</div>
	);
}

export { TextareaThumbnail };

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function SliderThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[72%] max-w-44 space-y-1.5 rounded-lg border bg-card p-2.5 shadow-sm">
					<ChromeBar className="h-2 w-14" />
					<div className="relative h-1.5 w-full rounded-full bg-input">
						<div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-foreground" />
						<div className="absolute top-1/2 left-2/3 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-card shadow-sm" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { SliderThumbnail };

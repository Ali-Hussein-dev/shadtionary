import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function DateInputThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="relative flex w-[72%] max-w-48 items-center rounded-md border bg-card px-2 py-1.5 shadow-sm">
					<HugeiconsIcon
						icon={Calendar03Icon}
						className="size-3 shrink-0 text-muted-foreground"
						strokeWidth={2}
					/>
					<div className="ml-2 flex flex-1 items-center gap-1">
						<ChromeBar className="h-2 w-7" />
						<ChromeBar tone="subtle" className="h-1 w-1 rounded-full" />
						<ChromeBar className="h-2 w-5" />
						<ChromeBar tone="subtle" className="h-1 w-1 rounded-full" />
						<ChromeBar className="h-2 w-6" />
					</div>
					<ChromeBar tone="subtle" className="ml-1.5 h-3 w-3 rounded-sm" />
				</div>
			</div>
		</div>
	);
}

export { DateInputThumbnail };

import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function DialogThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative aspect-5/3 w-full overflow-hidden rounded-lg bg-muted">
				<div className="absolute inset-0 bg-secondary" />

				<div className="absolute inset-x-5 top-1/2 -translate-y-1/2 rounded-lg border bg-card p-3 shadow">
					<div className="absolute top-2 right-2 size-4 rounded-full flex items-center justify-center border">
						<HugeiconsIcon
							icon={Cancel01Icon}
							strokeWidth={3}
							className="size-2.5 text-muted-foreground"
						/>
					</div>
					<div className="space-y-2 pr-4">
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

export { DialogThumbnail };

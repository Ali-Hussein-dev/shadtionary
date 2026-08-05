import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";


function ImageChrome({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative aspect-video w-full overflow-hidden rounded-sm bg-card shadow-2xl",
				className,
			)}
		>
			<div className="absolute inset-x-0 top-0 h-2/5 bg-muted/60" />
			<div className="absolute bottom-0 left-1/2 h-1/2 w-[120%] -translate-x-1/2 rounded-t-[100%] bg-muted" />
			<div className="absolute top-2 right-2 size-2 rounded-full bg-muted-foreground/20" />
		</div>
	);
}

function LightboxThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary">
				<div className="absolute inset-0 bg-foreground/25 dark:bg-foreground/15" />

				<div className="absolute top-2 right-2 flex size-4 items-center justify-center rounded-full border bg-card/90 shadow-sm">
					<HugeiconsIcon
						icon={Cancel01Icon}
						strokeWidth={3}
						className="size-2.5 text-muted-foreground"
					/>
				</div>

				<div className="absolute inset-x-6 top-1/2 -translate-y-1/2">
					<ImageChrome />
				</div>
			</div>
		</div>
	);
}

export { LightboxThumbnail };

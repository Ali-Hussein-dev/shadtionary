import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
	Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

function GalleryTile({ className }: { className?: string }) {
	return (
		<div className={cn("aspect-square rounded-sm bg-muted", className)} />
	);
}

function ImageChrome({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative aspect-4/3 w-full overflow-hidden rounded-sm bg-card shadow-2xl",
				className,
			)}
		>
			<div className="absolute inset-x-0 top-0 h-2/5 bg-muted/60" />
			<div className="absolute bottom-0 left-1/2 h-1/2 w-[120%] -translate-x-1/2 rounded-t-[100%] bg-muted" />
			<div className="absolute top-3 right-3 size-2.5 rounded-full bg-muted-foreground/20" />
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
				<div className="absolute inset-0 p-2.5">
					<div className="grid grid-cols-4 gap-1.5">
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
						<GalleryTile />
					</div>
				</div>

				<div className="absolute inset-0 bg-foreground/55" />

				<div className="absolute top-2 right-2 flex size-4 items-center justify-center rounded-full border bg-card/90 shadow-sm">
					<HugeiconsIcon
						icon={Cancel01Icon}
						strokeWidth={3}
						className="size-2.5 text-muted-foreground"
					/>
				</div>

				<div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
					<div className="flex size-5 shrink-0 items-center justify-center rounded-full border bg-card/90 shadow-sm">
						<HugeiconsIcon
							icon={ArrowLeft01Icon}
							strokeWidth={2.5}
							className="size-2.5 text-muted-foreground"
						/>
					</div>

					<div className="min-w-0 flex-1 px-0.5">
						<ImageChrome />
					</div>

					<div className="flex size-5 shrink-0 items-center justify-center rounded-full border bg-card/90 shadow-sm">
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							strokeWidth={2.5}
							className="size-2.5 text-muted-foreground"
						/>
					</div>
				</div>

				<div
					aria-hidden
					className="absolute inset-x-0 bottom-2 flex justify-center gap-1"
				>
					<span className="size-1 rounded-full bg-card" />
					<span className="size-1 rounded-full bg-card/45" />
					<span className="size-1 rounded-full bg-card/45" />
				</div>
			</div>
		</div>
	);
}

export { LightboxThumbnail };

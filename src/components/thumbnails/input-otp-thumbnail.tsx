import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function OtpSlot({
	active,
	filled,
}: {
	active?: boolean;
	filled?: boolean;
}) {
	return (
		<div
			className={cn(
				"flex size-6 items-center justify-center rounded-sm border bg-card shadow-xs",
				active ? "border-foreground ring-1 ring-ring" : "border-input",
			)}
		>
			{filled ? <ChromeBar className="h-2 w-2" /> : null}
			{active && !filled ? (
				<div className="h-2.5 w-px bg-foreground" />
			) : null}
		</div>
	);
}

function InputOtpThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="flex items-center gap-1">
					<OtpSlot filled />
					<OtpSlot filled />
					<OtpSlot active />
					<div className="mx-0.5 h-0.5 w-2 rounded-full bg-muted-foreground/40" />
					<OtpSlot />
					<OtpSlot />
					<OtpSlot />
				</div>
			</div>
		</div>
	);
}

export { InputOtpThumbnail };

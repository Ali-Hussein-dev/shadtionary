import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function RadioRow({
	selected,
	labelWidth,
}: {
	selected?: boolean;
	labelWidth: string;
}) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={cn(
					"flex size-3.5 shrink-0 items-center justify-center rounded-full border shadow-xs",
					selected ? "border-foreground" : "border-input bg-card",
				)}
			>
				{selected ? (
					<div className="size-1.5 rounded-full bg-foreground" />
				) : null}
			</div>
			<ChromeBar
				tone={selected ? "default" : "subtle"}
				className={cn("h-2", labelWidth)}
			/>
		</div>
	);
}

function RadioGroupThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[68%] max-w-40 space-y-2 rounded-lg border bg-card p-2.5 shadow-sm">
					<ChromeBar className="h-2 w-16" />
					<RadioRow selected labelWidth="w-20" />
					<RadioRow labelWidth="w-24" />
					<RadioRow labelWidth="w-28" />
				</div>
			</div>
		</div>
	);
}

export { RadioGroupThumbnail };

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function SwitchTrack({ checked }: { checked?: boolean }) {
	return (
		<div
			className={cn(
				"relative h-3.5 w-6 shrink-0 rounded-full shadow-xs transition-colors",
				checked ? "bg-foreground" : "bg-input",
			)}
		>
			<div
				className={cn(
					"absolute top-0.5 size-2.5 rounded-full bg-card shadow-sm transition-transform",
					checked ? "translate-x-[calc(100%-2px)]" : "translate-x-0.5",
				)}
			/>
		</div>
	);
}

function SwitchRow({
	checked,
	labelWidth,
}: {
	checked?: boolean;
	labelWidth: string;
}) {
	return (
		<div className="flex items-center justify-between gap-2">
			<ChromeBar
				tone={checked ? "default" : "subtle"}
				className={cn("h-2", labelWidth)}
			/>
			<SwitchTrack checked={checked} />
		</div>
	);
}

function SwitchThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[68%] max-w-40 space-y-2 rounded-lg border bg-card p-2.5 shadow-sm">
					<ChromeBar className="h-2 w-16" />
					<SwitchRow checked labelWidth="w-20" />
					<SwitchRow labelWidth="w-24" />
					<SwitchRow checked labelWidth="w-16" />
				</div>
			</div>
		</div>
	);
}

export { SwitchThumbnail };

import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function CheckboxRow({
	checked,
	labelWidth,
}: {
	checked?: boolean;
	labelWidth: string;
}) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={cn(
					"flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border shadow-xs",
					checked
						? "border-foreground bg-foreground text-background"
						: "border-input bg-card",
				)}
			>
				{checked ? (
					<HugeiconsIcon
						icon={Tick02Icon}
						className="size-2.5"
						strokeWidth={3}
					/>
				) : null}
			</div>
			<ChromeBar
				tone={checked ? "default" : "subtle"}
				className={cn("h-2", labelWidth)}
			/>
		</div>
	);
}

function CheckboxGroupThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full items-center justify-center">
				<div className="w-[68%] max-w-40 space-y-2 rounded-lg border bg-card p-2.5 shadow-sm">
					<ChromeBar className="h-2 w-16" />
					<CheckboxRow checked labelWidth="w-20" />
					<CheckboxRow checked labelWidth="w-24" />
					<CheckboxRow labelWidth="w-28" />
				</div>
			</div>
		</div>
	);
}

export { CheckboxGroupThumbnail };

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const gridCols = "grid-cols-[auto_1fr_1fr_1fr]";
const cellClass = "flex items-center px-2.5 py-1.5";

function ColumnGuides() {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-0 grid",
				gridCols,
			)}
		>
			<div className="w-7 border-r border-border/55 bg-foreground/[0.02]" />
			<div className="border-r border-border/55" />
			<div className="border-r border-border/55 bg-foreground/[0.02]" />
			<div className="border-r border-border/55" />
		</div>
	);
}

function DataTableRow({
	cells,
	tone = "default",
	className,
}: {
	cells: string[];
	tone?: "default" | "subtle";
	className?: string;
}) {
	return (
		<div
			className={cn("grid border-t border-border/50", gridCols, className)}
		>
			<div className={cn(cellClass, "w-7 justify-center")}>
				<ChromeBar tone={tone} className="size-2 rounded-full" />
			</div>
			{cells.map((width, index) => (
				<div key={`${width}-${index}`} className={cellClass}>
					<ChromeBar tone={tone} className={`h-1.5 w-fit ${width}`} />
				</div>
			))}
		</div>
	);
}

function DataTableThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="w-full overflow-hidden rounded-lg border border-border/60 bg-secondary">
				<div className="relative">
					<ColumnGuides />

					<div
						className={cn(
							"relative grid border-b border-border/60 bg-muted/40",
							gridCols,
						)}
					>
						<div aria-hidden className="w-7" />
						<div className={cellClass}>
							<ChromeBar className="h-2 w-8" />
						</div>
						<div className={cellClass}>
							<ChromeBar className="h-2 w-10" />
						</div>
						<div className={cellClass}>
							<ChromeBar className="h-2 w-7" />
						</div>
					</div>

					<DataTableRow cells={["w-8", "w-12", "w-7"]} />
					<DataTableRow cells={["w-7", "w-10", "w-8"]} tone="subtle" />
					<DataTableRow cells={["w-9", "w-11", "w-6"]} />
					<DataTableRow cells={["w-6", "w-9", "w-9"]} tone="subtle" />
				</div>

				<div className="flex items-center justify-end gap-1 border-t border-border/50 px-2.5 py-1.5">
					<ChromeBar tone="subtle" className="h-3 w-6 rounded-sm" />
					<ChromeBar tone="subtle" className="h-3 w-6 rounded-sm" />
				</div>
			</div>
		</div>
	);
}

export { DataTableThumbnail };

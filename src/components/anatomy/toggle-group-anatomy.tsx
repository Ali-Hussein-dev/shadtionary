import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function ToggleItemChrome({
	pressed,
	className,
}: {
	pressed?: boolean;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex h-7 min-w-7 items-center justify-center rounded-md px-1.5 shadow-xs",
				pressed ? "bg-primary" : "border border-input bg-card",
				className,
			)}
		>
			<ChromeBar
				className={cn("h-2 w-2 rounded-[2px]", pressed && "bg-background/80")}
			/>
		</div>
	);
}

function ToggleGroupAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of toggle group parts: ToggleGroup root container with ToggleGroupItem segments, including pressed and unpressed items with optional icon chrome.">
			<AnatomySection>
				<div className="relative w-fit rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel
						name="ToggleGroup"
						className="absolute top-2.5 left-2.5 whitespace-nowrap"
					/>

					<div className="relative mt-4 flex items-center gap-1 rounded-md border border-input bg-background/60 p-1">
						<div className="relative">
							<AnatomyLabel
								name="ToggleGroupItem"
								className="absolute -top-6 left-0 whitespace-nowrap"
							/>
							<ToggleItemChrome pressed />
						</div>
						<ToggleItemChrome />
						<ToggleItemChrome pressed />
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { ToggleGroupAnatomy };

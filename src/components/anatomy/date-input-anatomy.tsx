import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function DateInputAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of date input parts: Input field with optional calendar Icon, Value segments for the selected date, and Picker button that opens the native OS date picker.">
			<AnatomySection>
				<div className="relative overflow-visible rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel name="Input" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-4 flex items-center rounded-md border bg-card px-3 py-2">
						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="Icon"
								className="absolute top-0 -left-1 whitespace-nowrap"
							/>
							<HugeiconsIcon
								icon={Calendar03Icon}
								className="size-3.5 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>

						<div className="relative ml-5 flex flex-1 items-center gap-2 pt-6 pb-0.5">
							<AnatomyLabel
								name="Value"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2.5 w-10" />
							<ChromeBar tone="subtle" className="size-1 rounded-full" />
							<ChromeBar className="h-2.5 w-8" />
							<ChromeBar tone="subtle" className="size-1 rounded-full" />
							<ChromeBar className="h-2.5 w-9" />
						</div>

						<div className="relative ml-2 w-fit pt-6">
							<AnatomyLabel
								name="Picker button"
								className="absolute top-0 right-0 whitespace-nowrap"
							/>
							<ChromeBar
								tone="subtle"
								className="h-4 w-4 shrink-0 rounded-sm"
							/>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { DateInputAnatomy };

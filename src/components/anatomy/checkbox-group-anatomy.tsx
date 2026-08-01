import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function CheckboxGroupAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of checkbox group parts: FieldSet container with Legend heading, multiple Checkbox controls with CheckboxIndicator marks, and Label chrome bars for each option.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel name="FieldSet" className="absolute top-2.5 left-2.5" />

					<div className="mt-4 space-y-4">
						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="Legend"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2.5 w-24" />
						</div>

						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<div className="relative flex size-5 items-center justify-center rounded-[4px] border border-primary bg-primary text-primary-foreground shadow-xs">
									<div className="relative flex items-center justify-center pt-5">
										<AnatomyLabel
											name="CheckboxIndicator"
											className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
										/>
										<HugeiconsIcon
											icon={Tick02Icon}
											className="size-3.5"
											strokeWidth={2.5}
										/>
									</div>
								</div>
								<div className="relative w-fit pt-6">
									<AnatomyLabel
										name="Label"
										className="absolute top-0 left-0 whitespace-nowrap"
									/>
									<ChromeBar className="h-2.5 w-24" />
								</div>
							</div>

							<div className="flex items-center gap-3 opacity-70">
								<div className="relative">
									<AnatomyLabel
										name="Checkbox"
										className="absolute -top-5 left-0 whitespace-nowrap"
									/>
									<div className="size-5 rounded-[4px] border border-input bg-card shadow-xs" />
								</div>
								<ChromeBar tone="subtle" className="h-2.5 w-20" />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { CheckboxGroupAnatomy };

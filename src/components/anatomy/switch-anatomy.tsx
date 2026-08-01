import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function SwitchAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of switch parts: Label chrome bar beside a Root track with a Thumb handle showing the on state.">
			<AnatomySection>
				<div className="relative flex items-center justify-between gap-6 rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<div className="relative w-fit pt-6">
						<AnatomyLabel
							name="Label"
							className="absolute top-0 left-0 whitespace-nowrap"
						/>
						<ChromeBar className="h-2.5 w-28" />
					</div>

					<div className="relative flex h-6 w-11 items-center rounded-full bg-primary px-0.5 shadow-xs">
						<AnatomyLabel
							name="Root"
							className="absolute -top-6 right-0 whitespace-nowrap"
						/>
						<div className="relative ml-auto size-5 rounded-full bg-background shadow-sm">
							<AnatomyLabel
								name="Thumb"
								className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
							/>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { SwitchAnatomy };

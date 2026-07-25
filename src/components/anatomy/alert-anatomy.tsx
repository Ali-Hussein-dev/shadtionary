import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function LabeledBar({
	label,
	width,
	tone = "default",
	height = "h-2.5",
}: {
	label: string;
	width: string;
	tone?: "default" | "subtle";
	height?: string;
}) {
	return (
		<div className="relative w-fit pt-6">
			<AnatomyLabel name={label} className="absolute top-0 left-0" />
			<ChromeBar tone={tone} className={`${height} ${width}`} />
		</div>
	);
}

function AlertAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of alert parts: Alert root container with optional Icon, AlertTitle, AlertDescription, and optional AlertAction control.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-card p-4 pt-8">
					<AnatomyLabel name="Alert" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-4 flex gap-3 pr-16">
						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="Icon"
								className="absolute top-0 -left-1 whitespace-nowrap"
							/>
							<ChromeBar tone="subtle" className="size-4 shrink-0 rounded-sm" />
						</div>

						<div className="min-w-0 flex-1 space-y-5">
							<LabeledBar label="AlertTitle" width="w-24" />
							<LabeledBar
								label="AlertDescription"
								width="w-36"
								tone="subtle"
								height="h-2"
							/>
						</div>

						<div className="absolute top-4 right-0 w-fit pt-6">
							<AnatomyLabel
								name="AlertAction"
								className="absolute top-0 right-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-5 w-10 rounded-md" />
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { AlertAnatomy };

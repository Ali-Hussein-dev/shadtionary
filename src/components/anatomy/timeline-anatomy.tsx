import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function LabeledBar({
	label,
	width,
	tone = "default",
	height = "h-2",
}: {
	label: string;
	width: string;
	tone?: "default" | "subtle";
	height?: string;
}) {
	return (
		<div className="flex w-fit flex-col gap-2">
			<AnatomyLabel name={label} />
			<ChromeBar tone={tone} className={`${height} ${width}`} />
		</div>
	);
}

function TimelineAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of timeline parts: TimelineItem row, TimelineMarker on the spine, connector line, and TimelineContent with TimelineTitle, TimelineDescription, and TimelineTime.">
			<AnatomySection className="relative p-4 pt-10">
				<AnatomyLabel name="TimelineItem" className="absolute top-3 left-3" />

				<div className="flex gap-6">
					<div className="flex shrink-0">
						<div className="flex flex-col pr-3">
							<div className="flex h-3 items-center">
								<AnatomyLabel
									name="TimelineMarker"
									className="whitespace-nowrap"
								/>
							</div>
							<div className="flex h-24 items-center">
								<AnatomyLabel
									name="Connector"
									className="whitespace-nowrap"
								/>
							</div>
						</div>
						<div className="flex w-3 flex-col items-center">
							<div className="size-3 shrink-0 rounded-full border-2 border-primary/40 bg-background" />
							<div className="mt-1.5 h-24 w-px bg-primary/25" />
						</div>
					</div>

					<div className="relative min-w-0 flex-1 rounded-md border border-dashed border-primary/20 p-4 pt-10">
						<AnatomyLabel
							name="TimelineContent"
							className="absolute top-3 right-3"
						/>

						<div className="space-y-5">
							<LabeledBar
								label="TimelineTime"
								width="w-16"
								tone="subtle"
								height="h-1.5"
							/>
							<LabeledBar label="TimelineTitle" width="w-24" />
							<LabeledBar
								label="TimelineDescription"
								width="w-full"
								tone="subtle"
								height="h-1.5"
							/>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { TimelineAnatomy };

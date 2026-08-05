import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function HoverCardAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of hover card parts: HoverCard root wrapping HoverCardTrigger and HoverCardContent preview panel with avatar and text lines.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel name="HoverCard" className="absolute top-2 left-2.5" />

					<div className="relative mt-2 flex flex-col items-center">
						<div className="relative mb-2 w-full max-w-56 pt-7">
							<AnatomyLabel
								name="HoverCardContent"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<div className="rounded-lg border bg-card p-2.5 shadow-sm">
								<div className="flex gap-2">
									<ChromeBar className="size-7 shrink-0 rounded-full" />
									<div className="min-w-0 flex-1 space-y-1.5">
										<ChromeBar className="h-2 w-2/5" />
										<ChromeBar tone="subtle" className="h-1.5 w-full" />
										<ChromeBar tone="subtle" className="h-1.5 w-4/5" />
									</div>
								</div>
							</div>
						</div>

						<div className="relative w-fit pt-7">
							<AnatomyLabel
								name="HoverCardTrigger"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<div className="rounded-md border bg-card px-3 py-1.5 shadow-sm">
								<ChromeBar className="h-2 w-12" />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { HoverCardAnatomy };

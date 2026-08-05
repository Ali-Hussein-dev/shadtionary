import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function TooltipAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of tooltip parts: TooltipProvider wrapping Tooltip root with TooltipTrigger and TooltipContent label panel with Arrow pointer.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel
						name="TooltipProvider"
						className="absolute top-2 left-2.5"
					/>

					<div className="relative mt-2 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel name="Tooltip" className="absolute top-2 left-2.5" />

						<div className="relative flex flex-col items-center">
							<div className="relative mb-2 w-fit pt-7">
								<AnatomyLabel
									name="TooltipContent"
									className="absolute top-0 left-0 whitespace-nowrap"
								/>
								<div className="relative rounded-md bg-foreground px-2.5 py-1.5 shadow-sm">
									<ChromeBar className="h-2 w-14 bg-background/80" />
									<div className="absolute top-full left-1/2 flex -translate-x-1/2 -translate-y-1/2">
										<AnatomyLabel
											name="Arrow"
											className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
										/>
										<div className="size-2 rotate-45 bg-foreground" />
									</div>
								</div>
							</div>

							<div className="relative w-fit pt-7">
								<AnatomyLabel
									name="TooltipTrigger"
									className="absolute top-0 left-0 whitespace-nowrap"
								/>
								<div className="flex items-center justify-center rounded-md border bg-card px-3 py-2 shadow-sm">
									<ChromeBar className="size-3.5 rounded-sm" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { TooltipAnatomy };

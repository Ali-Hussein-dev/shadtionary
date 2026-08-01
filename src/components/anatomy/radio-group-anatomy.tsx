import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function RadioGroupAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of radio group parts: FieldSet container with Legend heading, RadioGroup root, RadioGroupItem controls with Indicator dots, and Label chrome bars for each option.">
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

						<div className="relative rounded-md border border-dashed border-primary/15 p-3 pt-7">
							<AnatomyLabel
								name="RadioGroup"
								className="absolute top-2 left-2.5 whitespace-nowrap"
							/>

							<div className="mt-1 space-y-3">
								<div className="flex items-center gap-3">
									<div className="relative flex size-5 items-center justify-center rounded-full border border-primary shadow-xs">
										<div className="relative flex items-center justify-center pt-5">
											<AnatomyLabel
												name="Indicator"
												className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
											/>
											<div className="size-2.5 rounded-full bg-primary" />
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
											name="RadioGroupItem"
											className="absolute -top-5 left-0 whitespace-nowrap"
										/>
										<div className="size-5 rounded-full border border-input bg-card shadow-xs" />
									</div>
									<ChromeBar tone="subtle" className="h-2.5 w-20" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { RadioGroupAnatomy };
